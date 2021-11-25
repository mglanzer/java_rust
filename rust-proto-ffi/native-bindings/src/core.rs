use ffi_support::ByteBuffer;
use proto_ffi::{
    run_function as core_run_function,
    MessageEnvelope,
    Message,
};

/// # Safety: Caller must ensure correctness of raw data pointer.
#[no_mangle]
pub extern "C" fn run_function(data: *const u8, len: i32) -> ByteBuffer {
    let req_buff = unsafe { get_buffer(data, len) };
    let request = MessageEnvelope::decode(req_buff).unwrap();
    let response = core_run_function(request);
    serialize_message(&response)
}

#[no_mangle]
pub extern "C" fn free_buffer(vec: ByteBuffer) {
    drop(vec)
}

pub fn serialize_message<T>(t: &T) -> ByteBuffer where T: Message {
    let mut buf = Vec::new();
    buf.reserve(t.encoded_len());
    // Unwrap is safe, since we have reserved sufficient capacity in the vector.
    t.encode(&mut buf).unwrap();
    ByteBuffer::from_vec(buf)
}

unsafe fn get_buffer<'a>(data: *const u8, len: i32) -> &'a [u8] {
    assert!(len >= 0, "Bad buffer len: {}", len);
    if len == 0 {
        // This will still fail, but as a bad protobuf format.
        &[]
    } else {
        assert!(!data.is_null(), "Unexpected null data pointer");
        std::slice::from_raw_parts(data, len as usize)
    }
}