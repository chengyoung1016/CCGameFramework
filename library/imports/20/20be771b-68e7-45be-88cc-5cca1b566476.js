"use strict";
cc._RF.push(module, '20be7cbaOdFvojMXMobVmR2', 'FSMState');
// script/framework/fsm/FSMState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FSMState = /** @class */ (function () {
    function FSMState() {
    }
    FSMState.prototype.RegisterState = function (entity) {
        this.entity = entity;
    };
    FSMState.prototype.Enter = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    FSMState.prototype.Excute = function (dt) { };
    FSMState.prototype.LateExcute = function () { };
    FSMState.prototype.Exit = function () { };
    return FSMState;
}());
exports.default = FSMState;

cc._RF.pop();