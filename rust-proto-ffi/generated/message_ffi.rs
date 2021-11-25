#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MessageEnvelope {
    #[prost(message, optional, tag="1")]
    pub message: ::core::option::Option<::prost_types::Any>,
}

impl crate :: core :: TypeUrl for MessageEnvelope { fn type_url () -> & 'static str { "type.googleapis.com/message_ffi.MessageEnvelope" } }
