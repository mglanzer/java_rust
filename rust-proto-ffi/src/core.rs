use core::hash::{Hash, Hasher};
use std::mem::ManuallyDrop;
use lazy_static::lazy_static;
use std::sync::{Arc, Mutex};
use crate::core::message_ffi::MessageEnvelope;
use prost_types::Any;
use evmap::{ReadHandle, ShallowCopy, WriteHandle};
use prost::Message;

pub mod message_ffi {
    include!("../generated/message_ffi.rs");
}

struct RegisteredCallback {
    callback: Box<dyn Fn(Any) -> Any>,
}

impl PartialEq<Self> for RegisteredCallback {
    fn eq(&self, _other: &Self) -> bool {
        // we're using this in evmap which is a multi-value map. only one entry is valid for our purpose so eq can be true.
        true
    }
}

impl Eq for RegisteredCallback {}

impl Hash for RegisteredCallback {
    fn hash<H: Hasher>(&self, state: &mut H) {
        // we're using this in evmap which is a multi-value map. only one entry is valid for our purpose so can hash using constant
        state.write_u8(1)
    }
}

impl ShallowCopy for RegisteredCallback {
    unsafe fn shallow_copy(&self) -> ManuallyDrop<Self> {
        ManuallyDrop::new(RegisteredCallback {
            callback: Box::from_raw(&*self.callback as *const _ as *mut _)
        })
    }
}

struct Register {
    read_handle: ReadHandle<String, RegisteredCallback>,
    write_handle: Arc<Mutex<WriteHandle<String, RegisteredCallback>>>,
}

impl Register {
    fn new() -> Register {
        let (r, w) = evmap::new::<String, RegisteredCallback>();
        Register {
            read_handle: r,
            write_handle: Arc::new(Mutex::new(w)),
        }
    }
}

/// # Safety: Need to clone read handles
unsafe impl Sync for Register {}

lazy_static! {
    static ref STATE: Register = {
        Register::new()
    };
}

pub fn run_function(envelope: MessageEnvelope) -> MessageEnvelope {
    if let Some(any) = envelope.message {
        if let Some(read) = STATE.read_handle.clone().get(&any.type_url) {
            if let Some(d) = read.get_one() {
                let result: Any = (d.callback)(any);
                return MessageEnvelope::from_any(result);
            }
        }
    }
    MessageEnvelope::default()
}

pub fn register_function(type_url: &'static str , func: impl Fn(Any) -> Any + 'static) {
    let mut write_handle = STATE.write_handle.lock().expect("to obtain state write handle");
    write_handle.insert(type_url.to_string(), RegisteredCallback {
        callback: Box::new(move |a: Any| func(a))
    });
    // refresh causes writes to become visible to readers
    write_handle.refresh();
}

impl MessageEnvelope {
    pub fn from_any(a: Any) -> Self {
        let mut result = Self::default();
        result.message = Some(a);
        result
    }

    pub fn from_message<M>(m: M) -> Self
        where M: Message + TypeUrl, {
        Self::from_any(pack_to_any(m))
    }

    pub fn open_message<M>(&self) -> Option<M>
        where M: Message + TypeUrl + Default,
    {
        self.message.as_ref().map(|m| unpack_from_any(m).or(None)).flatten()
    }
}

pub trait TypeUrl {
    fn type_url() -> &'static str;
}

pub fn pack_to_any<M>(msg: M) -> prost_types::Any
    where
        M: Message + TypeUrl,
{
    prost_types::Any {
        type_url: M::type_url().to_owned(),
        value: msg.encode_to_vec(),
    }
}

pub fn unpack_from_any<M>(msg: &Any) -> Option<M>
    where
        M: Message + TypeUrl + Default,
{
    if msg.type_url == M::type_url() {
        Some(M::decode(&msg.value[..]).ok()?)
    } else {
        None
    }
}