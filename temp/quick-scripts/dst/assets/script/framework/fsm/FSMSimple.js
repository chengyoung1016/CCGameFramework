
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/fsm/FSMSimple.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2ZzbS9GU01TaW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQW9EQSxDQUFDO0lBakRHLDJCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLEVBQUU7UUFDUixJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjtJQUVMLENBQUM7SUFDRCxpQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLFFBQXlDOztRQUFFLGdCQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLCtCQUFjOztRQUN2RSxDQUFBLEtBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQSxDQUFDLGlCQUFpQiwyQkFBQyxRQUFRLEdBQUssTUFBTSxHQUFFO0lBQ3BELENBQUM7SUFDRCx5Q0FBcUIsR0FBckIsVUFBc0IsT0FBZTs7UUFBRSxnQkFBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCwrQkFBYzs7UUFDakQsQ0FBQSxLQUFBLElBQUksQ0FBQyxHQUFHLENBQUEsQ0FBQyxxQkFBcUIsMkJBQUMsT0FBTyxHQUFLLE1BQU0sR0FBRTtJQUN2RCxDQUFDO0lBQ0QsK0JBQVcsR0FBWCxVQUFZLFFBQXlDOztRQUFFLGdCQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLCtCQUFjOztRQUNqRSxDQUFBLEtBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQSxDQUFDLFdBQVcsMkJBQUMsUUFBUSxHQUFLLE1BQU0sR0FBRTtJQUM5QyxDQUFDO0lBQ0QsbUNBQWUsR0FBZixVQUFnQixPQUFlOztRQUFFLGdCQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLCtCQUFjOztRQUMzQyxDQUFBLEtBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQSxDQUFDLGVBQWUsMkJBQUMsT0FBTyxHQUFLLE1BQU0sR0FBRTtJQUNqRCxDQUFDO0lBQ0QseUNBQXFCLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsUUFBeUMsRUFBRSxLQUFhO1FBQUUsZ0JBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsK0JBQWM7O1FBQ3JGLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsd0NBQW9CLEdBQXBCLFVBQXFCLE9BQWUsRUFBRSxLQUFhO1FBQUUsZ0JBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsK0JBQWM7O1FBQy9ELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLEtBQXNDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELG1DQUFlLEdBQWYsVUFBZ0IsS0FBc0M7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGlDQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELCtCQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQWpEZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9EN0I7SUFBRCxnQkFBQztDQXBERCxBQW9EQyxJQUFBO2tCQXBEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJRlNNIGZyb20gXCIuL0lGU01cIjtcbmltcG9ydCBGaW5pdGVTdGF0ZU1hY2hpbmUgZnJvbSBcIi4vRmluaXRlU3RhdGVNYWNoaW5lXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlNNU2ltcGxlPFQ+IGltcGxlbWVudHMgSUZTTTxUPiB7XG4gICAgcHJvdGVjdGVkIEZTTSA6IEZpbml0ZVN0YXRlTWFjaGluZTxUPjtcblxuICAgIEZTTUluaXQoKSB7XG5cbiAgICB9XG4gICBcbiAgICBGU01VcGRhdGUoZHQpIHtcbiAgICAgICAgaWYodGhpcy5GU00pe1xuICAgICAgICAgICAgdGhpcy5GU00uVXBkYXRlKGR0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgRlNNTGF0ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5GU00uTGF0ZVVwZGF0ZSgpO1xuICAgIH1cbiAgICBDaGFuZ2VHbG9iYWxTdGF0ZShuZXdTdGF0ZTogaW1wb3J0KFwiLi9GU01TdGF0ZVwiKS5kZWZhdWx0PFQ+LCAuLi5wYXJhbXM6IGFueSkge1xuICAgICAgICB0aGlzLkZTTS5DaGFuZ2VHbG9iYWxTdGF0ZShuZXdTdGF0ZSwgLi4ucGFyYW1zKTtcbiAgICB9XG4gICAgQ2hhbmdlR2xvYmFsU3RhdGVCeUlkKHN0YXRlSUQ6IG51bWJlciwgLi4ucGFyYW1zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5GU00uQ2hhbmdlR2xvYmFsU3RhdGVCeUlkKHN0YXRlSUQsIC4uLnBhcmFtcyk7XG4gICAgfVxuICAgIENoYW5nZVN0YXRlKG5ld1N0YXRlOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4sIC4uLnBhcmFtczogYW55KSB7XG4gICAgICAgIHRoaXMuRlNNLkNoYW5nZVN0YXRlKG5ld1N0YXRlLCAuLi5wYXJhbXMpO1xuICAgIH1cbiAgICBDaGFuZ2VTdGF0ZUJ5SWQoc3RhdGVJRDogbnVtYmVyLCAuLi5wYXJhbXM6IGFueSkge1xuICAgICAgICB0aGlzLkZTTS5DaGFuZ2VTdGF0ZUJ5SWQoc3RhdGVJRCwgLi4ucGFyYW1zKTtcbiAgICB9XG4gICAgUmV2ZXJ0VG9QcmV2aW91c1N0YXRlKCkge1xuICAgICAgICB0aGlzLkZTTS5SZXZlcnRUb1ByZXZpb3VzU3RhdGUoKTtcbiAgICB9XG4gICAgQ2hhbmdlU3RhdGVEZWxheShuZXdTdGF0ZTogaW1wb3J0KFwiLi9GU01TdGF0ZVwiKS5kZWZhdWx0PFQ+LCBkZWxheTogbnVtYmVyLCAuLi5wYXJhbXM6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgQ2hhbmdlU3RhdGVEZWxheUJ5SWQoc3RhdGVJRDogbnVtYmVyLCBkZWxheTogbnVtYmVyLCAuLi5wYXJhbXM6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBSZWdpc3RlclN0YXRlKHN0YXRlOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4pOiBpbXBvcnQoXCIuL0ZTTVN0YXRlXCIpLmRlZmF1bHQ8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5GU00uUmVnaXN0ZXJTdGF0ZShzdGF0ZSk7XG4gICAgfVxuICAgIFVucmVnaXN0ZXJTdGF0ZShzdGF0ZTogaW1wb3J0KFwiLi9GU01TdGF0ZVwiKS5kZWZhdWx0PFQ+KSB7XG4gICAgICAgIHRoaXMuRlNNLlVucmVnaXN0ZXJTdGF0ZShzdGF0ZSk7XG4gICAgfVxuICAgIEdldEN1clN0YXRlSUQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRlNNLkdldEN1clN0YXRlSUQoKTtcbiAgICB9XG4gICAgR2V0Q3VyU3RhdGUoKTogaW1wb3J0KFwiLi9GU01TdGF0ZVwiKS5kZWZhdWx0PFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRlNNLkdldEN1clN0YXRlKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==