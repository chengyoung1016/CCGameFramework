
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_Scale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3e53o+IAdBC5rnPzCcXX8l', 'TweenAnim_Scale');
// script/framework/tween/TweenAnim_Scale.ts

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
var TKLog_1 = require("../log/TKLog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TweenAnim_Scale = /** @class */ (function (_super) {
    __extends(TweenAnim_Scale, _super);
    function TweenAnim_Scale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initFrom = false;
        _this.from = -1;
        _this.target = 2;
        _this.dur = 1;
        _this.delay = 1;
        _this.repeate = 1;
        _this.yoyo = false;
        _this.toEase = "sineIn";
        _this.reverseEase = "sineOut";
        _this.tween = null;
        _this.isPlaying = false;
        return _this;
    }
    TweenAnim_Scale.prototype.Excute = function () {
        var _this = this;
        if (this.isPlaying) {
            TKLog_1.default.LogInfo("正在播放中tweenScale中，不再接受执行播放");
            return;
        }
        if (this.tween != null) {
            this.tween.stop();
        }
        if (this.initFrom) {
            this.node.scale = this.from;
        }
        this.tween = cc.tween(this.node);
        var srcScale = this.node.scale;
        var scaleTween = this.tween.to(this.dur, { scale: this.target }, { easing: this.toEase });
        if (this.yoyo) {
            scaleTween.to(this.dur, { scale: srcScale }, { easing: this.reverseEase });
        }
        else if (this.repeate > 0) {
            scaleTween.call(function () {
                _this.node.scale = srcScale;
            });
        }
        if (this.repeate < 0) {
            this.repeate = Number.MAX_SAFE_INTEGER;
        }
        this.tween.repeat(this.repeate, scaleTween).call(function () {
            _this.isPlaying = false;
        });
        this.isPlaying = true;
        this.tween.start();
    };
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Scale.prototype, "initFrom", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "from", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "target", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "dur", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "delay", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Scale.prototype, "repeate", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Scale.prototype, "yoyo", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_Scale.prototype, "toEase", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_Scale.prototype, "reverseEase", void 0);
    TweenAnim_Scale = __decorate([
        ccclass
    ], TweenAnim_Scale);
    return TweenAnim_Scale;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Scale;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9TY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBaUU7QUFDakUsc0NBQWlDO0FBRTNCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFvQjtJQUFqRTtRQUFBLHFFQTZEQztRQTNERyxjQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFVBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUdWLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFHWCxTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR1IsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUdWLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFHWixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsWUFBTSxHQUFHLFFBQVEsQ0FBQTtRQUVqQixpQkFBVyxHQUFHLFNBQVMsQ0FBQTtRQUVmLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFhLEtBQUssQ0FBQzs7SUFpQ3hDLENBQUM7SUEvQkcsZ0NBQU0sR0FBTjtRQUFBLGlCQThCQztRQTdCRyxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDZCxlQUFLLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDMUMsT0FBTztTQUNWO1FBQ0QsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDeEYsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ1QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFHLFFBQVEsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFHLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQzVFO2FBQUssSUFBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBQztZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNaLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBQztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBMUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cURBQ0o7SUFFakI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVDtJQUdWO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1I7SUFHWDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNYO0lBR1I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVDtJQUdWO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0RBQ1Q7SUFHWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNSO0lBR2I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSDtJQUVqQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNHO0lBeEJOLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E2RG5DO0lBQUQsc0JBQUM7Q0E3REQsQUE2REMsQ0E3RDRDLDhCQUFvQixHQTZEaEU7a0JBN0RvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXlPcHBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi91dGlscy9QbGF5T3BwQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IFRLTG9nIGZyb20gXCIuLi9sb2cvVEtMb2dcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbkFuaW1fU2NhbGUgZXh0ZW5kcyBQbGF5T3BwQmFzZUNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaW5pdEZyb20gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZnJvbSA9IC0xO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHRhcmdldCA9IDI7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZHVyID0gMTtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBkZWxheSA9IDE7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICByZXBlYXRlID0gMTtcblxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIHlveW8gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgdG9FYXNlID0gXCJzaW5lSW5cIlxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgcmV2ZXJzZUVhc2UgPSBcInNpbmVPdXRcIlxuXG4gICAgcHJpdmF0ZSB0d2VlbiA6IGNjLlR3ZWVuID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNQbGF5aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgRXhjdXRlKCl7XG4gICAgICAgIGlmKHRoaXMuaXNQbGF5aW5nKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCLmraPlnKjmkq3mlL7kuK10d2VlblNjYWxl5Lit77yM5LiN5YaN5o6l5Y+X5omn6KGM5pKt5pS+XCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50d2VlbiAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudHdlZW4uc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5pdEZyb20pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMuZnJvbTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR3ZWVuID0gY2MudHdlZW4odGhpcy5ub2RlKTtcbiAgICAgICAgbGV0IHNyY1NjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xuICAgICAgICBsZXQgc2NhbGVUd2VlbiA9IHRoaXMudHdlZW4udG8odGhpcy5kdXIsIHtzY2FsZSA6IHRoaXMudGFyZ2V0fSAsIHtlYXNpbmc6IHRoaXMudG9FYXNlfSk7XG4gICAgICAgIGlmKHRoaXMueW95byl7XG4gICAgICAgICAgICBzY2FsZVR3ZWVuLnRvKHRoaXMuZHVyLCB7c2NhbGUgOiBzcmNTY2FsZX0sIHtlYXNpbmcgOiB0aGlzLnJldmVyc2VFYXNlfSk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucmVwZWF0ZSA+IDApe1xuICAgICAgICAgICAgc2NhbGVUd2Vlbi5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gc3JjU2NhbGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmVwZWF0ZSA8IDApe1xuICAgICAgICAgICAgdGhpcy5yZXBlYXRlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50d2Vlbi5yZXBlYXQodGhpcy5yZXBlYXRlLCBzY2FsZVR3ZWVuKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudHdlZW4uc3RhcnQoKTtcbiAgICB9XG59Il19