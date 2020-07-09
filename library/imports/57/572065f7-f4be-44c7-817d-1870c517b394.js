"use strict";
cc._RF.push(module, '57206X39L5Ex4F9GHDFF7OU', 'PlayOppBaseComponent');
// script/framework/utils/PlayOppBaseComponent.ts

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
exports.PlayOpp = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayOpp;
(function (PlayOpp) {
    PlayOpp[PlayOpp["onLoad"] = 0] = "onLoad";
    PlayOpp[PlayOpp["onEnable"] = 1] = "onEnable";
    PlayOpp[PlayOpp["onStart"] = 2] = "onStart";
    PlayOpp[PlayOpp["Update"] = 3] = "Update";
    PlayOpp[PlayOpp["Manual"] = 4] = "Manual";
})(PlayOpp = exports.PlayOpp || (exports.PlayOpp = {}));
var PlayOppBaseComponent = /** @class */ (function (_super) {
    __extends(PlayOppBaseComponent, _super);
    function PlayOppBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.opp = PlayOpp.Manual;
        return _this;
    }
    PlayOppBaseComponent.prototype.onLoad = function () {
        if (this.opp == PlayOpp.onLoad) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.onEnable = function () {
        if (this.opp == PlayOpp.onEnable) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.start = function () {
        if (this.opp == PlayOpp.onStart) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.update = function (dt) {
        if (this.opp == PlayOpp.Update) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.Excute = function () {
        // override todo
    };
    __decorate([
        property({ type: cc.Enum(PlayOpp) })
    ], PlayOppBaseComponent.prototype, "opp", void 0);
    PlayOppBaseComponent = __decorate([
        ccclass
    ], PlayOppBaseComponent);
    return PlayOppBaseComponent;
}(cc.Component));
exports.default = PlayOppBaseComponent;

cc._RF.pop();