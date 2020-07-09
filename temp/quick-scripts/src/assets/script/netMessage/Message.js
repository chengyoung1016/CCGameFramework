"use strict";
cc._RF.push(module, '24853EzYL5HEprNUwmEN0AE', 'Message');
// script/netMessage/Message.ts

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
exports.NetBaseRespNtf = exports.NetBaseReq = exports.NetBaseMessage = exports.NetBase = exports.IDGenerator = void 0;
var IBuilder_1 = require("./IBuilder");
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.get = function () {
        return IDGenerator.msg_id++;
    };
    //消息ID,如果带入自增的ID，表示客户端要求服务端回复
    IDGenerator.msg_id = 1;
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;
/**
 * 网络基础抽象包定义
 */
var NetBase = /** @class */ (function () {
    function NetBase(need_reply, code) {
        //Topic类型
        this._msg_code = IBuilder_1.MessageType.Unknown.toString();
        if (need_reply) {
            this._id = IDGenerator.get();
        }
        this._msg_code = code;
    }
    NetBase.prototype.getId = function () {
        return this._id;
    };
    NetBase.prototype.getMsgCode = function () {
        return this._msg_code;
    };
    NetBase.prototype.preSerialize = function () {
        if (this._id > 0) {
            this._msg_code = this._msg_code + "/" + this._id;
        }
    };
    return NetBase;
}());
exports.NetBase = NetBase;
/**
 * 基础异步消息包
 */
var NetBaseMessage = /** @class */ (function (_super) {
    __extends(NetBaseMessage, _super);
    function NetBaseMessage(options) {
        var _this = this;
        var needReply = false;
        var code = IBuilder_1.MessageType.Unknown;
        if (!options)
            return;
        if (typeof options.need_reply === "boolean")
            needReply = options.need_reply;
        if (options.code)
            code = options.code;
        _this = _super.call(this, needReply, code) || this;
        return _this;
    }
    return NetBaseMessage;
}(NetBase));
exports.NetBaseMessage = NetBaseMessage;
/**
 * 基础请求包
 */
var NetBaseReq = /** @class */ (function (_super) {
    __extends(NetBaseReq, _super);
    function NetBaseReq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetBaseReq.prototype.Deserialize = function (format, msg) {
        throw new Error("Method not implemented.");
    };
    NetBaseReq.prototype.DeserializeFromObj = function (msg) {
        throw new Error("Method not implemented.");
    };
    return NetBaseReq;
}(NetBase));
exports.NetBaseReq = NetBaseReq;
/**
 * 基础请求包
 */
var NetBaseRespNtf = /** @class */ (function (_super) {
    __extends(NetBaseRespNtf, _super);
    function NetBaseRespNtf(msgId, msgCode) {
        var _this = _super.call(this, false, msgCode) || this;
        _this._id = msgId;
        return _this;
    }
    NetBaseRespNtf.prototype.getError = function () {
        return this._error;
    };
    NetBaseRespNtf.prototype.setError = function (error) {
        this._error = error;
    };
    NetBaseRespNtf.prototype.setTraceId = function (traceId) {
        this._traceId = traceId;
    };
    NetBaseRespNtf.prototype.getTraceId = function () {
        return this._traceId;
    };
    NetBaseRespNtf.prototype.setResult = function (result) {
        this.result = result;
    };
    NetBaseRespNtf.prototype.getResult = function () {
        return this.result;
    };
    NetBaseRespNtf.prototype.Serialize = function (format) {
        throw new Error("Method not implemented.");
    };
    NetBaseRespNtf.prototype.DeserializeFromObj = function (msg) {
        throw new Error("Method not implemented.");
    };
    return NetBaseRespNtf;
}(NetBase));
exports.NetBaseRespNtf = NetBaseRespNtf;
function replacer(key, value) {
    if (key.charAt(0) == '_')
        return undefined;
    else
        return value;
}

cc._RF.pop();