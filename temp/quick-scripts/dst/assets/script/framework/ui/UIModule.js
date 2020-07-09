
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '406d22QadhPbakAeL90JzLj', 'UIModule');
// script/framework/ui/UIModule.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("../utils/Singleton");
var TKLog_1 = require("../log/TKLog");
var UIBridgeNormal_1 = require("./UIBridgeNormal");
var UIModule = /** @class */ (function (_super) {
    __extends(UIModule, _super);
    function UIModule() {
        var _this = _super.call(this) || this;
        _this.UIWindows = {};
        _this._UIBridge = null;
        // TKLog.LogInfo("UIModule初始化");
        _this._UIBridge = new UIBridgeNormal_1.default();
        _this._UIBridge.InitBridge();
        return _this;
    }
    /**
     * 打开窗口
     * @param uiTemplateName 窗口名称，该名称也是prefab的名称
     * @param args 要传入的参数
     */
    UIModule.prototype.OpenWindow = function (uiClass) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // TKLog.LogInfo("UIModule.OpenWindow("+uiTemplateName+")");
        var uiTemplateName = uiClass.getUrl();
        var template = this.UIWindows[uiTemplateName];
        if (template) {
            if (template.isValid == false) {
                //TKLog.LogInfo("UIModule.OpenWindow 虽然已经存在，但无法使用，需要重新加载" + uiTemplateName);
                delete this.UIWindows[uiTemplateName];
            }
            else {
                //TKLog.LogInfo("UIModule.OpenWindow 已经存在，直接打开" + uiTemplateName);
                this.OnOpen.apply(this, __spreadArrays([this.UIWindows[uiTemplateName]], args));
                return Promise.resolve(this.UIWindows[uiTemplateName]);
            }
        }
        return this.LoadWindow.apply(this, __spreadArrays([uiClass, true], args));
    };
    /**
     * 关闭窗口
     * @param uiClass 窗口类名称
     */
    UIModule.prototype.CloseWindow = function (uiClass) {
        var name = uiClass.getUrl();
        if (this.UIWindows[name] == null) {
            // TKLog.LogWarn("CloseWindow 找不到窗口" + name);
            return;
        }
        var frame = this.UIWindows[name];
        frame.OnClose();
        if (cc.isValid(frame.node)) {
            frame.node.active = false;
        }
        if (this.OnCloseEvent != null) {
            this.OnCloseEvent(frame);
        }
    };
    /**
     * 获取窗口对象
     * 如果该窗口还没有加载过，则会返回null
     * @param name 窗口名称
     */
    UIModule.prototype.GetFrame = function (name) {
        if (this.UIWindows[name] == null) {
            return null;
        }
        return this.UIWindows[name];
    };
    /**
     * 判断该窗口是否已经加载过
     * @param name 窗口名称
     */
    UIModule.prototype.IsLoad = function (name) {
        if (this.UIWindows[name] == null) {
            return false;
        }
        return true;
    };
    /**
     * 检测该窗口当前是否正在显示
     * @param name 窗口名称
     */
    UIModule.prototype.IsOpen = function (name) {
        if (this.UIWindows[name] == null) {
            return false;
        }
        return this.UIWindows[name].node.active;
    };
    /**
     * 销毁窗口
     * 即destroy节点
     * @param uiClass 窗口类名称
     * @param release 是否释放该窗口的资源
     */
    UIModule.prototype.DestroyWindow = function (uiClass, release) {
        if (release === void 0) { release = true; }
        // TKLog.LogInfo("UIModule.DestroyWindow(" + uiTemplateName+")");
        var uiTemplateName = uiClass.getUrl();
        if (this.UIWindows[uiTemplateName] == null) {
            TKLog_1.default.LogWarn("UIModule.DestroyWindow 找不到要销毁的窗口" + uiTemplateName);
            var uiroot = cc.find("Canvas").getChildByName("UIRoot");
            if (uiroot && uiroot.children.length > 0) {
                uiroot.children.forEach(function (child) {
                    var delui = child.getChildByName(uiTemplateName);
                    if (delui && cc.isValid(delui)) {
                        TKLog_1.default.LogInfo("uiwindows里找不到当前节点，从场景节点里遍历该节点并销毁");
                        delui.destroy();
                    }
                });
            }
            return;
        }
        var frame = this.UIWindows[uiTemplateName];
        if (cc.isValid(frame.node)) {
            frame.node.destroy();
        }
        if (release) {
            TKLog_1.default.LogInfo("TODO 释放窗口" + uiTemplateName + "资源");
        }
        delete this.UIWindows[uiTemplateName];
        // this.UIWindows[uiTemplateName] = null;
    };
    /**
     * 销毁所有已加载的窗口
     */
    UIModule.prototype.DestroyAllWindow = function () {
        // TKLog.LogInfo("UIModule.DestroyAllWindow()")
        // let loadList = [];
        // console.log(this.UIWindows);
        for (var item in this.UIWindows) {
            // console.log(item);
            if (this.IsLoad(item)) {
                // loadList.push(this.UIWindows[item]);
                var frame = this.UIWindows[item];
                frame.node.destroy();
                delete this.UIWindows[item];
            }
        }
        // loadList.forEach((name)=>{
        //     // this.DestroyWindow(name, true);
        //     name.destroy();
        // })
    };
    /**
     * 关闭所有窗口
     */
    UIModule.prototype.CloseAllWindow = function () {
        // TKLog.LogInfo("UIModule.CloseAllWindow()")
        // let loadList = [];
        for (var item in this.UIWindows) {
            if (this.IsOpen(item)) {
                var frame = this.UIWindows[item];
                frame.node.active = false;
                // delete this.UIWindows[item];
                // loadList.push(this.UIWindows[item]);
            }
        }
        // loadList.forEach((name)=>{
        //     this.CloseWindow(name);
        // })
    };
    UIModule.prototype.LoadWindow = function (uiClass, openWhenFinish) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, Promise, function () {
            var uiTemplateName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uiTemplateName = uiClass.getUrl();
                        if (this.UIWindows[uiTemplateName] != null) {
                            TKLog_1.default.LogWarn("UIModule.LoadWindow 多次加载窗口:" + uiTemplateName);
                        }
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._UIBridge.LoadUIAsset(uiTemplateName)
                                    .then(function (prefab) {
                                    if (prefab == null) {
                                        resolve(null);
                                    }
                                    else {
                                        var inst = cc.instantiate(prefab);
                                        var frame = _this._UIBridge.CreateUIController(inst, uiClass.getName());
                                        frame.UIName = uiTemplateName;
                                        _this._UIBridge.UIObjectFilter(frame, inst);
                                        _this.UIWindows[uiTemplateName] = frame;
                                        _this.InitWindow.apply(_this, __spreadArrays([frame, openWhenFinish], args));
                                        resolve(frame);
                                    }
                                }).catch(function (e) {
                                    TKLog_1.default.LogErr("加载窗口" + uiTemplateName + "失败:" + e);
                                    resolve(null);
                                });
                            }).catch(function (e) {
                                TKLog_1.default.LogErr("UIModule.LoadWindow(" + uiTemplateName + ") Err:" + e);
                                throw new Error("UIModule.LoadWindow(" + uiTemplateName + ") Err:" + e);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UIModule.prototype.InitWindow = function (frame, openWhenFinish) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        // TKLog.LogInfo("UIModule.InitWindow(" + frame + ")");
        frame.OnInit();
        if (this.OnInitEvent != null) {
            this.OnInitEvent(frame);
        }
        if (openWhenFinish) {
            this.OnOpen.apply(this, __spreadArrays([frame], args));
        }
        else {
            frame.node.active = false;
        }
    };
    UIModule.prototype.OnOpen = function (frame) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        TKLog_1.default.LogInfo("UIModule.OnOpen(" + frame.name + ")");
        if (frame == null) {
            return;
        }
        // if(frame.node.active){
        //     frame.OnClose();
        //     if(this.OnCloseEvent != null){
        //         this.OnCloseEvent(frame);
        //     }
        // }
        frame.BeforeOpen.apply(frame, __spreadArrays([function () {
                frame.node.active = true;
                frame.OnOpen.apply(frame, args);
                if (_this.OnOpenEvent != null) {
                    _this.OnOpenEvent(frame);
                }
            }], args));
    };
    return UIModule;
}(Singleton_1.default));
exports.default = UIModule;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3VpL1VJTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0Msc0NBQWlDO0FBRWpDLG1EQUE4QztBQU85QztJQUFzQyw0QkFBUztJQVMzQztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQWJELGVBQVMsR0FBK0IsRUFBRSxDQUFDO1FBTWpDLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFJbkMsZ0NBQWdDO1FBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7UUFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBVSxHQUFWLFVBQThCLE9BQW9CO1FBQUUsY0FBYTthQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7WUFBYiw2QkFBYTs7UUFDN0QsNERBQTREO1FBQzVELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTlDLElBQUcsUUFBUSxFQUFDO1lBQ1IsSUFBRyxRQUFRLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBRTtnQkFDMUIsNEVBQTRFO2dCQUM1RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0gsa0VBQWtFO2dCQUNsRSxJQUFJLENBQUMsTUFBTSxPQUFYLElBQUksa0JBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBSyxJQUFJLEdBQUU7Z0JBQ3JELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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QUE5QixpQkFvQkM7UUFwQitCLGNBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsNkJBQWE7O1FBQ3pDLGVBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFHLEtBQUssSUFBSSxJQUFJLEVBQUM7WUFDYixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLHFDQUFxQztRQUNyQyxvQ0FBb0M7UUFDcEMsUUFBUTtRQUNSLElBQUk7UUFFSixLQUFLLENBQUMsVUFBVSxPQUFoQixLQUFLLGtCQUFZO2dCQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDLE1BQU0sT0FBWixLQUFLLEVBQVcsSUFBSSxFQUFFO2dCQUV0QixJQUFHLEtBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFDO29CQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzQjtZQUNMLENBQUMsR0FBSyxJQUFJLEdBQUU7SUFDaEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQS9PQSxBQStPQyxDQS9PcUMsbUJBQVMsR0ErTzlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uXCI7XG5pbXBvcnQgVUlGcmFtZSwgeyBVSUNsYXNzIH0gZnJvbSBcIi4vVUlGcmFtZVwiO1xuaW1wb3J0IFRLTG9nIGZyb20gXCIuLi9sb2cvVEtMb2dcIjtcbmltcG9ydCBJVUlCcmlkZ2UgZnJvbSBcIi4vSVVJQnJpZGdlXCI7XG5pbXBvcnQgVUlCcmlkZ2VOb3JtYWwgZnJvbSBcIi4vVUlCcmlkZ2VOb3JtYWxcIjtcbmltcG9ydCBSZXNMb2FkTWFuYWdlciBmcm9tIFwiLi4vdXRpbHMvUmVzTG9hZE1hbmFnZXJcIjtcblxuaW50ZXJmYWNlIElGcmFtZVN0YXRlIHtcbiAgICAoZnJhbWUgOiBVSUZyYW1lKSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTW9kdWxlIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBVSVdpbmRvd3MgOiB7W3VpbmFtZTpzdHJpbmddOlVJRnJhbWV9ID0ge307XG5cbiAgICBPbkluaXRFdmVudCA6IElGcmFtZVN0YXRlO1xuICAgIE9uT3BlbkV2ZW50IDogSUZyYW1lU3RhdGU7XG4gICAgT25DbG9zZUV2ZW50IDogSUZyYW1lU3RhdGU7XG5cbiAgICBwcm90ZWN0ZWQgX1VJQnJpZGdlIDogSVVJQnJpZGdlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCJVSU1vZHVsZeWIneWni+WMllwiKTtcbiAgICAgICAgdGhpcy5fVUlCcmlkZ2UgPSBuZXcgVUlCcmlkZ2VOb3JtYWwoKTtcbiAgICAgICAgdGhpcy5fVUlCcmlkZ2UuSW5pdEJyaWRnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJk+W8gOeql+WPo1xuICAgICAqIEBwYXJhbSB1aVRlbXBsYXRlTmFtZSDnqpflj6PlkI3np7DvvIzor6XlkI3np7DkuZ/mmK9wcmVmYWLnmoTlkI3np7BcbiAgICAgKiBAcGFyYW0gYXJncyDopoHkvKDlhaXnmoTlj4LmlbBcbiAgICAgKi9cbiAgICBPcGVuV2luZG93PFQgZXh0ZW5kcyBVSUZyYW1lPih1aUNsYXNzIDogVUlDbGFzczxUPiwgLi4uYXJncyA6IGFueSkgOiBQcm9taXNlPFVJRnJhbWU+e1xuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiVUlNb2R1bGUuT3BlbldpbmRvdyhcIit1aVRlbXBsYXRlTmFtZStcIilcIik7XG4gICAgICAgIGxldCB1aVRlbXBsYXRlTmFtZSA9IHVpQ2xhc3MuZ2V0VXJsKCk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuVUlXaW5kb3dzW3VpVGVtcGxhdGVOYW1lXTtcblxuICAgICAgICBpZih0ZW1wbGF0ZSl7XG4gICAgICAgICAgICBpZih0ZW1wbGF0ZS5pc1ZhbGlkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy9US0xvZy5Mb2dJbmZvKFwiVUlNb2R1bGUuT3BlbldpbmRvdyDomb3nhLblt7Lnu4/lrZjlnKjvvIzkvYbml6Dms5Xkvb/nlKjvvIzpnIDopoHph43mlrDliqDovb1cIiArIHVpVGVtcGxhdGVOYW1lKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5VSVdpbmRvd3NbdWlUZW1wbGF0ZU5hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL1RLTG9nLkxvZ0luZm8oXCJVSU1vZHVsZS5PcGVuV2luZG93IOW3sue7j+WtmOWcqO+8jOebtOaOpeaJk+W8gFwiICsgdWlUZW1wbGF0ZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuT25PcGVuKHRoaXMuVUlXaW5kb3dzW3VpVGVtcGxhdGVOYW1lXSwgLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLlVJV2luZG93c1t1aVRlbXBsYXRlTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuTG9hZFdpbmRvdyh1aUNsYXNzLCB0cnVlLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhbPpl63nqpflj6NcbiAgICAgKiBAcGFyYW0gdWlDbGFzcyDnqpflj6PnsbvlkI3np7BcbiAgICAgKi9cbiAgICBDbG9zZVdpbmRvdzxUIGV4dGVuZHMgVUlGcmFtZT4odWlDbGFzcyA6IFVJQ2xhc3M8VD4pe1xuICAgICAgICBsZXQgbmFtZSA9IHVpQ2xhc3MuZ2V0VXJsKCk7XG4gICAgICAgIGlmKHRoaXMuVUlXaW5kb3dzW25hbWVdID09IG51bGwpe1xuICAgICAgICAgICAgLy8gVEtMb2cuTG9nV2FybihcIkNsb3NlV2luZG93IOaJvuS4jeWIsOeql+WPo1wiICsgbmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLlVJV2luZG93c1tuYW1lXTtcbiAgICAgICAgZnJhbWUuT25DbG9zZSgpO1xuICAgICAgICBpZihjYy5pc1ZhbGlkKGZyYW1lLm5vZGUpKSB7XG4gICAgICAgICAgICBmcmFtZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5PbkNsb3NlRXZlbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLk9uQ2xvc2VFdmVudChmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnqpflj6Plr7nosaFcbiAgICAgKiDlpoLmnpzor6Xnqpflj6Pov5jmsqHmnInliqDovb3ov4fvvIzliJnkvJrov5Tlm55udWxsXG4gICAgICogQHBhcmFtIG5hbWUg56qX5Y+j5ZCN56ewXG4gICAgICovXG4gICAgR2V0RnJhbWUobmFtZSA6IHN0cmluZykgOiBVSUZyYW1lIHtcbiAgICAgICAgaWYodGhpcy5VSVdpbmRvd3NbbmFtZV0gPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5VSVdpbmRvd3NbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat6K+l56qX5Y+j5piv5ZCm5bey57uP5Yqg6L296L+HXG4gICAgICogQHBhcmFtIG5hbWUg56qX5Y+j5ZCN56ewXG4gICAgICovXG4gICAgSXNMb2FkKG5hbWUgOiBzdHJpbmcpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKHRoaXMuVUlXaW5kb3dzW25hbWVdID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOa1i+ivpeeql+WPo+W9k+WJjeaYr+WQpuato+WcqOaYvuekulxuICAgICAqIEBwYXJhbSBuYW1lIOeql+WPo+WQjeensFxuICAgICAqL1xuICAgIElzT3BlbihuYW1lIDogc3RyaW5nKSA6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLlVJV2luZG93c1tuYW1lXSA9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5VSVdpbmRvd3NbbmFtZV0ubm9kZS5hY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZSA5q+B56qX5Y+jXG4gICAgICog5Y2zZGVzdHJveeiKgueCuVxuICAgICAqIEBwYXJhbSB1aUNsYXNzIOeql+WPo+exu+WQjeensFxuICAgICAqIEBwYXJhbSByZWxlYXNlIOaYr+WQpumHiuaUvuivpeeql+WPo+eahOi1hOa6kFxuICAgICAqL1xuICAgIERlc3Ryb3lXaW5kb3c8VCBleHRlbmRzIFVJRnJhbWU+KHVpQ2xhc3MgOiBVSUNsYXNzPFQ+LCByZWxlYXNlIDogYm9vbGVhbiA9IHRydWUpe1xuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiVUlNb2R1bGUuRGVzdHJveVdpbmRvdyhcIiArIHVpVGVtcGxhdGVOYW1lK1wiKVwiKTtcbiAgICAgICAgbGV0IHVpVGVtcGxhdGVOYW1lID0gdWlDbGFzcy5nZXRVcmwoKTtcbiAgICAgICAgaWYodGhpcy5VSVdpbmRvd3NbdWlUZW1wbGF0ZU5hbWVdID09IG51bGwpe1xuICAgICAgICAgICAgVEtMb2cuTG9nV2FybihcIlVJTW9kdWxlLkRlc3Ryb3lXaW5kb3cg5om+5LiN5Yiw6KaB6ZSA5q+B55qE56qX5Y+jXCIgKyB1aVRlbXBsYXRlTmFtZSk7XG4gICAgICAgICAgICBsZXQgdWlyb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIlVJUm9vdFwiKTtcbiAgICAgICAgICAgIGlmKHVpcm9vdCAmJiB1aXJvb3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHVpcm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsdWkgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZSh1aVRlbXBsYXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRlbHVpICYmIGNjLmlzVmFsaWQoZGVsdWkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwidWl3aW5kb3dz6YeM5om+5LiN5Yiw5b2T5YmN6IqC54K577yM5LuO5Zy65pmv6IqC54K56YeM6YGN5Y6G6K+l6IqC54K55bm26ZSA5q+BXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdWkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLlVJV2luZG93c1t1aVRlbXBsYXRlTmFtZV07XG4gICAgICAgIGlmKGNjLmlzVmFsaWQoZnJhbWUubm9kZSkpIHtcbiAgICAgICAgICAgIGZyYW1lLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihyZWxlYXNlKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJUT0RPIOmHiuaUvueql+WPo1wiICsgdWlUZW1wbGF0ZU5hbWUgKyBcIui1hOa6kFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLlVJV2luZG93c1t1aVRlbXBsYXRlTmFtZV07XG4gICAgICAgIC8vIHRoaXMuVUlXaW5kb3dzW3VpVGVtcGxhdGVOYW1lXSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZSA5q+B5omA5pyJ5bey5Yqg6L2955qE56qX5Y+jXG4gICAgICovXG4gICAgRGVzdHJveUFsbFdpbmRvdygpe1xuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiVUlNb2R1bGUuRGVzdHJveUFsbFdpbmRvdygpXCIpXG4gICAgICAgIC8vIGxldCBsb2FkTGlzdCA9IFtdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlVJV2luZG93cyk7XG4gICAgICAgIGZvcihsZXQgaXRlbSBpbiB0aGlzLlVJV2luZG93cyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIGlmKHRoaXMuSXNMb2FkKGl0ZW0pKXtcbiAgICAgICAgICAgICAgICAvLyBsb2FkTGlzdC5wdXNoKHRoaXMuVUlXaW5kb3dzW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLlVJV2luZG93c1tpdGVtXTtcbiAgICAgICAgICAgICAgICBmcmFtZS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5VSVdpbmRvd3NbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkTGlzdC5mb3JFYWNoKChuYW1lKT0+e1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5EZXN0cm95V2luZG93KG5hbWUsIHRydWUpO1xuICAgICAgICAvLyAgICAgbmFtZS5kZXN0cm95KCk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YWz6Zet5omA5pyJ56qX5Y+jXG4gICAgICovXG4gICAgQ2xvc2VBbGxXaW5kb3coKXtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIlVJTW9kdWxlLkNsb3NlQWxsV2luZG93KClcIilcbiAgICAgICAgLy8gbGV0IGxvYWRMaXN0ID0gW107XG4gICAgICAgIGZvcihsZXQgaXRlbSBpbiB0aGlzLlVJV2luZG93cyl7XG4gICAgICAgICAgICBpZih0aGlzLklzT3BlbihpdGVtKSl7XG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5VSVdpbmRvd3NbaXRlbV07XG4gICAgICAgICAgICAgICAgZnJhbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhpcy5VSVdpbmRvd3NbaXRlbV07XG4gICAgICAgICAgICAgICAgLy8gbG9hZExpc3QucHVzaCh0aGlzLlVJV2luZG93c1tpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9hZExpc3QuZm9yRWFjaCgobmFtZSk9PntcbiAgICAgICAgLy8gICAgIHRoaXMuQ2xvc2VXaW5kb3cobmFtZSk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBMb2FkV2luZG93PFQgZXh0ZW5kcyBVSUZyYW1lPih1aUNsYXNzIDogVUlDbGFzczxUPiwgb3BlbldoZW5GaW5pc2ggOiBib29sZWFuLCAuLi5hcmdzIDogYW55KSA6IFByb21pc2U8VUlGcmFtZT57XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCJVSU1vZHVsZS5Mb2FkV2luZG93KFwiICsgdWlUZW1wbGF0ZU5hbWUgKyBcIilcIik7XG4gICAgICAgIGxldCB1aVRlbXBsYXRlTmFtZSA9IHVpQ2xhc3MuZ2V0VXJsKCk7XG4gICAgICAgIGlmKHRoaXMuVUlXaW5kb3dzW3VpVGVtcGxhdGVOYW1lXSAhPSBudWxsKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCJVSU1vZHVsZS5Mb2FkV2luZG93IOWkmuasoeWKoOi9veeql+WPozpcIiArIHVpVGVtcGxhdGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxVSUZyYW1lPigocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5fVUlCcmlkZ2UuTG9hZFVJQXNzZXQodWlUZW1wbGF0ZU5hbWUpXG4gICAgICAgICAgICAudGhlbihwcmVmYWI9PntcbiAgICAgICAgICAgICAgICBpZihwcmVmYWIgPT0gbnVsbCl7IFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZSA9IHRoaXMuX1VJQnJpZGdlLkNyZWF0ZVVJQ29udHJvbGxlcihpbnN0LCB1aUNsYXNzLmdldE5hbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLlVJTmFtZSA9IHVpVGVtcGxhdGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9VSUJyaWRnZS5VSU9iamVjdEZpbHRlcihmcmFtZSwgaW5zdCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUlXaW5kb3dzW3VpVGVtcGxhdGVOYW1lXSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkluaXRXaW5kb3coZnJhbWUsIG9wZW5XaGVuRmluaXNoLCAuLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZT0+e1xuICAgICAgICAgICAgICAgIFRLTG9nLkxvZ0VycihcIuWKoOi9veeql+WPo1wiK3VpVGVtcGxhdGVOYW1lICtcIuWksei0pTpcIiArIGUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaChlPT57XG4gICAgICAgICAgICBUS0xvZy5Mb2dFcnIoXCJVSU1vZHVsZS5Mb2FkV2luZG93KFwiICsgdWlUZW1wbGF0ZU5hbWUgKyBcIikgRXJyOlwiICsgZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVSU1vZHVsZS5Mb2FkV2luZG93KFwiICsgdWlUZW1wbGF0ZU5hbWUgKyBcIikgRXJyOlwiICtlKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBJbml0V2luZG93KGZyYW1lIDogVUlGcmFtZSwgb3BlbldoZW5GaW5pc2ggOiBib29sZWFuLCAuLi5hcmdzIDogYW55KSB7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCJVSU1vZHVsZS5Jbml0V2luZG93KFwiICsgZnJhbWUgKyBcIilcIik7XG4gICAgICAgIGZyYW1lLk9uSW5pdCgpO1xuICAgICAgICBpZih0aGlzLk9uSW5pdEV2ZW50ICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5PbkluaXRFdmVudChmcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3BlbldoZW5GaW5pc2gpe1xuICAgICAgICAgICAgdGhpcy5Pbk9wZW4oZnJhbWUsIC4uLmFyZ3MpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGZyYW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIE9uT3BlbihmcmFtZSA6IFVJRnJhbWUsIC4uLmFyZ3MgOiBhbnkpIHtcbiAgICAgICAgVEtMb2cuTG9nSW5mbyhcIlVJTW9kdWxlLk9uT3BlbihcIiArIGZyYW1lLm5hbWUgKyBcIilcIik7XG4gICAgICAgIGlmKGZyYW1lID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmKGZyYW1lLm5vZGUuYWN0aXZlKXtcbiAgICAgICAgLy8gICAgIGZyYW1lLk9uQ2xvc2UoKTtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMuT25DbG9zZUV2ZW50ICE9IG51bGwpe1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuT25DbG9zZUV2ZW50KGZyYW1lKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgZnJhbWUuQmVmb3JlT3BlbigoKT0+e1xuICAgICAgICAgICAgZnJhbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZnJhbWUuT25PcGVuKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICBpZih0aGlzLk9uT3BlbkV2ZW50ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuT25PcGVuRXZlbnQoZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAuLi5hcmdzKTtcbiAgICB9XG59XG4iXX0=