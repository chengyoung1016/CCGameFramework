"use strict";
cc._RF.push(module, '078b7R6e6JJToZ2saM9EI2D', 'Auto_Main');
// script/autoui/scene/Auto_Main.ts

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
var ccclass = cc._decorator.ccclass;
var Auto_Main = /** @class */ (function (_super) {
    __extends(Auto_Main, _super);
    function Auto_Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auto_Main.prototype.onLoad = function () {
        var parent = this.node.getParent();
        this.Canvas = parent.getChildByName("Canvas");
        this.Background = this.Canvas.getChildByName("Background");
    };
    Auto_Main.URL = "db://assets/scene/Main.fire";
    Auto_Main = __decorate([
        ccclass
    ], Auto_Main);
    return Auto_Main;
}(cc.Component));
exports.default = Auto_Main;

cc._RF.pop();