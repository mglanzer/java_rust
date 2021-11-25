/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const commands = $root.commands = (() => {

    /**
     * Namespace commands.
     * @exports commands
     * @namespace
     */
    const commands = {};

    commands.UnknownCommand = (function() {

        /**
         * Properties of an UnknownCommand.
         * @memberof commands
         * @interface IUnknownCommand
         * @property {string|null} [unknownCommandTypeUrl] UnknownCommand unknownCommandTypeUrl
         */

        /**
         * Constructs a new UnknownCommand.
         * @memberof commands
         * @classdesc Represents an UnknownCommand.
         * @implements IUnknownCommand
         * @constructor
         * @param {commands.IUnknownCommand=} [properties] Properties to set
         */
        function UnknownCommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnknownCommand unknownCommandTypeUrl.
         * @member {string} unknownCommandTypeUrl
         * @memberof commands.UnknownCommand
         * @instance
         */
        UnknownCommand.prototype.unknownCommandTypeUrl = "";

        /**
         * Creates a new UnknownCommand instance using the specified properties.
         * @function create
         * @memberof commands.UnknownCommand
         * @static
         * @param {commands.IUnknownCommand=} [properties] Properties to set
         * @returns {commands.UnknownCommand} UnknownCommand instance
         */
        UnknownCommand.create = function create(properties) {
            return new UnknownCommand(properties);
        };

        /**
         * Encodes the specified UnknownCommand message. Does not implicitly {@link commands.UnknownCommand.verify|verify} messages.
         * @function encode
         * @memberof commands.UnknownCommand
         * @static
         * @param {commands.IUnknownCommand} message UnknownCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnknownCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unknownCommandTypeUrl != null && Object.hasOwnProperty.call(message, "unknownCommandTypeUrl"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.unknownCommandTypeUrl);
            return writer;
        };

        /**
         * Encodes the specified UnknownCommand message, length delimited. Does not implicitly {@link commands.UnknownCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof commands.UnknownCommand
         * @static
         * @param {commands.IUnknownCommand} message UnknownCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnknownCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnknownCommand message from the specified reader or buffer.
         * @function decode
         * @memberof commands.UnknownCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {commands.UnknownCommand} UnknownCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnknownCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.commands.UnknownCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.unknownCommandTypeUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnknownCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof commands.UnknownCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {commands.UnknownCommand} UnknownCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnknownCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnknownCommand message.
         * @function verify
         * @memberof commands.UnknownCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnknownCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unknownCommandTypeUrl != null && message.hasOwnProperty("unknownCommandTypeUrl"))
                if (!$util.isString(message.unknownCommandTypeUrl))
                    return "unknownCommandTypeUrl: string expected";
            return null;
        };

        /**
         * Creates an UnknownCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof commands.UnknownCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {commands.UnknownCommand} UnknownCommand
         */
        UnknownCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.commands.UnknownCommand)
                return object;
            let message = new $root.commands.UnknownCommand();
            if (object.unknownCommandTypeUrl != null)
                message.unknownCommandTypeUrl = String(object.unknownCommandTypeUrl);
            return message;
        };

        /**
         * Creates a plain object from an UnknownCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof commands.UnknownCommand
         * @static
         * @param {commands.UnknownCommand} message UnknownCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnknownCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.unknownCommandTypeUrl = "";
            if (message.unknownCommandTypeUrl != null && message.hasOwnProperty("unknownCommandTypeUrl"))
                object.unknownCommandTypeUrl = message.unknownCommandTypeUrl;
            return object;
        };

        /**
         * Converts this UnknownCommand to JSON.
         * @function toJSON
         * @memberof commands.UnknownCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnknownCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnknownCommand;
    })();

    commands.ExecutionError = (function() {

        /**
         * Properties of an ExecutionError.
         * @memberof commands
         * @interface IExecutionError
         * @property {string|null} [message] ExecutionError message
         * @property {Object.<string,string>|null} [details] ExecutionError details
         */

        /**
         * Constructs a new ExecutionError.
         * @memberof commands
         * @classdesc Represents an ExecutionError.
         * @implements IExecutionError
         * @constructor
         * @param {commands.IExecutionError=} [properties] Properties to set
         */
        function ExecutionError(properties) {
            this.details = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecutionError message.
         * @member {string} message
         * @memberof commands.ExecutionError
         * @instance
         */
        ExecutionError.prototype.message = "";

        /**
         * ExecutionError details.
         * @member {Object.<string,string>} details
         * @memberof commands.ExecutionError
         * @instance
         */
        ExecutionError.prototype.details = $util.emptyObject;

        /**
         * Creates a new ExecutionError instance using the specified properties.
         * @function create
         * @memberof commands.ExecutionError
         * @static
         * @param {commands.IExecutionError=} [properties] Properties to set
         * @returns {commands.ExecutionError} ExecutionError instance
         */
        ExecutionError.create = function create(properties) {
            return new ExecutionError(properties);
        };

        /**
         * Encodes the specified ExecutionError message. Does not implicitly {@link commands.ExecutionError.verify|verify} messages.
         * @function encode
         * @memberof commands.ExecutionError
         * @static
         * @param {commands.IExecutionError} message ExecutionError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutionError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                for (let keys = Object.keys(message.details), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.details[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExecutionError message, length delimited. Does not implicitly {@link commands.ExecutionError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof commands.ExecutionError
         * @static
         * @param {commands.IExecutionError} message ExecutionError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutionError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecutionError message from the specified reader or buffer.
         * @function decode
         * @memberof commands.ExecutionError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {commands.ExecutionError} ExecutionError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutionError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.commands.ExecutionError(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    if (message.details === $util.emptyObject)
                        message.details = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.details[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecutionError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof commands.ExecutionError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {commands.ExecutionError} ExecutionError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutionError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecutionError message.
         * @function verify
         * @memberof commands.ExecutionError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecutionError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.details != null && message.hasOwnProperty("details")) {
                if (!$util.isObject(message.details))
                    return "details: object expected";
                let key = Object.keys(message.details);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.details[key[i]]))
                        return "details: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an ExecutionError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof commands.ExecutionError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {commands.ExecutionError} ExecutionError
         */
        ExecutionError.fromObject = function fromObject(object) {
            if (object instanceof $root.commands.ExecutionError)
                return object;
            let message = new $root.commands.ExecutionError();
            if (object.message != null)
                message.message = String(object.message);
            if (object.details) {
                if (typeof object.details !== "object")
                    throw TypeError(".commands.ExecutionError.details: object expected");
                message.details = {};
                for (let keys = Object.keys(object.details), i = 0; i < keys.length; ++i)
                    message.details[keys[i]] = String(object.details[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExecutionError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof commands.ExecutionError
         * @static
         * @param {commands.ExecutionError} message ExecutionError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecutionError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.details = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            let keys2;
            if (message.details && (keys2 = Object.keys(message.details)).length) {
                object.details = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.details[keys2[j]] = message.details[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ExecutionError to JSON.
         * @function toJSON
         * @memberof commands.ExecutionError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecutionError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExecutionError;
    })();

    commands.UppercaseText = (function() {

        /**
         * Properties of an UppercaseText.
         * @memberof commands
         * @interface IUppercaseText
         * @property {string|null} [text] UppercaseText text
         */

        /**
         * Constructs a new UppercaseText.
         * @memberof commands
         * @classdesc Represents an UppercaseText.
         * @implements IUppercaseText
         * @constructor
         * @param {commands.IUppercaseText=} [properties] Properties to set
         */
        function UppercaseText(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UppercaseText text.
         * @member {string} text
         * @memberof commands.UppercaseText
         * @instance
         */
        UppercaseText.prototype.text = "";

        /**
         * Creates a new UppercaseText instance using the specified properties.
         * @function create
         * @memberof commands.UppercaseText
         * @static
         * @param {commands.IUppercaseText=} [properties] Properties to set
         * @returns {commands.UppercaseText} UppercaseText instance
         */
        UppercaseText.create = function create(properties) {
            return new UppercaseText(properties);
        };

        /**
         * Encodes the specified UppercaseText message. Does not implicitly {@link commands.UppercaseText.verify|verify} messages.
         * @function encode
         * @memberof commands.UppercaseText
         * @static
         * @param {commands.IUppercaseText} message UppercaseText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UppercaseText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified UppercaseText message, length delimited. Does not implicitly {@link commands.UppercaseText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof commands.UppercaseText
         * @static
         * @param {commands.IUppercaseText} message UppercaseText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UppercaseText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UppercaseText message from the specified reader or buffer.
         * @function decode
         * @memberof commands.UppercaseText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {commands.UppercaseText} UppercaseText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UppercaseText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.commands.UppercaseText();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UppercaseText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof commands.UppercaseText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {commands.UppercaseText} UppercaseText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UppercaseText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UppercaseText message.
         * @function verify
         * @memberof commands.UppercaseText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UppercaseText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates an UppercaseText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof commands.UppercaseText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {commands.UppercaseText} UppercaseText
         */
        UppercaseText.fromObject = function fromObject(object) {
            if (object instanceof $root.commands.UppercaseText)
                return object;
            let message = new $root.commands.UppercaseText();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from an UppercaseText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof commands.UppercaseText
         * @static
         * @param {commands.UppercaseText} message UppercaseText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UppercaseText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this UppercaseText to JSON.
         * @function toJSON
         * @memberof commands.UppercaseText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UppercaseText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UppercaseText;
    })();

    commands.LowercaseText = (function() {

        /**
         * Properties of a LowercaseText.
         * @memberof commands
         * @interface ILowercaseText
         * @property {string|null} [text] LowercaseText text
         */

        /**
         * Constructs a new LowercaseText.
         * @memberof commands
         * @classdesc Represents a LowercaseText.
         * @implements ILowercaseText
         * @constructor
         * @param {commands.ILowercaseText=} [properties] Properties to set
         */
        function LowercaseText(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LowercaseText text.
         * @member {string} text
         * @memberof commands.LowercaseText
         * @instance
         */
        LowercaseText.prototype.text = "";

        /**
         * Creates a new LowercaseText instance using the specified properties.
         * @function create
         * @memberof commands.LowercaseText
         * @static
         * @param {commands.ILowercaseText=} [properties] Properties to set
         * @returns {commands.LowercaseText} LowercaseText instance
         */
        LowercaseText.create = function create(properties) {
            return new LowercaseText(properties);
        };

        /**
         * Encodes the specified LowercaseText message. Does not implicitly {@link commands.LowercaseText.verify|verify} messages.
         * @function encode
         * @memberof commands.LowercaseText
         * @static
         * @param {commands.ILowercaseText} message LowercaseText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LowercaseText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified LowercaseText message, length delimited. Does not implicitly {@link commands.LowercaseText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof commands.LowercaseText
         * @static
         * @param {commands.ILowercaseText} message LowercaseText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LowercaseText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LowercaseText message from the specified reader or buffer.
         * @function decode
         * @memberof commands.LowercaseText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {commands.LowercaseText} LowercaseText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LowercaseText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.commands.LowercaseText();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LowercaseText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof commands.LowercaseText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {commands.LowercaseText} LowercaseText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LowercaseText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LowercaseText message.
         * @function verify
         * @memberof commands.LowercaseText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LowercaseText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a LowercaseText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof commands.LowercaseText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {commands.LowercaseText} LowercaseText
         */
        LowercaseText.fromObject = function fromObject(object) {
            if (object instanceof $root.commands.LowercaseText)
                return object;
            let message = new $root.commands.LowercaseText();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a LowercaseText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof commands.LowercaseText
         * @static
         * @param {commands.LowercaseText} message LowercaseText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LowercaseText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this LowercaseText to JSON.
         * @function toJSON
         * @memberof commands.LowercaseText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LowercaseText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LowercaseText;
    })();

    return commands;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
