
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_Alpha.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '571b2zft05GAJPPYbPmeVLI', 'TweenAnim_Alpha');
// script/framework/tween/TweenAnim_Alpha.ts

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
var TweenAnim_Wave = /** @class */ (function (_super) {
    __extends(TweenAnim_Wave, _super);
    function TweenAnim_Wave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startAlpha = 1;
        _this.goalAlhpa = 0;
        _this.delay = 0;
        _this.dur = 1;
        _this.repeate = 0;
        _this.isReverse = true;
        return _this;
    }
    TweenAnim_Wave.prototype.Excute = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var tween = cc.tween(_this.node).to(_this.dur, { opacity: _this.goalAlhpa * 255 });
            _this.node.opacity = 255 * _this.startAlpha;
            // let item = tween.to(this.dur, {opacity: this.goalAlhpa * 255})
            //                 .to(this.dur, {opacity : this.startAlpha * 255});
            //需要reverse一遍
            var item;
            if (_this.isReverse) {
                item = tween.to(_this.dur, { opacity: _this.startAlpha * 255 });
            }
            else {
                item = tween;
            }
            if (_this.repeate < 0) {
                _this.repeate = Number.MAX_SAFE_INTEGER;
            }
            tween.repeat(_this.repeate, item);
            tween.start();
        }, this.delay);
    };
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "startAlpha", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "goalAlhpa", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "delay", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "dur", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Wave.prototype, "repeate", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Wave.prototype, "isReverse", void 0);
    TweenAnim_Wave = __decorate([
        ccclass
    ], TweenAnim_Wave);
    return TweenAnim_Wave;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Wave;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9BbHBoYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBaUU7QUFFM0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQW9CO0lBQWhFO1FBQUEscUVBNENDO1FBMUNHLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBR2YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUdkLFdBQUssR0FBRyxDQUFDLENBQUM7UUFHVixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR1IsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUdaLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBMkJyQixDQUFDO0lBekJHLCtCQUFNLEdBQU47UUFBQSxpQkF3QkM7UUF2QkcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUM5RSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQztZQUUxQyxpRUFBaUU7WUFDakUsb0VBQW9FO1lBQ3BFLGFBQWE7WUFDYixJQUFJLElBQWMsQ0FBQztZQUNuQixJQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2YsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRyxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBQyxDQUFDLENBQUE7YUFDL0Q7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNoQjtZQUVELElBQUcsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFDO1lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWpDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5CLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0w7SUFHZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNUO0lBR1Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDWDtJQUdSO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ1Q7SUFHWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3FEQUNKO0lBakJBLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E0Q2xDO0lBQUQscUJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1QzJDLDhCQUFvQixHQTRDL0Q7a0JBNUNvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXlPcHBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi91dGlscy9QbGF5T3BwQmFzZUNvbXBvbmVudFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuQW5pbV9XYXZlIGV4dGVuZHMgUGxheU9wcEJhc2VDb21wb25lbnR7XG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHN0YXJ0QWxwaGEgPSAxO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIGdvYWxBbGhwYSA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZGVsYXkgPSAwO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIGR1ciA9IDE7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICByZXBlYXRlID0gMDtcblxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzUmV2ZXJzZSA9IHRydWU7XG5cbiAgICBFeGN1dGUoKXtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGhpcy5kdXIsIHtvcGFjaXR5OiB0aGlzLmdvYWxBbGhwYSAqIDI1NX0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTUgKiB0aGlzLnN0YXJ0QWxwaGE7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGV0IGl0ZW0gPSB0d2Vlbi50byh0aGlzLmR1ciwge29wYWNpdHk6IHRoaXMuZ29hbEFsaHBhICogMjU1fSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAudG8odGhpcy5kdXIsIHtvcGFjaXR5IDogdGhpcy5zdGFydEFscGhhICogMjU1fSk7XG4gICAgICAgICAgICAvL+mcgOimgXJldmVyc2XkuIDpgY1cbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ud2VlbjtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNSZXZlcnNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHR3ZWVuLnRvKHRoaXMuZHVyLCB7b3BhY2l0eSA6IHRoaXMuc3RhcnRBbHBoYSAqIDI1NX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmKHRoaXMucmVwZWF0ZSA8IDApe1xuICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0ZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdHdlZW4ucmVwZWF0KHRoaXMucmVwZWF0ZSwgaXRlbSk7XG4gICAgICAgIFxuICAgICAgICAgICAgdHdlZW4uc3RhcnQoKTtcbiAgICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgICAgIFxuICAgIH1cbn0iXX0=