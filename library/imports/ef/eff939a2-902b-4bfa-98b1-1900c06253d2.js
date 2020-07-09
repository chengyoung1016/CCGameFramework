"use strict";
cc._RF.push(module, 'eff93mikCtL+pixGQDAYlPS', 'NetMessageError');
// script/netMessage/NetMessageError.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NetMessageError = /** @class */ (function () {
    function NetMessageError(err, message) {
        this.err = err;
        this.message = message;
    }
    NetMessageError = __decorate([
        ccclass
    ], NetMessageError);
    return NetMessageError;
}());
exports.default = NetMessageError;

cc._RF.pop();