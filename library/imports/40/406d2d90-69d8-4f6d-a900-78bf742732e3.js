"use strict";
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