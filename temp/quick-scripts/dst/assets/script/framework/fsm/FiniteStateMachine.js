
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/fsm/FiniteStateMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2ZzbS9GaW5pdGVTdGF0ZU1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFjSSw0QkFBWSxLQUFTO1FBUmIsYUFBUSxHQUFrQyxFQUFFLENBQUM7UUFTakQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQVJNLG1DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBTU0sbUNBQU0sR0FBYixVQUFjLEVBQUU7UUFDWixJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFTSx1Q0FBVSxHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTSw4Q0FBaUIsR0FBeEIsVUFBeUIsU0FBdUI7O1FBQUUsZ0JBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsK0JBQWU7O1FBQzdELElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJ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RlNNU3RhdGUgZnJvbSBcIi4vRlNNU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcbiAgICBwcml2YXRlIE93bmVyIDogVDtcbiAgICBwcml2YXRlIEN1cnJlbnRTdGF0ZSA6IEZTTVN0YXRlPFQ+O1xuICAgIHByaXZhdGUgUHJldmlvdXNTdGF0ZSA6IEZTTVN0YXRlPFQ+O1xuICAgIHByaXZhdGUgR2xvYmFsU3RhdGUgOiBGU01TdGF0ZTxUPjtcblxuICAgIHByaXZhdGUgc3RhdGVSZWYgOiB7W2luZGV4Om51bWJlcl06RlNNU3RhdGU8VD59ID0ge307XG5cbiAgICBwdWJsaWMgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuQ3VycmVudFN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5QcmV2aW91c1N0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5HbG9iYWxTdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3duZXIgOiBUKXtcbiAgICAgICAgdGhpcy5Pd25lciA9IG93bmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGUoZHQpe1xuICAgICAgICBpZih0aGlzLkdsb2JhbFN0YXRlICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5HbG9iYWxTdGF0ZS5FeGN1dGUoZHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuQ3VycmVudFN0YXRlICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50U3RhdGUuRXhjdXRlKGR0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBMYXRlVXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMuR2xvYmFsU3RhdGUgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLkdsb2JhbFN0YXRlLkxhdGVFeGN1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLkN1cnJlbnRTdGF0ZSAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudFN0YXRlLkxhdGVFeGN1dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBDaGFuZ2VHbG9iYWxTdGF0ZShuZXdHbG9iYWwgOiBGU01TdGF0ZTxUPiwgLi4ucGFyYW1zIDogYW55KXtcbiAgICAgICAgaWYodGhpcy5HbG9iYWxTdGF0ZSAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuR2xvYmFsU3RhdGUgPSBuZXdHbG9iYWw7XG4gICAgICAgICAgICB0aGlzLkdsb2JhbFN0YXRlLkVudGVyKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkdsb2JhbFN0YXRlLkV4aXQoKTtcbiAgICAgICAgdGhpcy5HbG9iYWxTdGF0ZSA9IG5ld0dsb2JhbDtcbiAgICAgICAgaWYodGhpcy5HbG9iYWxTdGF0ZSAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuR2xvYmFsU3RhdGUuRW50ZXIoLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBDaGFuZ2VHbG9iYWxTdGF0ZUJ5SWQoc3RhdGVJRCA6IG51bWJlciwgLi4ucGFyYW1zKXtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZVJlZltzdGF0ZUlEXTtcbiAgICAgICAgdGhpcy5DaGFuZ2VHbG9iYWxTdGF0ZShzdGF0ZSwgLi4ucGFyYW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQ2hhbmdlU3RhdGUobmV3U3RhdGUgOiBGU01TdGF0ZTxUPiwgLi4ucGFyYW1zIDogYW55KXtcbiAgICAgICAgdGhpcy5QcmV2aW91c1N0YXRlID0gdGhpcy5DdXJyZW50U3RhdGU7XG4gICAgICAgIGlmKHRoaXMuQ3VycmVudFN0YXRlICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50U3RhdGUuRXhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG5cbiAgICAgICAgaWYodGhpcy5DdXJyZW50U3RhdGUgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRTdGF0ZS5FbnRlciguLi5wYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFJldmVydFRvUHJldmlvdXNTdGF0ZSgpe1xuICAgICAgICBpZih0aGlzLlByZXZpb3VzU3RhdGUgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLkNoYW5nZVN0YXRlKHRoaXMuUHJldmlvdXNTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgQ2hhbmdlU3RhdGVCeUlkKHN0YXRlSUQgOiBudW1iZXIsIC4uLnBhcmFtczphbnkpe1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlUmVmW3N0YXRlSURdO1xuICAgICAgICB0aGlzLkNoYW5nZVN0YXRlKHN0YXRlLCAuLi5wYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZWdpc3RlclN0YXRlKHN0YXRlIDogRlNNU3RhdGU8VD4pIDogRlNNU3RhdGU8VD4ge1xuICAgICAgICBzdGF0ZS5SZWdpc3RlclN0YXRlKHRoaXMuT3duZXIpO1xuICAgICAgICB0aGlzLnN0YXRlUmVmW3N0YXRlLlN0YXRlSUQoKV0gPSBzdGF0ZTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRDdXJTdGF0ZUlEKCkgOiBudW1iZXIge1xuICAgICAgICBpZih0aGlzLkN1cnJlbnRTdGF0ZSAhPSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkN1cnJlbnRTdGF0ZS5TdGF0ZUlEKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIEdldEN1clN0YXRlKCkgOiBGU01TdGF0ZTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLkN1cnJlbnRTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgVW5yZWdpc3RlclN0YXRlKHN0YXRlIDogRlNNU3RhdGU8VD4pe1xuICAgICAgICB0aGlzLnN0YXRlUmVmW3N0YXRlLlN0YXRlSUQoKV0gPSBudWxsO1xuICAgIH1cbn1cbiJdfQ==