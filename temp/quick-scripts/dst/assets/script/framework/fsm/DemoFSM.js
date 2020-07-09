
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/fsm/DemoFSM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20f36zwiLVIya40a8AFSASQ', 'DemoFSM');
// script/framework/fsm/DemoFSM.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var FSMState_1 = require("./FSMState");
var FSMComponent_1 = require("./FSMComponent");
var ObjectPoolController_1 = require("../pool/ObjectPoolController");
var FiniteStateMachine_1 = require("./FiniteStateMachine");
var TKLog_1 = require("../log/TKLog");
var ToolsUseful_1 = require("../utils/ToolsUseful");
/**
 * FSM例子
 * FSM使用一般方法为：
 * 1. 有状态的是一个cc.Component,则替换为继承自FSMComponent
 * 2. 各个状态的定义，每个状态继承FSMState,并实现各自状态内的逻辑
 * 3. 确定各个状态之间的转换条件等关系
 * 4. 初始化状态机，重写FSMInit函数并注册实例化的状态对象
 * 5. 在update函数中调用FSMUpdate()用于更新状态
 * 6. 使用ChangeStateById()来改变当前状态
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DemoFSMState;
(function (DemoFSMState) {
    DemoFSMState[DemoFSMState["Init"] = 0] = "Init";
    DemoFSMState[DemoFSMState["Run"] = 1] = "Run";
    DemoFSMState[DemoFSMState["Destroy"] = 2] = "Destroy";
})(DemoFSMState || (DemoFSMState = {}));
var DemoFSM = /** @class */ (function (_super) {
    __extends(DemoFSM, _super);
    function DemoFSM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stateInit = new DemoFSMState_Init();
        _this.stateRun = new DemoFSMState_Run();
        _this.stateDestroy = new DemoFSMState_Destroy();
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // 状态机初始化函数
    // 包括状态机的实例化以及注册各个状态
    DemoFSM.prototype.FSMInit = function () {
        this.FSM = new FiniteStateMachine_1.default(this);
        _super.prototype.FSMInit.call(this);
        this.RegisterState(this.stateInit);
        this.RegisterState(this.stateRun);
        this.RegisterState(this.stateDestroy);
    };
    DemoFSM.prototype.onLoad = function () {
        // 初始化状态机
        this.FSMInit();
    };
    DemoFSM.prototype.start = function () {
        // 初始使用Init状态
        this.ChangeStateById(DemoFSMState.Init);
    };
    DemoFSM.prototype.update = function (dt) {
        // 状态更新
        this.FSMUpdate(dt);
    };
    DemoFSM = __decorate([
        ccclass
    ], DemoFSM);
    return DemoFSM;
}(FSMComponent_1.default));
exports.default = DemoFSM;
// 初始化状态
// 初始化数据并执行一个更新的旋转动画，当旋转到一定角度就切换到Run状态
var DemoFSMState_Init = /** @class */ (function (_super) {
    __extends(DemoFSMState_Init, _super);
    function DemoFSMState_Init() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.angle = 360;
        return _this;
    }
    DemoFSMState_Init.prototype.StateID = function () {
        return DemoFSMState.Init;
    };
    DemoFSMState_Init.prototype.Enter = function () {
        _super.prototype.Enter.call(this);
        this.angle = 360;
        TKLog_1.default.LogInfo("进入Init状态，初始化内容");
        this.entity.node.angle = this.angle;
    };
    DemoFSMState_Init.prototype.Excute = function (dt) {
        _super.prototype.Excute.call(this, dt);
        this.angle--;
        this.entity.node.angle = this.angle;
        if (this.angle <= 45) {
            this.entity.ChangeStateById(DemoFSMState.Run, this.angle);
        }
    };
    DemoFSMState_Init.prototype.Exit = function () {
        _super.prototype.Exit.call(this);
        TKLog_1.default.LogInfo("退出初始化状态了");
    };
    return DemoFSMState_Init;
}(FSMState_1.default));
// 运行中状态
// 使用了async执行指令，执行完成后切换到Destroy状态
var DemoFSMState_Run = /** @class */ (function (_super) {
    __extends(DemoFSMState_Run, _super);
    function DemoFSMState_Run() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoFSMState_Run.prototype.StateID = function () {
        return DemoFSMState.Run;
    };
    DemoFSMState_Run.prototype.Enter = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        TKLog_1.default.LogInfo("进入Run状态了,传过来的CD为:" + args[0]);
        // 缩放
        this.entity.node.scale = 2;
        this.Run();
    };
    DemoFSMState_Run.prototype.Run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        TKLog_1.default.LogInfo("先等待2秒钟");
                        return [4 /*yield*/, ToolsUseful_1.default.WaitForSeconds(2)];
                    case 1:
                        _a.sent();
                        TKLog_1.default.LogInfo("等待完成，切换状态");
                        this.entity.ChangeStateById(DemoFSMState.Destroy);
                        return [2 /*return*/];
                }
            });
        });
    };
    DemoFSMState_Run.prototype.Exit = function () {
        TKLog_1.default.LogInfo("退出Run状态，啥也不干");
    };
    return DemoFSMState_Run;
}(FSMState_1.default));
// 销毁状态
// 过一段时间后销毁节点
var DemoFSMState_Destroy = /** @class */ (function (_super) {
    __extends(DemoFSMState_Destroy, _super);
    function DemoFSMState_Destroy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoFSMState_Destroy.prototype.StateID = function () {
        return DemoFSMState.Destroy;
    };
    DemoFSMState_Destroy.prototype.Enter = function () {
        TKLog_1.default.LogInfo("进入Destroy状态，1秒钟后销毁");
        this.Run();
    };
    DemoFSMState_Destroy.prototype.Run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ToolsUseful_1.default.WaitForSeconds(1)];
                    case 1:
                        _a.sent();
                        ObjectPoolController_1.default.Destroy(this.entity.node);
                        return [2 /*return*/];
                }
            });
        });
    };
    return DemoFSMState_Destroy;
}(FSMState_1.default));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2ZzbS9EZW1vRlNNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQywrQ0FBMEM7QUFDMUMscUVBQWdFO0FBQ2hFLDJEQUFzRDtBQUN0RCxzQ0FBaUM7QUFDakMsb0RBQStDO0FBRS9DOzs7Ozs7Ozs7R0FTRztBQUdHLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFJLENBQUE7SUFDSiw2Q0FBRyxDQUFBO0lBQ0gscURBQU8sQ0FBQTtBQUNYLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQUVEO0lBQXFDLDJCQUFxQjtJQUExRDtRQUFBLHFFQStCQztRQTlCVyxlQUFTLEdBQXVCLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN4RCxjQUFRLEdBQXNCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNyRCxrQkFBWSxHQUEwQixJQUFJLG9CQUFvQixFQUFFLENBQUM7O0lBNEI3RSxDQUFDO0lBMUJHLHdCQUF3QjtJQUV4QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksNEJBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFD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LENBQUM7SUFDTCx1QkFBQztBQUFELENBeEJBLEFBd0JDLENBeEI4QixrQkFBUSxHQXdCdEM7QUFFRCxPQUFPO0FBQ1AsYUFBYTtBQUNiO0lBQW1DLHdDQUFpQjtJQUFwRDs7SUFlQSxDQUFDO0lBZFUsc0NBQU8sR0FBZDtRQUNJLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLGVBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUssa0NBQUcsR0FBVDs7Ozs0QkFDSSxxQkFBTSxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUM7d0JBQ3BDLDhCQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztLQUNsRDtJQUVMLDJCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZmtDLGtCQUFRLEdBZTFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZTTVN0YXRlIGZyb20gXCIuL0ZTTVN0YXRlXCI7XG5pbXBvcnQgRlNNQ29tcG9uZW50IGZyb20gXCIuL0ZTTUNvbXBvbmVudFwiO1xuaW1wb3J0IE9iamVjdFBvb2xDb250cm9sbGVyIGZyb20gXCIuLi9wb29sL09iamVjdFBvb2xDb250cm9sbGVyXCI7XG5pbXBvcnQgRmluaXRlU3RhdGVNYWNoaW5lIGZyb20gXCIuL0Zpbml0ZVN0YXRlTWFjaGluZVwiO1xuaW1wb3J0IFRLTG9nIGZyb20gXCIuLi9sb2cvVEtMb2dcIjtcbmltcG9ydCBUb29sc1VzZWZ1bCBmcm9tIFwiLi4vdXRpbHMvVG9vbHNVc2VmdWxcIjtcblxuLyoqXG4gKiBGU03kvovlrZBcbiAqIEZTTeS9v+eUqOS4gOiIrOaWueazleS4uu+8mlxuICogMS4g5pyJ54q25oCB55qE5piv5LiA5LiqY2MuQ29tcG9uZW50LOWImeabv+aNouS4uue7p+aJv+iHqkZTTUNvbXBvbmVudFxuICogMi4g5ZCE5Liq54q25oCB55qE5a6a5LmJ77yM5q+P5Liq54q25oCB57un5om/RlNNU3RhdGUs5bm25a6e546w5ZCE6Ieq54q25oCB5YaF55qE6YC76L6RXG4gKiAzLiDnoa7lrprlkITkuKrnirbmgIHkuYvpl7TnmoTovazmjaLmnaHku7bnrYnlhbPns7tcbiAqIDQuIOWIneWni+WMlueKtuaAgeacuu+8jOmHjeWGmUZTTUluaXTlh73mlbDlubbms6jlhozlrp7kvovljJbnmoTnirbmgIHlr7nosaFcbiAqIDUuIOWcqHVwZGF0ZeWHveaVsOS4reiwg+eUqEZTTVVwZGF0ZSgp55So5LqO5pu05paw54q25oCBXG4gKiA2LiDkvb/nlKhDaGFuZ2VTdGF0ZUJ5SWQoKeadpeaUueWPmOW9k+WJjeeKtuaAgVxuICovXG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gRGVtb0ZTTVN0YXRlIHtcbiAgICBJbml0LFxuICAgIFJ1bixcbiAgICBEZXN0cm95LFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbW9GU00gZXh0ZW5kcyBGU01Db21wb25lbnQ8RGVtb0ZTTT4ge1xuICAgIHByaXZhdGUgc3RhdGVJbml0IDogRGVtb0ZTTVN0YXRlX0luaXQgPSBuZXcgRGVtb0ZTTVN0YXRlX0luaXQoKTtcbiAgICBwcml2YXRlIHN0YXRlUnVuIDogRGVtb0ZTTVN0YXRlX1J1biA9IG5ldyBEZW1vRlNNU3RhdGVfUnVuKCk7XG4gICAgcHJpdmF0ZSBzdGF0ZURlc3Ryb3kgOiBEZW1vRlNNU3RhdGVfRGVzdHJveSA9IG5ldyBEZW1vRlNNU3RhdGVfRGVzdHJveSgpO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyDnirbmgIHmnLrliJ3lp4vljJblh73mlbBcbiAgICAvLyDljIXmi6znirbmgIHmnLrnmoTlrp7kvovljJbku6Xlj4rms6jlhozlkITkuKrnirbmgIFcbiAgICBGU01Jbml0KCl7XG4gICAgICAgIHRoaXMuRlNNID0gbmV3IEZpbml0ZVN0YXRlTWFjaGluZSh0aGlzKTtcbiAgICAgICAgc3VwZXIuRlNNSW5pdCgpO1xuICAgICAgICB0aGlzLlJlZ2lzdGVyU3RhdGUodGhpcy5zdGF0ZUluaXQpO1xuICAgICAgICB0aGlzLlJlZ2lzdGVyU3RhdGUodGhpcy5zdGF0ZVJ1bik7XG4gICAgICAgIHRoaXMuUmVnaXN0ZXJTdGF0ZSh0aGlzLnN0YXRlRGVzdHJveSk7XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW54q25oCB5py6XG4gICAgICAgIHRoaXMuRlNNSW5pdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5Yid5aeL5L2/55SoSW5pdOeKtuaAgVxuICAgICAgICB0aGlzLkNoYW5nZVN0YXRlQnlJZChEZW1vRlNNU3RhdGUuSW5pdCk7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyDnirbmgIHmm7TmlrBcbiAgICAgICAgdGhpcy5GU01VcGRhdGUoZHQpO1xuICAgIH1cbn1cblxuLy8g5Yid5aeL5YyW54q25oCBXG4vLyDliJ3lp4vljJbmlbDmja7lubbmiafooYzkuIDkuKrmm7TmlrDnmoTml4vovazliqjnlLvvvIzlvZPml4vovazliLDkuIDlrprop5LluqblsLHliIfmjaLliLBSdW7nirbmgIFcbmNsYXNzIERlbW9GU01TdGF0ZV9Jbml0IGV4dGVuZHMgRlNNU3RhdGU8RGVtb0ZTTT4ge1xuICAgIHB1YmxpYyBTdGF0ZUlEKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBEZW1vRlNNU3RhdGUuSW5pdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFuZ2xlID0gMzYwO1xuICAgIEVudGVyKCl7XG4gICAgICAgIHN1cGVyLkVudGVyKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzNjA7XG4gICAgICAgIFRLTG9nLkxvZ0luZm8oXCLov5vlhaVJbml054q25oCB77yM5Yid5aeL5YyW5YaF5a65XCIpO1xuICAgICAgICB0aGlzLmVudGl0eS5ub2RlLmFuZ2xlID0gdGhpcy5hbmdsZTtcbiAgICB9XG5cbiAgICBFeGN1dGUoZHQpe1xuICAgICAgICBzdXBlci5FeGN1dGUoZHQpO1xuICAgICAgICB0aGlzLmFuZ2xlLS07XG4gICAgICAgIHRoaXMuZW50aXR5Lm5vZGUuYW5nbGUgPSB0aGlzLmFuZ2xlO1xuXG4gICAgICAgIGlmKHRoaXMuYW5nbGUgPD0gNDUpe1xuICAgICAgICAgICAgdGhpcy5lbnRpdHkuQ2hhbmdlU3RhdGVCeUlkKERlbW9GU01TdGF0ZS5SdW4sIHRoaXMuYW5nbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgRXhpdCgpe1xuICAgICAgICBzdXBlci5FeGl0KCk7XG4gICAgICAgIFRLTG9nLkxvZ0luZm8oXCLpgIDlh7rliJ3lp4vljJbnirbmgIHkuoZcIik7XG4gICAgfVxufVxuXG4vLyDov5DooYzkuK3nirbmgIFcbi8vIOS9v+eUqOS6hmFzeW5j5omn6KGM5oyH5Luk77yM5omn6KGM5a6M5oiQ5ZCO5YiH5o2i5YiwRGVzdHJveeeKtuaAgVxuY2xhc3MgRGVtb0ZTTVN0YXRlX1J1biBleHRlbmRzIEZTTVN0YXRlPERlbW9GU00+IHtcbiAgICBwdWJsaWMgU3RhdGVJRCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gRGVtb0ZTTVN0YXRlLlJ1bjtcbiAgICB9XG5cbiAgICBFbnRlciguLi5hcmdzOmFueSl7XG4gICAgICAgIFRLTG9nLkxvZ0luZm8oXCLov5vlhaVSdW7nirbmgIHkuoYs5Lyg6L+H5p2l55qEQ0TkuLo6XCIgKyBhcmdzWzBdKTtcbiAgICAgICAgLy8g57yp5pS+XG4gICAgICAgIHRoaXMuZW50aXR5Lm5vZGUuc2NhbGUgPSAyO1xuXG4gICAgICAgIHRoaXMuUnVuKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIFJ1bigpe1xuICAgICAgICBUS0xvZy5Mb2dJbmZvKFwi5YWI562J5b6FMuenkumSn1wiKVxuICAgICAgICBhd2FpdCBUb29sc1VzZWZ1bC5XYWl0Rm9yU2Vjb25kcygyKTtcbiAgICAgICAgVEtMb2cuTG9nSW5mbyhcIuetieW+heWujOaIkO+8jOWIh+aNoueKtuaAgVwiKVxuICAgICAgICB0aGlzLmVudGl0eS5DaGFuZ2VTdGF0ZUJ5SWQoRGVtb0ZTTVN0YXRlLkRlc3Ryb3kpO1xuICAgIH1cblxuICAgIEV4aXQoKXtcbiAgICAgICAgVEtMb2cuTG9nSW5mbyhcIumAgOWHulJ1bueKtuaAge+8jOWVpeS5n+S4jeW5slwiKTtcbiAgICB9XG59XG5cbi8vIOmUgOavgeeKtuaAgVxuLy8g6L+H5LiA5q615pe26Ze05ZCO6ZSA5q+B6IqC54K5XG5jbGFzcyBEZW1vRlNNU3RhdGVfRGVzdHJveSBleHRlbmRzIEZTTVN0YXRlPERlbW9GU00+e1xuICAgIHB1YmxpYyBTdGF0ZUlEKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBEZW1vRlNNU3RhdGUuRGVzdHJveTtcbiAgICB9XG5cbiAgICBFbnRlcigpe1xuICAgICAgICBUS0xvZy5Mb2dJbmZvKFwi6L+b5YWlRGVzdHJveeeKtuaAge+8jDHnp5Lpkp/lkI7plIDmr4FcIilcbiAgICAgICAgdGhpcy5SdW4oKTtcbiAgICB9XG5cbiAgICBhc3luYyBSdW4oKXtcbiAgICAgICAgYXdhaXQgVG9vbHNVc2VmdWwuV2FpdEZvclNlY29uZHMoMSk7XG4gICAgICAgIE9iamVjdFBvb2xDb250cm9sbGVyLkRlc3Ryb3kodGhpcy5lbnRpdHkubm9kZSk7XG4gICAgfVxuICAgIFxufSJdfQ==