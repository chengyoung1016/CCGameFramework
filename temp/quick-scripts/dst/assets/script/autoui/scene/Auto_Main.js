
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/autoui/scene/Auto_Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYXV0b3VpL3NjZW5lL0F1dG9fTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFZQSxDQUFDO0lBTkcsMEJBQU0sR0FBTjtRQUNGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFekQsQ0FBQztJQVBVLGFBQUcsR0FBVSw2QkFBNkIsQ0FBQTtJQUpwQyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBWTdCO0lBQUQsZ0JBQUM7Q0FaRCxBQVlDLENBWnNDLEVBQUUsQ0FBQyxTQUFTLEdBWWxEO2tCQVpvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b19NYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblx0Q2FudmFzOiBjYy5Ob2RlO1xuXHRCYWNrZ3JvdW5kOiBjYy5Ob2RlO1xuXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwiZGI6Ly9hc3NldHMvc2NlbmUvTWFpbi5maXJlXCJcblxuICAgIG9uTG9hZCAoKSB7XG5cdFx0bGV0IHBhcmVudCA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKTtcblx0XHR0aGlzLkNhbnZhcyA9IHBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcblx0XHR0aGlzLkJhY2tncm91bmQgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIik7XG5cbiAgICB9XG59XG4iXX0=