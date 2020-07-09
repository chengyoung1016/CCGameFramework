"use strict";
cc._RF.push(module, 'bd82f/whqRB/YczLaxIzttq', 'FSMComponent');
// script/framework/fsm/FSMComponent.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var FSMComponent = /** @class */ (function (_super) {
    __extends(FSMComponent, _super);
    function FSMComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FSMComponent.prototype.update = function (dt) {
        this.FSMUpdate(dt);
    };
    FSMComponent.prototype.FSMInit = function () {
    };
    FSMComponent.prototype.FSMUpdate = function (dt) {
        if (this.FSM) {
            this.FSM.Update(dt);
        }
    };
    FSMComponent.prototype.FSMLateUpdate = function () {
        this.FSM.LateUpdate();
    };
    FSMComponent.prototype.ChangeGlobalState = function (newState) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeGlobalState.apply(_a, __spreadArrays([newState], params));
    };
    FSMComponent.prototype.ChangeGlobalStateById = function (stateID) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeGlobalStateById.apply(_a, __spreadArrays([stateID], params));
    };
    FSMComponent.prototype.ChangeState = function (newState) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeState.apply(_a, __spreadArrays([newState], params));
    };
    FSMComponent.prototype.ChangeStateById = function (stateID) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeStateById.apply(_a, __spreadArrays([stateID], params));
    };
    FSMComponent.prototype.RevertToPreviousState = function () {
        this.FSM.RevertToPreviousState();
    };
    FSMComponent.prototype.ChangeStateDelay = function (newState, delay) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    FSMComponent.prototype.ChangeStateDelayById = function (stateID, delay) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    FSMComponent.prototype.RegisterState = function (state) {
        return this.FSM.RegisterState(state);
    };
    FSMComponent.prototype.UnregisterState = function (state) {
        this.FSM.UnregisterState(state);
    };
    FSMComponent.prototype.GetCurStateID = function () {
        return this.FSM.GetCurStateID();
    };
    FSMComponent.prototype.GetCurState = function () {
        return this.FSM.GetCurState();
    };
    FSMComponent = __decorate([
        ccclass
    ], FSMComponent);
    return FSMComponent;
}(cc.Component));
exports.default = FSMComponent;

cc._RF.pop();