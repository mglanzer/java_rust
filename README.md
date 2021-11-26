
This is an example of using protobuf for data marshalling across an FII boundary, with Java and wasm being the "frontend", 
and Rust being the "backend". The intended use for this would be to write multi-platform code in Rust then call it from 
an Android, iOS, or browser frontend.

Note: "frontend" and "backend" in this context is all client-side, not a client-server interaction. The host application
is the frontend, and the Rust code is the backend.

Protobuf is a good choice for data interchange because of generator support in each language and a common binary format.
The FFI layer provides byte buffer marshalling and leaves the serialization/deserialization to protobuf. There are other
repositories doing the same thing in JSON, but I like the strengths of protobuf, including performance. The idea of using
protobuf is not mine, and I borrowed heavily from Mozilla's [ApplicationServices](https://github.com/mozilla/application-services) 
repo (Thank you!).

This example implements a command pattern (the `MessageEnvelope`) to keep the number of FFI APIs to a minimum (just two). 
It uses the protobuf v3 `Any` message to enable an open/extensible FFI system where applications can define commands and 
handlers which are registered at startup (or whenever really). The downside of `Any` is needing to manage type_url values
for message passed in the `MessageEnvelope` but I think it's worth it for an open system (as opposed to defining an enum
in the spec which would be closed).

A high-level view of the folders:
`proto` - All the .proto files.
`rust-proto-ffi` - Implements the FFI glue code to marshal protobuf for native `native-bindings` and wasm `wasm-bindings`
this is used by the application level implementations.
`app-rust` - The cross-platform backend implementation. Registers app-specific message handlers.
`app-www` - The browser application, calls to the `app-rust` backend.
`app-java` - A Java application, calls to the `app-rust` backend.
`java-protos` - Generated protobuf for Java.

The project is Gradle oriented, see the root `build.gradle` for some useful tasks to generate protos, compile Rust 
and native binaries, and run the web server.

The roadmap for this repo which will likely go slowly over years or be forgotten entirely:
1. Separate the FFI bits into it's own repo.
2. Add a callback to the FFI API to enable the Rust backend code to notify the frontend.
3. Address logging/metrics in some way, perhaps with the above callback or perhaps with specialized APIs.
4. Make a pass at measuring perf/memory-use
5. Improve error messages, including friendly errors to assist correcting configuration issues.

Disclaimer: I haven't tested getting this going from clone, sorry if setup is rough. Also, none of this code is 
production ready.