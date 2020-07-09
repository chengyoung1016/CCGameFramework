"use strict";
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