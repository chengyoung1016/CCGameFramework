
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '697a8xf5v1Hm4zBfIqLtZaz', 'UIFrame');
// script/framework/ui/UIFrame.ts

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
var UIModule_1 = require("./UIModule");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PREFAB_UI_DIR = "prefab/";
var UIFrame = /** @class */ (function (_super) {
    __extends(UIFrame, _super);
    function UIFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 所在pannel的索引，从0开始，如果超出UIRoot的pannel范围，则用0号索引
        _this.PannelIndex = 0;
        _this.UITemplateName = "";
        _this.UIName = "";
        return _this;
    }
    /**
     * 获取prefab路径，相对于resources目录
     */
    UIFrame.getUrl = function () {
        return PREFAB_UI_DIR + this.prefabUrl;
    };
    /**
     * 获取类名，用于给UI命名
     */
    UIFrame.getName = function () {
        return this.className;
    };
    /**
     * 初始化，会在加载完成后调用
     * 只会调用一次
     */
    UIFrame.prototype.OnInit = function () {
        // TKLog.LogInfo("UIFrame OnInit");
    };
    /**
     * 在实际打开之前先执行
     * @param doOpen 在打开之前先执行一些不可告人的事情
     * @param openArgs 参数
     */
    UIFrame.prototype.BeforeOpen = function (doOpen) {
        var openArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            openArgs[_i - 1] = arguments[_i];
        }
        // TKLog.LogInfo("UIFrame BeforeOpen");
        if (doOpen != null) {
            doOpen();
        }
    };
    /**
     * 在打开窗口时显示
     * @param args 参数
     */
    UIFrame.prototype.OnOpen = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    /**
     * 在关闭窗口时执行
     */
    UIFrame.prototype.OnClose = function () {
        TKLog_1.default.LogInfo("UIFrame OnClose");
    };
    UIFrame.prototype.OpenWindow = function (uiClass) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        UIModule_1.default.getInstance().OpenWindow(uiClass, args);
    };
    UIFrame.prototype.CloseWindow = function (uiClass) {
        //UIModule.getInstance().CloseWindow(uiName.length == 0 ? this.UIName : uiName);
        UIModule_1.default.getInstance().CloseWindow(uiClass);
    };
    __decorate([
        property(cc.Integer)
    ], UIFrame.prototype, "PannelIndex", void 0);
    UIFrame = __decorate([
        ccclass
    ], UIFrame);
    return UIFrame;
}(cc.Component));
exports.default = UIFrame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3VpL1VJRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBQ2pDLHVDQUFrQztBQVE1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUE7QUFHL0I7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFvRUM7UUFuRUcsOENBQThDO1FBRTlDLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLG9CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLFlBQU0sR0FBWSxFQUFFLENBQUM7O0lBOER6QixDQUFDO0lBekRHOztPQUVHO0lBQ1csY0FBTSxHQUFwQjtRQUNJLE9BQU8sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ1csZUFBTyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQU0sR0FBTjtRQUNJLG1DQUFtQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRCQUFVLEdBQVYsVUFBVyxNQUFrQjtRQUFFLGtCQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIsaUNBQWlCOztRQUM1Qyx1Q0FBdUM7UUFDdkMsSUFBRyxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ2QsTUFBTSxFQUFFLENBQUM7U0FDWjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBTSxHQUFOO1FBQU8sY0FBYTthQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7WUFBYix5QkFBYTs7SUFFcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUJBQU8sR0FBUDtRQUNJLGVBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsNEJBQVUsR0FBcEIsVUFBd0MsT0FBb0I7UUFBRSxjQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFiLDZCQUFhOztRQUN2RSxrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVTLDZCQUFXLEdBQXJCLFVBQXlDLE9BQW9CO1FBQ3pELGdGQUFnRjtRQUNoRixrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0RBQ0w7SUFIQyxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBb0UzQjtJQUFELGNBQUM7Q0FwRUQsQUFvRUMsQ0FwRW9DLEVBQUUsQ0FBQyxTQUFTLEdBb0VoRDtrQkFwRW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVEtMb2cgZnJvbSBcIi4uL2xvZy9US0xvZ1wiO1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gXCIuL1VJTW9kdWxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDbGFzczxUIGV4dGVuZHMgVUlGcmFtZT4ge1xuICAgIG5ldygpOiBUO1xuICAgIGdldFVybCgpOiBzdHJpbmc7XG4gICAgZ2V0TmFtZSgpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgUFJFRkFCX1VJX0RJUiA9IFwicHJlZmFiL1wiXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUZyYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyDmiYDlnKhwYW5uZWznmoTntKLlvJXvvIzku44w5byA5aeL77yM5aaC5p6c6LaF5Ye6VUlSb29055qEcGFubmVs6IyD5Zu077yM5YiZ55SoMOWPt+e0ouW8lVxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIFBhbm5lbEluZGV4ID0gMDtcblxuICAgIFVJVGVtcGxhdGVOYW1lIDogc3RyaW5nID0gXCJcIjtcbiAgICBVSU5hbWUgOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBwcmVmYWJVcmw6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNsYXNzTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICog6I635Y+WcHJlZmFi6Lev5b6E77yM55u45a+55LqOcmVzb3VyY2Vz55uu5b2VXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFBSRUZBQl9VSV9ESVIgKyB0aGlzLnByZWZhYlVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnsbvlkI3vvIznlKjkuo7nu5lVSeWRveWQjVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW77yM5Lya5Zyo5Yqg6L295a6M5oiQ5ZCO6LCD55SoXG4gICAgICog5Y+q5Lya6LCD55So5LiA5qyhXG4gICAgICovXG4gICAgT25Jbml0KCl7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCJVSUZyYW1lIE9uSW5pdFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlnKjlrp7pmYXmiZPlvIDkuYvliY3lhYjmiafooYxcbiAgICAgKiBAcGFyYW0gZG9PcGVuIOWcqOaJk+W8gOS5i+WJjeWFiOaJp+ihjOS4gOS6m+S4jeWPr+WRiuS6uueahOS6i+aDhVxuICAgICAqIEBwYXJhbSBvcGVuQXJncyDlj4LmlbBcbiAgICAgKi9cbiAgICBCZWZvcmVPcGVuKGRvT3BlbiA/OiBGdW5jdGlvbiwgLi4ub3BlbkFyZ3MgOiBhbnkpe1xuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiVUlGcmFtZSBCZWZvcmVPcGVuXCIpO1xuICAgICAgICBpZihkb09wZW4gIT0gbnVsbCl7XG4gICAgICAgICAgICBkb09wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWcqOaJk+W8gOeql+WPo+aXtuaYvuekulxuICAgICAqIEBwYXJhbSBhcmdzIOWPguaVsFxuICAgICAqL1xuICAgIE9uT3BlbiguLi5hcmdzIDogYW55KXtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWcqOWFs+mXreeql+WPo+aXtuaJp+ihjFxuICAgICAqL1xuICAgIE9uQ2xvc2UoKXtcbiAgICAgICAgVEtMb2cuTG9nSW5mbyhcIlVJRnJhbWUgT25DbG9zZVwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgT3BlbldpbmRvdzxUIGV4dGVuZHMgVUlGcmFtZT4odWlDbGFzcyA6IFVJQ2xhc3M8VD4sIC4uLmFyZ3MgOiBhbnkpe1xuICAgICAgICBVSU1vZHVsZS5nZXRJbnN0YW5jZSgpLk9wZW5XaW5kb3codWlDbGFzcywgYXJncyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIENsb3NlV2luZG93PFQgZXh0ZW5kcyBVSUZyYW1lPih1aUNsYXNzIDogVUlDbGFzczxUPil7XG4gICAgICAgIC8vVUlNb2R1bGUuZ2V0SW5zdGFuY2UoKS5DbG9zZVdpbmRvdyh1aU5hbWUubGVuZ3RoID09IDAgPyB0aGlzLlVJTmFtZSA6IHVpTmFtZSk7XG4gICAgICAgIFVJTW9kdWxlLmdldEluc3RhbmNlKCkuQ2xvc2VXaW5kb3codWlDbGFzcyk7XG4gICAgfVxufVxuIl19