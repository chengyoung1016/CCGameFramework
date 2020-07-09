"use strict";
cc._RF.push(module, 'e3c66Tuf4NF4Y7EGqDplcVi', 'Singleton');
// script/framework/utils/Singleton.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    };
    return Singleton;
}());
exports.default = Singleton;

cc._RF.pop();