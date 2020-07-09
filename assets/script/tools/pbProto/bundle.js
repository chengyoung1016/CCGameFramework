/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.jubian = (function() {

    /**
     * Namespace jubian.
     * @exports jubian
     * @namespace
     */
    var jubian = {};

    jubian.model = (function() {

        /**
         * Namespace model.
         * @memberof jubian
         * @namespace
         */
        var model = {};

        model.StringRequest = (function() {

            /**
             * Properties of a StringRequest.
             * @memberof jubian.model
             * @interface IStringRequest
             * @property {string|null} [str_value] StringRequest str_value
             */

            /**
             * Constructs a new StringRequest.
             * @memberof jubian.model
             * @classdesc Represents a StringRequest.
             * @implements IStringRequest
             * @constructor
             * @param {jubian.model.IStringRequest=} [p] Properties to set
             */
            function StringRequest(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * StringRequest str_value.
             * @member {string} str_value
             * @memberof jubian.model.StringRequest
             * @instance
             */
            StringRequest.prototype.str_value = "";

            /**
             * Encodes the specified StringRequest message. Does not implicitly {@link jubian.model.StringRequest.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.StringRequest
             * @static
             * @param {jubian.model.IStringRequest} m StringRequest message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringRequest.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.str_value != null && Object.hasOwnProperty.call(m, "str_value"))
                    w.uint32(10).string(m.str_value);
                return w;
            };

            /**
             * Decodes a StringRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.StringRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.StringRequest} StringRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringRequest.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.StringRequest();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.str_value = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a StringRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.StringRequest
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.StringRequest} StringRequest
             */
            StringRequest.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.StringRequest)
                    return d;
                var m = new $root.jubian.model.StringRequest();
                if (d.str_value != null) {
                    m.str_value = String(d.str_value);
                }
                return m;
            };

            /**
             * Creates a plain object from a StringRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.StringRequest
             * @static
             * @param {jubian.model.StringRequest} m StringRequest
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringRequest.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.str_value = "";
                }
                if (m.str_value != null && m.hasOwnProperty("str_value")) {
                    d.str_value = m.str_value;
                }
                return d;
            };

            /**
             * Converts this StringRequest to JSON.
             * @function toJSON
             * @memberof jubian.model.StringRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringRequest;
        })();

        model.MetaDataRequest = (function() {

            /**
             * Properties of a MetaDataRequest.
             * @memberof jubian.model
             * @interface IMetaDataRequest
             * @property {Object.<string,string>|null} [metadata] MetaDataRequest metadata
             */

            /**
             * Constructs a new MetaDataRequest.
             * @memberof jubian.model
             * @classdesc Represents a MetaDataRequest.
             * @implements IMetaDataRequest
             * @constructor
             * @param {jubian.model.IMetaDataRequest=} [p] Properties to set
             */
            function MetaDataRequest(p) {
                this.metadata = {};
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * MetaDataRequest metadata.
             * @member {Object.<string,string>} metadata
             * @memberof jubian.model.MetaDataRequest
             * @instance
             */
            MetaDataRequest.prototype.metadata = $util.emptyObject;

            /**
             * Encodes the specified MetaDataRequest message. Does not implicitly {@link jubian.model.MetaDataRequest.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.MetaDataRequest
             * @static
             * @param {jubian.model.IMetaDataRequest} m MetaDataRequest message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MetaDataRequest.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                    for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                        w.uint32(10).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                    }
                }
                return w;
            };

            /**
             * Decodes a MetaDataRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.MetaDataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.MetaDataRequest} MetaDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MetaDataRequest.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.MetaDataRequest(), k;
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        r.skip().pos++;
                        if (m.metadata === $util.emptyObject)
                            m.metadata = {};
                        k = r.string();
                        r.pos++;
                        m.metadata[k] = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a MetaDataRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.MetaDataRequest
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.MetaDataRequest} MetaDataRequest
             */
            MetaDataRequest.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.MetaDataRequest)
                    return d;
                var m = new $root.jubian.model.MetaDataRequest();
                if (d.metadata) {
                    if (typeof d.metadata !== "object")
                        throw TypeError(".jubian.model.MetaDataRequest.metadata: object expected");
                    m.metadata = {};
                    for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                        m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a MetaDataRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.MetaDataRequest
             * @static
             * @param {jubian.model.MetaDataRequest} m MetaDataRequest
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MetaDataRequest.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.objects || o.defaults) {
                    d.metadata = {};
                }
                var ks2;
                if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                    d.metadata = {};
                    for (var j = 0; j < ks2.length; ++j) {
                        d.metadata[ks2[j]] = m.metadata[ks2[j]];
                    }
                }
                return d;
            };

            /**
             * Converts this MetaDataRequest to JSON.
             * @function toJSON
             * @memberof jubian.model.MetaDataRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MetaDataRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MetaDataRequest;
        })();

        model.MetaDataResponse = (function() {

            /**
             * Properties of a MetaDataResponse.
             * @memberof jubian.model
             * @interface IMetaDataResponse
             * @property {Object.<string,string>|null} [metadata] MetaDataResponse metadata
             */

            /**
             * Constructs a new MetaDataResponse.
             * @memberof jubian.model
             * @classdesc Represents a MetaDataResponse.
             * @implements IMetaDataResponse
             * @constructor
             * @param {jubian.model.IMetaDataResponse=} [p] Properties to set
             */
            function MetaDataResponse(p) {
                this.metadata = {};
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * MetaDataResponse metadata.
             * @member {Object.<string,string>} metadata
             * @memberof jubian.model.MetaDataResponse
             * @instance
             */
            MetaDataResponse.prototype.metadata = $util.emptyObject;

            /**
             * Encodes the specified MetaDataResponse message. Does not implicitly {@link jubian.model.MetaDataResponse.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.MetaDataResponse
             * @static
             * @param {jubian.model.IMetaDataResponse} m MetaDataResponse message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MetaDataResponse.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                    for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                        w.uint32(10).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                    }
                }
                return w;
            };

            /**
             * Decodes a MetaDataResponse message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.MetaDataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.MetaDataResponse} MetaDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MetaDataResponse.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.MetaDataResponse(), k;
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        r.skip().pos++;
                        if (m.metadata === $util.emptyObject)
                            m.metadata = {};
                        k = r.string();
                        r.pos++;
                        m.metadata[k] = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a MetaDataResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.MetaDataResponse
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.MetaDataResponse} MetaDataResponse
             */
            MetaDataResponse.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.MetaDataResponse)
                    return d;
                var m = new $root.jubian.model.MetaDataResponse();
                if (d.metadata) {
                    if (typeof d.metadata !== "object")
                        throw TypeError(".jubian.model.MetaDataResponse.metadata: object expected");
                    m.metadata = {};
                    for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                        m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a MetaDataResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.MetaDataResponse
             * @static
             * @param {jubian.model.MetaDataResponse} m MetaDataResponse
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MetaDataResponse.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.objects || o.defaults) {
                    d.metadata = {};
                }
                var ks2;
                if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                    d.metadata = {};
                    for (var j = 0; j < ks2.length; ++j) {
                        d.metadata[ks2[j]] = m.metadata[ks2[j]];
                    }
                }
                return d;
            };

            /**
             * Converts this MetaDataResponse to JSON.
             * @function toJSON
             * @memberof jubian.model.MetaDataResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MetaDataResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MetaDataResponse;
        })();

        model.PageRequest = (function() {

            /**
             * Properties of a PageRequest.
             * @memberof jubian.model
             * @interface IPageRequest
             * @property {Object.<string,string>|null} [params] PageRequest params
             * @property {jubian.model.IQueryOptions|null} [options] PageRequest options
             */

            /**
             * Constructs a new PageRequest.
             * @memberof jubian.model
             * @classdesc Represents a PageRequest.
             * @implements IPageRequest
             * @constructor
             * @param {jubian.model.IPageRequest=} [p] Properties to set
             */
            function PageRequest(p) {
                this.params = {};
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * PageRequest params.
             * @member {Object.<string,string>} params
             * @memberof jubian.model.PageRequest
             * @instance
             */
            PageRequest.prototype.params = $util.emptyObject;

            /**
             * PageRequest options.
             * @member {jubian.model.IQueryOptions|null|undefined} options
             * @memberof jubian.model.PageRequest
             * @instance
             */
            PageRequest.prototype.options = null;

            /**
             * Encodes the specified PageRequest message. Does not implicitly {@link jubian.model.PageRequest.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.PageRequest
             * @static
             * @param {jubian.model.IPageRequest} m PageRequest message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PageRequest.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.params != null && Object.hasOwnProperty.call(m, "params")) {
                    for (var ks = Object.keys(m.params), i = 0; i < ks.length; ++i) {
                        w.uint32(10).fork().uint32(10).string(ks[i]).uint32(18).string(m.params[ks[i]]).ldelim();
                    }
                }
                if (m.options != null && Object.hasOwnProperty.call(m, "options"))
                    $root.jubian.model.QueryOptions.encode(m.options, w.uint32(18).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a PageRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.PageRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.PageRequest} PageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PageRequest.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.PageRequest(), k;
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        r.skip().pos++;
                        if (m.params === $util.emptyObject)
                            m.params = {};
                        k = r.string();
                        r.pos++;
                        m.params[k] = r.string();
                        break;
                    case 2:
                        m.options = $root.jubian.model.QueryOptions.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.PageRequest
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.PageRequest} PageRequest
             */
            PageRequest.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.PageRequest)
                    return d;
                var m = new $root.jubian.model.PageRequest();
                if (d.params) {
                    if (typeof d.params !== "object")
                        throw TypeError(".jubian.model.PageRequest.params: object expected");
                    m.params = {};
                    for (var ks = Object.keys(d.params), i = 0; i < ks.length; ++i) {
                        m.params[ks[i]] = String(d.params[ks[i]]);
                    }
                }
                if (d.options != null) {
                    if (typeof d.options !== "object")
                        throw TypeError(".jubian.model.PageRequest.options: object expected");
                    m.options = $root.jubian.model.QueryOptions.fromObject(d.options);
                }
                return m;
            };

            /**
             * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.PageRequest
             * @static
             * @param {jubian.model.PageRequest} m PageRequest
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PageRequest.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.objects || o.defaults) {
                    d.params = {};
                }
                if (o.defaults) {
                    d.options = null;
                }
                var ks2;
                if (m.params && (ks2 = Object.keys(m.params)).length) {
                    d.params = {};
                    for (var j = 0; j < ks2.length; ++j) {
                        d.params[ks2[j]] = m.params[ks2[j]];
                    }
                }
                if (m.options != null && m.hasOwnProperty("options")) {
                    d.options = $root.jubian.model.QueryOptions.toObject(m.options, o);
                }
                return d;
            };

            /**
             * Converts this PageRequest to JSON.
             * @function toJSON
             * @memberof jubian.model.PageRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PageRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PageRequest;
        })();

        model.ResultResponse = (function() {

            /**
             * Properties of a ResultResponse.
             * @memberof jubian.model
             * @interface IResultResponse
             * @property {number|null} [result] ResultResponse result
             */

            /**
             * Constructs a new ResultResponse.
             * @memberof jubian.model
             * @classdesc Represents a ResultResponse.
             * @implements IResultResponse
             * @constructor
             * @param {jubian.model.IResultResponse=} [p] Properties to set
             */
            function ResultResponse(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * ResultResponse result.
             * @member {number} result
             * @memberof jubian.model.ResultResponse
             * @instance
             */
            ResultResponse.prototype.result = 0;

            /**
             * Encodes the specified ResultResponse message. Does not implicitly {@link jubian.model.ResultResponse.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.ResultResponse
             * @static
             * @param {jubian.model.IResultResponse} m ResultResponse message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResultResponse.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                    w.uint32(8).int32(m.result);
                return w;
            };

            /**
             * Decodes a ResultResponse message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.ResultResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.ResultResponse} ResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResultResponse.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.ResultResponse();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.result = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a ResultResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.ResultResponse
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.ResultResponse} ResultResponse
             */
            ResultResponse.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.ResultResponse)
                    return d;
                var m = new $root.jubian.model.ResultResponse();
                if (d.result != null) {
                    m.result = d.result | 0;
                }
                return m;
            };

            /**
             * Creates a plain object from a ResultResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.ResultResponse
             * @static
             * @param {jubian.model.ResultResponse} m ResultResponse
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResultResponse.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.result = 0;
                }
                if (m.result != null && m.hasOwnProperty("result")) {
                    d.result = m.result;
                }
                return d;
            };

            /**
             * Converts this ResultResponse to JSON.
             * @function toJSON
             * @memberof jubian.model.ResultResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResultResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResultResponse;
        })();

        model.RequestByToken = (function() {

            /**
             * Properties of a RequestByToken.
             * @memberof jubian.model
             * @interface IRequestByToken
             * @property {string|null} [access_token] RequestByToken access_token
             */

            /**
             * Constructs a new RequestByToken.
             * @memberof jubian.model
             * @classdesc Represents a RequestByToken.
             * @implements IRequestByToken
             * @constructor
             * @param {jubian.model.IRequestByToken=} [p] Properties to set
             */
            function RequestByToken(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * RequestByToken access_token.
             * @member {string} access_token
             * @memberof jubian.model.RequestByToken
             * @instance
             */
            RequestByToken.prototype.access_token = "";

            /**
             * Encodes the specified RequestByToken message. Does not implicitly {@link jubian.model.RequestByToken.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.RequestByToken
             * @static
             * @param {jubian.model.IRequestByToken} m RequestByToken message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestByToken.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.access_token != null && Object.hasOwnProperty.call(m, "access_token"))
                    w.uint32(10).string(m.access_token);
                return w;
            };

            /**
             * Decodes a RequestByToken message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.RequestByToken
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.RequestByToken} RequestByToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestByToken.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.RequestByToken();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.access_token = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a RequestByToken message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.RequestByToken
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.RequestByToken} RequestByToken
             */
            RequestByToken.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.RequestByToken)
                    return d;
                var m = new $root.jubian.model.RequestByToken();
                if (d.access_token != null) {
                    m.access_token = String(d.access_token);
                }
                return m;
            };

            /**
             * Creates a plain object from a RequestByToken message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.RequestByToken
             * @static
             * @param {jubian.model.RequestByToken} m RequestByToken
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestByToken.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.access_token = "";
                }
                if (m.access_token != null && m.hasOwnProperty("access_token")) {
                    d.access_token = m.access_token;
                }
                return d;
            };

            /**
             * Converts this RequestByToken to JSON.
             * @function toJSON
             * @memberof jubian.model.RequestByToken
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestByToken.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestByToken;
        })();

        model.RequestByIds = (function() {

            /**
             * Properties of a RequestByIds.
             * @memberof jubian.model
             * @interface IRequestByIds
             * @property {Array.<string>|null} [ids] RequestByIds ids
             */

            /**
             * Constructs a new RequestByIds.
             * @memberof jubian.model
             * @classdesc Represents a RequestByIds.
             * @implements IRequestByIds
             * @constructor
             * @param {jubian.model.IRequestByIds=} [p] Properties to set
             */
            function RequestByIds(p) {
                this.ids = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * RequestByIds ids.
             * @member {Array.<string>} ids
             * @memberof jubian.model.RequestByIds
             * @instance
             */
            RequestByIds.prototype.ids = $util.emptyArray;

            /**
             * Encodes the specified RequestByIds message. Does not implicitly {@link jubian.model.RequestByIds.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.RequestByIds
             * @static
             * @param {jubian.model.IRequestByIds} m RequestByIds message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestByIds.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ids != null && m.ids.length) {
                    for (var i = 0; i < m.ids.length; ++i)
                        w.uint32(10).string(m.ids[i]);
                }
                return w;
            };

            /**
             * Decodes a RequestByIds message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.RequestByIds
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.RequestByIds} RequestByIds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestByIds.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.RequestByIds();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.ids && m.ids.length))
                            m.ids = [];
                        m.ids.push(r.string());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a RequestByIds message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.RequestByIds
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.RequestByIds} RequestByIds
             */
            RequestByIds.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.RequestByIds)
                    return d;
                var m = new $root.jubian.model.RequestByIds();
                if (d.ids) {
                    if (!Array.isArray(d.ids))
                        throw TypeError(".jubian.model.RequestByIds.ids: array expected");
                    m.ids = [];
                    for (var i = 0; i < d.ids.length; ++i) {
                        m.ids[i] = String(d.ids[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a RequestByIds message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.RequestByIds
             * @static
             * @param {jubian.model.RequestByIds} m RequestByIds
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestByIds.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.ids = [];
                }
                if (m.ids && m.ids.length) {
                    d.ids = [];
                    for (var j = 0; j < m.ids.length; ++j) {
                        d.ids[j] = m.ids[j];
                    }
                }
                return d;
            };

            /**
             * Converts this RequestByIds to JSON.
             * @function toJSON
             * @memberof jubian.model.RequestByIds
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestByIds.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestByIds;
        })();

        model.QueryOptions = (function() {

            /**
             * Properties of a QueryOptions.
             * @memberof jubian.model
             * @interface IQueryOptions
             * @property {number|null} [page] QueryOptions page
             * @property {number|null} [count] QueryOptions count
             * @property {number|Long|null} [max_id] QueryOptions max_id
             * @property {number|Long|null} [since_id] QueryOptions since_id
             */

            /**
             * Constructs a new QueryOptions.
             * @memberof jubian.model
             * @classdesc Represents a QueryOptions.
             * @implements IQueryOptions
             * @constructor
             * @param {jubian.model.IQueryOptions=} [p] Properties to set
             */
            function QueryOptions(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * QueryOptions page.
             * @member {number} page
             * @memberof jubian.model.QueryOptions
             * @instance
             */
            QueryOptions.prototype.page = 0;

            /**
             * QueryOptions count.
             * @member {number} count
             * @memberof jubian.model.QueryOptions
             * @instance
             */
            QueryOptions.prototype.count = 0;

            /**
             * QueryOptions max_id.
             * @member {number|Long} max_id
             * @memberof jubian.model.QueryOptions
             * @instance
             */
            QueryOptions.prototype.max_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * QueryOptions since_id.
             * @member {number|Long} since_id
             * @memberof jubian.model.QueryOptions
             * @instance
             */
            QueryOptions.prototype.since_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified QueryOptions message. Does not implicitly {@link jubian.model.QueryOptions.verify|verify} messages.
             * @function encode
             * @memberof jubian.model.QueryOptions
             * @static
             * @param {jubian.model.IQueryOptions} m QueryOptions message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryOptions.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                    w.uint32(8).int32(m.page);
                if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                    w.uint32(16).int32(m.count);
                if (m.max_id != null && Object.hasOwnProperty.call(m, "max_id"))
                    w.uint32(24).int64(m.max_id);
                if (m.since_id != null && Object.hasOwnProperty.call(m, "since_id"))
                    w.uint32(32).int64(m.since_id);
                return w;
            };

            /**
             * Decodes a QueryOptions message from the specified reader or buffer.
             * @function decode
             * @memberof jubian.model.QueryOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {jubian.model.QueryOptions} QueryOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryOptions.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.model.QueryOptions();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.page = r.int32();
                        break;
                    case 2:
                        m.count = r.int32();
                        break;
                    case 3:
                        m.max_id = r.int64();
                        break;
                    case 4:
                        m.since_id = r.int64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a QueryOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jubian.model.QueryOptions
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {jubian.model.QueryOptions} QueryOptions
             */
            QueryOptions.fromObject = function fromObject(d) {
                if (d instanceof $root.jubian.model.QueryOptions)
                    return d;
                var m = new $root.jubian.model.QueryOptions();
                if (d.page != null) {
                    m.page = d.page | 0;
                }
                if (d.count != null) {
                    m.count = d.count | 0;
                }
                if (d.max_id != null) {
                    if ($util.Long)
                        (m.max_id = $util.Long.fromValue(d.max_id)).unsigned = false;
                    else if (typeof d.max_id === "string")
                        m.max_id = parseInt(d.max_id, 10);
                    else if (typeof d.max_id === "number")
                        m.max_id = d.max_id;
                    else if (typeof d.max_id === "object")
                        m.max_id = new $util.LongBits(d.max_id.low >>> 0, d.max_id.high >>> 0).toNumber();
                }
                if (d.since_id != null) {
                    if ($util.Long)
                        (m.since_id = $util.Long.fromValue(d.since_id)).unsigned = false;
                    else if (typeof d.since_id === "string")
                        m.since_id = parseInt(d.since_id, 10);
                    else if (typeof d.since_id === "number")
                        m.since_id = d.since_id;
                    else if (typeof d.since_id === "object")
                        m.since_id = new $util.LongBits(d.since_id.low >>> 0, d.since_id.high >>> 0).toNumber();
                }
                return m;
            };

            /**
             * Creates a plain object from a QueryOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jubian.model.QueryOptions
             * @static
             * @param {jubian.model.QueryOptions} m QueryOptions
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryOptions.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.page = 0;
                    d.count = 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.max_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                    } else
                        d.max_id = o.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.since_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                    } else
                        d.since_id = o.longs === String ? "0" : 0;
                }
                if (m.page != null && m.hasOwnProperty("page")) {
                    d.page = m.page;
                }
                if (m.count != null && m.hasOwnProperty("count")) {
                    d.count = m.count;
                }
                if (m.max_id != null && m.hasOwnProperty("max_id")) {
                    if (typeof m.max_id === "number")
                        d.max_id = o.longs === String ? String(m.max_id) : m.max_id;
                    else
                        d.max_id = o.longs === String ? $util.Long.prototype.toString.call(m.max_id) : o.longs === Number ? new $util.LongBits(m.max_id.low >>> 0, m.max_id.high >>> 0).toNumber() : m.max_id;
                }
                if (m.since_id != null && m.hasOwnProperty("since_id")) {
                    if (typeof m.since_id === "number")
                        d.since_id = o.longs === String ? String(m.since_id) : m.since_id;
                    else
                        d.since_id = o.longs === String ? $util.Long.prototype.toString.call(m.since_id) : o.longs === Number ? new $util.LongBits(m.since_id.low >>> 0, m.since_id.high >>> 0).toNumber() : m.since_id;
                }
                return d;
            };

            /**
             * Converts this QueryOptions to JSON.
             * @function toJSON
             * @memberof jubian.model.QueryOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryOptions;
        })();

        return model;
    })();

    jubian.golottery = (function() {

        /**
         * Namespace golottery.
         * @memberof jubian
         * @namespace
         */
        var golottery = {};

        golottery.srv = (function() {

            /**
             * Namespace srv.
             * @memberof jubian.golottery
             * @namespace
             */
            var srv = {};

            srv.room = (function() {

                /**
                 * Namespace room.
                 * @memberof jubian.golottery.srv
                 * @namespace
                 */
                var room = {};

                /**
                 * RoomType enum.
                 * @name jubian.golottery.srv.room.RoomType
                 * @enum {number}
                 * @property {number} NONE=0 NONE value
                 */
                room.RoomType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NONE"] = 0;
                    return values;
                })();

                room.Room = (function() {

                    /**
                     * Properties of a Room.
                     * @memberof jubian.golottery.srv.room
                     * @interface IRoom
                     * @property {number|Long|null} [id] Room id
                     * @property {string|null} [server_id] Room server_id
                     * @property {Array.<jubian.golottery.srv.room.ITableInfo>|null} [nodes] Room nodes
                     */

                    /**
                     * Constructs a new Room.
                     * @memberof jubian.golottery.srv.room
                     * @classdesc Represents a Room.
                     * @implements IRoom
                     * @constructor
                     * @param {jubian.golottery.srv.room.IRoom=} [p] Properties to set
                     */
                    function Room(p) {
                        this.nodes = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * Room id.
                     * @member {number|Long} id
                     * @memberof jubian.golottery.srv.room.Room
                     * @instance
                     */
                    Room.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Room server_id.
                     * @member {string} server_id
                     * @memberof jubian.golottery.srv.room.Room
                     * @instance
                     */
                    Room.prototype.server_id = "";

                    /**
                     * Room nodes.
                     * @member {Array.<jubian.golottery.srv.room.ITableInfo>} nodes
                     * @memberof jubian.golottery.srv.room.Room
                     * @instance
                     */
                    Room.prototype.nodes = $util.emptyArray;

                    /**
                     * Encodes the specified Room message. Does not implicitly {@link jubian.golottery.srv.room.Room.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.srv.room.Room
                     * @static
                     * @param {jubian.golottery.srv.room.IRoom} m Room message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Room.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                            w.uint32(8).int64(m.id);
                        if (m.server_id != null && Object.hasOwnProperty.call(m, "server_id"))
                            w.uint32(18).string(m.server_id);
                        if (m.nodes != null && m.nodes.length) {
                            for (var i = 0; i < m.nodes.length; ++i)
                                $root.jubian.golottery.srv.room.TableInfo.encode(m.nodes[i], w.uint32(26).fork()).ldelim();
                        }
                        return w;
                    };

                    /**
                     * Decodes a Room message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.srv.room.Room
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.srv.room.Room} Room
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Room.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.srv.room.Room();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.id = r.int64();
                                break;
                            case 2:
                                m.server_id = r.string();
                                break;
                            case 3:
                                if (!(m.nodes && m.nodes.length))
                                    m.nodes = [];
                                m.nodes.push($root.jubian.golottery.srv.room.TableInfo.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a Room message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.srv.room.Room
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.srv.room.Room} Room
                     */
                    Room.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.srv.room.Room)
                            return d;
                        var m = new $root.jubian.golottery.srv.room.Room();
                        if (d.id != null) {
                            if ($util.Long)
                                (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                            else if (typeof d.id === "string")
                                m.id = parseInt(d.id, 10);
                            else if (typeof d.id === "number")
                                m.id = d.id;
                            else if (typeof d.id === "object")
                                m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
                        }
                        if (d.server_id != null) {
                            m.server_id = String(d.server_id);
                        }
                        if (d.nodes) {
                            if (!Array.isArray(d.nodes))
                                throw TypeError(".jubian.golottery.srv.room.Room.nodes: array expected");
                            m.nodes = [];
                            for (var i = 0; i < d.nodes.length; ++i) {
                                if (typeof d.nodes[i] !== "object")
                                    throw TypeError(".jubian.golottery.srv.room.Room.nodes: object expected");
                                m.nodes[i] = $root.jubian.golottery.srv.room.TableInfo.fromObject(d.nodes[i]);
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from a Room message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.srv.room.Room
                     * @static
                     * @param {jubian.golottery.srv.room.Room} m Room
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Room.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.arrays || o.defaults) {
                            d.nodes = [];
                        }
                        if (o.defaults) {
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.id = o.longs === String ? "0" : 0;
                            d.server_id = "";
                        }
                        if (m.id != null && m.hasOwnProperty("id")) {
                            if (typeof m.id === "number")
                                d.id = o.longs === String ? String(m.id) : m.id;
                            else
                                d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
                        }
                        if (m.server_id != null && m.hasOwnProperty("server_id")) {
                            d.server_id = m.server_id;
                        }
                        if (m.nodes && m.nodes.length) {
                            d.nodes = [];
                            for (var j = 0; j < m.nodes.length; ++j) {
                                d.nodes[j] = $root.jubian.golottery.srv.room.TableInfo.toObject(m.nodes[j], o);
                            }
                        }
                        return d;
                    };

                    /**
                     * Converts this Room to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.srv.room.Room
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Room.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Room;
                })();

                room.TableInfo = (function() {

                    /**
                     * Properties of a TableInfo.
                     * @memberof jubian.golottery.srv.room
                     * @interface ITableInfo
                     * @property {number|Long|null} [id] TableInfo id
                     * @property {string|null} [server_id] TableInfo server_id
                     * @property {number|Long|null} [transaction_id] TableInfo transaction_id
                     */

                    /**
                     * Constructs a new TableInfo.
                     * @memberof jubian.golottery.srv.room
                     * @classdesc Represents a TableInfo.
                     * @implements ITableInfo
                     * @constructor
                     * @param {jubian.golottery.srv.room.ITableInfo=} [p] Properties to set
                     */
                    function TableInfo(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * TableInfo id.
                     * @member {number|Long} id
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @instance
                     */
                    TableInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * TableInfo server_id.
                     * @member {string} server_id
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @instance
                     */
                    TableInfo.prototype.server_id = "";

                    /**
                     * TableInfo transaction_id.
                     * @member {number|Long} transaction_id
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @instance
                     */
                    TableInfo.prototype.transaction_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Encodes the specified TableInfo message. Does not implicitly {@link jubian.golottery.srv.room.TableInfo.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @static
                     * @param {jubian.golottery.srv.room.ITableInfo} m TableInfo message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableInfo.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                            w.uint32(8).int64(m.id);
                        if (m.server_id != null && Object.hasOwnProperty.call(m, "server_id"))
                            w.uint32(18).string(m.server_id);
                        if (m.transaction_id != null && Object.hasOwnProperty.call(m, "transaction_id"))
                            w.uint32(24).int64(m.transaction_id);
                        return w;
                    };

                    /**
                     * Decodes a TableInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.srv.room.TableInfo} TableInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableInfo.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.srv.room.TableInfo();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.id = r.int64();
                                break;
                            case 2:
                                m.server_id = r.string();
                                break;
                            case 3:
                                m.transaction_id = r.int64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.srv.room.TableInfo} TableInfo
                     */
                    TableInfo.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.srv.room.TableInfo)
                            return d;
                        var m = new $root.jubian.golottery.srv.room.TableInfo();
                        if (d.id != null) {
                            if ($util.Long)
                                (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                            else if (typeof d.id === "string")
                                m.id = parseInt(d.id, 10);
                            else if (typeof d.id === "number")
                                m.id = d.id;
                            else if (typeof d.id === "object")
                                m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
                        }
                        if (d.server_id != null) {
                            m.server_id = String(d.server_id);
                        }
                        if (d.transaction_id != null) {
                            if ($util.Long)
                                (m.transaction_id = $util.Long.fromValue(d.transaction_id)).unsigned = false;
                            else if (typeof d.transaction_id === "string")
                                m.transaction_id = parseInt(d.transaction_id, 10);
                            else if (typeof d.transaction_id === "number")
                                m.transaction_id = d.transaction_id;
                            else if (typeof d.transaction_id === "object")
                                m.transaction_id = new $util.LongBits(d.transaction_id.low >>> 0, d.transaction_id.high >>> 0).toNumber();
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @static
                     * @param {jubian.golottery.srv.room.TableInfo} m TableInfo
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableInfo.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.defaults) {
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.id = o.longs === String ? "0" : 0;
                            d.server_id = "";
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.transaction_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.transaction_id = o.longs === String ? "0" : 0;
                        }
                        if (m.id != null && m.hasOwnProperty("id")) {
                            if (typeof m.id === "number")
                                d.id = o.longs === String ? String(m.id) : m.id;
                            else
                                d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
                        }
                        if (m.server_id != null && m.hasOwnProperty("server_id")) {
                            d.server_id = m.server_id;
                        }
                        if (m.transaction_id != null && m.hasOwnProperty("transaction_id")) {
                            if (typeof m.transaction_id === "number")
                                d.transaction_id = o.longs === String ? String(m.transaction_id) : m.transaction_id;
                            else
                                d.transaction_id = o.longs === String ? $util.Long.prototype.toString.call(m.transaction_id) : o.longs === Number ? new $util.LongBits(m.transaction_id.low >>> 0, m.transaction_id.high >>> 0).toNumber() : m.transaction_id;
                        }
                        return d;
                    };

                    /**
                     * Converts this TableInfo to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.srv.room.TableInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableInfo;
                })();

                room.JoinRoom = (function() {

                    /**
                     * Properties of a JoinRoom.
                     * @memberof jubian.golottery.srv.room
                     * @interface IJoinRoom
                     * @property {string|null} [room_no] JoinRoom room_no
                     * @property {jubian.golottery.srv.room.RoomType|null} [room_type] JoinRoom room_type
                     */

                    /**
                     * Constructs a new JoinRoom.
                     * @memberof jubian.golottery.srv.room
                     * @classdesc Represents a JoinRoom.
                     * @implements IJoinRoom
                     * @constructor
                     * @param {jubian.golottery.srv.room.IJoinRoom=} [p] Properties to set
                     */
                    function JoinRoom(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * JoinRoom room_no.
                     * @member {string} room_no
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @instance
                     */
                    JoinRoom.prototype.room_no = "";

                    /**
                     * JoinRoom room_type.
                     * @member {jubian.golottery.srv.room.RoomType} room_type
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @instance
                     */
                    JoinRoom.prototype.room_type = 0;

                    /**
                     * Encodes the specified JoinRoom message. Does not implicitly {@link jubian.golottery.srv.room.JoinRoom.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @static
                     * @param {jubian.golottery.srv.room.IJoinRoom} m JoinRoom message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinRoom.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.room_no != null && Object.hasOwnProperty.call(m, "room_no"))
                            w.uint32(10).string(m.room_no);
                        if (m.room_type != null && Object.hasOwnProperty.call(m, "room_type"))
                            w.uint32(16).int32(m.room_type);
                        return w;
                    };

                    /**
                     * Decodes a JoinRoom message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.srv.room.JoinRoom} JoinRoom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinRoom.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.srv.room.JoinRoom();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.room_no = r.string();
                                break;
                            case 2:
                                m.room_type = r.int32();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a JoinRoom message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.srv.room.JoinRoom} JoinRoom
                     */
                    JoinRoom.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.srv.room.JoinRoom)
                            return d;
                        var m = new $root.jubian.golottery.srv.room.JoinRoom();
                        if (d.room_no != null) {
                            m.room_no = String(d.room_no);
                        }
                        switch (d.room_type) {
                        case "NONE":
                        case 0:
                            m.room_type = 0;
                            break;
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from a JoinRoom message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @static
                     * @param {jubian.golottery.srv.room.JoinRoom} m JoinRoom
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinRoom.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.defaults) {
                            d.room_no = "";
                            d.room_type = o.enums === String ? "NONE" : 0;
                        }
                        if (m.room_no != null && m.hasOwnProperty("room_no")) {
                            d.room_no = m.room_no;
                        }
                        if (m.room_type != null && m.hasOwnProperty("room_type")) {
                            d.room_type = o.enums === String ? $root.jubian.golottery.srv.room.RoomType[m.room_type] : m.room_type;
                        }
                        return d;
                    };

                    /**
                     * Converts this JoinRoom to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.srv.room.JoinRoom
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinRoom.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JoinRoom;
                })();

                return room;
            })();

            srv.oauth2 = (function() {

                /**
                 * Namespace oauth2.
                 * @memberof jubian.golottery.srv
                 * @namespace
                 */
                var oauth2 = {};

                oauth2.Token = (function() {

                    /**
                     * Properties of a Token.
                     * @memberof jubian.golottery.srv.oauth2
                     * @interface IToken
                     * @property {string|null} [access_token] Token access_token
                     * @property {string|null} [token_type] Token token_type
                     * @property {string|null} [refresh_token] Token refresh_token
                     * @property {number|Long|null} [expires_at] Token expires_at
                     * @property {Array.<string>|null} [scopes] Token scopes
                     * @property {Object.<string,string>|null} [metadata] Token metadata
                     */

                    /**
                     * Constructs a new Token.
                     * @memberof jubian.golottery.srv.oauth2
                     * @classdesc Represents a Token.
                     * @implements IToken
                     * @constructor
                     * @param {jubian.golottery.srv.oauth2.IToken=} [p] Properties to set
                     */
                    function Token(p) {
                        this.scopes = [];
                        this.metadata = {};
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * Token access_token.
                     * @member {string} access_token
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     */
                    Token.prototype.access_token = "";

                    /**
                     * Token token_type.
                     * @member {string} token_type
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     */
                    Token.prototype.token_type = "";

                    /**
                     * Token refresh_token.
                     * @member {string} refresh_token
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     */
                    Token.prototype.refresh_token = "";

                    /**
                     * Token expires_at.
                     * @member {number|Long} expires_at
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     */
                    Token.prototype.expires_at = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Token scopes.
                     * @member {Array.<string>} scopes
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     */
                    Token.prototype.scopes = $util.emptyArray;

                    /**
                     * Token metadata.
                     * @member {Object.<string,string>} metadata
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     */
                    Token.prototype.metadata = $util.emptyObject;

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link jubian.golottery.srv.oauth2.Token.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @static
                     * @param {jubian.golottery.srv.oauth2.IToken} m Token message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Token.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.access_token != null && Object.hasOwnProperty.call(m, "access_token"))
                            w.uint32(10).string(m.access_token);
                        if (m.token_type != null && Object.hasOwnProperty.call(m, "token_type"))
                            w.uint32(18).string(m.token_type);
                        if (m.refresh_token != null && Object.hasOwnProperty.call(m, "refresh_token"))
                            w.uint32(26).string(m.refresh_token);
                        if (m.expires_at != null && Object.hasOwnProperty.call(m, "expires_at"))
                            w.uint32(32).int64(m.expires_at);
                        if (m.scopes != null && m.scopes.length) {
                            for (var i = 0; i < m.scopes.length; ++i)
                                w.uint32(42).string(m.scopes[i]);
                        }
                        if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                            for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                                w.uint32(50).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                            }
                        }
                        return w;
                    };

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.srv.oauth2.Token} Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Token.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.srv.oauth2.Token(), k;
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.access_token = r.string();
                                break;
                            case 2:
                                m.token_type = r.string();
                                break;
                            case 3:
                                m.refresh_token = r.string();
                                break;
                            case 4:
                                m.expires_at = r.int64();
                                break;
                            case 5:
                                if (!(m.scopes && m.scopes.length))
                                    m.scopes = [];
                                m.scopes.push(r.string());
                                break;
                            case 6:
                                r.skip().pos++;
                                if (m.metadata === $util.emptyObject)
                                    m.metadata = {};
                                k = r.string();
                                r.pos++;
                                m.metadata[k] = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.srv.oauth2.Token} Token
                     */
                    Token.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.srv.oauth2.Token)
                            return d;
                        var m = new $root.jubian.golottery.srv.oauth2.Token();
                        if (d.access_token != null) {
                            m.access_token = String(d.access_token);
                        }
                        if (d.token_type != null) {
                            m.token_type = String(d.token_type);
                        }
                        if (d.refresh_token != null) {
                            m.refresh_token = String(d.refresh_token);
                        }
                        if (d.expires_at != null) {
                            if ($util.Long)
                                (m.expires_at = $util.Long.fromValue(d.expires_at)).unsigned = false;
                            else if (typeof d.expires_at === "string")
                                m.expires_at = parseInt(d.expires_at, 10);
                            else if (typeof d.expires_at === "number")
                                m.expires_at = d.expires_at;
                            else if (typeof d.expires_at === "object")
                                m.expires_at = new $util.LongBits(d.expires_at.low >>> 0, d.expires_at.high >>> 0).toNumber();
                        }
                        if (d.scopes) {
                            if (!Array.isArray(d.scopes))
                                throw TypeError(".jubian.golottery.srv.oauth2.Token.scopes: array expected");
                            m.scopes = [];
                            for (var i = 0; i < d.scopes.length; ++i) {
                                m.scopes[i] = String(d.scopes[i]);
                            }
                        }
                        if (d.metadata) {
                            if (typeof d.metadata !== "object")
                                throw TypeError(".jubian.golottery.srv.oauth2.Token.metadata: object expected");
                            m.metadata = {};
                            for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                                m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @static
                     * @param {jubian.golottery.srv.oauth2.Token} m Token
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Token.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.arrays || o.defaults) {
                            d.scopes = [];
                        }
                        if (o.objects || o.defaults) {
                            d.metadata = {};
                        }
                        if (o.defaults) {
                            d.access_token = "";
                            d.token_type = "";
                            d.refresh_token = "";
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.expires_at = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.expires_at = o.longs === String ? "0" : 0;
                        }
                        if (m.access_token != null && m.hasOwnProperty("access_token")) {
                            d.access_token = m.access_token;
                        }
                        if (m.token_type != null && m.hasOwnProperty("token_type")) {
                            d.token_type = m.token_type;
                        }
                        if (m.refresh_token != null && m.hasOwnProperty("refresh_token")) {
                            d.refresh_token = m.refresh_token;
                        }
                        if (m.expires_at != null && m.hasOwnProperty("expires_at")) {
                            if (typeof m.expires_at === "number")
                                d.expires_at = o.longs === String ? String(m.expires_at) : m.expires_at;
                            else
                                d.expires_at = o.longs === String ? $util.Long.prototype.toString.call(m.expires_at) : o.longs === Number ? new $util.LongBits(m.expires_at.low >>> 0, m.expires_at.high >>> 0).toNumber() : m.expires_at;
                        }
                        if (m.scopes && m.scopes.length) {
                            d.scopes = [];
                            for (var j = 0; j < m.scopes.length; ++j) {
                                d.scopes[j] = m.scopes[j];
                            }
                        }
                        var ks2;
                        if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                            d.metadata = {};
                            for (var j = 0; j < ks2.length; ++j) {
                                d.metadata[ks2[j]] = m.metadata[ks2[j]];
                            }
                        }
                        return d;
                    };

                    /**
                     * Converts this Token to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.srv.oauth2.Token
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Token.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Token;
                })();

                return oauth2;
            })();

            return srv;
        })();

        golottery.model = (function() {

            /**
             * Namespace model.
             * @memberof jubian.golottery
             * @namespace
             */
            var model = {};

            model.profile = (function() {

                /**
                 * Namespace profile.
                 * @memberof jubian.golottery.model
                 * @namespace
                 */
                var profile = {};

                profile.Profile = (function() {

                    /**
                     * Properties of a Profile.
                     * @memberof jubian.golottery.model.profile
                     * @interface IProfile
                     * @property {number|Long|null} [id] Profile id
                     * @property {string|null} [username] Profile username
                     * @property {string|null} [nickname] Profile nickname
                     * @property {number|null} [province] Profile province
                     * @property {number|null} [city] Profile city
                     * @property {string|null} [location] Profile location
                     * @property {number|null} [location_id] Profile location_id
                     * @property {string|null} [description] Profile description
                     * @property {string|null} [profile_image_url] Profile profile_image_url
                     * @property {string|null} [gender] Profile gender
                     * @property {number|Long|null} [create_time] Profile create_time
                     * @property {number|Long|null} [updated] Profile updated
                     * @property {boolean|null} [geo_enabled] Profile geo_enabled
                     * @property {jubian.golottery.model.profile.RoleType|null} [role] Profile role
                     * @property {string|null} [homepage] Profile homepage
                     * @property {Object.<string,string>|null} [metadata] Profile metadata
                     * @property {jubian.golottery.model.profile.IOrganization|null} [group] Profile group
                     */

                    /**
                     * Constructs a new Profile.
                     * @memberof jubian.golottery.model.profile
                     * @classdesc Represents a Profile.
                     * @implements IProfile
                     * @constructor
                     * @param {jubian.golottery.model.profile.IProfile=} [p] Properties to set
                     */
                    function Profile(p) {
                        this.metadata = {};
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * Profile id.
                     * @member {number|Long} id
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Profile username.
                     * @member {string} username
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.username = "";

                    /**
                     * Profile nickname.
                     * @member {string} nickname
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.nickname = "";

                    /**
                     * Profile province.
                     * @member {number} province
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.province = 0;

                    /**
                     * Profile city.
                     * @member {number} city
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.city = 0;

                    /**
                     * Profile location.
                     * @member {string} location
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.location = "";

                    /**
                     * Profile location_id.
                     * @member {number} location_id
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.location_id = 0;

                    /**
                     * Profile description.
                     * @member {string} description
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.description = "";

                    /**
                     * Profile profile_image_url.
                     * @member {string} profile_image_url
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.profile_image_url = "";

                    /**
                     * Profile gender.
                     * @member {string} gender
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.gender = "";

                    /**
                     * Profile create_time.
                     * @member {number|Long} create_time
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.create_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Profile updated.
                     * @member {number|Long} updated
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.updated = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Profile geo_enabled.
                     * @member {boolean} geo_enabled
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.geo_enabled = false;

                    /**
                     * Profile role.
                     * @member {jubian.golottery.model.profile.RoleType} role
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.role = 0;

                    /**
                     * Profile homepage.
                     * @member {string} homepage
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.homepage = "";

                    /**
                     * Profile metadata.
                     * @member {Object.<string,string>} metadata
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.metadata = $util.emptyObject;

                    /**
                     * Profile group.
                     * @member {jubian.golottery.model.profile.IOrganization|null|undefined} group
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     */
                    Profile.prototype.group = null;

                    /**
                     * Encodes the specified Profile message. Does not implicitly {@link jubian.golottery.model.profile.Profile.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.model.profile.Profile
                     * @static
                     * @param {jubian.golottery.model.profile.IProfile} m Profile message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Profile.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                            w.uint32(8).int64(m.id);
                        if (m.username != null && Object.hasOwnProperty.call(m, "username"))
                            w.uint32(18).string(m.username);
                        if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                            w.uint32(26).string(m.nickname);
                        if (m.province != null && Object.hasOwnProperty.call(m, "province"))
                            w.uint32(32).int32(m.province);
                        if (m.city != null && Object.hasOwnProperty.call(m, "city"))
                            w.uint32(40).int32(m.city);
                        if (m.location != null && Object.hasOwnProperty.call(m, "location"))
                            w.uint32(50).string(m.location);
                        if (m.location_id != null && Object.hasOwnProperty.call(m, "location_id"))
                            w.uint32(56).int32(m.location_id);
                        if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                            w.uint32(66).string(m.description);
                        if (m.profile_image_url != null && Object.hasOwnProperty.call(m, "profile_image_url"))
                            w.uint32(74).string(m.profile_image_url);
                        if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                            w.uint32(82).string(m.gender);
                        if (m.create_time != null && Object.hasOwnProperty.call(m, "create_time"))
                            w.uint32(88).int64(m.create_time);
                        if (m.updated != null && Object.hasOwnProperty.call(m, "updated"))
                            w.uint32(96).int64(m.updated);
                        if (m.geo_enabled != null && Object.hasOwnProperty.call(m, "geo_enabled"))
                            w.uint32(104).bool(m.geo_enabled);
                        if (m.role != null && Object.hasOwnProperty.call(m, "role"))
                            w.uint32(112).int32(m.role);
                        if (m.homepage != null && Object.hasOwnProperty.call(m, "homepage"))
                            w.uint32(122).string(m.homepage);
                        if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                            for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                                w.uint32(130).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                            }
                        }
                        if (m.group != null && Object.hasOwnProperty.call(m, "group"))
                            $root.jubian.golottery.model.profile.Organization.encode(m.group, w.uint32(138).fork()).ldelim();
                        return w;
                    };

                    /**
                     * Decodes a Profile message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.model.profile.Profile
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.model.profile.Profile} Profile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Profile.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.model.profile.Profile(), k;
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.id = r.int64();
                                break;
                            case 2:
                                m.username = r.string();
                                break;
                            case 3:
                                m.nickname = r.string();
                                break;
                            case 4:
                                m.province = r.int32();
                                break;
                            case 5:
                                m.city = r.int32();
                                break;
                            case 6:
                                m.location = r.string();
                                break;
                            case 7:
                                m.location_id = r.int32();
                                break;
                            case 8:
                                m.description = r.string();
                                break;
                            case 9:
                                m.profile_image_url = r.string();
                                break;
                            case 10:
                                m.gender = r.string();
                                break;
                            case 11:
                                m.create_time = r.int64();
                                break;
                            case 12:
                                m.updated = r.int64();
                                break;
                            case 13:
                                m.geo_enabled = r.bool();
                                break;
                            case 14:
                                m.role = r.int32();
                                break;
                            case 15:
                                m.homepage = r.string();
                                break;
                            case 16:
                                r.skip().pos++;
                                if (m.metadata === $util.emptyObject)
                                    m.metadata = {};
                                k = r.string();
                                r.pos++;
                                m.metadata[k] = r.string();
                                break;
                            case 17:
                                m.group = $root.jubian.golottery.model.profile.Organization.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a Profile message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.model.profile.Profile
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.model.profile.Profile} Profile
                     */
                    Profile.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.model.profile.Profile)
                            return d;
                        var m = new $root.jubian.golottery.model.profile.Profile();
                        if (d.id != null) {
                            if ($util.Long)
                                (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                            else if (typeof d.id === "string")
                                m.id = parseInt(d.id, 10);
                            else if (typeof d.id === "number")
                                m.id = d.id;
                            else if (typeof d.id === "object")
                                m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
                        }
                        if (d.username != null) {
                            m.username = String(d.username);
                        }
                        if (d.nickname != null) {
                            m.nickname = String(d.nickname);
                        }
                        if (d.province != null) {
                            m.province = d.province | 0;
                        }
                        if (d.city != null) {
                            m.city = d.city | 0;
                        }
                        if (d.location != null) {
                            m.location = String(d.location);
                        }
                        if (d.location_id != null) {
                            m.location_id = d.location_id | 0;
                        }
                        if (d.description != null) {
                            m.description = String(d.description);
                        }
                        if (d.profile_image_url != null) {
                            m.profile_image_url = String(d.profile_image_url);
                        }
                        if (d.gender != null) {
                            m.gender = String(d.gender);
                        }
                        if (d.create_time != null) {
                            if ($util.Long)
                                (m.create_time = $util.Long.fromValue(d.create_time)).unsigned = false;
                            else if (typeof d.create_time === "string")
                                m.create_time = parseInt(d.create_time, 10);
                            else if (typeof d.create_time === "number")
                                m.create_time = d.create_time;
                            else if (typeof d.create_time === "object")
                                m.create_time = new $util.LongBits(d.create_time.low >>> 0, d.create_time.high >>> 0).toNumber();
                        }
                        if (d.updated != null) {
                            if ($util.Long)
                                (m.updated = $util.Long.fromValue(d.updated)).unsigned = false;
                            else if (typeof d.updated === "string")
                                m.updated = parseInt(d.updated, 10);
                            else if (typeof d.updated === "number")
                                m.updated = d.updated;
                            else if (typeof d.updated === "object")
                                m.updated = new $util.LongBits(d.updated.low >>> 0, d.updated.high >>> 0).toNumber();
                        }
                        if (d.geo_enabled != null) {
                            m.geo_enabled = Boolean(d.geo_enabled);
                        }
                        switch (d.role) {
                        case "USER":
                        case 0:
                            m.role = 0;
                            break;
                        case "BOSS":
                        case 1:
                            m.role = 1;
                            break;
                        case "EMPLOYEE":
                        case 2:
                            m.role = 2;
                            break;
                        case "KOL":
                        case 3:
                            m.role = 3;
                            break;
                        case "CAPTAIN":
                        case 4:
                            m.role = 4;
                            break;
                        }
                        if (d.homepage != null) {
                            m.homepage = String(d.homepage);
                        }
                        if (d.metadata) {
                            if (typeof d.metadata !== "object")
                                throw TypeError(".jubian.golottery.model.profile.Profile.metadata: object expected");
                            m.metadata = {};
                            for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                                m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                            }
                        }
                        if (d.group != null) {
                            if (typeof d.group !== "object")
                                throw TypeError(".jubian.golottery.model.profile.Profile.group: object expected");
                            m.group = $root.jubian.golottery.model.profile.Organization.fromObject(d.group);
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from a Profile message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.model.profile.Profile
                     * @static
                     * @param {jubian.golottery.model.profile.Profile} m Profile
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Profile.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.objects || o.defaults) {
                            d.metadata = {};
                        }
                        if (o.defaults) {
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.id = o.longs === String ? "0" : 0;
                            d.username = "";
                            d.nickname = "";
                            d.province = 0;
                            d.city = 0;
                            d.location = "";
                            d.location_id = 0;
                            d.description = "";
                            d.profile_image_url = "";
                            d.gender = "";
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.create_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.create_time = o.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.updated = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.updated = o.longs === String ? "0" : 0;
                            d.geo_enabled = false;
                            d.role = o.enums === String ? "USER" : 0;
                            d.homepage = "";
                            d.group = null;
                        }
                        if (m.id != null && m.hasOwnProperty("id")) {
                            if (typeof m.id === "number")
                                d.id = o.longs === String ? String(m.id) : m.id;
                            else
                                d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
                        }
                        if (m.username != null && m.hasOwnProperty("username")) {
                            d.username = m.username;
                        }
                        if (m.nickname != null && m.hasOwnProperty("nickname")) {
                            d.nickname = m.nickname;
                        }
                        if (m.province != null && m.hasOwnProperty("province")) {
                            d.province = m.province;
                        }
                        if (m.city != null && m.hasOwnProperty("city")) {
                            d.city = m.city;
                        }
                        if (m.location != null && m.hasOwnProperty("location")) {
                            d.location = m.location;
                        }
                        if (m.location_id != null && m.hasOwnProperty("location_id")) {
                            d.location_id = m.location_id;
                        }
                        if (m.description != null && m.hasOwnProperty("description")) {
                            d.description = m.description;
                        }
                        if (m.profile_image_url != null && m.hasOwnProperty("profile_image_url")) {
                            d.profile_image_url = m.profile_image_url;
                        }
                        if (m.gender != null && m.hasOwnProperty("gender")) {
                            d.gender = m.gender;
                        }
                        if (m.create_time != null && m.hasOwnProperty("create_time")) {
                            if (typeof m.create_time === "number")
                                d.create_time = o.longs === String ? String(m.create_time) : m.create_time;
                            else
                                d.create_time = o.longs === String ? $util.Long.prototype.toString.call(m.create_time) : o.longs === Number ? new $util.LongBits(m.create_time.low >>> 0, m.create_time.high >>> 0).toNumber() : m.create_time;
                        }
                        if (m.updated != null && m.hasOwnProperty("updated")) {
                            if (typeof m.updated === "number")
                                d.updated = o.longs === String ? String(m.updated) : m.updated;
                            else
                                d.updated = o.longs === String ? $util.Long.prototype.toString.call(m.updated) : o.longs === Number ? new $util.LongBits(m.updated.low >>> 0, m.updated.high >>> 0).toNumber() : m.updated;
                        }
                        if (m.geo_enabled != null && m.hasOwnProperty("geo_enabled")) {
                            d.geo_enabled = m.geo_enabled;
                        }
                        if (m.role != null && m.hasOwnProperty("role")) {
                            d.role = o.enums === String ? $root.jubian.golottery.model.profile.RoleType[m.role] : m.role;
                        }
                        if (m.homepage != null && m.hasOwnProperty("homepage")) {
                            d.homepage = m.homepage;
                        }
                        var ks2;
                        if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                            d.metadata = {};
                            for (var j = 0; j < ks2.length; ++j) {
                                d.metadata[ks2[j]] = m.metadata[ks2[j]];
                            }
                        }
                        if (m.group != null && m.hasOwnProperty("group")) {
                            d.group = $root.jubian.golottery.model.profile.Organization.toObject(m.group, o);
                        }
                        return d;
                    };

                    /**
                     * Converts this Profile to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.model.profile.Profile
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Profile.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Profile;
                })();

                profile.Organization = (function() {

                    /**
                     * Properties of an Organization.
                     * @memberof jubian.golottery.model.profile
                     * @interface IOrganization
                     * @property {number|Long|null} [id] Organization id
                     * @property {number|null} [type] Organization type
                     * @property {number|Long|null} [sales_shop_id] Organization sales_shop_id
                     * @property {number|Long|null} [owner_id] Organization owner_id
                     * @property {string|null} [owner_name] Organization owner_name
                     * @property {string|null} [lisense_id] Organization lisense_id
                     * @property {string|null} [phone] Organization phone
                     * @property {string|null} [username] Organization username
                     * @property {string|null} [brief_name] Organization brief_name
                     * @property {string|null} [qrcode_url] Organization qrcode_url
                     * @property {string|null} [share_url] Organization share_url
                     * @property {string|null} [profile_image_url] Organization profile_image_url
                     * @property {string|null} [homepage] Organization homepage
                     * @property {string|null} [address] Organization address
                     * @property {Object.<string,string>|null} [metadata] Organization metadata
                     * @property {string|null} [description] Organization description
                     * @property {number|null} [lat] Organization lat
                     * @property {number|null} [lon] Organization lon
                     * @property {string|null} [location] Organization location
                     * @property {number|null} [location_id] Organization location_id
                     * @property {number|Long|null} [create_time] Organization create_time
                     * @property {number|Long|null} [updated] Organization updated
                     * @property {jubian.golottery.model.profile.RoleType|null} [role] Organization role
                     * @property {Array.<jubian.golottery.model.profile.RightType>|null} [rights] Organization rights
                     */

                    /**
                     * Constructs a new Organization.
                     * @memberof jubian.golottery.model.profile
                     * @classdesc Represents an Organization.
                     * @implements IOrganization
                     * @constructor
                     * @param {jubian.golottery.model.profile.IOrganization=} [p] Properties to set
                     */
                    function Organization(p) {
                        this.metadata = {};
                        this.rights = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * Organization id.
                     * @member {number|Long} id
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Organization type.
                     * @member {number} type
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.type = 0;

                    /**
                     * Organization sales_shop_id.
                     * @member {number|Long} sales_shop_id
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.sales_shop_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Organization owner_id.
                     * @member {number|Long} owner_id
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.owner_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Organization owner_name.
                     * @member {string} owner_name
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.owner_name = "";

                    /**
                     * Organization lisense_id.
                     * @member {string} lisense_id
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.lisense_id = "";

                    /**
                     * Organization phone.
                     * @member {string} phone
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.phone = "";

                    /**
                     * Organization username.
                     * @member {string} username
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.username = "";

                    /**
                     * Organization brief_name.
                     * @member {string} brief_name
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.brief_name = "";

                    /**
                     * Organization qrcode_url.
                     * @member {string} qrcode_url
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.qrcode_url = "";

                    /**
                     * Organization share_url.
                     * @member {string} share_url
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.share_url = "";

                    /**
                     * Organization profile_image_url.
                     * @member {string} profile_image_url
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.profile_image_url = "";

                    /**
                     * Organization homepage.
                     * @member {string} homepage
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.homepage = "";

                    /**
                     * Organization address.
                     * @member {string} address
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.address = "";

                    /**
                     * Organization metadata.
                     * @member {Object.<string,string>} metadata
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.metadata = $util.emptyObject;

                    /**
                     * Organization description.
                     * @member {string} description
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.description = "";

                    /**
                     * Organization lat.
                     * @member {number} lat
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.lat = 0;

                    /**
                     * Organization lon.
                     * @member {number} lon
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.lon = 0;

                    /**
                     * Organization location.
                     * @member {string} location
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.location = "";

                    /**
                     * Organization location_id.
                     * @member {number} location_id
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.location_id = 0;

                    /**
                     * Organization create_time.
                     * @member {number|Long} create_time
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.create_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Organization updated.
                     * @member {number|Long} updated
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.updated = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Organization role.
                     * @member {jubian.golottery.model.profile.RoleType} role
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.role = 0;

                    /**
                     * Organization rights.
                     * @member {Array.<jubian.golottery.model.profile.RightType>} rights
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     */
                    Organization.prototype.rights = $util.emptyArray;

                    /**
                     * Encodes the specified Organization message. Does not implicitly {@link jubian.golottery.model.profile.Organization.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.model.profile.Organization
                     * @static
                     * @param {jubian.golottery.model.profile.IOrganization} m Organization message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Organization.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                            w.uint32(8).int64(m.id);
                        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                            w.uint32(16).int32(m.type);
                        if (m.sales_shop_id != null && Object.hasOwnProperty.call(m, "sales_shop_id"))
                            w.uint32(24).int64(m.sales_shop_id);
                        if (m.owner_id != null && Object.hasOwnProperty.call(m, "owner_id"))
                            w.uint32(32).int64(m.owner_id);
                        if (m.owner_name != null && Object.hasOwnProperty.call(m, "owner_name"))
                            w.uint32(42).string(m.owner_name);
                        if (m.lisense_id != null && Object.hasOwnProperty.call(m, "lisense_id"))
                            w.uint32(50).string(m.lisense_id);
                        if (m.phone != null && Object.hasOwnProperty.call(m, "phone"))
                            w.uint32(58).string(m.phone);
                        if (m.username != null && Object.hasOwnProperty.call(m, "username"))
                            w.uint32(66).string(m.username);
                        if (m.brief_name != null && Object.hasOwnProperty.call(m, "brief_name"))
                            w.uint32(74).string(m.brief_name);
                        if (m.qrcode_url != null && Object.hasOwnProperty.call(m, "qrcode_url"))
                            w.uint32(82).string(m.qrcode_url);
                        if (m.share_url != null && Object.hasOwnProperty.call(m, "share_url"))
                            w.uint32(90).string(m.share_url);
                        if (m.profile_image_url != null && Object.hasOwnProperty.call(m, "profile_image_url"))
                            w.uint32(98).string(m.profile_image_url);
                        if (m.homepage != null && Object.hasOwnProperty.call(m, "homepage"))
                            w.uint32(106).string(m.homepage);
                        if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                            w.uint32(114).string(m.address);
                        if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                            for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                                w.uint32(122).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                            }
                        }
                        if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                            w.uint32(130).string(m.description);
                        if (m.lat != null && Object.hasOwnProperty.call(m, "lat"))
                            w.uint32(137).double(m.lat);
                        if (m.lon != null && Object.hasOwnProperty.call(m, "lon"))
                            w.uint32(145).double(m.lon);
                        if (m.location != null && Object.hasOwnProperty.call(m, "location"))
                            w.uint32(154).string(m.location);
                        if (m.location_id != null && Object.hasOwnProperty.call(m, "location_id"))
                            w.uint32(160).int32(m.location_id);
                        if (m.create_time != null && Object.hasOwnProperty.call(m, "create_time"))
                            w.uint32(168).int64(m.create_time);
                        if (m.updated != null && Object.hasOwnProperty.call(m, "updated"))
                            w.uint32(176).int64(m.updated);
                        if (m.role != null && Object.hasOwnProperty.call(m, "role"))
                            w.uint32(184).int32(m.role);
                        if (m.rights != null && m.rights.length) {
                            w.uint32(194).fork();
                            for (var i = 0; i < m.rights.length; ++i)
                                w.int32(m.rights[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    /**
                     * Decodes an Organization message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.model.profile.Organization
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.model.profile.Organization} Organization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Organization.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.model.profile.Organization(), k;
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.id = r.int64();
                                break;
                            case 2:
                                m.type = r.int32();
                                break;
                            case 3:
                                m.sales_shop_id = r.int64();
                                break;
                            case 4:
                                m.owner_id = r.int64();
                                break;
                            case 5:
                                m.owner_name = r.string();
                                break;
                            case 6:
                                m.lisense_id = r.string();
                                break;
                            case 7:
                                m.phone = r.string();
                                break;
                            case 8:
                                m.username = r.string();
                                break;
                            case 9:
                                m.brief_name = r.string();
                                break;
                            case 10:
                                m.qrcode_url = r.string();
                                break;
                            case 11:
                                m.share_url = r.string();
                                break;
                            case 12:
                                m.profile_image_url = r.string();
                                break;
                            case 13:
                                m.homepage = r.string();
                                break;
                            case 14:
                                m.address = r.string();
                                break;
                            case 15:
                                r.skip().pos++;
                                if (m.metadata === $util.emptyObject)
                                    m.metadata = {};
                                k = r.string();
                                r.pos++;
                                m.metadata[k] = r.string();
                                break;
                            case 16:
                                m.description = r.string();
                                break;
                            case 17:
                                m.lat = r.double();
                                break;
                            case 18:
                                m.lon = r.double();
                                break;
                            case 19:
                                m.location = r.string();
                                break;
                            case 20:
                                m.location_id = r.int32();
                                break;
                            case 21:
                                m.create_time = r.int64();
                                break;
                            case 22:
                                m.updated = r.int64();
                                break;
                            case 23:
                                m.role = r.int32();
                                break;
                            case 24:
                                if (!(m.rights && m.rights.length))
                                    m.rights = [];
                                if ((t & 7) === 2) {
                                    var c2 = r.uint32() + r.pos;
                                    while (r.pos < c2)
                                        m.rights.push(r.int32());
                                } else
                                    m.rights.push(r.int32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates an Organization message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.model.profile.Organization
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.model.profile.Organization} Organization
                     */
                    Organization.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.model.profile.Organization)
                            return d;
                        var m = new $root.jubian.golottery.model.profile.Organization();
                        if (d.id != null) {
                            if ($util.Long)
                                (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                            else if (typeof d.id === "string")
                                m.id = parseInt(d.id, 10);
                            else if (typeof d.id === "number")
                                m.id = d.id;
                            else if (typeof d.id === "object")
                                m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
                        }
                        if (d.type != null) {
                            m.type = d.type | 0;
                        }
                        if (d.sales_shop_id != null) {
                            if ($util.Long)
                                (m.sales_shop_id = $util.Long.fromValue(d.sales_shop_id)).unsigned = false;
                            else if (typeof d.sales_shop_id === "string")
                                m.sales_shop_id = parseInt(d.sales_shop_id, 10);
                            else if (typeof d.sales_shop_id === "number")
                                m.sales_shop_id = d.sales_shop_id;
                            else if (typeof d.sales_shop_id === "object")
                                m.sales_shop_id = new $util.LongBits(d.sales_shop_id.low >>> 0, d.sales_shop_id.high >>> 0).toNumber();
                        }
                        if (d.owner_id != null) {
                            if ($util.Long)
                                (m.owner_id = $util.Long.fromValue(d.owner_id)).unsigned = false;
                            else if (typeof d.owner_id === "string")
                                m.owner_id = parseInt(d.owner_id, 10);
                            else if (typeof d.owner_id === "number")
                                m.owner_id = d.owner_id;
                            else if (typeof d.owner_id === "object")
                                m.owner_id = new $util.LongBits(d.owner_id.low >>> 0, d.owner_id.high >>> 0).toNumber();
                        }
                        if (d.owner_name != null) {
                            m.owner_name = String(d.owner_name);
                        }
                        if (d.lisense_id != null) {
                            m.lisense_id = String(d.lisense_id);
                        }
                        if (d.phone != null) {
                            m.phone = String(d.phone);
                        }
                        if (d.username != null) {
                            m.username = String(d.username);
                        }
                        if (d.brief_name != null) {
                            m.brief_name = String(d.brief_name);
                        }
                        if (d.qrcode_url != null) {
                            m.qrcode_url = String(d.qrcode_url);
                        }
                        if (d.share_url != null) {
                            m.share_url = String(d.share_url);
                        }
                        if (d.profile_image_url != null) {
                            m.profile_image_url = String(d.profile_image_url);
                        }
                        if (d.homepage != null) {
                            m.homepage = String(d.homepage);
                        }
                        if (d.address != null) {
                            m.address = String(d.address);
                        }
                        if (d.metadata) {
                            if (typeof d.metadata !== "object")
                                throw TypeError(".jubian.golottery.model.profile.Organization.metadata: object expected");
                            m.metadata = {};
                            for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                                m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                            }
                        }
                        if (d.description != null) {
                            m.description = String(d.description);
                        }
                        if (d.lat != null) {
                            m.lat = Number(d.lat);
                        }
                        if (d.lon != null) {
                            m.lon = Number(d.lon);
                        }
                        if (d.location != null) {
                            m.location = String(d.location);
                        }
                        if (d.location_id != null) {
                            m.location_id = d.location_id | 0;
                        }
                        if (d.create_time != null) {
                            if ($util.Long)
                                (m.create_time = $util.Long.fromValue(d.create_time)).unsigned = false;
                            else if (typeof d.create_time === "string")
                                m.create_time = parseInt(d.create_time, 10);
                            else if (typeof d.create_time === "number")
                                m.create_time = d.create_time;
                            else if (typeof d.create_time === "object")
                                m.create_time = new $util.LongBits(d.create_time.low >>> 0, d.create_time.high >>> 0).toNumber();
                        }
                        if (d.updated != null) {
                            if ($util.Long)
                                (m.updated = $util.Long.fromValue(d.updated)).unsigned = false;
                            else if (typeof d.updated === "string")
                                m.updated = parseInt(d.updated, 10);
                            else if (typeof d.updated === "number")
                                m.updated = d.updated;
                            else if (typeof d.updated === "object")
                                m.updated = new $util.LongBits(d.updated.low >>> 0, d.updated.high >>> 0).toNumber();
                        }
                        switch (d.role) {
                        case "USER":
                        case 0:
                            m.role = 0;
                            break;
                        case "BOSS":
                        case 1:
                            m.role = 1;
                            break;
                        case "EMPLOYEE":
                        case 2:
                            m.role = 2;
                            break;
                        case "KOL":
                        case 3:
                            m.role = 3;
                            break;
                        case "CAPTAIN":
                        case 4:
                            m.role = 4;
                            break;
                        }
                        if (d.rights) {
                            if (!Array.isArray(d.rights))
                                throw TypeError(".jubian.golottery.model.profile.Organization.rights: array expected");
                            m.rights = [];
                            for (var i = 0; i < d.rights.length; ++i) {
                                switch (d.rights[i]) {
                                default:
                                case "AVAILABLE":
                                case 0:
                                    m.rights[i] = 0;
                                    break;
                                case "DISABLE":
                                case 1:
                                    m.rights[i] = 1;
                                    break;
                                case "FORBIDDEN_CHAT":
                                case 2:
                                    m.rights[i] = 2;
                                    break;
                                case "FORBIDDEN_PUBLISH":
                                case 3:
                                    m.rights[i] = 3;
                                    break;
                                case "BLACKLIST":
                                case 4:
                                    m.rights[i] = 4;
                                    break;
                                case "FORBIDDEN_OPER":
                                case 5:
                                    m.rights[i] = 5;
                                    break;
                                }
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from an Organization message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.model.profile.Organization
                     * @static
                     * @param {jubian.golottery.model.profile.Organization} m Organization
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Organization.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.arrays || o.defaults) {
                            d.rights = [];
                        }
                        if (o.objects || o.defaults) {
                            d.metadata = {};
                        }
                        if (o.defaults) {
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.id = o.longs === String ? "0" : 0;
                            d.type = 0;
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.sales_shop_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.sales_shop_id = o.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.owner_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.owner_id = o.longs === String ? "0" : 0;
                            d.owner_name = "";
                            d.lisense_id = "";
                            d.phone = "";
                            d.username = "";
                            d.brief_name = "";
                            d.qrcode_url = "";
                            d.share_url = "";
                            d.profile_image_url = "";
                            d.homepage = "";
                            d.address = "";
                            d.description = "";
                            d.lat = 0;
                            d.lon = 0;
                            d.location = "";
                            d.location_id = 0;
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.create_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.create_time = o.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var n = new $util.Long(0, 0, false);
                                d.updated = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                            } else
                                d.updated = o.longs === String ? "0" : 0;
                            d.role = o.enums === String ? "USER" : 0;
                        }
                        if (m.id != null && m.hasOwnProperty("id")) {
                            if (typeof m.id === "number")
                                d.id = o.longs === String ? String(m.id) : m.id;
                            else
                                d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
                        }
                        if (m.type != null && m.hasOwnProperty("type")) {
                            d.type = m.type;
                        }
                        if (m.sales_shop_id != null && m.hasOwnProperty("sales_shop_id")) {
                            if (typeof m.sales_shop_id === "number")
                                d.sales_shop_id = o.longs === String ? String(m.sales_shop_id) : m.sales_shop_id;
                            else
                                d.sales_shop_id = o.longs === String ? $util.Long.prototype.toString.call(m.sales_shop_id) : o.longs === Number ? new $util.LongBits(m.sales_shop_id.low >>> 0, m.sales_shop_id.high >>> 0).toNumber() : m.sales_shop_id;
                        }
                        if (m.owner_id != null && m.hasOwnProperty("owner_id")) {
                            if (typeof m.owner_id === "number")
                                d.owner_id = o.longs === String ? String(m.owner_id) : m.owner_id;
                            else
                                d.owner_id = o.longs === String ? $util.Long.prototype.toString.call(m.owner_id) : o.longs === Number ? new $util.LongBits(m.owner_id.low >>> 0, m.owner_id.high >>> 0).toNumber() : m.owner_id;
                        }
                        if (m.owner_name != null && m.hasOwnProperty("owner_name")) {
                            d.owner_name = m.owner_name;
                        }
                        if (m.lisense_id != null && m.hasOwnProperty("lisense_id")) {
                            d.lisense_id = m.lisense_id;
                        }
                        if (m.phone != null && m.hasOwnProperty("phone")) {
                            d.phone = m.phone;
                        }
                        if (m.username != null && m.hasOwnProperty("username")) {
                            d.username = m.username;
                        }
                        if (m.brief_name != null && m.hasOwnProperty("brief_name")) {
                            d.brief_name = m.brief_name;
                        }
                        if (m.qrcode_url != null && m.hasOwnProperty("qrcode_url")) {
                            d.qrcode_url = m.qrcode_url;
                        }
                        if (m.share_url != null && m.hasOwnProperty("share_url")) {
                            d.share_url = m.share_url;
                        }
                        if (m.profile_image_url != null && m.hasOwnProperty("profile_image_url")) {
                            d.profile_image_url = m.profile_image_url;
                        }
                        if (m.homepage != null && m.hasOwnProperty("homepage")) {
                            d.homepage = m.homepage;
                        }
                        if (m.address != null && m.hasOwnProperty("address")) {
                            d.address = m.address;
                        }
                        var ks2;
                        if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                            d.metadata = {};
                            for (var j = 0; j < ks2.length; ++j) {
                                d.metadata[ks2[j]] = m.metadata[ks2[j]];
                            }
                        }
                        if (m.description != null && m.hasOwnProperty("description")) {
                            d.description = m.description;
                        }
                        if (m.lat != null && m.hasOwnProperty("lat")) {
                            d.lat = o.json && !isFinite(m.lat) ? String(m.lat) : m.lat;
                        }
                        if (m.lon != null && m.hasOwnProperty("lon")) {
                            d.lon = o.json && !isFinite(m.lon) ? String(m.lon) : m.lon;
                        }
                        if (m.location != null && m.hasOwnProperty("location")) {
                            d.location = m.location;
                        }
                        if (m.location_id != null && m.hasOwnProperty("location_id")) {
                            d.location_id = m.location_id;
                        }
                        if (m.create_time != null && m.hasOwnProperty("create_time")) {
                            if (typeof m.create_time === "number")
                                d.create_time = o.longs === String ? String(m.create_time) : m.create_time;
                            else
                                d.create_time = o.longs === String ? $util.Long.prototype.toString.call(m.create_time) : o.longs === Number ? new $util.LongBits(m.create_time.low >>> 0, m.create_time.high >>> 0).toNumber() : m.create_time;
                        }
                        if (m.updated != null && m.hasOwnProperty("updated")) {
                            if (typeof m.updated === "number")
                                d.updated = o.longs === String ? String(m.updated) : m.updated;
                            else
                                d.updated = o.longs === String ? $util.Long.prototype.toString.call(m.updated) : o.longs === Number ? new $util.LongBits(m.updated.low >>> 0, m.updated.high >>> 0).toNumber() : m.updated;
                        }
                        if (m.role != null && m.hasOwnProperty("role")) {
                            d.role = o.enums === String ? $root.jubian.golottery.model.profile.RoleType[m.role] : m.role;
                        }
                        if (m.rights && m.rights.length) {
                            d.rights = [];
                            for (var j = 0; j < m.rights.length; ++j) {
                                d.rights[j] = o.enums === String ? $root.jubian.golottery.model.profile.RightType[m.rights[j]] : m.rights[j];
                            }
                        }
                        return d;
                    };

                    /**
                     * Converts this Organization to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.model.profile.Organization
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Organization.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Organization;
                })();

                /**
                 * RoleType enum.
                 * @name jubian.golottery.model.profile.RoleType
                 * @enum {number}
                 * @property {number} USER=0 USER value
                 * @property {number} BOSS=1 BOSS value
                 * @property {number} EMPLOYEE=2 EMPLOYEE value
                 * @property {number} KOL=3 KOL value
                 * @property {number} CAPTAIN=4 CAPTAIN value
                 */
                profile.RoleType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "USER"] = 0;
                    values[valuesById[1] = "BOSS"] = 1;
                    values[valuesById[2] = "EMPLOYEE"] = 2;
                    values[valuesById[3] = "KOL"] = 3;
                    values[valuesById[4] = "CAPTAIN"] = 4;
                    return values;
                })();

                /**
                 * RightType enum.
                 * @name jubian.golottery.model.profile.RightType
                 * @enum {number}
                 * @property {number} AVAILABLE=0 AVAILABLE value
                 * @property {number} DISABLE=1 DISABLE value
                 * @property {number} FORBIDDEN_CHAT=2 FORBIDDEN_CHAT value
                 * @property {number} FORBIDDEN_PUBLISH=3 FORBIDDEN_PUBLISH value
                 * @property {number} BLACKLIST=4 BLACKLIST value
                 * @property {number} FORBIDDEN_OPER=5 FORBIDDEN_OPER value
                 */
                profile.RightType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "AVAILABLE"] = 0;
                    values[valuesById[1] = "DISABLE"] = 1;
                    values[valuesById[2] = "FORBIDDEN_CHAT"] = 2;
                    values[valuesById[3] = "FORBIDDEN_PUBLISH"] = 3;
                    values[valuesById[4] = "BLACKLIST"] = 4;
                    values[valuesById[5] = "FORBIDDEN_OPER"] = 5;
                    return values;
                })();

                profile.ProfileResponse = (function() {

                    /**
                     * Properties of a ProfileResponse.
                     * @memberof jubian.golottery.model.profile
                     * @interface IProfileResponse
                     * @property {Array.<jubian.golottery.model.profile.IProfile>|null} [profiles] ProfileResponse profiles
                     */

                    /**
                     * Constructs a new ProfileResponse.
                     * @memberof jubian.golottery.model.profile
                     * @classdesc Represents a ProfileResponse.
                     * @implements IProfileResponse
                     * @constructor
                     * @param {jubian.golottery.model.profile.IProfileResponse=} [p] Properties to set
                     */
                    function ProfileResponse(p) {
                        this.profiles = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * ProfileResponse profiles.
                     * @member {Array.<jubian.golottery.model.profile.IProfile>} profiles
                     * @memberof jubian.golottery.model.profile.ProfileResponse
                     * @instance
                     */
                    ProfileResponse.prototype.profiles = $util.emptyArray;

                    /**
                     * Encodes the specified ProfileResponse message. Does not implicitly {@link jubian.golottery.model.profile.ProfileResponse.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.model.profile.ProfileResponse
                     * @static
                     * @param {jubian.golottery.model.profile.IProfileResponse} m ProfileResponse message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProfileResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.profiles != null && m.profiles.length) {
                            for (var i = 0; i < m.profiles.length; ++i)
                                $root.jubian.golottery.model.profile.Profile.encode(m.profiles[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    /**
                     * Decodes a ProfileResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.model.profile.ProfileResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.model.profile.ProfileResponse} ProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProfileResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.model.profile.ProfileResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                if (!(m.profiles && m.profiles.length))
                                    m.profiles = [];
                                m.profiles.push($root.jubian.golottery.model.profile.Profile.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a ProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.model.profile.ProfileResponse
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.model.profile.ProfileResponse} ProfileResponse
                     */
                    ProfileResponse.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.model.profile.ProfileResponse)
                            return d;
                        var m = new $root.jubian.golottery.model.profile.ProfileResponse();
                        if (d.profiles) {
                            if (!Array.isArray(d.profiles))
                                throw TypeError(".jubian.golottery.model.profile.ProfileResponse.profiles: array expected");
                            m.profiles = [];
                            for (var i = 0; i < d.profiles.length; ++i) {
                                if (typeof d.profiles[i] !== "object")
                                    throw TypeError(".jubian.golottery.model.profile.ProfileResponse.profiles: object expected");
                                m.profiles[i] = $root.jubian.golottery.model.profile.Profile.fromObject(d.profiles[i]);
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from a ProfileResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.model.profile.ProfileResponse
                     * @static
                     * @param {jubian.golottery.model.profile.ProfileResponse} m ProfileResponse
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ProfileResponse.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.arrays || o.defaults) {
                            d.profiles = [];
                        }
                        if (m.profiles && m.profiles.length) {
                            d.profiles = [];
                            for (var j = 0; j < m.profiles.length; ++j) {
                                d.profiles[j] = $root.jubian.golottery.model.profile.Profile.toObject(m.profiles[j], o);
                            }
                        }
                        return d;
                    };

                    /**
                     * Converts this ProfileResponse to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.model.profile.ProfileResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ProfileResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProfileResponse;
                })();

                profile.OrganizationResponse = (function() {

                    /**
                     * Properties of an OrganizationResponse.
                     * @memberof jubian.golottery.model.profile
                     * @interface IOrganizationResponse
                     * @property {Array.<jubian.golottery.model.profile.IOrganization>|null} [groups] OrganizationResponse groups
                     */

                    /**
                     * Constructs a new OrganizationResponse.
                     * @memberof jubian.golottery.model.profile
                     * @classdesc Represents an OrganizationResponse.
                     * @implements IOrganizationResponse
                     * @constructor
                     * @param {jubian.golottery.model.profile.IOrganizationResponse=} [p] Properties to set
                     */
                    function OrganizationResponse(p) {
                        this.groups = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * OrganizationResponse groups.
                     * @member {Array.<jubian.golottery.model.profile.IOrganization>} groups
                     * @memberof jubian.golottery.model.profile.OrganizationResponse
                     * @instance
                     */
                    OrganizationResponse.prototype.groups = $util.emptyArray;

                    /**
                     * Encodes the specified OrganizationResponse message. Does not implicitly {@link jubian.golottery.model.profile.OrganizationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof jubian.golottery.model.profile.OrganizationResponse
                     * @static
                     * @param {jubian.golottery.model.profile.IOrganizationResponse} m OrganizationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OrganizationResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.groups != null && m.groups.length) {
                            for (var i = 0; i < m.groups.length; ++i)
                                $root.jubian.golottery.model.profile.Organization.encode(m.groups[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    /**
                     * Decodes an OrganizationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof jubian.golottery.model.profile.OrganizationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {jubian.golottery.model.profile.OrganizationResponse} OrganizationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OrganizationResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.jubian.golottery.model.profile.OrganizationResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                if (!(m.groups && m.groups.length))
                                    m.groups = [];
                                m.groups.push($root.jubian.golottery.model.profile.Organization.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates an OrganizationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jubian.golottery.model.profile.OrganizationResponse
                     * @static
                     * @param {Object.<string,*>} d Plain object
                     * @returns {jubian.golottery.model.profile.OrganizationResponse} OrganizationResponse
                     */
                    OrganizationResponse.fromObject = function fromObject(d) {
                        if (d instanceof $root.jubian.golottery.model.profile.OrganizationResponse)
                            return d;
                        var m = new $root.jubian.golottery.model.profile.OrganizationResponse();
                        if (d.groups) {
                            if (!Array.isArray(d.groups))
                                throw TypeError(".jubian.golottery.model.profile.OrganizationResponse.groups: array expected");
                            m.groups = [];
                            for (var i = 0; i < d.groups.length; ++i) {
                                if (typeof d.groups[i] !== "object")
                                    throw TypeError(".jubian.golottery.model.profile.OrganizationResponse.groups: object expected");
                                m.groups[i] = $root.jubian.golottery.model.profile.Organization.fromObject(d.groups[i]);
                            }
                        }
                        return m;
                    };

                    /**
                     * Creates a plain object from an OrganizationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jubian.golottery.model.profile.OrganizationResponse
                     * @static
                     * @param {jubian.golottery.model.profile.OrganizationResponse} m OrganizationResponse
                     * @param {$protobuf.IConversionOptions} [o] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OrganizationResponse.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (o.arrays || o.defaults) {
                            d.groups = [];
                        }
                        if (m.groups && m.groups.length) {
                            d.groups = [];
                            for (var j = 0; j < m.groups.length; ++j) {
                                d.groups[j] = $root.jubian.golottery.model.profile.Organization.toObject(m.groups[j], o);
                            }
                        }
                        return d;
                    };

                    /**
                     * Converts this OrganizationResponse to JSON.
                     * @function toJSON
                     * @memberof jubian.golottery.model.profile.OrganizationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OrganizationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return OrganizationResponse;
                })();

                return profile;
            })();

            return model;
        })();

        return golottery;
    })();

    return jubian;
})();

$root.farm = (function() {

    /**
     * Namespace farm.
     * @exports farm
     * @namespace
     */
    var farm = {};

    farm.ReqGameWords = (function() {

        /**
         * Properties of a ReqGameWords.
         * @memberof farm
         * @interface IReqGameWords
         * @property {string|null} [user_id] ReqGameWords user_id
         * @property {number|Long|null} [mode] ReqGameWords mode
         * @property {string|null} [mode_param] ReqGameWords mode_param
         * @property {number|Long|null} [game_type] ReqGameWords game_type
         */

        /**
         * Constructs a new ReqGameWords.
         * @memberof farm
         * @classdesc Represents a ReqGameWords.
         * @implements IReqGameWords
         * @constructor
         * @param {farm.IReqGameWords=} [p] Properties to set
         */
        function ReqGameWords(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqGameWords user_id.
         * @member {string} user_id
         * @memberof farm.ReqGameWords
         * @instance
         */
        ReqGameWords.prototype.user_id = "";

        /**
         * ReqGameWords mode.
         * @member {number|Long} mode
         * @memberof farm.ReqGameWords
         * @instance
         */
        ReqGameWords.prototype.mode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqGameWords mode_param.
         * @member {string} mode_param
         * @memberof farm.ReqGameWords
         * @instance
         */
        ReqGameWords.prototype.mode_param = "";

        /**
         * ReqGameWords game_type.
         * @member {number|Long} game_type
         * @memberof farm.ReqGameWords
         * @instance
         */
        ReqGameWords.prototype.game_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqGameWords message. Does not implicitly {@link farm.ReqGameWords.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqGameWords
         * @static
         * @param {farm.IReqGameWords} m ReqGameWords message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameWords.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && Object.hasOwnProperty.call(m, "user_id"))
                w.uint32(10).string(m.user_id);
            if (m.mode != null && Object.hasOwnProperty.call(m, "mode"))
                w.uint32(16).int64(m.mode);
            if (m.mode_param != null && Object.hasOwnProperty.call(m, "mode_param"))
                w.uint32(26).string(m.mode_param);
            if (m.game_type != null && Object.hasOwnProperty.call(m, "game_type"))
                w.uint32(32).int64(m.game_type);
            return w;
        };

        /**
         * Decodes a ReqGameWords message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqGameWords
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqGameWords} ReqGameWords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameWords.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqGameWords();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.string();
                    break;
                case 2:
                    m.mode = r.int64();
                    break;
                case 3:
                    m.mode_param = r.string();
                    break;
                case 4:
                    m.game_type = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqGameWords message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqGameWords
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqGameWords} ReqGameWords
         */
        ReqGameWords.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqGameWords)
                return d;
            var m = new $root.farm.ReqGameWords();
            if (d.user_id != null) {
                m.user_id = String(d.user_id);
            }
            if (d.mode != null) {
                if ($util.Long)
                    (m.mode = $util.Long.fromValue(d.mode)).unsigned = false;
                else if (typeof d.mode === "string")
                    m.mode = parseInt(d.mode, 10);
                else if (typeof d.mode === "number")
                    m.mode = d.mode;
                else if (typeof d.mode === "object")
                    m.mode = new $util.LongBits(d.mode.low >>> 0, d.mode.high >>> 0).toNumber();
            }
            if (d.mode_param != null) {
                m.mode_param = String(d.mode_param);
            }
            if (d.game_type != null) {
                if ($util.Long)
                    (m.game_type = $util.Long.fromValue(d.game_type)).unsigned = false;
                else if (typeof d.game_type === "string")
                    m.game_type = parseInt(d.game_type, 10);
                else if (typeof d.game_type === "number")
                    m.game_type = d.game_type;
                else if (typeof d.game_type === "object")
                    m.game_type = new $util.LongBits(d.game_type.low >>> 0, d.game_type.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqGameWords message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqGameWords
         * @static
         * @param {farm.ReqGameWords} m ReqGameWords
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameWords.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.user_id = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mode = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mode = o.longs === String ? "0" : 0;
                d.mode_param = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.game_type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.game_type = o.longs === String ? "0" : 0;
            }
            if (m.user_id != null && m.hasOwnProperty("user_id")) {
                d.user_id = m.user_id;
            }
            if (m.mode != null && m.hasOwnProperty("mode")) {
                if (typeof m.mode === "number")
                    d.mode = o.longs === String ? String(m.mode) : m.mode;
                else
                    d.mode = o.longs === String ? $util.Long.prototype.toString.call(m.mode) : o.longs === Number ? new $util.LongBits(m.mode.low >>> 0, m.mode.high >>> 0).toNumber() : m.mode;
            }
            if (m.mode_param != null && m.hasOwnProperty("mode_param")) {
                d.mode_param = m.mode_param;
            }
            if (m.game_type != null && m.hasOwnProperty("game_type")) {
                if (typeof m.game_type === "number")
                    d.game_type = o.longs === String ? String(m.game_type) : m.game_type;
                else
                    d.game_type = o.longs === String ? $util.Long.prototype.toString.call(m.game_type) : o.longs === Number ? new $util.LongBits(m.game_type.low >>> 0, m.game_type.high >>> 0).toNumber() : m.game_type;
            }
            return d;
        };

        /**
         * Converts this ReqGameWords to JSON.
         * @function toJSON
         * @memberof farm.ReqGameWords
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameWords.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqGameWords;
    })();

    farm.RespGameWords = (function() {

        /**
         * Properties of a RespGameWords.
         * @memberof farm
         * @interface IRespGameWords
         * @property {Array.<number|Long>|null} [item_ids] RespGameWords item_ids
         * @property {number|Long|null} [must_learn] RespGameWords must_learn
         * @property {farm.IGameTypeConfig|null} [game_config] RespGameWords game_config
         */

        /**
         * Constructs a new RespGameWords.
         * @memberof farm
         * @classdesc Represents a RespGameWords.
         * @implements IRespGameWords
         * @constructor
         * @param {farm.IRespGameWords=} [p] Properties to set
         */
        function RespGameWords(p) {
            this.item_ids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespGameWords item_ids.
         * @member {Array.<number|Long>} item_ids
         * @memberof farm.RespGameWords
         * @instance
         */
        RespGameWords.prototype.item_ids = $util.emptyArray;

        /**
         * RespGameWords must_learn.
         * @member {number|Long} must_learn
         * @memberof farm.RespGameWords
         * @instance
         */
        RespGameWords.prototype.must_learn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespGameWords game_config.
         * @member {farm.IGameTypeConfig|null|undefined} game_config
         * @memberof farm.RespGameWords
         * @instance
         */
        RespGameWords.prototype.game_config = null;

        /**
         * Encodes the specified RespGameWords message. Does not implicitly {@link farm.RespGameWords.verify|verify} messages.
         * @function encode
         * @memberof farm.RespGameWords
         * @static
         * @param {farm.IRespGameWords} m RespGameWords message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGameWords.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.item_ids != null && m.item_ids.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.item_ids.length; ++i)
                    w.int64(m.item_ids[i]);
                w.ldelim();
            }
            if (m.must_learn != null && Object.hasOwnProperty.call(m, "must_learn"))
                w.uint32(16).int64(m.must_learn);
            if (m.game_config != null && Object.hasOwnProperty.call(m, "game_config"))
                $root.farm.GameTypeConfig.encode(m.game_config, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a RespGameWords message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespGameWords
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespGameWords} RespGameWords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGameWords.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespGameWords();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.item_ids && m.item_ids.length))
                        m.item_ids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.item_ids.push(r.int64());
                    } else
                        m.item_ids.push(r.int64());
                    break;
                case 2:
                    m.must_learn = r.int64();
                    break;
                case 3:
                    m.game_config = $root.farm.GameTypeConfig.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespGameWords message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespGameWords
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespGameWords} RespGameWords
         */
        RespGameWords.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespGameWords)
                return d;
            var m = new $root.farm.RespGameWords();
            if (d.item_ids) {
                if (!Array.isArray(d.item_ids))
                    throw TypeError(".farm.RespGameWords.item_ids: array expected");
                m.item_ids = [];
                for (var i = 0; i < d.item_ids.length; ++i) {
                    if ($util.Long)
                        (m.item_ids[i] = $util.Long.fromValue(d.item_ids[i])).unsigned = false;
                    else if (typeof d.item_ids[i] === "string")
                        m.item_ids[i] = parseInt(d.item_ids[i], 10);
                    else if (typeof d.item_ids[i] === "number")
                        m.item_ids[i] = d.item_ids[i];
                    else if (typeof d.item_ids[i] === "object")
                        m.item_ids[i] = new $util.LongBits(d.item_ids[i].low >>> 0, d.item_ids[i].high >>> 0).toNumber();
                }
            }
            if (d.must_learn != null) {
                if ($util.Long)
                    (m.must_learn = $util.Long.fromValue(d.must_learn)).unsigned = false;
                else if (typeof d.must_learn === "string")
                    m.must_learn = parseInt(d.must_learn, 10);
                else if (typeof d.must_learn === "number")
                    m.must_learn = d.must_learn;
                else if (typeof d.must_learn === "object")
                    m.must_learn = new $util.LongBits(d.must_learn.low >>> 0, d.must_learn.high >>> 0).toNumber();
            }
            if (d.game_config != null) {
                if (typeof d.game_config !== "object")
                    throw TypeError(".farm.RespGameWords.game_config: object expected");
                m.game_config = $root.farm.GameTypeConfig.fromObject(d.game_config);
            }
            return m;
        };

        /**
         * Creates a plain object from a RespGameWords message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespGameWords
         * @static
         * @param {farm.RespGameWords} m RespGameWords
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespGameWords.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.item_ids = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.must_learn = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.must_learn = o.longs === String ? "0" : 0;
                d.game_config = null;
            }
            if (m.item_ids && m.item_ids.length) {
                d.item_ids = [];
                for (var j = 0; j < m.item_ids.length; ++j) {
                    if (typeof m.item_ids[j] === "number")
                        d.item_ids[j] = o.longs === String ? String(m.item_ids[j]) : m.item_ids[j];
                    else
                        d.item_ids[j] = o.longs === String ? $util.Long.prototype.toString.call(m.item_ids[j]) : o.longs === Number ? new $util.LongBits(m.item_ids[j].low >>> 0, m.item_ids[j].high >>> 0).toNumber() : m.item_ids[j];
                }
            }
            if (m.must_learn != null && m.hasOwnProperty("must_learn")) {
                if (typeof m.must_learn === "number")
                    d.must_learn = o.longs === String ? String(m.must_learn) : m.must_learn;
                else
                    d.must_learn = o.longs === String ? $util.Long.prototype.toString.call(m.must_learn) : o.longs === Number ? new $util.LongBits(m.must_learn.low >>> 0, m.must_learn.high >>> 0).toNumber() : m.must_learn;
            }
            if (m.game_config != null && m.hasOwnProperty("game_config")) {
                d.game_config = $root.farm.GameTypeConfig.toObject(m.game_config, o);
            }
            return d;
        };

        /**
         * Converts this RespGameWords to JSON.
         * @function toJSON
         * @memberof farm.RespGameWords
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespGameWords.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespGameWords;
    })();

    farm.GameTypeConfig = (function() {

        /**
         * Properties of a GameTypeConfig.
         * @memberof farm
         * @interface IGameTypeConfig
         * @property {number|Long|null} [game_duration] GameTypeConfig game_duration
         * @property {number|Long|null} [time_over] GameTypeConfig time_over
         * @property {Array.<number|Long>|null} [stage_params] GameTypeConfig stage_params
         * @property {number|Long|null} [game_type] GameTypeConfig game_type
         * @property {number|null} [time_over_or_wrong_deduction] GameTypeConfig time_over_or_wrong_deduction
         * @property {number|null} [unskillfull_deduction] GameTypeConfig unskillfull_deduction
         * @property {Array.<number>|null} [star_evaluation] GameTypeConfig star_evaluation
         */

        /**
         * Constructs a new GameTypeConfig.
         * @memberof farm
         * @classdesc Represents a GameTypeConfig.
         * @implements IGameTypeConfig
         * @constructor
         * @param {farm.IGameTypeConfig=} [p] Properties to set
         */
        function GameTypeConfig(p) {
            this.stage_params = [];
            this.star_evaluation = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameTypeConfig game_duration.
         * @member {number|Long} game_duration
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.game_duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameTypeConfig time_over.
         * @member {number|Long} time_over
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.time_over = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameTypeConfig stage_params.
         * @member {Array.<number|Long>} stage_params
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.stage_params = $util.emptyArray;

        /**
         * GameTypeConfig game_type.
         * @member {number|Long} game_type
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.game_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameTypeConfig time_over_or_wrong_deduction.
         * @member {number} time_over_or_wrong_deduction
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.time_over_or_wrong_deduction = 0;

        /**
         * GameTypeConfig unskillfull_deduction.
         * @member {number} unskillfull_deduction
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.unskillfull_deduction = 0;

        /**
         * GameTypeConfig star_evaluation.
         * @member {Array.<number>} star_evaluation
         * @memberof farm.GameTypeConfig
         * @instance
         */
        GameTypeConfig.prototype.star_evaluation = $util.emptyArray;

        /**
         * Encodes the specified GameTypeConfig message. Does not implicitly {@link farm.GameTypeConfig.verify|verify} messages.
         * @function encode
         * @memberof farm.GameTypeConfig
         * @static
         * @param {farm.IGameTypeConfig} m GameTypeConfig message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTypeConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.game_duration != null && Object.hasOwnProperty.call(m, "game_duration"))
                w.uint32(8).int64(m.game_duration);
            if (m.time_over != null && Object.hasOwnProperty.call(m, "time_over"))
                w.uint32(16).int64(m.time_over);
            if (m.stage_params != null && m.stage_params.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.stage_params.length; ++i)
                    w.int64(m.stage_params[i]);
                w.ldelim();
            }
            if (m.game_type != null && Object.hasOwnProperty.call(m, "game_type"))
                w.uint32(32).int64(m.game_type);
            if (m.time_over_or_wrong_deduction != null && Object.hasOwnProperty.call(m, "time_over_or_wrong_deduction"))
                w.uint32(45).float(m.time_over_or_wrong_deduction);
            if (m.unskillfull_deduction != null && Object.hasOwnProperty.call(m, "unskillfull_deduction"))
                w.uint32(53).float(m.unskillfull_deduction);
            if (m.star_evaluation != null && m.star_evaluation.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.star_evaluation.length; ++i)
                    w.float(m.star_evaluation[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a GameTypeConfig message from the specified reader or buffer.
         * @function decode
         * @memberof farm.GameTypeConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.GameTypeConfig} GameTypeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTypeConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.GameTypeConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.game_duration = r.int64();
                    break;
                case 2:
                    m.time_over = r.int64();
                    break;
                case 3:
                    if (!(m.stage_params && m.stage_params.length))
                        m.stage_params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.stage_params.push(r.int64());
                    } else
                        m.stage_params.push(r.int64());
                    break;
                case 4:
                    m.game_type = r.int64();
                    break;
                case 5:
                    m.time_over_or_wrong_deduction = r.float();
                    break;
                case 6:
                    m.unskillfull_deduction = r.float();
                    break;
                case 7:
                    if (!(m.star_evaluation && m.star_evaluation.length))
                        m.star_evaluation = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.star_evaluation.push(r.float());
                    } else
                        m.star_evaluation.push(r.float());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a GameTypeConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.GameTypeConfig
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.GameTypeConfig} GameTypeConfig
         */
        GameTypeConfig.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.GameTypeConfig)
                return d;
            var m = new $root.farm.GameTypeConfig();
            if (d.game_duration != null) {
                if ($util.Long)
                    (m.game_duration = $util.Long.fromValue(d.game_duration)).unsigned = false;
                else if (typeof d.game_duration === "string")
                    m.game_duration = parseInt(d.game_duration, 10);
                else if (typeof d.game_duration === "number")
                    m.game_duration = d.game_duration;
                else if (typeof d.game_duration === "object")
                    m.game_duration = new $util.LongBits(d.game_duration.low >>> 0, d.game_duration.high >>> 0).toNumber();
            }
            if (d.time_over != null) {
                if ($util.Long)
                    (m.time_over = $util.Long.fromValue(d.time_over)).unsigned = false;
                else if (typeof d.time_over === "string")
                    m.time_over = parseInt(d.time_over, 10);
                else if (typeof d.time_over === "number")
                    m.time_over = d.time_over;
                else if (typeof d.time_over === "object")
                    m.time_over = new $util.LongBits(d.time_over.low >>> 0, d.time_over.high >>> 0).toNumber();
            }
            if (d.stage_params) {
                if (!Array.isArray(d.stage_params))
                    throw TypeError(".farm.GameTypeConfig.stage_params: array expected");
                m.stage_params = [];
                for (var i = 0; i < d.stage_params.length; ++i) {
                    if ($util.Long)
                        (m.stage_params[i] = $util.Long.fromValue(d.stage_params[i])).unsigned = false;
                    else if (typeof d.stage_params[i] === "string")
                        m.stage_params[i] = parseInt(d.stage_params[i], 10);
                    else if (typeof d.stage_params[i] === "number")
                        m.stage_params[i] = d.stage_params[i];
                    else if (typeof d.stage_params[i] === "object")
                        m.stage_params[i] = new $util.LongBits(d.stage_params[i].low >>> 0, d.stage_params[i].high >>> 0).toNumber();
                }
            }
            if (d.game_type != null) {
                if ($util.Long)
                    (m.game_type = $util.Long.fromValue(d.game_type)).unsigned = false;
                else if (typeof d.game_type === "string")
                    m.game_type = parseInt(d.game_type, 10);
                else if (typeof d.game_type === "number")
                    m.game_type = d.game_type;
                else if (typeof d.game_type === "object")
                    m.game_type = new $util.LongBits(d.game_type.low >>> 0, d.game_type.high >>> 0).toNumber();
            }
            if (d.time_over_or_wrong_deduction != null) {
                m.time_over_or_wrong_deduction = Number(d.time_over_or_wrong_deduction);
            }
            if (d.unskillfull_deduction != null) {
                m.unskillfull_deduction = Number(d.unskillfull_deduction);
            }
            if (d.star_evaluation) {
                if (!Array.isArray(d.star_evaluation))
                    throw TypeError(".farm.GameTypeConfig.star_evaluation: array expected");
                m.star_evaluation = [];
                for (var i = 0; i < d.star_evaluation.length; ++i) {
                    m.star_evaluation[i] = Number(d.star_evaluation[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a GameTypeConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.GameTypeConfig
         * @static
         * @param {farm.GameTypeConfig} m GameTypeConfig
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameTypeConfig.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.stage_params = [];
                d.star_evaluation = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.game_duration = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.game_duration = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.time_over = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.time_over = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.game_type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.game_type = o.longs === String ? "0" : 0;
                d.time_over_or_wrong_deduction = 0;
                d.unskillfull_deduction = 0;
            }
            if (m.game_duration != null && m.hasOwnProperty("game_duration")) {
                if (typeof m.game_duration === "number")
                    d.game_duration = o.longs === String ? String(m.game_duration) : m.game_duration;
                else
                    d.game_duration = o.longs === String ? $util.Long.prototype.toString.call(m.game_duration) : o.longs === Number ? new $util.LongBits(m.game_duration.low >>> 0, m.game_duration.high >>> 0).toNumber() : m.game_duration;
            }
            if (m.time_over != null && m.hasOwnProperty("time_over")) {
                if (typeof m.time_over === "number")
                    d.time_over = o.longs === String ? String(m.time_over) : m.time_over;
                else
                    d.time_over = o.longs === String ? $util.Long.prototype.toString.call(m.time_over) : o.longs === Number ? new $util.LongBits(m.time_over.low >>> 0, m.time_over.high >>> 0).toNumber() : m.time_over;
            }
            if (m.stage_params && m.stage_params.length) {
                d.stage_params = [];
                for (var j = 0; j < m.stage_params.length; ++j) {
                    if (typeof m.stage_params[j] === "number")
                        d.stage_params[j] = o.longs === String ? String(m.stage_params[j]) : m.stage_params[j];
                    else
                        d.stage_params[j] = o.longs === String ? $util.Long.prototype.toString.call(m.stage_params[j]) : o.longs === Number ? new $util.LongBits(m.stage_params[j].low >>> 0, m.stage_params[j].high >>> 0).toNumber() : m.stage_params[j];
                }
            }
            if (m.game_type != null && m.hasOwnProperty("game_type")) {
                if (typeof m.game_type === "number")
                    d.game_type = o.longs === String ? String(m.game_type) : m.game_type;
                else
                    d.game_type = o.longs === String ? $util.Long.prototype.toString.call(m.game_type) : o.longs === Number ? new $util.LongBits(m.game_type.low >>> 0, m.game_type.high >>> 0).toNumber() : m.game_type;
            }
            if (m.time_over_or_wrong_deduction != null && m.hasOwnProperty("time_over_or_wrong_deduction")) {
                d.time_over_or_wrong_deduction = o.json && !isFinite(m.time_over_or_wrong_deduction) ? String(m.time_over_or_wrong_deduction) : m.time_over_or_wrong_deduction;
            }
            if (m.unskillfull_deduction != null && m.hasOwnProperty("unskillfull_deduction")) {
                d.unskillfull_deduction = o.json && !isFinite(m.unskillfull_deduction) ? String(m.unskillfull_deduction) : m.unskillfull_deduction;
            }
            if (m.star_evaluation && m.star_evaluation.length) {
                d.star_evaluation = [];
                for (var j = 0; j < m.star_evaluation.length; ++j) {
                    d.star_evaluation[j] = o.json && !isFinite(m.star_evaluation[j]) ? String(m.star_evaluation[j]) : m.star_evaluation[j];
                }
            }
            return d;
        };

        /**
         * Converts this GameTypeConfig to JSON.
         * @function toJSON
         * @memberof farm.GameTypeConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameTypeConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameTypeConfig;
    })();

    farm.ReqUnitLearningProgress = (function() {

        /**
         * Properties of a ReqUnitLearningProgress.
         * @memberof farm
         * @interface IReqUnitLearningProgress
         * @property {string|null} [user_id] ReqUnitLearningProgress user_id
         * @property {number|Long|null} [mat_id] ReqUnitLearningProgress mat_id
         * @property {number|Long|null} [unit_id] ReqUnitLearningProgress unit_id
         */

        /**
         * Constructs a new ReqUnitLearningProgress.
         * @memberof farm
         * @classdesc Represents a ReqUnitLearningProgress.
         * @implements IReqUnitLearningProgress
         * @constructor
         * @param {farm.IReqUnitLearningProgress=} [p] Properties to set
         */
        function ReqUnitLearningProgress(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUnitLearningProgress user_id.
         * @member {string} user_id
         * @memberof farm.ReqUnitLearningProgress
         * @instance
         */
        ReqUnitLearningProgress.prototype.user_id = "";

        /**
         * ReqUnitLearningProgress mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.ReqUnitLearningProgress
         * @instance
         */
        ReqUnitLearningProgress.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqUnitLearningProgress unit_id.
         * @member {number|Long} unit_id
         * @memberof farm.ReqUnitLearningProgress
         * @instance
         */
        ReqUnitLearningProgress.prototype.unit_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqUnitLearningProgress message. Does not implicitly {@link farm.ReqUnitLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqUnitLearningProgress
         * @static
         * @param {farm.IReqUnitLearningProgress} m ReqUnitLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUnitLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && Object.hasOwnProperty.call(m, "user_id"))
                w.uint32(10).string(m.user_id);
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(16).int64(m.mat_id);
            if (m.unit_id != null && Object.hasOwnProperty.call(m, "unit_id"))
                w.uint32(24).int64(m.unit_id);
            return w;
        };

        /**
         * Decodes a ReqUnitLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqUnitLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqUnitLearningProgress} ReqUnitLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUnitLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqUnitLearningProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.string();
                    break;
                case 2:
                    m.mat_id = r.int64();
                    break;
                case 3:
                    m.unit_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqUnitLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqUnitLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqUnitLearningProgress} ReqUnitLearningProgress
         */
        ReqUnitLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqUnitLearningProgress)
                return d;
            var m = new $root.farm.ReqUnitLearningProgress();
            if (d.user_id != null) {
                m.user_id = String(d.user_id);
            }
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            if (d.unit_id != null) {
                if ($util.Long)
                    (m.unit_id = $util.Long.fromValue(d.unit_id)).unsigned = false;
                else if (typeof d.unit_id === "string")
                    m.unit_id = parseInt(d.unit_id, 10);
                else if (typeof d.unit_id === "number")
                    m.unit_id = d.unit_id;
                else if (typeof d.unit_id === "object")
                    m.unit_id = new $util.LongBits(d.unit_id.low >>> 0, d.unit_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqUnitLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqUnitLearningProgress
         * @static
         * @param {farm.ReqUnitLearningProgress} m ReqUnitLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUnitLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.user_id = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.unit_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.unit_id = o.longs === String ? "0" : 0;
            }
            if (m.user_id != null && m.hasOwnProperty("user_id")) {
                d.user_id = m.user_id;
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            if (m.unit_id != null && m.hasOwnProperty("unit_id")) {
                if (typeof m.unit_id === "number")
                    d.unit_id = o.longs === String ? String(m.unit_id) : m.unit_id;
                else
                    d.unit_id = o.longs === String ? $util.Long.prototype.toString.call(m.unit_id) : o.longs === Number ? new $util.LongBits(m.unit_id.low >>> 0, m.unit_id.high >>> 0).toNumber() : m.unit_id;
            }
            return d;
        };

        /**
         * Converts this ReqUnitLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.ReqUnitLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUnitLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUnitLearningProgress;
    })();

    farm.RespUnitLearningProgress = (function() {

        /**
         * Properties of a RespUnitLearningProgress.
         * @memberof farm
         * @interface IRespUnitLearningProgress
         * @property {number|Long|null} [mat_id] RespUnitLearningProgress mat_id
         * @property {Array.<farm.IGameTypeLearningProgressItem>|null} [games_progress] RespUnitLearningProgress games_progress
         */

        /**
         * Constructs a new RespUnitLearningProgress.
         * @memberof farm
         * @classdesc Represents a RespUnitLearningProgress.
         * @implements IRespUnitLearningProgress
         * @constructor
         * @param {farm.IRespUnitLearningProgress=} [p] Properties to set
         */
        function RespUnitLearningProgress(p) {
            this.games_progress = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespUnitLearningProgress mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.RespUnitLearningProgress
         * @instance
         */
        RespUnitLearningProgress.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespUnitLearningProgress games_progress.
         * @member {Array.<farm.IGameTypeLearningProgressItem>} games_progress
         * @memberof farm.RespUnitLearningProgress
         * @instance
         */
        RespUnitLearningProgress.prototype.games_progress = $util.emptyArray;

        /**
         * Encodes the specified RespUnitLearningProgress message. Does not implicitly {@link farm.RespUnitLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.RespUnitLearningProgress
         * @static
         * @param {farm.IRespUnitLearningProgress} m RespUnitLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUnitLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(8).int64(m.mat_id);
            if (m.games_progress != null && m.games_progress.length) {
                for (var i = 0; i < m.games_progress.length; ++i)
                    $root.farm.GameTypeLearningProgressItem.encode(m.games_progress[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespUnitLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespUnitLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespUnitLearningProgress} RespUnitLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUnitLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespUnitLearningProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mat_id = r.int64();
                    break;
                case 2:
                    if (!(m.games_progress && m.games_progress.length))
                        m.games_progress = [];
                    m.games_progress.push($root.farm.GameTypeLearningProgressItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespUnitLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespUnitLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespUnitLearningProgress} RespUnitLearningProgress
         */
        RespUnitLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespUnitLearningProgress)
                return d;
            var m = new $root.farm.RespUnitLearningProgress();
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            if (d.games_progress) {
                if (!Array.isArray(d.games_progress))
                    throw TypeError(".farm.RespUnitLearningProgress.games_progress: array expected");
                m.games_progress = [];
                for (var i = 0; i < d.games_progress.length; ++i) {
                    if (typeof d.games_progress[i] !== "object")
                        throw TypeError(".farm.RespUnitLearningProgress.games_progress: object expected");
                    m.games_progress[i] = $root.farm.GameTypeLearningProgressItem.fromObject(d.games_progress[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespUnitLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespUnitLearningProgress
         * @static
         * @param {farm.RespUnitLearningProgress} m RespUnitLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespUnitLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.games_progress = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            if (m.games_progress && m.games_progress.length) {
                d.games_progress = [];
                for (var j = 0; j < m.games_progress.length; ++j) {
                    d.games_progress[j] = $root.farm.GameTypeLearningProgressItem.toObject(m.games_progress[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespUnitLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.RespUnitLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespUnitLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespUnitLearningProgress;
    })();

    farm.GameTypeLearningProgressItem = (function() {

        /**
         * Properties of a GameTypeLearningProgressItem.
         * @memberof farm
         * @interface IGameTypeLearningProgressItem
         * @property {number|Long|null} [game_type] GameTypeLearningProgressItem game_type
         * @property {Array.<number|Long>|null} [star] GameTypeLearningProgressItem star
         * @property {string|null} [history_max_score] GameTypeLearningProgressItem history_max_score
         * @property {number|Long|null} [state] GameTypeLearningProgressItem state
         */

        /**
         * Constructs a new GameTypeLearningProgressItem.
         * @memberof farm
         * @classdesc Represents a GameTypeLearningProgressItem.
         * @implements IGameTypeLearningProgressItem
         * @constructor
         * @param {farm.IGameTypeLearningProgressItem=} [p] Properties to set
         */
        function GameTypeLearningProgressItem(p) {
            this.star = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameTypeLearningProgressItem game_type.
         * @member {number|Long} game_type
         * @memberof farm.GameTypeLearningProgressItem
         * @instance
         */
        GameTypeLearningProgressItem.prototype.game_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameTypeLearningProgressItem star.
         * @member {Array.<number|Long>} star
         * @memberof farm.GameTypeLearningProgressItem
         * @instance
         */
        GameTypeLearningProgressItem.prototype.star = $util.emptyArray;

        /**
         * GameTypeLearningProgressItem history_max_score.
         * @member {string} history_max_score
         * @memberof farm.GameTypeLearningProgressItem
         * @instance
         */
        GameTypeLearningProgressItem.prototype.history_max_score = "";

        /**
         * GameTypeLearningProgressItem state.
         * @member {number|Long} state
         * @memberof farm.GameTypeLearningProgressItem
         * @instance
         */
        GameTypeLearningProgressItem.prototype.state = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameTypeLearningProgressItem message. Does not implicitly {@link farm.GameTypeLearningProgressItem.verify|verify} messages.
         * @function encode
         * @memberof farm.GameTypeLearningProgressItem
         * @static
         * @param {farm.IGameTypeLearningProgressItem} m GameTypeLearningProgressItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTypeLearningProgressItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.game_type != null && Object.hasOwnProperty.call(m, "game_type"))
                w.uint32(8).int64(m.game_type);
            if (m.star != null && m.star.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.star.length; ++i)
                    w.int64(m.star[i]);
                w.ldelim();
            }
            if (m.history_max_score != null && Object.hasOwnProperty.call(m, "history_max_score"))
                w.uint32(26).string(m.history_max_score);
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(32).int64(m.state);
            return w;
        };

        /**
         * Decodes a GameTypeLearningProgressItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.GameTypeLearningProgressItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.GameTypeLearningProgressItem} GameTypeLearningProgressItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTypeLearningProgressItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.GameTypeLearningProgressItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.game_type = r.int64();
                    break;
                case 2:
                    if (!(m.star && m.star.length))
                        m.star = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.star.push(r.int64());
                    } else
                        m.star.push(r.int64());
                    break;
                case 3:
                    m.history_max_score = r.string();
                    break;
                case 4:
                    m.state = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a GameTypeLearningProgressItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.GameTypeLearningProgressItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.GameTypeLearningProgressItem} GameTypeLearningProgressItem
         */
        GameTypeLearningProgressItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.GameTypeLearningProgressItem)
                return d;
            var m = new $root.farm.GameTypeLearningProgressItem();
            if (d.game_type != null) {
                if ($util.Long)
                    (m.game_type = $util.Long.fromValue(d.game_type)).unsigned = false;
                else if (typeof d.game_type === "string")
                    m.game_type = parseInt(d.game_type, 10);
                else if (typeof d.game_type === "number")
                    m.game_type = d.game_type;
                else if (typeof d.game_type === "object")
                    m.game_type = new $util.LongBits(d.game_type.low >>> 0, d.game_type.high >>> 0).toNumber();
            }
            if (d.star) {
                if (!Array.isArray(d.star))
                    throw TypeError(".farm.GameTypeLearningProgressItem.star: array expected");
                m.star = [];
                for (var i = 0; i < d.star.length; ++i) {
                    if ($util.Long)
                        (m.star[i] = $util.Long.fromValue(d.star[i])).unsigned = false;
                    else if (typeof d.star[i] === "string")
                        m.star[i] = parseInt(d.star[i], 10);
                    else if (typeof d.star[i] === "number")
                        m.star[i] = d.star[i];
                    else if (typeof d.star[i] === "object")
                        m.star[i] = new $util.LongBits(d.star[i].low >>> 0, d.star[i].high >>> 0).toNumber();
                }
            }
            if (d.history_max_score != null) {
                m.history_max_score = String(d.history_max_score);
            }
            if (d.state != null) {
                if ($util.Long)
                    (m.state = $util.Long.fromValue(d.state)).unsigned = false;
                else if (typeof d.state === "string")
                    m.state = parseInt(d.state, 10);
                else if (typeof d.state === "number")
                    m.state = d.state;
                else if (typeof d.state === "object")
                    m.state = new $util.LongBits(d.state.low >>> 0, d.state.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a GameTypeLearningProgressItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.GameTypeLearningProgressItem
         * @static
         * @param {farm.GameTypeLearningProgressItem} m GameTypeLearningProgressItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameTypeLearningProgressItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.star = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.game_type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.game_type = o.longs === String ? "0" : 0;
                d.history_max_score = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.state = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.state = o.longs === String ? "0" : 0;
            }
            if (m.game_type != null && m.hasOwnProperty("game_type")) {
                if (typeof m.game_type === "number")
                    d.game_type = o.longs === String ? String(m.game_type) : m.game_type;
                else
                    d.game_type = o.longs === String ? $util.Long.prototype.toString.call(m.game_type) : o.longs === Number ? new $util.LongBits(m.game_type.low >>> 0, m.game_type.high >>> 0).toNumber() : m.game_type;
            }
            if (m.star && m.star.length) {
                d.star = [];
                for (var j = 0; j < m.star.length; ++j) {
                    if (typeof m.star[j] === "number")
                        d.star[j] = o.longs === String ? String(m.star[j]) : m.star[j];
                    else
                        d.star[j] = o.longs === String ? $util.Long.prototype.toString.call(m.star[j]) : o.longs === Number ? new $util.LongBits(m.star[j].low >>> 0, m.star[j].high >>> 0).toNumber() : m.star[j];
                }
            }
            if (m.history_max_score != null && m.hasOwnProperty("history_max_score")) {
                d.history_max_score = m.history_max_score;
            }
            if (m.state != null && m.hasOwnProperty("state")) {
                if (typeof m.state === "number")
                    d.state = o.longs === String ? String(m.state) : m.state;
                else
                    d.state = o.longs === String ? $util.Long.prototype.toString.call(m.state) : o.longs === Number ? new $util.LongBits(m.state.low >>> 0, m.state.high >>> 0).toNumber() : m.state;
            }
            return d;
        };

        /**
         * Converts this GameTypeLearningProgressItem to JSON.
         * @function toJSON
         * @memberof farm.GameTypeLearningProgressItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameTypeLearningProgressItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameTypeLearningProgressItem;
    })();

    farm.ReqMatLearningProgress = (function() {

        /**
         * Properties of a ReqMatLearningProgress.
         * @memberof farm
         * @interface IReqMatLearningProgress
         * @property {string|null} [user_id] ReqMatLearningProgress user_id
         * @property {number|Long|null} [mat_id] ReqMatLearningProgress mat_id
         */

        /**
         * Constructs a new ReqMatLearningProgress.
         * @memberof farm
         * @classdesc Represents a ReqMatLearningProgress.
         * @implements IReqMatLearningProgress
         * @constructor
         * @param {farm.IReqMatLearningProgress=} [p] Properties to set
         */
        function ReqMatLearningProgress(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqMatLearningProgress user_id.
         * @member {string} user_id
         * @memberof farm.ReqMatLearningProgress
         * @instance
         */
        ReqMatLearningProgress.prototype.user_id = "";

        /**
         * ReqMatLearningProgress mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.ReqMatLearningProgress
         * @instance
         */
        ReqMatLearningProgress.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqMatLearningProgress message. Does not implicitly {@link farm.ReqMatLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqMatLearningProgress
         * @static
         * @param {farm.IReqMatLearningProgress} m ReqMatLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMatLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && Object.hasOwnProperty.call(m, "user_id"))
                w.uint32(10).string(m.user_id);
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(16).int64(m.mat_id);
            return w;
        };

        /**
         * Decodes a ReqMatLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqMatLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqMatLearningProgress} ReqMatLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMatLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqMatLearningProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.string();
                    break;
                case 2:
                    m.mat_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqMatLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqMatLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqMatLearningProgress} ReqMatLearningProgress
         */
        ReqMatLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqMatLearningProgress)
                return d;
            var m = new $root.farm.ReqMatLearningProgress();
            if (d.user_id != null) {
                m.user_id = String(d.user_id);
            }
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqMatLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqMatLearningProgress
         * @static
         * @param {farm.ReqMatLearningProgress} m ReqMatLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqMatLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.user_id = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
            }
            if (m.user_id != null && m.hasOwnProperty("user_id")) {
                d.user_id = m.user_id;
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            return d;
        };

        /**
         * Converts this ReqMatLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.ReqMatLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqMatLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqMatLearningProgress;
    })();

    farm.RespMatLearningProgress = (function() {

        /**
         * Properties of a RespMatLearningProgress.
         * @memberof farm
         * @interface IRespMatLearningProgress
         * @property {number|Long|null} [mat_id] RespMatLearningProgress mat_id
         * @property {Array.<number|Long>|null} [mat_star] RespMatLearningProgress mat_star
         * @property {string|null} [grades_star] RespMatLearningProgress grades_star
         * @property {string|null} [units_star] RespMatLearningProgress units_star
         */

        /**
         * Constructs a new RespMatLearningProgress.
         * @memberof farm
         * @classdesc Represents a RespMatLearningProgress.
         * @implements IRespMatLearningProgress
         * @constructor
         * @param {farm.IRespMatLearningProgress=} [p] Properties to set
         */
        function RespMatLearningProgress(p) {
            this.mat_star = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespMatLearningProgress mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.RespMatLearningProgress
         * @instance
         */
        RespMatLearningProgress.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespMatLearningProgress mat_star.
         * @member {Array.<number|Long>} mat_star
         * @memberof farm.RespMatLearningProgress
         * @instance
         */
        RespMatLearningProgress.prototype.mat_star = $util.emptyArray;

        /**
         * RespMatLearningProgress grades_star.
         * @member {string} grades_star
         * @memberof farm.RespMatLearningProgress
         * @instance
         */
        RespMatLearningProgress.prototype.grades_star = "";

        /**
         * RespMatLearningProgress units_star.
         * @member {string} units_star
         * @memberof farm.RespMatLearningProgress
         * @instance
         */
        RespMatLearningProgress.prototype.units_star = "";

        /**
         * Encodes the specified RespMatLearningProgress message. Does not implicitly {@link farm.RespMatLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.RespMatLearningProgress
         * @static
         * @param {farm.IRespMatLearningProgress} m RespMatLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(8).int64(m.mat_id);
            if (m.mat_star != null && m.mat_star.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.mat_star.length; ++i)
                    w.int64(m.mat_star[i]);
                w.ldelim();
            }
            if (m.grades_star != null && Object.hasOwnProperty.call(m, "grades_star"))
                w.uint32(26).string(m.grades_star);
            if (m.units_star != null && Object.hasOwnProperty.call(m, "units_star"))
                w.uint32(34).string(m.units_star);
            return w;
        };

        /**
         * Decodes a RespMatLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespMatLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespMatLearningProgress} RespMatLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMatLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespMatLearningProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mat_id = r.int64();
                    break;
                case 2:
                    if (!(m.mat_star && m.mat_star.length))
                        m.mat_star = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.mat_star.push(r.int64());
                    } else
                        m.mat_star.push(r.int64());
                    break;
                case 3:
                    m.grades_star = r.string();
                    break;
                case 4:
                    m.units_star = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespMatLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespMatLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespMatLearningProgress} RespMatLearningProgress
         */
        RespMatLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespMatLearningProgress)
                return d;
            var m = new $root.farm.RespMatLearningProgress();
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            if (d.mat_star) {
                if (!Array.isArray(d.mat_star))
                    throw TypeError(".farm.RespMatLearningProgress.mat_star: array expected");
                m.mat_star = [];
                for (var i = 0; i < d.mat_star.length; ++i) {
                    if ($util.Long)
                        (m.mat_star[i] = $util.Long.fromValue(d.mat_star[i])).unsigned = false;
                    else if (typeof d.mat_star[i] === "string")
                        m.mat_star[i] = parseInt(d.mat_star[i], 10);
                    else if (typeof d.mat_star[i] === "number")
                        m.mat_star[i] = d.mat_star[i];
                    else if (typeof d.mat_star[i] === "object")
                        m.mat_star[i] = new $util.LongBits(d.mat_star[i].low >>> 0, d.mat_star[i].high >>> 0).toNumber();
                }
            }
            if (d.grades_star != null) {
                m.grades_star = String(d.grades_star);
            }
            if (d.units_star != null) {
                m.units_star = String(d.units_star);
            }
            return m;
        };

        /**
         * Creates a plain object from a RespMatLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespMatLearningProgress
         * @static
         * @param {farm.RespMatLearningProgress} m RespMatLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespMatLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.mat_star = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
                d.grades_star = "";
                d.units_star = "";
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            if (m.mat_star && m.mat_star.length) {
                d.mat_star = [];
                for (var j = 0; j < m.mat_star.length; ++j) {
                    if (typeof m.mat_star[j] === "number")
                        d.mat_star[j] = o.longs === String ? String(m.mat_star[j]) : m.mat_star[j];
                    else
                        d.mat_star[j] = o.longs === String ? $util.Long.prototype.toString.call(m.mat_star[j]) : o.longs === Number ? new $util.LongBits(m.mat_star[j].low >>> 0, m.mat_star[j].high >>> 0).toNumber() : m.mat_star[j];
                }
            }
            if (m.grades_star != null && m.hasOwnProperty("grades_star")) {
                d.grades_star = m.grades_star;
            }
            if (m.units_star != null && m.hasOwnProperty("units_star")) {
                d.units_star = m.units_star;
            }
            return d;
        };

        /**
         * Converts this RespMatLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.RespMatLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespMatLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespMatLearningProgress;
    })();

    farm.ReqStudyUpload = (function() {

        /**
         * Properties of a ReqStudyUpload.
         * @memberof farm
         * @interface IReqStudyUpload
         * @property {string|null} [user_id] ReqStudyUpload user_id
         * @property {number|Long|null} [is_skip] ReqStudyUpload is_skip
         * @property {Array.<farm.IStudyResult>|null} [study_result] ReqStudyUpload study_result
         */

        /**
         * Constructs a new ReqStudyUpload.
         * @memberof farm
         * @classdesc Represents a ReqStudyUpload.
         * @implements IReqStudyUpload
         * @constructor
         * @param {farm.IReqStudyUpload=} [p] Properties to set
         */
        function ReqStudyUpload(p) {
            this.study_result = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqStudyUpload user_id.
         * @member {string} user_id
         * @memberof farm.ReqStudyUpload
         * @instance
         */
        ReqStudyUpload.prototype.user_id = "";

        /**
         * ReqStudyUpload is_skip.
         * @member {number|Long} is_skip
         * @memberof farm.ReqStudyUpload
         * @instance
         */
        ReqStudyUpload.prototype.is_skip = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqStudyUpload study_result.
         * @member {Array.<farm.IStudyResult>} study_result
         * @memberof farm.ReqStudyUpload
         * @instance
         */
        ReqStudyUpload.prototype.study_result = $util.emptyArray;

        /**
         * Encodes the specified ReqStudyUpload message. Does not implicitly {@link farm.ReqStudyUpload.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqStudyUpload
         * @static
         * @param {farm.IReqStudyUpload} m ReqStudyUpload message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqStudyUpload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && Object.hasOwnProperty.call(m, "user_id"))
                w.uint32(10).string(m.user_id);
            if (m.is_skip != null && Object.hasOwnProperty.call(m, "is_skip"))
                w.uint32(16).int64(m.is_skip);
            if (m.study_result != null && m.study_result.length) {
                for (var i = 0; i < m.study_result.length; ++i)
                    $root.farm.StudyResult.encode(m.study_result[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ReqStudyUpload message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqStudyUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqStudyUpload} ReqStudyUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqStudyUpload.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqStudyUpload();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.string();
                    break;
                case 2:
                    m.is_skip = r.int64();
                    break;
                case 3:
                    if (!(m.study_result && m.study_result.length))
                        m.study_result = [];
                    m.study_result.push($root.farm.StudyResult.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqStudyUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqStudyUpload
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqStudyUpload} ReqStudyUpload
         */
        ReqStudyUpload.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqStudyUpload)
                return d;
            var m = new $root.farm.ReqStudyUpload();
            if (d.user_id != null) {
                m.user_id = String(d.user_id);
            }
            if (d.is_skip != null) {
                if ($util.Long)
                    (m.is_skip = $util.Long.fromValue(d.is_skip)).unsigned = false;
                else if (typeof d.is_skip === "string")
                    m.is_skip = parseInt(d.is_skip, 10);
                else if (typeof d.is_skip === "number")
                    m.is_skip = d.is_skip;
                else if (typeof d.is_skip === "object")
                    m.is_skip = new $util.LongBits(d.is_skip.low >>> 0, d.is_skip.high >>> 0).toNumber();
            }
            if (d.study_result) {
                if (!Array.isArray(d.study_result))
                    throw TypeError(".farm.ReqStudyUpload.study_result: array expected");
                m.study_result = [];
                for (var i = 0; i < d.study_result.length; ++i) {
                    if (typeof d.study_result[i] !== "object")
                        throw TypeError(".farm.ReqStudyUpload.study_result: object expected");
                    m.study_result[i] = $root.farm.StudyResult.fromObject(d.study_result[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqStudyUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqStudyUpload
         * @static
         * @param {farm.ReqStudyUpload} m ReqStudyUpload
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqStudyUpload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.study_result = [];
            }
            if (o.defaults) {
                d.user_id = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.is_skip = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.is_skip = o.longs === String ? "0" : 0;
            }
            if (m.user_id != null && m.hasOwnProperty("user_id")) {
                d.user_id = m.user_id;
            }
            if (m.is_skip != null && m.hasOwnProperty("is_skip")) {
                if (typeof m.is_skip === "number")
                    d.is_skip = o.longs === String ? String(m.is_skip) : m.is_skip;
                else
                    d.is_skip = o.longs === String ? $util.Long.prototype.toString.call(m.is_skip) : o.longs === Number ? new $util.LongBits(m.is_skip.low >>> 0, m.is_skip.high >>> 0).toNumber() : m.is_skip;
            }
            if (m.study_result && m.study_result.length) {
                d.study_result = [];
                for (var j = 0; j < m.study_result.length; ++j) {
                    d.study_result[j] = $root.farm.StudyResult.toObject(m.study_result[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this ReqStudyUpload to JSON.
         * @function toJSON
         * @memberof farm.ReqStudyUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqStudyUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqStudyUpload;
    })();

    farm.RespStudyUpload = (function() {

        /**
         * Properties of a RespStudyUpload.
         * @memberof farm
         * @interface IRespStudyUpload
         * @property {Array.<farm.IRes>|null} [res_list] RespStudyUpload res_list
         */

        /**
         * Constructs a new RespStudyUpload.
         * @memberof farm
         * @classdesc Represents a RespStudyUpload.
         * @implements IRespStudyUpload
         * @constructor
         * @param {farm.IRespStudyUpload=} [p] Properties to set
         */
        function RespStudyUpload(p) {
            this.res_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespStudyUpload res_list.
         * @member {Array.<farm.IRes>} res_list
         * @memberof farm.RespStudyUpload
         * @instance
         */
        RespStudyUpload.prototype.res_list = $util.emptyArray;

        /**
         * Encodes the specified RespStudyUpload message. Does not implicitly {@link farm.RespStudyUpload.verify|verify} messages.
         * @function encode
         * @memberof farm.RespStudyUpload
         * @static
         * @param {farm.IRespStudyUpload} m RespStudyUpload message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespStudyUpload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.res_list != null && m.res_list.length) {
                for (var i = 0; i < m.res_list.length; ++i)
                    $root.farm.Res.encode(m.res_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespStudyUpload message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespStudyUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespStudyUpload} RespStudyUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespStudyUpload.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespStudyUpload();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.res_list && m.res_list.length))
                        m.res_list = [];
                    m.res_list.push($root.farm.Res.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespStudyUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespStudyUpload
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespStudyUpload} RespStudyUpload
         */
        RespStudyUpload.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespStudyUpload)
                return d;
            var m = new $root.farm.RespStudyUpload();
            if (d.res_list) {
                if (!Array.isArray(d.res_list))
                    throw TypeError(".farm.RespStudyUpload.res_list: array expected");
                m.res_list = [];
                for (var i = 0; i < d.res_list.length; ++i) {
                    if (typeof d.res_list[i] !== "object")
                        throw TypeError(".farm.RespStudyUpload.res_list: object expected");
                    m.res_list[i] = $root.farm.Res.fromObject(d.res_list[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespStudyUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespStudyUpload
         * @static
         * @param {farm.RespStudyUpload} m RespStudyUpload
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespStudyUpload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.res_list = [];
            }
            if (m.res_list && m.res_list.length) {
                d.res_list = [];
                for (var j = 0; j < m.res_list.length; ++j) {
                    d.res_list[j] = $root.farm.Res.toObject(m.res_list[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespStudyUpload to JSON.
         * @function toJSON
         * @memberof farm.RespStudyUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespStudyUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespStudyUpload;
    })();

    farm.StudyResult = (function() {

        /**
         * Properties of a StudyResult.
         * @memberof farm
         * @interface IStudyResult
         * @property {number|Long|null} [item_id] StudyResult item_id
         * @property {number|Long|null} [result] StudyResult result
         * @property {number|Long|null} [res_type] StudyResult res_type
         * @property {number|Long|null} [res_num] StudyResult res_num
         */

        /**
         * Constructs a new StudyResult.
         * @memberof farm
         * @classdesc Represents a StudyResult.
         * @implements IStudyResult
         * @constructor
         * @param {farm.IStudyResult=} [p] Properties to set
         */
        function StudyResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StudyResult item_id.
         * @member {number|Long} item_id
         * @memberof farm.StudyResult
         * @instance
         */
        StudyResult.prototype.item_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StudyResult result.
         * @member {number|Long} result
         * @memberof farm.StudyResult
         * @instance
         */
        StudyResult.prototype.result = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StudyResult res_type.
         * @member {number|Long} res_type
         * @memberof farm.StudyResult
         * @instance
         */
        StudyResult.prototype.res_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StudyResult res_num.
         * @member {number|Long} res_num
         * @memberof farm.StudyResult
         * @instance
         */
        StudyResult.prototype.res_num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified StudyResult message. Does not implicitly {@link farm.StudyResult.verify|verify} messages.
         * @function encode
         * @memberof farm.StudyResult
         * @static
         * @param {farm.IStudyResult} m StudyResult message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StudyResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.item_id != null && Object.hasOwnProperty.call(m, "item_id"))
                w.uint32(8).int64(m.item_id);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(16).int64(m.result);
            if (m.res_type != null && Object.hasOwnProperty.call(m, "res_type"))
                w.uint32(24).int64(m.res_type);
            if (m.res_num != null && Object.hasOwnProperty.call(m, "res_num"))
                w.uint32(32).int64(m.res_num);
            return w;
        };

        /**
         * Decodes a StudyResult message from the specified reader or buffer.
         * @function decode
         * @memberof farm.StudyResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.StudyResult} StudyResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StudyResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.StudyResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.item_id = r.int64();
                    break;
                case 2:
                    m.result = r.int64();
                    break;
                case 3:
                    m.res_type = r.int64();
                    break;
                case 4:
                    m.res_num = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a StudyResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.StudyResult
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.StudyResult} StudyResult
         */
        StudyResult.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.StudyResult)
                return d;
            var m = new $root.farm.StudyResult();
            if (d.item_id != null) {
                if ($util.Long)
                    (m.item_id = $util.Long.fromValue(d.item_id)).unsigned = false;
                else if (typeof d.item_id === "string")
                    m.item_id = parseInt(d.item_id, 10);
                else if (typeof d.item_id === "number")
                    m.item_id = d.item_id;
                else if (typeof d.item_id === "object")
                    m.item_id = new $util.LongBits(d.item_id.low >>> 0, d.item_id.high >>> 0).toNumber();
            }
            if (d.result != null) {
                if ($util.Long)
                    (m.result = $util.Long.fromValue(d.result)).unsigned = false;
                else if (typeof d.result === "string")
                    m.result = parseInt(d.result, 10);
                else if (typeof d.result === "number")
                    m.result = d.result;
                else if (typeof d.result === "object")
                    m.result = new $util.LongBits(d.result.low >>> 0, d.result.high >>> 0).toNumber();
            }
            if (d.res_type != null) {
                if ($util.Long)
                    (m.res_type = $util.Long.fromValue(d.res_type)).unsigned = false;
                else if (typeof d.res_type === "string")
                    m.res_type = parseInt(d.res_type, 10);
                else if (typeof d.res_type === "number")
                    m.res_type = d.res_type;
                else if (typeof d.res_type === "object")
                    m.res_type = new $util.LongBits(d.res_type.low >>> 0, d.res_type.high >>> 0).toNumber();
            }
            if (d.res_num != null) {
                if ($util.Long)
                    (m.res_num = $util.Long.fromValue(d.res_num)).unsigned = false;
                else if (typeof d.res_num === "string")
                    m.res_num = parseInt(d.res_num, 10);
                else if (typeof d.res_num === "number")
                    m.res_num = d.res_num;
                else if (typeof d.res_num === "object")
                    m.res_num = new $util.LongBits(d.res_num.low >>> 0, d.res_num.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a StudyResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.StudyResult
         * @static
         * @param {farm.StudyResult} m StudyResult
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StudyResult.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.item_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.item_id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.result = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.result = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.res_type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.res_type = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.res_num = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.res_num = o.longs === String ? "0" : 0;
            }
            if (m.item_id != null && m.hasOwnProperty("item_id")) {
                if (typeof m.item_id === "number")
                    d.item_id = o.longs === String ? String(m.item_id) : m.item_id;
                else
                    d.item_id = o.longs === String ? $util.Long.prototype.toString.call(m.item_id) : o.longs === Number ? new $util.LongBits(m.item_id.low >>> 0, m.item_id.high >>> 0).toNumber() : m.item_id;
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                if (typeof m.result === "number")
                    d.result = o.longs === String ? String(m.result) : m.result;
                else
                    d.result = o.longs === String ? $util.Long.prototype.toString.call(m.result) : o.longs === Number ? new $util.LongBits(m.result.low >>> 0, m.result.high >>> 0).toNumber() : m.result;
            }
            if (m.res_type != null && m.hasOwnProperty("res_type")) {
                if (typeof m.res_type === "number")
                    d.res_type = o.longs === String ? String(m.res_type) : m.res_type;
                else
                    d.res_type = o.longs === String ? $util.Long.prototype.toString.call(m.res_type) : o.longs === Number ? new $util.LongBits(m.res_type.low >>> 0, m.res_type.high >>> 0).toNumber() : m.res_type;
            }
            if (m.res_num != null && m.hasOwnProperty("res_num")) {
                if (typeof m.res_num === "number")
                    d.res_num = o.longs === String ? String(m.res_num) : m.res_num;
                else
                    d.res_num = o.longs === String ? $util.Long.prototype.toString.call(m.res_num) : o.longs === Number ? new $util.LongBits(m.res_num.low >>> 0, m.res_num.high >>> 0).toNumber() : m.res_num;
            }
            return d;
        };

        /**
         * Converts this StudyResult to JSON.
         * @function toJSON
         * @memberof farm.StudyResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StudyResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StudyResult;
    })();

    farm.Res = (function() {

        /**
         * Properties of a Res.
         * @memberof farm
         * @interface IRes
         * @property {number|Long|null} [res_type] Res res_type
         * @property {number|Long|null} [res_num] Res res_num
         */

        /**
         * Constructs a new Res.
         * @memberof farm
         * @classdesc Represents a Res.
         * @implements IRes
         * @constructor
         * @param {farm.IRes=} [p] Properties to set
         */
        function Res(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Res res_type.
         * @member {number|Long} res_type
         * @memberof farm.Res
         * @instance
         */
        Res.prototype.res_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Res res_num.
         * @member {number|Long} res_num
         * @memberof farm.Res
         * @instance
         */
        Res.prototype.res_num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified Res message. Does not implicitly {@link farm.Res.verify|verify} messages.
         * @function encode
         * @memberof farm.Res
         * @static
         * @param {farm.IRes} m Res message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Res.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.res_type != null && Object.hasOwnProperty.call(m, "res_type"))
                w.uint32(8).int64(m.res_type);
            if (m.res_num != null && Object.hasOwnProperty.call(m, "res_num"))
                w.uint32(16).int64(m.res_num);
            return w;
        };

        /**
         * Decodes a Res message from the specified reader or buffer.
         * @function decode
         * @memberof farm.Res
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.Res} Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Res.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.Res();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.res_type = r.int64();
                    break;
                case 2:
                    m.res_num = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a Res message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.Res
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.Res} Res
         */
        Res.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.Res)
                return d;
            var m = new $root.farm.Res();
            if (d.res_type != null) {
                if ($util.Long)
                    (m.res_type = $util.Long.fromValue(d.res_type)).unsigned = false;
                else if (typeof d.res_type === "string")
                    m.res_type = parseInt(d.res_type, 10);
                else if (typeof d.res_type === "number")
                    m.res_type = d.res_type;
                else if (typeof d.res_type === "object")
                    m.res_type = new $util.LongBits(d.res_type.low >>> 0, d.res_type.high >>> 0).toNumber();
            }
            if (d.res_num != null) {
                if ($util.Long)
                    (m.res_num = $util.Long.fromValue(d.res_num)).unsigned = false;
                else if (typeof d.res_num === "string")
                    m.res_num = parseInt(d.res_num, 10);
                else if (typeof d.res_num === "number")
                    m.res_num = d.res_num;
                else if (typeof d.res_num === "object")
                    m.res_num = new $util.LongBits(d.res_num.low >>> 0, d.res_num.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a Res message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.Res
         * @static
         * @param {farm.Res} m Res
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Res.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.res_type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.res_type = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.res_num = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.res_num = o.longs === String ? "0" : 0;
            }
            if (m.res_type != null && m.hasOwnProperty("res_type")) {
                if (typeof m.res_type === "number")
                    d.res_type = o.longs === String ? String(m.res_type) : m.res_type;
                else
                    d.res_type = o.longs === String ? $util.Long.prototype.toString.call(m.res_type) : o.longs === Number ? new $util.LongBits(m.res_type.low >>> 0, m.res_type.high >>> 0).toNumber() : m.res_type;
            }
            if (m.res_num != null && m.hasOwnProperty("res_num")) {
                if (typeof m.res_num === "number")
                    d.res_num = o.longs === String ? String(m.res_num) : m.res_num;
                else
                    d.res_num = o.longs === String ? $util.Long.prototype.toString.call(m.res_num) : o.longs === Number ? new $util.LongBits(m.res_num.low >>> 0, m.res_num.high >>> 0).toNumber() : m.res_num;
            }
            return d;
        };

        /**
         * Converts this Res to JSON.
         * @function toJSON
         * @memberof farm.Res
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Res.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Res;
    })();

    farm.ReqGameUpload = (function() {

        /**
         * Properties of a ReqGameUpload.
         * @memberof farm
         * @interface IReqGameUpload
         * @property {string|null} [user_id] ReqGameUpload user_id
         * @property {number|Long|null} [start_time] ReqGameUpload start_time
         * @property {number|Long|null} [end_time] ReqGameUpload end_time
         * @property {Array.<farm.IGameResult>|null} [game_result] ReqGameUpload game_result
         * @property {number|null} [mode] ReqGameUpload mode
         * @property {string|null} [mode_param] ReqGameUpload mode_param
         * @property {number|null} [game_type] ReqGameUpload game_type
         */

        /**
         * Constructs a new ReqGameUpload.
         * @memberof farm
         * @classdesc Represents a ReqGameUpload.
         * @implements IReqGameUpload
         * @constructor
         * @param {farm.IReqGameUpload=} [p] Properties to set
         */
        function ReqGameUpload(p) {
            this.game_result = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqGameUpload user_id.
         * @member {string} user_id
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.user_id = "";

        /**
         * ReqGameUpload start_time.
         * @member {number|Long} start_time
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.start_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqGameUpload end_time.
         * @member {number|Long} end_time
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.end_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqGameUpload game_result.
         * @member {Array.<farm.IGameResult>} game_result
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.game_result = $util.emptyArray;

        /**
         * ReqGameUpload mode.
         * @member {number} mode
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.mode = 0;

        /**
         * ReqGameUpload mode_param.
         * @member {string} mode_param
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.mode_param = "";

        /**
         * ReqGameUpload game_type.
         * @member {number} game_type
         * @memberof farm.ReqGameUpload
         * @instance
         */
        ReqGameUpload.prototype.game_type = 0;

        /**
         * Encodes the specified ReqGameUpload message. Does not implicitly {@link farm.ReqGameUpload.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqGameUpload
         * @static
         * @param {farm.IReqGameUpload} m ReqGameUpload message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameUpload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && Object.hasOwnProperty.call(m, "user_id"))
                w.uint32(10).string(m.user_id);
            if (m.start_time != null && Object.hasOwnProperty.call(m, "start_time"))
                w.uint32(16).int64(m.start_time);
            if (m.end_time != null && Object.hasOwnProperty.call(m, "end_time"))
                w.uint32(24).int64(m.end_time);
            if (m.game_result != null && m.game_result.length) {
                for (var i = 0; i < m.game_result.length; ++i)
                    $root.farm.GameResult.encode(m.game_result[i], w.uint32(34).fork()).ldelim();
            }
            if (m.mode != null && Object.hasOwnProperty.call(m, "mode"))
                w.uint32(40).int32(m.mode);
            if (m.mode_param != null && Object.hasOwnProperty.call(m, "mode_param"))
                w.uint32(50).string(m.mode_param);
            if (m.game_type != null && Object.hasOwnProperty.call(m, "game_type"))
                w.uint32(56).int32(m.game_type);
            return w;
        };

        /**
         * Decodes a ReqGameUpload message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqGameUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqGameUpload} ReqGameUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameUpload.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqGameUpload();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.string();
                    break;
                case 2:
                    m.start_time = r.int64();
                    break;
                case 3:
                    m.end_time = r.int64();
                    break;
                case 4:
                    if (!(m.game_result && m.game_result.length))
                        m.game_result = [];
                    m.game_result.push($root.farm.GameResult.decode(r, r.uint32()));
                    break;
                case 5:
                    m.mode = r.int32();
                    break;
                case 6:
                    m.mode_param = r.string();
                    break;
                case 7:
                    m.game_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqGameUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqGameUpload
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqGameUpload} ReqGameUpload
         */
        ReqGameUpload.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqGameUpload)
                return d;
            var m = new $root.farm.ReqGameUpload();
            if (d.user_id != null) {
                m.user_id = String(d.user_id);
            }
            if (d.start_time != null) {
                if ($util.Long)
                    (m.start_time = $util.Long.fromValue(d.start_time)).unsigned = false;
                else if (typeof d.start_time === "string")
                    m.start_time = parseInt(d.start_time, 10);
                else if (typeof d.start_time === "number")
                    m.start_time = d.start_time;
                else if (typeof d.start_time === "object")
                    m.start_time = new $util.LongBits(d.start_time.low >>> 0, d.start_time.high >>> 0).toNumber();
            }
            if (d.end_time != null) {
                if ($util.Long)
                    (m.end_time = $util.Long.fromValue(d.end_time)).unsigned = false;
                else if (typeof d.end_time === "string")
                    m.end_time = parseInt(d.end_time, 10);
                else if (typeof d.end_time === "number")
                    m.end_time = d.end_time;
                else if (typeof d.end_time === "object")
                    m.end_time = new $util.LongBits(d.end_time.low >>> 0, d.end_time.high >>> 0).toNumber();
            }
            if (d.game_result) {
                if (!Array.isArray(d.game_result))
                    throw TypeError(".farm.ReqGameUpload.game_result: array expected");
                m.game_result = [];
                for (var i = 0; i < d.game_result.length; ++i) {
                    if (typeof d.game_result[i] !== "object")
                        throw TypeError(".farm.ReqGameUpload.game_result: object expected");
                    m.game_result[i] = $root.farm.GameResult.fromObject(d.game_result[i]);
                }
            }
            if (d.mode != null) {
                m.mode = d.mode | 0;
            }
            if (d.mode_param != null) {
                m.mode_param = String(d.mode_param);
            }
            if (d.game_type != null) {
                m.game_type = d.game_type | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqGameUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqGameUpload
         * @static
         * @param {farm.ReqGameUpload} m ReqGameUpload
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameUpload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.game_result = [];
            }
            if (o.defaults) {
                d.user_id = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.start_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.start_time = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.end_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.end_time = o.longs === String ? "0" : 0;
                d.mode = 0;
                d.mode_param = "";
                d.game_type = 0;
            }
            if (m.user_id != null && m.hasOwnProperty("user_id")) {
                d.user_id = m.user_id;
            }
            if (m.start_time != null && m.hasOwnProperty("start_time")) {
                if (typeof m.start_time === "number")
                    d.start_time = o.longs === String ? String(m.start_time) : m.start_time;
                else
                    d.start_time = o.longs === String ? $util.Long.prototype.toString.call(m.start_time) : o.longs === Number ? new $util.LongBits(m.start_time.low >>> 0, m.start_time.high >>> 0).toNumber() : m.start_time;
            }
            if (m.end_time != null && m.hasOwnProperty("end_time")) {
                if (typeof m.end_time === "number")
                    d.end_time = o.longs === String ? String(m.end_time) : m.end_time;
                else
                    d.end_time = o.longs === String ? $util.Long.prototype.toString.call(m.end_time) : o.longs === Number ? new $util.LongBits(m.end_time.low >>> 0, m.end_time.high >>> 0).toNumber() : m.end_time;
            }
            if (m.game_result && m.game_result.length) {
                d.game_result = [];
                for (var j = 0; j < m.game_result.length; ++j) {
                    d.game_result[j] = $root.farm.GameResult.toObject(m.game_result[j], o);
                }
            }
            if (m.mode != null && m.hasOwnProperty("mode")) {
                d.mode = m.mode;
            }
            if (m.mode_param != null && m.hasOwnProperty("mode_param")) {
                d.mode_param = m.mode_param;
            }
            if (m.game_type != null && m.hasOwnProperty("game_type")) {
                d.game_type = m.game_type;
            }
            return d;
        };

        /**
         * Converts this ReqGameUpload to JSON.
         * @function toJSON
         * @memberof farm.ReqGameUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqGameUpload;
    })();

    farm.RespGameUpload = (function() {

        /**
         * Properties of a RespGameUpload.
         * @memberof farm
         * @interface IRespGameUpload
         * @property {Array.<farm.IRes>|null} [res_list] RespGameUpload res_list
         * @property {farm.IGameRecord|null} [game_record] RespGameUpload game_record
         * @property {number|null} [mode] RespGameUpload mode
         * @property {farm.IModeResult|null} [mode_result] RespGameUpload mode_result
         * @property {Array.<string>|null} [tkfight_message] RespGameUpload tkfight_message
         * @property {Array.<number|Long>|null} [tast_completed] RespGameUpload tast_completed
         * @property {number|Long|null} [play_num] RespGameUpload play_num
         */

        /**
         * Constructs a new RespGameUpload.
         * @memberof farm
         * @classdesc Represents a RespGameUpload.
         * @implements IRespGameUpload
         * @constructor
         * @param {farm.IRespGameUpload=} [p] Properties to set
         */
        function RespGameUpload(p) {
            this.res_list = [];
            this.tkfight_message = [];
            this.tast_completed = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespGameUpload res_list.
         * @member {Array.<farm.IRes>} res_list
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.res_list = $util.emptyArray;

        /**
         * RespGameUpload game_record.
         * @member {farm.IGameRecord|null|undefined} game_record
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.game_record = null;

        /**
         * RespGameUpload mode.
         * @member {number} mode
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.mode = 0;

        /**
         * RespGameUpload mode_result.
         * @member {farm.IModeResult|null|undefined} mode_result
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.mode_result = null;

        /**
         * RespGameUpload tkfight_message.
         * @member {Array.<string>} tkfight_message
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.tkfight_message = $util.emptyArray;

        /**
         * RespGameUpload tast_completed.
         * @member {Array.<number|Long>} tast_completed
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.tast_completed = $util.emptyArray;

        /**
         * RespGameUpload play_num.
         * @member {number|Long} play_num
         * @memberof farm.RespGameUpload
         * @instance
         */
        RespGameUpload.prototype.play_num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified RespGameUpload message. Does not implicitly {@link farm.RespGameUpload.verify|verify} messages.
         * @function encode
         * @memberof farm.RespGameUpload
         * @static
         * @param {farm.IRespGameUpload} m RespGameUpload message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGameUpload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.res_list != null && m.res_list.length) {
                for (var i = 0; i < m.res_list.length; ++i)
                    $root.farm.Res.encode(m.res_list[i], w.uint32(10).fork()).ldelim();
            }
            if (m.game_record != null && Object.hasOwnProperty.call(m, "game_record"))
                $root.farm.GameRecord.encode(m.game_record, w.uint32(18).fork()).ldelim();
            if (m.mode != null && Object.hasOwnProperty.call(m, "mode"))
                w.uint32(24).int32(m.mode);
            if (m.mode_result != null && Object.hasOwnProperty.call(m, "mode_result"))
                $root.farm.ModeResult.encode(m.mode_result, w.uint32(34).fork()).ldelim();
            if (m.tkfight_message != null && m.tkfight_message.length) {
                for (var i = 0; i < m.tkfight_message.length; ++i)
                    w.uint32(42).string(m.tkfight_message[i]);
            }
            if (m.tast_completed != null && m.tast_completed.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.tast_completed.length; ++i)
                    w.int64(m.tast_completed[i]);
                w.ldelim();
            }
            if (m.play_num != null && Object.hasOwnProperty.call(m, "play_num"))
                w.uint32(56).int64(m.play_num);
            return w;
        };

        /**
         * Decodes a RespGameUpload message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespGameUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespGameUpload} RespGameUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGameUpload.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespGameUpload();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.res_list && m.res_list.length))
                        m.res_list = [];
                    m.res_list.push($root.farm.Res.decode(r, r.uint32()));
                    break;
                case 2:
                    m.game_record = $root.farm.GameRecord.decode(r, r.uint32());
                    break;
                case 3:
                    m.mode = r.int32();
                    break;
                case 4:
                    m.mode_result = $root.farm.ModeResult.decode(r, r.uint32());
                    break;
                case 5:
                    if (!(m.tkfight_message && m.tkfight_message.length))
                        m.tkfight_message = [];
                    m.tkfight_message.push(r.string());
                    break;
                case 6:
                    if (!(m.tast_completed && m.tast_completed.length))
                        m.tast_completed = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.tast_completed.push(r.int64());
                    } else
                        m.tast_completed.push(r.int64());
                    break;
                case 7:
                    m.play_num = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespGameUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespGameUpload
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespGameUpload} RespGameUpload
         */
        RespGameUpload.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespGameUpload)
                return d;
            var m = new $root.farm.RespGameUpload();
            if (d.res_list) {
                if (!Array.isArray(d.res_list))
                    throw TypeError(".farm.RespGameUpload.res_list: array expected");
                m.res_list = [];
                for (var i = 0; i < d.res_list.length; ++i) {
                    if (typeof d.res_list[i] !== "object")
                        throw TypeError(".farm.RespGameUpload.res_list: object expected");
                    m.res_list[i] = $root.farm.Res.fromObject(d.res_list[i]);
                }
            }
            if (d.game_record != null) {
                if (typeof d.game_record !== "object")
                    throw TypeError(".farm.RespGameUpload.game_record: object expected");
                m.game_record = $root.farm.GameRecord.fromObject(d.game_record);
            }
            if (d.mode != null) {
                m.mode = d.mode | 0;
            }
            if (d.mode_result != null) {
                if (typeof d.mode_result !== "object")
                    throw TypeError(".farm.RespGameUpload.mode_result: object expected");
                m.mode_result = $root.farm.ModeResult.fromObject(d.mode_result);
            }
            if (d.tkfight_message) {
                if (!Array.isArray(d.tkfight_message))
                    throw TypeError(".farm.RespGameUpload.tkfight_message: array expected");
                m.tkfight_message = [];
                for (var i = 0; i < d.tkfight_message.length; ++i) {
                    m.tkfight_message[i] = String(d.tkfight_message[i]);
                }
            }
            if (d.tast_completed) {
                if (!Array.isArray(d.tast_completed))
                    throw TypeError(".farm.RespGameUpload.tast_completed: array expected");
                m.tast_completed = [];
                for (var i = 0; i < d.tast_completed.length; ++i) {
                    if ($util.Long)
                        (m.tast_completed[i] = $util.Long.fromValue(d.tast_completed[i])).unsigned = false;
                    else if (typeof d.tast_completed[i] === "string")
                        m.tast_completed[i] = parseInt(d.tast_completed[i], 10);
                    else if (typeof d.tast_completed[i] === "number")
                        m.tast_completed[i] = d.tast_completed[i];
                    else if (typeof d.tast_completed[i] === "object")
                        m.tast_completed[i] = new $util.LongBits(d.tast_completed[i].low >>> 0, d.tast_completed[i].high >>> 0).toNumber();
                }
            }
            if (d.play_num != null) {
                if ($util.Long)
                    (m.play_num = $util.Long.fromValue(d.play_num)).unsigned = false;
                else if (typeof d.play_num === "string")
                    m.play_num = parseInt(d.play_num, 10);
                else if (typeof d.play_num === "number")
                    m.play_num = d.play_num;
                else if (typeof d.play_num === "object")
                    m.play_num = new $util.LongBits(d.play_num.low >>> 0, d.play_num.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a RespGameUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespGameUpload
         * @static
         * @param {farm.RespGameUpload} m RespGameUpload
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespGameUpload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.res_list = [];
                d.tkfight_message = [];
                d.tast_completed = [];
            }
            if (o.defaults) {
                d.game_record = null;
                d.mode = 0;
                d.mode_result = null;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.play_num = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.play_num = o.longs === String ? "0" : 0;
            }
            if (m.res_list && m.res_list.length) {
                d.res_list = [];
                for (var j = 0; j < m.res_list.length; ++j) {
                    d.res_list[j] = $root.farm.Res.toObject(m.res_list[j], o);
                }
            }
            if (m.game_record != null && m.hasOwnProperty("game_record")) {
                d.game_record = $root.farm.GameRecord.toObject(m.game_record, o);
            }
            if (m.mode != null && m.hasOwnProperty("mode")) {
                d.mode = m.mode;
            }
            if (m.mode_result != null && m.hasOwnProperty("mode_result")) {
                d.mode_result = $root.farm.ModeResult.toObject(m.mode_result, o);
            }
            if (m.tkfight_message && m.tkfight_message.length) {
                d.tkfight_message = [];
                for (var j = 0; j < m.tkfight_message.length; ++j) {
                    d.tkfight_message[j] = m.tkfight_message[j];
                }
            }
            if (m.tast_completed && m.tast_completed.length) {
                d.tast_completed = [];
                for (var j = 0; j < m.tast_completed.length; ++j) {
                    if (typeof m.tast_completed[j] === "number")
                        d.tast_completed[j] = o.longs === String ? String(m.tast_completed[j]) : m.tast_completed[j];
                    else
                        d.tast_completed[j] = o.longs === String ? $util.Long.prototype.toString.call(m.tast_completed[j]) : o.longs === Number ? new $util.LongBits(m.tast_completed[j].low >>> 0, m.tast_completed[j].high >>> 0).toNumber() : m.tast_completed[j];
                }
            }
            if (m.play_num != null && m.hasOwnProperty("play_num")) {
                if (typeof m.play_num === "number")
                    d.play_num = o.longs === String ? String(m.play_num) : m.play_num;
                else
                    d.play_num = o.longs === String ? $util.Long.prototype.toString.call(m.play_num) : o.longs === Number ? new $util.LongBits(m.play_num.low >>> 0, m.play_num.high >>> 0).toNumber() : m.play_num;
            }
            return d;
        };

        /**
         * Converts this RespGameUpload to JSON.
         * @function toJSON
         * @memberof farm.RespGameUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespGameUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespGameUpload;
    })();

    farm.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof farm
         * @interface IGameResult
         * @property {number|Long|null} [item_id] GameResult item_id
         * @property {number|Long|null} [result] GameResult result
         * @property {number|Long|null} [res_type] GameResult res_type
         * @property {number|Long|null} [res_num] GameResult res_num
         * @property {number|Long|null} [catch_num] GameResult catch_num
         * @property {number|null} [react_time] GameResult react_time
         * @property {number|Long|null} [is_crit] GameResult is_crit
         */

        /**
         * Constructs a new GameResult.
         * @memberof farm
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {farm.IGameResult=} [p] Properties to set
         */
        function GameResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameResult item_id.
         * @member {number|Long} item_id
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.item_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult result.
         * @member {number|Long} result
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.result = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult res_type.
         * @member {number|Long} res_type
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.res_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult res_num.
         * @member {number|Long} res_num
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.res_num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult catch_num.
         * @member {number|Long} catch_num
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.catch_num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult react_time.
         * @member {number} react_time
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.react_time = 0;

        /**
         * GameResult is_crit.
         * @member {number|Long} is_crit
         * @memberof farm.GameResult
         * @instance
         */
        GameResult.prototype.is_crit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link farm.GameResult.verify|verify} messages.
         * @function encode
         * @memberof farm.GameResult
         * @static
         * @param {farm.IGameResult} m GameResult message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.item_id != null && Object.hasOwnProperty.call(m, "item_id"))
                w.uint32(8).int64(m.item_id);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(16).int64(m.result);
            if (m.res_type != null && Object.hasOwnProperty.call(m, "res_type"))
                w.uint32(24).int64(m.res_type);
            if (m.res_num != null && Object.hasOwnProperty.call(m, "res_num"))
                w.uint32(32).int64(m.res_num);
            if (m.catch_num != null && Object.hasOwnProperty.call(m, "catch_num"))
                w.uint32(40).int64(m.catch_num);
            if (m.react_time != null && Object.hasOwnProperty.call(m, "react_time"))
                w.uint32(49).double(m.react_time);
            if (m.is_crit != null && Object.hasOwnProperty.call(m, "is_crit"))
                w.uint32(56).int64(m.is_crit);
            return w;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof farm.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.GameResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.item_id = r.int64();
                    break;
                case 2:
                    m.result = r.int64();
                    break;
                case 3:
                    m.res_type = r.int64();
                    break;
                case 4:
                    m.res_num = r.int64();
                    break;
                case 5:
                    m.catch_num = r.int64();
                    break;
                case 6:
                    m.react_time = r.double();
                    break;
                case 7:
                    m.is_crit = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.GameResult
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.GameResult)
                return d;
            var m = new $root.farm.GameResult();
            if (d.item_id != null) {
                if ($util.Long)
                    (m.item_id = $util.Long.fromValue(d.item_id)).unsigned = false;
                else if (typeof d.item_id === "string")
                    m.item_id = parseInt(d.item_id, 10);
                else if (typeof d.item_id === "number")
                    m.item_id = d.item_id;
                else if (typeof d.item_id === "object")
                    m.item_id = new $util.LongBits(d.item_id.low >>> 0, d.item_id.high >>> 0).toNumber();
            }
            if (d.result != null) {
                if ($util.Long)
                    (m.result = $util.Long.fromValue(d.result)).unsigned = false;
                else if (typeof d.result === "string")
                    m.result = parseInt(d.result, 10);
                else if (typeof d.result === "number")
                    m.result = d.result;
                else if (typeof d.result === "object")
                    m.result = new $util.LongBits(d.result.low >>> 0, d.result.high >>> 0).toNumber();
            }
            if (d.res_type != null) {
                if ($util.Long)
                    (m.res_type = $util.Long.fromValue(d.res_type)).unsigned = false;
                else if (typeof d.res_type === "string")
                    m.res_type = parseInt(d.res_type, 10);
                else if (typeof d.res_type === "number")
                    m.res_type = d.res_type;
                else if (typeof d.res_type === "object")
                    m.res_type = new $util.LongBits(d.res_type.low >>> 0, d.res_type.high >>> 0).toNumber();
            }
            if (d.res_num != null) {
                if ($util.Long)
                    (m.res_num = $util.Long.fromValue(d.res_num)).unsigned = false;
                else if (typeof d.res_num === "string")
                    m.res_num = parseInt(d.res_num, 10);
                else if (typeof d.res_num === "number")
                    m.res_num = d.res_num;
                else if (typeof d.res_num === "object")
                    m.res_num = new $util.LongBits(d.res_num.low >>> 0, d.res_num.high >>> 0).toNumber();
            }
            if (d.catch_num != null) {
                if ($util.Long)
                    (m.catch_num = $util.Long.fromValue(d.catch_num)).unsigned = false;
                else if (typeof d.catch_num === "string")
                    m.catch_num = parseInt(d.catch_num, 10);
                else if (typeof d.catch_num === "number")
                    m.catch_num = d.catch_num;
                else if (typeof d.catch_num === "object")
                    m.catch_num = new $util.LongBits(d.catch_num.low >>> 0, d.catch_num.high >>> 0).toNumber();
            }
            if (d.react_time != null) {
                m.react_time = Number(d.react_time);
            }
            if (d.is_crit != null) {
                if ($util.Long)
                    (m.is_crit = $util.Long.fromValue(d.is_crit)).unsigned = false;
                else if (typeof d.is_crit === "string")
                    m.is_crit = parseInt(d.is_crit, 10);
                else if (typeof d.is_crit === "number")
                    m.is_crit = d.is_crit;
                else if (typeof d.is_crit === "object")
                    m.is_crit = new $util.LongBits(d.is_crit.low >>> 0, d.is_crit.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.GameResult
         * @static
         * @param {farm.GameResult} m GameResult
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.item_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.item_id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.result = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.result = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.res_type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.res_type = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.res_num = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.res_num = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.catch_num = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.catch_num = o.longs === String ? "0" : 0;
                d.react_time = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.is_crit = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.is_crit = o.longs === String ? "0" : 0;
            }
            if (m.item_id != null && m.hasOwnProperty("item_id")) {
                if (typeof m.item_id === "number")
                    d.item_id = o.longs === String ? String(m.item_id) : m.item_id;
                else
                    d.item_id = o.longs === String ? $util.Long.prototype.toString.call(m.item_id) : o.longs === Number ? new $util.LongBits(m.item_id.low >>> 0, m.item_id.high >>> 0).toNumber() : m.item_id;
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                if (typeof m.result === "number")
                    d.result = o.longs === String ? String(m.result) : m.result;
                else
                    d.result = o.longs === String ? $util.Long.prototype.toString.call(m.result) : o.longs === Number ? new $util.LongBits(m.result.low >>> 0, m.result.high >>> 0).toNumber() : m.result;
            }
            if (m.res_type != null && m.hasOwnProperty("res_type")) {
                if (typeof m.res_type === "number")
                    d.res_type = o.longs === String ? String(m.res_type) : m.res_type;
                else
                    d.res_type = o.longs === String ? $util.Long.prototype.toString.call(m.res_type) : o.longs === Number ? new $util.LongBits(m.res_type.low >>> 0, m.res_type.high >>> 0).toNumber() : m.res_type;
            }
            if (m.res_num != null && m.hasOwnProperty("res_num")) {
                if (typeof m.res_num === "number")
                    d.res_num = o.longs === String ? String(m.res_num) : m.res_num;
                else
                    d.res_num = o.longs === String ? $util.Long.prototype.toString.call(m.res_num) : o.longs === Number ? new $util.LongBits(m.res_num.low >>> 0, m.res_num.high >>> 0).toNumber() : m.res_num;
            }
            if (m.catch_num != null && m.hasOwnProperty("catch_num")) {
                if (typeof m.catch_num === "number")
                    d.catch_num = o.longs === String ? String(m.catch_num) : m.catch_num;
                else
                    d.catch_num = o.longs === String ? $util.Long.prototype.toString.call(m.catch_num) : o.longs === Number ? new $util.LongBits(m.catch_num.low >>> 0, m.catch_num.high >>> 0).toNumber() : m.catch_num;
            }
            if (m.react_time != null && m.hasOwnProperty("react_time")) {
                d.react_time = o.json && !isFinite(m.react_time) ? String(m.react_time) : m.react_time;
            }
            if (m.is_crit != null && m.hasOwnProperty("is_crit")) {
                if (typeof m.is_crit === "number")
                    d.is_crit = o.longs === String ? String(m.is_crit) : m.is_crit;
                else
                    d.is_crit = o.longs === String ? $util.Long.prototype.toString.call(m.is_crit) : o.longs === Number ? new $util.LongBits(m.is_crit.low >>> 0, m.is_crit.high >>> 0).toNumber() : m.is_crit;
            }
            return d;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof farm.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResult;
    })();

    farm.GameRecord = (function() {

        /**
         * Properties of a GameRecord.
         * @memberof farm
         * @interface IGameRecord
         * @property {number|null} [score] GameRecord score
         * @property {Array.<number|Long>|null} [wrong_words] GameRecord wrong_words
         * @property {Array.<number|Long>|null} [unskillful_words] GameRecord unskillful_words
         * @property {Array.<number|Long>|null} [skillful_words] GameRecord skillful_words
         * @property {Array.<number|Long>|null} [superskillful_words] GameRecord superskillful_words
         */

        /**
         * Constructs a new GameRecord.
         * @memberof farm
         * @classdesc Represents a GameRecord.
         * @implements IGameRecord
         * @constructor
         * @param {farm.IGameRecord=} [p] Properties to set
         */
        function GameRecord(p) {
            this.wrong_words = [];
            this.unskillful_words = [];
            this.skillful_words = [];
            this.superskillful_words = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameRecord score.
         * @member {number} score
         * @memberof farm.GameRecord
         * @instance
         */
        GameRecord.prototype.score = 0;

        /**
         * GameRecord wrong_words.
         * @member {Array.<number|Long>} wrong_words
         * @memberof farm.GameRecord
         * @instance
         */
        GameRecord.prototype.wrong_words = $util.emptyArray;

        /**
         * GameRecord unskillful_words.
         * @member {Array.<number|Long>} unskillful_words
         * @memberof farm.GameRecord
         * @instance
         */
        GameRecord.prototype.unskillful_words = $util.emptyArray;

        /**
         * GameRecord skillful_words.
         * @member {Array.<number|Long>} skillful_words
         * @memberof farm.GameRecord
         * @instance
         */
        GameRecord.prototype.skillful_words = $util.emptyArray;

        /**
         * GameRecord superskillful_words.
         * @member {Array.<number|Long>} superskillful_words
         * @memberof farm.GameRecord
         * @instance
         */
        GameRecord.prototype.superskillful_words = $util.emptyArray;

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link farm.GameRecord.verify|verify} messages.
         * @function encode
         * @memberof farm.GameRecord
         * @static
         * @param {farm.IGameRecord} m GameRecord message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(13).float(m.score);
            if (m.wrong_words != null && m.wrong_words.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.wrong_words.length; ++i)
                    w.int64(m.wrong_words[i]);
                w.ldelim();
            }
            if (m.unskillful_words != null && m.unskillful_words.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.unskillful_words.length; ++i)
                    w.int64(m.unskillful_words[i]);
                w.ldelim();
            }
            if (m.skillful_words != null && m.skillful_words.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.skillful_words.length; ++i)
                    w.int64(m.skillful_words[i]);
                w.ldelim();
            }
            if (m.superskillful_words != null && m.superskillful_words.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.superskillful_words.length; ++i)
                    w.int64(m.superskillful_words[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof farm.GameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.GameRecord} GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.GameRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.score = r.float();
                    break;
                case 2:
                    if (!(m.wrong_words && m.wrong_words.length))
                        m.wrong_words = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.wrong_words.push(r.int64());
                    } else
                        m.wrong_words.push(r.int64());
                    break;
                case 3:
                    if (!(m.unskillful_words && m.unskillful_words.length))
                        m.unskillful_words = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.unskillful_words.push(r.int64());
                    } else
                        m.unskillful_words.push(r.int64());
                    break;
                case 4:
                    if (!(m.skillful_words && m.skillful_words.length))
                        m.skillful_words = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skillful_words.push(r.int64());
                    } else
                        m.skillful_words.push(r.int64());
                    break;
                case 5:
                    if (!(m.superskillful_words && m.superskillful_words.length))
                        m.superskillful_words = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.superskillful_words.push(r.int64());
                    } else
                        m.superskillful_words.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.GameRecord
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.GameRecord} GameRecord
         */
        GameRecord.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.GameRecord)
                return d;
            var m = new $root.farm.GameRecord();
            if (d.score != null) {
                m.score = Number(d.score);
            }
            if (d.wrong_words) {
                if (!Array.isArray(d.wrong_words))
                    throw TypeError(".farm.GameRecord.wrong_words: array expected");
                m.wrong_words = [];
                for (var i = 0; i < d.wrong_words.length; ++i) {
                    if ($util.Long)
                        (m.wrong_words[i] = $util.Long.fromValue(d.wrong_words[i])).unsigned = false;
                    else if (typeof d.wrong_words[i] === "string")
                        m.wrong_words[i] = parseInt(d.wrong_words[i], 10);
                    else if (typeof d.wrong_words[i] === "number")
                        m.wrong_words[i] = d.wrong_words[i];
                    else if (typeof d.wrong_words[i] === "object")
                        m.wrong_words[i] = new $util.LongBits(d.wrong_words[i].low >>> 0, d.wrong_words[i].high >>> 0).toNumber();
                }
            }
            if (d.unskillful_words) {
                if (!Array.isArray(d.unskillful_words))
                    throw TypeError(".farm.GameRecord.unskillful_words: array expected");
                m.unskillful_words = [];
                for (var i = 0; i < d.unskillful_words.length; ++i) {
                    if ($util.Long)
                        (m.unskillful_words[i] = $util.Long.fromValue(d.unskillful_words[i])).unsigned = false;
                    else if (typeof d.unskillful_words[i] === "string")
                        m.unskillful_words[i] = parseInt(d.unskillful_words[i], 10);
                    else if (typeof d.unskillful_words[i] === "number")
                        m.unskillful_words[i] = d.unskillful_words[i];
                    else if (typeof d.unskillful_words[i] === "object")
                        m.unskillful_words[i] = new $util.LongBits(d.unskillful_words[i].low >>> 0, d.unskillful_words[i].high >>> 0).toNumber();
                }
            }
            if (d.skillful_words) {
                if (!Array.isArray(d.skillful_words))
                    throw TypeError(".farm.GameRecord.skillful_words: array expected");
                m.skillful_words = [];
                for (var i = 0; i < d.skillful_words.length; ++i) {
                    if ($util.Long)
                        (m.skillful_words[i] = $util.Long.fromValue(d.skillful_words[i])).unsigned = false;
                    else if (typeof d.skillful_words[i] === "string")
                        m.skillful_words[i] = parseInt(d.skillful_words[i], 10);
                    else if (typeof d.skillful_words[i] === "number")
                        m.skillful_words[i] = d.skillful_words[i];
                    else if (typeof d.skillful_words[i] === "object")
                        m.skillful_words[i] = new $util.LongBits(d.skillful_words[i].low >>> 0, d.skillful_words[i].high >>> 0).toNumber();
                }
            }
            if (d.superskillful_words) {
                if (!Array.isArray(d.superskillful_words))
                    throw TypeError(".farm.GameRecord.superskillful_words: array expected");
                m.superskillful_words = [];
                for (var i = 0; i < d.superskillful_words.length; ++i) {
                    if ($util.Long)
                        (m.superskillful_words[i] = $util.Long.fromValue(d.superskillful_words[i])).unsigned = false;
                    else if (typeof d.superskillful_words[i] === "string")
                        m.superskillful_words[i] = parseInt(d.superskillful_words[i], 10);
                    else if (typeof d.superskillful_words[i] === "number")
                        m.superskillful_words[i] = d.superskillful_words[i];
                    else if (typeof d.superskillful_words[i] === "object")
                        m.superskillful_words[i] = new $util.LongBits(d.superskillful_words[i].low >>> 0, d.superskillful_words[i].high >>> 0).toNumber();
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.GameRecord
         * @static
         * @param {farm.GameRecord} m GameRecord
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecord.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.wrong_words = [];
                d.unskillful_words = [];
                d.skillful_words = [];
                d.superskillful_words = [];
            }
            if (o.defaults) {
                d.score = 0;
            }
            if (m.score != null && m.hasOwnProperty("score")) {
                d.score = o.json && !isFinite(m.score) ? String(m.score) : m.score;
            }
            if (m.wrong_words && m.wrong_words.length) {
                d.wrong_words = [];
                for (var j = 0; j < m.wrong_words.length; ++j) {
                    if (typeof m.wrong_words[j] === "number")
                        d.wrong_words[j] = o.longs === String ? String(m.wrong_words[j]) : m.wrong_words[j];
                    else
                        d.wrong_words[j] = o.longs === String ? $util.Long.prototype.toString.call(m.wrong_words[j]) : o.longs === Number ? new $util.LongBits(m.wrong_words[j].low >>> 0, m.wrong_words[j].high >>> 0).toNumber() : m.wrong_words[j];
                }
            }
            if (m.unskillful_words && m.unskillful_words.length) {
                d.unskillful_words = [];
                for (var j = 0; j < m.unskillful_words.length; ++j) {
                    if (typeof m.unskillful_words[j] === "number")
                        d.unskillful_words[j] = o.longs === String ? String(m.unskillful_words[j]) : m.unskillful_words[j];
                    else
                        d.unskillful_words[j] = o.longs === String ? $util.Long.prototype.toString.call(m.unskillful_words[j]) : o.longs === Number ? new $util.LongBits(m.unskillful_words[j].low >>> 0, m.unskillful_words[j].high >>> 0).toNumber() : m.unskillful_words[j];
                }
            }
            if (m.skillful_words && m.skillful_words.length) {
                d.skillful_words = [];
                for (var j = 0; j < m.skillful_words.length; ++j) {
                    if (typeof m.skillful_words[j] === "number")
                        d.skillful_words[j] = o.longs === String ? String(m.skillful_words[j]) : m.skillful_words[j];
                    else
                        d.skillful_words[j] = o.longs === String ? $util.Long.prototype.toString.call(m.skillful_words[j]) : o.longs === Number ? new $util.LongBits(m.skillful_words[j].low >>> 0, m.skillful_words[j].high >>> 0).toNumber() : m.skillful_words[j];
                }
            }
            if (m.superskillful_words && m.superskillful_words.length) {
                d.superskillful_words = [];
                for (var j = 0; j < m.superskillful_words.length; ++j) {
                    if (typeof m.superskillful_words[j] === "number")
                        d.superskillful_words[j] = o.longs === String ? String(m.superskillful_words[j]) : m.superskillful_words[j];
                    else
                        d.superskillful_words[j] = o.longs === String ? $util.Long.prototype.toString.call(m.superskillful_words[j]) : o.longs === Number ? new $util.LongBits(m.superskillful_words[j].low >>> 0, m.superskillful_words[j].high >>> 0).toNumber() : m.superskillful_words[j];
                }
            }
            return d;
        };

        /**
         * Converts this GameRecord to JSON.
         * @function toJSON
         * @memberof farm.GameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecord;
    })();

    farm.ModeResult = (function() {

        /**
         * Properties of a ModeResult.
         * @memberof farm
         * @interface IModeResult
         * @property {number|Long|null} [checkin_id] ModeResult checkin_id
         * @property {number|null} [checkin_state] ModeResult checkin_state
         * @property {number|null} [lesson_state] ModeResult lesson_state
         * @property {string|null} [nickName] ModeResult nickName
         * @property {string|null} [lessonName] ModeResult lessonName
         * @property {number|null} [zeroLeftTime] ModeResult zeroLeftTime
         * @property {string|null} [checkinPushRemark] ModeResult checkinPushRemark
         * @property {Array.<number|Long>|null} [star_progress] ModeResult star_progress
         */

        /**
         * Constructs a new ModeResult.
         * @memberof farm
         * @classdesc Represents a ModeResult.
         * @implements IModeResult
         * @constructor
         * @param {farm.IModeResult=} [p] Properties to set
         */
        function ModeResult(p) {
            this.star_progress = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ModeResult checkin_id.
         * @member {number|Long} checkin_id
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.checkin_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ModeResult checkin_state.
         * @member {number} checkin_state
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.checkin_state = 0;

        /**
         * ModeResult lesson_state.
         * @member {number} lesson_state
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.lesson_state = 0;

        /**
         * ModeResult nickName.
         * @member {string} nickName
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.nickName = "";

        /**
         * ModeResult lessonName.
         * @member {string} lessonName
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.lessonName = "";

        /**
         * ModeResult zeroLeftTime.
         * @member {number} zeroLeftTime
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.zeroLeftTime = 0;

        /**
         * ModeResult checkinPushRemark.
         * @member {string} checkinPushRemark
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.checkinPushRemark = "";

        /**
         * ModeResult star_progress.
         * @member {Array.<number|Long>} star_progress
         * @memberof farm.ModeResult
         * @instance
         */
        ModeResult.prototype.star_progress = $util.emptyArray;

        /**
         * Encodes the specified ModeResult message. Does not implicitly {@link farm.ModeResult.verify|verify} messages.
         * @function encode
         * @memberof farm.ModeResult
         * @static
         * @param {farm.IModeResult} m ModeResult message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModeResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.checkin_id != null && Object.hasOwnProperty.call(m, "checkin_id"))
                w.uint32(8).int64(m.checkin_id);
            if (m.checkin_state != null && Object.hasOwnProperty.call(m, "checkin_state"))
                w.uint32(16).int32(m.checkin_state);
            if (m.lesson_state != null && Object.hasOwnProperty.call(m, "lesson_state"))
                w.uint32(24).int32(m.lesson_state);
            if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
                w.uint32(34).string(m.nickName);
            if (m.lessonName != null && Object.hasOwnProperty.call(m, "lessonName"))
                w.uint32(42).string(m.lessonName);
            if (m.zeroLeftTime != null && Object.hasOwnProperty.call(m, "zeroLeftTime"))
                w.uint32(48).int32(m.zeroLeftTime);
            if (m.checkinPushRemark != null && Object.hasOwnProperty.call(m, "checkinPushRemark"))
                w.uint32(58).string(m.checkinPushRemark);
            if (m.star_progress != null && m.star_progress.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.star_progress.length; ++i)
                    w.int64(m.star_progress[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a ModeResult message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ModeResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ModeResult} ModeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModeResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ModeResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.checkin_id = r.int64();
                    break;
                case 2:
                    m.checkin_state = r.int32();
                    break;
                case 3:
                    m.lesson_state = r.int32();
                    break;
                case 4:
                    m.nickName = r.string();
                    break;
                case 5:
                    m.lessonName = r.string();
                    break;
                case 6:
                    m.zeroLeftTime = r.int32();
                    break;
                case 7:
                    m.checkinPushRemark = r.string();
                    break;
                case 8:
                    if (!(m.star_progress && m.star_progress.length))
                        m.star_progress = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.star_progress.push(r.int64());
                    } else
                        m.star_progress.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ModeResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ModeResult
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ModeResult} ModeResult
         */
        ModeResult.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ModeResult)
                return d;
            var m = new $root.farm.ModeResult();
            if (d.checkin_id != null) {
                if ($util.Long)
                    (m.checkin_id = $util.Long.fromValue(d.checkin_id)).unsigned = false;
                else if (typeof d.checkin_id === "string")
                    m.checkin_id = parseInt(d.checkin_id, 10);
                else if (typeof d.checkin_id === "number")
                    m.checkin_id = d.checkin_id;
                else if (typeof d.checkin_id === "object")
                    m.checkin_id = new $util.LongBits(d.checkin_id.low >>> 0, d.checkin_id.high >>> 0).toNumber();
            }
            if (d.checkin_state != null) {
                m.checkin_state = d.checkin_state | 0;
            }
            if (d.lesson_state != null) {
                m.lesson_state = d.lesson_state | 0;
            }
            if (d.nickName != null) {
                m.nickName = String(d.nickName);
            }
            if (d.lessonName != null) {
                m.lessonName = String(d.lessonName);
            }
            if (d.zeroLeftTime != null) {
                m.zeroLeftTime = d.zeroLeftTime | 0;
            }
            if (d.checkinPushRemark != null) {
                m.checkinPushRemark = String(d.checkinPushRemark);
            }
            if (d.star_progress) {
                if (!Array.isArray(d.star_progress))
                    throw TypeError(".farm.ModeResult.star_progress: array expected");
                m.star_progress = [];
                for (var i = 0; i < d.star_progress.length; ++i) {
                    if ($util.Long)
                        (m.star_progress[i] = $util.Long.fromValue(d.star_progress[i])).unsigned = false;
                    else if (typeof d.star_progress[i] === "string")
                        m.star_progress[i] = parseInt(d.star_progress[i], 10);
                    else if (typeof d.star_progress[i] === "number")
                        m.star_progress[i] = d.star_progress[i];
                    else if (typeof d.star_progress[i] === "object")
                        m.star_progress[i] = new $util.LongBits(d.star_progress[i].low >>> 0, d.star_progress[i].high >>> 0).toNumber();
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a ModeResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ModeResult
         * @static
         * @param {farm.ModeResult} m ModeResult
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModeResult.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.star_progress = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.checkin_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.checkin_id = o.longs === String ? "0" : 0;
                d.checkin_state = 0;
                d.lesson_state = 0;
                d.nickName = "";
                d.lessonName = "";
                d.zeroLeftTime = 0;
                d.checkinPushRemark = "";
            }
            if (m.checkin_id != null && m.hasOwnProperty("checkin_id")) {
                if (typeof m.checkin_id === "number")
                    d.checkin_id = o.longs === String ? String(m.checkin_id) : m.checkin_id;
                else
                    d.checkin_id = o.longs === String ? $util.Long.prototype.toString.call(m.checkin_id) : o.longs === Number ? new $util.LongBits(m.checkin_id.low >>> 0, m.checkin_id.high >>> 0).toNumber() : m.checkin_id;
            }
            if (m.checkin_state != null && m.hasOwnProperty("checkin_state")) {
                d.checkin_state = m.checkin_state;
            }
            if (m.lesson_state != null && m.hasOwnProperty("lesson_state")) {
                d.lesson_state = m.lesson_state;
            }
            if (m.nickName != null && m.hasOwnProperty("nickName")) {
                d.nickName = m.nickName;
            }
            if (m.lessonName != null && m.hasOwnProperty("lessonName")) {
                d.lessonName = m.lessonName;
            }
            if (m.zeroLeftTime != null && m.hasOwnProperty("zeroLeftTime")) {
                d.zeroLeftTime = m.zeroLeftTime;
            }
            if (m.checkinPushRemark != null && m.hasOwnProperty("checkinPushRemark")) {
                d.checkinPushRemark = m.checkinPushRemark;
            }
            if (m.star_progress && m.star_progress.length) {
                d.star_progress = [];
                for (var j = 0; j < m.star_progress.length; ++j) {
                    if (typeof m.star_progress[j] === "number")
                        d.star_progress[j] = o.longs === String ? String(m.star_progress[j]) : m.star_progress[j];
                    else
                        d.star_progress[j] = o.longs === String ? $util.Long.prototype.toString.call(m.star_progress[j]) : o.longs === Number ? new $util.LongBits(m.star_progress[j].low >>> 0, m.star_progress[j].high >>> 0).toNumber() : m.star_progress[j];
                }
            }
            return d;
        };

        /**
         * Converts this ModeResult to JSON.
         * @function toJSON
         * @memberof farm.ModeResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModeResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModeResult;
    })();

    farm.ExpiredUserLimitConfig = (function() {

        /**
         * Properties of an ExpiredUserLimitConfig.
         * @memberof farm
         * @interface IExpiredUserLimitConfig
         * @property {Array.<number|Long>|null} [can_play_unit_ids] ExpiredUserLimitConfig can_play_unit_ids
         * @property {number|Long|null} [limit_res_count] ExpiredUserLimitConfig limit_res_count
         * @property {number|Long|null} [can_use_checkin] ExpiredUserLimitConfig can_use_checkin
         * @property {number|Long|null} [can_use_spec] ExpiredUserLimitConfig can_use_spec
         */

        /**
         * Constructs a new ExpiredUserLimitConfig.
         * @memberof farm
         * @classdesc Represents an ExpiredUserLimitConfig.
         * @implements IExpiredUserLimitConfig
         * @constructor
         * @param {farm.IExpiredUserLimitConfig=} [p] Properties to set
         */
        function ExpiredUserLimitConfig(p) {
            this.can_play_unit_ids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ExpiredUserLimitConfig can_play_unit_ids.
         * @member {Array.<number|Long>} can_play_unit_ids
         * @memberof farm.ExpiredUserLimitConfig
         * @instance
         */
        ExpiredUserLimitConfig.prototype.can_play_unit_ids = $util.emptyArray;

        /**
         * ExpiredUserLimitConfig limit_res_count.
         * @member {number|Long} limit_res_count
         * @memberof farm.ExpiredUserLimitConfig
         * @instance
         */
        ExpiredUserLimitConfig.prototype.limit_res_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ExpiredUserLimitConfig can_use_checkin.
         * @member {number|Long} can_use_checkin
         * @memberof farm.ExpiredUserLimitConfig
         * @instance
         */
        ExpiredUserLimitConfig.prototype.can_use_checkin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ExpiredUserLimitConfig can_use_spec.
         * @member {number|Long} can_use_spec
         * @memberof farm.ExpiredUserLimitConfig
         * @instance
         */
        ExpiredUserLimitConfig.prototype.can_use_spec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ExpiredUserLimitConfig message. Does not implicitly {@link farm.ExpiredUserLimitConfig.verify|verify} messages.
         * @function encode
         * @memberof farm.ExpiredUserLimitConfig
         * @static
         * @param {farm.IExpiredUserLimitConfig} m ExpiredUserLimitConfig message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExpiredUserLimitConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.can_play_unit_ids != null && m.can_play_unit_ids.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.can_play_unit_ids.length; ++i)
                    w.int64(m.can_play_unit_ids[i]);
                w.ldelim();
            }
            if (m.limit_res_count != null && Object.hasOwnProperty.call(m, "limit_res_count"))
                w.uint32(16).int64(m.limit_res_count);
            if (m.can_use_checkin != null && Object.hasOwnProperty.call(m, "can_use_checkin"))
                w.uint32(24).int64(m.can_use_checkin);
            if (m.can_use_spec != null && Object.hasOwnProperty.call(m, "can_use_spec"))
                w.uint32(32).int64(m.can_use_spec);
            return w;
        };

        /**
         * Decodes an ExpiredUserLimitConfig message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ExpiredUserLimitConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ExpiredUserLimitConfig} ExpiredUserLimitConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExpiredUserLimitConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ExpiredUserLimitConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.can_play_unit_ids && m.can_play_unit_ids.length))
                        m.can_play_unit_ids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.can_play_unit_ids.push(r.int64());
                    } else
                        m.can_play_unit_ids.push(r.int64());
                    break;
                case 2:
                    m.limit_res_count = r.int64();
                    break;
                case 3:
                    m.can_use_checkin = r.int64();
                    break;
                case 4:
                    m.can_use_spec = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an ExpiredUserLimitConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ExpiredUserLimitConfig
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ExpiredUserLimitConfig} ExpiredUserLimitConfig
         */
        ExpiredUserLimitConfig.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ExpiredUserLimitConfig)
                return d;
            var m = new $root.farm.ExpiredUserLimitConfig();
            if (d.can_play_unit_ids) {
                if (!Array.isArray(d.can_play_unit_ids))
                    throw TypeError(".farm.ExpiredUserLimitConfig.can_play_unit_ids: array expected");
                m.can_play_unit_ids = [];
                for (var i = 0; i < d.can_play_unit_ids.length; ++i) {
                    if ($util.Long)
                        (m.can_play_unit_ids[i] = $util.Long.fromValue(d.can_play_unit_ids[i])).unsigned = false;
                    else if (typeof d.can_play_unit_ids[i] === "string")
                        m.can_play_unit_ids[i] = parseInt(d.can_play_unit_ids[i], 10);
                    else if (typeof d.can_play_unit_ids[i] === "number")
                        m.can_play_unit_ids[i] = d.can_play_unit_ids[i];
                    else if (typeof d.can_play_unit_ids[i] === "object")
                        m.can_play_unit_ids[i] = new $util.LongBits(d.can_play_unit_ids[i].low >>> 0, d.can_play_unit_ids[i].high >>> 0).toNumber();
                }
            }
            if (d.limit_res_count != null) {
                if ($util.Long)
                    (m.limit_res_count = $util.Long.fromValue(d.limit_res_count)).unsigned = false;
                else if (typeof d.limit_res_count === "string")
                    m.limit_res_count = parseInt(d.limit_res_count, 10);
                else if (typeof d.limit_res_count === "number")
                    m.limit_res_count = d.limit_res_count;
                else if (typeof d.limit_res_count === "object")
                    m.limit_res_count = new $util.LongBits(d.limit_res_count.low >>> 0, d.limit_res_count.high >>> 0).toNumber();
            }
            if (d.can_use_checkin != null) {
                if ($util.Long)
                    (m.can_use_checkin = $util.Long.fromValue(d.can_use_checkin)).unsigned = false;
                else if (typeof d.can_use_checkin === "string")
                    m.can_use_checkin = parseInt(d.can_use_checkin, 10);
                else if (typeof d.can_use_checkin === "number")
                    m.can_use_checkin = d.can_use_checkin;
                else if (typeof d.can_use_checkin === "object")
                    m.can_use_checkin = new $util.LongBits(d.can_use_checkin.low >>> 0, d.can_use_checkin.high >>> 0).toNumber();
            }
            if (d.can_use_spec != null) {
                if ($util.Long)
                    (m.can_use_spec = $util.Long.fromValue(d.can_use_spec)).unsigned = false;
                else if (typeof d.can_use_spec === "string")
                    m.can_use_spec = parseInt(d.can_use_spec, 10);
                else if (typeof d.can_use_spec === "number")
                    m.can_use_spec = d.can_use_spec;
                else if (typeof d.can_use_spec === "object")
                    m.can_use_spec = new $util.LongBits(d.can_use_spec.low >>> 0, d.can_use_spec.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from an ExpiredUserLimitConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ExpiredUserLimitConfig
         * @static
         * @param {farm.ExpiredUserLimitConfig} m ExpiredUserLimitConfig
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExpiredUserLimitConfig.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.can_play_unit_ids = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.limit_res_count = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.limit_res_count = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.can_use_checkin = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.can_use_checkin = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.can_use_spec = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.can_use_spec = o.longs === String ? "0" : 0;
            }
            if (m.can_play_unit_ids && m.can_play_unit_ids.length) {
                d.can_play_unit_ids = [];
                for (var j = 0; j < m.can_play_unit_ids.length; ++j) {
                    if (typeof m.can_play_unit_ids[j] === "number")
                        d.can_play_unit_ids[j] = o.longs === String ? String(m.can_play_unit_ids[j]) : m.can_play_unit_ids[j];
                    else
                        d.can_play_unit_ids[j] = o.longs === String ? $util.Long.prototype.toString.call(m.can_play_unit_ids[j]) : o.longs === Number ? new $util.LongBits(m.can_play_unit_ids[j].low >>> 0, m.can_play_unit_ids[j].high >>> 0).toNumber() : m.can_play_unit_ids[j];
                }
            }
            if (m.limit_res_count != null && m.hasOwnProperty("limit_res_count")) {
                if (typeof m.limit_res_count === "number")
                    d.limit_res_count = o.longs === String ? String(m.limit_res_count) : m.limit_res_count;
                else
                    d.limit_res_count = o.longs === String ? $util.Long.prototype.toString.call(m.limit_res_count) : o.longs === Number ? new $util.LongBits(m.limit_res_count.low >>> 0, m.limit_res_count.high >>> 0).toNumber() : m.limit_res_count;
            }
            if (m.can_use_checkin != null && m.hasOwnProperty("can_use_checkin")) {
                if (typeof m.can_use_checkin === "number")
                    d.can_use_checkin = o.longs === String ? String(m.can_use_checkin) : m.can_use_checkin;
                else
                    d.can_use_checkin = o.longs === String ? $util.Long.prototype.toString.call(m.can_use_checkin) : o.longs === Number ? new $util.LongBits(m.can_use_checkin.low >>> 0, m.can_use_checkin.high >>> 0).toNumber() : m.can_use_checkin;
            }
            if (m.can_use_spec != null && m.hasOwnProperty("can_use_spec")) {
                if (typeof m.can_use_spec === "number")
                    d.can_use_spec = o.longs === String ? String(m.can_use_spec) : m.can_use_spec;
                else
                    d.can_use_spec = o.longs === String ? $util.Long.prototype.toString.call(m.can_use_spec) : o.longs === Number ? new $util.LongBits(m.can_use_spec.low >>> 0, m.can_use_spec.high >>> 0).toNumber() : m.can_use_spec;
            }
            return d;
        };

        /**
         * Converts this ExpiredUserLimitConfig to JSON.
         * @function toJSON
         * @memberof farm.ExpiredUserLimitConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExpiredUserLimitConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExpiredUserLimitConfig;
    })();

    /**
     * GameType enum.
     * @name farm.GameType
     * @enum {number}
     * @property {number} GameTypeNormal=0 GameTypeNormal value
     * @property {number} GameType1=1 GameType1 value
     * @property {number} GameType2=2 GameType2 value
     * @property {number} GameType3=3 GameType3 value
     * @property {number} GameType4=4 GameType4 value
     */
    farm.GameType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameTypeNormal"] = 0;
        values[valuesById[1] = "GameType1"] = 1;
        values[valuesById[2] = "GameType2"] = 2;
        values[valuesById[3] = "GameType3"] = 3;
        values[valuesById[4] = "GameType4"] = 4;
        return values;
    })();

    farm.WordItemInfo = (function() {

        /**
         * Properties of a WordItemInfo.
         * @memberof farm
         * @interface IWordItemInfo
         * @property {number|Long|null} [id] WordItemInfo id
         * @property {number|Long|null} [grade_id] WordItemInfo grade_id
         * @property {number|Long|null} [unit_id] WordItemInfo unit_id
         * @property {number|Long|null} [type] WordItemInfo type
         * @property {number|Long|null} [unit_index] WordItemInfo unit_index
         * @property {string|null} [cn] WordItemInfo cn
         * @property {string|null} [en] WordItemInfo en
         */

        /**
         * Constructs a new WordItemInfo.
         * @memberof farm
         * @classdesc Represents a WordItemInfo.
         * @implements IWordItemInfo
         * @constructor
         * @param {farm.IWordItemInfo=} [p] Properties to set
         */
        function WordItemInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WordItemInfo id.
         * @member {number|Long} id
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WordItemInfo grade_id.
         * @member {number|Long} grade_id
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.grade_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WordItemInfo unit_id.
         * @member {number|Long} unit_id
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.unit_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WordItemInfo type.
         * @member {number|Long} type
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WordItemInfo unit_index.
         * @member {number|Long} unit_index
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.unit_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WordItemInfo cn.
         * @member {string} cn
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.cn = "";

        /**
         * WordItemInfo en.
         * @member {string} en
         * @memberof farm.WordItemInfo
         * @instance
         */
        WordItemInfo.prototype.en = "";

        /**
         * Encodes the specified WordItemInfo message. Does not implicitly {@link farm.WordItemInfo.verify|verify} messages.
         * @function encode
         * @memberof farm.WordItemInfo
         * @static
         * @param {farm.IWordItemInfo} m WordItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WordItemInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.grade_id != null && Object.hasOwnProperty.call(m, "grade_id"))
                w.uint32(16).int64(m.grade_id);
            if (m.unit_id != null && Object.hasOwnProperty.call(m, "unit_id"))
                w.uint32(24).int64(m.unit_id);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(32).int64(m.type);
            if (m.unit_index != null && Object.hasOwnProperty.call(m, "unit_index"))
                w.uint32(40).int64(m.unit_index);
            if (m.cn != null && Object.hasOwnProperty.call(m, "cn"))
                w.uint32(50).string(m.cn);
            if (m.en != null && Object.hasOwnProperty.call(m, "en"))
                w.uint32(58).string(m.en);
            return w;
        };

        /**
         * Decodes a WordItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof farm.WordItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.WordItemInfo} WordItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WordItemInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.WordItemInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.grade_id = r.int64();
                    break;
                case 3:
                    m.unit_id = r.int64();
                    break;
                case 4:
                    m.type = r.int64();
                    break;
                case 5:
                    m.unit_index = r.int64();
                    break;
                case 6:
                    m.cn = r.string();
                    break;
                case 7:
                    m.en = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a WordItemInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.WordItemInfo
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.WordItemInfo} WordItemInfo
         */
        WordItemInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.WordItemInfo)
                return d;
            var m = new $root.farm.WordItemInfo();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.grade_id != null) {
                if ($util.Long)
                    (m.grade_id = $util.Long.fromValue(d.grade_id)).unsigned = false;
                else if (typeof d.grade_id === "string")
                    m.grade_id = parseInt(d.grade_id, 10);
                else if (typeof d.grade_id === "number")
                    m.grade_id = d.grade_id;
                else if (typeof d.grade_id === "object")
                    m.grade_id = new $util.LongBits(d.grade_id.low >>> 0, d.grade_id.high >>> 0).toNumber();
            }
            if (d.unit_id != null) {
                if ($util.Long)
                    (m.unit_id = $util.Long.fromValue(d.unit_id)).unsigned = false;
                else if (typeof d.unit_id === "string")
                    m.unit_id = parseInt(d.unit_id, 10);
                else if (typeof d.unit_id === "number")
                    m.unit_id = d.unit_id;
                else if (typeof d.unit_id === "object")
                    m.unit_id = new $util.LongBits(d.unit_id.low >>> 0, d.unit_id.high >>> 0).toNumber();
            }
            if (d.type != null) {
                if ($util.Long)
                    (m.type = $util.Long.fromValue(d.type)).unsigned = false;
                else if (typeof d.type === "string")
                    m.type = parseInt(d.type, 10);
                else if (typeof d.type === "number")
                    m.type = d.type;
                else if (typeof d.type === "object")
                    m.type = new $util.LongBits(d.type.low >>> 0, d.type.high >>> 0).toNumber();
            }
            if (d.unit_index != null) {
                if ($util.Long)
                    (m.unit_index = $util.Long.fromValue(d.unit_index)).unsigned = false;
                else if (typeof d.unit_index === "string")
                    m.unit_index = parseInt(d.unit_index, 10);
                else if (typeof d.unit_index === "number")
                    m.unit_index = d.unit_index;
                else if (typeof d.unit_index === "object")
                    m.unit_index = new $util.LongBits(d.unit_index.low >>> 0, d.unit_index.high >>> 0).toNumber();
            }
            if (d.cn != null) {
                m.cn = String(d.cn);
            }
            if (d.en != null) {
                m.en = String(d.en);
            }
            return m;
        };

        /**
         * Creates a plain object from a WordItemInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.WordItemInfo
         * @static
         * @param {farm.WordItemInfo} m WordItemInfo
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WordItemInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.grade_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.grade_id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.unit_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.unit_id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.type = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.type = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.unit_index = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.unit_index = o.longs === String ? "0" : 0;
                d.cn = "";
                d.en = "";
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.grade_id != null && m.hasOwnProperty("grade_id")) {
                if (typeof m.grade_id === "number")
                    d.grade_id = o.longs === String ? String(m.grade_id) : m.grade_id;
                else
                    d.grade_id = o.longs === String ? $util.Long.prototype.toString.call(m.grade_id) : o.longs === Number ? new $util.LongBits(m.grade_id.low >>> 0, m.grade_id.high >>> 0).toNumber() : m.grade_id;
            }
            if (m.unit_id != null && m.hasOwnProperty("unit_id")) {
                if (typeof m.unit_id === "number")
                    d.unit_id = o.longs === String ? String(m.unit_id) : m.unit_id;
                else
                    d.unit_id = o.longs === String ? $util.Long.prototype.toString.call(m.unit_id) : o.longs === Number ? new $util.LongBits(m.unit_id.low >>> 0, m.unit_id.high >>> 0).toNumber() : m.unit_id;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                if (typeof m.type === "number")
                    d.type = o.longs === String ? String(m.type) : m.type;
                else
                    d.type = o.longs === String ? $util.Long.prototype.toString.call(m.type) : o.longs === Number ? new $util.LongBits(m.type.low >>> 0, m.type.high >>> 0).toNumber() : m.type;
            }
            if (m.unit_index != null && m.hasOwnProperty("unit_index")) {
                if (typeof m.unit_index === "number")
                    d.unit_index = o.longs === String ? String(m.unit_index) : m.unit_index;
                else
                    d.unit_index = o.longs === String ? $util.Long.prototype.toString.call(m.unit_index) : o.longs === Number ? new $util.LongBits(m.unit_index.low >>> 0, m.unit_index.high >>> 0).toNumber() : m.unit_index;
            }
            if (m.cn != null && m.hasOwnProperty("cn")) {
                d.cn = m.cn;
            }
            if (m.en != null && m.hasOwnProperty("en")) {
                d.en = m.en;
            }
            return d;
        };

        /**
         * Converts this WordItemInfo to JSON.
         * @function toJSON
         * @memberof farm.WordItemInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WordItemInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WordItemInfo;
    })();

    farm.GradeLearningProgress = (function() {

        /**
         * Properties of a GradeLearningProgress.
         * @memberof farm
         * @interface IGradeLearningProgress
         * @property {number|Long|null} [GradeID] GradeLearningProgress GradeID
         * @property {number|Long|null} [Star] GradeLearningProgress Star
         */

        /**
         * Constructs a new GradeLearningProgress.
         * @memberof farm
         * @classdesc Represents a GradeLearningProgress.
         * @implements IGradeLearningProgress
         * @constructor
         * @param {farm.IGradeLearningProgress=} [p] Properties to set
         */
        function GradeLearningProgress(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GradeLearningProgress GradeID.
         * @member {number|Long} GradeID
         * @memberof farm.GradeLearningProgress
         * @instance
         */
        GradeLearningProgress.prototype.GradeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GradeLearningProgress Star.
         * @member {number|Long} Star
         * @memberof farm.GradeLearningProgress
         * @instance
         */
        GradeLearningProgress.prototype.Star = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GradeLearningProgress message. Does not implicitly {@link farm.GradeLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.GradeLearningProgress
         * @static
         * @param {farm.IGradeLearningProgress} m GradeLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GradeLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GradeID != null && Object.hasOwnProperty.call(m, "GradeID"))
                w.uint32(8).int64(m.GradeID);
            if (m.Star != null && Object.hasOwnProperty.call(m, "Star"))
                w.uint32(16).int64(m.Star);
            return w;
        };

        /**
         * Decodes a GradeLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.GradeLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.GradeLearningProgress} GradeLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GradeLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.GradeLearningProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GradeID = r.int64();
                    break;
                case 2:
                    m.Star = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a GradeLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.GradeLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.GradeLearningProgress} GradeLearningProgress
         */
        GradeLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.GradeLearningProgress)
                return d;
            var m = new $root.farm.GradeLearningProgress();
            if (d.GradeID != null) {
                if ($util.Long)
                    (m.GradeID = $util.Long.fromValue(d.GradeID)).unsigned = false;
                else if (typeof d.GradeID === "string")
                    m.GradeID = parseInt(d.GradeID, 10);
                else if (typeof d.GradeID === "number")
                    m.GradeID = d.GradeID;
                else if (typeof d.GradeID === "object")
                    m.GradeID = new $util.LongBits(d.GradeID.low >>> 0, d.GradeID.high >>> 0).toNumber();
            }
            if (d.Star != null) {
                if ($util.Long)
                    (m.Star = $util.Long.fromValue(d.Star)).unsigned = false;
                else if (typeof d.Star === "string")
                    m.Star = parseInt(d.Star, 10);
                else if (typeof d.Star === "number")
                    m.Star = d.Star;
                else if (typeof d.Star === "object")
                    m.Star = new $util.LongBits(d.Star.low >>> 0, d.Star.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a GradeLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.GradeLearningProgress
         * @static
         * @param {farm.GradeLearningProgress} m GradeLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GradeLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.GradeID = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.GradeID = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.Star = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.Star = o.longs === String ? "0" : 0;
            }
            if (m.GradeID != null && m.hasOwnProperty("GradeID")) {
                if (typeof m.GradeID === "number")
                    d.GradeID = o.longs === String ? String(m.GradeID) : m.GradeID;
                else
                    d.GradeID = o.longs === String ? $util.Long.prototype.toString.call(m.GradeID) : o.longs === Number ? new $util.LongBits(m.GradeID.low >>> 0, m.GradeID.high >>> 0).toNumber() : m.GradeID;
            }
            if (m.Star != null && m.hasOwnProperty("Star")) {
                if (typeof m.Star === "number")
                    d.Star = o.longs === String ? String(m.Star) : m.Star;
                else
                    d.Star = o.longs === String ? $util.Long.prototype.toString.call(m.Star) : o.longs === Number ? new $util.LongBits(m.Star.low >>> 0, m.Star.high >>> 0).toNumber() : m.Star;
            }
            return d;
        };

        /**
         * Converts this GradeLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.GradeLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GradeLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GradeLearningProgress;
    })();

    farm.UnitLearningProgress = (function() {

        /**
         * Properties of an UnitLearningProgress.
         * @memberof farm
         * @interface IUnitLearningProgress
         * @property {number|Long|null} [UnitID] UnitLearningProgress UnitID
         * @property {Object.<string,farm.IGameTypeLearningProgress>|null} [GamesLearningProgress] UnitLearningProgress GamesLearningProgress
         */

        /**
         * Constructs a new UnitLearningProgress.
         * @memberof farm
         * @classdesc Represents an UnitLearningProgress.
         * @implements IUnitLearningProgress
         * @constructor
         * @param {farm.IUnitLearningProgress=} [p] Properties to set
         */
        function UnitLearningProgress(p) {
            this.GamesLearningProgress = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UnitLearningProgress UnitID.
         * @member {number|Long} UnitID
         * @memberof farm.UnitLearningProgress
         * @instance
         */
        UnitLearningProgress.prototype.UnitID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UnitLearningProgress GamesLearningProgress.
         * @member {Object.<string,farm.IGameTypeLearningProgress>} GamesLearningProgress
         * @memberof farm.UnitLearningProgress
         * @instance
         */
        UnitLearningProgress.prototype.GamesLearningProgress = $util.emptyObject;

        /**
         * Encodes the specified UnitLearningProgress message. Does not implicitly {@link farm.UnitLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.UnitLearningProgress
         * @static
         * @param {farm.IUnitLearningProgress} m UnitLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnitLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UnitID != null && Object.hasOwnProperty.call(m, "UnitID"))
                w.uint32(8).int64(m.UnitID);
            if (m.GamesLearningProgress != null && Object.hasOwnProperty.call(m, "GamesLearningProgress")) {
                for (var ks = Object.keys(m.GamesLearningProgress), i = 0; i < ks.length; ++i) {
                    w.uint32(18).fork().uint32(8).int64(ks[i]);
                    $root.farm.GameTypeLearningProgress.encode(m.GamesLearningProgress[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes an UnitLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.UnitLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.UnitLearningProgress} UnitLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnitLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.UnitLearningProgress(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UnitID = r.int64();
                    break;
                case 2:
                    r.skip().pos++;
                    if (m.GamesLearningProgress === $util.emptyObject)
                        m.GamesLearningProgress = {};
                    k = r.int64();
                    r.pos++;
                    m.GamesLearningProgress[typeof k === "object" ? $util.longToHash(k) : k] = $root.farm.GameTypeLearningProgress.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an UnitLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.UnitLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.UnitLearningProgress} UnitLearningProgress
         */
        UnitLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.UnitLearningProgress)
                return d;
            var m = new $root.farm.UnitLearningProgress();
            if (d.UnitID != null) {
                if ($util.Long)
                    (m.UnitID = $util.Long.fromValue(d.UnitID)).unsigned = false;
                else if (typeof d.UnitID === "string")
                    m.UnitID = parseInt(d.UnitID, 10);
                else if (typeof d.UnitID === "number")
                    m.UnitID = d.UnitID;
                else if (typeof d.UnitID === "object")
                    m.UnitID = new $util.LongBits(d.UnitID.low >>> 0, d.UnitID.high >>> 0).toNumber();
            }
            if (d.GamesLearningProgress) {
                if (typeof d.GamesLearningProgress !== "object")
                    throw TypeError(".farm.UnitLearningProgress.GamesLearningProgress: object expected");
                m.GamesLearningProgress = {};
                for (var ks = Object.keys(d.GamesLearningProgress), i = 0; i < ks.length; ++i) {
                    if (typeof d.GamesLearningProgress[ks[i]] !== "object")
                        throw TypeError(".farm.UnitLearningProgress.GamesLearningProgress: object expected");
                    m.GamesLearningProgress[ks[i]] = $root.farm.GameTypeLearningProgress.fromObject(d.GamesLearningProgress[ks[i]]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from an UnitLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.UnitLearningProgress
         * @static
         * @param {farm.UnitLearningProgress} m UnitLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnitLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.GamesLearningProgress = {};
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.UnitID = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.UnitID = o.longs === String ? "0" : 0;
            }
            if (m.UnitID != null && m.hasOwnProperty("UnitID")) {
                if (typeof m.UnitID === "number")
                    d.UnitID = o.longs === String ? String(m.UnitID) : m.UnitID;
                else
                    d.UnitID = o.longs === String ? $util.Long.prototype.toString.call(m.UnitID) : o.longs === Number ? new $util.LongBits(m.UnitID.low >>> 0, m.UnitID.high >>> 0).toNumber() : m.UnitID;
            }
            var ks2;
            if (m.GamesLearningProgress && (ks2 = Object.keys(m.GamesLearningProgress)).length) {
                d.GamesLearningProgress = {};
                for (var j = 0; j < ks2.length; ++j) {
                    d.GamesLearningProgress[ks2[j]] = $root.farm.GameTypeLearningProgress.toObject(m.GamesLearningProgress[ks2[j]], o);
                }
            }
            return d;
        };

        /**
         * Converts this UnitLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.UnitLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnitLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnitLearningProgress;
    })();

    farm.GameTypeLearningProgress = (function() {

        /**
         * Properties of a GameTypeLearningProgress.
         * @memberof farm
         * @interface IGameTypeLearningProgress
         * @property {farm.GameType|null} [GameType] GameTypeLearningProgress GameType
         * @property {number|Long|null} [star] GameTypeLearningProgress star
         * @property {number|null} [HistoryMaxScore] GameTypeLearningProgress HistoryMaxScore
         */

        /**
         * Constructs a new GameTypeLearningProgress.
         * @memberof farm
         * @classdesc Represents a GameTypeLearningProgress.
         * @implements IGameTypeLearningProgress
         * @constructor
         * @param {farm.IGameTypeLearningProgress=} [p] Properties to set
         */
        function GameTypeLearningProgress(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameTypeLearningProgress GameType.
         * @member {farm.GameType} GameType
         * @memberof farm.GameTypeLearningProgress
         * @instance
         */
        GameTypeLearningProgress.prototype.GameType = 0;

        /**
         * GameTypeLearningProgress star.
         * @member {number|Long} star
         * @memberof farm.GameTypeLearningProgress
         * @instance
         */
        GameTypeLearningProgress.prototype.star = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameTypeLearningProgress HistoryMaxScore.
         * @member {number} HistoryMaxScore
         * @memberof farm.GameTypeLearningProgress
         * @instance
         */
        GameTypeLearningProgress.prototype.HistoryMaxScore = 0;

        /**
         * Encodes the specified GameTypeLearningProgress message. Does not implicitly {@link farm.GameTypeLearningProgress.verify|verify} messages.
         * @function encode
         * @memberof farm.GameTypeLearningProgress
         * @static
         * @param {farm.IGameTypeLearningProgress} m GameTypeLearningProgress message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTypeLearningProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameType != null && Object.hasOwnProperty.call(m, "GameType"))
                w.uint32(8).int32(m.GameType);
            if (m.star != null && Object.hasOwnProperty.call(m, "star"))
                w.uint32(16).int64(m.star);
            if (m.HistoryMaxScore != null && Object.hasOwnProperty.call(m, "HistoryMaxScore"))
                w.uint32(29).float(m.HistoryMaxScore);
            return w;
        };

        /**
         * Decodes a GameTypeLearningProgress message from the specified reader or buffer.
         * @function decode
         * @memberof farm.GameTypeLearningProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.GameTypeLearningProgress} GameTypeLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTypeLearningProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.GameTypeLearningProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameType = r.int32();
                    break;
                case 2:
                    m.star = r.int64();
                    break;
                case 3:
                    m.HistoryMaxScore = r.float();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a GameTypeLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.GameTypeLearningProgress
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.GameTypeLearningProgress} GameTypeLearningProgress
         */
        GameTypeLearningProgress.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.GameTypeLearningProgress)
                return d;
            var m = new $root.farm.GameTypeLearningProgress();
            switch (d.GameType) {
            case "GameTypeNormal":
            case 0:
                m.GameType = 0;
                break;
            case "GameType1":
            case 1:
                m.GameType = 1;
                break;
            case "GameType2":
            case 2:
                m.GameType = 2;
                break;
            case "GameType3":
            case 3:
                m.GameType = 3;
                break;
            case "GameType4":
            case 4:
                m.GameType = 4;
                break;
            }
            if (d.star != null) {
                if ($util.Long)
                    (m.star = $util.Long.fromValue(d.star)).unsigned = false;
                else if (typeof d.star === "string")
                    m.star = parseInt(d.star, 10);
                else if (typeof d.star === "number")
                    m.star = d.star;
                else if (typeof d.star === "object")
                    m.star = new $util.LongBits(d.star.low >>> 0, d.star.high >>> 0).toNumber();
            }
            if (d.HistoryMaxScore != null) {
                m.HistoryMaxScore = Number(d.HistoryMaxScore);
            }
            return m;
        };

        /**
         * Creates a plain object from a GameTypeLearningProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.GameTypeLearningProgress
         * @static
         * @param {farm.GameTypeLearningProgress} m GameTypeLearningProgress
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameTypeLearningProgress.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.GameType = o.enums === String ? "GameTypeNormal" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.star = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.star = o.longs === String ? "0" : 0;
                d.HistoryMaxScore = 0;
            }
            if (m.GameType != null && m.hasOwnProperty("GameType")) {
                d.GameType = o.enums === String ? $root.farm.GameType[m.GameType] : m.GameType;
            }
            if (m.star != null && m.hasOwnProperty("star")) {
                if (typeof m.star === "number")
                    d.star = o.longs === String ? String(m.star) : m.star;
                else
                    d.star = o.longs === String ? $util.Long.prototype.toString.call(m.star) : o.longs === Number ? new $util.LongBits(m.star.low >>> 0, m.star.high >>> 0).toNumber() : m.star;
            }
            if (m.HistoryMaxScore != null && m.hasOwnProperty("HistoryMaxScore")) {
                d.HistoryMaxScore = o.json && !isFinite(m.HistoryMaxScore) ? String(m.HistoryMaxScore) : m.HistoryMaxScore;
            }
            return d;
        };

        /**
         * Converts this GameTypeLearningProgress to JSON.
         * @function toJSON
         * @memberof farm.GameTypeLearningProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameTypeLearningProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameTypeLearningProgress;
    })();

    farm.ReqMaterials = (function() {

        /**
         * Properties of a ReqMaterials.
         * @memberof farm
         * @interface IReqMaterials
         * @property {number|Long|null} [user_id] ReqMaterials user_id
         */

        /**
         * Constructs a new ReqMaterials.
         * @memberof farm
         * @classdesc Represents a ReqMaterials.
         * @implements IReqMaterials
         * @constructor
         * @param {farm.IReqMaterials=} [p] Properties to set
         */
        function ReqMaterials(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqMaterials user_id.
         * @member {number|Long} user_id
         * @memberof farm.ReqMaterials
         * @instance
         */
        ReqMaterials.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqMaterials message. Does not implicitly {@link farm.ReqMaterials.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqMaterials
         * @static
         * @param {farm.IReqMaterials} m ReqMaterials message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMaterials.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && Object.hasOwnProperty.call(m, "user_id"))
                w.uint32(8).int64(m.user_id);
            return w;
        };

        /**
         * Decodes a ReqMaterials message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqMaterials
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqMaterials} ReqMaterials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMaterials.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqMaterials();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqMaterials message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqMaterials
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqMaterials} ReqMaterials
         */
        ReqMaterials.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqMaterials)
                return d;
            var m = new $root.farm.ReqMaterials();
            if (d.user_id != null) {
                if ($util.Long)
                    (m.user_id = $util.Long.fromValue(d.user_id)).unsigned = false;
                else if (typeof d.user_id === "string")
                    m.user_id = parseInt(d.user_id, 10);
                else if (typeof d.user_id === "number")
                    m.user_id = d.user_id;
                else if (typeof d.user_id === "object")
                    m.user_id = new $util.LongBits(d.user_id.low >>> 0, d.user_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqMaterials message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqMaterials
         * @static
         * @param {farm.ReqMaterials} m ReqMaterials
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqMaterials.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.user_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.user_id = o.longs === String ? "0" : 0;
            }
            if (m.user_id != null && m.hasOwnProperty("user_id")) {
                if (typeof m.user_id === "number")
                    d.user_id = o.longs === String ? String(m.user_id) : m.user_id;
                else
                    d.user_id = o.longs === String ? $util.Long.prototype.toString.call(m.user_id) : o.longs === Number ? new $util.LongBits(m.user_id.low >>> 0, m.user_id.high >>> 0).toNumber() : m.user_id;
            }
            return d;
        };

        /**
         * Converts this ReqMaterials to JSON.
         * @function toJSON
         * @memberof farm.ReqMaterials
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqMaterials.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqMaterials;
    })();

    farm.RespMaterials = (function() {

        /**
         * Properties of a RespMaterials.
         * @memberof farm
         * @interface IRespMaterials
         * @property {Array.<farm.IMaterialItem>|null} [Mats] RespMaterials Mats
         */

        /**
         * Constructs a new RespMaterials.
         * @memberof farm
         * @classdesc Represents a RespMaterials.
         * @implements IRespMaterials
         * @constructor
         * @param {farm.IRespMaterials=} [p] Properties to set
         */
        function RespMaterials(p) {
            this.Mats = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespMaterials Mats.
         * @member {Array.<farm.IMaterialItem>} Mats
         * @memberof farm.RespMaterials
         * @instance
         */
        RespMaterials.prototype.Mats = $util.emptyArray;

        /**
         * Encodes the specified RespMaterials message. Does not implicitly {@link farm.RespMaterials.verify|verify} messages.
         * @function encode
         * @memberof farm.RespMaterials
         * @static
         * @param {farm.IRespMaterials} m RespMaterials message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMaterials.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Mats != null && m.Mats.length) {
                for (var i = 0; i < m.Mats.length; ++i)
                    $root.farm.MaterialItem.encode(m.Mats[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespMaterials message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespMaterials
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespMaterials} RespMaterials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMaterials.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespMaterials();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Mats && m.Mats.length))
                        m.Mats = [];
                    m.Mats.push($root.farm.MaterialItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespMaterials message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespMaterials
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespMaterials} RespMaterials
         */
        RespMaterials.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespMaterials)
                return d;
            var m = new $root.farm.RespMaterials();
            if (d.Mats) {
                if (!Array.isArray(d.Mats))
                    throw TypeError(".farm.RespMaterials.Mats: array expected");
                m.Mats = [];
                for (var i = 0; i < d.Mats.length; ++i) {
                    if (typeof d.Mats[i] !== "object")
                        throw TypeError(".farm.RespMaterials.Mats: object expected");
                    m.Mats[i] = $root.farm.MaterialItem.fromObject(d.Mats[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespMaterials message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespMaterials
         * @static
         * @param {farm.RespMaterials} m RespMaterials
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespMaterials.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.Mats = [];
            }
            if (m.Mats && m.Mats.length) {
                d.Mats = [];
                for (var j = 0; j < m.Mats.length; ++j) {
                    d.Mats[j] = $root.farm.MaterialItem.toObject(m.Mats[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespMaterials to JSON.
         * @function toJSON
         * @memberof farm.RespMaterials
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespMaterials.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespMaterials;
    })();

    farm.MaterialItem = (function() {

        /**
         * Properties of a MaterialItem.
         * @memberof farm
         * @interface IMaterialItem
         * @property {number|Long|null} [mat_id] MaterialItem mat_id
         * @property {string|null} [mat_name] MaterialItem mat_name
         */

        /**
         * Constructs a new MaterialItem.
         * @memberof farm
         * @classdesc Represents a MaterialItem.
         * @implements IMaterialItem
         * @constructor
         * @param {farm.IMaterialItem=} [p] Properties to set
         */
        function MaterialItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MaterialItem mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.MaterialItem
         * @instance
         */
        MaterialItem.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MaterialItem mat_name.
         * @member {string} mat_name
         * @memberof farm.MaterialItem
         * @instance
         */
        MaterialItem.prototype.mat_name = "";

        /**
         * Encodes the specified MaterialItem message. Does not implicitly {@link farm.MaterialItem.verify|verify} messages.
         * @function encode
         * @memberof farm.MaterialItem
         * @static
         * @param {farm.IMaterialItem} m MaterialItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaterialItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(8).int64(m.mat_id);
            if (m.mat_name != null && Object.hasOwnProperty.call(m, "mat_name"))
                w.uint32(18).string(m.mat_name);
            return w;
        };

        /**
         * Decodes a MaterialItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MaterialItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MaterialItem} MaterialItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaterialItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MaterialItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mat_id = r.int64();
                    break;
                case 2:
                    m.mat_name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MaterialItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MaterialItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MaterialItem} MaterialItem
         */
        MaterialItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MaterialItem)
                return d;
            var m = new $root.farm.MaterialItem();
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            if (d.mat_name != null) {
                m.mat_name = String(d.mat_name);
            }
            return m;
        };

        /**
         * Creates a plain object from a MaterialItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MaterialItem
         * @static
         * @param {farm.MaterialItem} m MaterialItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
                d.mat_name = "";
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            if (m.mat_name != null && m.hasOwnProperty("mat_name")) {
                d.mat_name = m.mat_name;
            }
            return d;
        };

        /**
         * Converts this MaterialItem to JSON.
         * @function toJSON
         * @memberof farm.MaterialItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialItem;
    })();

    farm.ReqUpdateMat = (function() {

        /**
         * Properties of a ReqUpdateMat.
         * @memberof farm
         * @interface IReqUpdateMat
         * @property {number|Long|null} [uid_id] ReqUpdateMat uid_id
         * @property {number|Long|null} [mat_id] ReqUpdateMat mat_id
         */

        /**
         * Constructs a new ReqUpdateMat.
         * @memberof farm
         * @classdesc Represents a ReqUpdateMat.
         * @implements IReqUpdateMat
         * @constructor
         * @param {farm.IReqUpdateMat=} [p] Properties to set
         */
        function ReqUpdateMat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUpdateMat uid_id.
         * @member {number|Long} uid_id
         * @memberof farm.ReqUpdateMat
         * @instance
         */
        ReqUpdateMat.prototype.uid_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqUpdateMat mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.ReqUpdateMat
         * @instance
         */
        ReqUpdateMat.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqUpdateMat message. Does not implicitly {@link farm.ReqUpdateMat.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqUpdateMat
         * @static
         * @param {farm.IReqUpdateMat} m ReqUpdateMat message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUpdateMat.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid_id != null && Object.hasOwnProperty.call(m, "uid_id"))
                w.uint32(8).int64(m.uid_id);
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(16).int64(m.mat_id);
            return w;
        };

        /**
         * Decodes a ReqUpdateMat message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqUpdateMat
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqUpdateMat} ReqUpdateMat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateMat.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqUpdateMat();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid_id = r.int64();
                    break;
                case 2:
                    m.mat_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqUpdateMat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqUpdateMat
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqUpdateMat} ReqUpdateMat
         */
        ReqUpdateMat.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqUpdateMat)
                return d;
            var m = new $root.farm.ReqUpdateMat();
            if (d.uid_id != null) {
                if ($util.Long)
                    (m.uid_id = $util.Long.fromValue(d.uid_id)).unsigned = false;
                else if (typeof d.uid_id === "string")
                    m.uid_id = parseInt(d.uid_id, 10);
                else if (typeof d.uid_id === "number")
                    m.uid_id = d.uid_id;
                else if (typeof d.uid_id === "object")
                    m.uid_id = new $util.LongBits(d.uid_id.low >>> 0, d.uid_id.high >>> 0).toNumber();
            }
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqUpdateMat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqUpdateMat
         * @static
         * @param {farm.ReqUpdateMat} m ReqUpdateMat
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUpdateMat.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.uid_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.uid_id = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
            }
            if (m.uid_id != null && m.hasOwnProperty("uid_id")) {
                if (typeof m.uid_id === "number")
                    d.uid_id = o.longs === String ? String(m.uid_id) : m.uid_id;
                else
                    d.uid_id = o.longs === String ? $util.Long.prototype.toString.call(m.uid_id) : o.longs === Number ? new $util.LongBits(m.uid_id.low >>> 0, m.uid_id.high >>> 0).toNumber() : m.uid_id;
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            return d;
        };

        /**
         * Converts this ReqUpdateMat to JSON.
         * @function toJSON
         * @memberof farm.ReqUpdateMat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUpdateMat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUpdateMat;
    })();

    farm.RespUpdateMat = (function() {

        /**
         * Properties of a RespUpdateMat.
         * @memberof farm
         * @interface IRespUpdateMat
         * @property {number|Long|null} [mat_id] RespUpdateMat mat_id
         * @property {Array.<number|Long>|null} [last_study] RespUpdateMat last_study
         */

        /**
         * Constructs a new RespUpdateMat.
         * @memberof farm
         * @classdesc Represents a RespUpdateMat.
         * @implements IRespUpdateMat
         * @constructor
         * @param {farm.IRespUpdateMat=} [p] Properties to set
         */
        function RespUpdateMat(p) {
            this.last_study = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespUpdateMat mat_id.
         * @member {number|Long} mat_id
         * @memberof farm.RespUpdateMat
         * @instance
         */
        RespUpdateMat.prototype.mat_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespUpdateMat last_study.
         * @member {Array.<number|Long>} last_study
         * @memberof farm.RespUpdateMat
         * @instance
         */
        RespUpdateMat.prototype.last_study = $util.emptyArray;

        /**
         * Encodes the specified RespUpdateMat message. Does not implicitly {@link farm.RespUpdateMat.verify|verify} messages.
         * @function encode
         * @memberof farm.RespUpdateMat
         * @static
         * @param {farm.IRespUpdateMat} m RespUpdateMat message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUpdateMat.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mat_id != null && Object.hasOwnProperty.call(m, "mat_id"))
                w.uint32(8).int64(m.mat_id);
            if (m.last_study != null && m.last_study.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.last_study.length; ++i)
                    w.int64(m.last_study[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespUpdateMat message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespUpdateMat
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespUpdateMat} RespUpdateMat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUpdateMat.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespUpdateMat();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mat_id = r.int64();
                    break;
                case 2:
                    if (!(m.last_study && m.last_study.length))
                        m.last_study = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.last_study.push(r.int64());
                    } else
                        m.last_study.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespUpdateMat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespUpdateMat
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespUpdateMat} RespUpdateMat
         */
        RespUpdateMat.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespUpdateMat)
                return d;
            var m = new $root.farm.RespUpdateMat();
            if (d.mat_id != null) {
                if ($util.Long)
                    (m.mat_id = $util.Long.fromValue(d.mat_id)).unsigned = false;
                else if (typeof d.mat_id === "string")
                    m.mat_id = parseInt(d.mat_id, 10);
                else if (typeof d.mat_id === "number")
                    m.mat_id = d.mat_id;
                else if (typeof d.mat_id === "object")
                    m.mat_id = new $util.LongBits(d.mat_id.low >>> 0, d.mat_id.high >>> 0).toNumber();
            }
            if (d.last_study) {
                if (!Array.isArray(d.last_study))
                    throw TypeError(".farm.RespUpdateMat.last_study: array expected");
                m.last_study = [];
                for (var i = 0; i < d.last_study.length; ++i) {
                    if ($util.Long)
                        (m.last_study[i] = $util.Long.fromValue(d.last_study[i])).unsigned = false;
                    else if (typeof d.last_study[i] === "string")
                        m.last_study[i] = parseInt(d.last_study[i], 10);
                    else if (typeof d.last_study[i] === "number")
                        m.last_study[i] = d.last_study[i];
                    else if (typeof d.last_study[i] === "object")
                        m.last_study[i] = new $util.LongBits(d.last_study[i].low >>> 0, d.last_study[i].high >>> 0).toNumber();
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespUpdateMat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespUpdateMat
         * @static
         * @param {farm.RespUpdateMat} m RespUpdateMat
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespUpdateMat.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.last_study = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mat_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mat_id = o.longs === String ? "0" : 0;
            }
            if (m.mat_id != null && m.hasOwnProperty("mat_id")) {
                if (typeof m.mat_id === "number")
                    d.mat_id = o.longs === String ? String(m.mat_id) : m.mat_id;
                else
                    d.mat_id = o.longs === String ? $util.Long.prototype.toString.call(m.mat_id) : o.longs === Number ? new $util.LongBits(m.mat_id.low >>> 0, m.mat_id.high >>> 0).toNumber() : m.mat_id;
            }
            if (m.last_study && m.last_study.length) {
                d.last_study = [];
                for (var j = 0; j < m.last_study.length; ++j) {
                    if (typeof m.last_study[j] === "number")
                        d.last_study[j] = o.longs === String ? String(m.last_study[j]) : m.last_study[j];
                    else
                        d.last_study[j] = o.longs === String ? $util.Long.prototype.toString.call(m.last_study[j]) : o.longs === Number ? new $util.LongBits(m.last_study[j].low >>> 0, m.last_study[j].high >>> 0).toNumber() : m.last_study[j];
                }
            }
            return d;
        };

        /**
         * Converts this RespUpdateMat to JSON.
         * @function toJSON
         * @memberof farm.RespUpdateMat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespUpdateMat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespUpdateMat;
    })();

    farm.Pos = (function() {

        /**
         * Properties of a Pos.
         * @memberof farm
         * @interface IPos
         * @property {number|null} [x] Pos x
         * @property {number|null} [y] Pos y
         */

        /**
         * Constructs a new Pos.
         * @memberof farm
         * @classdesc Represents a Pos.
         * @implements IPos
         * @constructor
         * @param {farm.IPos=} [p] Properties to set
         */
        function Pos(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Pos x.
         * @member {number} x
         * @memberof farm.Pos
         * @instance
         */
        Pos.prototype.x = 0;

        /**
         * Pos y.
         * @member {number} y
         * @memberof farm.Pos
         * @instance
         */
        Pos.prototype.y = 0;

        /**
         * Encodes the specified Pos message. Does not implicitly {@link farm.Pos.verify|verify} messages.
         * @function encode
         * @memberof farm.Pos
         * @static
         * @param {farm.IPos} m Pos message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pos.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.x != null && Object.hasOwnProperty.call(m, "x"))
                w.uint32(8).int32(m.x);
            if (m.y != null && Object.hasOwnProperty.call(m, "y"))
                w.uint32(16).int32(m.y);
            return w;
        };

        /**
         * Decodes a Pos message from the specified reader or buffer.
         * @function decode
         * @memberof farm.Pos
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.Pos} Pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pos.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.Pos();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.x = r.int32();
                    break;
                case 2:
                    m.y = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a Pos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.Pos
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.Pos} Pos
         */
        Pos.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.Pos)
                return d;
            var m = new $root.farm.Pos();
            if (d.x != null) {
                m.x = d.x | 0;
            }
            if (d.y != null) {
                m.y = d.y | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a Pos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.Pos
         * @static
         * @param {farm.Pos} m Pos
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pos.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.x = 0;
                d.y = 0;
            }
            if (m.x != null && m.hasOwnProperty("x")) {
                d.x = m.x;
            }
            if (m.y != null && m.hasOwnProperty("y")) {
                d.y = m.y;
            }
            return d;
        };

        /**
         * Converts this Pos to JSON.
         * @function toJSON
         * @memberof farm.Pos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pos;
    })();

    /**
     * BuildingStateType enum.
     * @name farm.BuildingStateType
     * @enum {number}
     * @property {number} Invalid=0 Invalid value
     * @property {number} Building=1 Building value
     * @property {number} Upgrading=2 Upgrading value
     * @property {number} PreComplete=3 PreComplete value
     * @property {number} Normal=4 Normal value
     * @property {number} Abandoned=5 Abandoned value
     * @property {number} Lock=6 Lock value
     */
    farm.BuildingStateType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Invalid"] = 0;
        values[valuesById[1] = "Building"] = 1;
        values[valuesById[2] = "Upgrading"] = 2;
        values[valuesById[3] = "PreComplete"] = 3;
        values[valuesById[4] = "Normal"] = 4;
        values[valuesById[5] = "Abandoned"] = 5;
        values[valuesById[6] = "Lock"] = 6;
        return values;
    })();

    /**
     * CropStateType enum.
     * @name farm.CropStateType
     * @enum {number}
     * @property {number} NotExist=0 NotExist value
     * @property {number} Seedling=1 Seedling value
     * @property {number} SmallLeaf=2 SmallLeaf value
     * @property {number} LargeLeaf=3 LargeLeaf value
     * @property {number} Mature=4 Mature value
     */
    farm.CropStateType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NotExist"] = 0;
        values[valuesById[1] = "Seedling"] = 1;
        values[valuesById[2] = "SmallLeaf"] = 2;
        values[valuesById[3] = "LargeLeaf"] = 3;
        values[valuesById[4] = "Mature"] = 4;
        return values;
    })();

    /**
     * ArableLandStateType enum.
     * @name farm.ArableLandStateType
     * @enum {number}
     * @property {number} Space=0 Space value
     * @property {number} Using=1 Using value
     */
    farm.ArableLandStateType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Space"] = 0;
        values[valuesById[1] = "Using"] = 1;
        return values;
    })();

    /**
     * MailType enum.
     * @name farm.MailType
     * @enum {number}
     * @property {number} SYS=0 SYS value
     * @property {number} NPC=1 NPC value
     * @property {number} Player=2 Player value
     */
    farm.MailType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SYS"] = 0;
        values[valuesById[1] = "NPC"] = 1;
        values[valuesById[2] = "Player"] = 2;
        return values;
    })();

    /**
     * MailState enum.
     * @name farm.MailState
     * @enum {number}
     * @property {number} No_Read=0 No_Read value
     * @property {number} Read=1 Read value
     */
    farm.MailState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "No_Read"] = 0;
        values[valuesById[1] = "Read"] = 1;
        return values;
    })();

    /**
     * MailTapType enum.
     * @name farm.MailTapType
     * @enum {number}
     * @property {number} Notification=0 Notification value
     * @property {number} Annexes=1 Annexes value
     */
    farm.MailTapType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Notification"] = 0;
        values[valuesById[1] = "Annexes"] = 1;
        return values;
    })();

    /**
     * AnnexState enum.
     * @name farm.AnnexState
     * @enum {number}
     * @property {number} No_Receive=0 No_Receive value
     * @property {number} Received=1 Received value
     */
    farm.AnnexState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "No_Receive"] = 0;
        values[valuesById[1] = "Received"] = 1;
        return values;
    })();

    /**
     * CurrencyType enum.
     * @name farm.CurrencyType
     * @enum {number}
     * @property {number} CNothing=0 CNothing value
     * @property {number} CGold=1 CGold value
     * @property {number} CCrystal=2 CCrystal value
     * @property {number} CLove=3 CLove value
     */
    farm.CurrencyType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CNothing"] = 0;
        values[valuesById[1] = "CGold"] = 1;
        values[valuesById[2] = "CCrystal"] = 2;
        values[valuesById[3] = "CLove"] = 3;
        return values;
    })();

    /**
     * UnlockConditionType enum.
     * @name farm.UnlockConditionType
     * @enum {number}
     * @property {number} Nothing=0 Nothing value
     * @property {number} Love=1 Love value
     * @property {number} Gold=2 Gold value
     * @property {number} Task=3 Task value
     * @property {number} Prop=4 Prop value
     * @property {number} ManorHeart=5 ManorHeart value
     * @property {number} Level=6 Level value
     * @property {number} Crystal=7 Crystal value
     */
    farm.UnlockConditionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Nothing"] = 0;
        values[valuesById[1] = "Love"] = 1;
        values[valuesById[2] = "Gold"] = 2;
        values[valuesById[3] = "Task"] = 3;
        values[valuesById[4] = "Prop"] = 4;
        values[valuesById[5] = "ManorHeart"] = 5;
        values[valuesById[6] = "Level"] = 6;
        values[valuesById[7] = "Crystal"] = 7;
        return values;
    })();

    farm.BuildingItem = (function() {

        /**
         * Properties of a BuildingItem.
         * @memberof farm
         * @interface IBuildingItem
         * @property {number|Long|null} [id] BuildingItem id
         * @property {number|null} [configID] BuildingItem configID
         * @property {number|null} [level] BuildingItem level
         * @property {boolean|null} [rotated] BuildingItem rotated
         * @property {farm.IPos|null} [pos] BuildingItem pos
         * @property {farm.BuildingStateType|null} [state] BuildingItem state
         * @property {number|null} [leftDur] BuildingItem leftDur
         */

        /**
         * Constructs a new BuildingItem.
         * @memberof farm
         * @classdesc Represents a BuildingItem.
         * @implements IBuildingItem
         * @constructor
         * @param {farm.IBuildingItem=} [p] Properties to set
         */
        function BuildingItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BuildingItem id.
         * @member {number|Long} id
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BuildingItem configID.
         * @member {number} configID
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.configID = 0;

        /**
         * BuildingItem level.
         * @member {number} level
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.level = 0;

        /**
         * BuildingItem rotated.
         * @member {boolean} rotated
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.rotated = false;

        /**
         * BuildingItem pos.
         * @member {farm.IPos|null|undefined} pos
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.pos = null;

        /**
         * BuildingItem state.
         * @member {farm.BuildingStateType} state
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.state = 0;

        /**
         * BuildingItem leftDur.
         * @member {number} leftDur
         * @memberof farm.BuildingItem
         * @instance
         */
        BuildingItem.prototype.leftDur = 0;

        /**
         * Encodes the specified BuildingItem message. Does not implicitly {@link farm.BuildingItem.verify|verify} messages.
         * @function encode
         * @memberof farm.BuildingItem
         * @static
         * @param {farm.IBuildingItem} m BuildingItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildingItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.configID != null && Object.hasOwnProperty.call(m, "configID"))
                w.uint32(16).int32(m.configID);
            if (m.level != null && Object.hasOwnProperty.call(m, "level"))
                w.uint32(24).int32(m.level);
            if (m.rotated != null && Object.hasOwnProperty.call(m, "rotated"))
                w.uint32(32).bool(m.rotated);
            if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
                $root.farm.Pos.encode(m.pos, w.uint32(42).fork()).ldelim();
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(48).int32(m.state);
            if (m.leftDur != null && Object.hasOwnProperty.call(m, "leftDur"))
                w.uint32(56).int32(m.leftDur);
            return w;
        };

        /**
         * Decodes a BuildingItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.BuildingItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.BuildingItem} BuildingItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildingItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.BuildingItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.configID = r.int32();
                    break;
                case 3:
                    m.level = r.int32();
                    break;
                case 4:
                    m.rotated = r.bool();
                    break;
                case 5:
                    m.pos = $root.farm.Pos.decode(r, r.uint32());
                    break;
                case 6:
                    m.state = r.int32();
                    break;
                case 7:
                    m.leftDur = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a BuildingItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.BuildingItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.BuildingItem} BuildingItem
         */
        BuildingItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.BuildingItem)
                return d;
            var m = new $root.farm.BuildingItem();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.configID != null) {
                m.configID = d.configID | 0;
            }
            if (d.level != null) {
                m.level = d.level | 0;
            }
            if (d.rotated != null) {
                m.rotated = Boolean(d.rotated);
            }
            if (d.pos != null) {
                if (typeof d.pos !== "object")
                    throw TypeError(".farm.BuildingItem.pos: object expected");
                m.pos = $root.farm.Pos.fromObject(d.pos);
            }
            switch (d.state) {
            case "Invalid":
            case 0:
                m.state = 0;
                break;
            case "Building":
            case 1:
                m.state = 1;
                break;
            case "Upgrading":
            case 2:
                m.state = 2;
                break;
            case "PreComplete":
            case 3:
                m.state = 3;
                break;
            case "Normal":
            case 4:
                m.state = 4;
                break;
            case "Abandoned":
            case 5:
                m.state = 5;
                break;
            case "Lock":
            case 6:
                m.state = 6;
                break;
            }
            if (d.leftDur != null) {
                m.leftDur = d.leftDur | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a BuildingItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.BuildingItem
         * @static
         * @param {farm.BuildingItem} m BuildingItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.configID = 0;
                d.level = 0;
                d.rotated = false;
                d.pos = null;
                d.state = o.enums === String ? "Invalid" : 0;
                d.leftDur = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.configID != null && m.hasOwnProperty("configID")) {
                d.configID = m.configID;
            }
            if (m.level != null && m.hasOwnProperty("level")) {
                d.level = m.level;
            }
            if (m.rotated != null && m.hasOwnProperty("rotated")) {
                d.rotated = m.rotated;
            }
            if (m.pos != null && m.hasOwnProperty("pos")) {
                d.pos = $root.farm.Pos.toObject(m.pos, o);
            }
            if (m.state != null && m.hasOwnProperty("state")) {
                d.state = o.enums === String ? $root.farm.BuildingStateType[m.state] : m.state;
            }
            if (m.leftDur != null && m.hasOwnProperty("leftDur")) {
                d.leftDur = m.leftDur;
            }
            return d;
        };

        /**
         * Converts this BuildingItem to JSON.
         * @function toJSON
         * @memberof farm.BuildingItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingItem;
    })();

    farm.ReqBuildingList = (function() {

        /**
         * Properties of a ReqBuildingList.
         * @memberof farm
         * @interface IReqBuildingList
         */

        /**
         * Constructs a new ReqBuildingList.
         * @memberof farm
         * @classdesc Represents a ReqBuildingList.
         * @implements IReqBuildingList
         * @constructor
         * @param {farm.IReqBuildingList=} [p] Properties to set
         */
        function ReqBuildingList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified ReqBuildingList message. Does not implicitly {@link farm.ReqBuildingList.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqBuildingList
         * @static
         * @param {farm.IReqBuildingList} m ReqBuildingList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBuildingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a ReqBuildingList message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqBuildingList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqBuildingList} ReqBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBuildingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqBuildingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqBuildingList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqBuildingList
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqBuildingList} ReqBuildingList
         */
        ReqBuildingList.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqBuildingList)
                return d;
            return new $root.farm.ReqBuildingList();
        };

        /**
         * Creates a plain object from a ReqBuildingList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqBuildingList
         * @static
         * @param {farm.ReqBuildingList} m ReqBuildingList
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqBuildingList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqBuildingList to JSON.
         * @function toJSON
         * @memberof farm.ReqBuildingList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqBuildingList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqBuildingList;
    })();

    farm.RespBuildingList = (function() {

        /**
         * Properties of a RespBuildingList.
         * @memberof farm
         * @interface IRespBuildingList
         * @property {Array.<farm.IBuildingItem>|null} [buildings] RespBuildingList buildings
         */

        /**
         * Constructs a new RespBuildingList.
         * @memberof farm
         * @classdesc Represents a RespBuildingList.
         * @implements IRespBuildingList
         * @constructor
         * @param {farm.IRespBuildingList=} [p] Properties to set
         */
        function RespBuildingList(p) {
            this.buildings = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespBuildingList buildings.
         * @member {Array.<farm.IBuildingItem>} buildings
         * @memberof farm.RespBuildingList
         * @instance
         */
        RespBuildingList.prototype.buildings = $util.emptyArray;

        /**
         * Encodes the specified RespBuildingList message. Does not implicitly {@link farm.RespBuildingList.verify|verify} messages.
         * @function encode
         * @memberof farm.RespBuildingList
         * @static
         * @param {farm.IRespBuildingList} m RespBuildingList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBuildingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.buildings != null && m.buildings.length) {
                for (var i = 0; i < m.buildings.length; ++i)
                    $root.farm.BuildingItem.encode(m.buildings[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespBuildingList message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespBuildingList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespBuildingList} RespBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBuildingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespBuildingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.buildings && m.buildings.length))
                        m.buildings = [];
                    m.buildings.push($root.farm.BuildingItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespBuildingList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespBuildingList
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespBuildingList} RespBuildingList
         */
        RespBuildingList.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespBuildingList)
                return d;
            var m = new $root.farm.RespBuildingList();
            if (d.buildings) {
                if (!Array.isArray(d.buildings))
                    throw TypeError(".farm.RespBuildingList.buildings: array expected");
                m.buildings = [];
                for (var i = 0; i < d.buildings.length; ++i) {
                    if (typeof d.buildings[i] !== "object")
                        throw TypeError(".farm.RespBuildingList.buildings: object expected");
                    m.buildings[i] = $root.farm.BuildingItem.fromObject(d.buildings[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespBuildingList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespBuildingList
         * @static
         * @param {farm.RespBuildingList} m RespBuildingList
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespBuildingList.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.buildings = [];
            }
            if (m.buildings && m.buildings.length) {
                d.buildings = [];
                for (var j = 0; j < m.buildings.length; ++j) {
                    d.buildings[j] = $root.farm.BuildingItem.toObject(m.buildings[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespBuildingList to JSON.
         * @function toJSON
         * @memberof farm.RespBuildingList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespBuildingList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespBuildingList;
    })();

    farm.ReqCanBuildBuildingList = (function() {

        /**
         * Properties of a ReqCanBuildBuildingList.
         * @memberof farm
         * @interface IReqCanBuildBuildingList
         */

        /**
         * Constructs a new ReqCanBuildBuildingList.
         * @memberof farm
         * @classdesc Represents a ReqCanBuildBuildingList.
         * @implements IReqCanBuildBuildingList
         * @constructor
         * @param {farm.IReqCanBuildBuildingList=} [p] Properties to set
         */
        function ReqCanBuildBuildingList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified ReqCanBuildBuildingList message. Does not implicitly {@link farm.ReqCanBuildBuildingList.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqCanBuildBuildingList
         * @static
         * @param {farm.IReqCanBuildBuildingList} m ReqCanBuildBuildingList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCanBuildBuildingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a ReqCanBuildBuildingList message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqCanBuildBuildingList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqCanBuildBuildingList} ReqCanBuildBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCanBuildBuildingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqCanBuildBuildingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqCanBuildBuildingList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqCanBuildBuildingList
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqCanBuildBuildingList} ReqCanBuildBuildingList
         */
        ReqCanBuildBuildingList.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqCanBuildBuildingList)
                return d;
            return new $root.farm.ReqCanBuildBuildingList();
        };

        /**
         * Creates a plain object from a ReqCanBuildBuildingList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqCanBuildBuildingList
         * @static
         * @param {farm.ReqCanBuildBuildingList} m ReqCanBuildBuildingList
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCanBuildBuildingList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqCanBuildBuildingList to JSON.
         * @function toJSON
         * @memberof farm.ReqCanBuildBuildingList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCanBuildBuildingList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqCanBuildBuildingList;
    })();

    farm.RespCanBuildBuildingList = (function() {

        /**
         * Properties of a RespCanBuildBuildingList.
         * @memberof farm
         * @interface IRespCanBuildBuildingList
         * @property {Array.<number>|null} [buildingConfigIds] RespCanBuildBuildingList buildingConfigIds
         */

        /**
         * Constructs a new RespCanBuildBuildingList.
         * @memberof farm
         * @classdesc Represents a RespCanBuildBuildingList.
         * @implements IRespCanBuildBuildingList
         * @constructor
         * @param {farm.IRespCanBuildBuildingList=} [p] Properties to set
         */
        function RespCanBuildBuildingList(p) {
            this.buildingConfigIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespCanBuildBuildingList buildingConfigIds.
         * @member {Array.<number>} buildingConfigIds
         * @memberof farm.RespCanBuildBuildingList
         * @instance
         */
        RespCanBuildBuildingList.prototype.buildingConfigIds = $util.emptyArray;

        /**
         * Encodes the specified RespCanBuildBuildingList message. Does not implicitly {@link farm.RespCanBuildBuildingList.verify|verify} messages.
         * @function encode
         * @memberof farm.RespCanBuildBuildingList
         * @static
         * @param {farm.IRespCanBuildBuildingList} m RespCanBuildBuildingList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCanBuildBuildingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.buildingConfigIds != null && m.buildingConfigIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.buildingConfigIds.length; ++i)
                    w.int32(m.buildingConfigIds[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespCanBuildBuildingList message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespCanBuildBuildingList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespCanBuildBuildingList} RespCanBuildBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCanBuildBuildingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespCanBuildBuildingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.buildingConfigIds && m.buildingConfigIds.length))
                        m.buildingConfigIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.buildingConfigIds.push(r.int32());
                    } else
                        m.buildingConfigIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespCanBuildBuildingList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespCanBuildBuildingList
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespCanBuildBuildingList} RespCanBuildBuildingList
         */
        RespCanBuildBuildingList.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespCanBuildBuildingList)
                return d;
            var m = new $root.farm.RespCanBuildBuildingList();
            if (d.buildingConfigIds) {
                if (!Array.isArray(d.buildingConfigIds))
                    throw TypeError(".farm.RespCanBuildBuildingList.buildingConfigIds: array expected");
                m.buildingConfigIds = [];
                for (var i = 0; i < d.buildingConfigIds.length; ++i) {
                    m.buildingConfigIds[i] = d.buildingConfigIds[i] | 0;
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespCanBuildBuildingList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespCanBuildBuildingList
         * @static
         * @param {farm.RespCanBuildBuildingList} m RespCanBuildBuildingList
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespCanBuildBuildingList.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.buildingConfigIds = [];
            }
            if (m.buildingConfigIds && m.buildingConfigIds.length) {
                d.buildingConfigIds = [];
                for (var j = 0; j < m.buildingConfigIds.length; ++j) {
                    d.buildingConfigIds[j] = m.buildingConfigIds[j];
                }
            }
            return d;
        };

        /**
         * Converts this RespCanBuildBuildingList to JSON.
         * @function toJSON
         * @memberof farm.RespCanBuildBuildingList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespCanBuildBuildingList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespCanBuildBuildingList;
    })();

    farm.ReqBuild = (function() {

        /**
         * Properties of a ReqBuild.
         * @memberof farm
         * @interface IReqBuild
         * @property {number|null} [configID] ReqBuild configID
         * @property {boolean|null} [rotated] ReqBuild rotated
         * @property {farm.IPos|null} [pos] ReqBuild pos
         */

        /**
         * Constructs a new ReqBuild.
         * @memberof farm
         * @classdesc Represents a ReqBuild.
         * @implements IReqBuild
         * @constructor
         * @param {farm.IReqBuild=} [p] Properties to set
         */
        function ReqBuild(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqBuild configID.
         * @member {number} configID
         * @memberof farm.ReqBuild
         * @instance
         */
        ReqBuild.prototype.configID = 0;

        /**
         * ReqBuild rotated.
         * @member {boolean} rotated
         * @memberof farm.ReqBuild
         * @instance
         */
        ReqBuild.prototype.rotated = false;

        /**
         * ReqBuild pos.
         * @member {farm.IPos|null|undefined} pos
         * @memberof farm.ReqBuild
         * @instance
         */
        ReqBuild.prototype.pos = null;

        /**
         * Encodes the specified ReqBuild message. Does not implicitly {@link farm.ReqBuild.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqBuild
         * @static
         * @param {farm.IReqBuild} m ReqBuild message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBuild.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.configID != null && Object.hasOwnProperty.call(m, "configID"))
                w.uint32(8).int32(m.configID);
            if (m.rotated != null && Object.hasOwnProperty.call(m, "rotated"))
                w.uint32(16).bool(m.rotated);
            if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
                $root.farm.Pos.encode(m.pos, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ReqBuild message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqBuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqBuild} ReqBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBuild.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqBuild();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.configID = r.int32();
                    break;
                case 2:
                    m.rotated = r.bool();
                    break;
                case 3:
                    m.pos = $root.farm.Pos.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqBuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqBuild
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqBuild} ReqBuild
         */
        ReqBuild.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqBuild)
                return d;
            var m = new $root.farm.ReqBuild();
            if (d.configID != null) {
                m.configID = d.configID | 0;
            }
            if (d.rotated != null) {
                m.rotated = Boolean(d.rotated);
            }
            if (d.pos != null) {
                if (typeof d.pos !== "object")
                    throw TypeError(".farm.ReqBuild.pos: object expected");
                m.pos = $root.farm.Pos.fromObject(d.pos);
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqBuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqBuild
         * @static
         * @param {farm.ReqBuild} m ReqBuild
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqBuild.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.configID = 0;
                d.rotated = false;
                d.pos = null;
            }
            if (m.configID != null && m.hasOwnProperty("configID")) {
                d.configID = m.configID;
            }
            if (m.rotated != null && m.hasOwnProperty("rotated")) {
                d.rotated = m.rotated;
            }
            if (m.pos != null && m.hasOwnProperty("pos")) {
                d.pos = $root.farm.Pos.toObject(m.pos, o);
            }
            return d;
        };

        /**
         * Converts this ReqBuild to JSON.
         * @function toJSON
         * @memberof farm.ReqBuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqBuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqBuild;
    })();

    farm.ReqById = (function() {

        /**
         * Properties of a ReqById.
         * @memberof farm
         * @interface IReqById
         * @property {number|Long|null} [id] ReqById id
         */

        /**
         * Constructs a new ReqById.
         * @memberof farm
         * @classdesc Represents a ReqById.
         * @implements IReqById
         * @constructor
         * @param {farm.IReqById=} [p] Properties to set
         */
        function ReqById(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqById id.
         * @member {number|Long} id
         * @memberof farm.ReqById
         * @instance
         */
        ReqById.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqById message. Does not implicitly {@link farm.ReqById.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqById
         * @static
         * @param {farm.IReqById} m ReqById message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqById.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            return w;
        };

        /**
         * Decodes a ReqById message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqById
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqById} ReqById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqById.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqById();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqById
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqById} ReqById
         */
        ReqById.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqById)
                return d;
            var m = new $root.farm.ReqById();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqById
         * @static
         * @param {farm.ReqById} m ReqById
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqById.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            return d;
        };

        /**
         * Converts this ReqById to JSON.
         * @function toJSON
         * @memberof farm.ReqById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqById;
    })();

    farm.MessageBuildingStateChanged = (function() {

        /**
         * Properties of a MessageBuildingStateChanged.
         * @memberof farm
         * @interface IMessageBuildingStateChanged
         * @property {number|Long|null} [id] MessageBuildingStateChanged id
         * @property {farm.BuildingStateType|null} [state] MessageBuildingStateChanged state
         */

        /**
         * Constructs a new MessageBuildingStateChanged.
         * @memberof farm
         * @classdesc Represents a MessageBuildingStateChanged.
         * @implements IMessageBuildingStateChanged
         * @constructor
         * @param {farm.IMessageBuildingStateChanged=} [p] Properties to set
         */
        function MessageBuildingStateChanged(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessageBuildingStateChanged id.
         * @member {number|Long} id
         * @memberof farm.MessageBuildingStateChanged
         * @instance
         */
        MessageBuildingStateChanged.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBuildingStateChanged state.
         * @member {farm.BuildingStateType} state
         * @memberof farm.MessageBuildingStateChanged
         * @instance
         */
        MessageBuildingStateChanged.prototype.state = 0;

        /**
         * Encodes the specified MessageBuildingStateChanged message. Does not implicitly {@link farm.MessageBuildingStateChanged.verify|verify} messages.
         * @function encode
         * @memberof farm.MessageBuildingStateChanged
         * @static
         * @param {farm.IMessageBuildingStateChanged} m MessageBuildingStateChanged message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBuildingStateChanged.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(16).int32(m.state);
            return w;
        };

        /**
         * Decodes a MessageBuildingStateChanged message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessageBuildingStateChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessageBuildingStateChanged} MessageBuildingStateChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBuildingStateChanged.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessageBuildingStateChanged();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.state = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessageBuildingStateChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessageBuildingStateChanged
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessageBuildingStateChanged} MessageBuildingStateChanged
         */
        MessageBuildingStateChanged.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessageBuildingStateChanged)
                return d;
            var m = new $root.farm.MessageBuildingStateChanged();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            switch (d.state) {
            case "Invalid":
            case 0:
                m.state = 0;
                break;
            case "Building":
            case 1:
                m.state = 1;
                break;
            case "Upgrading":
            case 2:
                m.state = 2;
                break;
            case "PreComplete":
            case 3:
                m.state = 3;
                break;
            case "Normal":
            case 4:
                m.state = 4;
                break;
            case "Abandoned":
            case 5:
                m.state = 5;
                break;
            case "Lock":
            case 6:
                m.state = 6;
                break;
            }
            return m;
        };

        /**
         * Creates a plain object from a MessageBuildingStateChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessageBuildingStateChanged
         * @static
         * @param {farm.MessageBuildingStateChanged} m MessageBuildingStateChanged
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageBuildingStateChanged.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.state = o.enums === String ? "Invalid" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.state != null && m.hasOwnProperty("state")) {
                d.state = o.enums === String ? $root.farm.BuildingStateType[m.state] : m.state;
            }
            return d;
        };

        /**
         * Converts this MessageBuildingStateChanged to JSON.
         * @function toJSON
         * @memberof farm.MessageBuildingStateChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageBuildingStateChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageBuildingStateChanged;
    })();

    farm.MessageCurrencyStateChanged = (function() {

        /**
         * Properties of a MessageCurrencyStateChanged.
         * @memberof farm
         * @interface IMessageCurrencyStateChanged
         * @property {number|null} [coin] MessageCurrencyStateChanged coin
         * @property {number|null} [crystal] MessageCurrencyStateChanged crystal
         * @property {number|null} [heart] MessageCurrencyStateChanged heart
         */

        /**
         * Constructs a new MessageCurrencyStateChanged.
         * @memberof farm
         * @classdesc Represents a MessageCurrencyStateChanged.
         * @implements IMessageCurrencyStateChanged
         * @constructor
         * @param {farm.IMessageCurrencyStateChanged=} [p] Properties to set
         */
        function MessageCurrencyStateChanged(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessageCurrencyStateChanged coin.
         * @member {number} coin
         * @memberof farm.MessageCurrencyStateChanged
         * @instance
         */
        MessageCurrencyStateChanged.prototype.coin = 0;

        /**
         * MessageCurrencyStateChanged crystal.
         * @member {number} crystal
         * @memberof farm.MessageCurrencyStateChanged
         * @instance
         */
        MessageCurrencyStateChanged.prototype.crystal = 0;

        /**
         * MessageCurrencyStateChanged heart.
         * @member {number} heart
         * @memberof farm.MessageCurrencyStateChanged
         * @instance
         */
        MessageCurrencyStateChanged.prototype.heart = 0;

        /**
         * Encodes the specified MessageCurrencyStateChanged message. Does not implicitly {@link farm.MessageCurrencyStateChanged.verify|verify} messages.
         * @function encode
         * @memberof farm.MessageCurrencyStateChanged
         * @static
         * @param {farm.IMessageCurrencyStateChanged} m MessageCurrencyStateChanged message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCurrencyStateChanged.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
                w.uint32(8).int32(m.coin);
            if (m.crystal != null && Object.hasOwnProperty.call(m, "crystal"))
                w.uint32(16).int32(m.crystal);
            if (m.heart != null && Object.hasOwnProperty.call(m, "heart"))
                w.uint32(24).int32(m.heart);
            return w;
        };

        /**
         * Decodes a MessageCurrencyStateChanged message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessageCurrencyStateChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessageCurrencyStateChanged} MessageCurrencyStateChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCurrencyStateChanged.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessageCurrencyStateChanged();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.coin = r.int32();
                    break;
                case 2:
                    m.crystal = r.int32();
                    break;
                case 3:
                    m.heart = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessageCurrencyStateChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessageCurrencyStateChanged
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessageCurrencyStateChanged} MessageCurrencyStateChanged
         */
        MessageCurrencyStateChanged.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessageCurrencyStateChanged)
                return d;
            var m = new $root.farm.MessageCurrencyStateChanged();
            if (d.coin != null) {
                m.coin = d.coin | 0;
            }
            if (d.crystal != null) {
                m.crystal = d.crystal | 0;
            }
            if (d.heart != null) {
                m.heart = d.heart | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a MessageCurrencyStateChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessageCurrencyStateChanged
         * @static
         * @param {farm.MessageCurrencyStateChanged} m MessageCurrencyStateChanged
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageCurrencyStateChanged.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.coin = 0;
                d.crystal = 0;
                d.heart = 0;
            }
            if (m.coin != null && m.hasOwnProperty("coin")) {
                d.coin = m.coin;
            }
            if (m.crystal != null && m.hasOwnProperty("crystal")) {
                d.crystal = m.crystal;
            }
            if (m.heart != null && m.hasOwnProperty("heart")) {
                d.heart = m.heart;
            }
            return d;
        };

        /**
         * Converts this MessageCurrencyStateChanged to JSON.
         * @function toJSON
         * @memberof farm.MessageCurrencyStateChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageCurrencyStateChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageCurrencyStateChanged;
    })();

    farm.ReqEditBuilding = (function() {

        /**
         * Properties of a ReqEditBuilding.
         * @memberof farm
         * @interface IReqEditBuilding
         * @property {number|Long|null} [id] ReqEditBuilding id
         * @property {boolean|null} [rotated] ReqEditBuilding rotated
         * @property {farm.IPos|null} [pos] ReqEditBuilding pos
         */

        /**
         * Constructs a new ReqEditBuilding.
         * @memberof farm
         * @classdesc Represents a ReqEditBuilding.
         * @implements IReqEditBuilding
         * @constructor
         * @param {farm.IReqEditBuilding=} [p] Properties to set
         */
        function ReqEditBuilding(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqEditBuilding id.
         * @member {number|Long} id
         * @memberof farm.ReqEditBuilding
         * @instance
         */
        ReqEditBuilding.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEditBuilding rotated.
         * @member {boolean} rotated
         * @memberof farm.ReqEditBuilding
         * @instance
         */
        ReqEditBuilding.prototype.rotated = false;

        /**
         * ReqEditBuilding pos.
         * @member {farm.IPos|null|undefined} pos
         * @memberof farm.ReqEditBuilding
         * @instance
         */
        ReqEditBuilding.prototype.pos = null;

        /**
         * Encodes the specified ReqEditBuilding message. Does not implicitly {@link farm.ReqEditBuilding.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqEditBuilding
         * @static
         * @param {farm.IReqEditBuilding} m ReqEditBuilding message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEditBuilding.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.rotated != null && Object.hasOwnProperty.call(m, "rotated"))
                w.uint32(16).bool(m.rotated);
            if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
                $root.farm.Pos.encode(m.pos, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ReqEditBuilding message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqEditBuilding
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqEditBuilding} ReqEditBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEditBuilding.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqEditBuilding();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.rotated = r.bool();
                    break;
                case 3:
                    m.pos = $root.farm.Pos.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqEditBuilding message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqEditBuilding
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqEditBuilding} ReqEditBuilding
         */
        ReqEditBuilding.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqEditBuilding)
                return d;
            var m = new $root.farm.ReqEditBuilding();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.rotated != null) {
                m.rotated = Boolean(d.rotated);
            }
            if (d.pos != null) {
                if (typeof d.pos !== "object")
                    throw TypeError(".farm.ReqEditBuilding.pos: object expected");
                m.pos = $root.farm.Pos.fromObject(d.pos);
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqEditBuilding message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqEditBuilding
         * @static
         * @param {farm.ReqEditBuilding} m ReqEditBuilding
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqEditBuilding.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.rotated = false;
                d.pos = null;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.rotated != null && m.hasOwnProperty("rotated")) {
                d.rotated = m.rotated;
            }
            if (m.pos != null && m.hasOwnProperty("pos")) {
                d.pos = $root.farm.Pos.toObject(m.pos, o);
            }
            return d;
        };

        /**
         * Converts this ReqEditBuilding to JSON.
         * @function toJSON
         * @memberof farm.ReqEditBuilding
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqEditBuilding.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqEditBuilding;
    })();

    farm.RespRecovery = (function() {

        /**
         * Properties of a RespRecovery.
         * @memberof farm
         * @interface IRespRecovery
         * @property {number|Long|null} [id] RespRecovery id
         * @property {number|null} [tkCrystalLeft] RespRecovery tkCrystalLeft
         */

        /**
         * Constructs a new RespRecovery.
         * @memberof farm
         * @classdesc Represents a RespRecovery.
         * @implements IRespRecovery
         * @constructor
         * @param {farm.IRespRecovery=} [p] Properties to set
         */
        function RespRecovery(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespRecovery id.
         * @member {number|Long} id
         * @memberof farm.RespRecovery
         * @instance
         */
        RespRecovery.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespRecovery tkCrystalLeft.
         * @member {number} tkCrystalLeft
         * @memberof farm.RespRecovery
         * @instance
         */
        RespRecovery.prototype.tkCrystalLeft = 0;

        /**
         * Encodes the specified RespRecovery message. Does not implicitly {@link farm.RespRecovery.verify|verify} messages.
         * @function encode
         * @memberof farm.RespRecovery
         * @static
         * @param {farm.IRespRecovery} m RespRecovery message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRecovery.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.tkCrystalLeft != null && Object.hasOwnProperty.call(m, "tkCrystalLeft"))
                w.uint32(16).int32(m.tkCrystalLeft);
            return w;
        };

        /**
         * Decodes a RespRecovery message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespRecovery
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespRecovery} RespRecovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRecovery.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespRecovery();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.tkCrystalLeft = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespRecovery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespRecovery
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespRecovery} RespRecovery
         */
        RespRecovery.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespRecovery)
                return d;
            var m = new $root.farm.RespRecovery();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.tkCrystalLeft != null) {
                m.tkCrystalLeft = d.tkCrystalLeft | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespRecovery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespRecovery
         * @static
         * @param {farm.RespRecovery} m RespRecovery
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespRecovery.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.tkCrystalLeft = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.tkCrystalLeft != null && m.hasOwnProperty("tkCrystalLeft")) {
                d.tkCrystalLeft = m.tkCrystalLeft;
            }
            return d;
        };

        /**
         * Converts this RespRecovery to JSON.
         * @function toJSON
         * @memberof farm.RespRecovery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespRecovery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespRecovery;
    })();

    farm.RespCompleteImm = (function() {

        /**
         * Properties of a RespCompleteImm.
         * @memberof farm
         * @interface IRespCompleteImm
         * @property {number|Long|null} [id] RespCompleteImm id
         * @property {number|null} [tkCrystalLeft] RespCompleteImm tkCrystalLeft
         */

        /**
         * Constructs a new RespCompleteImm.
         * @memberof farm
         * @classdesc Represents a RespCompleteImm.
         * @implements IRespCompleteImm
         * @constructor
         * @param {farm.IRespCompleteImm=} [p] Properties to set
         */
        function RespCompleteImm(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespCompleteImm id.
         * @member {number|Long} id
         * @memberof farm.RespCompleteImm
         * @instance
         */
        RespCompleteImm.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespCompleteImm tkCrystalLeft.
         * @member {number} tkCrystalLeft
         * @memberof farm.RespCompleteImm
         * @instance
         */
        RespCompleteImm.prototype.tkCrystalLeft = 0;

        /**
         * Encodes the specified RespCompleteImm message. Does not implicitly {@link farm.RespCompleteImm.verify|verify} messages.
         * @function encode
         * @memberof farm.RespCompleteImm
         * @static
         * @param {farm.IRespCompleteImm} m RespCompleteImm message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCompleteImm.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.tkCrystalLeft != null && Object.hasOwnProperty.call(m, "tkCrystalLeft"))
                w.uint32(16).int32(m.tkCrystalLeft);
            return w;
        };

        /**
         * Decodes a RespCompleteImm message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespCompleteImm
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespCompleteImm} RespCompleteImm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCompleteImm.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespCompleteImm();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.tkCrystalLeft = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespCompleteImm message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespCompleteImm
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespCompleteImm} RespCompleteImm
         */
        RespCompleteImm.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespCompleteImm)
                return d;
            var m = new $root.farm.RespCompleteImm();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.tkCrystalLeft != null) {
                m.tkCrystalLeft = d.tkCrystalLeft | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespCompleteImm message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespCompleteImm
         * @static
         * @param {farm.RespCompleteImm} m RespCompleteImm
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespCompleteImm.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.tkCrystalLeft = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.tkCrystalLeft != null && m.hasOwnProperty("tkCrystalLeft")) {
                d.tkCrystalLeft = m.tkCrystalLeft;
            }
            return d;
        };

        /**
         * Converts this RespCompleteImm to JSON.
         * @function toJSON
         * @memberof farm.RespCompleteImm
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespCompleteImm.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespCompleteImm;
    })();

    farm.ReqNoBodyParam = (function() {

        /**
         * Properties of a ReqNoBodyParam.
         * @memberof farm
         * @interface IReqNoBodyParam
         */

        /**
         * Constructs a new ReqNoBodyParam.
         * @memberof farm
         * @classdesc Represents a ReqNoBodyParam.
         * @implements IReqNoBodyParam
         * @constructor
         * @param {farm.IReqNoBodyParam=} [p] Properties to set
         */
        function ReqNoBodyParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified ReqNoBodyParam message. Does not implicitly {@link farm.ReqNoBodyParam.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqNoBodyParam
         * @static
         * @param {farm.IReqNoBodyParam} m ReqNoBodyParam message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNoBodyParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a ReqNoBodyParam message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqNoBodyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqNoBodyParam} ReqNoBodyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNoBodyParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqNoBodyParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqNoBodyParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqNoBodyParam
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqNoBodyParam} ReqNoBodyParam
         */
        ReqNoBodyParam.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqNoBodyParam)
                return d;
            return new $root.farm.ReqNoBodyParam();
        };

        /**
         * Creates a plain object from a ReqNoBodyParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqNoBodyParam
         * @static
         * @param {farm.ReqNoBodyParam} m ReqNoBodyParam
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNoBodyParam.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqNoBodyParam to JSON.
         * @function toJSON
         * @memberof farm.ReqNoBodyParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNoBodyParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNoBodyParam;
    })();

    farm.RespNoBodyParam = (function() {

        /**
         * Properties of a RespNoBodyParam.
         * @memberof farm
         * @interface IRespNoBodyParam
         */

        /**
         * Constructs a new RespNoBodyParam.
         * @memberof farm
         * @classdesc Represents a RespNoBodyParam.
         * @implements IRespNoBodyParam
         * @constructor
         * @param {farm.IRespNoBodyParam=} [p] Properties to set
         */
        function RespNoBodyParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified RespNoBodyParam message. Does not implicitly {@link farm.RespNoBodyParam.verify|verify} messages.
         * @function encode
         * @memberof farm.RespNoBodyParam
         * @static
         * @param {farm.IRespNoBodyParam} m RespNoBodyParam message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespNoBodyParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a RespNoBodyParam message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespNoBodyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespNoBodyParam} RespNoBodyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespNoBodyParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespNoBodyParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespNoBodyParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespNoBodyParam
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespNoBodyParam} RespNoBodyParam
         */
        RespNoBodyParam.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespNoBodyParam)
                return d;
            return new $root.farm.RespNoBodyParam();
        };

        /**
         * Creates a plain object from a RespNoBodyParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespNoBodyParam
         * @static
         * @param {farm.RespNoBodyParam} m RespNoBodyParam
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespNoBodyParam.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RespNoBodyParam to JSON.
         * @function toJSON
         * @memberof farm.RespNoBodyParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespNoBodyParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespNoBodyParam;
    })();

    farm.RespManorHeartInfo = (function() {

        /**
         * Properties of a RespManorHeartInfo.
         * @memberof farm
         * @interface IRespManorHeartInfo
         * @property {number|Long|null} [id] RespManorHeartInfo id
         * @property {string|null} [nike_name] RespManorHeartInfo nike_name
         * @property {string|null} [user_code] RespManorHeartInfo user_code
         * @property {number|Long|null} [tk_gold] RespManorHeartInfo tk_gold
         * @property {number|Long|null} [tk_love] RespManorHeartInfo tk_love
         * @property {number|Long|null} [tk_crystal] RespManorHeartInfo tk_crystal
         * @property {number|null} [avatar_id] RespManorHeartInfo avatar_id
         * @property {Array.<farm.IManorHeartBuildingListItem>|null} [buildings] RespManorHeartInfo buildings
         */

        /**
         * Constructs a new RespManorHeartInfo.
         * @memberof farm
         * @classdesc Represents a RespManorHeartInfo.
         * @implements IRespManorHeartInfo
         * @constructor
         * @param {farm.IRespManorHeartInfo=} [p] Properties to set
         */
        function RespManorHeartInfo(p) {
            this.buildings = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespManorHeartInfo id.
         * @member {number|Long} id
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespManorHeartInfo nike_name.
         * @member {string} nike_name
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.nike_name = "";

        /**
         * RespManorHeartInfo user_code.
         * @member {string} user_code
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.user_code = "";

        /**
         * RespManorHeartInfo tk_gold.
         * @member {number|Long} tk_gold
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.tk_gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespManorHeartInfo tk_love.
         * @member {number|Long} tk_love
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.tk_love = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespManorHeartInfo tk_crystal.
         * @member {number|Long} tk_crystal
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.tk_crystal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespManorHeartInfo avatar_id.
         * @member {number} avatar_id
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.avatar_id = 0;

        /**
         * RespManorHeartInfo buildings.
         * @member {Array.<farm.IManorHeartBuildingListItem>} buildings
         * @memberof farm.RespManorHeartInfo
         * @instance
         */
        RespManorHeartInfo.prototype.buildings = $util.emptyArray;

        /**
         * Encodes the specified RespManorHeartInfo message. Does not implicitly {@link farm.RespManorHeartInfo.verify|verify} messages.
         * @function encode
         * @memberof farm.RespManorHeartInfo
         * @static
         * @param {farm.IRespManorHeartInfo} m RespManorHeartInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespManorHeartInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.nike_name != null && Object.hasOwnProperty.call(m, "nike_name"))
                w.uint32(18).string(m.nike_name);
            if (m.user_code != null && Object.hasOwnProperty.call(m, "user_code"))
                w.uint32(26).string(m.user_code);
            if (m.tk_gold != null && Object.hasOwnProperty.call(m, "tk_gold"))
                w.uint32(32).int64(m.tk_gold);
            if (m.tk_love != null && Object.hasOwnProperty.call(m, "tk_love"))
                w.uint32(40).int64(m.tk_love);
            if (m.tk_crystal != null && Object.hasOwnProperty.call(m, "tk_crystal"))
                w.uint32(48).int64(m.tk_crystal);
            if (m.avatar_id != null && Object.hasOwnProperty.call(m, "avatar_id"))
                w.uint32(56).int32(m.avatar_id);
            if (m.buildings != null && m.buildings.length) {
                for (var i = 0; i < m.buildings.length; ++i)
                    $root.farm.ManorHeartBuildingListItem.encode(m.buildings[i], w.uint32(82).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespManorHeartInfo message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespManorHeartInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespManorHeartInfo} RespManorHeartInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespManorHeartInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespManorHeartInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.nike_name = r.string();
                    break;
                case 3:
                    m.user_code = r.string();
                    break;
                case 4:
                    m.tk_gold = r.int64();
                    break;
                case 5:
                    m.tk_love = r.int64();
                    break;
                case 6:
                    m.tk_crystal = r.int64();
                    break;
                case 7:
                    m.avatar_id = r.int32();
                    break;
                case 10:
                    if (!(m.buildings && m.buildings.length))
                        m.buildings = [];
                    m.buildings.push($root.farm.ManorHeartBuildingListItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespManorHeartInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespManorHeartInfo
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespManorHeartInfo} RespManorHeartInfo
         */
        RespManorHeartInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespManorHeartInfo)
                return d;
            var m = new $root.farm.RespManorHeartInfo();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.nike_name != null) {
                m.nike_name = String(d.nike_name);
            }
            if (d.user_code != null) {
                m.user_code = String(d.user_code);
            }
            if (d.tk_gold != null) {
                if ($util.Long)
                    (m.tk_gold = $util.Long.fromValue(d.tk_gold)).unsigned = false;
                else if (typeof d.tk_gold === "string")
                    m.tk_gold = parseInt(d.tk_gold, 10);
                else if (typeof d.tk_gold === "number")
                    m.tk_gold = d.tk_gold;
                else if (typeof d.tk_gold === "object")
                    m.tk_gold = new $util.LongBits(d.tk_gold.low >>> 0, d.tk_gold.high >>> 0).toNumber();
            }
            if (d.tk_love != null) {
                if ($util.Long)
                    (m.tk_love = $util.Long.fromValue(d.tk_love)).unsigned = false;
                else if (typeof d.tk_love === "string")
                    m.tk_love = parseInt(d.tk_love, 10);
                else if (typeof d.tk_love === "number")
                    m.tk_love = d.tk_love;
                else if (typeof d.tk_love === "object")
                    m.tk_love = new $util.LongBits(d.tk_love.low >>> 0, d.tk_love.high >>> 0).toNumber();
            }
            if (d.tk_crystal != null) {
                if ($util.Long)
                    (m.tk_crystal = $util.Long.fromValue(d.tk_crystal)).unsigned = false;
                else if (typeof d.tk_crystal === "string")
                    m.tk_crystal = parseInt(d.tk_crystal, 10);
                else if (typeof d.tk_crystal === "number")
                    m.tk_crystal = d.tk_crystal;
                else if (typeof d.tk_crystal === "object")
                    m.tk_crystal = new $util.LongBits(d.tk_crystal.low >>> 0, d.tk_crystal.high >>> 0).toNumber();
            }
            if (d.avatar_id != null) {
                m.avatar_id = d.avatar_id | 0;
            }
            if (d.buildings) {
                if (!Array.isArray(d.buildings))
                    throw TypeError(".farm.RespManorHeartInfo.buildings: array expected");
                m.buildings = [];
                for (var i = 0; i < d.buildings.length; ++i) {
                    if (typeof d.buildings[i] !== "object")
                        throw TypeError(".farm.RespManorHeartInfo.buildings: object expected");
                    m.buildings[i] = $root.farm.ManorHeartBuildingListItem.fromObject(d.buildings[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespManorHeartInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespManorHeartInfo
         * @static
         * @param {farm.RespManorHeartInfo} m RespManorHeartInfo
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespManorHeartInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.buildings = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.nike_name = "";
                d.user_code = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.tk_gold = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.tk_gold = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.tk_love = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.tk_love = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.tk_crystal = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.tk_crystal = o.longs === String ? "0" : 0;
                d.avatar_id = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.nike_name != null && m.hasOwnProperty("nike_name")) {
                d.nike_name = m.nike_name;
            }
            if (m.user_code != null && m.hasOwnProperty("user_code")) {
                d.user_code = m.user_code;
            }
            if (m.tk_gold != null && m.hasOwnProperty("tk_gold")) {
                if (typeof m.tk_gold === "number")
                    d.tk_gold = o.longs === String ? String(m.tk_gold) : m.tk_gold;
                else
                    d.tk_gold = o.longs === String ? $util.Long.prototype.toString.call(m.tk_gold) : o.longs === Number ? new $util.LongBits(m.tk_gold.low >>> 0, m.tk_gold.high >>> 0).toNumber() : m.tk_gold;
            }
            if (m.tk_love != null && m.hasOwnProperty("tk_love")) {
                if (typeof m.tk_love === "number")
                    d.tk_love = o.longs === String ? String(m.tk_love) : m.tk_love;
                else
                    d.tk_love = o.longs === String ? $util.Long.prototype.toString.call(m.tk_love) : o.longs === Number ? new $util.LongBits(m.tk_love.low >>> 0, m.tk_love.high >>> 0).toNumber() : m.tk_love;
            }
            if (m.tk_crystal != null && m.hasOwnProperty("tk_crystal")) {
                if (typeof m.tk_crystal === "number")
                    d.tk_crystal = o.longs === String ? String(m.tk_crystal) : m.tk_crystal;
                else
                    d.tk_crystal = o.longs === String ? $util.Long.prototype.toString.call(m.tk_crystal) : o.longs === Number ? new $util.LongBits(m.tk_crystal.low >>> 0, m.tk_crystal.high >>> 0).toNumber() : m.tk_crystal;
            }
            if (m.avatar_id != null && m.hasOwnProperty("avatar_id")) {
                d.avatar_id = m.avatar_id;
            }
            if (m.buildings && m.buildings.length) {
                d.buildings = [];
                for (var j = 0; j < m.buildings.length; ++j) {
                    d.buildings[j] = $root.farm.ManorHeartBuildingListItem.toObject(m.buildings[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespManorHeartInfo to JSON.
         * @function toJSON
         * @memberof farm.RespManorHeartInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespManorHeartInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespManorHeartInfo;
    })();

    farm.ManorHeartBuildingListItem = (function() {

        /**
         * Properties of a ManorHeartBuildingListItem.
         * @memberof farm
         * @interface IManorHeartBuildingListItem
         * @property {number|Long|null} [id] ManorHeartBuildingListItem id
         * @property {number|null} [configID] ManorHeartBuildingListItem configID
         */

        /**
         * Constructs a new ManorHeartBuildingListItem.
         * @memberof farm
         * @classdesc Represents a ManorHeartBuildingListItem.
         * @implements IManorHeartBuildingListItem
         * @constructor
         * @param {farm.IManorHeartBuildingListItem=} [p] Properties to set
         */
        function ManorHeartBuildingListItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ManorHeartBuildingListItem id.
         * @member {number|Long} id
         * @memberof farm.ManorHeartBuildingListItem
         * @instance
         */
        ManorHeartBuildingListItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ManorHeartBuildingListItem configID.
         * @member {number} configID
         * @memberof farm.ManorHeartBuildingListItem
         * @instance
         */
        ManorHeartBuildingListItem.prototype.configID = 0;

        /**
         * Encodes the specified ManorHeartBuildingListItem message. Does not implicitly {@link farm.ManorHeartBuildingListItem.verify|verify} messages.
         * @function encode
         * @memberof farm.ManorHeartBuildingListItem
         * @static
         * @param {farm.IManorHeartBuildingListItem} m ManorHeartBuildingListItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ManorHeartBuildingListItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.configID != null && Object.hasOwnProperty.call(m, "configID"))
                w.uint32(16).int32(m.configID);
            return w;
        };

        /**
         * Decodes a ManorHeartBuildingListItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ManorHeartBuildingListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ManorHeartBuildingListItem} ManorHeartBuildingListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ManorHeartBuildingListItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ManorHeartBuildingListItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.configID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ManorHeartBuildingListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ManorHeartBuildingListItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ManorHeartBuildingListItem} ManorHeartBuildingListItem
         */
        ManorHeartBuildingListItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ManorHeartBuildingListItem)
                return d;
            var m = new $root.farm.ManorHeartBuildingListItem();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.configID != null) {
                m.configID = d.configID | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ManorHeartBuildingListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ManorHeartBuildingListItem
         * @static
         * @param {farm.ManorHeartBuildingListItem} m ManorHeartBuildingListItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ManorHeartBuildingListItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.configID = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.configID != null && m.hasOwnProperty("configID")) {
                d.configID = m.configID;
            }
            return d;
        };

        /**
         * Converts this ManorHeartBuildingListItem to JSON.
         * @function toJSON
         * @memberof farm.ManorHeartBuildingListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ManorHeartBuildingListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ManorHeartBuildingListItem;
    })();

    farm.RespUserAvatars = (function() {

        /**
         * Properties of a RespUserAvatars.
         * @memberof farm
         * @interface IRespUserAvatars
         * @property {Array.<number>|null} [avatarIds] RespUserAvatars avatarIds
         */

        /**
         * Constructs a new RespUserAvatars.
         * @memberof farm
         * @classdesc Represents a RespUserAvatars.
         * @implements IRespUserAvatars
         * @constructor
         * @param {farm.IRespUserAvatars=} [p] Properties to set
         */
        function RespUserAvatars(p) {
            this.avatarIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespUserAvatars avatarIds.
         * @member {Array.<number>} avatarIds
         * @memberof farm.RespUserAvatars
         * @instance
         */
        RespUserAvatars.prototype.avatarIds = $util.emptyArray;

        /**
         * Encodes the specified RespUserAvatars message. Does not implicitly {@link farm.RespUserAvatars.verify|verify} messages.
         * @function encode
         * @memberof farm.RespUserAvatars
         * @static
         * @param {farm.IRespUserAvatars} m RespUserAvatars message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUserAvatars.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.avatarIds != null && m.avatarIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.avatarIds.length; ++i)
                    w.int32(m.avatarIds[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespUserAvatars message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespUserAvatars
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespUserAvatars} RespUserAvatars
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUserAvatars.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespUserAvatars();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.avatarIds && m.avatarIds.length))
                        m.avatarIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.avatarIds.push(r.int32());
                    } else
                        m.avatarIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespUserAvatars message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespUserAvatars
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespUserAvatars} RespUserAvatars
         */
        RespUserAvatars.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespUserAvatars)
                return d;
            var m = new $root.farm.RespUserAvatars();
            if (d.avatarIds) {
                if (!Array.isArray(d.avatarIds))
                    throw TypeError(".farm.RespUserAvatars.avatarIds: array expected");
                m.avatarIds = [];
                for (var i = 0; i < d.avatarIds.length; ++i) {
                    m.avatarIds[i] = d.avatarIds[i] | 0;
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespUserAvatars message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespUserAvatars
         * @static
         * @param {farm.RespUserAvatars} m RespUserAvatars
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespUserAvatars.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.avatarIds = [];
            }
            if (m.avatarIds && m.avatarIds.length) {
                d.avatarIds = [];
                for (var j = 0; j < m.avatarIds.length; ++j) {
                    d.avatarIds[j] = m.avatarIds[j];
                }
            }
            return d;
        };

        /**
         * Converts this RespUserAvatars to JSON.
         * @function toJSON
         * @memberof farm.RespUserAvatars
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespUserAvatars.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespUserAvatars;
    })();

    farm.ReqUpdateAvatar = (function() {

        /**
         * Properties of a ReqUpdateAvatar.
         * @memberof farm
         * @interface IReqUpdateAvatar
         * @property {number|null} [id] ReqUpdateAvatar id
         */

        /**
         * Constructs a new ReqUpdateAvatar.
         * @memberof farm
         * @classdesc Represents a ReqUpdateAvatar.
         * @implements IReqUpdateAvatar
         * @constructor
         * @param {farm.IReqUpdateAvatar=} [p] Properties to set
         */
        function ReqUpdateAvatar(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUpdateAvatar id.
         * @member {number} id
         * @memberof farm.ReqUpdateAvatar
         * @instance
         */
        ReqUpdateAvatar.prototype.id = 0;

        /**
         * Encodes the specified ReqUpdateAvatar message. Does not implicitly {@link farm.ReqUpdateAvatar.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqUpdateAvatar
         * @static
         * @param {farm.IReqUpdateAvatar} m ReqUpdateAvatar message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUpdateAvatar.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            return w;
        };

        /**
         * Decodes a ReqUpdateAvatar message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqUpdateAvatar
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqUpdateAvatar} ReqUpdateAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateAvatar.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqUpdateAvatar();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqUpdateAvatar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqUpdateAvatar
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqUpdateAvatar} ReqUpdateAvatar
         */
        ReqUpdateAvatar.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqUpdateAvatar)
                return d;
            var m = new $root.farm.ReqUpdateAvatar();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqUpdateAvatar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqUpdateAvatar
         * @static
         * @param {farm.ReqUpdateAvatar} m ReqUpdateAvatar
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUpdateAvatar.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.id = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            return d;
        };

        /**
         * Converts this ReqUpdateAvatar to JSON.
         * @function toJSON
         * @memberof farm.ReqUpdateAvatar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUpdateAvatar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUpdateAvatar;
    })();

    farm.RespUpdateAvatar = (function() {

        /**
         * Properties of a RespUpdateAvatar.
         * @memberof farm
         * @interface IRespUpdateAvatar
         * @property {number|null} [id] RespUpdateAvatar id
         */

        /**
         * Constructs a new RespUpdateAvatar.
         * @memberof farm
         * @classdesc Represents a RespUpdateAvatar.
         * @implements IRespUpdateAvatar
         * @constructor
         * @param {farm.IRespUpdateAvatar=} [p] Properties to set
         */
        function RespUpdateAvatar(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespUpdateAvatar id.
         * @member {number} id
         * @memberof farm.RespUpdateAvatar
         * @instance
         */
        RespUpdateAvatar.prototype.id = 0;

        /**
         * Encodes the specified RespUpdateAvatar message. Does not implicitly {@link farm.RespUpdateAvatar.verify|verify} messages.
         * @function encode
         * @memberof farm.RespUpdateAvatar
         * @static
         * @param {farm.IRespUpdateAvatar} m RespUpdateAvatar message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUpdateAvatar.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            return w;
        };

        /**
         * Decodes a RespUpdateAvatar message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespUpdateAvatar
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespUpdateAvatar} RespUpdateAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUpdateAvatar.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespUpdateAvatar();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespUpdateAvatar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespUpdateAvatar
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespUpdateAvatar} RespUpdateAvatar
         */
        RespUpdateAvatar.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespUpdateAvatar)
                return d;
            var m = new $root.farm.RespUpdateAvatar();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespUpdateAvatar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespUpdateAvatar
         * @static
         * @param {farm.RespUpdateAvatar} m RespUpdateAvatar
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespUpdateAvatar.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.id = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            return d;
        };

        /**
         * Converts this RespUpdateAvatar to JSON.
         * @function toJSON
         * @memberof farm.RespUpdateAvatar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespUpdateAvatar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespUpdateAvatar;
    })();

    farm.ReqUpdateNickName = (function() {

        /**
         * Properties of a ReqUpdateNickName.
         * @memberof farm
         * @interface IReqUpdateNickName
         * @property {string|null} [nick_name] ReqUpdateNickName nick_name
         */

        /**
         * Constructs a new ReqUpdateNickName.
         * @memberof farm
         * @classdesc Represents a ReqUpdateNickName.
         * @implements IReqUpdateNickName
         * @constructor
         * @param {farm.IReqUpdateNickName=} [p] Properties to set
         */
        function ReqUpdateNickName(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUpdateNickName nick_name.
         * @member {string} nick_name
         * @memberof farm.ReqUpdateNickName
         * @instance
         */
        ReqUpdateNickName.prototype.nick_name = "";

        /**
         * Encodes the specified ReqUpdateNickName message. Does not implicitly {@link farm.ReqUpdateNickName.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqUpdateNickName
         * @static
         * @param {farm.IReqUpdateNickName} m ReqUpdateNickName message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUpdateNickName.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nick_name != null && Object.hasOwnProperty.call(m, "nick_name"))
                w.uint32(10).string(m.nick_name);
            return w;
        };

        /**
         * Decodes a ReqUpdateNickName message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqUpdateNickName
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqUpdateNickName} ReqUpdateNickName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateNickName.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqUpdateNickName();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.nick_name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqUpdateNickName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqUpdateNickName
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqUpdateNickName} ReqUpdateNickName
         */
        ReqUpdateNickName.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqUpdateNickName)
                return d;
            var m = new $root.farm.ReqUpdateNickName();
            if (d.nick_name != null) {
                m.nick_name = String(d.nick_name);
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqUpdateNickName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqUpdateNickName
         * @static
         * @param {farm.ReqUpdateNickName} m ReqUpdateNickName
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUpdateNickName.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.nick_name = "";
            }
            if (m.nick_name != null && m.hasOwnProperty("nick_name")) {
                d.nick_name = m.nick_name;
            }
            return d;
        };

        /**
         * Converts this ReqUpdateNickName to JSON.
         * @function toJSON
         * @memberof farm.ReqUpdateNickName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUpdateNickName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUpdateNickName;
    })();

    farm.RespUpdateNickName = (function() {

        /**
         * Properties of a RespUpdateNickName.
         * @memberof farm
         * @interface IRespUpdateNickName
         * @property {string|null} [nick_name] RespUpdateNickName nick_name
         */

        /**
         * Constructs a new RespUpdateNickName.
         * @memberof farm
         * @classdesc Represents a RespUpdateNickName.
         * @implements IRespUpdateNickName
         * @constructor
         * @param {farm.IRespUpdateNickName=} [p] Properties to set
         */
        function RespUpdateNickName(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespUpdateNickName nick_name.
         * @member {string} nick_name
         * @memberof farm.RespUpdateNickName
         * @instance
         */
        RespUpdateNickName.prototype.nick_name = "";

        /**
         * Encodes the specified RespUpdateNickName message. Does not implicitly {@link farm.RespUpdateNickName.verify|verify} messages.
         * @function encode
         * @memberof farm.RespUpdateNickName
         * @static
         * @param {farm.IRespUpdateNickName} m RespUpdateNickName message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUpdateNickName.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nick_name != null && Object.hasOwnProperty.call(m, "nick_name"))
                w.uint32(10).string(m.nick_name);
            return w;
        };

        /**
         * Decodes a RespUpdateNickName message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespUpdateNickName
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespUpdateNickName} RespUpdateNickName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUpdateNickName.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespUpdateNickName();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.nick_name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespUpdateNickName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespUpdateNickName
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespUpdateNickName} RespUpdateNickName
         */
        RespUpdateNickName.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespUpdateNickName)
                return d;
            var m = new $root.farm.RespUpdateNickName();
            if (d.nick_name != null) {
                m.nick_name = String(d.nick_name);
            }
            return m;
        };

        /**
         * Creates a plain object from a RespUpdateNickName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespUpdateNickName
         * @static
         * @param {farm.RespUpdateNickName} m RespUpdateNickName
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespUpdateNickName.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.nick_name = "";
            }
            if (m.nick_name != null && m.hasOwnProperty("nick_name")) {
                d.nick_name = m.nick_name;
            }
            return d;
        };

        /**
         * Converts this RespUpdateNickName to JSON.
         * @function toJSON
         * @memberof farm.RespUpdateNickName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespUpdateNickName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespUpdateNickName;
    })();

    farm.RespBarnInfo = (function() {

        /**
         * Properties of a RespBarnInfo.
         * @memberof farm
         * @interface IRespBarnInfo
         * @property {number|Long|null} [id] RespBarnInfo id
         * @property {number|null} [total_capacity] RespBarnInfo total_capacity
         * @property {Array.<farm.IBarnCropItem>|null} [crop_items] RespBarnInfo crop_items
         */

        /**
         * Constructs a new RespBarnInfo.
         * @memberof farm
         * @classdesc Represents a RespBarnInfo.
         * @implements IRespBarnInfo
         * @constructor
         * @param {farm.IRespBarnInfo=} [p] Properties to set
         */
        function RespBarnInfo(p) {
            this.crop_items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespBarnInfo id.
         * @member {number|Long} id
         * @memberof farm.RespBarnInfo
         * @instance
         */
        RespBarnInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespBarnInfo total_capacity.
         * @member {number} total_capacity
         * @memberof farm.RespBarnInfo
         * @instance
         */
        RespBarnInfo.prototype.total_capacity = 0;

        /**
         * RespBarnInfo crop_items.
         * @member {Array.<farm.IBarnCropItem>} crop_items
         * @memberof farm.RespBarnInfo
         * @instance
         */
        RespBarnInfo.prototype.crop_items = $util.emptyArray;

        /**
         * Encodes the specified RespBarnInfo message. Does not implicitly {@link farm.RespBarnInfo.verify|verify} messages.
         * @function encode
         * @memberof farm.RespBarnInfo
         * @static
         * @param {farm.IRespBarnInfo} m RespBarnInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBarnInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.total_capacity != null && Object.hasOwnProperty.call(m, "total_capacity"))
                w.uint32(16).int32(m.total_capacity);
            if (m.crop_items != null && m.crop_items.length) {
                for (var i = 0; i < m.crop_items.length; ++i)
                    $root.farm.BarnCropItem.encode(m.crop_items[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespBarnInfo message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespBarnInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespBarnInfo} RespBarnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBarnInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespBarnInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.total_capacity = r.int32();
                    break;
                case 3:
                    if (!(m.crop_items && m.crop_items.length))
                        m.crop_items = [];
                    m.crop_items.push($root.farm.BarnCropItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespBarnInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespBarnInfo
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespBarnInfo} RespBarnInfo
         */
        RespBarnInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespBarnInfo)
                return d;
            var m = new $root.farm.RespBarnInfo();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.total_capacity != null) {
                m.total_capacity = d.total_capacity | 0;
            }
            if (d.crop_items) {
                if (!Array.isArray(d.crop_items))
                    throw TypeError(".farm.RespBarnInfo.crop_items: array expected");
                m.crop_items = [];
                for (var i = 0; i < d.crop_items.length; ++i) {
                    if (typeof d.crop_items[i] !== "object")
                        throw TypeError(".farm.RespBarnInfo.crop_items: object expected");
                    m.crop_items[i] = $root.farm.BarnCropItem.fromObject(d.crop_items[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespBarnInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespBarnInfo
         * @static
         * @param {farm.RespBarnInfo} m RespBarnInfo
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespBarnInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.crop_items = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.total_capacity = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.total_capacity != null && m.hasOwnProperty("total_capacity")) {
                d.total_capacity = m.total_capacity;
            }
            if (m.crop_items && m.crop_items.length) {
                d.crop_items = [];
                for (var j = 0; j < m.crop_items.length; ++j) {
                    d.crop_items[j] = $root.farm.BarnCropItem.toObject(m.crop_items[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespBarnInfo to JSON.
         * @function toJSON
         * @memberof farm.RespBarnInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespBarnInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespBarnInfo;
    })();

    farm.BarnCropItem = (function() {

        /**
         * Properties of a BarnCropItem.
         * @memberof farm
         * @interface IBarnCropItem
         * @property {number|Long|null} [id] BarnCropItem id
         * @property {number|null} [configID] BarnCropItem configID
         * @property {number|null} [total_num] BarnCropItem total_num
         */

        /**
         * Constructs a new BarnCropItem.
         * @memberof farm
         * @classdesc Represents a BarnCropItem.
         * @implements IBarnCropItem
         * @constructor
         * @param {farm.IBarnCropItem=} [p] Properties to set
         */
        function BarnCropItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BarnCropItem id.
         * @member {number|Long} id
         * @memberof farm.BarnCropItem
         * @instance
         */
        BarnCropItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BarnCropItem configID.
         * @member {number} configID
         * @memberof farm.BarnCropItem
         * @instance
         */
        BarnCropItem.prototype.configID = 0;

        /**
         * BarnCropItem total_num.
         * @member {number} total_num
         * @memberof farm.BarnCropItem
         * @instance
         */
        BarnCropItem.prototype.total_num = 0;

        /**
         * Encodes the specified BarnCropItem message. Does not implicitly {@link farm.BarnCropItem.verify|verify} messages.
         * @function encode
         * @memberof farm.BarnCropItem
         * @static
         * @param {farm.IBarnCropItem} m BarnCropItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarnCropItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.configID != null && Object.hasOwnProperty.call(m, "configID"))
                w.uint32(16).int32(m.configID);
            if (m.total_num != null && Object.hasOwnProperty.call(m, "total_num"))
                w.uint32(24).int32(m.total_num);
            return w;
        };

        /**
         * Decodes a BarnCropItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.BarnCropItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.BarnCropItem} BarnCropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarnCropItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.BarnCropItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.configID = r.int32();
                    break;
                case 3:
                    m.total_num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a BarnCropItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.BarnCropItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.BarnCropItem} BarnCropItem
         */
        BarnCropItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.BarnCropItem)
                return d;
            var m = new $root.farm.BarnCropItem();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.configID != null) {
                m.configID = d.configID | 0;
            }
            if (d.total_num != null) {
                m.total_num = d.total_num | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a BarnCropItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.BarnCropItem
         * @static
         * @param {farm.BarnCropItem} m BarnCropItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarnCropItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.configID = 0;
                d.total_num = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.configID != null && m.hasOwnProperty("configID")) {
                d.configID = m.configID;
            }
            if (m.total_num != null && m.hasOwnProperty("total_num")) {
                d.total_num = m.total_num;
            }
            return d;
        };

        /**
         * Converts this BarnCropItem to JSON.
         * @function toJSON
         * @memberof farm.BarnCropItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BarnCropItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BarnCropItem;
    })();

    farm.ReqBarnSell = (function() {

        /**
         * Properties of a ReqBarnSell.
         * @memberof farm
         * @interface IReqBarnSell
         * @property {number|Long|null} [id] ReqBarnSell id
         * @property {number|null} [num] ReqBarnSell num
         */

        /**
         * Constructs a new ReqBarnSell.
         * @memberof farm
         * @classdesc Represents a ReqBarnSell.
         * @implements IReqBarnSell
         * @constructor
         * @param {farm.IReqBarnSell=} [p] Properties to set
         */
        function ReqBarnSell(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqBarnSell id.
         * @member {number|Long} id
         * @memberof farm.ReqBarnSell
         * @instance
         */
        ReqBarnSell.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqBarnSell num.
         * @member {number} num
         * @memberof farm.ReqBarnSell
         * @instance
         */
        ReqBarnSell.prototype.num = 0;

        /**
         * Encodes the specified ReqBarnSell message. Does not implicitly {@link farm.ReqBarnSell.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqBarnSell
         * @static
         * @param {farm.IReqBarnSell} m ReqBarnSell message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBarnSell.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(16).int32(m.num);
            return w;
        };

        /**
         * Decodes a ReqBarnSell message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqBarnSell
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqBarnSell} ReqBarnSell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBarnSell.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqBarnSell();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqBarnSell message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqBarnSell
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqBarnSell} ReqBarnSell
         */
        ReqBarnSell.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqBarnSell)
                return d;
            var m = new $root.farm.ReqBarnSell();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.num != null) {
                m.num = d.num | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqBarnSell message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqBarnSell
         * @static
         * @param {farm.ReqBarnSell} m ReqBarnSell
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqBarnSell.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.num = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.num != null && m.hasOwnProperty("num")) {
                d.num = m.num;
            }
            return d;
        };

        /**
         * Converts this ReqBarnSell to JSON.
         * @function toJSON
         * @memberof farm.ReqBarnSell
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqBarnSell.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqBarnSell;
    })();

    farm.RespBarnSell = (function() {

        /**
         * Properties of a RespBarnSell.
         * @memberof farm
         * @interface IRespBarnSell
         * @property {number|Long|null} [id] RespBarnSell id
         * @property {number|null} [num] RespBarnSell num
         * @property {number|Long|null} [tk_gold] RespBarnSell tk_gold
         */

        /**
         * Constructs a new RespBarnSell.
         * @memberof farm
         * @classdesc Represents a RespBarnSell.
         * @implements IRespBarnSell
         * @constructor
         * @param {farm.IRespBarnSell=} [p] Properties to set
         */
        function RespBarnSell(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespBarnSell id.
         * @member {number|Long} id
         * @memberof farm.RespBarnSell
         * @instance
         */
        RespBarnSell.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespBarnSell num.
         * @member {number} num
         * @memberof farm.RespBarnSell
         * @instance
         */
        RespBarnSell.prototype.num = 0;

        /**
         * RespBarnSell tk_gold.
         * @member {number|Long} tk_gold
         * @memberof farm.RespBarnSell
         * @instance
         */
        RespBarnSell.prototype.tk_gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified RespBarnSell message. Does not implicitly {@link farm.RespBarnSell.verify|verify} messages.
         * @function encode
         * @memberof farm.RespBarnSell
         * @static
         * @param {farm.IRespBarnSell} m RespBarnSell message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBarnSell.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(16).int32(m.num);
            if (m.tk_gold != null && Object.hasOwnProperty.call(m, "tk_gold"))
                w.uint32(24).int64(m.tk_gold);
            return w;
        };

        /**
         * Decodes a RespBarnSell message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespBarnSell
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespBarnSell} RespBarnSell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBarnSell.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespBarnSell();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.num = r.int32();
                    break;
                case 3:
                    m.tk_gold = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespBarnSell message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespBarnSell
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespBarnSell} RespBarnSell
         */
        RespBarnSell.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespBarnSell)
                return d;
            var m = new $root.farm.RespBarnSell();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.num != null) {
                m.num = d.num | 0;
            }
            if (d.tk_gold != null) {
                if ($util.Long)
                    (m.tk_gold = $util.Long.fromValue(d.tk_gold)).unsigned = false;
                else if (typeof d.tk_gold === "string")
                    m.tk_gold = parseInt(d.tk_gold, 10);
                else if (typeof d.tk_gold === "number")
                    m.tk_gold = d.tk_gold;
                else if (typeof d.tk_gold === "object")
                    m.tk_gold = new $util.LongBits(d.tk_gold.low >>> 0, d.tk_gold.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a RespBarnSell message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespBarnSell
         * @static
         * @param {farm.RespBarnSell} m RespBarnSell
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespBarnSell.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.num = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.tk_gold = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.tk_gold = o.longs === String ? "0" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.num != null && m.hasOwnProperty("num")) {
                d.num = m.num;
            }
            if (m.tk_gold != null && m.hasOwnProperty("tk_gold")) {
                if (typeof m.tk_gold === "number")
                    d.tk_gold = o.longs === String ? String(m.tk_gold) : m.tk_gold;
                else
                    d.tk_gold = o.longs === String ? $util.Long.prototype.toString.call(m.tk_gold) : o.longs === Number ? new $util.LongBits(m.tk_gold.low >>> 0, m.tk_gold.high >>> 0).toNumber() : m.tk_gold;
            }
            return d;
        };

        /**
         * Converts this RespBarnSell to JSON.
         * @function toJSON
         * @memberof farm.RespBarnSell
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespBarnSell.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespBarnSell;
    })();

    farm.PropCfgItem = (function() {

        /**
         * Properties of a PropCfgItem.
         * @memberof farm
         * @interface IPropCfgItem
         * @property {number|null} [id] PropCfgItem id
         * @property {string|null} [name] PropCfgItem name
         * @property {number|null} [display] PropCfgItem display
         * @property {number|null} [type] PropCfgItem type
         * @property {string|null} [desc] PropCfgItem desc
         * @property {number|null} [world] PropCfgItem world
         * @property {string|null} [icon_path] PropCfgItem icon_path
         * @property {number|null} [sale_price] PropCfgItem sale_price
         */

        /**
         * Constructs a new PropCfgItem.
         * @memberof farm
         * @classdesc Represents a PropCfgItem.
         * @implements IPropCfgItem
         * @constructor
         * @param {farm.IPropCfgItem=} [p] Properties to set
         */
        function PropCfgItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PropCfgItem id.
         * @member {number} id
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.id = 0;

        /**
         * PropCfgItem name.
         * @member {string} name
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.name = "";

        /**
         * PropCfgItem display.
         * @member {number} display
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.display = 0;

        /**
         * PropCfgItem type.
         * @member {number} type
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.type = 0;

        /**
         * PropCfgItem desc.
         * @member {string} desc
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.desc = "";

        /**
         * PropCfgItem world.
         * @member {number} world
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.world = 0;

        /**
         * PropCfgItem icon_path.
         * @member {string} icon_path
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.icon_path = "";

        /**
         * PropCfgItem sale_price.
         * @member {number} sale_price
         * @memberof farm.PropCfgItem
         * @instance
         */
        PropCfgItem.prototype.sale_price = 0;

        /**
         * Encodes the specified PropCfgItem message. Does not implicitly {@link farm.PropCfgItem.verify|verify} messages.
         * @function encode
         * @memberof farm.PropCfgItem
         * @static
         * @param {farm.IPropCfgItem} m PropCfgItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropCfgItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.display != null && Object.hasOwnProperty.call(m, "display"))
                w.uint32(24).int32(m.display);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(32).int32(m.type);
            if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                w.uint32(42).string(m.desc);
            if (m.world != null && Object.hasOwnProperty.call(m, "world"))
                w.uint32(48).int32(m.world);
            if (m.icon_path != null && Object.hasOwnProperty.call(m, "icon_path"))
                w.uint32(58).string(m.icon_path);
            if (m.sale_price != null && Object.hasOwnProperty.call(m, "sale_price"))
                w.uint32(64).int32(m.sale_price);
            return w;
        };

        /**
         * Decodes a PropCfgItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.PropCfgItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.PropCfgItem} PropCfgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropCfgItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.PropCfgItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.display = r.int32();
                    break;
                case 4:
                    m.type = r.int32();
                    break;
                case 5:
                    m.desc = r.string();
                    break;
                case 6:
                    m.world = r.int32();
                    break;
                case 7:
                    m.icon_path = r.string();
                    break;
                case 8:
                    m.sale_price = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a PropCfgItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.PropCfgItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.PropCfgItem} PropCfgItem
         */
        PropCfgItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.PropCfgItem)
                return d;
            var m = new $root.farm.PropCfgItem();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.display != null) {
                m.display = d.display | 0;
            }
            if (d.type != null) {
                m.type = d.type | 0;
            }
            if (d.desc != null) {
                m.desc = String(d.desc);
            }
            if (d.world != null) {
                m.world = d.world | 0;
            }
            if (d.icon_path != null) {
                m.icon_path = String(d.icon_path);
            }
            if (d.sale_price != null) {
                m.sale_price = d.sale_price | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a PropCfgItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.PropCfgItem
         * @static
         * @param {farm.PropCfgItem} m PropCfgItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PropCfgItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.id = 0;
                d.name = "";
                d.display = 0;
                d.type = 0;
                d.desc = "";
                d.world = 0;
                d.icon_path = "";
                d.sale_price = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
            }
            if (m.display != null && m.hasOwnProperty("display")) {
                d.display = m.display;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = m.type;
            }
            if (m.desc != null && m.hasOwnProperty("desc")) {
                d.desc = m.desc;
            }
            if (m.world != null && m.hasOwnProperty("world")) {
                d.world = m.world;
            }
            if (m.icon_path != null && m.hasOwnProperty("icon_path")) {
                d.icon_path = m.icon_path;
            }
            if (m.sale_price != null && m.hasOwnProperty("sale_price")) {
                d.sale_price = m.sale_price;
            }
            return d;
        };

        /**
         * Converts this PropCfgItem to JSON.
         * @function toJSON
         * @memberof farm.PropCfgItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PropCfgItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PropCfgItem;
    })();

    farm.ConditionItem = (function() {

        /**
         * Properties of a ConditionItem.
         * @memberof farm
         * @interface IConditionItem
         * @property {number|null} [type] ConditionItem type
         * @property {Array.<number>|null} [value] ConditionItem value
         */

        /**
         * Constructs a new ConditionItem.
         * @memberof farm
         * @classdesc Represents a ConditionItem.
         * @implements IConditionItem
         * @constructor
         * @param {farm.IConditionItem=} [p] Properties to set
         */
        function ConditionItem(p) {
            this.value = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ConditionItem type.
         * @member {number} type
         * @memberof farm.ConditionItem
         * @instance
         */
        ConditionItem.prototype.type = 0;

        /**
         * ConditionItem value.
         * @member {Array.<number>} value
         * @memberof farm.ConditionItem
         * @instance
         */
        ConditionItem.prototype.value = $util.emptyArray;

        /**
         * Encodes the specified ConditionItem message. Does not implicitly {@link farm.ConditionItem.verify|verify} messages.
         * @function encode
         * @memberof farm.ConditionItem
         * @static
         * @param {farm.IConditionItem} m ConditionItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConditionItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.value != null && m.value.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.value.length; ++i)
                    w.int32(m.value[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a ConditionItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ConditionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ConditionItem} ConditionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConditionItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ConditionItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.type = r.int32();
                    break;
                case 2:
                    if (!(m.value && m.value.length))
                        m.value = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.value.push(r.int32());
                    } else
                        m.value.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ConditionItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ConditionItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ConditionItem} ConditionItem
         */
        ConditionItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ConditionItem)
                return d;
            var m = new $root.farm.ConditionItem();
            if (d.type != null) {
                m.type = d.type | 0;
            }
            if (d.value) {
                if (!Array.isArray(d.value))
                    throw TypeError(".farm.ConditionItem.value: array expected");
                m.value = [];
                for (var i = 0; i < d.value.length; ++i) {
                    m.value[i] = d.value[i] | 0;
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a ConditionItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ConditionItem
         * @static
         * @param {farm.ConditionItem} m ConditionItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConditionItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.value = [];
            }
            if (o.defaults) {
                d.type = 0;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = m.type;
            }
            if (m.value && m.value.length) {
                d.value = [];
                for (var j = 0; j < m.value.length; ++j) {
                    d.value[j] = m.value[j];
                }
            }
            return d;
        };

        /**
         * Converts this ConditionItem to JSON.
         * @function toJSON
         * @memberof farm.ConditionItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConditionItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConditionItem;
    })();

    farm.Upgrade = (function() {

        /**
         * Properties of an Upgrade.
         * @memberof farm
         * @interface IUpgrade
         * @property {number|null} [level] Upgrade level
         * @property {number|null} [build_dur] Upgrade build_dur
         * @property {Array.<farm.IConditionItem>|null} [build_costs] Upgrade build_costs
         * @property {Array.<farm.IConditionItem>|null} [build_condition] Upgrade build_condition
         * @property {Array.<number>|null} [upgrade_param] Upgrade upgrade_param
         * @property {string|null} [build_desc] Upgrade build_desc
         * @property {string|null} [prefab] Upgrade prefab
         */

        /**
         * Constructs a new Upgrade.
         * @memberof farm
         * @classdesc Represents an Upgrade.
         * @implements IUpgrade
         * @constructor
         * @param {farm.IUpgrade=} [p] Properties to set
         */
        function Upgrade(p) {
            this.build_costs = [];
            this.build_condition = [];
            this.upgrade_param = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Upgrade level.
         * @member {number} level
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.level = 0;

        /**
         * Upgrade build_dur.
         * @member {number} build_dur
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.build_dur = 0;

        /**
         * Upgrade build_costs.
         * @member {Array.<farm.IConditionItem>} build_costs
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.build_costs = $util.emptyArray;

        /**
         * Upgrade build_condition.
         * @member {Array.<farm.IConditionItem>} build_condition
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.build_condition = $util.emptyArray;

        /**
         * Upgrade upgrade_param.
         * @member {Array.<number>} upgrade_param
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.upgrade_param = $util.emptyArray;

        /**
         * Upgrade build_desc.
         * @member {string} build_desc
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.build_desc = "";

        /**
         * Upgrade prefab.
         * @member {string} prefab
         * @memberof farm.Upgrade
         * @instance
         */
        Upgrade.prototype.prefab = "";

        /**
         * Encodes the specified Upgrade message. Does not implicitly {@link farm.Upgrade.verify|verify} messages.
         * @function encode
         * @memberof farm.Upgrade
         * @static
         * @param {farm.IUpgrade} m Upgrade message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Upgrade.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.level != null && Object.hasOwnProperty.call(m, "level"))
                w.uint32(8).int32(m.level);
            if (m.build_dur != null && Object.hasOwnProperty.call(m, "build_dur"))
                w.uint32(16).int32(m.build_dur);
            if (m.build_costs != null && m.build_costs.length) {
                for (var i = 0; i < m.build_costs.length; ++i)
                    $root.farm.ConditionItem.encode(m.build_costs[i], w.uint32(26).fork()).ldelim();
            }
            if (m.build_condition != null && m.build_condition.length) {
                for (var i = 0; i < m.build_condition.length; ++i)
                    $root.farm.ConditionItem.encode(m.build_condition[i], w.uint32(34).fork()).ldelim();
            }
            if (m.upgrade_param != null && m.upgrade_param.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.upgrade_param.length; ++i)
                    w.int32(m.upgrade_param[i]);
                w.ldelim();
            }
            if (m.build_desc != null && Object.hasOwnProperty.call(m, "build_desc"))
                w.uint32(50).string(m.build_desc);
            if (m.prefab != null && Object.hasOwnProperty.call(m, "prefab"))
                w.uint32(58).string(m.prefab);
            return w;
        };

        /**
         * Decodes an Upgrade message from the specified reader or buffer.
         * @function decode
         * @memberof farm.Upgrade
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.Upgrade} Upgrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Upgrade.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.Upgrade();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.level = r.int32();
                    break;
                case 2:
                    m.build_dur = r.int32();
                    break;
                case 3:
                    if (!(m.build_costs && m.build_costs.length))
                        m.build_costs = [];
                    m.build_costs.push($root.farm.ConditionItem.decode(r, r.uint32()));
                    break;
                case 4:
                    if (!(m.build_condition && m.build_condition.length))
                        m.build_condition = [];
                    m.build_condition.push($root.farm.ConditionItem.decode(r, r.uint32()));
                    break;
                case 5:
                    if (!(m.upgrade_param && m.upgrade_param.length))
                        m.upgrade_param = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.upgrade_param.push(r.int32());
                    } else
                        m.upgrade_param.push(r.int32());
                    break;
                case 6:
                    m.build_desc = r.string();
                    break;
                case 7:
                    m.prefab = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an Upgrade message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.Upgrade
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.Upgrade} Upgrade
         */
        Upgrade.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.Upgrade)
                return d;
            var m = new $root.farm.Upgrade();
            if (d.level != null) {
                m.level = d.level | 0;
            }
            if (d.build_dur != null) {
                m.build_dur = d.build_dur | 0;
            }
            if (d.build_costs) {
                if (!Array.isArray(d.build_costs))
                    throw TypeError(".farm.Upgrade.build_costs: array expected");
                m.build_costs = [];
                for (var i = 0; i < d.build_costs.length; ++i) {
                    if (typeof d.build_costs[i] !== "object")
                        throw TypeError(".farm.Upgrade.build_costs: object expected");
                    m.build_costs[i] = $root.farm.ConditionItem.fromObject(d.build_costs[i]);
                }
            }
            if (d.build_condition) {
                if (!Array.isArray(d.build_condition))
                    throw TypeError(".farm.Upgrade.build_condition: array expected");
                m.build_condition = [];
                for (var i = 0; i < d.build_condition.length; ++i) {
                    if (typeof d.build_condition[i] !== "object")
                        throw TypeError(".farm.Upgrade.build_condition: object expected");
                    m.build_condition[i] = $root.farm.ConditionItem.fromObject(d.build_condition[i]);
                }
            }
            if (d.upgrade_param) {
                if (!Array.isArray(d.upgrade_param))
                    throw TypeError(".farm.Upgrade.upgrade_param: array expected");
                m.upgrade_param = [];
                for (var i = 0; i < d.upgrade_param.length; ++i) {
                    m.upgrade_param[i] = d.upgrade_param[i] | 0;
                }
            }
            if (d.build_desc != null) {
                m.build_desc = String(d.build_desc);
            }
            if (d.prefab != null) {
                m.prefab = String(d.prefab);
            }
            return m;
        };

        /**
         * Creates a plain object from an Upgrade message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.Upgrade
         * @static
         * @param {farm.Upgrade} m Upgrade
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Upgrade.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.build_costs = [];
                d.build_condition = [];
                d.upgrade_param = [];
            }
            if (o.defaults) {
                d.level = 0;
                d.build_dur = 0;
                d.build_desc = "";
                d.prefab = "";
            }
            if (m.level != null && m.hasOwnProperty("level")) {
                d.level = m.level;
            }
            if (m.build_dur != null && m.hasOwnProperty("build_dur")) {
                d.build_dur = m.build_dur;
            }
            if (m.build_costs && m.build_costs.length) {
                d.build_costs = [];
                for (var j = 0; j < m.build_costs.length; ++j) {
                    d.build_costs[j] = $root.farm.ConditionItem.toObject(m.build_costs[j], o);
                }
            }
            if (m.build_condition && m.build_condition.length) {
                d.build_condition = [];
                for (var j = 0; j < m.build_condition.length; ++j) {
                    d.build_condition[j] = $root.farm.ConditionItem.toObject(m.build_condition[j], o);
                }
            }
            if (m.upgrade_param && m.upgrade_param.length) {
                d.upgrade_param = [];
                for (var j = 0; j < m.upgrade_param.length; ++j) {
                    d.upgrade_param[j] = m.upgrade_param[j];
                }
            }
            if (m.build_desc != null && m.hasOwnProperty("build_desc")) {
                d.build_desc = m.build_desc;
            }
            if (m.prefab != null && m.hasOwnProperty("prefab")) {
                d.prefab = m.prefab;
            }
            return d;
        };

        /**
         * Converts this Upgrade to JSON.
         * @function toJSON
         * @memberof farm.Upgrade
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Upgrade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Upgrade;
    })();

    farm.BuildCfgItem = (function() {

        /**
         * Properties of a BuildCfgItem.
         * @memberof farm
         * @interface IBuildCfgItem
         * @property {number|null} [id] BuildCfgItem id
         * @property {string|null} [name] BuildCfgItem name
         * @property {number|null} [type] BuildCfgItem type
         * @property {Array.<number>|null} [floor_space] BuildCfgItem floor_space
         * @property {boolean|null} [rotateable] BuildCfgItem rotateable
         * @property {boolean|null} [moveable] BuildCfgItem moveable
         * @property {boolean|null} [recoverable] BuildCfgItem recoverable
         * @property {boolean|null} [only_one] BuildCfgItem only_one
         * @property {Array.<farm.IUpgrade>|null} [upgrades] BuildCfgItem upgrades
         * @property {Array.<farm.IPos>|null} [position] BuildCfgItem position
         */

        /**
         * Constructs a new BuildCfgItem.
         * @memberof farm
         * @classdesc Represents a BuildCfgItem.
         * @implements IBuildCfgItem
         * @constructor
         * @param {farm.IBuildCfgItem=} [p] Properties to set
         */
        function BuildCfgItem(p) {
            this.floor_space = [];
            this.upgrades = [];
            this.position = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BuildCfgItem id.
         * @member {number} id
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.id = 0;

        /**
         * BuildCfgItem name.
         * @member {string} name
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.name = "";

        /**
         * BuildCfgItem type.
         * @member {number} type
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.type = 0;

        /**
         * BuildCfgItem floor_space.
         * @member {Array.<number>} floor_space
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.floor_space = $util.emptyArray;

        /**
         * BuildCfgItem rotateable.
         * @member {boolean} rotateable
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.rotateable = false;

        /**
         * BuildCfgItem moveable.
         * @member {boolean} moveable
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.moveable = false;

        /**
         * BuildCfgItem recoverable.
         * @member {boolean} recoverable
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.recoverable = false;

        /**
         * BuildCfgItem only_one.
         * @member {boolean} only_one
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.only_one = false;

        /**
         * BuildCfgItem upgrades.
         * @member {Array.<farm.IUpgrade>} upgrades
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.upgrades = $util.emptyArray;

        /**
         * BuildCfgItem position.
         * @member {Array.<farm.IPos>} position
         * @memberof farm.BuildCfgItem
         * @instance
         */
        BuildCfgItem.prototype.position = $util.emptyArray;

        /**
         * Encodes the specified BuildCfgItem message. Does not implicitly {@link farm.BuildCfgItem.verify|verify} messages.
         * @function encode
         * @memberof farm.BuildCfgItem
         * @static
         * @param {farm.IBuildCfgItem} m BuildCfgItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildCfgItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(24).int32(m.type);
            if (m.floor_space != null && m.floor_space.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.floor_space.length; ++i)
                    w.int32(m.floor_space[i]);
                w.ldelim();
            }
            if (m.rotateable != null && Object.hasOwnProperty.call(m, "rotateable"))
                w.uint32(40).bool(m.rotateable);
            if (m.moveable != null && Object.hasOwnProperty.call(m, "moveable"))
                w.uint32(48).bool(m.moveable);
            if (m.recoverable != null && Object.hasOwnProperty.call(m, "recoverable"))
                w.uint32(56).bool(m.recoverable);
            if (m.only_one != null && Object.hasOwnProperty.call(m, "only_one"))
                w.uint32(64).bool(m.only_one);
            if (m.upgrades != null && m.upgrades.length) {
                for (var i = 0; i < m.upgrades.length; ++i)
                    $root.farm.Upgrade.encode(m.upgrades[i], w.uint32(74).fork()).ldelim();
            }
            if (m.position != null && m.position.length) {
                for (var i = 0; i < m.position.length; ++i)
                    $root.farm.Pos.encode(m.position[i], w.uint32(82).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a BuildCfgItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.BuildCfgItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.BuildCfgItem} BuildCfgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildCfgItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.BuildCfgItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.type = r.int32();
                    break;
                case 4:
                    if (!(m.floor_space && m.floor_space.length))
                        m.floor_space = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.floor_space.push(r.int32());
                    } else
                        m.floor_space.push(r.int32());
                    break;
                case 5:
                    m.rotateable = r.bool();
                    break;
                case 6:
                    m.moveable = r.bool();
                    break;
                case 7:
                    m.recoverable = r.bool();
                    break;
                case 8:
                    m.only_one = r.bool();
                    break;
                case 9:
                    if (!(m.upgrades && m.upgrades.length))
                        m.upgrades = [];
                    m.upgrades.push($root.farm.Upgrade.decode(r, r.uint32()));
                    break;
                case 10:
                    if (!(m.position && m.position.length))
                        m.position = [];
                    m.position.push($root.farm.Pos.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a BuildCfgItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.BuildCfgItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.BuildCfgItem} BuildCfgItem
         */
        BuildCfgItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.BuildCfgItem)
                return d;
            var m = new $root.farm.BuildCfgItem();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.type != null) {
                m.type = d.type | 0;
            }
            if (d.floor_space) {
                if (!Array.isArray(d.floor_space))
                    throw TypeError(".farm.BuildCfgItem.floor_space: array expected");
                m.floor_space = [];
                for (var i = 0; i < d.floor_space.length; ++i) {
                    m.floor_space[i] = d.floor_space[i] | 0;
                }
            }
            if (d.rotateable != null) {
                m.rotateable = Boolean(d.rotateable);
            }
            if (d.moveable != null) {
                m.moveable = Boolean(d.moveable);
            }
            if (d.recoverable != null) {
                m.recoverable = Boolean(d.recoverable);
            }
            if (d.only_one != null) {
                m.only_one = Boolean(d.only_one);
            }
            if (d.upgrades) {
                if (!Array.isArray(d.upgrades))
                    throw TypeError(".farm.BuildCfgItem.upgrades: array expected");
                m.upgrades = [];
                for (var i = 0; i < d.upgrades.length; ++i) {
                    if (typeof d.upgrades[i] !== "object")
                        throw TypeError(".farm.BuildCfgItem.upgrades: object expected");
                    m.upgrades[i] = $root.farm.Upgrade.fromObject(d.upgrades[i]);
                }
            }
            if (d.position) {
                if (!Array.isArray(d.position))
                    throw TypeError(".farm.BuildCfgItem.position: array expected");
                m.position = [];
                for (var i = 0; i < d.position.length; ++i) {
                    if (typeof d.position[i] !== "object")
                        throw TypeError(".farm.BuildCfgItem.position: object expected");
                    m.position[i] = $root.farm.Pos.fromObject(d.position[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a BuildCfgItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.BuildCfgItem
         * @static
         * @param {farm.BuildCfgItem} m BuildCfgItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildCfgItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.floor_space = [];
                d.upgrades = [];
                d.position = [];
            }
            if (o.defaults) {
                d.id = 0;
                d.name = "";
                d.type = 0;
                d.rotateable = false;
                d.moveable = false;
                d.recoverable = false;
                d.only_one = false;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = m.type;
            }
            if (m.floor_space && m.floor_space.length) {
                d.floor_space = [];
                for (var j = 0; j < m.floor_space.length; ++j) {
                    d.floor_space[j] = m.floor_space[j];
                }
            }
            if (m.rotateable != null && m.hasOwnProperty("rotateable")) {
                d.rotateable = m.rotateable;
            }
            if (m.moveable != null && m.hasOwnProperty("moveable")) {
                d.moveable = m.moveable;
            }
            if (m.recoverable != null && m.hasOwnProperty("recoverable")) {
                d.recoverable = m.recoverable;
            }
            if (m.only_one != null && m.hasOwnProperty("only_one")) {
                d.only_one = m.only_one;
            }
            if (m.upgrades && m.upgrades.length) {
                d.upgrades = [];
                for (var j = 0; j < m.upgrades.length; ++j) {
                    d.upgrades[j] = $root.farm.Upgrade.toObject(m.upgrades[j], o);
                }
            }
            if (m.position && m.position.length) {
                d.position = [];
                for (var j = 0; j < m.position.length; ++j) {
                    d.position[j] = $root.farm.Pos.toObject(m.position[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this BuildCfgItem to JSON.
         * @function toJSON
         * @memberof farm.BuildCfgItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildCfgItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildCfgItem;
    })();

    farm.UnlockCondition = (function() {

        /**
         * Properties of an UnlockCondition.
         * @memberof farm
         * @interface IUnlockCondition
         * @property {number|null} [type] UnlockCondition type
         * @property {Array.<number>|null} [value] UnlockCondition value
         */

        /**
         * Constructs a new UnlockCondition.
         * @memberof farm
         * @classdesc Represents an UnlockCondition.
         * @implements IUnlockCondition
         * @constructor
         * @param {farm.IUnlockCondition=} [p] Properties to set
         */
        function UnlockCondition(p) {
            this.value = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UnlockCondition type.
         * @member {number} type
         * @memberof farm.UnlockCondition
         * @instance
         */
        UnlockCondition.prototype.type = 0;

        /**
         * UnlockCondition value.
         * @member {Array.<number>} value
         * @memberof farm.UnlockCondition
         * @instance
         */
        UnlockCondition.prototype.value = $util.emptyArray;

        /**
         * Encodes the specified UnlockCondition message. Does not implicitly {@link farm.UnlockCondition.verify|verify} messages.
         * @function encode
         * @memberof farm.UnlockCondition
         * @static
         * @param {farm.IUnlockCondition} m UnlockCondition message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnlockCondition.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.value != null && m.value.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.value.length; ++i)
                    w.int32(m.value[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes an UnlockCondition message from the specified reader or buffer.
         * @function decode
         * @memberof farm.UnlockCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.UnlockCondition} UnlockCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnlockCondition.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.UnlockCondition();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.type = r.int32();
                    break;
                case 2:
                    if (!(m.value && m.value.length))
                        m.value = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.value.push(r.int32());
                    } else
                        m.value.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an UnlockCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.UnlockCondition
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.UnlockCondition} UnlockCondition
         */
        UnlockCondition.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.UnlockCondition)
                return d;
            var m = new $root.farm.UnlockCondition();
            if (d.type != null) {
                m.type = d.type | 0;
            }
            if (d.value) {
                if (!Array.isArray(d.value))
                    throw TypeError(".farm.UnlockCondition.value: array expected");
                m.value = [];
                for (var i = 0; i < d.value.length; ++i) {
                    m.value[i] = d.value[i] | 0;
                }
            }
            return m;
        };

        /**
         * Creates a plain object from an UnlockCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.UnlockCondition
         * @static
         * @param {farm.UnlockCondition} m UnlockCondition
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnlockCondition.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.value = [];
            }
            if (o.defaults) {
                d.type = 0;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = m.type;
            }
            if (m.value && m.value.length) {
                d.value = [];
                for (var j = 0; j < m.value.length; ++j) {
                    d.value[j] = m.value[j];
                }
            }
            return d;
        };

        /**
         * Converts this UnlockCondition to JSON.
         * @function toJSON
         * @memberof farm.UnlockCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnlockCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnlockCondition;
    })();

    farm.CropCfgItem = (function() {

        /**
         * Properties of a CropCfgItem.
         * @memberof farm
         * @interface ICropCfgItem
         * @property {number|null} [id] CropCfgItem id
         * @property {string|null} [name] CropCfgItem name
         * @property {number|null} [type] CropCfgItem type
         * @property {number|null} [grow_time] CropCfgItem grow_time
         * @property {Array.<farm.IUnlockCondition>|null} [unlock_condition] CropCfgItem unlock_condition
         */

        /**
         * Constructs a new CropCfgItem.
         * @memberof farm
         * @classdesc Represents a CropCfgItem.
         * @implements ICropCfgItem
         * @constructor
         * @param {farm.ICropCfgItem=} [p] Properties to set
         */
        function CropCfgItem(p) {
            this.unlock_condition = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CropCfgItem id.
         * @member {number} id
         * @memberof farm.CropCfgItem
         * @instance
         */
        CropCfgItem.prototype.id = 0;

        /**
         * CropCfgItem name.
         * @member {string} name
         * @memberof farm.CropCfgItem
         * @instance
         */
        CropCfgItem.prototype.name = "";

        /**
         * CropCfgItem type.
         * @member {number} type
         * @memberof farm.CropCfgItem
         * @instance
         */
        CropCfgItem.prototype.type = 0;

        /**
         * CropCfgItem grow_time.
         * @member {number} grow_time
         * @memberof farm.CropCfgItem
         * @instance
         */
        CropCfgItem.prototype.grow_time = 0;

        /**
         * CropCfgItem unlock_condition.
         * @member {Array.<farm.IUnlockCondition>} unlock_condition
         * @memberof farm.CropCfgItem
         * @instance
         */
        CropCfgItem.prototype.unlock_condition = $util.emptyArray;

        /**
         * Encodes the specified CropCfgItem message. Does not implicitly {@link farm.CropCfgItem.verify|verify} messages.
         * @function encode
         * @memberof farm.CropCfgItem
         * @static
         * @param {farm.ICropCfgItem} m CropCfgItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CropCfgItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(24).int32(m.type);
            if (m.grow_time != null && Object.hasOwnProperty.call(m, "grow_time"))
                w.uint32(32).int32(m.grow_time);
            if (m.unlock_condition != null && m.unlock_condition.length) {
                for (var i = 0; i < m.unlock_condition.length; ++i)
                    $root.farm.UnlockCondition.encode(m.unlock_condition[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CropCfgItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.CropCfgItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.CropCfgItem} CropCfgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CropCfgItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.CropCfgItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.type = r.int32();
                    break;
                case 4:
                    m.grow_time = r.int32();
                    break;
                case 5:
                    if (!(m.unlock_condition && m.unlock_condition.length))
                        m.unlock_condition = [];
                    m.unlock_condition.push($root.farm.UnlockCondition.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a CropCfgItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.CropCfgItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.CropCfgItem} CropCfgItem
         */
        CropCfgItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.CropCfgItem)
                return d;
            var m = new $root.farm.CropCfgItem();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.type != null) {
                m.type = d.type | 0;
            }
            if (d.grow_time != null) {
                m.grow_time = d.grow_time | 0;
            }
            if (d.unlock_condition) {
                if (!Array.isArray(d.unlock_condition))
                    throw TypeError(".farm.CropCfgItem.unlock_condition: array expected");
                m.unlock_condition = [];
                for (var i = 0; i < d.unlock_condition.length; ++i) {
                    if (typeof d.unlock_condition[i] !== "object")
                        throw TypeError(".farm.CropCfgItem.unlock_condition: object expected");
                    m.unlock_condition[i] = $root.farm.UnlockCondition.fromObject(d.unlock_condition[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a CropCfgItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.CropCfgItem
         * @static
         * @param {farm.CropCfgItem} m CropCfgItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CropCfgItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.unlock_condition = [];
            }
            if (o.defaults) {
                d.id = 0;
                d.name = "";
                d.type = 0;
                d.grow_time = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = m.type;
            }
            if (m.grow_time != null && m.hasOwnProperty("grow_time")) {
                d.grow_time = m.grow_time;
            }
            if (m.unlock_condition && m.unlock_condition.length) {
                d.unlock_condition = [];
                for (var j = 0; j < m.unlock_condition.length; ++j) {
                    d.unlock_condition[j] = $root.farm.UnlockCondition.toObject(m.unlock_condition[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this CropCfgItem to JSON.
         * @function toJSON
         * @memberof farm.CropCfgItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CropCfgItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CropCfgItem;
    })();

    farm.RespPlantCrops = (function() {

        /**
         * Properties of a RespPlantCrops.
         * @memberof farm
         * @interface IRespPlantCrops
         * @property {Array.<farm.IPlantCrop>|null} [plant_crops] RespPlantCrops plant_crops
         */

        /**
         * Constructs a new RespPlantCrops.
         * @memberof farm
         * @classdesc Represents a RespPlantCrops.
         * @implements IRespPlantCrops
         * @constructor
         * @param {farm.IRespPlantCrops=} [p] Properties to set
         */
        function RespPlantCrops(p) {
            this.plant_crops = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespPlantCrops plant_crops.
         * @member {Array.<farm.IPlantCrop>} plant_crops
         * @memberof farm.RespPlantCrops
         * @instance
         */
        RespPlantCrops.prototype.plant_crops = $util.emptyArray;

        /**
         * Encodes the specified RespPlantCrops message. Does not implicitly {@link farm.RespPlantCrops.verify|verify} messages.
         * @function encode
         * @memberof farm.RespPlantCrops
         * @static
         * @param {farm.IRespPlantCrops} m RespPlantCrops message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPlantCrops.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.plant_crops != null && m.plant_crops.length) {
                for (var i = 0; i < m.plant_crops.length; ++i)
                    $root.farm.PlantCrop.encode(m.plant_crops[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespPlantCrops message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespPlantCrops
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespPlantCrops} RespPlantCrops
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPlantCrops.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespPlantCrops();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.plant_crops && m.plant_crops.length))
                        m.plant_crops = [];
                    m.plant_crops.push($root.farm.PlantCrop.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespPlantCrops message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespPlantCrops
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespPlantCrops} RespPlantCrops
         */
        RespPlantCrops.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespPlantCrops)
                return d;
            var m = new $root.farm.RespPlantCrops();
            if (d.plant_crops) {
                if (!Array.isArray(d.plant_crops))
                    throw TypeError(".farm.RespPlantCrops.plant_crops: array expected");
                m.plant_crops = [];
                for (var i = 0; i < d.plant_crops.length; ++i) {
                    if (typeof d.plant_crops[i] !== "object")
                        throw TypeError(".farm.RespPlantCrops.plant_crops: object expected");
                    m.plant_crops[i] = $root.farm.PlantCrop.fromObject(d.plant_crops[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespPlantCrops message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespPlantCrops
         * @static
         * @param {farm.RespPlantCrops} m RespPlantCrops
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespPlantCrops.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.plant_crops = [];
            }
            if (m.plant_crops && m.plant_crops.length) {
                d.plant_crops = [];
                for (var j = 0; j < m.plant_crops.length; ++j) {
                    d.plant_crops[j] = $root.farm.PlantCrop.toObject(m.plant_crops[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespPlantCrops to JSON.
         * @function toJSON
         * @memberof farm.RespPlantCrops
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespPlantCrops.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespPlantCrops;
    })();

    farm.PlantCrop = (function() {

        /**
         * Properties of a PlantCrop.
         * @memberof farm
         * @interface IPlantCrop
         * @property {number|Long|null} [id] PlantCrop id
         * @property {number|null} [config_id] PlantCrop config_id
         * @property {boolean|null} [is_unlock] PlantCrop is_unlock
         * @property {farm.CurrencyType|null} [currency_type] PlantCrop currency_type
         * @property {number|Long|null} [number] PlantCrop number
         */

        /**
         * Constructs a new PlantCrop.
         * @memberof farm
         * @classdesc Represents a PlantCrop.
         * @implements IPlantCrop
         * @constructor
         * @param {farm.IPlantCrop=} [p] Properties to set
         */
        function PlantCrop(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlantCrop id.
         * @member {number|Long} id
         * @memberof farm.PlantCrop
         * @instance
         */
        PlantCrop.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlantCrop config_id.
         * @member {number} config_id
         * @memberof farm.PlantCrop
         * @instance
         */
        PlantCrop.prototype.config_id = 0;

        /**
         * PlantCrop is_unlock.
         * @member {boolean} is_unlock
         * @memberof farm.PlantCrop
         * @instance
         */
        PlantCrop.prototype.is_unlock = false;

        /**
         * PlantCrop currency_type.
         * @member {farm.CurrencyType} currency_type
         * @memberof farm.PlantCrop
         * @instance
         */
        PlantCrop.prototype.currency_type = 0;

        /**
         * PlantCrop number.
         * @member {number|Long} number
         * @memberof farm.PlantCrop
         * @instance
         */
        PlantCrop.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified PlantCrop message. Does not implicitly {@link farm.PlantCrop.verify|verify} messages.
         * @function encode
         * @memberof farm.PlantCrop
         * @static
         * @param {farm.IPlantCrop} m PlantCrop message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlantCrop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.config_id != null && Object.hasOwnProperty.call(m, "config_id"))
                w.uint32(16).int32(m.config_id);
            if (m.is_unlock != null && Object.hasOwnProperty.call(m, "is_unlock"))
                w.uint32(24).bool(m.is_unlock);
            if (m.currency_type != null && Object.hasOwnProperty.call(m, "currency_type"))
                w.uint32(32).int32(m.currency_type);
            if (m.number != null && Object.hasOwnProperty.call(m, "number"))
                w.uint32(40).int64(m.number);
            return w;
        };

        /**
         * Decodes a PlantCrop message from the specified reader or buffer.
         * @function decode
         * @memberof farm.PlantCrop
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.PlantCrop} PlantCrop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlantCrop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.PlantCrop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.config_id = r.int32();
                    break;
                case 3:
                    m.is_unlock = r.bool();
                    break;
                case 4:
                    m.currency_type = r.int32();
                    break;
                case 5:
                    m.number = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a PlantCrop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.PlantCrop
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.PlantCrop} PlantCrop
         */
        PlantCrop.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.PlantCrop)
                return d;
            var m = new $root.farm.PlantCrop();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.config_id != null) {
                m.config_id = d.config_id | 0;
            }
            if (d.is_unlock != null) {
                m.is_unlock = Boolean(d.is_unlock);
            }
            switch (d.currency_type) {
            case "CNothing":
            case 0:
                m.currency_type = 0;
                break;
            case "CGold":
            case 1:
                m.currency_type = 1;
                break;
            case "CCrystal":
            case 2:
                m.currency_type = 2;
                break;
            case "CLove":
            case 3:
                m.currency_type = 3;
                break;
            }
            if (d.number != null) {
                if ($util.Long)
                    (m.number = $util.Long.fromValue(d.number)).unsigned = false;
                else if (typeof d.number === "string")
                    m.number = parseInt(d.number, 10);
                else if (typeof d.number === "number")
                    m.number = d.number;
                else if (typeof d.number === "object")
                    m.number = new $util.LongBits(d.number.low >>> 0, d.number.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a PlantCrop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.PlantCrop
         * @static
         * @param {farm.PlantCrop} m PlantCrop
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlantCrop.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.config_id = 0;
                d.is_unlock = false;
                d.currency_type = o.enums === String ? "CNothing" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.number = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.number = o.longs === String ? "0" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.config_id != null && m.hasOwnProperty("config_id")) {
                d.config_id = m.config_id;
            }
            if (m.is_unlock != null && m.hasOwnProperty("is_unlock")) {
                d.is_unlock = m.is_unlock;
            }
            if (m.currency_type != null && m.hasOwnProperty("currency_type")) {
                d.currency_type = o.enums === String ? $root.farm.CurrencyType[m.currency_type] : m.currency_type;
            }
            if (m.number != null && m.hasOwnProperty("number")) {
                if (typeof m.number === "number")
                    d.number = o.longs === String ? String(m.number) : m.number;
                else
                    d.number = o.longs === String ? $util.Long.prototype.toString.call(m.number) : o.longs === Number ? new $util.LongBits(m.number.low >>> 0, m.number.high >>> 0).toNumber() : m.number;
            }
            return d;
        };

        /**
         * Converts this PlantCrop to JSON.
         * @function toJSON
         * @memberof farm.PlantCrop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlantCrop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlantCrop;
    })();

    farm.RespArableLandsState = (function() {

        /**
         * Properties of a RespArableLandsState.
         * @memberof farm
         * @interface IRespArableLandsState
         * @property {Array.<farm.IArableLandState>|null} [arable_lands_state] RespArableLandsState arable_lands_state
         */

        /**
         * Constructs a new RespArableLandsState.
         * @memberof farm
         * @classdesc Represents a RespArableLandsState.
         * @implements IRespArableLandsState
         * @constructor
         * @param {farm.IRespArableLandsState=} [p] Properties to set
         */
        function RespArableLandsState(p) {
            this.arable_lands_state = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespArableLandsState arable_lands_state.
         * @member {Array.<farm.IArableLandState>} arable_lands_state
         * @memberof farm.RespArableLandsState
         * @instance
         */
        RespArableLandsState.prototype.arable_lands_state = $util.emptyArray;

        /**
         * Encodes the specified RespArableLandsState message. Does not implicitly {@link farm.RespArableLandsState.verify|verify} messages.
         * @function encode
         * @memberof farm.RespArableLandsState
         * @static
         * @param {farm.IRespArableLandsState} m RespArableLandsState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespArableLandsState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.arable_lands_state != null && m.arable_lands_state.length) {
                for (var i = 0; i < m.arable_lands_state.length; ++i)
                    $root.farm.ArableLandState.encode(m.arable_lands_state[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespArableLandsState message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespArableLandsState
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespArableLandsState} RespArableLandsState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespArableLandsState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespArableLandsState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.arable_lands_state && m.arable_lands_state.length))
                        m.arable_lands_state = [];
                    m.arable_lands_state.push($root.farm.ArableLandState.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespArableLandsState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespArableLandsState
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespArableLandsState} RespArableLandsState
         */
        RespArableLandsState.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespArableLandsState)
                return d;
            var m = new $root.farm.RespArableLandsState();
            if (d.arable_lands_state) {
                if (!Array.isArray(d.arable_lands_state))
                    throw TypeError(".farm.RespArableLandsState.arable_lands_state: array expected");
                m.arable_lands_state = [];
                for (var i = 0; i < d.arable_lands_state.length; ++i) {
                    if (typeof d.arable_lands_state[i] !== "object")
                        throw TypeError(".farm.RespArableLandsState.arable_lands_state: object expected");
                    m.arable_lands_state[i] = $root.farm.ArableLandState.fromObject(d.arable_lands_state[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespArableLandsState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespArableLandsState
         * @static
         * @param {farm.RespArableLandsState} m RespArableLandsState
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespArableLandsState.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.arable_lands_state = [];
            }
            if (m.arable_lands_state && m.arable_lands_state.length) {
                d.arable_lands_state = [];
                for (var j = 0; j < m.arable_lands_state.length; ++j) {
                    d.arable_lands_state[j] = $root.farm.ArableLandState.toObject(m.arable_lands_state[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespArableLandsState to JSON.
         * @function toJSON
         * @memberof farm.RespArableLandsState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespArableLandsState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespArableLandsState;
    })();

    farm.ArableLandState = (function() {

        /**
         * Properties of an ArableLandState.
         * @memberof farm
         * @interface IArableLandState
         * @property {number|Long|null} [building_id] ArableLandState building_id
         * @property {number|null} [crop_configID] ArableLandState crop_configID
         * @property {number|null} [time_left] ArableLandState time_left
         */

        /**
         * Constructs a new ArableLandState.
         * @memberof farm
         * @classdesc Represents an ArableLandState.
         * @implements IArableLandState
         * @constructor
         * @param {farm.IArableLandState=} [p] Properties to set
         */
        function ArableLandState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ArableLandState building_id.
         * @member {number|Long} building_id
         * @memberof farm.ArableLandState
         * @instance
         */
        ArableLandState.prototype.building_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ArableLandState crop_configID.
         * @member {number} crop_configID
         * @memberof farm.ArableLandState
         * @instance
         */
        ArableLandState.prototype.crop_configID = 0;

        /**
         * ArableLandState time_left.
         * @member {number} time_left
         * @memberof farm.ArableLandState
         * @instance
         */
        ArableLandState.prototype.time_left = 0;

        /**
         * Encodes the specified ArableLandState message. Does not implicitly {@link farm.ArableLandState.verify|verify} messages.
         * @function encode
         * @memberof farm.ArableLandState
         * @static
         * @param {farm.IArableLandState} m ArableLandState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArableLandState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.building_id != null && Object.hasOwnProperty.call(m, "building_id"))
                w.uint32(8).int64(m.building_id);
            if (m.crop_configID != null && Object.hasOwnProperty.call(m, "crop_configID"))
                w.uint32(16).int32(m.crop_configID);
            if (m.time_left != null && Object.hasOwnProperty.call(m, "time_left"))
                w.uint32(32).int32(m.time_left);
            return w;
        };

        /**
         * Decodes an ArableLandState message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ArableLandState
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ArableLandState} ArableLandState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArableLandState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ArableLandState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.building_id = r.int64();
                    break;
                case 2:
                    m.crop_configID = r.int32();
                    break;
                case 4:
                    m.time_left = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an ArableLandState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ArableLandState
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ArableLandState} ArableLandState
         */
        ArableLandState.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ArableLandState)
                return d;
            var m = new $root.farm.ArableLandState();
            if (d.building_id != null) {
                if ($util.Long)
                    (m.building_id = $util.Long.fromValue(d.building_id)).unsigned = false;
                else if (typeof d.building_id === "string")
                    m.building_id = parseInt(d.building_id, 10);
                else if (typeof d.building_id === "number")
                    m.building_id = d.building_id;
                else if (typeof d.building_id === "object")
                    m.building_id = new $util.LongBits(d.building_id.low >>> 0, d.building_id.high >>> 0).toNumber();
            }
            if (d.crop_configID != null) {
                m.crop_configID = d.crop_configID | 0;
            }
            if (d.time_left != null) {
                m.time_left = d.time_left | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from an ArableLandState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ArableLandState
         * @static
         * @param {farm.ArableLandState} m ArableLandState
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArableLandState.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.building_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.building_id = o.longs === String ? "0" : 0;
                d.crop_configID = 0;
                d.time_left = 0;
            }
            if (m.building_id != null && m.hasOwnProperty("building_id")) {
                if (typeof m.building_id === "number")
                    d.building_id = o.longs === String ? String(m.building_id) : m.building_id;
                else
                    d.building_id = o.longs === String ? $util.Long.prototype.toString.call(m.building_id) : o.longs === Number ? new $util.LongBits(m.building_id.low >>> 0, m.building_id.high >>> 0).toNumber() : m.building_id;
            }
            if (m.crop_configID != null && m.hasOwnProperty("crop_configID")) {
                d.crop_configID = m.crop_configID;
            }
            if (m.time_left != null && m.hasOwnProperty("time_left")) {
                d.time_left = m.time_left;
            }
            return d;
        };

        /**
         * Converts this ArableLandState to JSON.
         * @function toJSON
         * @memberof farm.ArableLandState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArableLandState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArableLandState;
    })();

    farm.ReqCropOption = (function() {

        /**
         * Properties of a ReqCropOption.
         * @memberof farm
         * @interface IReqCropOption
         * @property {Array.<number|Long>|null} [building_ids] ReqCropOption building_ids
         * @property {Array.<number>|null} [crop_cfgids] ReqCropOption crop_cfgids
         */

        /**
         * Constructs a new ReqCropOption.
         * @memberof farm
         * @classdesc Represents a ReqCropOption.
         * @implements IReqCropOption
         * @constructor
         * @param {farm.IReqCropOption=} [p] Properties to set
         */
        function ReqCropOption(p) {
            this.building_ids = [];
            this.crop_cfgids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqCropOption building_ids.
         * @member {Array.<number|Long>} building_ids
         * @memberof farm.ReqCropOption
         * @instance
         */
        ReqCropOption.prototype.building_ids = $util.emptyArray;

        /**
         * ReqCropOption crop_cfgids.
         * @member {Array.<number>} crop_cfgids
         * @memberof farm.ReqCropOption
         * @instance
         */
        ReqCropOption.prototype.crop_cfgids = $util.emptyArray;

        /**
         * Encodes the specified ReqCropOption message. Does not implicitly {@link farm.ReqCropOption.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqCropOption
         * @static
         * @param {farm.IReqCropOption} m ReqCropOption message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCropOption.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.building_ids != null && m.building_ids.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.building_ids.length; ++i)
                    w.int64(m.building_ids[i]);
                w.ldelim();
            }
            if (m.crop_cfgids != null && m.crop_cfgids.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.crop_cfgids.length; ++i)
                    w.int32(m.crop_cfgids[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a ReqCropOption message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqCropOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqCropOption} ReqCropOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCropOption.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqCropOption();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.building_ids && m.building_ids.length))
                        m.building_ids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.building_ids.push(r.int64());
                    } else
                        m.building_ids.push(r.int64());
                    break;
                case 2:
                    if (!(m.crop_cfgids && m.crop_cfgids.length))
                        m.crop_cfgids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.crop_cfgids.push(r.int32());
                    } else
                        m.crop_cfgids.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqCropOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqCropOption
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqCropOption} ReqCropOption
         */
        ReqCropOption.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqCropOption)
                return d;
            var m = new $root.farm.ReqCropOption();
            if (d.building_ids) {
                if (!Array.isArray(d.building_ids))
                    throw TypeError(".farm.ReqCropOption.building_ids: array expected");
                m.building_ids = [];
                for (var i = 0; i < d.building_ids.length; ++i) {
                    if ($util.Long)
                        (m.building_ids[i] = $util.Long.fromValue(d.building_ids[i])).unsigned = false;
                    else if (typeof d.building_ids[i] === "string")
                        m.building_ids[i] = parseInt(d.building_ids[i], 10);
                    else if (typeof d.building_ids[i] === "number")
                        m.building_ids[i] = d.building_ids[i];
                    else if (typeof d.building_ids[i] === "object")
                        m.building_ids[i] = new $util.LongBits(d.building_ids[i].low >>> 0, d.building_ids[i].high >>> 0).toNumber();
                }
            }
            if (d.crop_cfgids) {
                if (!Array.isArray(d.crop_cfgids))
                    throw TypeError(".farm.ReqCropOption.crop_cfgids: array expected");
                m.crop_cfgids = [];
                for (var i = 0; i < d.crop_cfgids.length; ++i) {
                    m.crop_cfgids[i] = d.crop_cfgids[i] | 0;
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqCropOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqCropOption
         * @static
         * @param {farm.ReqCropOption} m ReqCropOption
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCropOption.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.building_ids = [];
                d.crop_cfgids = [];
            }
            if (m.building_ids && m.building_ids.length) {
                d.building_ids = [];
                for (var j = 0; j < m.building_ids.length; ++j) {
                    if (typeof m.building_ids[j] === "number")
                        d.building_ids[j] = o.longs === String ? String(m.building_ids[j]) : m.building_ids[j];
                    else
                        d.building_ids[j] = o.longs === String ? $util.Long.prototype.toString.call(m.building_ids[j]) : o.longs === Number ? new $util.LongBits(m.building_ids[j].low >>> 0, m.building_ids[j].high >>> 0).toNumber() : m.building_ids[j];
                }
            }
            if (m.crop_cfgids && m.crop_cfgids.length) {
                d.crop_cfgids = [];
                for (var j = 0; j < m.crop_cfgids.length; ++j) {
                    d.crop_cfgids[j] = m.crop_cfgids[j];
                }
            }
            return d;
        };

        /**
         * Converts this ReqCropOption to JSON.
         * @function toJSON
         * @memberof farm.ReqCropOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCropOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqCropOption;
    })();

    farm.ReqUnlockCrop = (function() {

        /**
         * Properties of a ReqUnlockCrop.
         * @memberof farm
         * @interface IReqUnlockCrop
         * @property {number|null} [configID] ReqUnlockCrop configID
         */

        /**
         * Constructs a new ReqUnlockCrop.
         * @memberof farm
         * @classdesc Represents a ReqUnlockCrop.
         * @implements IReqUnlockCrop
         * @constructor
         * @param {farm.IReqUnlockCrop=} [p] Properties to set
         */
        function ReqUnlockCrop(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUnlockCrop configID.
         * @member {number} configID
         * @memberof farm.ReqUnlockCrop
         * @instance
         */
        ReqUnlockCrop.prototype.configID = 0;

        /**
         * Encodes the specified ReqUnlockCrop message. Does not implicitly {@link farm.ReqUnlockCrop.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqUnlockCrop
         * @static
         * @param {farm.IReqUnlockCrop} m ReqUnlockCrop message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUnlockCrop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.configID != null && Object.hasOwnProperty.call(m, "configID"))
                w.uint32(8).int32(m.configID);
            return w;
        };

        /**
         * Decodes a ReqUnlockCrop message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqUnlockCrop
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqUnlockCrop} ReqUnlockCrop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUnlockCrop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqUnlockCrop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.configID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqUnlockCrop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqUnlockCrop
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqUnlockCrop} ReqUnlockCrop
         */
        ReqUnlockCrop.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqUnlockCrop)
                return d;
            var m = new $root.farm.ReqUnlockCrop();
            if (d.configID != null) {
                m.configID = d.configID | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqUnlockCrop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqUnlockCrop
         * @static
         * @param {farm.ReqUnlockCrop} m ReqUnlockCrop
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUnlockCrop.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.configID = 0;
            }
            if (m.configID != null && m.hasOwnProperty("configID")) {
                d.configID = m.configID;
            }
            return d;
        };

        /**
         * Converts this ReqUnlockCrop to JSON.
         * @function toJSON
         * @memberof farm.ReqUnlockCrop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUnlockCrop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUnlockCrop;
    })();

    farm.CurrencyLeft = (function() {

        /**
         * Properties of a CurrencyLeft.
         * @memberof farm
         * @interface ICurrencyLeft
         * @property {number|Long|null} [tk_gold] CurrencyLeft tk_gold
         * @property {number|Long|null} [tk_crystal] CurrencyLeft tk_crystal
         */

        /**
         * Constructs a new CurrencyLeft.
         * @memberof farm
         * @classdesc Represents a CurrencyLeft.
         * @implements ICurrencyLeft
         * @constructor
         * @param {farm.ICurrencyLeft=} [p] Properties to set
         */
        function CurrencyLeft(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CurrencyLeft tk_gold.
         * @member {number|Long} tk_gold
         * @memberof farm.CurrencyLeft
         * @instance
         */
        CurrencyLeft.prototype.tk_gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CurrencyLeft tk_crystal.
         * @member {number|Long} tk_crystal
         * @memberof farm.CurrencyLeft
         * @instance
         */
        CurrencyLeft.prototype.tk_crystal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CurrencyLeft message. Does not implicitly {@link farm.CurrencyLeft.verify|verify} messages.
         * @function encode
         * @memberof farm.CurrencyLeft
         * @static
         * @param {farm.ICurrencyLeft} m CurrencyLeft message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyLeft.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.tk_gold != null && Object.hasOwnProperty.call(m, "tk_gold"))
                w.uint32(8).int64(m.tk_gold);
            if (m.tk_crystal != null && Object.hasOwnProperty.call(m, "tk_crystal"))
                w.uint32(16).int64(m.tk_crystal);
            return w;
        };

        /**
         * Decodes a CurrencyLeft message from the specified reader or buffer.
         * @function decode
         * @memberof farm.CurrencyLeft
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.CurrencyLeft} CurrencyLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyLeft.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.CurrencyLeft();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.tk_gold = r.int64();
                    break;
                case 2:
                    m.tk_crystal = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a CurrencyLeft message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.CurrencyLeft
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.CurrencyLeft} CurrencyLeft
         */
        CurrencyLeft.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.CurrencyLeft)
                return d;
            var m = new $root.farm.CurrencyLeft();
            if (d.tk_gold != null) {
                if ($util.Long)
                    (m.tk_gold = $util.Long.fromValue(d.tk_gold)).unsigned = false;
                else if (typeof d.tk_gold === "string")
                    m.tk_gold = parseInt(d.tk_gold, 10);
                else if (typeof d.tk_gold === "number")
                    m.tk_gold = d.tk_gold;
                else if (typeof d.tk_gold === "object")
                    m.tk_gold = new $util.LongBits(d.tk_gold.low >>> 0, d.tk_gold.high >>> 0).toNumber();
            }
            if (d.tk_crystal != null) {
                if ($util.Long)
                    (m.tk_crystal = $util.Long.fromValue(d.tk_crystal)).unsigned = false;
                else if (typeof d.tk_crystal === "string")
                    m.tk_crystal = parseInt(d.tk_crystal, 10);
                else if (typeof d.tk_crystal === "number")
                    m.tk_crystal = d.tk_crystal;
                else if (typeof d.tk_crystal === "object")
                    m.tk_crystal = new $util.LongBits(d.tk_crystal.low >>> 0, d.tk_crystal.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a CurrencyLeft message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.CurrencyLeft
         * @static
         * @param {farm.CurrencyLeft} m CurrencyLeft
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrencyLeft.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.tk_gold = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.tk_gold = o.longs === String ? "0" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.tk_crystal = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.tk_crystal = o.longs === String ? "0" : 0;
            }
            if (m.tk_gold != null && m.hasOwnProperty("tk_gold")) {
                if (typeof m.tk_gold === "number")
                    d.tk_gold = o.longs === String ? String(m.tk_gold) : m.tk_gold;
                else
                    d.tk_gold = o.longs === String ? $util.Long.prototype.toString.call(m.tk_gold) : o.longs === Number ? new $util.LongBits(m.tk_gold.low >>> 0, m.tk_gold.high >>> 0).toNumber() : m.tk_gold;
            }
            if (m.tk_crystal != null && m.hasOwnProperty("tk_crystal")) {
                if (typeof m.tk_crystal === "number")
                    d.tk_crystal = o.longs === String ? String(m.tk_crystal) : m.tk_crystal;
                else
                    d.tk_crystal = o.longs === String ? $util.Long.prototype.toString.call(m.tk_crystal) : o.longs === Number ? new $util.LongBits(m.tk_crystal.low >>> 0, m.tk_crystal.high >>> 0).toNumber() : m.tk_crystal;
            }
            return d;
        };

        /**
         * Converts this CurrencyLeft to JSON.
         * @function toJSON
         * @memberof farm.CurrencyLeft
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrencyLeft.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyLeft;
    })();

    farm.MessageWordBubbleChanged = (function() {

        /**
         * Properties of a MessageWordBubbleChanged.
         * @memberof farm
         * @interface IMessageWordBubbleChanged
         * @property {Array.<farm.IWordBubble>|null} [word_bubbles] MessageWordBubbleChanged word_bubbles
         */

        /**
         * Constructs a new MessageWordBubbleChanged.
         * @memberof farm
         * @classdesc Represents a MessageWordBubbleChanged.
         * @implements IMessageWordBubbleChanged
         * @constructor
         * @param {farm.IMessageWordBubbleChanged=} [p] Properties to set
         */
        function MessageWordBubbleChanged(p) {
            this.word_bubbles = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessageWordBubbleChanged word_bubbles.
         * @member {Array.<farm.IWordBubble>} word_bubbles
         * @memberof farm.MessageWordBubbleChanged
         * @instance
         */
        MessageWordBubbleChanged.prototype.word_bubbles = $util.emptyArray;

        /**
         * Encodes the specified MessageWordBubbleChanged message. Does not implicitly {@link farm.MessageWordBubbleChanged.verify|verify} messages.
         * @function encode
         * @memberof farm.MessageWordBubbleChanged
         * @static
         * @param {farm.IMessageWordBubbleChanged} m MessageWordBubbleChanged message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageWordBubbleChanged.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.word_bubbles != null && m.word_bubbles.length) {
                for (var i = 0; i < m.word_bubbles.length; ++i)
                    $root.farm.WordBubble.encode(m.word_bubbles[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a MessageWordBubbleChanged message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessageWordBubbleChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessageWordBubbleChanged} MessageWordBubbleChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageWordBubbleChanged.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessageWordBubbleChanged();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.word_bubbles && m.word_bubbles.length))
                        m.word_bubbles = [];
                    m.word_bubbles.push($root.farm.WordBubble.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessageWordBubbleChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessageWordBubbleChanged
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessageWordBubbleChanged} MessageWordBubbleChanged
         */
        MessageWordBubbleChanged.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessageWordBubbleChanged)
                return d;
            var m = new $root.farm.MessageWordBubbleChanged();
            if (d.word_bubbles) {
                if (!Array.isArray(d.word_bubbles))
                    throw TypeError(".farm.MessageWordBubbleChanged.word_bubbles: array expected");
                m.word_bubbles = [];
                for (var i = 0; i < d.word_bubbles.length; ++i) {
                    if (typeof d.word_bubbles[i] !== "object")
                        throw TypeError(".farm.MessageWordBubbleChanged.word_bubbles: object expected");
                    m.word_bubbles[i] = $root.farm.WordBubble.fromObject(d.word_bubbles[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a MessageWordBubbleChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessageWordBubbleChanged
         * @static
         * @param {farm.MessageWordBubbleChanged} m MessageWordBubbleChanged
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageWordBubbleChanged.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.word_bubbles = [];
            }
            if (m.word_bubbles && m.word_bubbles.length) {
                d.word_bubbles = [];
                for (var j = 0; j < m.word_bubbles.length; ++j) {
                    d.word_bubbles[j] = $root.farm.WordBubble.toObject(m.word_bubbles[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this MessageWordBubbleChanged to JSON.
         * @function toJSON
         * @memberof farm.MessageWordBubbleChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageWordBubbleChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageWordBubbleChanged;
    })();

    farm.MessagePlayerInfo = (function() {

        /**
         * Properties of a MessagePlayerInfo.
         * @memberof farm
         * @interface IMessagePlayerInfo
         * @property {string|null} [nick_name] MessagePlayerInfo nick_name
         * @property {string|null} [user_code] MessagePlayerInfo user_code
         * @property {number|null} [avatar_id] MessagePlayerInfo avatar_id
         * @property {number|null} [coin] MessagePlayerInfo coin
         * @property {number|null} [crystal] MessagePlayerInfo crystal
         * @property {number|null} [heart] MessagePlayerInfo heart
         * @property {string|null} [slogan] MessagePlayerInfo slogan
         * @property {boolean|null} [isMail] MessagePlayerInfo isMail
         */

        /**
         * Constructs a new MessagePlayerInfo.
         * @memberof farm
         * @classdesc Represents a MessagePlayerInfo.
         * @implements IMessagePlayerInfo
         * @constructor
         * @param {farm.IMessagePlayerInfo=} [p] Properties to set
         */
        function MessagePlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessagePlayerInfo nick_name.
         * @member {string} nick_name
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.nick_name = "";

        /**
         * MessagePlayerInfo user_code.
         * @member {string} user_code
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.user_code = "";

        /**
         * MessagePlayerInfo avatar_id.
         * @member {number} avatar_id
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.avatar_id = 0;

        /**
         * MessagePlayerInfo coin.
         * @member {number} coin
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.coin = 0;

        /**
         * MessagePlayerInfo crystal.
         * @member {number} crystal
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.crystal = 0;

        /**
         * MessagePlayerInfo heart.
         * @member {number} heart
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.heart = 0;

        /**
         * MessagePlayerInfo slogan.
         * @member {string} slogan
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.slogan = "";

        /**
         * MessagePlayerInfo isMail.
         * @member {boolean} isMail
         * @memberof farm.MessagePlayerInfo
         * @instance
         */
        MessagePlayerInfo.prototype.isMail = false;

        /**
         * Encodes the specified MessagePlayerInfo message. Does not implicitly {@link farm.MessagePlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof farm.MessagePlayerInfo
         * @static
         * @param {farm.IMessagePlayerInfo} m MessagePlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagePlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nick_name != null && Object.hasOwnProperty.call(m, "nick_name"))
                w.uint32(10).string(m.nick_name);
            if (m.user_code != null && Object.hasOwnProperty.call(m, "user_code"))
                w.uint32(18).string(m.user_code);
            if (m.avatar_id != null && Object.hasOwnProperty.call(m, "avatar_id"))
                w.uint32(24).int32(m.avatar_id);
            if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
                w.uint32(32).int32(m.coin);
            if (m.crystal != null && Object.hasOwnProperty.call(m, "crystal"))
                w.uint32(40).int32(m.crystal);
            if (m.heart != null && Object.hasOwnProperty.call(m, "heart"))
                w.uint32(48).int32(m.heart);
            if (m.slogan != null && Object.hasOwnProperty.call(m, "slogan"))
                w.uint32(58).string(m.slogan);
            if (m.isMail != null && Object.hasOwnProperty.call(m, "isMail"))
                w.uint32(64).bool(m.isMail);
            return w;
        };

        /**
         * Decodes a MessagePlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessagePlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessagePlayerInfo} MessagePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagePlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessagePlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.nick_name = r.string();
                    break;
                case 2:
                    m.user_code = r.string();
                    break;
                case 3:
                    m.avatar_id = r.int32();
                    break;
                case 4:
                    m.coin = r.int32();
                    break;
                case 5:
                    m.crystal = r.int32();
                    break;
                case 6:
                    m.heart = r.int32();
                    break;
                case 7:
                    m.slogan = r.string();
                    break;
                case 8:
                    m.isMail = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessagePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessagePlayerInfo
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessagePlayerInfo} MessagePlayerInfo
         */
        MessagePlayerInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessagePlayerInfo)
                return d;
            var m = new $root.farm.MessagePlayerInfo();
            if (d.nick_name != null) {
                m.nick_name = String(d.nick_name);
            }
            if (d.user_code != null) {
                m.user_code = String(d.user_code);
            }
            if (d.avatar_id != null) {
                m.avatar_id = d.avatar_id | 0;
            }
            if (d.coin != null) {
                m.coin = d.coin | 0;
            }
            if (d.crystal != null) {
                m.crystal = d.crystal | 0;
            }
            if (d.heart != null) {
                m.heart = d.heart | 0;
            }
            if (d.slogan != null) {
                m.slogan = String(d.slogan);
            }
            if (d.isMail != null) {
                m.isMail = Boolean(d.isMail);
            }
            return m;
        };

        /**
         * Creates a plain object from a MessagePlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessagePlayerInfo
         * @static
         * @param {farm.MessagePlayerInfo} m MessagePlayerInfo
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessagePlayerInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.nick_name = "";
                d.user_code = "";
                d.avatar_id = 0;
                d.coin = 0;
                d.crystal = 0;
                d.heart = 0;
                d.slogan = "";
                d.isMail = false;
            }
            if (m.nick_name != null && m.hasOwnProperty("nick_name")) {
                d.nick_name = m.nick_name;
            }
            if (m.user_code != null && m.hasOwnProperty("user_code")) {
                d.user_code = m.user_code;
            }
            if (m.avatar_id != null && m.hasOwnProperty("avatar_id")) {
                d.avatar_id = m.avatar_id;
            }
            if (m.coin != null && m.hasOwnProperty("coin")) {
                d.coin = m.coin;
            }
            if (m.crystal != null && m.hasOwnProperty("crystal")) {
                d.crystal = m.crystal;
            }
            if (m.heart != null && m.hasOwnProperty("heart")) {
                d.heart = m.heart;
            }
            if (m.slogan != null && m.hasOwnProperty("slogan")) {
                d.slogan = m.slogan;
            }
            if (m.isMail != null && m.hasOwnProperty("isMail")) {
                d.isMail = m.isMail;
            }
            return d;
        };

        /**
         * Converts this MessagePlayerInfo to JSON.
         * @function toJSON
         * @memberof farm.MessagePlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessagePlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessagePlayerInfo;
    })();

    farm.WordBubble = (function() {

        /**
         * Properties of a WordBubble.
         * @memberof farm
         * @interface IWordBubble
         * @property {number|null} [word_id] WordBubble word_id
         * @property {number|Long|null} [building_id] WordBubble building_id
         */

        /**
         * Constructs a new WordBubble.
         * @memberof farm
         * @classdesc Represents a WordBubble.
         * @implements IWordBubble
         * @constructor
         * @param {farm.IWordBubble=} [p] Properties to set
         */
        function WordBubble(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WordBubble word_id.
         * @member {number} word_id
         * @memberof farm.WordBubble
         * @instance
         */
        WordBubble.prototype.word_id = 0;

        /**
         * WordBubble building_id.
         * @member {number|Long} building_id
         * @memberof farm.WordBubble
         * @instance
         */
        WordBubble.prototype.building_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified WordBubble message. Does not implicitly {@link farm.WordBubble.verify|verify} messages.
         * @function encode
         * @memberof farm.WordBubble
         * @static
         * @param {farm.IWordBubble} m WordBubble message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WordBubble.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.word_id != null && Object.hasOwnProperty.call(m, "word_id"))
                w.uint32(8).int32(m.word_id);
            if (m.building_id != null && Object.hasOwnProperty.call(m, "building_id"))
                w.uint32(16).int64(m.building_id);
            return w;
        };

        /**
         * Decodes a WordBubble message from the specified reader or buffer.
         * @function decode
         * @memberof farm.WordBubble
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.WordBubble} WordBubble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WordBubble.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.WordBubble();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.word_id = r.int32();
                    break;
                case 2:
                    m.building_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a WordBubble message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.WordBubble
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.WordBubble} WordBubble
         */
        WordBubble.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.WordBubble)
                return d;
            var m = new $root.farm.WordBubble();
            if (d.word_id != null) {
                m.word_id = d.word_id | 0;
            }
            if (d.building_id != null) {
                if ($util.Long)
                    (m.building_id = $util.Long.fromValue(d.building_id)).unsigned = false;
                else if (typeof d.building_id === "string")
                    m.building_id = parseInt(d.building_id, 10);
                else if (typeof d.building_id === "number")
                    m.building_id = d.building_id;
                else if (typeof d.building_id === "object")
                    m.building_id = new $util.LongBits(d.building_id.low >>> 0, d.building_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a WordBubble message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.WordBubble
         * @static
         * @param {farm.WordBubble} m WordBubble
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WordBubble.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.word_id = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.building_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.building_id = o.longs === String ? "0" : 0;
            }
            if (m.word_id != null && m.hasOwnProperty("word_id")) {
                d.word_id = m.word_id;
            }
            if (m.building_id != null && m.hasOwnProperty("building_id")) {
                if (typeof m.building_id === "number")
                    d.building_id = o.longs === String ? String(m.building_id) : m.building_id;
                else
                    d.building_id = o.longs === String ? $util.Long.prototype.toString.call(m.building_id) : o.longs === Number ? new $util.LongBits(m.building_id.low >>> 0, m.building_id.high >>> 0).toNumber() : m.building_id;
            }
            return d;
        };

        /**
         * Converts this WordBubble to JSON.
         * @function toJSON
         * @memberof farm.WordBubble
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WordBubble.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WordBubble;
    })();

    farm.ReqWordBubbleEnd = (function() {

        /**
         * Properties of a ReqWordBubbleEnd.
         * @memberof farm
         * @interface IReqWordBubbleEnd
         * @property {number|null} [word_id] ReqWordBubbleEnd word_id
         * @property {number|Long|null} [building_id] ReqWordBubbleEnd building_id
         */

        /**
         * Constructs a new ReqWordBubbleEnd.
         * @memberof farm
         * @classdesc Represents a ReqWordBubbleEnd.
         * @implements IReqWordBubbleEnd
         * @constructor
         * @param {farm.IReqWordBubbleEnd=} [p] Properties to set
         */
        function ReqWordBubbleEnd(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqWordBubbleEnd word_id.
         * @member {number} word_id
         * @memberof farm.ReqWordBubbleEnd
         * @instance
         */
        ReqWordBubbleEnd.prototype.word_id = 0;

        /**
         * ReqWordBubbleEnd building_id.
         * @member {number|Long} building_id
         * @memberof farm.ReqWordBubbleEnd
         * @instance
         */
        ReqWordBubbleEnd.prototype.building_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqWordBubbleEnd message. Does not implicitly {@link farm.ReqWordBubbleEnd.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqWordBubbleEnd
         * @static
         * @param {farm.IReqWordBubbleEnd} m ReqWordBubbleEnd message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqWordBubbleEnd.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.word_id != null && Object.hasOwnProperty.call(m, "word_id"))
                w.uint32(8).int32(m.word_id);
            if (m.building_id != null && Object.hasOwnProperty.call(m, "building_id"))
                w.uint32(16).int64(m.building_id);
            return w;
        };

        /**
         * Decodes a ReqWordBubbleEnd message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqWordBubbleEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqWordBubbleEnd} ReqWordBubbleEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqWordBubbleEnd.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqWordBubbleEnd();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.word_id = r.int32();
                    break;
                case 2:
                    m.building_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqWordBubbleEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqWordBubbleEnd
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqWordBubbleEnd} ReqWordBubbleEnd
         */
        ReqWordBubbleEnd.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqWordBubbleEnd)
                return d;
            var m = new $root.farm.ReqWordBubbleEnd();
            if (d.word_id != null) {
                m.word_id = d.word_id | 0;
            }
            if (d.building_id != null) {
                if ($util.Long)
                    (m.building_id = $util.Long.fromValue(d.building_id)).unsigned = false;
                else if (typeof d.building_id === "string")
                    m.building_id = parseInt(d.building_id, 10);
                else if (typeof d.building_id === "number")
                    m.building_id = d.building_id;
                else if (typeof d.building_id === "object")
                    m.building_id = new $util.LongBits(d.building_id.low >>> 0, d.building_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqWordBubbleEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqWordBubbleEnd
         * @static
         * @param {farm.ReqWordBubbleEnd} m ReqWordBubbleEnd
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqWordBubbleEnd.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.word_id = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.building_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.building_id = o.longs === String ? "0" : 0;
            }
            if (m.word_id != null && m.hasOwnProperty("word_id")) {
                d.word_id = m.word_id;
            }
            if (m.building_id != null && m.hasOwnProperty("building_id")) {
                if (typeof m.building_id === "number")
                    d.building_id = o.longs === String ? String(m.building_id) : m.building_id;
                else
                    d.building_id = o.longs === String ? $util.Long.prototype.toString.call(m.building_id) : o.longs === Number ? new $util.LongBits(m.building_id.low >>> 0, m.building_id.high >>> 0).toNumber() : m.building_id;
            }
            return d;
        };

        /**
         * Converts this ReqWordBubbleEnd to JSON.
         * @function toJSON
         * @memberof farm.ReqWordBubbleEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqWordBubbleEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqWordBubbleEnd;
    })();

    farm.ReqUpdateBillboards = (function() {

        /**
         * Properties of a ReqUpdateBillboards.
         * @memberof farm
         * @interface IReqUpdateBillboards
         * @property {string|null} [content] ReqUpdateBillboards content
         */

        /**
         * Constructs a new ReqUpdateBillboards.
         * @memberof farm
         * @classdesc Represents a ReqUpdateBillboards.
         * @implements IReqUpdateBillboards
         * @constructor
         * @param {farm.IReqUpdateBillboards=} [p] Properties to set
         */
        function ReqUpdateBillboards(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUpdateBillboards content.
         * @member {string} content
         * @memberof farm.ReqUpdateBillboards
         * @instance
         */
        ReqUpdateBillboards.prototype.content = "";

        /**
         * Encodes the specified ReqUpdateBillboards message. Does not implicitly {@link farm.ReqUpdateBillboards.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqUpdateBillboards
         * @static
         * @param {farm.IReqUpdateBillboards} m ReqUpdateBillboards message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUpdateBillboards.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(10).string(m.content);
            return w;
        };

        /**
         * Decodes a ReqUpdateBillboards message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqUpdateBillboards
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqUpdateBillboards} ReqUpdateBillboards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateBillboards.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqUpdateBillboards();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqUpdateBillboards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqUpdateBillboards
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqUpdateBillboards} ReqUpdateBillboards
         */
        ReqUpdateBillboards.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqUpdateBillboards)
                return d;
            var m = new $root.farm.ReqUpdateBillboards();
            if (d.content != null) {
                m.content = String(d.content);
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqUpdateBillboards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqUpdateBillboards
         * @static
         * @param {farm.ReqUpdateBillboards} m ReqUpdateBillboards
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUpdateBillboards.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.content = "";
            }
            if (m.content != null && m.hasOwnProperty("content")) {
                d.content = m.content;
            }
            return d;
        };

        /**
         * Converts this ReqUpdateBillboards to JSON.
         * @function toJSON
         * @memberof farm.ReqUpdateBillboards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUpdateBillboards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUpdateBillboards;
    })();

    farm.RespMailList = (function() {

        /**
         * Properties of a RespMailList.
         * @memberof farm
         * @interface IRespMailList
         * @property {Array.<farm.IMailListItem>|null} [mails] RespMailList mails
         */

        /**
         * Constructs a new RespMailList.
         * @memberof farm
         * @classdesc Represents a RespMailList.
         * @implements IRespMailList
         * @constructor
         * @param {farm.IRespMailList=} [p] Properties to set
         */
        function RespMailList(p) {
            this.mails = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespMailList mails.
         * @member {Array.<farm.IMailListItem>} mails
         * @memberof farm.RespMailList
         * @instance
         */
        RespMailList.prototype.mails = $util.emptyArray;

        /**
         * Encodes the specified RespMailList message. Does not implicitly {@link farm.RespMailList.verify|verify} messages.
         * @function encode
         * @memberof farm.RespMailList
         * @static
         * @param {farm.IRespMailList} m RespMailList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mails != null && m.mails.length) {
                for (var i = 0; i < m.mails.length; ++i)
                    $root.farm.MailListItem.encode(m.mails[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RespMailList message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespMailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespMailList} RespMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespMailList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.mails && m.mails.length))
                        m.mails = [];
                    m.mails.push($root.farm.MailListItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespMailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespMailList
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespMailList} RespMailList
         */
        RespMailList.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespMailList)
                return d;
            var m = new $root.farm.RespMailList();
            if (d.mails) {
                if (!Array.isArray(d.mails))
                    throw TypeError(".farm.RespMailList.mails: array expected");
                m.mails = [];
                for (var i = 0; i < d.mails.length; ++i) {
                    if (typeof d.mails[i] !== "object")
                        throw TypeError(".farm.RespMailList.mails: object expected");
                    m.mails[i] = $root.farm.MailListItem.fromObject(d.mails[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespMailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespMailList
         * @static
         * @param {farm.RespMailList} m RespMailList
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespMailList.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.mails = [];
            }
            if (m.mails && m.mails.length) {
                d.mails = [];
                for (var j = 0; j < m.mails.length; ++j) {
                    d.mails[j] = $root.farm.MailListItem.toObject(m.mails[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RespMailList to JSON.
         * @function toJSON
         * @memberof farm.RespMailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespMailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespMailList;
    })();

    farm.MailListItem = (function() {

        /**
         * Properties of a MailListItem.
         * @memberof farm
         * @interface IMailListItem
         * @property {number|Long|null} [id] MailListItem id
         * @property {farm.MailType|null} [type] MailListItem type
         * @property {number|Long|null} [sender_uid] MailListItem sender_uid
         * @property {string|null} [title] MailListItem title
         * @property {farm.MailState|null} [status] MailListItem status
         */

        /**
         * Constructs a new MailListItem.
         * @memberof farm
         * @classdesc Represents a MailListItem.
         * @implements IMailListItem
         * @constructor
         * @param {farm.IMailListItem=} [p] Properties to set
         */
        function MailListItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MailListItem id.
         * @member {number|Long} id
         * @memberof farm.MailListItem
         * @instance
         */
        MailListItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailListItem type.
         * @member {farm.MailType} type
         * @memberof farm.MailListItem
         * @instance
         */
        MailListItem.prototype.type = 0;

        /**
         * MailListItem sender_uid.
         * @member {number|Long} sender_uid
         * @memberof farm.MailListItem
         * @instance
         */
        MailListItem.prototype.sender_uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailListItem title.
         * @member {string} title
         * @memberof farm.MailListItem
         * @instance
         */
        MailListItem.prototype.title = "";

        /**
         * MailListItem status.
         * @member {farm.MailState} status
         * @memberof farm.MailListItem
         * @instance
         */
        MailListItem.prototype.status = 0;

        /**
         * Encodes the specified MailListItem message. Does not implicitly {@link farm.MailListItem.verify|verify} messages.
         * @function encode
         * @memberof farm.MailListItem
         * @static
         * @param {farm.IMailListItem} m MailListItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailListItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.sender_uid != null && Object.hasOwnProperty.call(m, "sender_uid"))
                w.uint32(24).int64(m.sender_uid);
            if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                w.uint32(34).string(m.title);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(40).int32(m.status);
            return w;
        };

        /**
         * Decodes a MailListItem message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MailListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MailListItem} MailListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailListItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MailListItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.sender_uid = r.int64();
                    break;
                case 4:
                    m.title = r.string();
                    break;
                case 5:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MailListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MailListItem
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MailListItem} MailListItem
         */
        MailListItem.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MailListItem)
                return d;
            var m = new $root.farm.MailListItem();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            switch (d.type) {
            case "SYS":
            case 0:
                m.type = 0;
                break;
            case "NPC":
            case 1:
                m.type = 1;
                break;
            case "Player":
            case 2:
                m.type = 2;
                break;
            }
            if (d.sender_uid != null) {
                if ($util.Long)
                    (m.sender_uid = $util.Long.fromValue(d.sender_uid)).unsigned = false;
                else if (typeof d.sender_uid === "string")
                    m.sender_uid = parseInt(d.sender_uid, 10);
                else if (typeof d.sender_uid === "number")
                    m.sender_uid = d.sender_uid;
                else if (typeof d.sender_uid === "object")
                    m.sender_uid = new $util.LongBits(d.sender_uid.low >>> 0, d.sender_uid.high >>> 0).toNumber();
            }
            if (d.title != null) {
                m.title = String(d.title);
            }
            switch (d.status) {
            case "No_Read":
            case 0:
                m.status = 0;
                break;
            case "Read":
            case 1:
                m.status = 1;
                break;
            }
            return m;
        };

        /**
         * Creates a plain object from a MailListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MailListItem
         * @static
         * @param {farm.MailListItem} m MailListItem
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailListItem.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.type = o.enums === String ? "SYS" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.sender_uid = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.sender_uid = o.longs === String ? "0" : 0;
                d.title = "";
                d.status = o.enums === String ? "No_Read" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.farm.MailType[m.type] : m.type;
            }
            if (m.sender_uid != null && m.hasOwnProperty("sender_uid")) {
                if (typeof m.sender_uid === "number")
                    d.sender_uid = o.longs === String ? String(m.sender_uid) : m.sender_uid;
                else
                    d.sender_uid = o.longs === String ? $util.Long.prototype.toString.call(m.sender_uid) : o.longs === Number ? new $util.LongBits(m.sender_uid.low >>> 0, m.sender_uid.high >>> 0).toNumber() : m.sender_uid;
            }
            if (m.title != null && m.hasOwnProperty("title")) {
                d.title = m.title;
            }
            if (m.status != null && m.hasOwnProperty("status")) {
                d.status = o.enums === String ? $root.farm.MailState[m.status] : m.status;
            }
            return d;
        };

        /**
         * Converts this MailListItem to JSON.
         * @function toJSON
         * @memberof farm.MailListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailListItem;
    })();

    farm.RespMailDetail = (function() {

        /**
         * Properties of a RespMailDetail.
         * @memberof farm
         * @interface IRespMailDetail
         * @property {number|Long|null} [id] RespMailDetail id
         * @property {string|null} [content] RespMailDetail content
         * @property {Array.<farm.IAnnex>|null} [annexes] RespMailDetail annexes
         * @property {farm.MailTapType|null} [type] RespMailDetail type
         */

        /**
         * Constructs a new RespMailDetail.
         * @memberof farm
         * @classdesc Represents a RespMailDetail.
         * @implements IRespMailDetail
         * @constructor
         * @param {farm.IRespMailDetail=} [p] Properties to set
         */
        function RespMailDetail(p) {
            this.annexes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespMailDetail id.
         * @member {number|Long} id
         * @memberof farm.RespMailDetail
         * @instance
         */
        RespMailDetail.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespMailDetail content.
         * @member {string} content
         * @memberof farm.RespMailDetail
         * @instance
         */
        RespMailDetail.prototype.content = "";

        /**
         * RespMailDetail annexes.
         * @member {Array.<farm.IAnnex>} annexes
         * @memberof farm.RespMailDetail
         * @instance
         */
        RespMailDetail.prototype.annexes = $util.emptyArray;

        /**
         * RespMailDetail type.
         * @member {farm.MailTapType} type
         * @memberof farm.RespMailDetail
         * @instance
         */
        RespMailDetail.prototype.type = 0;

        /**
         * Encodes the specified RespMailDetail message. Does not implicitly {@link farm.RespMailDetail.verify|verify} messages.
         * @function encode
         * @memberof farm.RespMailDetail
         * @static
         * @param {farm.IRespMailDetail} m RespMailDetail message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailDetail.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(18).string(m.content);
            if (m.annexes != null && m.annexes.length) {
                for (var i = 0; i < m.annexes.length; ++i)
                    $root.farm.Annex.encode(m.annexes[i], w.uint32(26).fork()).ldelim();
            }
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(32).int32(m.type);
            return w;
        };

        /**
         * Decodes a RespMailDetail message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespMailDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespMailDetail} RespMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailDetail.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespMailDetail();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.content = r.string();
                    break;
                case 3:
                    if (!(m.annexes && m.annexes.length))
                        m.annexes = [];
                    m.annexes.push($root.farm.Annex.decode(r, r.uint32()));
                    break;
                case 4:
                    m.type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespMailDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespMailDetail
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespMailDetail} RespMailDetail
         */
        RespMailDetail.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespMailDetail)
                return d;
            var m = new $root.farm.RespMailDetail();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.content != null) {
                m.content = String(d.content);
            }
            if (d.annexes) {
                if (!Array.isArray(d.annexes))
                    throw TypeError(".farm.RespMailDetail.annexes: array expected");
                m.annexes = [];
                for (var i = 0; i < d.annexes.length; ++i) {
                    if (typeof d.annexes[i] !== "object")
                        throw TypeError(".farm.RespMailDetail.annexes: object expected");
                    m.annexes[i] = $root.farm.Annex.fromObject(d.annexes[i]);
                }
            }
            switch (d.type) {
            case "Notification":
            case 0:
                m.type = 0;
                break;
            case "Annexes":
            case 1:
                m.type = 1;
                break;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespMailDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespMailDetail
         * @static
         * @param {farm.RespMailDetail} m RespMailDetail
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespMailDetail.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.annexes = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.content = "";
                d.type = o.enums === String ? "Notification" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.content != null && m.hasOwnProperty("content")) {
                d.content = m.content;
            }
            if (m.annexes && m.annexes.length) {
                d.annexes = [];
                for (var j = 0; j < m.annexes.length; ++j) {
                    d.annexes[j] = $root.farm.Annex.toObject(m.annexes[j], o);
                }
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.farm.MailTapType[m.type] : m.type;
            }
            return d;
        };

        /**
         * Converts this RespMailDetail to JSON.
         * @function toJSON
         * @memberof farm.RespMailDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespMailDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespMailDetail;
    })();

    farm.Annex = (function() {

        /**
         * Properties of an Annex.
         * @memberof farm
         * @interface IAnnex
         * @property {number|Long|null} [annex_id] Annex annex_id
         * @property {farm.AnnexState|null} [status] Annex status
         * @property {number|null} [num] Annex num
         */

        /**
         * Constructs a new Annex.
         * @memberof farm
         * @classdesc Represents an Annex.
         * @implements IAnnex
         * @constructor
         * @param {farm.IAnnex=} [p] Properties to set
         */
        function Annex(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Annex annex_id.
         * @member {number|Long} annex_id
         * @memberof farm.Annex
         * @instance
         */
        Annex.prototype.annex_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Annex status.
         * @member {farm.AnnexState} status
         * @memberof farm.Annex
         * @instance
         */
        Annex.prototype.status = 0;

        /**
         * Annex num.
         * @member {number} num
         * @memberof farm.Annex
         * @instance
         */
        Annex.prototype.num = 0;

        /**
         * Encodes the specified Annex message. Does not implicitly {@link farm.Annex.verify|verify} messages.
         * @function encode
         * @memberof farm.Annex
         * @static
         * @param {farm.IAnnex} m Annex message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Annex.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.annex_id != null && Object.hasOwnProperty.call(m, "annex_id"))
                w.uint32(8).int64(m.annex_id);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(16).int32(m.status);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(24).int32(m.num);
            return w;
        };

        /**
         * Decodes an Annex message from the specified reader or buffer.
         * @function decode
         * @memberof farm.Annex
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.Annex} Annex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Annex.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.Annex();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.annex_id = r.int64();
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an Annex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.Annex
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.Annex} Annex
         */
        Annex.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.Annex)
                return d;
            var m = new $root.farm.Annex();
            if (d.annex_id != null) {
                if ($util.Long)
                    (m.annex_id = $util.Long.fromValue(d.annex_id)).unsigned = false;
                else if (typeof d.annex_id === "string")
                    m.annex_id = parseInt(d.annex_id, 10);
                else if (typeof d.annex_id === "number")
                    m.annex_id = d.annex_id;
                else if (typeof d.annex_id === "object")
                    m.annex_id = new $util.LongBits(d.annex_id.low >>> 0, d.annex_id.high >>> 0).toNumber();
            }
            switch (d.status) {
            case "No_Receive":
            case 0:
                m.status = 0;
                break;
            case "Received":
            case 1:
                m.status = 1;
                break;
            }
            if (d.num != null) {
                m.num = d.num | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from an Annex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.Annex
         * @static
         * @param {farm.Annex} m Annex
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Annex.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.annex_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.annex_id = o.longs === String ? "0" : 0;
                d.status = o.enums === String ? "No_Receive" : 0;
                d.num = 0;
            }
            if (m.annex_id != null && m.hasOwnProperty("annex_id")) {
                if (typeof m.annex_id === "number")
                    d.annex_id = o.longs === String ? String(m.annex_id) : m.annex_id;
                else
                    d.annex_id = o.longs === String ? $util.Long.prototype.toString.call(m.annex_id) : o.longs === Number ? new $util.LongBits(m.annex_id.low >>> 0, m.annex_id.high >>> 0).toNumber() : m.annex_id;
            }
            if (m.status != null && m.hasOwnProperty("status")) {
                d.status = o.enums === String ? $root.farm.AnnexState[m.status] : m.status;
            }
            if (m.num != null && m.hasOwnProperty("num")) {
                d.num = m.num;
            }
            return d;
        };

        /**
         * Converts this Annex to JSON.
         * @function toJSON
         * @memberof farm.Annex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Annex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Annex;
    })();

    farm.ReqReceiveAnnex = (function() {

        /**
         * Properties of a ReqReceiveAnnex.
         * @memberof farm
         * @interface IReqReceiveAnnex
         * @property {Array.<number|Long>|null} [annexIDs] ReqReceiveAnnex annexIDs
         * @property {number|Long|null} [mail_id] ReqReceiveAnnex mail_id
         */

        /**
         * Constructs a new ReqReceiveAnnex.
         * @memberof farm
         * @classdesc Represents a ReqReceiveAnnex.
         * @implements IReqReceiveAnnex
         * @constructor
         * @param {farm.IReqReceiveAnnex=} [p] Properties to set
         */
        function ReqReceiveAnnex(p) {
            this.annexIDs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqReceiveAnnex annexIDs.
         * @member {Array.<number|Long>} annexIDs
         * @memberof farm.ReqReceiveAnnex
         * @instance
         */
        ReqReceiveAnnex.prototype.annexIDs = $util.emptyArray;

        /**
         * ReqReceiveAnnex mail_id.
         * @member {number|Long} mail_id
         * @memberof farm.ReqReceiveAnnex
         * @instance
         */
        ReqReceiveAnnex.prototype.mail_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqReceiveAnnex message. Does not implicitly {@link farm.ReqReceiveAnnex.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqReceiveAnnex
         * @static
         * @param {farm.IReqReceiveAnnex} m ReqReceiveAnnex message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReceiveAnnex.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.annexIDs != null && m.annexIDs.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.annexIDs.length; ++i)
                    w.int64(m.annexIDs[i]);
                w.ldelim();
            }
            if (m.mail_id != null && Object.hasOwnProperty.call(m, "mail_id"))
                w.uint32(16).int64(m.mail_id);
            return w;
        };

        /**
         * Decodes a ReqReceiveAnnex message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqReceiveAnnex
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqReceiveAnnex} ReqReceiveAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReceiveAnnex.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqReceiveAnnex();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.annexIDs && m.annexIDs.length))
                        m.annexIDs = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.annexIDs.push(r.int64());
                    } else
                        m.annexIDs.push(r.int64());
                    break;
                case 2:
                    m.mail_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqReceiveAnnex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqReceiveAnnex
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqReceiveAnnex} ReqReceiveAnnex
         */
        ReqReceiveAnnex.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqReceiveAnnex)
                return d;
            var m = new $root.farm.ReqReceiveAnnex();
            if (d.annexIDs) {
                if (!Array.isArray(d.annexIDs))
                    throw TypeError(".farm.ReqReceiveAnnex.annexIDs: array expected");
                m.annexIDs = [];
                for (var i = 0; i < d.annexIDs.length; ++i) {
                    if ($util.Long)
                        (m.annexIDs[i] = $util.Long.fromValue(d.annexIDs[i])).unsigned = false;
                    else if (typeof d.annexIDs[i] === "string")
                        m.annexIDs[i] = parseInt(d.annexIDs[i], 10);
                    else if (typeof d.annexIDs[i] === "number")
                        m.annexIDs[i] = d.annexIDs[i];
                    else if (typeof d.annexIDs[i] === "object")
                        m.annexIDs[i] = new $util.LongBits(d.annexIDs[i].low >>> 0, d.annexIDs[i].high >>> 0).toNumber();
                }
            }
            if (d.mail_id != null) {
                if ($util.Long)
                    (m.mail_id = $util.Long.fromValue(d.mail_id)).unsigned = false;
                else if (typeof d.mail_id === "string")
                    m.mail_id = parseInt(d.mail_id, 10);
                else if (typeof d.mail_id === "number")
                    m.mail_id = d.mail_id;
                else if (typeof d.mail_id === "object")
                    m.mail_id = new $util.LongBits(d.mail_id.low >>> 0, d.mail_id.high >>> 0).toNumber();
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqReceiveAnnex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqReceiveAnnex
         * @static
         * @param {farm.ReqReceiveAnnex} m ReqReceiveAnnex
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqReceiveAnnex.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.annexIDs = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mail_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.mail_id = o.longs === String ? "0" : 0;
            }
            if (m.annexIDs && m.annexIDs.length) {
                d.annexIDs = [];
                for (var j = 0; j < m.annexIDs.length; ++j) {
                    if (typeof m.annexIDs[j] === "number")
                        d.annexIDs[j] = o.longs === String ? String(m.annexIDs[j]) : m.annexIDs[j];
                    else
                        d.annexIDs[j] = o.longs === String ? $util.Long.prototype.toString.call(m.annexIDs[j]) : o.longs === Number ? new $util.LongBits(m.annexIDs[j].low >>> 0, m.annexIDs[j].high >>> 0).toNumber() : m.annexIDs[j];
                }
            }
            if (m.mail_id != null && m.hasOwnProperty("mail_id")) {
                if (typeof m.mail_id === "number")
                    d.mail_id = o.longs === String ? String(m.mail_id) : m.mail_id;
                else
                    d.mail_id = o.longs === String ? $util.Long.prototype.toString.call(m.mail_id) : o.longs === Number ? new $util.LongBits(m.mail_id.low >>> 0, m.mail_id.high >>> 0).toNumber() : m.mail_id;
            }
            return d;
        };

        /**
         * Converts this ReqReceiveAnnex to JSON.
         * @function toJSON
         * @memberof farm.ReqReceiveAnnex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqReceiveAnnex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqReceiveAnnex;
    })();

    /**
     * QuestState enum.
     * @name farm.QuestState
     * @enum {number}
     * @property {number} Pending=0 Pending value
     * @property {number} Unlocked=1 Unlocked value
     * @property {number} Inprogress=2 Inprogress value
     * @property {number} Complete=3 Complete value
     * @property {number} Cancel=4 Cancel value
     * @property {number} Done=5 Done value
     */
    farm.QuestState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Pending"] = 0;
        values[valuesById[1] = "Unlocked"] = 1;
        values[valuesById[2] = "Inprogress"] = 2;
        values[valuesById[3] = "Complete"] = 3;
        values[valuesById[4] = "Cancel"] = 4;
        values[valuesById[5] = "Done"] = 5;
        return values;
    })();

    /**
     * DialogStageType enum.
     * @name farm.DialogStageType
     * @enum {number}
     * @property {number} NPCDialog=0 NPCDialog value
     * @property {number} PhoneDialog=1 PhoneDialog value
     * @property {number} QuestBoardDialog=2 QuestBoardDialog value
     */
    farm.DialogStageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NPCDialog"] = 0;
        values[valuesById[1] = "PhoneDialog"] = 1;
        values[valuesById[2] = "QuestBoardDialog"] = 2;
        return values;
    })();

    farm.MessagePhoneCall = (function() {

        /**
         * Properties of a MessagePhoneCall.
         * @memberof farm
         * @interface IMessagePhoneCall
         * @property {number|null} [char_config_id] MessagePhoneCall char_config_id
         * @property {number|null} [dlg_stage_id] MessagePhoneCall dlg_stage_id
         */

        /**
         * Constructs a new MessagePhoneCall.
         * @memberof farm
         * @classdesc Represents a MessagePhoneCall.
         * @implements IMessagePhoneCall
         * @constructor
         * @param {farm.IMessagePhoneCall=} [p] Properties to set
         */
        function MessagePhoneCall(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessagePhoneCall char_config_id.
         * @member {number} char_config_id
         * @memberof farm.MessagePhoneCall
         * @instance
         */
        MessagePhoneCall.prototype.char_config_id = 0;

        /**
         * MessagePhoneCall dlg_stage_id.
         * @member {number} dlg_stage_id
         * @memberof farm.MessagePhoneCall
         * @instance
         */
        MessagePhoneCall.prototype.dlg_stage_id = 0;

        /**
         * Encodes the specified MessagePhoneCall message. Does not implicitly {@link farm.MessagePhoneCall.verify|verify} messages.
         * @function encode
         * @memberof farm.MessagePhoneCall
         * @static
         * @param {farm.IMessagePhoneCall} m MessagePhoneCall message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagePhoneCall.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.char_config_id != null && Object.hasOwnProperty.call(m, "char_config_id"))
                w.uint32(8).int32(m.char_config_id);
            if (m.dlg_stage_id != null && Object.hasOwnProperty.call(m, "dlg_stage_id"))
                w.uint32(16).int32(m.dlg_stage_id);
            return w;
        };

        /**
         * Decodes a MessagePhoneCall message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessagePhoneCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessagePhoneCall} MessagePhoneCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagePhoneCall.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessagePhoneCall();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.char_config_id = r.int32();
                    break;
                case 2:
                    m.dlg_stage_id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessagePhoneCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessagePhoneCall
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessagePhoneCall} MessagePhoneCall
         */
        MessagePhoneCall.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessagePhoneCall)
                return d;
            var m = new $root.farm.MessagePhoneCall();
            if (d.char_config_id != null) {
                m.char_config_id = d.char_config_id | 0;
            }
            if (d.dlg_stage_id != null) {
                m.dlg_stage_id = d.dlg_stage_id | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a MessagePhoneCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessagePhoneCall
         * @static
         * @param {farm.MessagePhoneCall} m MessagePhoneCall
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessagePhoneCall.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.char_config_id = 0;
                d.dlg_stage_id = 0;
            }
            if (m.char_config_id != null && m.hasOwnProperty("char_config_id")) {
                d.char_config_id = m.char_config_id;
            }
            if (m.dlg_stage_id != null && m.hasOwnProperty("dlg_stage_id")) {
                d.dlg_stage_id = m.dlg_stage_id;
            }
            return d;
        };

        /**
         * Converts this MessagePhoneCall to JSON.
         * @function toJSON
         * @memberof farm.MessagePhoneCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessagePhoneCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessagePhoneCall;
    })();

    farm.QuestData = (function() {

        /**
         * Properties of a QuestData.
         * @memberof farm
         * @interface IQuestData
         * @property {number|Long|null} [id] QuestData id
         * @property {number|null} [config_id] QuestData config_id
         * @property {farm.QuestState|null} [state] QuestData state
         * @property {number|Long|null} [left_dur] QuestData left_dur
         * @property {Array.<number>|null} [task_data] QuestData task_data
         */

        /**
         * Constructs a new QuestData.
         * @memberof farm
         * @classdesc Represents a QuestData.
         * @implements IQuestData
         * @constructor
         * @param {farm.IQuestData=} [p] Properties to set
         */
        function QuestData(p) {
            this.task_data = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * QuestData id.
         * @member {number|Long} id
         * @memberof farm.QuestData
         * @instance
         */
        QuestData.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * QuestData config_id.
         * @member {number} config_id
         * @memberof farm.QuestData
         * @instance
         */
        QuestData.prototype.config_id = 0;

        /**
         * QuestData state.
         * @member {farm.QuestState} state
         * @memberof farm.QuestData
         * @instance
         */
        QuestData.prototype.state = 0;

        /**
         * QuestData left_dur.
         * @member {number|Long} left_dur
         * @memberof farm.QuestData
         * @instance
         */
        QuestData.prototype.left_dur = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * QuestData task_data.
         * @member {Array.<number>} task_data
         * @memberof farm.QuestData
         * @instance
         */
        QuestData.prototype.task_data = $util.emptyArray;

        /**
         * Encodes the specified QuestData message. Does not implicitly {@link farm.QuestData.verify|verify} messages.
         * @function encode
         * @memberof farm.QuestData
         * @static
         * @param {farm.IQuestData} m QuestData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.config_id != null && Object.hasOwnProperty.call(m, "config_id"))
                w.uint32(16).int32(m.config_id);
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(24).int32(m.state);
            if (m.left_dur != null && Object.hasOwnProperty.call(m, "left_dur"))
                w.uint32(32).int64(m.left_dur);
            if (m.task_data != null && m.task_data.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.task_data.length; ++i)
                    w.int32(m.task_data[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a QuestData message from the specified reader or buffer.
         * @function decode
         * @memberof farm.QuestData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.QuestData} QuestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.QuestData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.config_id = r.int32();
                    break;
                case 3:
                    m.state = r.int32();
                    break;
                case 4:
                    m.left_dur = r.int64();
                    break;
                case 5:
                    if (!(m.task_data && m.task_data.length))
                        m.task_data = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.task_data.push(r.int32());
                    } else
                        m.task_data.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a QuestData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.QuestData
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.QuestData} QuestData
         */
        QuestData.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.QuestData)
                return d;
            var m = new $root.farm.QuestData();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            if (d.config_id != null) {
                m.config_id = d.config_id | 0;
            }
            switch (d.state) {
            case "Pending":
            case 0:
                m.state = 0;
                break;
            case "Unlocked":
            case 1:
                m.state = 1;
                break;
            case "Inprogress":
            case 2:
                m.state = 2;
                break;
            case "Complete":
            case 3:
                m.state = 3;
                break;
            case "Cancel":
            case 4:
                m.state = 4;
                break;
            case "Done":
            case 5:
                m.state = 5;
                break;
            }
            if (d.left_dur != null) {
                if ($util.Long)
                    (m.left_dur = $util.Long.fromValue(d.left_dur)).unsigned = false;
                else if (typeof d.left_dur === "string")
                    m.left_dur = parseInt(d.left_dur, 10);
                else if (typeof d.left_dur === "number")
                    m.left_dur = d.left_dur;
                else if (typeof d.left_dur === "object")
                    m.left_dur = new $util.LongBits(d.left_dur.low >>> 0, d.left_dur.high >>> 0).toNumber();
            }
            if (d.task_data) {
                if (!Array.isArray(d.task_data))
                    throw TypeError(".farm.QuestData.task_data: array expected");
                m.task_data = [];
                for (var i = 0; i < d.task_data.length; ++i) {
                    m.task_data[i] = d.task_data[i] | 0;
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a QuestData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.QuestData
         * @static
         * @param {farm.QuestData} m QuestData
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestData.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.task_data = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.config_id = 0;
                d.state = o.enums === String ? "Pending" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.left_dur = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.left_dur = o.longs === String ? "0" : 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.config_id != null && m.hasOwnProperty("config_id")) {
                d.config_id = m.config_id;
            }
            if (m.state != null && m.hasOwnProperty("state")) {
                d.state = o.enums === String ? $root.farm.QuestState[m.state] : m.state;
            }
            if (m.left_dur != null && m.hasOwnProperty("left_dur")) {
                if (typeof m.left_dur === "number")
                    d.left_dur = o.longs === String ? String(m.left_dur) : m.left_dur;
                else
                    d.left_dur = o.longs === String ? $util.Long.prototype.toString.call(m.left_dur) : o.longs === Number ? new $util.LongBits(m.left_dur.low >>> 0, m.left_dur.high >>> 0).toNumber() : m.left_dur;
            }
            if (m.task_data && m.task_data.length) {
                d.task_data = [];
                for (var j = 0; j < m.task_data.length; ++j) {
                    d.task_data[j] = m.task_data[j];
                }
            }
            return d;
        };

        /**
         * Converts this QuestData to JSON.
         * @function toJSON
         * @memberof farm.QuestData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuestData;
    })();

    farm.MessageQuestList = (function() {

        /**
         * Properties of a MessageQuestList.
         * @memberof farm
         * @interface IMessageQuestList
         * @property {Array.<farm.IQuestData>|null} [quests] MessageQuestList quests
         * @property {number|null} [done_quest_count_today] MessageQuestList done_quest_count_today
         * @property {number|null} [extra_award_left_times] MessageQuestList extra_award_left_times
         * @property {number|null} [daily_circle_quest_next_cost] MessageQuestList daily_circle_quest_next_cost
         */

        /**
         * Constructs a new MessageQuestList.
         * @memberof farm
         * @classdesc Represents a MessageQuestList.
         * @implements IMessageQuestList
         * @constructor
         * @param {farm.IMessageQuestList=} [p] Properties to set
         */
        function MessageQuestList(p) {
            this.quests = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessageQuestList quests.
         * @member {Array.<farm.IQuestData>} quests
         * @memberof farm.MessageQuestList
         * @instance
         */
        MessageQuestList.prototype.quests = $util.emptyArray;

        /**
         * MessageQuestList done_quest_count_today.
         * @member {number} done_quest_count_today
         * @memberof farm.MessageQuestList
         * @instance
         */
        MessageQuestList.prototype.done_quest_count_today = 0;

        /**
         * MessageQuestList extra_award_left_times.
         * @member {number} extra_award_left_times
         * @memberof farm.MessageQuestList
         * @instance
         */
        MessageQuestList.prototype.extra_award_left_times = 0;

        /**
         * MessageQuestList daily_circle_quest_next_cost.
         * @member {number} daily_circle_quest_next_cost
         * @memberof farm.MessageQuestList
         * @instance
         */
        MessageQuestList.prototype.daily_circle_quest_next_cost = 0;

        /**
         * Encodes the specified MessageQuestList message. Does not implicitly {@link farm.MessageQuestList.verify|verify} messages.
         * @function encode
         * @memberof farm.MessageQuestList
         * @static
         * @param {farm.IMessageQuestList} m MessageQuestList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageQuestList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.quests != null && m.quests.length) {
                for (var i = 0; i < m.quests.length; ++i)
                    $root.farm.QuestData.encode(m.quests[i], w.uint32(10).fork()).ldelim();
            }
            if (m.done_quest_count_today != null && Object.hasOwnProperty.call(m, "done_quest_count_today"))
                w.uint32(16).int32(m.done_quest_count_today);
            if (m.extra_award_left_times != null && Object.hasOwnProperty.call(m, "extra_award_left_times"))
                w.uint32(24).int32(m.extra_award_left_times);
            if (m.daily_circle_quest_next_cost != null && Object.hasOwnProperty.call(m, "daily_circle_quest_next_cost"))
                w.uint32(32).int32(m.daily_circle_quest_next_cost);
            return w;
        };

        /**
         * Decodes a MessageQuestList message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessageQuestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessageQuestList} MessageQuestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageQuestList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessageQuestList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.quests && m.quests.length))
                        m.quests = [];
                    m.quests.push($root.farm.QuestData.decode(r, r.uint32()));
                    break;
                case 2:
                    m.done_quest_count_today = r.int32();
                    break;
                case 3:
                    m.extra_award_left_times = r.int32();
                    break;
                case 4:
                    m.daily_circle_quest_next_cost = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessageQuestList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessageQuestList
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessageQuestList} MessageQuestList
         */
        MessageQuestList.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessageQuestList)
                return d;
            var m = new $root.farm.MessageQuestList();
            if (d.quests) {
                if (!Array.isArray(d.quests))
                    throw TypeError(".farm.MessageQuestList.quests: array expected");
                m.quests = [];
                for (var i = 0; i < d.quests.length; ++i) {
                    if (typeof d.quests[i] !== "object")
                        throw TypeError(".farm.MessageQuestList.quests: object expected");
                    m.quests[i] = $root.farm.QuestData.fromObject(d.quests[i]);
                }
            }
            if (d.done_quest_count_today != null) {
                m.done_quest_count_today = d.done_quest_count_today | 0;
            }
            if (d.extra_award_left_times != null) {
                m.extra_award_left_times = d.extra_award_left_times | 0;
            }
            if (d.daily_circle_quest_next_cost != null) {
                m.daily_circle_quest_next_cost = d.daily_circle_quest_next_cost | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a MessageQuestList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessageQuestList
         * @static
         * @param {farm.MessageQuestList} m MessageQuestList
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageQuestList.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.quests = [];
            }
            if (o.defaults) {
                d.done_quest_count_today = 0;
                d.extra_award_left_times = 0;
                d.daily_circle_quest_next_cost = 0;
            }
            if (m.quests && m.quests.length) {
                d.quests = [];
                for (var j = 0; j < m.quests.length; ++j) {
                    d.quests[j] = $root.farm.QuestData.toObject(m.quests[j], o);
                }
            }
            if (m.done_quest_count_today != null && m.hasOwnProperty("done_quest_count_today")) {
                d.done_quest_count_today = m.done_quest_count_today;
            }
            if (m.extra_award_left_times != null && m.hasOwnProperty("extra_award_left_times")) {
                d.extra_award_left_times = m.extra_award_left_times;
            }
            if (m.daily_circle_quest_next_cost != null && m.hasOwnProperty("daily_circle_quest_next_cost")) {
                d.daily_circle_quest_next_cost = m.daily_circle_quest_next_cost;
            }
            return d;
        };

        /**
         * Converts this MessageQuestList to JSON.
         * @function toJSON
         * @memberof farm.MessageQuestList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageQuestList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageQuestList;
    })();

    farm.MessageQuestUpdate = (function() {

        /**
         * Properties of a MessageQuestUpdate.
         * @memberof farm
         * @interface IMessageQuestUpdate
         * @property {farm.IQuestData|null} [quest] MessageQuestUpdate quest
         * @property {number|null} [heard_count] MessageQuestUpdate heard_count
         * @property {number|null} [done_quest_count_today] MessageQuestUpdate done_quest_count_today
         * @property {number|null} [extra_award_left_times] MessageQuestUpdate extra_award_left_times
         */

        /**
         * Constructs a new MessageQuestUpdate.
         * @memberof farm
         * @classdesc Represents a MessageQuestUpdate.
         * @implements IMessageQuestUpdate
         * @constructor
         * @param {farm.IMessageQuestUpdate=} [p] Properties to set
         */
        function MessageQuestUpdate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessageQuestUpdate quest.
         * @member {farm.IQuestData|null|undefined} quest
         * @memberof farm.MessageQuestUpdate
         * @instance
         */
        MessageQuestUpdate.prototype.quest = null;

        /**
         * MessageQuestUpdate heard_count.
         * @member {number} heard_count
         * @memberof farm.MessageQuestUpdate
         * @instance
         */
        MessageQuestUpdate.prototype.heard_count = 0;

        /**
         * MessageQuestUpdate done_quest_count_today.
         * @member {number} done_quest_count_today
         * @memberof farm.MessageQuestUpdate
         * @instance
         */
        MessageQuestUpdate.prototype.done_quest_count_today = 0;

        /**
         * MessageQuestUpdate extra_award_left_times.
         * @member {number} extra_award_left_times
         * @memberof farm.MessageQuestUpdate
         * @instance
         */
        MessageQuestUpdate.prototype.extra_award_left_times = 0;

        /**
         * Encodes the specified MessageQuestUpdate message. Does not implicitly {@link farm.MessageQuestUpdate.verify|verify} messages.
         * @function encode
         * @memberof farm.MessageQuestUpdate
         * @static
         * @param {farm.IMessageQuestUpdate} m MessageQuestUpdate message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageQuestUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.quest != null && Object.hasOwnProperty.call(m, "quest"))
                $root.farm.QuestData.encode(m.quest, w.uint32(10).fork()).ldelim();
            if (m.heard_count != null && Object.hasOwnProperty.call(m, "heard_count"))
                w.uint32(16).int32(m.heard_count);
            if (m.done_quest_count_today != null && Object.hasOwnProperty.call(m, "done_quest_count_today"))
                w.uint32(24).int32(m.done_quest_count_today);
            if (m.extra_award_left_times != null && Object.hasOwnProperty.call(m, "extra_award_left_times"))
                w.uint32(32).int32(m.extra_award_left_times);
            return w;
        };

        /**
         * Decodes a MessageQuestUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof farm.MessageQuestUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.MessageQuestUpdate} MessageQuestUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageQuestUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.MessageQuestUpdate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.quest = $root.farm.QuestData.decode(r, r.uint32());
                    break;
                case 2:
                    m.heard_count = r.int32();
                    break;
                case 3:
                    m.done_quest_count_today = r.int32();
                    break;
                case 4:
                    m.extra_award_left_times = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a MessageQuestUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.MessageQuestUpdate
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.MessageQuestUpdate} MessageQuestUpdate
         */
        MessageQuestUpdate.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.MessageQuestUpdate)
                return d;
            var m = new $root.farm.MessageQuestUpdate();
            if (d.quest != null) {
                if (typeof d.quest !== "object")
                    throw TypeError(".farm.MessageQuestUpdate.quest: object expected");
                m.quest = $root.farm.QuestData.fromObject(d.quest);
            }
            if (d.heard_count != null) {
                m.heard_count = d.heard_count | 0;
            }
            if (d.done_quest_count_today != null) {
                m.done_quest_count_today = d.done_quest_count_today | 0;
            }
            if (d.extra_award_left_times != null) {
                m.extra_award_left_times = d.extra_award_left_times | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a MessageQuestUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.MessageQuestUpdate
         * @static
         * @param {farm.MessageQuestUpdate} m MessageQuestUpdate
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageQuestUpdate.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.quest = null;
                d.heard_count = 0;
                d.done_quest_count_today = 0;
                d.extra_award_left_times = 0;
            }
            if (m.quest != null && m.hasOwnProperty("quest")) {
                d.quest = $root.farm.QuestData.toObject(m.quest, o);
            }
            if (m.heard_count != null && m.hasOwnProperty("heard_count")) {
                d.heard_count = m.heard_count;
            }
            if (m.done_quest_count_today != null && m.hasOwnProperty("done_quest_count_today")) {
                d.done_quest_count_today = m.done_quest_count_today;
            }
            if (m.extra_award_left_times != null && m.hasOwnProperty("extra_award_left_times")) {
                d.extra_award_left_times = m.extra_award_left_times;
            }
            return d;
        };

        /**
         * Converts this MessageQuestUpdate to JSON.
         * @function toJSON
         * @memberof farm.MessageQuestUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageQuestUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageQuestUpdate;
    })();

    farm.ReqQuestGainExtraAward = (function() {

        /**
         * Properties of a ReqQuestGainExtraAward.
         * @memberof farm
         * @interface IReqQuestGainExtraAward
         * @property {number|null} [extend] ReqQuestGainExtraAward extend
         */

        /**
         * Constructs a new ReqQuestGainExtraAward.
         * @memberof farm
         * @classdesc Represents a ReqQuestGainExtraAward.
         * @implements IReqQuestGainExtraAward
         * @constructor
         * @param {farm.IReqQuestGainExtraAward=} [p] Properties to set
         */
        function ReqQuestGainExtraAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqQuestGainExtraAward extend.
         * @member {number} extend
         * @memberof farm.ReqQuestGainExtraAward
         * @instance
         */
        ReqQuestGainExtraAward.prototype.extend = 0;

        /**
         * Encodes the specified ReqQuestGainExtraAward message. Does not implicitly {@link farm.ReqQuestGainExtraAward.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqQuestGainExtraAward
         * @static
         * @param {farm.IReqQuestGainExtraAward} m ReqQuestGainExtraAward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqQuestGainExtraAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.extend != null && Object.hasOwnProperty.call(m, "extend"))
                w.uint32(8).int32(m.extend);
            return w;
        };

        /**
         * Decodes a ReqQuestGainExtraAward message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqQuestGainExtraAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqQuestGainExtraAward} ReqQuestGainExtraAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqQuestGainExtraAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqQuestGainExtraAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.extend = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqQuestGainExtraAward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqQuestGainExtraAward
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqQuestGainExtraAward} ReqQuestGainExtraAward
         */
        ReqQuestGainExtraAward.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqQuestGainExtraAward)
                return d;
            var m = new $root.farm.ReqQuestGainExtraAward();
            if (d.extend != null) {
                m.extend = d.extend | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqQuestGainExtraAward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqQuestGainExtraAward
         * @static
         * @param {farm.ReqQuestGainExtraAward} m ReqQuestGainExtraAward
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqQuestGainExtraAward.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.extend = 0;
            }
            if (m.extend != null && m.hasOwnProperty("extend")) {
                d.extend = m.extend;
            }
            return d;
        };

        /**
         * Converts this ReqQuestGainExtraAward to JSON.
         * @function toJSON
         * @memberof farm.ReqQuestGainExtraAward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqQuestGainExtraAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqQuestGainExtraAward;
    })();

    farm.RespQuestGainExtraAWard = (function() {

        /**
         * Properties of a RespQuestGainExtraAWard.
         * @memberof farm
         * @interface IRespQuestGainExtraAWard
         * @property {number|null} [extra_award_left_times] RespQuestGainExtraAWard extra_award_left_times
         */

        /**
         * Constructs a new RespQuestGainExtraAWard.
         * @memberof farm
         * @classdesc Represents a RespQuestGainExtraAWard.
         * @implements IRespQuestGainExtraAWard
         * @constructor
         * @param {farm.IRespQuestGainExtraAWard=} [p] Properties to set
         */
        function RespQuestGainExtraAWard(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespQuestGainExtraAWard extra_award_left_times.
         * @member {number} extra_award_left_times
         * @memberof farm.RespQuestGainExtraAWard
         * @instance
         */
        RespQuestGainExtraAWard.prototype.extra_award_left_times = 0;

        /**
         * Encodes the specified RespQuestGainExtraAWard message. Does not implicitly {@link farm.RespQuestGainExtraAWard.verify|verify} messages.
         * @function encode
         * @memberof farm.RespQuestGainExtraAWard
         * @static
         * @param {farm.IRespQuestGainExtraAWard} m RespQuestGainExtraAWard message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespQuestGainExtraAWard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.extra_award_left_times != null && Object.hasOwnProperty.call(m, "extra_award_left_times"))
                w.uint32(8).int32(m.extra_award_left_times);
            return w;
        };

        /**
         * Decodes a RespQuestGainExtraAWard message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespQuestGainExtraAWard
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespQuestGainExtraAWard} RespQuestGainExtraAWard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespQuestGainExtraAWard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespQuestGainExtraAWard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.extra_award_left_times = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespQuestGainExtraAWard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespQuestGainExtraAWard
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespQuestGainExtraAWard} RespQuestGainExtraAWard
         */
        RespQuestGainExtraAWard.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespQuestGainExtraAWard)
                return d;
            var m = new $root.farm.RespQuestGainExtraAWard();
            if (d.extra_award_left_times != null) {
                m.extra_award_left_times = d.extra_award_left_times | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespQuestGainExtraAWard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespQuestGainExtraAWard
         * @static
         * @param {farm.RespQuestGainExtraAWard} m RespQuestGainExtraAWard
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespQuestGainExtraAWard.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.extra_award_left_times = 0;
            }
            if (m.extra_award_left_times != null && m.hasOwnProperty("extra_award_left_times")) {
                d.extra_award_left_times = m.extra_award_left_times;
            }
            return d;
        };

        /**
         * Converts this RespQuestGainExtraAWard to JSON.
         * @function toJSON
         * @memberof farm.RespQuestGainExtraAWard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespQuestGainExtraAWard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespQuestGainExtraAWard;
    })();

    farm.ReqQuestGainDailyCircleOne = (function() {

        /**
         * Properties of a ReqQuestGainDailyCircleOne.
         * @memberof farm
         * @interface IReqQuestGainDailyCircleOne
         * @property {number|null} [extend] ReqQuestGainDailyCircleOne extend
         */

        /**
         * Constructs a new ReqQuestGainDailyCircleOne.
         * @memberof farm
         * @classdesc Represents a ReqQuestGainDailyCircleOne.
         * @implements IReqQuestGainDailyCircleOne
         * @constructor
         * @param {farm.IReqQuestGainDailyCircleOne=} [p] Properties to set
         */
        function ReqQuestGainDailyCircleOne(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqQuestGainDailyCircleOne extend.
         * @member {number} extend
         * @memberof farm.ReqQuestGainDailyCircleOne
         * @instance
         */
        ReqQuestGainDailyCircleOne.prototype.extend = 0;

        /**
         * Encodes the specified ReqQuestGainDailyCircleOne message. Does not implicitly {@link farm.ReqQuestGainDailyCircleOne.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqQuestGainDailyCircleOne
         * @static
         * @param {farm.IReqQuestGainDailyCircleOne} m ReqQuestGainDailyCircleOne message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqQuestGainDailyCircleOne.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.extend != null && Object.hasOwnProperty.call(m, "extend"))
                w.uint32(8).int32(m.extend);
            return w;
        };

        /**
         * Decodes a ReqQuestGainDailyCircleOne message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqQuestGainDailyCircleOne
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqQuestGainDailyCircleOne} ReqQuestGainDailyCircleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqQuestGainDailyCircleOne.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqQuestGainDailyCircleOne();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.extend = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqQuestGainDailyCircleOne message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqQuestGainDailyCircleOne
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqQuestGainDailyCircleOne} ReqQuestGainDailyCircleOne
         */
        ReqQuestGainDailyCircleOne.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqQuestGainDailyCircleOne)
                return d;
            var m = new $root.farm.ReqQuestGainDailyCircleOne();
            if (d.extend != null) {
                m.extend = d.extend | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqQuestGainDailyCircleOne message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqQuestGainDailyCircleOne
         * @static
         * @param {farm.ReqQuestGainDailyCircleOne} m ReqQuestGainDailyCircleOne
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqQuestGainDailyCircleOne.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.extend = 0;
            }
            if (m.extend != null && m.hasOwnProperty("extend")) {
                d.extend = m.extend;
            }
            return d;
        };

        /**
         * Converts this ReqQuestGainDailyCircleOne to JSON.
         * @function toJSON
         * @memberof farm.ReqQuestGainDailyCircleOne
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqQuestGainDailyCircleOne.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqQuestGainDailyCircleOne;
    })();

    farm.RespQuestGainDailyCircleOne = (function() {

        /**
         * Properties of a RespQuestGainDailyCircleOne.
         * @memberof farm
         * @interface IRespQuestGainDailyCircleOne
         * @property {number|null} [daily_circle_quest_next_cost] RespQuestGainDailyCircleOne daily_circle_quest_next_cost
         */

        /**
         * Constructs a new RespQuestGainDailyCircleOne.
         * @memberof farm
         * @classdesc Represents a RespQuestGainDailyCircleOne.
         * @implements IRespQuestGainDailyCircleOne
         * @constructor
         * @param {farm.IRespQuestGainDailyCircleOne=} [p] Properties to set
         */
        function RespQuestGainDailyCircleOne(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespQuestGainDailyCircleOne daily_circle_quest_next_cost.
         * @member {number} daily_circle_quest_next_cost
         * @memberof farm.RespQuestGainDailyCircleOne
         * @instance
         */
        RespQuestGainDailyCircleOne.prototype.daily_circle_quest_next_cost = 0;

        /**
         * Encodes the specified RespQuestGainDailyCircleOne message. Does not implicitly {@link farm.RespQuestGainDailyCircleOne.verify|verify} messages.
         * @function encode
         * @memberof farm.RespQuestGainDailyCircleOne
         * @static
         * @param {farm.IRespQuestGainDailyCircleOne} m RespQuestGainDailyCircleOne message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespQuestGainDailyCircleOne.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.daily_circle_quest_next_cost != null && Object.hasOwnProperty.call(m, "daily_circle_quest_next_cost"))
                w.uint32(8).int32(m.daily_circle_quest_next_cost);
            return w;
        };

        /**
         * Decodes a RespQuestGainDailyCircleOne message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespQuestGainDailyCircleOne
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespQuestGainDailyCircleOne} RespQuestGainDailyCircleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespQuestGainDailyCircleOne.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespQuestGainDailyCircleOne();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.daily_circle_quest_next_cost = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespQuestGainDailyCircleOne message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespQuestGainDailyCircleOne
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespQuestGainDailyCircleOne} RespQuestGainDailyCircleOne
         */
        RespQuestGainDailyCircleOne.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespQuestGainDailyCircleOne)
                return d;
            var m = new $root.farm.RespQuestGainDailyCircleOne();
            if (d.daily_circle_quest_next_cost != null) {
                m.daily_circle_quest_next_cost = d.daily_circle_quest_next_cost | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespQuestGainDailyCircleOne message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespQuestGainDailyCircleOne
         * @static
         * @param {farm.RespQuestGainDailyCircleOne} m RespQuestGainDailyCircleOne
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespQuestGainDailyCircleOne.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.daily_circle_quest_next_cost = 0;
            }
            if (m.daily_circle_quest_next_cost != null && m.hasOwnProperty("daily_circle_quest_next_cost")) {
                d.daily_circle_quest_next_cost = m.daily_circle_quest_next_cost;
            }
            return d;
        };

        /**
         * Converts this RespQuestGainDailyCircleOne to JSON.
         * @function toJSON
         * @memberof farm.RespQuestGainDailyCircleOne
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespQuestGainDailyCircleOne.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespQuestGainDailyCircleOne;
    })();

    farm.ReqDlgStageDone = (function() {

        /**
         * Properties of a ReqDlgStageDone.
         * @memberof farm
         * @interface IReqDlgStageDone
         * @property {number|null} [dlg_stage_id] ReqDlgStageDone dlg_stage_id
         * @property {number|null} [state] ReqDlgStageDone state
         * @property {Object.<string,string>|null} [metadata] ReqDlgStageDone metadata
         * @property {farm.DialogStageType|null} [stageType] ReqDlgStageDone stageType
         */

        /**
         * Constructs a new ReqDlgStageDone.
         * @memberof farm
         * @classdesc Represents a ReqDlgStageDone.
         * @implements IReqDlgStageDone
         * @constructor
         * @param {farm.IReqDlgStageDone=} [p] Properties to set
         */
        function ReqDlgStageDone(p) {
            this.metadata = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqDlgStageDone dlg_stage_id.
         * @member {number} dlg_stage_id
         * @memberof farm.ReqDlgStageDone
         * @instance
         */
        ReqDlgStageDone.prototype.dlg_stage_id = 0;

        /**
         * ReqDlgStageDone state.
         * @member {number} state
         * @memberof farm.ReqDlgStageDone
         * @instance
         */
        ReqDlgStageDone.prototype.state = 0;

        /**
         * ReqDlgStageDone metadata.
         * @member {Object.<string,string>} metadata
         * @memberof farm.ReqDlgStageDone
         * @instance
         */
        ReqDlgStageDone.prototype.metadata = $util.emptyObject;

        /**
         * ReqDlgStageDone stageType.
         * @member {farm.DialogStageType} stageType
         * @memberof farm.ReqDlgStageDone
         * @instance
         */
        ReqDlgStageDone.prototype.stageType = 0;

        /**
         * Encodes the specified ReqDlgStageDone message. Does not implicitly {@link farm.ReqDlgStageDone.verify|verify} messages.
         * @function encode
         * @memberof farm.ReqDlgStageDone
         * @static
         * @param {farm.IReqDlgStageDone} m ReqDlgStageDone message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDlgStageDone.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.dlg_stage_id != null && Object.hasOwnProperty.call(m, "dlg_stage_id"))
                w.uint32(8).int32(m.dlg_stage_id);
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(16).int32(m.state);
            if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                    w.uint32(26).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                }
            }
            if (m.stageType != null && Object.hasOwnProperty.call(m, "stageType"))
                w.uint32(32).int32(m.stageType);
            return w;
        };

        /**
         * Decodes a ReqDlgStageDone message from the specified reader or buffer.
         * @function decode
         * @memberof farm.ReqDlgStageDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.ReqDlgStageDone} ReqDlgStageDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDlgStageDone.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.ReqDlgStageDone(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.dlg_stage_id = r.int32();
                    break;
                case 2:
                    m.state = r.int32();
                    break;
                case 3:
                    r.skip().pos++;
                    if (m.metadata === $util.emptyObject)
                        m.metadata = {};
                    k = r.string();
                    r.pos++;
                    m.metadata[k] = r.string();
                    break;
                case 4:
                    m.stageType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqDlgStageDone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.ReqDlgStageDone
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.ReqDlgStageDone} ReqDlgStageDone
         */
        ReqDlgStageDone.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.ReqDlgStageDone)
                return d;
            var m = new $root.farm.ReqDlgStageDone();
            if (d.dlg_stage_id != null) {
                m.dlg_stage_id = d.dlg_stage_id | 0;
            }
            if (d.state != null) {
                m.state = d.state | 0;
            }
            if (d.metadata) {
                if (typeof d.metadata !== "object")
                    throw TypeError(".farm.ReqDlgStageDone.metadata: object expected");
                m.metadata = {};
                for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                    m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                }
            }
            switch (d.stageType) {
            case "NPCDialog":
            case 0:
                m.stageType = 0;
                break;
            case "PhoneDialog":
            case 1:
                m.stageType = 1;
                break;
            case "QuestBoardDialog":
            case 2:
                m.stageType = 2;
                break;
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqDlgStageDone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.ReqDlgStageDone
         * @static
         * @param {farm.ReqDlgStageDone} m ReqDlgStageDone
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqDlgStageDone.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.metadata = {};
            }
            if (o.defaults) {
                d.dlg_stage_id = 0;
                d.state = 0;
                d.stageType = o.enums === String ? "NPCDialog" : 0;
            }
            if (m.dlg_stage_id != null && m.hasOwnProperty("dlg_stage_id")) {
                d.dlg_stage_id = m.dlg_stage_id;
            }
            if (m.state != null && m.hasOwnProperty("state")) {
                d.state = m.state;
            }
            var ks2;
            if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                d.metadata = {};
                for (var j = 0; j < ks2.length; ++j) {
                    d.metadata[ks2[j]] = m.metadata[ks2[j]];
                }
            }
            if (m.stageType != null && m.hasOwnProperty("stageType")) {
                d.stageType = o.enums === String ? $root.farm.DialogStageType[m.stageType] : m.stageType;
            }
            return d;
        };

        /**
         * Converts this ReqDlgStageDone to JSON.
         * @function toJSON
         * @memberof farm.ReqDlgStageDone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqDlgStageDone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqDlgStageDone;
    })();

    farm.RespDlgStageDone = (function() {

        /**
         * Properties of a RespDlgStageDone.
         * @memberof farm
         * @interface IRespDlgStageDone
         * @property {number|null} [dlg_stage_id] RespDlgStageDone dlg_stage_id
         */

        /**
         * Constructs a new RespDlgStageDone.
         * @memberof farm
         * @classdesc Represents a RespDlgStageDone.
         * @implements IRespDlgStageDone
         * @constructor
         * @param {farm.IRespDlgStageDone=} [p] Properties to set
         */
        function RespDlgStageDone(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespDlgStageDone dlg_stage_id.
         * @member {number} dlg_stage_id
         * @memberof farm.RespDlgStageDone
         * @instance
         */
        RespDlgStageDone.prototype.dlg_stage_id = 0;

        /**
         * Encodes the specified RespDlgStageDone message. Does not implicitly {@link farm.RespDlgStageDone.verify|verify} messages.
         * @function encode
         * @memberof farm.RespDlgStageDone
         * @static
         * @param {farm.IRespDlgStageDone} m RespDlgStageDone message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespDlgStageDone.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.dlg_stage_id != null && Object.hasOwnProperty.call(m, "dlg_stage_id"))
                w.uint32(8).int32(m.dlg_stage_id);
            return w;
        };

        /**
         * Decodes a RespDlgStageDone message from the specified reader or buffer.
         * @function decode
         * @memberof farm.RespDlgStageDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {farm.RespDlgStageDone} RespDlgStageDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespDlgStageDone.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.farm.RespDlgStageDone();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.dlg_stage_id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespDlgStageDone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof farm.RespDlgStageDone
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {farm.RespDlgStageDone} RespDlgStageDone
         */
        RespDlgStageDone.fromObject = function fromObject(d) {
            if (d instanceof $root.farm.RespDlgStageDone)
                return d;
            var m = new $root.farm.RespDlgStageDone();
            if (d.dlg_stage_id != null) {
                m.dlg_stage_id = d.dlg_stage_id | 0;
            }
            return m;
        };

        /**
         * Creates a plain object from a RespDlgStageDone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof farm.RespDlgStageDone
         * @static
         * @param {farm.RespDlgStageDone} m RespDlgStageDone
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespDlgStageDone.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.dlg_stage_id = 0;
            }
            if (m.dlg_stage_id != null && m.hasOwnProperty("dlg_stage_id")) {
                d.dlg_stage_id = m.dlg_stage_id;
            }
            return d;
        };

        /**
         * Converts this RespDlgStageDone to JSON.
         * @function toJSON
         * @memberof farm.RespDlgStageDone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespDlgStageDone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespDlgStageDone;
    })();

    return farm;
})();

$root.message = (function() {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    var message = {};

    message.EventBasic = (function() {

        /**
         * Properties of an EventBasic.
         * @memberof message
         * @interface IEventBasic
         * @property {Object.<string,string>|null} [metadata] EventBasic metadata
         */

        /**
         * Constructs a new EventBasic.
         * @memberof message
         * @classdesc Represents an EventBasic.
         * @implements IEventBasic
         * @constructor
         * @param {message.IEventBasic=} [p] Properties to set
         */
        function EventBasic(p) {
            this.metadata = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EventBasic metadata.
         * @member {Object.<string,string>} metadata
         * @memberof message.EventBasic
         * @instance
         */
        EventBasic.prototype.metadata = $util.emptyObject;

        /**
         * Encodes the specified EventBasic message. Does not implicitly {@link message.EventBasic.verify|verify} messages.
         * @function encode
         * @memberof message.EventBasic
         * @static
         * @param {message.IEventBasic} m EventBasic message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventBasic.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata")) {
                for (var ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(10).string(ks[i]).uint32(18).string(m.metadata[ks[i]]).ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes an EventBasic message from the specified reader or buffer.
         * @function decode
         * @memberof message.EventBasic
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.EventBasic} EventBasic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventBasic.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.EventBasic(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    r.skip().pos++;
                    if (m.metadata === $util.emptyObject)
                        m.metadata = {};
                    k = r.string();
                    r.pos++;
                    m.metadata[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates an EventBasic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.EventBasic
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.EventBasic} EventBasic
         */
        EventBasic.fromObject = function fromObject(d) {
            if (d instanceof $root.message.EventBasic)
                return d;
            var m = new $root.message.EventBasic();
            if (d.metadata) {
                if (typeof d.metadata !== "object")
                    throw TypeError(".message.EventBasic.metadata: object expected");
                m.metadata = {};
                for (var ks = Object.keys(d.metadata), i = 0; i < ks.length; ++i) {
                    m.metadata[ks[i]] = String(d.metadata[ks[i]]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from an EventBasic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.EventBasic
         * @static
         * @param {message.EventBasic} m EventBasic
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventBasic.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.metadata = {};
            }
            var ks2;
            if (m.metadata && (ks2 = Object.keys(m.metadata)).length) {
                d.metadata = {};
                for (var j = 0; j < ks2.length; ++j) {
                    d.metadata[ks2[j]] = m.metadata[ks2[j]];
                }
            }
            return d;
        };

        /**
         * Converts this EventBasic to JSON.
         * @function toJSON
         * @memberof message.EventBasic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventBasic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventBasic;
    })();

    message.RequestBasic = (function() {

        /**
         * Properties of a RequestBasic.
         * @memberof message
         * @interface IRequestBasic
         * @property {Object.<string,string>|null} [params] RequestBasic params
         */

        /**
         * Constructs a new RequestBasic.
         * @memberof message
         * @classdesc Represents a RequestBasic.
         * @implements IRequestBasic
         * @constructor
         * @param {message.IRequestBasic=} [p] Properties to set
         */
        function RequestBasic(p) {
            this.params = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RequestBasic params.
         * @member {Object.<string,string>} params
         * @memberof message.RequestBasic
         * @instance
         */
        RequestBasic.prototype.params = $util.emptyObject;

        /**
         * Encodes the specified RequestBasic message. Does not implicitly {@link message.RequestBasic.verify|verify} messages.
         * @function encode
         * @memberof message.RequestBasic
         * @static
         * @param {message.IRequestBasic} m RequestBasic message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestBasic.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.params != null && Object.hasOwnProperty.call(m, "params")) {
                for (var ks = Object.keys(m.params), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(10).string(ks[i]).uint32(18).string(m.params[ks[i]]).ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes a RequestBasic message from the specified reader or buffer.
         * @function decode
         * @memberof message.RequestBasic
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.RequestBasic} RequestBasic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestBasic.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.RequestBasic(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    r.skip().pos++;
                    if (m.params === $util.emptyObject)
                        m.params = {};
                    k = r.string();
                    r.pos++;
                    m.params[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RequestBasic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RequestBasic
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.RequestBasic} RequestBasic
         */
        RequestBasic.fromObject = function fromObject(d) {
            if (d instanceof $root.message.RequestBasic)
                return d;
            var m = new $root.message.RequestBasic();
            if (d.params) {
                if (typeof d.params !== "object")
                    throw TypeError(".message.RequestBasic.params: object expected");
                m.params = {};
                for (var ks = Object.keys(d.params), i = 0; i < ks.length; ++i) {
                    m.params[ks[i]] = String(d.params[ks[i]]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RequestBasic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RequestBasic
         * @static
         * @param {message.RequestBasic} m RequestBasic
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestBasic.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.params = {};
            }
            var ks2;
            if (m.params && (ks2 = Object.keys(m.params)).length) {
                d.params = {};
                for (var j = 0; j < ks2.length; ++j) {
                    d.params[ks2[j]] = m.params[ks2[j]];
                }
            }
            return d;
        };

        /**
         * Converts this RequestBasic to JSON.
         * @function toJSON
         * @memberof message.RequestBasic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestBasic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestBasic;
    })();

    message.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof message
         * @interface IMessage
         * @property {number|Long|null} [id] Message id
         * @property {message.Message.Type|null} [type] Message type
         * @property {string|null} [version] Message version
         * @property {string|null} [jwt_token] Message jwt_token
         * @property {google.protobuf.IAny|null} [dat] Message dat
         * @property {google.protobuf.ITimestamp|null} [timestamp] Message timestamp
         */

        /**
         * Constructs a new Message.
         * @memberof message
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {message.IMessage=} [p] Properties to set
         */
        function Message(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Message id.
         * @member {number|Long} id
         * @memberof message.Message
         * @instance
         */
        Message.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message type.
         * @member {message.Message.Type} type
         * @memberof message.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Message version.
         * @member {string} version
         * @memberof message.Message
         * @instance
         */
        Message.prototype.version = "";

        /**
         * Message jwt_token.
         * @member {string} jwt_token
         * @memberof message.Message
         * @instance
         */
        Message.prototype.jwt_token = "";

        /**
         * Message dat.
         * @member {google.protobuf.IAny|null|undefined} dat
         * @memberof message.Message
         * @instance
         */
        Message.prototype.dat = null;

        /**
         * Message timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof message.Message
         * @instance
         */
        Message.prototype.timestamp = null;

        /**
         * Encodes the specified Message message. Does not implicitly {@link message.Message.verify|verify} messages.
         * @function encode
         * @memberof message.Message
         * @static
         * @param {message.IMessage} m Message message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int64(m.id);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(26).string(m.version);
            if (m.jwt_token != null && Object.hasOwnProperty.call(m, "jwt_token"))
                w.uint32(34).string(m.jwt_token);
            if (m.dat != null && Object.hasOwnProperty.call(m, "dat"))
                $root.google.protobuf.Any.encode(m.dat, w.uint32(42).fork()).ldelim();
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                $root.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(50).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof message.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.Message();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int64();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.version = r.string();
                    break;
                case 4:
                    m.jwt_token = r.string();
                    break;
                case 5:
                    m.dat = $root.google.protobuf.Any.decode(r, r.uint32());
                    break;
                case 6:
                    m.timestamp = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Message
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.Message} Message
         */
        Message.fromObject = function fromObject(d) {
            if (d instanceof $root.message.Message)
                return d;
            var m = new $root.message.Message();
            if (d.id != null) {
                if ($util.Long)
                    (m.id = $util.Long.fromValue(d.id)).unsigned = false;
                else if (typeof d.id === "string")
                    m.id = parseInt(d.id, 10);
                else if (typeof d.id === "number")
                    m.id = d.id;
                else if (typeof d.id === "object")
                    m.id = new $util.LongBits(d.id.low >>> 0, d.id.high >>> 0).toNumber();
            }
            switch (d.type) {
            case "EVENT_BASIC":
            case 0:
                m.type = 0;
                break;
            case "NOTIFY_BASIC":
            case 100000:
                m.type = 100000;
                break;
            case "STREAM_BASIC":
            case 200000:
                m.type = 200000;
                break;
            }
            if (d.version != null) {
                m.version = String(d.version);
            }
            if (d.jwt_token != null) {
                m.jwt_token = String(d.jwt_token);
            }
            if (d.dat != null) {
                if (typeof d.dat !== "object")
                    throw TypeError(".message.Message.dat: object expected");
                m.dat = $root.google.protobuf.Any.fromObject(d.dat);
            }
            if (d.timestamp != null) {
                if (typeof d.timestamp !== "object")
                    throw TypeError(".message.Message.timestamp: object expected");
                m.timestamp = $root.google.protobuf.Timestamp.fromObject(d.timestamp);
            }
            return m;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Message
         * @static
         * @param {message.Message} m Message
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.id = o.longs === String ? "0" : 0;
                d.type = o.enums === String ? "EVENT_BASIC" : 0;
                d.version = "";
                d.jwt_token = "";
                d.dat = null;
                d.timestamp = null;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                if (typeof m.id === "number")
                    d.id = o.longs === String ? String(m.id) : m.id;
                else
                    d.id = o.longs === String ? $util.Long.prototype.toString.call(m.id) : o.longs === Number ? new $util.LongBits(m.id.low >>> 0, m.id.high >>> 0).toNumber() : m.id;
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.message.Message.Type[m.type] : m.type;
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
            }
            if (m.jwt_token != null && m.hasOwnProperty("jwt_token")) {
                d.jwt_token = m.jwt_token;
            }
            if (m.dat != null && m.hasOwnProperty("dat")) {
                d.dat = $root.google.protobuf.Any.toObject(m.dat, o);
            }
            if (m.timestamp != null && m.hasOwnProperty("timestamp")) {
                d.timestamp = $root.google.protobuf.Timestamp.toObject(m.timestamp, o);
            }
            return d;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof message.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name message.Message.Type
         * @enum {number}
         * @property {number} EVENT_BASIC=0 EVENT_BASIC value
         * @property {number} NOTIFY_BASIC=100000 NOTIFY_BASIC value
         * @property {number} STREAM_BASIC=200000 STREAM_BASIC value
         */
        Message.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EVENT_BASIC"] = 0;
            values[valuesById[100000] = "NOTIFY_BASIC"] = 100000;
            values[valuesById[200000] = "STREAM_BASIC"] = 200000;
            return values;
        })();

        return Message;
    })();

    message.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof message
         * @interface IRequest
         * @property {string|null} [version] Request version
         * @property {string|null} [jwt_token] Request jwt_token
         * @property {google.protobuf.IAny|null} [dat] Request dat
         */

        /**
         * Constructs a new Request.
         * @memberof message
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {message.IRequest=} [p] Properties to set
         */
        function Request(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Request version.
         * @member {string} version
         * @memberof message.Request
         * @instance
         */
        Request.prototype.version = "";

        /**
         * Request jwt_token.
         * @member {string} jwt_token
         * @memberof message.Request
         * @instance
         */
        Request.prototype.jwt_token = "";

        /**
         * Request dat.
         * @member {google.protobuf.IAny|null|undefined} dat
         * @memberof message.Request
         * @instance
         */
        Request.prototype.dat = null;

        /**
         * Encodes the specified Request message. Does not implicitly {@link message.Request.verify|verify} messages.
         * @function encode
         * @memberof message.Request
         * @static
         * @param {message.IRequest} m Request message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(10).string(m.version);
            if (m.jwt_token != null && Object.hasOwnProperty.call(m, "jwt_token"))
                w.uint32(18).string(m.jwt_token);
            if (m.dat != null && Object.hasOwnProperty.call(m, "dat"))
                $root.google.protobuf.Any.encode(m.dat, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof message.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.Request();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.version = r.string();
                    break;
                case 2:
                    m.jwt_token = r.string();
                    break;
                case 3:
                    m.dat = $root.google.protobuf.Any.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Request
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.Request} Request
         */
        Request.fromObject = function fromObject(d) {
            if (d instanceof $root.message.Request)
                return d;
            var m = new $root.message.Request();
            if (d.version != null) {
                m.version = String(d.version);
            }
            if (d.jwt_token != null) {
                m.jwt_token = String(d.jwt_token);
            }
            if (d.dat != null) {
                if (typeof d.dat !== "object")
                    throw TypeError(".message.Request.dat: object expected");
                m.dat = $root.google.protobuf.Any.fromObject(d.dat);
            }
            return m;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Request
         * @static
         * @param {message.Request} m Request
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.version = "";
                d.jwt_token = "";
                d.dat = null;
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
            }
            if (m.jwt_token != null && m.hasOwnProperty("jwt_token")) {
                d.jwt_token = m.jwt_token;
            }
            if (m.dat != null && m.hasOwnProperty("dat")) {
                d.dat = $root.google.protobuf.Any.toObject(m.dat, o);
            }
            return d;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof message.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    message.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof message
         * @interface IResponse
         * @property {number|null} [err] Response err
         * @property {string|null} [message] Response message
         * @property {string|null} [trace_id] Response trace_id
         * @property {google.protobuf.IAny|null} [dat] Response dat
         */

        /**
         * Constructs a new Response.
         * @memberof message
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {message.IResponse=} [p] Properties to set
         */
        function Response(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Response err.
         * @member {number} err
         * @memberof message.Response
         * @instance
         */
        Response.prototype.err = 0;

        /**
         * Response message.
         * @member {string} message
         * @memberof message.Response
         * @instance
         */
        Response.prototype.message = "";

        /**
         * Response trace_id.
         * @member {string} trace_id
         * @memberof message.Response
         * @instance
         */
        Response.prototype.trace_id = "";

        /**
         * Response dat.
         * @member {google.protobuf.IAny|null|undefined} dat
         * @memberof message.Response
         * @instance
         */
        Response.prototype.dat = null;

        /**
         * Encodes the specified Response message. Does not implicitly {@link message.Response.verify|verify} messages.
         * @function encode
         * @memberof message.Response
         * @static
         * @param {message.IResponse} m Response message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.err != null && Object.hasOwnProperty.call(m, "err"))
                w.uint32(8).int32(m.err);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(18).string(m.message);
            if (m.trace_id != null && Object.hasOwnProperty.call(m, "trace_id"))
                w.uint32(26).string(m.trace_id);
            if (m.dat != null && Object.hasOwnProperty.call(m, "dat"))
                $root.google.protobuf.Any.encode(m.dat, w.uint32(34).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof message.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.Response();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.err = r.int32();
                    break;
                case 2:
                    m.message = r.string();
                    break;
                case 3:
                    m.trace_id = r.string();
                    break;
                case 4:
                    m.dat = $root.google.protobuf.Any.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Response
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.Response} Response
         */
        Response.fromObject = function fromObject(d) {
            if (d instanceof $root.message.Response)
                return d;
            var m = new $root.message.Response();
            if (d.err != null) {
                m.err = d.err | 0;
            }
            if (d.message != null) {
                m.message = String(d.message);
            }
            if (d.trace_id != null) {
                m.trace_id = String(d.trace_id);
            }
            if (d.dat != null) {
                if (typeof d.dat !== "object")
                    throw TypeError(".message.Response.dat: object expected");
                m.dat = $root.google.protobuf.Any.fromObject(d.dat);
            }
            return m;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Response
         * @static
         * @param {message.Response} m Response
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.err = 0;
                d.message = "";
                d.trace_id = "";
                d.dat = null;
            }
            if (m.err != null && m.hasOwnProperty("err")) {
                d.err = m.err;
            }
            if (m.message != null && m.hasOwnProperty("message")) {
                d.message = m.message;
            }
            if (m.trace_id != null && m.hasOwnProperty("trace_id")) {
                d.trace_id = m.trace_id;
            }
            if (m.dat != null && m.hasOwnProperty("dat")) {
                d.dat = $root.google.protobuf.Any.toObject(m.dat, o);
            }
            return d;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof message.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    message.NotifyBasic = (function() {

        /**
         * Properties of a NotifyBasic.
         * @memberof message
         * @interface INotifyBasic
         */

        /**
         * Constructs a new NotifyBasic.
         * @memberof message
         * @classdesc Represents a NotifyBasic.
         * @implements INotifyBasic
         * @constructor
         * @param {message.INotifyBasic=} [p] Properties to set
         */
        function NotifyBasic(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified NotifyBasic message. Does not implicitly {@link message.NotifyBasic.verify|verify} messages.
         * @function encode
         * @memberof message.NotifyBasic
         * @static
         * @param {message.INotifyBasic} m NotifyBasic message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyBasic.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a NotifyBasic message from the specified reader or buffer.
         * @function decode
         * @memberof message.NotifyBasic
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.NotifyBasic} NotifyBasic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyBasic.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.NotifyBasic();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a NotifyBasic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.NotifyBasic
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.NotifyBasic} NotifyBasic
         */
        NotifyBasic.fromObject = function fromObject(d) {
            if (d instanceof $root.message.NotifyBasic)
                return d;
            return new $root.message.NotifyBasic();
        };

        /**
         * Creates a plain object from a NotifyBasic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.NotifyBasic
         * @static
         * @param {message.NotifyBasic} m NotifyBasic
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyBasic.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NotifyBasic to JSON.
         * @function toJSON
         * @memberof message.NotifyBasic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyBasic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyBasic;
    })();

    message.ReqCustomTest = (function() {

        /**
         * Properties of a ReqCustomTest.
         * @memberof message
         * @interface IReqCustomTest
         * @property {number|null} [intValue] ReqCustomTest intValue
         * @property {string|null} [strValue] ReqCustomTest strValue
         * @property {Array.<boolean>|null} [boolValue] ReqCustomTest boolValue
         * @property {Object.<string,string>|null} [mapValue] ReqCustomTest mapValue
         */

        /**
         * Constructs a new ReqCustomTest.
         * @memberof message
         * @classdesc Represents a ReqCustomTest.
         * @implements IReqCustomTest
         * @constructor
         * @param {message.IReqCustomTest=} [p] Properties to set
         */
        function ReqCustomTest(p) {
            this.boolValue = [];
            this.mapValue = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqCustomTest intValue.
         * @member {number} intValue
         * @memberof message.ReqCustomTest
         * @instance
         */
        ReqCustomTest.prototype.intValue = 0;

        /**
         * ReqCustomTest strValue.
         * @member {string} strValue
         * @memberof message.ReqCustomTest
         * @instance
         */
        ReqCustomTest.prototype.strValue = "";

        /**
         * ReqCustomTest boolValue.
         * @member {Array.<boolean>} boolValue
         * @memberof message.ReqCustomTest
         * @instance
         */
        ReqCustomTest.prototype.boolValue = $util.emptyArray;

        /**
         * ReqCustomTest mapValue.
         * @member {Object.<string,string>} mapValue
         * @memberof message.ReqCustomTest
         * @instance
         */
        ReqCustomTest.prototype.mapValue = $util.emptyObject;

        /**
         * Encodes the specified ReqCustomTest message. Does not implicitly {@link message.ReqCustomTest.verify|verify} messages.
         * @function encode
         * @memberof message.ReqCustomTest
         * @static
         * @param {message.IReqCustomTest} m ReqCustomTest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCustomTest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.intValue != null && Object.hasOwnProperty.call(m, "intValue"))
                w.uint32(8).int32(m.intValue);
            if (m.strValue != null && Object.hasOwnProperty.call(m, "strValue"))
                w.uint32(18).string(m.strValue);
            if (m.boolValue != null && m.boolValue.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.boolValue.length; ++i)
                    w.bool(m.boolValue[i]);
                w.ldelim();
            }
            if (m.mapValue != null && Object.hasOwnProperty.call(m, "mapValue")) {
                for (var ks = Object.keys(m.mapValue), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(8).int32(ks[i]).uint32(18).string(m.mapValue[ks[i]]).ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes a ReqCustomTest message from the specified reader or buffer.
         * @function decode
         * @memberof message.ReqCustomTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.ReqCustomTest} ReqCustomTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCustomTest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.ReqCustomTest(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.intValue = r.int32();
                    break;
                case 2:
                    m.strValue = r.string();
                    break;
                case 3:
                    if (!(m.boolValue && m.boolValue.length))
                        m.boolValue = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.boolValue.push(r.bool());
                    } else
                        m.boolValue.push(r.bool());
                    break;
                case 4:
                    r.skip().pos++;
                    if (m.mapValue === $util.emptyObject)
                        m.mapValue = {};
                    k = r.int32();
                    r.pos++;
                    m.mapValue[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a ReqCustomTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ReqCustomTest
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.ReqCustomTest} ReqCustomTest
         */
        ReqCustomTest.fromObject = function fromObject(d) {
            if (d instanceof $root.message.ReqCustomTest)
                return d;
            var m = new $root.message.ReqCustomTest();
            if (d.intValue != null) {
                m.intValue = d.intValue | 0;
            }
            if (d.strValue != null) {
                m.strValue = String(d.strValue);
            }
            if (d.boolValue) {
                if (!Array.isArray(d.boolValue))
                    throw TypeError(".message.ReqCustomTest.boolValue: array expected");
                m.boolValue = [];
                for (var i = 0; i < d.boolValue.length; ++i) {
                    m.boolValue[i] = Boolean(d.boolValue[i]);
                }
            }
            if (d.mapValue) {
                if (typeof d.mapValue !== "object")
                    throw TypeError(".message.ReqCustomTest.mapValue: object expected");
                m.mapValue = {};
                for (var ks = Object.keys(d.mapValue), i = 0; i < ks.length; ++i) {
                    m.mapValue[ks[i]] = String(d.mapValue[ks[i]]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a ReqCustomTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ReqCustomTest
         * @static
         * @param {message.ReqCustomTest} m ReqCustomTest
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCustomTest.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.boolValue = [];
            }
            if (o.objects || o.defaults) {
                d.mapValue = {};
            }
            if (o.defaults) {
                d.intValue = 0;
                d.strValue = "";
            }
            if (m.intValue != null && m.hasOwnProperty("intValue")) {
                d.intValue = m.intValue;
            }
            if (m.strValue != null && m.hasOwnProperty("strValue")) {
                d.strValue = m.strValue;
            }
            if (m.boolValue && m.boolValue.length) {
                d.boolValue = [];
                for (var j = 0; j < m.boolValue.length; ++j) {
                    d.boolValue[j] = m.boolValue[j];
                }
            }
            var ks2;
            if (m.mapValue && (ks2 = Object.keys(m.mapValue)).length) {
                d.mapValue = {};
                for (var j = 0; j < ks2.length; ++j) {
                    d.mapValue[ks2[j]] = m.mapValue[ks2[j]];
                }
            }
            return d;
        };

        /**
         * Converts this ReqCustomTest to JSON.
         * @function toJSON
         * @memberof message.ReqCustomTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCustomTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqCustomTest;
    })();

    message.RespCustomTest = (function() {

        /**
         * Properties of a RespCustomTest.
         * @memberof message
         * @interface IRespCustomTest
         * @property {number|null} [intValue] RespCustomTest intValue
         * @property {string|null} [strValue] RespCustomTest strValue
         * @property {Array.<boolean>|null} [boolValue] RespCustomTest boolValue
         * @property {Object.<string,string>|null} [mapValue] RespCustomTest mapValue
         */

        /**
         * Constructs a new RespCustomTest.
         * @memberof message
         * @classdesc Represents a RespCustomTest.
         * @implements IRespCustomTest
         * @constructor
         * @param {message.IRespCustomTest=} [p] Properties to set
         */
        function RespCustomTest(p) {
            this.boolValue = [];
            this.mapValue = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RespCustomTest intValue.
         * @member {number} intValue
         * @memberof message.RespCustomTest
         * @instance
         */
        RespCustomTest.prototype.intValue = 0;

        /**
         * RespCustomTest strValue.
         * @member {string} strValue
         * @memberof message.RespCustomTest
         * @instance
         */
        RespCustomTest.prototype.strValue = "";

        /**
         * RespCustomTest boolValue.
         * @member {Array.<boolean>} boolValue
         * @memberof message.RespCustomTest
         * @instance
         */
        RespCustomTest.prototype.boolValue = $util.emptyArray;

        /**
         * RespCustomTest mapValue.
         * @member {Object.<string,string>} mapValue
         * @memberof message.RespCustomTest
         * @instance
         */
        RespCustomTest.prototype.mapValue = $util.emptyObject;

        /**
         * Encodes the specified RespCustomTest message. Does not implicitly {@link message.RespCustomTest.verify|verify} messages.
         * @function encode
         * @memberof message.RespCustomTest
         * @static
         * @param {message.IRespCustomTest} m RespCustomTest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCustomTest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.intValue != null && Object.hasOwnProperty.call(m, "intValue"))
                w.uint32(8).int32(m.intValue);
            if (m.strValue != null && Object.hasOwnProperty.call(m, "strValue"))
                w.uint32(18).string(m.strValue);
            if (m.boolValue != null && m.boolValue.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.boolValue.length; ++i)
                    w.bool(m.boolValue[i]);
                w.ldelim();
            }
            if (m.mapValue != null && Object.hasOwnProperty.call(m, "mapValue")) {
                for (var ks = Object.keys(m.mapValue), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(8).int32(ks[i]).uint32(18).string(m.mapValue[ks[i]]).ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes a RespCustomTest message from the specified reader or buffer.
         * @function decode
         * @memberof message.RespCustomTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.RespCustomTest} RespCustomTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCustomTest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.RespCustomTest(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.intValue = r.int32();
                    break;
                case 2:
                    m.strValue = r.string();
                    break;
                case 3:
                    if (!(m.boolValue && m.boolValue.length))
                        m.boolValue = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.boolValue.push(r.bool());
                    } else
                        m.boolValue.push(r.bool());
                    break;
                case 4:
                    r.skip().pos++;
                    if (m.mapValue === $util.emptyObject)
                        m.mapValue = {};
                    k = r.int32();
                    r.pos++;
                    m.mapValue[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a RespCustomTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RespCustomTest
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.RespCustomTest} RespCustomTest
         */
        RespCustomTest.fromObject = function fromObject(d) {
            if (d instanceof $root.message.RespCustomTest)
                return d;
            var m = new $root.message.RespCustomTest();
            if (d.intValue != null) {
                m.intValue = d.intValue | 0;
            }
            if (d.strValue != null) {
                m.strValue = String(d.strValue);
            }
            if (d.boolValue) {
                if (!Array.isArray(d.boolValue))
                    throw TypeError(".message.RespCustomTest.boolValue: array expected");
                m.boolValue = [];
                for (var i = 0; i < d.boolValue.length; ++i) {
                    m.boolValue[i] = Boolean(d.boolValue[i]);
                }
            }
            if (d.mapValue) {
                if (typeof d.mapValue !== "object")
                    throw TypeError(".message.RespCustomTest.mapValue: object expected");
                m.mapValue = {};
                for (var ks = Object.keys(d.mapValue), i = 0; i < ks.length; ++i) {
                    m.mapValue[ks[i]] = String(d.mapValue[ks[i]]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RespCustomTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RespCustomTest
         * @static
         * @param {message.RespCustomTest} m RespCustomTest
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespCustomTest.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.boolValue = [];
            }
            if (o.objects || o.defaults) {
                d.mapValue = {};
            }
            if (o.defaults) {
                d.intValue = 0;
                d.strValue = "";
            }
            if (m.intValue != null && m.hasOwnProperty("intValue")) {
                d.intValue = m.intValue;
            }
            if (m.strValue != null && m.hasOwnProperty("strValue")) {
                d.strValue = m.strValue;
            }
            if (m.boolValue && m.boolValue.length) {
                d.boolValue = [];
                for (var j = 0; j < m.boolValue.length; ++j) {
                    d.boolValue[j] = m.boolValue[j];
                }
            }
            var ks2;
            if (m.mapValue && (ks2 = Object.keys(m.mapValue)).length) {
                d.mapValue = {};
                for (var j = 0; j < ks2.length; ++j) {
                    d.mapValue[ks2[j]] = m.mapValue[ks2[j]];
                }
            }
            return d;
        };

        /**
         * Converts this RespCustomTest to JSON.
         * @function toJSON
         * @memberof message.RespCustomTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespCustomTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespCustomTest;
    })();

    message.SimpleStruct = (function() {

        /**
         * Properties of a SimpleStruct.
         * @memberof message
         * @interface ISimpleStruct
         * @property {number|null} [intValue] SimpleStruct intValue
         * @property {boolean|null} [boolValue] SimpleStruct boolValue
         * @property {string|null} [strValue] SimpleStruct strValue
         */

        /**
         * Constructs a new SimpleStruct.
         * @memberof message
         * @classdesc Represents a SimpleStruct.
         * @implements ISimpleStruct
         * @constructor
         * @param {message.ISimpleStruct=} [p] Properties to set
         */
        function SimpleStruct(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SimpleStruct intValue.
         * @member {number} intValue
         * @memberof message.SimpleStruct
         * @instance
         */
        SimpleStruct.prototype.intValue = 0;

        /**
         * SimpleStruct boolValue.
         * @member {boolean} boolValue
         * @memberof message.SimpleStruct
         * @instance
         */
        SimpleStruct.prototype.boolValue = false;

        /**
         * SimpleStruct strValue.
         * @member {string} strValue
         * @memberof message.SimpleStruct
         * @instance
         */
        SimpleStruct.prototype.strValue = "";

        /**
         * Encodes the specified SimpleStruct message. Does not implicitly {@link message.SimpleStruct.verify|verify} messages.
         * @function encode
         * @memberof message.SimpleStruct
         * @static
         * @param {message.ISimpleStruct} m SimpleStruct message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimpleStruct.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.intValue != null && Object.hasOwnProperty.call(m, "intValue"))
                w.uint32(8).int32(m.intValue);
            if (m.boolValue != null && Object.hasOwnProperty.call(m, "boolValue"))
                w.uint32(16).bool(m.boolValue);
            if (m.strValue != null && Object.hasOwnProperty.call(m, "strValue"))
                w.uint32(26).string(m.strValue);
            return w;
        };

        /**
         * Decodes a SimpleStruct message from the specified reader or buffer.
         * @function decode
         * @memberof message.SimpleStruct
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {message.SimpleStruct} SimpleStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SimpleStruct.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SimpleStruct();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.intValue = r.int32();
                    break;
                case 2:
                    m.boolValue = r.bool();
                    break;
                case 3:
                    m.strValue = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Creates a SimpleStruct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.SimpleStruct
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {message.SimpleStruct} SimpleStruct
         */
        SimpleStruct.fromObject = function fromObject(d) {
            if (d instanceof $root.message.SimpleStruct)
                return d;
            var m = new $root.message.SimpleStruct();
            if (d.intValue != null) {
                m.intValue = d.intValue | 0;
            }
            if (d.boolValue != null) {
                m.boolValue = Boolean(d.boolValue);
            }
            if (d.strValue != null) {
                m.strValue = String(d.strValue);
            }
            return m;
        };

        /**
         * Creates a plain object from a SimpleStruct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.SimpleStruct
         * @static
         * @param {message.SimpleStruct} m SimpleStruct
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SimpleStruct.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.intValue = 0;
                d.boolValue = false;
                d.strValue = "";
            }
            if (m.intValue != null && m.hasOwnProperty("intValue")) {
                d.intValue = m.intValue;
            }
            if (m.boolValue != null && m.hasOwnProperty("boolValue")) {
                d.boolValue = m.boolValue;
            }
            if (m.strValue != null && m.hasOwnProperty("strValue")) {
                d.strValue = m.strValue;
            }
            return d;
        };

        /**
         * Converts this SimpleStruct to JSON.
         * @function toJSON
         * @memberof message.SimpleStruct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SimpleStruct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SimpleStruct;
    })();

    return message;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

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
             * @param {google.protobuf.IAny=} [p] Properties to set
             */
            function Any(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
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
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} m Any message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type_url != null && Object.hasOwnProperty.call(m, "type_url"))
                    w.uint32(10).string(m.type_url);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(18).bytes(m.value);
                return w;
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.Any();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.type_url = r.string();
                        break;
                    case 2:
                        m.value = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(d) {
                if (d instanceof $root.google.protobuf.Any)
                    return d;
                var m = new $root.google.protobuf.Any();
                if (d.type_url != null) {
                    m.type_url = String(d.type_url);
                }
                if (d.value != null) {
                    if (typeof d.value === "string")
                        $util.base64.decode(d.value, m.value = $util.newBuffer($util.base64.length(d.value)), 0);
                    else if (d.value.length)
                        m.value = d.value;
                }
                return m;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} m Any
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.type_url = "";
                    if (o.bytes === String)
                        d.value = "";
                    else {
                        d.value = [];
                        if (o.bytes !== Array)
                            d.value = $util.newBuffer(d.value);
                    }
                }
                if (m.type_url != null && m.hasOwnProperty("type_url")) {
                    d.type_url = m.type_url;
                }
                if (m.value != null && m.hasOwnProperty("value")) {
                    d.value = o.bytes === String ? $util.base64.encode(m.value, 0, m.value.length) : o.bytes === Array ? Array.prototype.slice.call(m.value) : m.value;
                }
                return d;
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

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [p] Properties to set
             */
            function Timestamp(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} m Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds"))
                    w.uint32(8).int64(m.seconds);
                if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos"))
                    w.uint32(16).int32(m.nanos);
                return w;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.Timestamp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.seconds = r.int64();
                        break;
                    case 2:
                        m.nanos = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(d) {
                if (d instanceof $root.google.protobuf.Timestamp)
                    return d;
                var m = new $root.google.protobuf.Timestamp();
                if (d.seconds != null) {
                    if ($util.Long)
                        (m.seconds = $util.Long.fromValue(d.seconds)).unsigned = false;
                    else if (typeof d.seconds === "string")
                        m.seconds = parseInt(d.seconds, 10);
                    else if (typeof d.seconds === "number")
                        m.seconds = d.seconds;
                    else if (typeof d.seconds === "object")
                        m.seconds = new $util.LongBits(d.seconds.low >>> 0, d.seconds.high >>> 0).toNumber();
                }
                if (d.nanos != null) {
                    m.nanos = d.nanos | 0;
                }
                return m;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} m Timestamp
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                    } else
                        d.seconds = o.longs === String ? "0" : 0;
                    d.nanos = 0;
                }
                if (m.seconds != null && m.hasOwnProperty("seconds")) {
                    if (typeof m.seconds === "number")
                        d.seconds = o.longs === String ? String(m.seconds) : m.seconds;
                    else
                        d.seconds = o.longs === String ? $util.Long.prototype.toString.call(m.seconds) : o.longs === Number ? new $util.LongBits(m.seconds.low >>> 0, m.seconds.high >>> 0).toNumber() : m.seconds;
                }
                if (m.nanos != null && m.hasOwnProperty("nanos")) {
                    d.nanos = m.nanos;
                }
                return d;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

$root.error = (function() {

    /**
     * Namespace error.
     * @exports error
     * @namespace
     */
    var error = {};

    /**
     * Type enum.
     * @name error.Type
     * @enum {number}
     * @property {number} NONE=0 NONE value
     */
    error.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        return values;
    })();

    return error;
})();

module.exports = $root;