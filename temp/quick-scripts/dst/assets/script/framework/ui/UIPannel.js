
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIPannel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39b07kQYwlMzavfn7ysunDo', 'UIPannel');
// script/framework/ui/UIPannel.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var UIPannel = /** @class */ (function (_super) {
    __extends(UIPannel, _super);
    function UIPannel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._canvas = null;
        return _this;
    }
    UIPannel.prototype.getCanvas = function () {
        if (this._canvas == null) {
            this._canvas = this.getComponent(cc.Canvas);
        }
        return this._canvas;
    };
    __decorate([
        property(cc.Canvas)
    ], UIPannel.prototype, "_canvas", void 0);
    UIPannel = __decorate([
        ccclass
    ], UIPannel);
    return UIPannel;
}(cc.Component));
exports.default = UIPannel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3VpL1VJUGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBVUM7UUFSRyxhQUFPLEdBQWUsSUFBSSxDQUFDOztJQVEvQixDQUFDO0lBTkcsNEJBQVMsR0FBVDtRQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTztJQUZWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FVNUI7SUFBRCxlQUFDO0NBVkQsQUFVQyxDQVZxQyxFQUFFLENBQUMsU0FBUyxHQVVqRDtrQkFWb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQYW5uZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5DYW52YXMpXG4gICAgX2NhbnZhcyA6IGNjLkNhbnZhcyA9IG51bGw7XG5cbiAgICBnZXRDYW52YXMoKSA6IGNjLkNhbnZhc3tcbiAgICAgICAgaWYodGhpcy5fY2FudmFzID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgIH1cbn1cbiJdfQ==