
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/netMessage/Message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbmV0TWVzc2FnZS9NZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUQ7QUFFbkQ7SUFHRTtJQUF1QixDQUFDO0lBQ1YsZUFBRyxHQUFqQjtRQUNFLE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFMRCw2QkFBNkI7SUFDdEIsa0JBQU0sR0FBWSxDQUFDLENBQUM7SUFLN0Isa0JBQUM7Q0FQRCxBQU9DLElBQUE7QUF3R08sa0NBQVc7QUF2R25COztHQUVHO0FBQ0g7SUFNRSxpQkFBbUIsVUFBb0IsRUFBRSxJQUFhO1FBSHRELFNBQVM7UUFDRixjQUFTLEdBQVksc0JBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFHekQsSUFBRyxVQUFVLEVBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtTQUM3QjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFTSw0QkFBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ00sOEJBQVksR0FBbkI7UUFDRSxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQU9ILGNBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBcUVvQiwwQkFBTztBQXBFNUI7O0dBRUc7QUFDSDtJQUFzQyxrQ0FBTztJQUMzQyx3QkFBWSxPQUEyQjtRQUF2QyxpQkFTQztRQVJDLElBQUksU0FBUyxHQUFhLEtBQUssQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBaUIsc0JBQVcsQ0FBQyxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3JCLElBQUksT0FBTyxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVM7WUFDekMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxPQUFPLENBQUMsSUFBSTtZQUNkLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RCLFFBQUEsa0JBQU0sU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFDOztJQUN6QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYcUMsT0FBTyxHQVc1QztBQXNENkIsd0NBQWM7QUFyRDVDOztHQUVHO0FBQ0g7SUFBa0MsOEJBQU87SUFBekM7O0lBT0EsQ0FBQztJQU5DLGdDQUFXLEdBQVgsVUFBWSxNQUFrQixFQUFFLEdBQVE7UUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCx1Q0FBa0IsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUGlDLE9BQU8sR0FPeEM7QUEyQzZDLGdDQUFVO0FBMUN4RDs7R0FFRztBQUNIO0lBQXNDLGtDQUFPO0lBSXpDLHdCQUFZLEtBQWEsRUFBRSxPQUFlO1FBQTFDLFlBQ0Usa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUV0QjtRQURDLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDOztJQUNuQixDQUFDO0lBQ00saUNBQVEsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ00saUNBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTSxtQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFDTSxtQ0FBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ00sa0NBQVMsR0FBaEIsVUFBaUIsTUFBVztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ00sa0NBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELGtDQUFTLEdBQVQsVUFBVSxNQUFrQjtRQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELDJDQUFrQixHQUFsQixVQUFtQixHQUFXO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWhDQSxBQWdDQyxDQWhDcUMsT0FBTyxHQWdDNUM7QUFPeUQsd0NBQWM7QUFOeEUsU0FBUyxRQUFRLENBQUMsR0FBWSxFQUFFLEtBQVU7SUFFdEMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7UUFBRSxPQUFPLFNBQVMsQ0FBQzs7UUFDdEMsT0FBTyxLQUFLLENBQUM7QUFDdEIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVzc2FnZVR5cGUsIENvZGVGb3JtYXR9IGZyb20gXCIuL0lCdWlsZGVyXCI7XG5cbmNsYXNzIElER2VuZXJhdG9yIHtcbiAgLy/mtojmga9JRCzlpoLmnpzluKblhaXoh6rlop7nmoRJRO+8jOihqOekuuWuouaIt+err+imgeaxguacjeWKoeerr+WbnuWkjVxuICBzdGF0aWMgbXNnX2lkIDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIElER2VuZXJhdG9yLm1zZ19pZCsrO1xuICB9XG59XG4vKipcbiAqIOe9kee7nOWfuuehgOaKveixoeWMheWumuS5iVxuICovXG5hYnN0cmFjdCBjbGFzcyBOZXRCYXNlIHtcbiAgLy9NUVRU5raI5oGvSUQs5aaC5p6c5bim5YWl6Ieq5aKe55qESUTvvIzooajnpLrlrqLmiLfnq6/opoHmsYLmnI3liqHnq6/lm57lpI1cbiAgcHVibGljIF9pZCA6IG51bWJlcjtcbiAgLy9Ub3BpY+exu+Wei1xuICBwdWJsaWMgX21zZ19jb2RlIDogc3RyaW5nID0gTWVzc2FnZVR5cGUuVW5rbm93bi50b1N0cmluZygpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuZWVkX3JlcGx5IDogYm9vbGVhbiwgY29kZSA6IHN0cmluZyl7XG4gICAgaWYobmVlZF9yZXBseSl7XG4gICAgICB0aGlzLl9pZCA9IElER2VuZXJhdG9yLmdldCgpXG4gICAgfVxuICAgIHRoaXMuX21zZ19jb2RlID0gY29kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCgpIDogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TXNnQ29kZSgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9tc2dfY29kZTtcbiAgfVxuICBwdWJsaWMgcHJlU2VyaWFsaXplKCl7XG4gICAgaWYodGhpcy5faWQgPiAwKXtcbiAgICAgIHRoaXMuX21zZ19jb2RlID0gdGhpcy5fbXNnX2NvZGUgKyBcIi9cIiArIHRoaXMuX2lkO1xuICAgIH1cbiAgfVxuICAvLyDlsIboh6rlt7Hluo/liJfljJbkuLrvvIhKU09OKVxuICBhYnN0cmFjdCBTZXJpYWxpemUoZm9ybWF0OiBDb2RlRm9ybWF0KSA6IGFueTtcbiAgLy8g5bCG77yISlNPTu+8ieWtl+espuS4suWPjeW6j+WIl+WMluWhq+WFhee7meiHquW3seeahOWPmOmHj1xuICBhYnN0cmFjdCBEZXNlcmlhbGl6ZShmb3JtYXQ6IENvZGVGb3JtYXQsIG1zZzogYW55KSA6IE5ldEJhc2U7XG4gIC8vIOWwhu+8iEpTT07lr7nosaHvvInlj43luo/liJfljJbloavlhYXnu5noh6rlt7HnmoTlj5jph49cbiAgYWJzdHJhY3QgRGVzZXJpYWxpemVGcm9tT2JqKG1zZyA6IG9iamVjdCkgOiBOZXRCYXNlO1xufVxuLyoqXG4gKiDln7rnoYDlvILmraXmtojmga/ljIVcbiAqL1xuYWJzdHJhY3QgY2xhc3MgTmV0QmFzZU1lc3NhZ2UgZXh0ZW5kcyBOZXRCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9uczoge1trOiBzdHJpbmddOiBhbnl9KXtcbiAgICBsZXQgbmVlZFJlcGx5IDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBjb2RlIDogTWVzc2FnZVR5cGUgPSBNZXNzYWdlVHlwZS5Vbmtub3duO1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uZWVkX3JlcGx5ID09PSBcImJvb2xlYW5cIilcbiAgICAgIG5lZWRSZXBseSA9IG9wdGlvbnMubmVlZF9yZXBseTtcbiAgICBpZiAob3B0aW9ucy5jb2RlKVxuICAgICAgY29kZSA9IG9wdGlvbnMuY29kZTtcbiAgICBzdXBlcihuZWVkUmVwbHksIGNvZGUpO1xuICB9XG59XG4vKipcbiAqIOWfuuehgOivt+axguWMhVxuICovXG5hYnN0cmFjdCBjbGFzcyBOZXRCYXNlUmVxIGV4dGVuZHMgTmV0QmFzZXtcbiAgRGVzZXJpYWxpemUoZm9ybWF0OiBDb2RlRm9ybWF0LCBtc2c6IGFueSkgOk5ldEJhc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgRGVzZXJpYWxpemVGcm9tT2JqKG1zZzogb2JqZWN0KTogTmV0QmFzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuLyoqXG4gKiDln7rnoYDor7fmsYLljIVcbiAqL1xuYWJzdHJhY3QgY2xhc3MgTmV0QmFzZVJlc3BOdGYgZXh0ZW5kcyBOZXRCYXNle1xuICAgIHB1YmxpYyBfZXJyb3IgOiBzdHJpbmc7XG4gICAgcHVibGljIF90cmFjZUlkIDogc3RyaW5nO1xuICAgIHB1YmxpYyByZXN1bHQgOiBhbnk7XG4gICAgY29uc3RydWN0b3IobXNnSWQ6IG51bWJlciwgbXNnQ29kZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihmYWxzZSwgbXNnQ29kZSlcbiAgICAgIHRoaXMuX2lkID0gbXNnSWQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRFcnJvcigpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICB9XG4gICAgcHVibGljIHNldEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRUcmFjZUlkKHRyYWNlSWQ6IHN0cmluZykge1xuICAgICAgdGhpcy5fdHJhY2VJZCA9IHRyYWNlSWQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUcmFjZUlkKCkgOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYWNlSWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRSZXN1bHQocmVzdWx0OiBhbnkpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UmVzdWx0KCkgOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cbiAgICBTZXJpYWxpemUoZm9ybWF0OiBDb2RlRm9ybWF0KTogYW55e1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIERlc2VyaWFsaXplRnJvbU9iaihtc2c6IG9iamVjdCk6IE5ldEJhc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwbGFjZXIoa2V5IDogc3RyaW5nLCB2YWx1ZSA6YW55KVxue1xuICAgIGlmIChrZXkuY2hhckF0KDApID09ICdfJykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBlbHNlIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IHtJREdlbmVyYXRvciwgTmV0QmFzZSwgTmV0QmFzZU1lc3NhZ2UsIE5ldEJhc2VSZXEsIE5ldEJhc2VSZXNwTnRmfVxuIl19