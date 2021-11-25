import * as rust from "app-wasm"
import {message_ffi, google} from "./generated/message_ffi"
import {commands} from "./generated/commands"

const {protobuf} = google;

const {Any} = protobuf;
const {UppercaseText} = commands;
const {MessageEnvelope} = message_ffi;
const {run_function, initialize} = rust;

initialize();

let request = UppercaseText.create({text: "To upper me!"})
let envelope = MessageEnvelope.create({
    message: Any.create({
        type_url: "type.googleapis.com/commands.UppercaseText",
        value: UppercaseText.encode(request).finish()
    })
});

let buffer = MessageEnvelope.encode(envelope).finish();
let response_buffer = run_function(buffer);
let response = MessageEnvelope.decode(response_buffer);
let uppercased = UppercaseText.decode(response.message.value)

console.log(uppercased.text);