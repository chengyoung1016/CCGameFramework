
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/fsm/FSMState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2ZzbS9GU01TdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrQkEsQ0FBQztJQWRVLGdDQUFhLEdBQXBCLFVBQXFCLE1BQVE7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUlNLHdCQUFLLEdBQVo7UUFBYSxnQkFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiwyQkFBZTs7SUFFNUIsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxFQUFFLElBQUUsQ0FBQztJQUNaLDZCQUFVLEdBQWpCLGNBQXFCLENBQUM7SUFDZix1QkFBSSxHQUFYLGNBQWMsQ0FBQztJQUVuQixlQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEZTTVN0YXRlPFQ+IHtcblxuICAgIHByb3RlY3RlZCBlbnRpdHkgOiBUO1xuXG4gICAgcHVibGljIFJlZ2lzdGVyU3RhdGUoZW50aXR5OlQpIHtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IFN0YXRlSUQoKTpudW1iZXIgO1xuXG4gICAgcHVibGljIEVudGVyKC4uLnBhcmFtcyA6IGFueSl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBFeGN1dGUoZHQpe31cbiAgICBwdWJsaWMgTGF0ZUV4Y3V0ZSgpIHt9XG4gICAgcHVibGljIEV4aXQoKXt9XG5cbn1cbiJdfQ==