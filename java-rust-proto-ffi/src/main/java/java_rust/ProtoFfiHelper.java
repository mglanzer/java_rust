package java_rust;

import com.google.protobuf.Any;
import com.google.protobuf.ByteString;
import com.google.protobuf.CodedOutputStream;
import com.google.protobuf.MessageLite;
import com.sun.jna.Library;
import com.sun.jna.Pointer;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.Value;
import message_ffi.MessageFfi;
import message_ffi.MessageFfi.MessageEnvelope;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.concurrent.Callable;
import java.util.function.Function;

import static java.util.Objects.requireNonNull;

public class ProtoFfiHelper {

//    static {
//        String nativeLibsPath = requireNonNull(ProtoFfiHelper.class.getResource("/libnative_bindings.dylib"))
//                .getFile().replace("libnative_bindings.dylib", "");
//
//        System.setProperty("java.library.path", nativeLibsPath);
//        try {
//            // java.library.path gets cached, this causes it to re-load.
//            Field fieldSysPath;
//            fieldSysPath = ClassLoader.class.getDeclaredField("sys_paths");
//            fieldSysPath.setAccessible(true);
//            fieldSysPath.set(null, null);
//
//            System.loadLibrary("native_bindings");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

    public interface BasicProtoFfi extends Library {
        RustBuffer.ByValue run_function(Pointer data, int len);
        void free_buffer(RustBuffer.ByValue b);
    }

    public static BasicProtoFfi rust;

    public static <T> T trySneaky(Callable<T> callable) {
        try {
            return callable.call();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void scope(Runnable runnable) {
        runnable.run();
    }

    public static <M extends MessageLite> Any packToAny(M message, Class<M> clazz) {
        return Any.newBuilder()
                .setTypeUrl("type.googleapis.com/" + clazz.getPackage().getName() + "." + clazz.getSimpleName())
                .setValue(message.toByteString())
                .build();
    }

    @SneakyThrows
    public static <M> M openEnvelope(MessageEnvelope wrapper, Function<ByteString, M> parseFrom) {
        Any any = wrapper.getMessage();
        return parseFrom.apply(any.getValue());
    }

    @Value
    @RequiredArgsConstructor(staticName = "of")
    public static class Tuple<T1, T2> {
        T1 value_a;
        T2 value_b;
    }

    @SneakyThrows
    public static Tuple<ByteBuffer, Integer> toNioBuffer(MessageLite message) {
        int size = message.getSerializedSize();
        ByteBuffer buffer = ByteBuffer.allocateDirect(size);
        buffer.order(ByteOrder.nativeOrder());
        CodedOutputStream outputStream = CodedOutputStream.newInstance(buffer);
        message.writeTo(outputStream);
        outputStream.checkNoSpaceLeft();
        return Tuple.of(buffer, size);
    }
}
