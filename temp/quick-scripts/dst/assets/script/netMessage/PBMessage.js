
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/netMessage/PBMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbmV0TWVzc2FnZS9QQk1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFvRDtBQUNwRCwrQ0FBNkM7QUFDN0MsdUNBQW1EO0FBQ25ELHdEQUFpRjtBQUNqRixxQ0FBa0Y7QUFDbEYsZ0RBQTJDO0FBQzNDLDBEQUFxRDtBQUVyRDtJQUF5Qiw4QkFBUztJQUFsQztRQUFBLHFFQWdDQztRQS9CRyxVQUFJLEdBQVcsS0FBSyxDQUFDLENBQUEsSUFBSTtRQUN6QixjQUFRLEdBQVcsa0NBQWtDLENBQUMsQ0FBQSxTQUFTO1FBQy9ELGlCQUFXLEdBQVcsRUFBRSxDQUFBOztJQTZCNUIsQ0FBQztJQTVCTyxnREFBZ0Q7SUFDcEQ7Ozs7O09BS0c7SUFDSSx5QkFBSSxHQUFYLFVBQVksSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFtQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ00sZ0NBQVcsR0FBbEIsVUFBbUIsTUFBYztRQUM3QixJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUscUJBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7U0FDcEMsQ0FBQztRQUNGLElBQUksT0FBTyxHQUFHO1lBQ1YsTUFBTSxFQUFDLEVBQUMsRUFBRSxFQUFDLElBQUks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UUFDcEUsS0FBSyw2Q0FBNkM7WUFDOUMsT0FBTyxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELEtBQUssK0NBQStDO1lBQ2hELE9BQU8sa0JBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCx5Q0FBeUM7UUFDN0MsdURBQXVEO1FBQ3ZEO1lBQ0ksT0FBTyxrQkFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwRDtBQUNMLENBQUMsQ0FBQztBQUVzRSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGp3dCBmcm9tIFwiLi4vdG9vbHMvand0U2ltcGxlL0p3dFNpbXBsZVwiO1xuaW1wb3J0IHtCdWZmZXJ9IGZyb20gXCIuLi90b29scy9idWZmZXIvaW5kZXhcIjtcbmltcG9ydCB7TWVzc2FnZVR5cGUsIENvZGVGb3JtYXR9IGZyb20gXCIuL0lCdWlsZGVyXCI7XG5pbXBvcnQge21lc3NhZ2UgYXMgdGttZXNzYWdlLCBnb29nbGUsIGp1Ymlhbn0gIGZyb20gXCIuLi90b29scy9wYlByb3RvL2J1bmRsZS5qc1wiO1xuaW1wb3J0IHtJREdlbmVyYXRvciwgTmV0QmFzZU1lc3NhZ2UsIE5ldEJhc2VSZXEsIE5ldEJhc2VSZXNwTnRmfSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5pbXBvcnQgVEtMb2cgZnJvbSBcIi4uL2ZyYW1ld29yay9sb2cvVEtMb2dcIjtcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25cIjtcblxuY2xhc3MgSldUQnVpbGRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgc2FsdDogc3RyaW5nID0gXCIxMjNcIjsvL+ebkOWAvFxuICAgIGNsaWVudElkOiBzdHJpbmcgPSBcImYxNTFjODNjNmQ5YWZmN2JlYWFkMzNmM2M2ZGUwMzg4XCI7Ly/lrqLmiLfnq6/nlKjmiLfmoIfor4ZcbiAgICB0b2tlblNlY3JldDogc3RyaW5nID0gXCJcIlxuICAgICAgICAvLyBfbWV0aG9kOiBzdHJpbmcgPSBcIi9hdXRoL3ZlcmlmeS10b2tlblwiOy8v6LCD55So5pa55rOVXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5Ye95pWwXG4gICAgICogQHBhcmFtIHNhbHQg55m75b2V5ZCO5b6X5Yiw55qE55uQ5YC8XG4gICAgICogQHBhcmFtIGNsaWVudElkIOWuouaIt+eahOWUr+S4gOagh+ivhlxuICAgICAqIEBwYXJhbSB0b2tlblNlY3JldCDlrqLmiLfnmoR0b2tlbuWAvFxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KHNhbHQsIGNsaWVudElkLCB0b2tlblNlY3JldDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2FsdCA9IHNhbHQ7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgdGhpcy50b2tlblNlY3JldCA9IHRva2VuU2VjcmV0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Snd0VG9rZW4obWV0aG9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbm93OiBudW1iZXIgPSBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMCk7XG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgaWF0OiBub3csXG4gICAgICAgICAgICBleHA6IG5vdyArIDMwLFxuICAgICAgICAgICAgc2FsdDogdGhpcy5zYWx0LFxuICAgICAgICAgICAgbXRkOiBtZXRob2QsXG4gICAgICAgICAgICBqdGk6IElER2VuZXJhdG9yLmdldCgpLnRvU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXI6e2lkOnRoaXMuY2xpZW50SWR9XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhTMjU2IHNlY3JldHMgYXJlIHR5cGljYWxseSAxMjgtYml0IHJhbmRvbSBzdHJpbmdzLCBmb3IgZXhhbXBsZSBoZXgtZW5jb2RlZDpcbiAgICAgICAgLy8gdmFyIHNlY3JldCA9IEJ1ZmZlci5mcm9tKCdmZTFhMTkxNWEzNzlmM2JlNTM5NGI2NGQxNDc5NDkzMicsICdoZXgnKVxuICAgICAgICByZXR1cm4gand0LmVuY29kZShwYXlsb2FkLCB0aGlzLnRva2VuU2VjcmV0LCAnSFMyNTYnLCBvcHRpb25zKVxuICAgIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgV3JhcE1lc3NhZ2VSZXNwIHtcbiAgICBwcm90ZWN0ZWQgX21zZyA6IE1lc3NhZ2UgfCBSZXNwID0gbnVsbFxuICAgIGNvbnN0cnVjdG9yKG1zZyA6IE1lc3NhZ2UgfCBSZXNwKSB7XG4gICAgICAgIHRoaXMuX21zZyA9IG1zZztcbiAgICB9XG5cbiAgICBnZXRSZXN1bHQoKSA6IGFueSB7XG4gICAgICAgIGlmKHRoaXMuX21zZyBpbnN0YW5jZW9mIE1lc3NhZ2Upe1xuICAgICAgICAgICAgaWYodGhpcy5fbXNnICYmIHRoaXMuX21zZy5tZXNzYWdlICYmIHRoaXMuX21zZy5tZXNzYWdlLmRhdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZURhdGEodGhpcy5fbXNnLm1lc3NhZ2UuZGF0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5fbXNnIGluc3RhbmNlb2YgUmVzcCl7XG4gICAgICAgICAgICBpZih0aGlzLl9tc2cgJiYgdGhpcy5fbXNnLnJlc3BvbnNlICYmIHRoaXMuX21zZy5yZXNwb25zZS5kYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVEYXRhKHRoaXMuX21zZy5yZXNwb25zZS5kYXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWNvZGVEYXRhKGNydWRlRGF0IDogYW55KSA6IGFueTtcbn1cblxuYWJzdHJhY3QgY2xhc3MgV3JhcFJlcTxUIGV4dGVuZHMge30+IGV4dGVuZHMgTmV0QmFzZVJlcSB7XG5cbiAgICBwcm90ZWN0ZWQgX1JlcUJvZHkgOiBUID0gbnVsbFxuICAgIGFic3RyYWN0IGdldFByb3RvQ2xhc3NOYW1lKCkgOiBzdHJpbmc7XG4gICAgcHVibGljIGdldCBib2R5KCkgOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1JlcUJvZHlcbiAgICB9XG4gICAgcmVxdWVzdCA6IHRrbWVzc2FnZS5SZXF1ZXN0ID0gbnVsbDtcbiAgICBcblxuICAgIHB1YmxpYyBzZXRKd3RUb2tlbih0b2tlbiA6IHN0cmluZykge1xuICAgICAgICBpZih0aGlzLnJlcXVlc3QgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSBuZXcgdGttZXNzYWdlLlJlcXVlc3Qoe30pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0Lmp3dF90b2tlbiA9IHRva2VuXG4gICAgfVxuICAgIFNlcmlhbGl6ZShmb3JtYXQ6IENvZGVGb3JtYXQpOiBhbnkge1xuICAgICAgICBpZih0aGlzLmJvZHkgPT0gbnVsbCl7XG4gICAgICAgICAgICBUS0xvZy5Mb2dXYXJuKHRoaXMuZ2V0TXNnQ29kZSgpICsgXCLmtojmga/msqHmnIlib2R5XCIpXG4gICAgICAgICAgICAvLyByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ID0gbmV3IHRrbWVzc2FnZS5SZXF1ZXN0KHt9KVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYm9keSAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5kYXQgPSBwYWNrKHRoaXMuYm9keSwgdGhpcy5nZXRQcm90b0NsYXNzTmFtZSgpKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5kYXQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIucHJlU2VyaWFsaXplKCk7XG4gICAgICAgIGlmIChmb3JtYXQgPT0gQ29kZUZvcm1hdC5Qcm90b2J1Zikge1xuICAgICAgICAgICAgbGV0IGJ5dGVzID0gdGttZXNzYWdlLlJlcXVlc3QuZW5jb2RlKHRoaXMucmVxdWVzdCkuZmluaXNoKClcbiAgICAgICAgICAgIGxldCBidWYgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnJlcXVlc3QudG9KU09OKCkpO1xuICAgIH1cblxufVxuXG4vLyDov5nkuKpSZXHnlKjkuo7mr5TovoPngbXmtLvnmoTmg4XlhrXvvIzlpKfpg6jliIbml7blgJnlrqLmiLfnq6/ljY/orq7nu6fmib/kuIrpnaLnmoRXcmFwUmVx5a6e546wXG4vLyDov5nkuKrmmoLml7bkuI3mjqjojZDkvb/nlKhcbmNsYXNzIFJlcSBleHRlbmRzIE5ldEJhc2VSZXF7XG4gICAgcmVxdWVzdCA6IHRrbWVzc2FnZS5SZXF1ZXN0ID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihjb2RlIDogTWVzc2FnZVR5cGUsIGFueURhdDogZ29vZ2xlLnByb3RvYnVmLkFueXxudWxsKXtcbiAgICAgICAgc3VwZXIodHJ1ZSwgY29kZSlcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gbmV3IHRrbWVzc2FnZS5SZXF1ZXN0KHt2ZXJzaW9uOlwiMS4wLjBcIn0pO1xuICAgICAgICB0aGlzLnJlcXVlc3QuZGF0ID0gYW55RGF0O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlcXVlc3QpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Snd0VG9rZW4odG9rZW4gOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3Quand0X3Rva2VuID0gdG9rZW5cbiAgICAgICAgfVxuICAgIH1cbiAgICBTZXJpYWxpemUoZm9ybWF0OiBDb2RlRm9ybWF0KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbm4ndCBzZXJpYWxpemUgZW1wdHkgcmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnByZVNlcmlhbGl6ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlcXVlc3QpO1xuICAgICAgICBpZiAoZm9ybWF0ID09IENvZGVGb3JtYXQuUHJvdG9idWYpIHtcbiAgICAgICAgICAgIGxldCBieXRlcyA9IHRrbWVzc2FnZS5SZXF1ZXN0LmVuY29kZSh0aGlzLnJlcXVlc3QpLmZpbmlzaCgpXG4gICAgICAgICAgICBsZXQgYnVmID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yZXF1ZXN0LnRvSlNPTigpKTtcbiAgICB9XG59XG5cbmNsYXNzIFJlc3AgZXh0ZW5kcyBOZXRCYXNlUmVzcE50ZntcbiAgICBwdWJsaWMgcmVzcG9uc2UgOiB0a21lc3NhZ2UuUmVzcG9uc2UgPSBudWxsO1xuXG4gICAgcHVibGljIGdldEVycm9yKCkgOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5yZXNwb25zZSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2UubWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRFcnJvckNvZGUoKSA6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnJlc3BvbnNlICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZS5lcnI7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHJhY2VJZCgpIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2UgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLnRyYWNlX2lkO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHVibGljIGdldFJlc3VsdCgpIDogYW55IHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0ID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2UuZGF0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdW5wYWNrKHRoaXMucmVzcG9uc2UuZGF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgfVxuICAgIERlc2VyaWFsaXplKGZvcm1hdDogQ29kZUZvcm1hdCwgcGF5bG9hZDogVWludDhBcnJheSk6IE5ldEJhc2VSZXNwTnRmIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGxldCBkYXRhID0gU3RyaW5nVG9VaW50OEFycmF5KHBheWxvYWQpO1xuICAgICAgICBpZiAoZm9ybWF0ID09IENvZGVGb3JtYXQuUHJvdG9idWYpXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gdGttZXNzYWdlLlJlc3BvbnNlLmRlY29kZShwYXlsb2FkKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocGF5bG9hZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSB0a21lc3NhZ2UuUmVzcG9uc2UuZnJvbU9iamVjdChqc29uKVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2V0RXJyb3IodGhpcy5yZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFjZUlkKHRoaXMucmVzcG9uc2UudHJhY2VfaWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBUS0xvZy5Mb2dXYXJuKFwicGFyc2UgTWVzc2FnZSBcIiArIHBheWxvYWQgKyBcIiDlvILluLhcIiArIGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBOZXRCYXNlTWVzc2FnZSB7XG4gICAgcHVibGljIGRhdDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgbWVzc2FnZTogdGttZXNzYWdlLk1lc3NhZ2UgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHtbazogc3RyaW5nXTogYW55fSl7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgdGttZXNzYWdlLk1lc3NhZ2Uoe30pO1xuICAgICAgICBpZiAob3B0aW9ucy5tc2dJZCAmJiBvcHRpb25zLm1zZ0lkID4gMCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmlkID0gb3B0aW9ucy5tc2dJZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50eXBlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS50eXBlID0gdGttZXNzYWdlLk1lc3NhZ2UuVHlwZS5FVkVOVF9CQVNJQztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52ZXJzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UudmVyc2lvbiA9IG9wdGlvbnMudmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5qd3RfdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5qd3RfdG9rZW4gPSBvcHRpb25zLmp3dF90b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS50aW1lc3RhbXAgPSBvcHRpb25zLnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5kYXQpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5kYXQgPSBvcHRpb25zLmRhdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0TXNnSWQoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlICYmIHRoaXMubWVzc2FnZS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS5pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTp0a21lc3NhZ2UuTWVzc2FnZS5UeXBlIHtcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSAmJiB0aGlzLm1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0a21lc3NhZ2UuTWVzc2FnZS5UeXBlLkVWRU5UX0JBU0lDO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmVyc2lvbigpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UgJiYgdGhpcy5tZXNzYWdlLnZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UudmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ1bmtub3duXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRKd3RUb2tlbigpOnN0cmluZ3tcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSAmJiB0aGlzLm1lc3NhZ2Uuand0X3Rva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmp3dF90b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHVibGljIGdldEFueURhdCgpOmFueSB7XG4gICAgICAgIGlmICh0aGlzLmRhdCA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlICYmIHRoaXMubWVzc2FnZS5kYXQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXQgPSB1bnBhY2sodGhpcy5tZXNzYWdlLmRhdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGltZXN0YW1wKCk6Z29vZ2xlLnByb3RvYnVmLklUaW1lc3RhbXB7XG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UgJiYgdGhpcy5tZXNzYWdlLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS50aW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgU2VyaWFsaXplKGZvcm1hdDogQ29kZUZvcm1hdCk6IGFueSB7XG4gICAgICAgIHN1cGVyLnByZVNlcmlhbGl6ZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gICAgICAgIGlmIChmb3JtYXQgPT0gQ29kZUZvcm1hdC5Qcm90b2J1ZilcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGJ5dGVzID0gdGttZXNzYWdlLk1lc3NhZ2UuZW5jb2RlKHRoaXMubWVzc2FnZSkuZmluaXNoKClcbiAgICAgICAgICAgIGxldCBidWYgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UudG9KU09OKCkpO1xuICAgIH1cbiAgICBEZXNlcmlhbGl6ZShmb3JtYXQ6IENvZGVGb3JtYXQsIHBheWxvYWQ6IFVpbnQ4QXJyYXkpOiBOZXRCYXNlTWVzc2FnZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gbGV0IGRhdGEgPSBTdHJpbmdUb1VpbnQ4QXJyYXkocGF5bG9hZCk7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9PSBDb2RlRm9ybWF0LlByb3RvYnVmKVxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0a21lc3NhZ2UuTWVzc2FnZS5kZWNvZGUocGF5bG9hZCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0a21lc3NhZ2UuTWVzc2FnZS5mcm9tT2JqZWN0KGpzb24pXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgVEtMb2cuTG9nV2FybihcInBhcnNlIE1lc3NhZ2UgXCIgKyBwYXlsb2FkICsgXCIg5byC5bi4XCIgKyBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBEZXNlcmlhbGl6ZUZyb21PYmoobXNnOiBvYmplY3QpOiBOZXRCYXNlTWVzc2FnZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbn1cblxuXG5cbmNvbnN0IHBhY2sgPSAoYW55RGF0OiBhbnksIHByb3RvQ2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5wcm90b2J1Zi5Bbnkoe1xuICAgICAgdHlwZV91cmw6IHByb3RvQ2xhc3NOYW1lIHx8IGFueURhdC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgdmFsdWU6IGFueURhdC5jb25zdHJ1Y3Rvci5lbmNvZGUoYW55RGF0KS5maW5pc2goKSxcbiAgICB9KTtcbiAgfTtcblxuY29uc3QgdW5wYWNrID0gKGFueTogZ29vZ2xlLnByb3RvYnVmLklBbnkpID0+IHtcbiAgICBpZiAoIWFueSkgcmV0dXJuIFwiXCI7XG4gICAgY29uc29sZS5sb2coXCJ1bnBhY2sgYW55OlwiKyBhbnkudHlwZV91cmwpO1xuICAgIHN3aXRjaCAoYW55LnR5cGVfdXJsKSB7XG4gICAgICAgIGNhc2UgJ3RrbWVzc2FnZS9zdHJpbmdWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGFueS52YWx1ZSk7XG4gICAgICAgIGNhc2UgJ3RrbWVzc2FnZS9qdWJpYW4ubW9kZWwuU3RyaW5nUmVxdWVzdCc6XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGFueS52YWx1ZSk7XG4gICAgICAgIGNhc2UgJ3RrbWVzc2FnZS9tZXNzYWdlLkV2ZW50QmFzaWMnOlxuICAgICAgICAgICAgcmV0dXJuIHRrbWVzc2FnZS5FdmVudEJhc2ljLmRlY29kZShhbnkudmFsdWUpO1xuICAgICAgICBjYXNlICd0a21lc3NhZ2UvanViaWFuLmdvbG90dGVyeS5tb2RlbC5wcm9maWxlLlByb2ZpbGUnOlxuICAgICAgICAgICAgcmV0dXJuIGp1Ymlhbi5nb2xvdHRlcnkubW9kZWwucHJvZmlsZS5Qcm9maWxlLmRlY29kZShhbnkudmFsdWUpO1xuICAgICAgICBjYXNlICd0a21lc3NhZ2UvanViaWFuLmdvbG90dGVyeS5zcnYub2F1dGgyLlRva2VuJzpcbiAgICAgICAgICAgIHJldHVybiBqdWJpYW4uZ29sb3R0ZXJ5LnNydi5vYXV0aDIuVG9rZW4uZGVjb2RlKGFueS52YWx1ZSk7XG4gICAgICAgIGNhc2UgJ3RrbWVzc2FnZS9qdWJpYW4uZ29sb3R0ZXJ5LnNydi5yb29tLlRhYmxlSW5mbyc6XG4gICAgICAgICAgICByZXR1cm4ganViaWFuLmdvbG90dGVyeS5zcnYucm9vbS5UYWJsZUluZm8uZGVjb2RlKGFueS52YWx1ZSk7XG4gICAgICAgICAgICAvLyBjYXNlICd0a21lc3NhZ2UvbWVzc2FnZS5TaW1wbGVTdHJ1Y3QnOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHRrbWVzc2FnZS5TaW1wbGVTdHJ1Y3QuZGVjb2RlKGFueS52YWx1ZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZ29vZ2xlLnByb3RvYnVmLkFueS5kZWNvZGUoYW55LnZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQge01lc3NhZ2UsIFdyYXBSZXEsIFdyYXBNZXNzYWdlUmVzcCwgUmVxLCBSZXNwLCBKV1RCdWlsZGVyLCBwYWNrLCB1bnBhY2t9Il19