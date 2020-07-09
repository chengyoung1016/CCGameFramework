
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_Rotate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ea02YIsppDUqNeIAvHnbpz', 'TweenAnim_Rotate');
// script/framework/tween/TweenAnim_Rotate.ts

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
var PlayOppBaseComponent_1 = require("../utils/PlayOppBaseComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TweenAnim_Rotate = /** @class */ (function (_super) {
    __extends(TweenAnim_Rotate, _super);
    function TweenAnim_Rotate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 开始前延迟（秒），对永久执行的动作无效
        _this.delay = 0;
        // 执行一次的时间（秒）
        _this.duration = 1;
        // 改变角度
        _this.angle = 1;
        // 循环次数，-1为一直循环
        _this.repeate = 1;
        // 是to还是by
        _this.isTo = false;
        return _this;
    }
    TweenAnim_Rotate.prototype.Excute = function () {
        _super.prototype.Excute.call(this);
        // TKLog.LogInfo("TweenRotate:" + this.delay + "," + this.duration + "," + this.angle + "," + this.repeate + "," + this.isTo)
        var tween = cc.tween(this.node);
        if (this.repeate < 0) {
            this.repeate = Number.MAX_SAFE_INTEGER;
        }
        else {
            tween = tween.delay(this.delay);
        }
        // tween = tween.repeat(this.repeate);
        if (this.isTo) {
            tween = tween.to(this.duration, { angle: this.angle });
        }
        else {
            tween = tween.by(this.duration, { angle: this.angle });
        }
        tween = tween.repeat(this.repeate).start();
    };
    __decorate([
        property(cc.Float)
    ], TweenAnim_Rotate.prototype, "delay", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Rotate.prototype, "duration", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Rotate.prototype, "angle", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Rotate.prototype, "repeate", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Rotate.prototype, "isTo", void 0);
    TweenAnim_Rotate = __decorate([
        ccclass
    ], TweenAnim_Rotate);
    return TweenAnim_Rotate;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Rotate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9Sb3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBRTNELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFvQjtJQUFsRTtRQUFBLHFFQTBDQztRQXpDRyxzQkFBc0I7UUFFdEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGFBQWE7UUFFYixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsT0FBTztRQUVQLFdBQUssR0FBRyxDQUFDLENBQUM7UUFFVixlQUFlO1FBRWYsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFVBQVU7UUFFVixVQUFJLEdBQUcsS0FBSyxDQUFDOztJQXVCakIsQ0FBQztJQXJCRyxpQ0FBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZiw2SEFBNkg7UUFDN0gsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsSUFBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBQztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztTQUMxQzthQUFJO1lBQ0QsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0Qsc0NBQXNDO1FBRXRDLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNULEtBQUssR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDdkQ7YUFBSTtZQUNELEtBQUssR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDdkQ7UUFHRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNUO0lBSVY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDTjtJQUliO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1Q7SUFJVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3FEQUNUO0lBSVo7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztrREFDUjtJQW5CSSxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTBDcEM7SUFBRCx1QkFBQztDQTFDRCxBQTBDQyxDQTFDNkMsOEJBQW9CLEdBMENqRTtrQkExQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5T3BwQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vdXRpbHMvUGxheU9wcEJhc2VDb21wb25lbnRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbkFuaW1fUm90YXRlIGV4dGVuZHMgUGxheU9wcEJhc2VDb21wb25lbnQge1xuICAgIC8vIOW8gOWni+WJjeW7tui/n++8iOenku+8ie+8jOWvueawuOS5heaJp+ihjOeahOWKqOS9nOaXoOaViFxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBkZWxheSA9IDA7XG5cbiAgICAvLyDmiafooYzkuIDmrKHnmoTml7bpl7TvvIjnp5LvvIlcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZHVyYXRpb24gPSAxO1xuXG4gICAgLy8g5pS55Y+Y6KeS5bqmXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIGFuZ2xlID0gMTtcblxuICAgIC8vIOW+queOr+asoeaVsO+8jC0x5Li65LiA55u05b6q546vXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcmVwZWF0ZSA9IDE7XG4gICAgXG4gICAgLy8g5pivdG/ov5jmmK9ieVxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzVG8gPSBmYWxzZTtcblxuICAgIEV4Y3V0ZSgpe1xuICAgICAgICBzdXBlci5FeGN1dGUoKTtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIlR3ZWVuUm90YXRlOlwiICsgdGhpcy5kZWxheSArIFwiLFwiICsgdGhpcy5kdXJhdGlvbiArIFwiLFwiICsgdGhpcy5hbmdsZSArIFwiLFwiICsgdGhpcy5yZXBlYXRlICsgXCIsXCIgKyB0aGlzLmlzVG8pXG4gICAgICAgIGxldCB0d2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnJlcGVhdGUgPCAwKXtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0ZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHR3ZWVuID0gdHdlZW4uZGVsYXkodGhpcy5kZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHdlZW4gPSB0d2Vlbi5yZXBlYXQodGhpcy5yZXBlYXRlKTtcblxuICAgICAgICBpZih0aGlzLmlzVG8pe1xuICAgICAgICAgICAgdHdlZW4gPSB0d2Vlbi50byh0aGlzLmR1cmF0aW9uLCB7YW5nbGU6dGhpcy5hbmdsZX0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHR3ZWVuID0gdHdlZW4uYnkodGhpcy5kdXJhdGlvbiwge2FuZ2xlOnRoaXMuYW5nbGV9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdHdlZW4gPSB0d2Vlbi5yZXBlYXQodGhpcy5yZXBlYXRlKS5zdGFydCgpO1xuICAgIH1cbn0iXX0=