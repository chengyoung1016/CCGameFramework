"use strict";
cc._RF.push(module, 'cf86bWPyuRNzLBUxPya6Hes', 'FSMSimple');
// script/framework/fsm/FSMSimple.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FSMSimple = /** @class */ (function () {
    function FSMSimple() {
    }
    FSMSimple.prototype.FSMInit = function () {
    };
    FSMSimple.prototype.FSMUpdate = function (dt) {
        if (this.FSM) {
            this.FSM.Update(dt);
        }
    };
    FSMSimple.prototype.FSMLateUpdate = function () {
        this.FSM.LateUpdate();
    };
    FSMSimple.prototype.ChangeGlobalState = function (newState) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeGlobalState.apply(_a, __spreadArrays([newState], params));
    };
    FSMSimple.prototype.ChangeGlobalStateById = function (stateID) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeGlobalStateById.apply(_a, __spreadArrays([stateID], params));
    };
    FSMSimple.prototype.ChangeState = function (newState) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeState.apply(_a, __spreadArrays([newState], params));
    };
    FSMSimple.prototype.ChangeStateById = function (stateID) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_a = this.FSM).ChangeStateById.apply(_a, __spreadArrays([stateID], params));
    };
    FSMSimple.prototype.RevertToPreviousState = function () {
        this.FSM.RevertToPreviousState();
    };
    FSMSimple.prototype.ChangeStateDelay = function (newState, delay) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    FSMSimple.prototype.ChangeStateDelayById = function (stateID, delay) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    FSMSimple.prototype.RegisterState = function (state) {
        return this.FSM.RegisterState(state);
    };
    FSMSimple.prototype.UnregisterState = function (state) {
        this.FSM.UnregisterState(state);
    };
    FSMSimple.prototype.GetCurStateID = function () {
        return this.FSM.GetCurStateID();
    };
    FSMSimple.prototype.GetCurState = function () {
        return this.FSM.GetCurState();
    };
    FSMSimple = __decorate([
        ccclass
    ], FSMSimple);
    return FSMSimple;
}());
exports.default = FSMSimple;

cc._RF.pop();