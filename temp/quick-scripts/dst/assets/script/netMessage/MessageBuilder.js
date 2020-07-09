
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/netMessage/MessageBuilder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e308KcBbhK+J04FH1YkH7F', 'MessageBuilder');
// script/netMessage/MessageBuilder.ts

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
var IBuilder_1 = require("./IBuilder");
var pb = require("./PBMessage");
var Singleton_1 = require("../framework/utils/Singleton");
var MessageBuilder = /** @class */ (function (_super) {
    __extends(MessageBuilder, _super);
    function MessageBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.format = IBuilder_1.CodeFormat.Protobuf;
        return _this;
    }
    MessageBuilder.prototype.init = function (format) {
        this.format = format;
    };
    MessageBuilder.prototype.BuildMessage = function (topic, id, payload) {
        return new pb.Message({ 'id': id, 'code': topic }).Deserialize(this.format, payload);
    };
    MessageBuilder.prototype.BuildRequest = function (topic) {
        return null;
    };
    MessageBuilder.prototype.BuildResponse = function (topic, id, payload) {
        switch (topic) {
            default:
                return new pb.Resp(id, topic).Deserialize(this.format, payload);
            //msg.SayResp(id).Deserialize(this.format, payload);
        }
    };
    return MessageBuilder;
}(Singleton_1.default));
exports.default = MessageBuilder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbmV0TWVzc2FnZS9NZXNzYWdlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBb0U7QUFFcEUsZ0NBQWtDO0FBQ2xDLDBEQUFxRDtBQUVyRDtJQUE0QyxrQ0FBUztJQUFyRDtRQUFBLHFFQWtCQztRQWpCQyxZQUFNLEdBQWUscUJBQVUsQ0FBQyxRQUFRLENBQUM7O0lBaUIzQyxDQUFDO0lBaEJDLDZCQUFJLEdBQUosVUFBSyxNQUFrQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0QscUNBQVksR0FBWixVQUFhLEtBQWMsRUFBRSxFQUFVLEVBQUUsT0FBbUI7UUFDMUQsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsS0FBYztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxzQ0FBYSxHQUFiLFVBQWMsS0FBYSxFQUFFLEVBQVUsRUFBRSxPQUFtQjtRQUMxRCxRQUFRLEtBQUssRUFBRTtZQUNiO2dCQUNBLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNoRSxvREFBb0Q7U0FDckQ7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCMkMsbUJBQVMsR0FrQnBEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElNZXNzYWdlQnVpbGRlciwge01lc3NhZ2VUeXBlLCBDb2RlRm9ybWF0fSBmcm9tIFwiLi9JQnVpbGRlclwiO1xuaW1wb3J0ICogYXMgbXNnIGZyb20gXCIuL01lc3NhZ2VcIjtcbmltcG9ydCAqIGFzIHBiIGZyb20gXCIuL1BCTWVzc2FnZVwiO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vZnJhbWV3b3JrL3V0aWxzL1NpbmdsZXRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQnVpbGRlciBleHRlbmRzIFNpbmdsZXRvbiBpbXBsZW1lbnRzIElNZXNzYWdlQnVpbGRlcntcbiAgZm9ybWF0OiBDb2RlRm9ybWF0ID0gQ29kZUZvcm1hdC5Qcm90b2J1ZjtcbiAgaW5pdChmb3JtYXQ6IENvZGVGb3JtYXQpIHtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgfVxuICBCdWlsZE1lc3NhZ2UodG9waWMgOiBzdHJpbmcsIGlkOiBudW1iZXIsIHBheWxvYWQ6IFVpbnQ4QXJyYXkpOiBtc2cuTmV0QmFzZU1lc3NhZ2Uge1xuICAgIHJldHVybiBuZXcgcGIuTWVzc2FnZSh7J2lkJzppZCwgJ2NvZGUnOiB0b3BpY30pLkRlc2VyaWFsaXplKHRoaXMuZm9ybWF0LCBwYXlsb2FkKTtcbiAgfVxuICBCdWlsZFJlcXVlc3QodG9waWMgOiBzdHJpbmcpOiBtc2cuTmV0QmFzZVJlcSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgQnVpbGRSZXNwb25zZSh0b3BpYzogc3RyaW5nLCBpZDogbnVtYmVyLCBwYXlsb2FkOiBVaW50OEFycmF5KSA6bXNnLk5ldEJhc2VSZXNwTnRmIHtcbiAgICBzd2l0Y2ggKHRvcGljKSB7XG4gICAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBwYi5SZXNwKGlkLCB0b3BpYykuRGVzZXJpYWxpemUodGhpcy5mb3JtYXQsIHBheWxvYWQpO1xuICAgICAgLy9tc2cuU2F5UmVzcChpZCkuRGVzZXJpYWxpemUodGhpcy5mb3JtYXQsIHBheWxvYWQpO1xuICAgIH1cbiAgfVxufSJdfQ==