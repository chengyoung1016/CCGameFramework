
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL1NpbmdsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBTlUscUJBQVcsR0FBbEI7UUFDSSxJQUFHLENBQU8sSUFBSyxDQUFDLFFBQVEsRUFBQztZQUNmLElBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUNELE9BQWEsSUFBSyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbntcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VCBleHRlbmRzIHt9Pih0aGlzIDogbmV3ICgpID0+IFQpOiBUIHtcbiAgICAgICAgaWYoISg8YW55PnRoaXMpLmluc3RhbmNlKXtcbiAgICAgICAgICAgICg8YW55PnRoaXMpLmluc3RhbmNlID0gbmV3IHRoaXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxhbnk+dGhpcykuaW5zdGFuY2U7XG4gICAgfVxufVxuIl19