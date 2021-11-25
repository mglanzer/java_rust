pub use native_bindings::core::{run_function, free_buffer};
pub use app_rust::register_proto_functions;

#[no_mangle]
pub extern "C" fn initialize() {
    register_proto_functions();
}