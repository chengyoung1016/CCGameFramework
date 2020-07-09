
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/MaskTouchUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL01hc2tUb3VjaFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFtQkM7UUFqQkcsaUJBQVcsR0FBYyxFQUFFLENBQUM7O0lBaUJoQyxDQUFDO0lBZkcsOEJBQU0sR0FBTjtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUUzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBYTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFoQkQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7c0RBQ1E7SUFGWCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBbUJqQztJQUFELG9CQUFDO0NBbkJELEFBbUJDLENBbkIwQyxFQUFFLENBQUMsU0FBUyxHQW1CdEQ7a0JBbkJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tUb3VjaFV0aWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgVGFyZ2V0Tm9kZXM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9ICdNYXNrVG91Y2hVdGlsJztcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25CbGFua0NsaWNrXCI7XG5cbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uQmxhbmtDbGljaygpIHtcbiAgICAgICAgdGhpcy5UYXJnZXROb2Rlcy5mb3JFYWNoKChub2RlOiBjYy5Ob2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=