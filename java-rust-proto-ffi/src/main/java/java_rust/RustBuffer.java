package java_rust;

import com.google.protobuf.CodedInputStream;
import com.google.protobuf.CodedOutputStream;
import com.sun.jna.Pointer;
import com.sun.jna.Structure;

import java.lang.reflect.Method;
import java.nio.ByteBuffer;

// Credit to Mozilla
// https://github.com/mozilla/application-services/blob/72b827c3e0f883163762857fd766df1aeb060725/components/support/android/src/main/java/mozilla/appservices/support/native/RustBuffer.kt

@Structure.FieldOrder({"len", "data"})
public class RustBuffer extends Structure {
    public Long len = 0L;
    public Pointer data = null;

    public CodedInputStream asCodedInputStream() {
        if (this.data == null) {
            return null;
        }

        // We use a ByteArray instead of a ByteBuffer to avoid triggering the following code path:
        // https://github.com/protocolbuffers/protobuf/blob/e667bf6eaaa2fb1ba2987c6538df81f88500d030/java/core/src/main/java/com/google/protobuf/CodedInputStream.java#L185-L187
        // Bug: https://github.com/protocolbuffers/protobuf/issues/7422
        if (this.len < Integer.MIN_VALUE || this.len > Integer.MAX_VALUE) {
            throw new RuntimeException("len does not fit in a int");
        }
        return CodedInputStream.newInstance(data.getByteArray(0, len.intValue()));
    }

    public CodedOutputStream asCodedOutputStream() {
        if (this.data == null) {
            return null;
        }

        // We use newSafeInstance through reflection to avoid triggering the following code path:
        // https://github.com/protocolbuffers/protobuf/blob/e667bf6eaaa2fb1ba2987c6538df81f88500d030/java/core/src/main/java/com/google/protobuf/CodedOutputStream.java#L134-L136
        // Bug: https://github.com/protocolbuffers/protobuf/issues/7422
        Method method;
        try {
            //noinspection JavaReflectionMemberAccess
            method = CodedOutputStream.class.getDeclaredMethod("newSafeInstance", ByteBuffer.class);
            method.setAccessible(true);
            return (CodedOutputStream) method.invoke(null, data.getByteBuffer(0, this.len));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static class ByValue extends RustBuffer implements Structure.ByValue {
        public ByValue() {}
    }
}