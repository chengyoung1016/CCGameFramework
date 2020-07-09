
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/event/Observer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26545Nmg55D6rvgQKsQlLW/', 'Observer');
// script/framework/event/Observer.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observer = /** @class */ (function () {
    function Observer(callback, context) {
        /** 回调函数 */
        this.callback = null;
        /** 上下文 */
        this.context = null;
        var self = this;
        self.callback = callback;
        self.context = context;
    }
    /**
     * 发送通知
     * @param args 不定参数
     */
    Observer.prototype.notify = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        (_a = self.callback).call.apply(_a, __spreadArrays([self.context], args));
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.compar = function (context) {
        return context == this.context;
    };
    Observer.prototype.isEquailTo = function (target) {
        if (this.callback == target.callback && this.context == target.context) {
            return true;
        }
        return false;
    };
    return Observer;
}());
exports.default = Observer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2V2ZW50L09ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBTUksa0JBQVksUUFBa0IsRUFBRSxPQUFZO1FBTDVDLFdBQVc7UUFDSCxhQUFRLEdBQWEsSUFBSSxDQUFDO1FBQ2xDLFVBQVU7UUFDRixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBR3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUJBQU0sR0FBTjs7UUFBTyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQSxLQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLDJCQUFDLElBQUksQ0FBQyxPQUFPLEdBQUssSUFBSSxHQUFFO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5QkFBTSxHQUFOLFVBQU8sT0FBWTtRQUNmLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUVHLDZCQUFVLEdBQVYsVUFBVyxNQUFpQjtRQUN4QixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDbEUsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2VydmVyIHtcbiAgICAvKiog5Zue6LCD5Ye95pWwICovXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIC8qKiDkuIrkuIvmlocgKi9cbiAgICBwcml2YXRlIGNvbnRleHQ6IGFueSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjazogRnVuY3Rpb24sIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgc2VsZi5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HpgIHpgJrnn6VcbiAgICAgKiBAcGFyYW0gYXJncyDkuI3lrprlj4LmlbBcbiAgICAgKi9cbiAgICBub3RpZnkoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmNhbGxiYWNrLmNhbGwoc2VsZi5jb250ZXh0LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIrkuIvmlofmr5TovoNcbiAgICAgKiBAcGFyYW0gY29udGV4dCDkuIrkuIvmlodcbiAgICAgKi9cbiAgICBjb21wYXIoY29udGV4dDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjb250ZXh0ID09IHRoaXMuY29udGV4dDtcbn1cblxuICAgIGlzRXF1YWlsVG8odGFyZ2V0IDogT2JzZXJ2ZXIpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKHRoaXMuY2FsbGJhY2sgPT0gdGFyZ2V0LmNhbGxiYWNrICYmIHRoaXMuY29udGV4dCA9PSB0YXJnZXQuY29udGV4dCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn0iXX0=