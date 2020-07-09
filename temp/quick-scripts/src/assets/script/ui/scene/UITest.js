"use strict";
cc._RF.push(module, '175975p5XNEvJxWU6aPXMmL', 'UITest');
// script/ui/scene/UITest.ts

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
var Auto_Test_1 = require("../../autoui/scene/Auto_Test");
var UIFrame_1 = require("../../framework/ui/UIFrame");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
var UITest = /** @class */ (function (_super) {
    __extends(UITest, _super);
    function UITest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        return _this;
    }
    UITest.prototype.onLoad = function () {
        this.ui = this.node.addComponent(Auto_Test_1.default);
    };
    UITest.prototype.start = function () {
    };
    UITest.prototype.onEnable = function () {
    };
    UITest.prototype.update = function () {
    };
    UITest.prototype.onDisable = function () {
    };
    UITest.prototype.onDestroy = function () {
    };
    UITest.prefabUrl = "";
    UITest.className = "UITest";
    UITest = __decorate([
        ccclass,
        menu("UI/scene/UITest")
    ], UITest);
    return UITest;
}(UIFrame_1.default));
exports.default = UITest;

cc._RF.pop();