"use strict";
cc._RF.push(module, 'd0da3vqMZlJ4ZyZ5oz5cYMP', 'MaskTouchUtil');
// script/framework/utils/MaskTouchUtil.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskTouchUtil = /** @class */ (function (_super) {
    __extends(MaskTouchUtil, _super);
    function MaskTouchUtil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TargetNodes = [];
        return _this;
    }
    MaskTouchUtil.prototype.onLoad = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = 'MaskTouchUtil';
        clickEventHandler.handler = "onBlankClick";
        var button = this.node.addComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    };
    MaskTouchUtil.prototype.onBlankClick = function () {
        this.TargetNodes.forEach(function (node) {
            node.active = false;
        });
    };
    __decorate([
        property([cc.Node])
    ], MaskTouchUtil.prototype, "TargetNodes", void 0);
    MaskTouchUtil = __decorate([
        ccclass
    ], MaskTouchUtil);
    return MaskTouchUtil;
}(cc.Component));
exports.default = MaskTouchUtil;

cc._RF.pop();