#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnknownCommand {
    #[prost(string, tag="1")]
    pub unknown_command_type_url: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExecutionError {
    #[prost(string, tag="1")]
    pub message: ::prost::alloc::string::String,
    #[prost(map="string, string", tag="2")]
    pub details: ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
}
/// Upper case the text provided in In, return Out
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UppercaseText {
    #[prost(string, tag="1")]
    pub text: ::prost::alloc::string::String,
}
/// Lower case the text provided in In, return Out
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LowercaseText {
    #[prost(string, tag="1")]
    pub text: ::prost::alloc::string::String,
}

impl proto_ffi :: TypeUrl for UnknownCommand { fn type_url () -> & 'static str { "type.googleapis.com/commands.UnknownCommand" } }

impl proto_ffi :: TypeUrl for ExecutionError { fn type_url () -> & 'static str { "type.googleapis.com/commands.ExecutionError" } }

impl proto_ffi :: TypeUrl for UppercaseText { fn type_url () -> & 'static str { "type.googleapis.com/commands.UppercaseText" } }

impl proto_ffi :: TypeUrl for LowercaseText { fn type_url () -> & 'static str { "type.googleapis.com/commands.LowercaseText" } }
