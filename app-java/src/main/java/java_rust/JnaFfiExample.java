package java_rust;

import com.sun.jna.Native;
import com.sun.jna.Pointer;
import commands.Commands.UppercaseText;
import message_ffi.MessageFfi.MessageEnvelope;

import java.lang.reflect.Field;
import java.nio.ByteBuffer;

import static java.util.Objects.requireNonNull;
import static java_rust.ProtoFfiHelper.*;

public class JnaFfiExample {

    public interface AppRust extends BasicProtoFfi {
        void initialize();
    }

    public static AppRust rust;

    static {
        String nativeLibsPath = requireNonNull(JnaFfiExample.class.getResource("/libapp_native.dylib"))
                .getFile().replace("libapp_native.dylib", "");

        System.setProperty("java.library.path", nativeLibsPath);
        try {
            // java.library.path gets cached, this causes it to re-load.
            Field fieldSysPath;
            fieldSysPath = ClassLoader.class.getDeclaredField("sys_paths");
            fieldSysPath.setAccessible(true);
            fieldSysPath.set(null, null);

            System.loadLibrary("app_native");
        } catch (Exception e) {
            e.printStackTrace();
        }

        rust = Native.load("app_native", AppRust.class);
        rust.initialize();
    }

    public static void run() {
        try {
            UppercaseText toUpperCommand = UppercaseText.newBuilder()
                    .setText("I'm going to be all upper!")
                    .build();
            MessageEnvelope wrapper = MessageEnvelope.newBuilder()
                    .setMessage(packToAny(toUpperCommand, UppercaseText.class))
                    .build();
            Tuple<ByteBuffer, Integer> buffer = toNioBuffer(wrapper);
            Pointer pointer = Native.getDirectBufferPointer(buffer.getValue_a());
            RustBuffer.ByValue rustBuffer = rust.run_function(
                    pointer,
                    buffer.getValue_b()
            );
            MessageEnvelope response = MessageEnvelope.parseFrom(rustBuffer.asCodedInputStream());
            rust.free_buffer(rustBuffer);
            UppercaseText uppercaseText = openEnvelope(response, b -> trySneaky(() -> UppercaseText.parseFrom(b)));

            System.out.println(uppercaseText.getText());

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
