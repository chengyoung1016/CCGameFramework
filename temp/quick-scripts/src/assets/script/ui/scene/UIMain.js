"use strict";
cc._RF.push(module, 'f9250BWJiNExoMB9OZSQ5R+', 'UIMain');
// script/ui/scene/UIMain.ts

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
var Auto_Main_1 = require("../../autoui/scene/Auto_Main");
var UIFrame_1 = require("../../framework/ui/UIFrame");
var UIModule_1 = require("../../framework/ui/UIModule");
var UILoadingController_1 = require("../common/UILoadingController");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
var UIMain = /** @class */ (function (_super) {
    __extends(UIMain, _super);
    function UIMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        return _this;
    }
    UIMain.prototype.onLoad = function () {
        this.ui = this.node.addComponent(Auto_Main_1.default);
    };
    UIMain.prototype.start = function () {
        UIModule_1.default.getInstance().OpenWindow(UILoadingController_1.default);
        this.scheduleOnce(function () {
            UIModule_1.default.getInstance().DestroyWindow(UILoadingController_1.default);
            // UIModule.getInstance().DestroyAllWindow();
        }, 4);
    };
    UIMain.prototype.onEnable = function () {
    };
    UIMain.prototype.update = function () {
    };
    UIMain.prototype.onDisable = function () {
    };
    UIMain.prototype.onDestroy = function () {
    };
    UIMain.prefabUrl = "";
    UIMain.className = "UIMain";
    UIMain = __decorate([
        ccclass,
        menu("UI/scene/UIMain")
    ], UIMain);
    return UIMain;
}(UIFrame_1.default));
exports.default = UIMain;

cc._RF.pop();