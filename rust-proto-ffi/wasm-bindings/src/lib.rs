mod utils;

use wasm_bindgen::prelude::*;
use proto_ffi::{
    run_function as core_run_function,
    MessageEnvelope,
    Message,
};

pub use utils::set_panic_hook;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn run_function(d: &[u8]) -> Vec<u8> {
    let request = MessageEnvelope::decode(d).unwrap();
    let response = core_run_function(request);
    serialize_response(&response)
}

pub fn serialize_response<T>(t: &T) -> Vec<u8> where T: Message {
    let mut buf = Vec::new();
    buf.reserve(t.encoded_len());
    // Unwrap is safe, since we have reserved sufficient capacity in the vector.
    t.encode(&mut buf).unwrap();
    buf
}