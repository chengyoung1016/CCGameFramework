
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/event/Emitter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2V2ZW50L0VtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBR2xDO0lBQUE7UUFDSSxXQUFXO1FBQ0QsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQW1EN0IsQ0FBQztJQWpERzs7Ozs7T0FLRztJQUNJLDBCQUFRLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLFFBQWtCLEVBQUUsT0FBWTtRQUMxRCxJQUFJLFNBQVMsR0FBZSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx3QkFBTSxHQUFiLFVBQWMsSUFBWSxFQUFFLFFBQWtCLEVBQUUsT0FBWTtRQUN4RCxJQUFJLFNBQVMsR0FBZSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUN2QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0JBQUksR0FBWCxVQUFZLElBQVk7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNwQyxJQUFJLFNBQVMsR0FBZSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUN2QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxNQUFNLE9BQWYsUUFBUSxrQkFBUSxJQUFJLEdBQUssSUFBSSxHQUFFO1NBQ2xDO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXJEQSxBQXFEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9ic2VydmVyIGZyb20gXCIuL09ic2VydmVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgLyoqIOebkeWQrOaVsOe7hCAqL1xuICAgIHByb3RlY3RlZCBsaXN0ZW5lcnMgPSB7fTtcblxuICAgIC8qKiBcbiAgICAgKiDms6jlhozkuovku7ZcbiAgICAgKiBAcGFyYW0gbmFtZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIGNvbnRleHQg5LiK5LiL5paHXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgbGV0IG9ic2VydmVyczogT2JzZXJ2ZXJbXSA9IHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICBpZiAoIW9ic2VydmVycykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXS5wdXNoKG5ldyBPYnNlcnZlcihjYWxsYmFjaywgY29udGV4dCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOS6i+S7tlxuICAgICAqIEBwYXJhbSBuYW1lIOS6i+S7tuWQjeensFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gY29udGV4dCDkuIrkuIvmlodcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgbGV0IG9ic2VydmVyczogT2JzZXJ2ZXJbXSA9IHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICBpZiAoIW9ic2VydmVycykgcmV0dXJuO1xuICAgICAgICBsZXQgbGVuZ3RoID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gb2JzZXJ2ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBhcihjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ic2VydmVycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5LqL5Lu2XG4gICAgICogQHBhcmFtIG5hbWUg5LqL5Lu25ZCN56ewXG4gICAgICovXG4gICAgcHVibGljIGZpcmUobmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBPYnNlcnZlcltdID0gdGhpcy5saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzKSByZXR1cm47XG4gICAgICAgIGxldCBsZW5ndGggPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBvYnNlcnZlcnNbaV07XG4gICAgICAgICAgICBvYnNlcnZlci5ub3RpZnkobmFtZSwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=