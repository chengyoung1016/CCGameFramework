
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7faa0omo39ICIqtKnOgD0Sp', 'UIRoot');
// script/framework/ui/UIRoot.ts

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
var TKLog_1 = require("../log/TKLog");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIRoot = /** @class */ (function (_super) {
    __extends(UIRoot, _super);
    function UIRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pannelRoot = null;
        _this.uiCam = null;
        _this._lstPannel = [];
        return _this;
    }
    UIRoot_1 = UIRoot;
    UIRoot.getInstance = function () {
        return this._instance;
    };
    UIRoot.prototype.onLoad = function () {
        // TKLog.LogInfo("UIRoot.onLoad");
        if (UIRoot_1._instance == null) {
            UIRoot_1._instance = this;
        }
        else {
            // TKLog.LogWarn("有多余的UIRoot,删除这个");
            this.destroy();
            return;
        }
        this._lstPannel = [];
        var pannels = this.pannelRoot.getComponentsInChildren("UIPannel");
        for (var index = 0; index < pannels.length; index++) {
            var element = pannels[index];
            this._lstPannel.push(element);
        }
        this._lstPannel.sort(function (p1, p2) {
            var index1 = p1.node.getSiblingIndex();
            var index2 = p2.node.getSiblingIndex();
            return (index1 == index2) ? 0 : (index1 > index2 ? 1 : -1);
        });
        TKLog_1.default.LogInfo("UIRoot.onLoad pannel数量为:" + this._lstPannel.length);
        //把该节点设置为常驻节点
        // cc.game.addPersistRootNode(this.node);
    };
    UIRoot.prototype.start = function () {
        // this._lstPannel.forEach(pannel=>{
        //     TKLog.LogInfo("pannel:" + pannel.name);
        // })
    };
    UIRoot.prototype.onDestroy = function () {
        UIRoot_1._instance = null;
    };
    /**
     * 获取指定索引的Pannel
     * @param index 索引
     */
    UIRoot.prototype.GetPannel = function (index) {
        if (index < 0 || index >= this._lstPannel.length) {
            return null;
        }
        return this._lstPannel[index];
    };
    var UIRoot_1;
    UIRoot._instance = null;
    __decorate([
        property(cc.Node)
    ], UIRoot.prototype, "pannelRoot", void 0);
    __decorate([
        property(cc.Camera)
    ], UIRoot.prototype, "uiCam", void 0);
    UIRoot = UIRoot_1 = __decorate([
        ccclass
    ], UIRoot);
    return UIRoot;
}(cc.Component));
exports.default = UIRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3VpL1VJUm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBaUM7QUFFakMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFxRUM7UUFuRUcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsV0FBSyxHQUFlLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFxQixFQUFFLENBQUM7O0lBOER0QyxDQUFDO2VBckVvQixNQUFNO0lBV2hCLGtCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBRUksa0NBQWtDO1FBRWxDLElBQUcsUUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUM7WUFDeEIsUUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDM0I7YUFDRztZQUNBLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFDLEVBQUU7WUFDdkIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7UUFDaEUsQ0FBQyxDQUFDLENBQUE7UUFFRixlQUFLLENBQUMsT0FBTyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsYUFBYTtRQUNiLHlDQUF5QztJQUM3QyxDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLG9DQUFvQztRQUNwQyw4Q0FBOEM7UUFDOUMsS0FBSztJQUNULENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0ksUUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBCQUFTLEdBQVQsVUFBVSxLQUFjO1FBQ3BCLElBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQTFETSxnQkFBUyxHQUFZLElBQUksQ0FBQztJQVBqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0s7SUFMUixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcUUxQjtJQUFELGFBQUM7Q0FyRUQsQUFxRUMsQ0FyRW1DLEVBQUUsQ0FBQyxTQUFTLEdBcUUvQztrQkFyRW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQYW5uZWwgZnJvbSBcIi4vVUlQYW5uZWxcIjtcbmltcG9ydCBUS0xvZyBmcm9tIFwiLi4vbG9nL1RLTG9nXCI7XG5cbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlSb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYW5uZWxSb290IDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIHVpQ2FtIDogY2MuQ2FtZXJhID0gbnVsbDtcblxuICAgIF9sc3RQYW5uZWwgOiBBcnJheTxVSVBhbm5lbD4gPSBbXTtcblxuICAgIHN0YXRpYyBfaW5zdGFuY2UgOiBVSVJvb3QgPSBudWxsO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkgOiBVSVJvb3R7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcblxuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiVUlSb290Lm9uTG9hZFwiKTtcblxuICAgICAgICBpZihVSVJvb3QuX2luc3RhbmNlID09IG51bGwpe1xuICAgICAgICAgICAgVUlSb290Ll9pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIFRLTG9nLkxvZ1dhcm4oXCLmnInlpJrkvZnnmoRVSVJvb3Qs5Yig6Zmk6L+Z5LiqXCIpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sc3RQYW5uZWwgPSBbXTtcblxuICAgICAgICBsZXQgcGFubmVscyA9IHRoaXMucGFubmVsUm9vdC5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcIlVJUGFubmVsXCIpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFubmVscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYW5uZWxzW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuX2xzdFBhbm5lbC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbHN0UGFubmVsLnNvcnQoKHAxLHAyKT0+e1xuICAgICAgICAgICAgbGV0IGluZGV4MSA9IHAxLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XG4gICAgICAgICAgICBsZXQgaW5kZXgyID0gcDIubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgICAgICAgIHJldHVybiAoaW5kZXgxID09IGluZGV4MikgPyAwIDogKGluZGV4MSA+IGluZGV4MiA/IDEgOiAtMSkgO1xuICAgICAgICB9KVxuXG4gICAgICAgIFRLTG9nLkxvZ0luZm8oXCJVSVJvb3Qub25Mb2FkIHBhbm5lbOaVsOmHj+S4ujpcIiArIHRoaXMuX2xzdFBhbm5lbC5sZW5ndGgpO1xuXG4gICAgICAgIC8v5oqK6K+l6IqC54K56K6+572u5Li65bi46am76IqC54K5XG4gICAgICAgIC8vIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKXtcbiAgICAgICAgLy8gdGhpcy5fbHN0UGFubmVsLmZvckVhY2gocGFubmVsPT57XG4gICAgICAgIC8vICAgICBUS0xvZy5Mb2dJbmZvKFwicGFubmVsOlwiICsgcGFubmVsLm5hbWUpO1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgVUlSb290Ll9pbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oyH5a6a57Si5byV55qEUGFubmVsXG4gICAgICogQHBhcmFtIGluZGV4IOe0ouW8lVxuICAgICAqL1xuICAgIEdldFBhbm5lbChpbmRleCA6IG51bWJlcikgOiBVSVBhbm5lbHtcbiAgICAgICAgaWYoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX2xzdFBhbm5lbC5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xzdFBhbm5lbFtpbmRleF07XG4gICAgfVxuXG59XG4iXX0=