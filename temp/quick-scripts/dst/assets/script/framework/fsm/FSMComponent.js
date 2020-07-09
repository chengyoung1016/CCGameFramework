
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/fsm/FSMComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2ZzbS9GU01Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQTZDLGdDQUFZO0lBQXpEOztJQXFEQSxDQUFDO0lBakRHLDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQU8sR0FBUDtJQUVBLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsRUFBRTtRQUNSLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCx3Q0FBaUIsR0FBakIsVUFBa0IsUUFBeUM7O1FBQUUsZ0JBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsK0JBQWM7O1FBQ3ZFLENBQUEsS0FBQSxJQUFJLENBQUMsR0FBRyxDQUFBLENBQUMsaUJBQWlCLDJCQUFDLFFBQVEsR0FBSyxNQUFNLEdBQUU7SUFDcEQsQ0FBQztJQUNELDRDQUFxQixHQUFyQixVQUFzQixPQUFlOztRQUFFLGdCQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLCtCQUFjOztRQUNqRCxDQUFBLEtBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQSxDQUFDLHFCQUFxQiwyQkFBQyxPQUFPLEdBQUssTUFBTSxHQUFFO0lBQ3ZELENBQUM7SUFDRCxrQ0FBVyxHQUFYLFVBQVksUUFBeUM7O1FBQUUsZ0JBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsK0JBQWM7O1FBQ2pFLENBQUEsS0FBQSxJQUFJLENBQUMsR0FBRyxDQUFBLENBQUMsV0FBVywyQkFBQyxRQUFRLEdBQUssTUFBTSxHQUFFO0lBQzlDLENBQUM7SUFDRCxzQ0FBZSxHQUFmLFVBQWdCLE9BQWU7O1FBQUUsZ0JBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsK0JBQWM7O1FBQzNDLENBQUEsS0FBQSxJQUFJLENBQUMsR0FBRyxDQUFBLENBQUMsZUFBZSwyQkFBQyxPQUFPLEdBQUssTUFBTSxHQUFFO0lBQ2pELENBQUM7SUFDRCw0Q0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNELHVDQUFnQixHQUFoQixVQUFpQixRQUF5QyxFQUFFLEtBQWE7UUFBRSxnQkFBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCwrQkFBYzs7UUFDckYsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCwyQ0FBb0IsR0FBcEIsVUFBcUIsT0FBZSxFQUFFLEtBQWE7UUFBRSxnQkFBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCwrQkFBYzs7UUFDL0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsS0FBc0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZixVQUFnQixLQUFzQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsa0NBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBcERnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcURoQztJQUFELG1CQUFDO0NBckRELEFBcURDLENBckQ0QyxFQUFFLENBQUMsU0FBUyxHQXFEeEQ7a0JBckRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElGU00gZnJvbSBcIi4vSUZTTVwiO1xuaW1wb3J0IEZpbml0ZVN0YXRlTWFjaGluZSBmcm9tIFwiLi9GaW5pdGVTdGF0ZU1hY2hpbmVcIjtcblxuY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZTTUNvbXBvbmVudDxUPiBleHRlbmRzIGNjLkNvbXBvbmVudCBpbXBsZW1lbnRzIElGU008VD4ge1xuICAgIFxuICAgIHByb3RlY3RlZCBGU00gOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD47XG5cbiAgICB1cGRhdGUoZHQpe1xuICAgICAgICB0aGlzLkZTTVVwZGF0ZShkdCk7XG4gICAgfVxuXG4gICAgRlNNSW5pdCgpIHtcblxuICAgIH1cbiAgICBGU01VcGRhdGUoZHQpIHtcbiAgICAgICAgaWYodGhpcy5GU00pe1xuICAgICAgICAgICAgdGhpcy5GU00uVXBkYXRlKGR0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBGU01MYXRlVXBkYXRlKCkge1xuICAgICAgICB0aGlzLkZTTS5MYXRlVXBkYXRlKCk7XG4gICAgfVxuICAgIENoYW5nZUdsb2JhbFN0YXRlKG5ld1N0YXRlOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4sIC4uLnBhcmFtczogYW55KSB7XG4gICAgICAgIHRoaXMuRlNNLkNoYW5nZUdsb2JhbFN0YXRlKG5ld1N0YXRlLCAuLi5wYXJhbXMpO1xuICAgIH1cbiAgICBDaGFuZ2VHbG9iYWxTdGF0ZUJ5SWQoc3RhdGVJRDogbnVtYmVyLCAuLi5wYXJhbXM6IGFueSkge1xuICAgICAgICB0aGlzLkZTTS5DaGFuZ2VHbG9iYWxTdGF0ZUJ5SWQoc3RhdGVJRCwgLi4ucGFyYW1zKTtcbiAgICB9XG4gICAgQ2hhbmdlU3RhdGUobmV3U3RhdGU6IGltcG9ydChcIi4vRlNNU3RhdGVcIikuZGVmYXVsdDxUPiwgLi4ucGFyYW1zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5GU00uQ2hhbmdlU3RhdGUobmV3U3RhdGUsIC4uLnBhcmFtcyk7XG4gICAgfVxuICAgIENoYW5nZVN0YXRlQnlJZChzdGF0ZUlEOiBudW1iZXIsIC4uLnBhcmFtczogYW55KSB7XG4gICAgICAgIHRoaXMuRlNNLkNoYW5nZVN0YXRlQnlJZChzdGF0ZUlELCAuLi5wYXJhbXMpO1xuICAgIH1cbiAgICBSZXZlcnRUb1ByZXZpb3VzU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuRlNNLlJldmVydFRvUHJldmlvdXNTdGF0ZSgpO1xuICAgIH1cbiAgICBDaGFuZ2VTdGF0ZURlbGF5KG5ld1N0YXRlOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4sIGRlbGF5OiBudW1iZXIsIC4uLnBhcmFtczogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBDaGFuZ2VTdGF0ZURlbGF5QnlJZChzdGF0ZUlEOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIC4uLnBhcmFtczogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIFJlZ2lzdGVyU3RhdGUoc3RhdGU6IGltcG9ydChcIi4vRlNNU3RhdGVcIikuZGVmYXVsdDxUPik6IGltcG9ydChcIi4vRlNNU3RhdGVcIikuZGVmYXVsdDxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLkZTTS5SZWdpc3RlclN0YXRlKHN0YXRlKTtcbiAgICB9XG4gICAgVW5yZWdpc3RlclN0YXRlKHN0YXRlOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4pIHtcbiAgICAgICAgdGhpcy5GU00uVW5yZWdpc3RlclN0YXRlKHN0YXRlKTtcbiAgICB9XG4gICAgR2V0Q3VyU3RhdGVJRCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5GU00uR2V0Q3VyU3RhdGVJRCgpO1xuICAgIH1cbiAgICBHZXRDdXJTdGF0ZSgpOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5GU00uR2V0Q3VyU3RhdGUoKTtcbiAgICB9XG59XG4iXX0=