"use strict";
cc._RF.push(module, '9fa0c89zRBKfLHOdvbR5YKU', 'PBMessage');
// script/netMessage/PBMessage.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpack = exports.pack = exports.JWTBuilder = exports.Resp = exports.Req = exports.WrapMessageResp = exports.WrapReq = exports.Message = void 0;
var jwt = require("../tools/jwtSimple/JwtSimple");
var index_1 = require("../tools/buffer/index");
var IBuilder_1 = require("./IBuilder");
var bundle_js_1 = require("../tools/pbProto/bundle.js");
var Message_1 = require("./Message");
var TKLog_1 = require("../framework/log/TKLog");
var Singleton_1 = require("../framework/utils/Singleton");
var JWTBuilder = /** @class */ (function (_super) {
    __extends(JWTBuilder, _super);
    function JWTBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.salt = "123"; //盐值
        _this.clientId = "f151c83c6d9aff7beaad33f3c6de0388"; //客户端用户标识
        _this.tokenSecret = "";
        return _this;
    }
    // _method: string = "/auth/verify-token";//调用方法
    /**
     * 初始化函数
     * @param salt 登录后得到的盐值
     * @param clientId 客户的唯一标识
     * @param tokenSecret 客户的token值
     */
    JWTBuilder.prototype.init = function (salt, clientId, tokenSecret) {
        this.salt = salt;
        this.clientId = clientId;
        this.tokenSecret = tokenSecret;
    };
    JWTBuilder.prototype.getJwtToken = function (method) {
        var now = Math.floor(Date.now() / 1000);
        var payload = {
            iat: now,
            exp: now + 30,
            salt: this.salt,
            mtd: method,
            jti: Message_1.IDGenerator.get().toString()
        };
        var options = {
            header: { id: this.clientId }
        };
        // HS256 secrets are typically 128-bit random strings, for example hex-encoded:
        // var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')
        return jwt.encode(payload, this.tokenSecret, 'HS256', options);
    };
    return JWTBuilder;
}(Singleton_1.default));
exports.JWTBuilder = JWTBuilder;
var WrapMessageResp = /** @class */ (function () {
    function WrapMessageResp(msg) {
        this._msg = null;
        this._msg = msg;
    }
    WrapMessageResp.prototype.getResult = function () {
        if (this._msg instanceof Message) {
            if (this._msg && this._msg.message && this._msg.message.dat) {
                return this.decodeData(this._msg.message.dat.value);
            }
        }
        else if (this._msg instanceof Resp) {
            if (this._msg && this._msg.response && this._msg.response.dat) {
                return this.decodeData(this._msg.response.dat.value);
            }
        }
        return null;
    };
    return WrapMessageResp;
}());
exports.WrapMessageResp = WrapMessageResp;
var WrapReq = /** @class */ (function (_super) {
    __extends(WrapReq, _super);
    function WrapReq() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ReqBody = null;
        _this.request = null;
        return _this;
    }
    Object.defineProperty(WrapReq.prototype, "body", {
        get: function () {
            return this._ReqBody;
        },
        enumerable: false,
        configurable: true
    });
    WrapReq.prototype.setJwtToken = function (token) {
        if (this.request == null) {
            this.request = new bundle_js_1.message.Request({});
        }
        this.request.jwt_token = token;
    };
    WrapReq.prototype.Serialize = function (format) {
        if (this.body == null) {
            TKLog_1.default.LogWarn(this.getMsgCode() + "消息没有body");
            // return null
        }
        if (this.request == null) {
            this.request = new bundle_js_1.message.Request({});
        }
        if (this.body != null) {
            this.request.dat = pack(this.body, this.getProtoClassName());
        }
        else {
            this.request.dat = null;
        }
        _super.prototype.preSerialize.call(this);
        if (format == IBuilder_1.CodeFormat.Protobuf) {
            var bytes = bundle_js_1.message.Request.encode(this.request).finish();
            var buf = index_1.Buffer.from(bytes);
            return buf;
        }
        return JSON.stringify(this.request.toJSON());
    };
    return WrapReq;
}(Message_1.NetBaseReq));
exports.WrapReq = WrapReq;
// 这个Req用于比较灵活的情况，大部分时候客户端协议继承上面的WrapReq实现
// 这个暂时不推荐使用
var Req = /** @class */ (function (_super) {
    __extends(Req, _super);
    function Req(code, anyDat) {
        var _this = _super.call(this, true, code) || this;
        _this.request = null;
        _this.request = new bundle_js_1.message.Request({ version: "1.0.0" });
        _this.request.dat = anyDat;
        console.log(_this.request);
        return _this;
    }
    Req.prototype.setJwtToken = function (token) {
        if (this.request != null) {
            this.request.jwt_token = token;
        }
    };
    Req.prototype.Serialize = function (format) {
        if (this.request == null) {
            console.log("cann't serialize empty request");
            return null;
        }
        _super.prototype.preSerialize.call(this);
        console.log(this.request);
        if (format == IBuilder_1.CodeFormat.Protobuf) {
            var bytes = bundle_js_1.message.Request.encode(this.request).finish();
            var buf = index_1.Buffer.from(bytes);
            return buf;
        }
        return JSON.stringify(this.request.toJSON());
    };
    return Req;
}(Message_1.NetBaseReq));
exports.Req = Req;
var Resp = /** @class */ (function (_super) {
    __extends(Resp, _super);
    function Resp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.response = null;
        return _this;
    }
    Resp.prototype.getError = function () {
        if (this.response != null)
            return this.response.message;
        return "";
    };
    Resp.prototype.getErrorCode = function () {
        if (this.response != null)
            return this.response.err;
        return 0;
    };
    Resp.prototype.getTraceId = function () {
        if (this.response != null)
            return this.response.trace_id;
        return "";
    };
    Resp.prototype.getResult = function () {
        if (this.result == null) {
            if (this.response && this.response.dat) {
                this.result = unpack(this.response.dat);
            }
        }
        return this.result;
    };
    Resp.prototype.Deserialize = function (format, payload) {
        try {
            // let data = StringToUint8Array(payload);
            if (format == IBuilder_1.CodeFormat.Protobuf)
                this.response = bundle_js_1.message.Response.decode(payload);
            else {
                var json = JSON.parse(payload.toString());
                this.response = bundle_js_1.message.Response.fromObject(json);
            }
            // this.setError(this.response.message);
            // this.setTraceId(this.response.trace_id);
        }
        catch (e) {
            TKLog_1.default.LogWarn("parse Message " + payload + " 异常" + e);
        }
        return this;
    };
    return Resp;
}(Message_1.NetBaseRespNtf));
exports.Resp = Resp;
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message(options) {
        var _this = _super.call(this, options) || this;
        _this.dat = null;
        _this.message = null;
        _this.message = new bundle_js_1.message.Message({});
        if (options.msgId && options.msgId > 0) {
            _this.message.id = options.msgId;
        }
        if (options.type) {
            _this.message.type = options.type;
        }
        else {
            _this.message.type = bundle_js_1.message.Message.Type.EVENT_BASIC;
        }
        if (options.version) {
            _this.message.version = options.version;
        }
        if (options.jwt_token) {
            _this.message.jwt_token = options.jwt_token;
        }
        if (options.timestamp) {
            _this.message.timestamp = options.timestamp;
        }
        if (options.dat) {
            _this.message.dat = options.dat;
        }
        return _this;
    }
    Message.prototype.getMsgId = function () {
        if (this.message && this.message.id) {
            return this.message.id;
        }
        return 0;
    };
    Message.prototype.getType = function () {
        if (this.message && this.message.type) {
            return this.message.type;
        }
        return bundle_js_1.message.Message.Type.EVENT_BASIC;
    };
    Message.prototype.getVersion = function () {
        if (this.message && this.message.version) {
            return this.message.version;
        }
        return "unknown";
    };
    Message.prototype.getJwtToken = function () {
        if (this.message && this.message.jwt_token) {
            return this.message.jwt_token;
        }
        return "";
    };
    Message.prototype.getAnyDat = function () {
        if (this.dat == null) {
            if (this.message && this.message.dat) {
                this.dat = unpack(this.message.dat);
            }
        }
        return this.dat;
    };
    Message.prototype.getTimestamp = function () {
        if (this.message && this.message.timestamp) {
            return this.message.timestamp;
        }
        return null;
    };
    Message.prototype.Serialize = function (format) {
        _super.prototype.preSerialize.call(this);
        console.log(this.message);
        if (format == IBuilder_1.CodeFormat.Protobuf) {
            var bytes = bundle_js_1.message.Message.encode(this.message).finish();
            var buf = index_1.Buffer.from(bytes);
            return buf;
        }
        return JSON.stringify(this.message.toJSON());
    };
    Message.prototype.Deserialize = function (format, payload) {
        try {
            // let data = StringToUint8Array(payload);
            if (format == IBuilder_1.CodeFormat.Protobuf)
                this.message = bundle_js_1.message.Message.decode(payload);
            else {
                var json = JSON.parse(payload.toString());
                this.message = bundle_js_1.message.Message.fromObject(json);
            }
        }
        catch (e) {
            TKLog_1.default.LogWarn("parse Message " + payload + " 异常" + e);
        }
        return this;
    };
    Message.prototype.DeserializeFromObj = function (msg) {
        throw new Error("Method not implemented.");
    };
    return Message;
}(Message_1.NetBaseMessage));
exports.Message = Message;
var pack = function (anyDat, protoClassName) {
    return new bundle_js_1.google.protobuf.Any({
        type_url: protoClassName || anyDat.constructor.name,
        value: anyDat.constructor.encode(anyDat).finish(),
    });
};
exports.pack = pack;
var unpack = function (any) {
    if (!any)
        return "";
    console.log("unpack any:" + any.type_url);
    switch (any.type_url) {
        case 'tkmessage/stringValue':
            return String.fromCharCode.apply(String, any.value);
        case 'tkmessage/jubian.model.StringRequest':
            return String.fromCharCode.apply(String, any.value);
        case 'tkmessage/message.EventBasic':
            return bundle_js_1.message.EventBasic.decode(any.value);
        case 'tkmessage/jubian.golottery.model.profile.Profile':
            return bundle_js_1.jubian.golottery.model.profile.Profile.decode(any.value);
        case 'tkmessage/jubian.golottery.srv.oauth2.Token':
            return bundle_js_1.jubian.golottery.srv.oauth2.Token.decode(any.value);
        case 'tkmessage/jubian.golottery.srv.room.TableInfo':
            return bundle_js_1.jubian.golottery.srv.room.TableInfo.decode(any.value);
        // case 'tkmessage/message.SimpleStruct':
        //     return tkmessage.SimpleStruct.decode(any.value);
        default:
            return bundle_js_1.google.protobuf.Any.decode(any.value);
    }
};
exports.unpack = unpack;

cc._RF.pop();