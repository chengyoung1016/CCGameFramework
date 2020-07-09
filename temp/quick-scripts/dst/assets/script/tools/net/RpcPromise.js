
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tools/net/RpcPromise.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbHMvbmV0L1JwY1Byb21pc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQXFEO0FBQ3JELDZEQUF3RDtBQUV4RCxJQUFNLGNBQWMsR0FBRyxVQUFhLEVBQUUsRUFBRSxPQUFPO0lBQzNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztJQUNkLHFEQUFxRDtJQUNyRCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3pDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDaEIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxlQUFlLEdBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0gsK0RBQStEO0lBQy9ELDBEQUEwRDtJQUMxRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDaEIsT0FBTztRQUNQLE9BQU87S0FDTixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtRQUNWLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQTtBQUVLLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVCLDRCQUFTO0lBQWhDO1FBQUEscUVBbUZDO1FBbEZHLFdBQUssR0FBRyxFQUFFLENBQUM7O0lBa0ZmLENBQUM7SUE5RUcsdUJBQUksR0FBSixVQUFLLE1BQVcsRUFBRSxPQUFlLEVBQUUsTUFBa0I7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxN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Q2pCLE1BQU0sQ0FBQyxlQUFlLEdBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCwrREFBK0Q7UUFDL0QsMERBQTBEO1FBQzFELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixPQUFPO1lBQ1AsT0FBTztTQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWxGQyxRQUFRO1FBRGIsT0FBTztPQUNGLFFBQVEsQ0FtRmI7SUFBRCxlQUFDO0NBbkZELEFBbUZDLENBbkZzQixtQkFBUyxHQW1GL0I7QUFFRCxrQkFBZSxRQUFRLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05ldEJhc2V9IGZyb20gXCIuLi8uLi9uZXRNZXNzYWdlL01lc3NhZ2VcIjtcbmltcG9ydCB7Q29kZUZvcm1hdH0gZnJvbSBcIi4uLy4uL25ldE1lc3NhZ2UvSUJ1aWxkZXJcIjtcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25cIjtcblxuY29uc3QgcHJvbWlzZVRpbWVvdXQgPSBmdW5jdGlvbiA8VD4obXMsIHByb21pc2Upe1xuICAgIGxldCBpZCA9IG51bGw7XG4gICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgaW4gPG1zPiBtaWxsaXNlY29uZHNcbiAgICBsZXQgdGltZW91dCA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgcmVqZWN0KCdUaW1lZCBvdXQgaW4gJysgbXMgKyAnbXMuJyk7XG4gICAgICAgIH0sIG1zKTtcbiAgICB9KTsgXG4gICAgLy8gUmV0dXJucyBhIHJhY2UgYmV0d2VlbiBvdXIgdGltZW91dCBhbmQgdGhlIHBhc3NlZCBpbiBwcm9taXNlXG4gICAgLy8g5pys5p2l5ZyoZmlubmFseSgpY2xlYXJUaW1lb3V05Y+v5Lul5Y+K5pe25riF6Zmk5a6a5pe25Zmo77yM5L2G6ICD6JmR5rWP6KeI5Zmo5YW85a655oCn77yM55WZ5LiA5Liq5Y+v6IO95rOE5ryP55qE57y66Zm344CCXG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgICAgIHByb21pc2UsXG4gICAgICAgIHRpbWVvdXRcbiAgICAgICAgXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xufVxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmNsYXNzIFRLU3RyZWFtIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBxdWV1ZSA9IHt9O1xuICAgIGNsaWVudDogYW55O1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbiAgICBmb3JtYXQ6IENvZGVGb3JtYXQ7XG4gICAgaW5pdChjbGllbnQ6IGFueSwgdGltZW91dDogbnVtYmVyLCBmb3JtYXQ6IENvZGVGb3JtYXQpIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgIH1cbiAgICBwdWJsaWMgZG9TZW5kKHBhY2tldDogTmV0QmFzZSkge1xuICAgICAgICBsZXQgY29udGVudCA9IHBhY2tldC5TZXJpYWxpemUoQ29kZUZvcm1hdC5Qcm90b2J1Zik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHVibGlzaCBcIiwgcGFja2V0LmdldE1zZ0NvZGUoKSwgY29udGVudC5sZW5ndGgpO1xuICAgICAgICB0aGlzLmNsaWVudC5wdWJsaXNoKHBhY2tldC5nZXRNc2dDb2RlKCksIGNvbnRlbnQpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VuZChwYWNrZXQ6IE5ldEJhc2UpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgaWQgPSBwYWNrZXQuZ2V0SWQoKTtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIlNlbmQgUGFja2V0IHdpdGhJZDpcIiArIGlkKTtcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PSAndW5kZWZpbmVkJyB8fCBpZCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRvU2VuZChwYWNrZXQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgam9iID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5kb1NlbmQocGFja2V0KTtcbiAgICAgICAgICAgIHNlbGYucXVldWVbaWRdID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHBhY2tldC5nZXRNc2dDb2RlKCksXG4gICAgICAgICAgICAgICAgdm9sYXRpbGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVxOiBwYWNrZXQsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3Q6IHJlamVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLndyYXBUaW1lb3V0KGlkLCBqb2IsIHRoaXMudGltZW91dCk7XG4gICAgfVxuICAgIHB1YmxpYyBvblBhY2tldChtc2dJZDogbnVtYmVyLCBwYWNrZXQ6IE5ldEJhc2UpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXF1ZXN0ID0gdGhpcy5xdWV1ZVttc2dJZF0gPyB0aGlzLnF1ZXVlW21zZ0lkXSA6IG51bGw7XG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlc29sdmUocGFja2V0KTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXVlW21zZ0lkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhY2tldEVycm9yKG1zZ0lkOiBudW1iZXIsIGVycm9yOiBFcnJvcikge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXMucXVldWVbbXNnSWRdID8gdGhpcy5xdWV1ZVttc2dJZF0gOiBudWxsO1xuICAgICAgICBpZiAocmVxdWVzdCkge1xuXG4gICAgICAgICAgICByZXF1ZXN0LnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5xdWV1ZVttc2dJZF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog55Sf5oiQ5bim6LaF5pe25Yqf6IO955qEUHJvbWlzZVxuICAgICAqIEBwYXJhbSBudW1iZXIgbXNnSWRcbiAgICAgKiBAcGFyYW0gUHJvbWlzZSBwYWNrZXRcbiAgICAgKiBAcGFyYW0gTmV0QmFzZSBwYWNrZXRcbiAgICAgKi8gICAgXG4gICAgcHVibGljIHdyYXBUaW1lb3V0IChtc2dJZDogbnVtYmVyLCBwcm9taXNlOiBQcm9taXNlPGFueT4sIG1zOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgaWQ7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgaW4gPG1zPiBtaWxsaXNlY29uZHNcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lZCBvdXQgaW4gJysgbXMgKyAnbXMuJyk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1RpbWVkIG91dCBpbiAnKyBtcyArICdtcy4nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGpvYiBOTzonKyBtc2dJZCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYucXVldWVbbXNnSWRdO1xuICAgICAgICAgICAgfSwgbXMpO1xuICAgICAgICB9KTsgXG4gICAgICAgIC8vIFJldHVybnMgYSByYWNlIGJldHdlZW4gb3VyIHRpbWVvdXQgYW5kIHRoZSBwYXNzZWQgaW4gcHJvbWlzZVxuICAgICAgICAvLyDmnKzmnaXlnKhmaW5uYWx5KCljbGVhclRpbWVvdXTlj6/ku6Xlj4rml7bmuIXpmaTlrprml7blmajvvIzkvYbogIPomZHmtY/op4jlmajlhbzlrrnmgKfvvIznlZnkuIDkuKrlj6/og73ms4TmvI/nmoTnvLrpmbfjgIJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgdGltZW91dFxuICAgICAgICAgICAgXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVEtTdHJlYW0iXX0=