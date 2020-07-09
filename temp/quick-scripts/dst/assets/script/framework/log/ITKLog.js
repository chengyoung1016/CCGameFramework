
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/log/ITKLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74282PK7zhOhYYEAm+gE0rO', 'ITKLog');
// script/framework/log/ITKLog.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["None"] = 4] = "None";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2xvZy9JVEtMb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFJLENBQUE7SUFDSix5Q0FBSyxDQUFBO0lBQ0wsdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCx1Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQU5XLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBTW5CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gICAgSW5mbyxcbiAgICBEZWJ1ZyxcbiAgICBXYXJuLFxuICAgIEVycm9yLFxuICAgIE5vbmUsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRLTG9nTGlzdGVuZXJ7XG4gICAgT25Mb2dlZChsZXZlbCA6IExvZ0xldmVsLCBtc2cgOiBhbnksIC4uLnN1YnN0OmFueVtdKVxufVxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElUS0xvZyB7XG4gICAgU2V0TG9nTGV2ZWwobGV2ZWwgOiBMb2dMZXZlbCk7XG4gICAgU2V0TG9nRmlsZShsb2dUb0ZpbGUgOiBib29sZWFuKTtcblxuICAgIC8vIOacieaXpeW/l+i+k+WHuuaXtuWbnuiwg+WHveaVsFxuICAgIC8vIOWHveaVsOWPguaVsOS4uiAoZXZlbnROYW1lIDogc3RyaW5nLCBsb2dMZXZlbCA6IExvZ0xldmVsLCBtc2cgOiBhbnksIC4uLnN1YnN0IDogYW55W10pXG4gICAgLy8gKOS6i+S7tuWQjeensCzmraTmnaHml6Xlv5fnrYnnuqcs5pel5b+X5YaF5a6577yM5pel5b+X5Y+C5pWwKVxuICAgIFJlZ2lzdGVyTG9nTGlzdGVuZXIobGlzdGVuZXIgOiBJVEtMb2dMaXN0ZW5lcilcbiAgICBVblJlZ2lzdGVyTG9nTGlzdGVuZXIobGlzdGVuZXIgOiBJVEtMb2dMaXN0ZW5lcilcbiAgICBcbiAgICBMb2dJbmZvKG1zZyA6IGFueSwgLi4uc3Vic3Q6YW55W10pO1xuICAgIExvZ0RlYnVnKG1zZyA6IGFueSwgLi4uc3Vic3Q6YW55W10pO1xuICAgIExvZ1dhcm4obXNnOmFueSwgLi4uc3Vic3QgOiBhbnlbXSk7XG4gICAgTG9nRXJyKG1zZzphbnksIC4uLnN1YnN0IDogYW55W10pO1xuICAgIFRvRG8obXNnIDogYW55LCAuLi5zdWJzdCA6IGFueVtdKTtcbiAgICBUYWdMb2codGFnIDogc3RyaW5nLCBtc2cgOiBhbnksIC4uLnN1YnN0IDogYW55W10pO1xufSJdfQ==