#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GreetRequest {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GreetResponse {
    #[prost(string, tag="1")]
    pub greeting: ::prost::alloc::string::String,
}

impl crate :: core :: TypeUrl for GreetRequest { fn type_url () -> & 'static str { "type.googleapis.com/messages.GreetRequest" } }

impl crate :: core :: TypeUrl for GreetResponse { fn type_url () -> & 'static str { "type.googleapis.com/messages.GreetResponse" } }
