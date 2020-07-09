"use strict";
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