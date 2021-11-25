use app_rust::register_proto_functions;
use wasm_bindgen::prelude::*;

pub use wasm_bindings::{run_function};

#[wasm_bindgen]
pub fn initialize() {
    register_proto_functions()
}