use std::io::Result;
use std::fs::copy;
// use std::io::Result;
// use prost_build::Config;
//
// fn main() -> Result<()> {
//     let mut config = Config::default();
//     config.out_dir("src/generated");
//     config.compile_protos(&[
//         "src/proto/messages.proto",
//         "src/proto/commands.proto",
//     ], &["src/"])?;
//     Ok(())
// }

use heck::CamelCase;
use prost::Message;
use prost_types::FileDescriptorSet;
use quote::{format_ident, quote};
use std::env;
use std::fs::{self, File, OpenOptions};
use std::io::Write;
use std::path::Path;
use std::path::PathBuf;

fn main() {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());

    let proto_path = format!("{}{}", env::current_dir().unwrap().to_str().to_owned().unwrap().replace("/app-rust", ""), "/proto");
    copy_dir_all(PathBuf::from(proto_path), PathBuf::from("copied_protos")).expect("Proto copy to succeed");

    prost_build::Config::new()
        .file_descriptor_set_path(out_dir.join("file_descriptor_set.bin"))
        .compile_protos(&[
            "copied_protos/commands.proto",
        ], &["copied_protos"],
        )
        .unwrap();

    let file_descriptor_set_bytes =
        fs::read(out_dir.join("file_descriptor_set.bin")).unwrap();
    let file_descriptor_set =
        FileDescriptorSet::decode(&file_descriptor_set_bytes[..]).unwrap();

    generate_extras(&out_dir, &file_descriptor_set);

    copy_dir_all(out_dir, PathBuf::from("generated".to_string())).expect("Generated code copy to succeed");
}

fn copy_dir_all(src: impl AsRef<Path>, dst: impl AsRef<Path>) -> Result<()> {
    fs::create_dir_all(&dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let ty = entry.file_type()?;
        if ty.is_dir() {
            copy_dir_all(entry.path(), dst.as_ref().join(entry.file_name()))?;
        } else {
            copy(entry.path(), dst.as_ref().join(entry.file_name()))?;
        }
    }
    Ok(())
}

fn generate_extras(out_dir: &Path, file_descriptor_set: &FileDescriptorSet) {
    for fd in &file_descriptor_set.file {
        let package = match fd.package {
            Some(ref pkg) => pkg,
            None => continue,
        };

        if package.starts_with("google.") {
            continue;
        }

        let gen_path = out_dir.join(format!("{}.rs", package));
        let mut gen_file =
            OpenOptions::new().append(true).open(gen_path).unwrap();

        for msg in &fd.message_type {
            let name = match msg.name {
                Some(ref name) => name,
                None => continue,
            };

            let type_url = format!("type.googleapis.com/{}.{}", package, name);
            let type_name = name.to_camel_case();

            gen_type_url(&mut gen_file, &type_url, &type_name);
        }
    }
}

fn gen_type_url(gen_file: &mut File, type_url: &str, type_name: &str) {
    let type_name = format_ident!("{}", type_name);

    let tokens = quote! {
        impl proto_ffi::TypeUrl for #type_name {
            fn type_url() -> &'static str {
                #type_url
            }
        }
    };

    writeln!(gen_file).unwrap();
    writeln!(gen_file, "{}", &tokens).unwrap();
}