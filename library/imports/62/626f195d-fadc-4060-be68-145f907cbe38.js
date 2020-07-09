"use strict";
cc._RF.push(module, '626f1ld+txAYL5oFF+QfL44', 'FiniteStateMachine');
// script/framework/fsm/FiniteStateMachine.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FiniteStateMachine = /** @class */ (function () {
    function FiniteStateMachine(owner) {
        this.stateRef = {};
        this.Owner = owner;
    }
    FiniteStateMachine.prototype.onLoad = function () {
        this.CurrentState = null;
        this.PreviousState = null;
        this.GlobalState = null;
    };
    FiniteStateMachine.prototype.Update = function (dt) {
        if (this.GlobalState != null) {
            this.GlobalState.Excute(dt);
        }
        if (this.CurrentState != null) {
            this.CurrentState.Excute(dt);
        }
    };
    FiniteStateMachine.prototype.LateUpdate = function () {
        if (this.GlobalState != null) {
            this.GlobalState.LateExcute();
        }
        if (this.CurrentState != null) {
            this.CurrentState.LateExcute();
        }
    };
    FiniteStateMachine.prototype.ChangeGlobalState = function (newGlobal) {
        var _a, _b;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.GlobalState != null) {
            this.GlobalState = newGlobal;
            (_a = this.GlobalState).Enter.apply(_a, params);
            return;
        }
        this.GlobalState.Exit();
        this.GlobalState = newGlobal;
        if (this.GlobalState != null) {
            (_b = this.GlobalState).Enter.apply(_b, params);
        }
    };
    FiniteStateMachine.prototype.ChangeGlobalStateById = function (stateID) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var state = this.stateRef[stateID];
        this.ChangeGlobalState.apply(this, __spreadArrays([state], params));
    };
    FiniteStateMachine.prototype.ChangeState = function (newState) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.PreviousState = this.CurrentState;
        if (this.CurrentState != null) {
            this.CurrentState.Exit();
        }
        this.CurrentState = newState;
        if (this.CurrentState != null) {
            (_a = this.CurrentState).Enter.apply(_a, params);
        }
    };
    FiniteStateMachine.prototype.RevertToPreviousState = function () {
        if (this.PreviousState != null) {
            this.ChangeState(this.PreviousState);
        }
    };
    FiniteStateMachine.prototype.ChangeStateById = function (stateID) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var state = this.stateRef[stateID];
        this.ChangeState.apply(this, __spreadArrays([state], params));
    };
    FiniteStateMachine.prototype.RegisterState = function (state) {
        state.RegisterState(this.Owner);
        this.stateRef[state.StateID()] = state;
        return state;
    };
    FiniteStateMachine.prototype.GetCurStateID = function () {
        if (this.CurrentState != null) {
            return this.CurrentState.StateID();
        }
        return 0;
    };
    FiniteStateMachine.prototype.GetCurState = function () {
        return this.CurrentState;
    };
    FiniteStateMachine.prototype.UnregisterState = function (state) {
        this.stateRef[state.StateID()] = null;
    };
    return FiniteStateMachine;
}());
exports.default = FiniteStateMachine;

cc._RF.pop();