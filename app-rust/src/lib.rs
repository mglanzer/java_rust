use proto_ffi::{
    TypeUrl,
    Any,
    register_function,
    pack_to_any,
};
use crate::commands::UppercaseText;
use prost::Message;

pub mod commands {
    include!("../generated/commands.rs");
}

pub fn register_proto_functions() {
    register_function(
        UppercaseText::type_url(),
        |a: Any| UppercaseText::decode(a.value.as_slice()).unwrap().execute(),
    );
}

#[test]
fn test() {
    register_proto_functions();
    let result = proto_ffi::run_function(proto_ffi::MessageEnvelope::from_message(UppercaseText {
        text: "to upper?".to_string()
    }));
    let res_msg: Option<UppercaseText> = result.open_message();
    assert_eq!("TO UPPER?", res_msg.unwrap().text)
}

trait Executable {
    fn execute(&self) -> Any;
}

impl Executable for UppercaseText {
    fn execute(&self) -> Any {
        let t = self.text.to_uppercase();
        pack_to_any(UppercaseText {
            text: t
        })
    }
}