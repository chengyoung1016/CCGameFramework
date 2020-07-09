"use strict";
cc._RF.push(module, 'f88a9G53I1JzpTUsnlhcAw5', 'RpcPromise');
// script/tools/net/RpcPromise.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var IBuilder_1 = require("../../netMessage/IBuilder");
var Singleton_1 = require("../../framework/utils/Singleton");
var promiseTimeout = function (ms, promise) {
    var id = null;
    // Create a promise that rejects in <ms> milliseconds
    var timeout = new Promise(function (resolve, reject) {
        id = setTimeout(function () {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.');
        }, ms);
    });
    // Returns a race between our timeout and the passed in promise
    // 本来在finnaly()clearTimeout可以及时清除定时器，但考虑浏览器兼容性，留一个可能泄漏的缺陷。
    return Promise.race([
        promise,
        timeout
    ]).then(function (result) {
        clearTimeout(id);
        return result;
    });
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TKStream = /** @class */ (function (_super) {
    __extends(TKStream, _super);
    function TKStream() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queue = {};
        return _this;
    }
    TKStream.prototype.init = function (client, timeout, format) {
        this.format = format;
        this.client = client;
        this.timeout = timeout;
    };
    TKStream.prototype.doSend = function (packet) {
        var content = packet.Serialize(IBuilder_1.CodeFormat.Protobuf);
        // console.log("publish ", packet.getMsgCode(), content.length);
        this.client.publish(packet.getMsgCode(), content);
    };
    TKStream.prototype.send = function (packet) {
        var id = packet.getId();
        // TKLog.LogInfo("Send Packet withId:" + id);
        if (typeof id == 'undefined' || id <= 0) {
            this.doSend(packet);
            return new Promise(function (resolve) {
                resolve(null);
            });
        }
        var self = this;
        var job = new Promise(function (resolve, reject) {
            self.doSend(packet);
            self.queue[id] = {
                type: packet.getMsgCode(),
                volatile: false,
                req: packet,
                resolve: resolve,
                reject: reject
            };
        });
        return this.wrapTimeout(id, job, this.timeout);
    };
    TKStream.prototype.onPacket = function (msgId, packet) {
        var request = this.queue[msgId] ? this.queue[msgId] : null;
        if (request) {
            request.resolve(packet);
            delete this.queue[msgId];
        }
    };
    TKStream.prototype.onPacketError = function (msgId, error) {
        var request = this.queue[msgId] ? this.queue[msgId] : null;
        if (request) {
            request.reject(error);
            delete this.queue[msgId];
        }
    };
    /**
     * 生成带超时功能的Promise
     * @param number msgId
     * @param Promise packet
     * @param NetBase packet
     */
    TKStream.prototype.wrapTimeout = function (msgId, promise, ms) {
        var id;
        var self = this;
        // Create a promise that rejects in <ms> milliseconds
        var timeout = new Promise(function (resolve, reject) {
            id = setTimeout(function () {
                console.log('Timed out in ' + ms + 'ms.');
                clearTimeout(id);
                reject('Timed out in ' + ms + 'ms.');
                console.log('delete job NO:' + msgId);
                delete self.queue[msgId];
            }, ms);
        });
        // Returns a race between our timeout and the passed in promise
        // 本来在finnaly()clearTimeout可以及时清除定时器，但考虑浏览器兼容性，留一个可能泄漏的缺陷。
        return Promise.race([
            promise,
            timeout
        ]).then(function (result) {
            clearTimeout(id);
            return result;
        });
    };
    TKStream = __decorate([
        ccclass
    ], TKStream);
    return TKStream;
}(Singleton_1.default));
exports.default = TKStream;

cc._RF.pop();