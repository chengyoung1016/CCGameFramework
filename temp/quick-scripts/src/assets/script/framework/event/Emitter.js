"use strict";
cc._RF.push(module, '2167cysG7JFdoUqlV+fmVUu', 'Emitter');
// script/framework/event/Emitter.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = require("./Observer");
var Emitter = /** @class */ (function () {
    function Emitter() {
        /** 监听数组 */
        this.listeners = {};
    }
    /**
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.register = function (name, callback, context) {
        var observers = this.listeners[name];
        if (!observers) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(new Observer_1.default(callback, context));
    };
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.remove = function (name, callback, context) {
        var observers = this.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete this.listeners[name];
        }
    };
    /**
     * 发送事件
     * @param name 事件名称
     */
    Emitter.prototype.fire = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var observers = this.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            observer.notify.apply(observer, __spreadArrays([name], args));
        }
    };
    return Emitter;
}());
exports.default = Emitter;

cc._RF.pop();