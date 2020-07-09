
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/log/TKLogNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd29f8KwV95GT765WykLiESb', 'TKLogNative');
// script/framework/log/TKLogNative.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TKLogNone_1 = require("./TKLogNone");
var TimeUtil_1 = require("../time/TimeUtil");
var ITKLog_1 = require("./ITKLog");
var TKLogNative = /** @class */ (function (_super) {
    __extends(TKLogNative, _super);
    function TKLogNative() {
        var _this = _super.call(this) || this;
        _this.FOLDER_NAME = "logs";
        _this.logsFolderPath = "";
        _this.logsCacheMaxSize = 5 * 1024 * 1024;
        _this.logFileName = "log.txt";
        // this.logFile = true
        _this.logFileName = TimeUtil_1.default.NowDataYMDFormatString("_") + ".txt";
        _this.makeSureDirExist();
        _this.checkClearDirCache();
        return _this;
    }
    TKLogNative.prototype.LogInfo = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        _super.prototype.LogInfo.apply(this, __spreadArrays([msg], subst));
        if (this.logFile) {
            this.writeToLogFile.apply(this, __spreadArrays([ITKLog_1.LogLevel.Info, msg], subst));
        }
    };
    TKLogNative.prototype.LogDebug = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        _super.prototype.LogDebug.apply(this, __spreadArrays([msg], subst));
        if (this.logFile) {
            this.writeToLogFile.apply(this, __spreadArrays([ITKLog_1.LogLevel.Debug, msg], subst));
        }
    };
    TKLogNative.prototype.LogWarn = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        _super.prototype.LogWarn.apply(this, __spreadArrays([msg], subst));
        if (this.logFile) {
            this.writeToLogFile.apply(this, __spreadArrays([ITKLog_1.LogLevel.Warn, msg], subst));
        }
    };
    TKLogNative.prototype.LogErr = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        _super.prototype.LogErr.apply(this, __spreadArrays([msg], subst));
        if (this.logFile) {
            this.writeToLogFile.apply(this, __spreadArrays([ITKLog_1.LogLevel.Error, msg], subst));
        }
    };
    // 创建logs文件夹
    TKLogNative.prototype.makeSureDirExist = function () {
        var writeable_path = jsb.fileUtils.getWritablePath();
        this.logsFolderPath = writeable_path + this.FOLDER_NAME;
        if (!jsb.fileUtils.isDirectoryExist(this.logsFolderPath)) {
            jsb.fileUtils.createDirectory(this.logsFolderPath);
        }
    };
    // 检测是否删除日志文件
    TKLogNative.prototype.checkClearDirCache = function () {
        var _this = this;
        var totalSize = 0;
        var files = jsb.fileUtils.listFiles(this.logsFolderPath);
        // 遍历所有文件，计算占用空间大小
        files.forEach(function (file) {
            var strData = jsb.fileUtils.getStringFromFile(file);
            // this.LogInfo("file", file, jsb.fileUtils.getFileSize(file), strData.length)
            if (!file.endsWith("./")) {
                totalSize += jsb.fileUtils.getFileSize(file);
            }
        });
        // 超过大小，就删除以前的日志文件
        if (totalSize >= this.logsCacheMaxSize) {
            files.forEach(function (file) {
                if (file.indexOf(_this.logFileName) > 0) {
                }
                else {
                    jsb.fileUtils.removeFile(file);
                    _this.LogInfo("删除日志文件", file);
                }
            });
        }
    };
    TKLogNative.prototype.writeToLogFile = function (logLevel, msg) {
        var subst = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            subst[_i - 2] = arguments[_i];
        }
        var log = TimeUtil_1.default.NowDateFormatString();
        try {
            log += " [" + logLevel + "] " + JSON.stringify(msg);
            subst.forEach(function (item) {
                log += " " + JSON.stringify(item);
            });
        }
        catch (e) {
            log += " stringify exception ";
        }
        var filePath = this.logsFolderPath + "/" + this.logFileName;
        var str_data = jsb.fileUtils.getStringFromFile(filePath);
        // 如果太大，就截断
        if (str_data.length >= this.logsCacheMaxSize) {
            str_data = str_data.substr(str_data.length / 2);
        }
        jsb.fileUtils.writeStringToFile(str_data + "\n" + log, filePath);
    };
    return TKLogNative;
}(TKLogNone_1.default));
exports.default = TKLogNative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2xvZy9US0xvZ05hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBQ3BDLDZDQUF3QztBQUN4QyxtQ0FBb0M7QUFFcEM7SUFBeUMsK0JBQVM7SUFPOUM7UUFBQSxZQUNJLGlCQUFPLFNBT1Y7UUFiRCxpQkFBVyxHQUFZLE1BQU0sQ0FBQTtRQUM3QixvQkFBYyxHQUFZLEVBQUUsQ0FBQTtRQUM1QixzQkFBZ0IsR0FBWSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUMzQyxpQkFBVyxHQUFZLFNBQVMsQ0FBQTtRQUk1QixzQkFBc0I7UUFFdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtRQUVoRSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7SUFDOUIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxHQUFRO1FBQUUsZUFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw4QkFBZTs7UUFDN0IsaUJBQU0sT0FBTyw2QkFBQyxHQUFHLEdBQUssS0FBSyxHQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNiLElBQUksQ0FBQyxjQUFjLE9BQW5CLElBQUksa0JBQWdCLGlCQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBSyxLQUFLLEdBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBQ0QsOEJBQVEsR0FBUixVQUFTLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUM5QixpQkFBTSxRQUFRLDZCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FB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LFFBQVEsR0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUFBLE9BQU8sQ0FBQyxFQUFDO1lBQ04sR0FBRyxJQUFJLHVCQUF1QixDQUFBO1NBQ2pDO1FBRUQsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUNwRSxJQUFJLFFBQVEsR0FBWSxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLFdBQVc7UUFDWCxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFDO1lBQ3pDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDbEQ7UUFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDTCxrQkFBQztBQUFELENBbEdBLEFBa0dDLENBbEd3QyxtQkFBUyxHQWtHakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBUS0xvZ05vbmUgZnJvbSBcIi4vVEtMb2dOb25lXCI7XG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3RpbWUvVGltZVV0aWxcIjtcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSVRLTG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRLTG9nTmF0aXZlIGV4dGVuZHMgVEtMb2dOb25lIHtcblxuICAgIEZPTERFUl9OQU1FIDogc3RyaW5nID0gXCJsb2dzXCJcbiAgICBsb2dzRm9sZGVyUGF0aCA6IHN0cmluZyA9IFwiXCJcbiAgICBsb2dzQ2FjaGVNYXhTaXplIDogbnVtYmVyID0gNSAqIDEwMjQgKiAxMDI0XG4gICAgbG9nRmlsZU5hbWUgOiBzdHJpbmcgPSBcImxvZy50eHRcIlxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gdGhpcy5sb2dGaWxlID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMubG9nRmlsZU5hbWUgPSBUaW1lVXRpbC5Ob3dEYXRhWU1ERm9ybWF0U3RyaW5nKFwiX1wiKSArIFwiLnR4dFwiXG5cbiAgICAgICAgdGhpcy5tYWtlU3VyZURpckV4aXN0KCk7XG4gICAgICAgIHRoaXMuY2hlY2tDbGVhckRpckNhY2hlKCk7XG4gICAgfVxuXG4gICAgTG9nSW5mbyhtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyLkxvZ0luZm8obXNnLCAuLi5zdWJzdClcbiAgICAgICAgaWYgKHRoaXMubG9nRmlsZSl7XG4gICAgICAgICAgICB0aGlzLndyaXRlVG9Mb2dGaWxlKExvZ0xldmVsLkluZm8sIG1zZywgLi4uc3Vic3QpXG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9nRGVidWcobXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICBzdXBlci5Mb2dEZWJ1Zyhtc2csIC4uLnN1YnN0KVxuICAgICAgICBpZiAodGhpcy5sb2dGaWxlKXtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0xvZ0ZpbGUoTG9nTGV2ZWwuRGVidWcsbXNnLCAuLi5zdWJzdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2dXYXJuKG1zZzogYW55LCAuLi5zdWJzdDogYW55W10pIHtcbiAgICAgICAgc3VwZXIuTG9nV2Fybihtc2csIC4uLnN1YnN0KVxuICAgICAgICBpZiAodGhpcy5sb2dGaWxlKXtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0xvZ0ZpbGUoTG9nTGV2ZWwuV2Fybixtc2csIC4uLnN1YnN0KVxuICAgICAgICB9XG4gICAgfVxuICAgIExvZ0Vycihtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyLkxvZ0Vycihtc2csIC4uLnN1YnN0KVxuICAgICAgICBpZiAodGhpcy5sb2dGaWxlKXtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0xvZ0ZpbGUoTG9nTGV2ZWwuRXJyb3IsbXNnLCAuLi5zdWJzdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDliJvlu7psb2dz5paH5Lu25aS5XG4gICAgbWFrZVN1cmVEaXJFeGlzdCgpe1xuICAgICAgICB2YXIgd3JpdGVhYmxlX3BhdGggPSBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpO1xuICAgICAgICB0aGlzLmxvZ3NGb2xkZXJQYXRoID0gd3JpdGVhYmxlX3BhdGggKyB0aGlzLkZPTERFUl9OQU1FO1xuXG4gICAgICAgIGlmKCFqc2IuZmlsZVV0aWxzLmlzRGlyZWN0b3J5RXhpc3QodGhpcy5sb2dzRm9sZGVyUGF0aCkpIHtcbiAgICAgICAgICAgIGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KHRoaXMubG9nc0ZvbGRlclBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5rWL5piv5ZCm5Yig6Zmk5pel5b+X5paH5Lu2XG4gICAgY2hlY2tDbGVhckRpckNhY2hlKCkge1xuICAgICAgICBsZXQgdG90YWxTaXplIDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgZmlsZXMgOiBzdHJpbmdbXSA9IGpzYi5maWxlVXRpbHMubGlzdEZpbGVzKHRoaXMubG9nc0ZvbGRlclBhdGgpXG4gICAgICAgIC8vIOmBjeWOhuaJgOacieaWh+S7tu+8jOiuoeeul+WNoOeUqOepuumXtOWkp+Wwj1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgICAgbGV0IHN0ckRhdGEgOiBzdHJpbmcgPSBqc2IuZmlsZVV0aWxzLmdldFN0cmluZ0Zyb21GaWxlKGZpbGUpXG4gICAgICAgICAgICAvLyB0aGlzLkxvZ0luZm8oXCJmaWxlXCIsIGZpbGUsIGpzYi5maWxlVXRpbHMuZ2V0RmlsZVNpemUoZmlsZSksIHN0ckRhdGEubGVuZ3RoKVxuICAgICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKFwiLi9cIikpe1xuICAgICAgICAgICAgICAgIHRvdGFsU2l6ZSArPSBqc2IuZmlsZVV0aWxzLmdldEZpbGVTaXplKGZpbGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOi2hei/h+Wkp+Wwj++8jOWwseWIoOmZpOS7peWJjeeahOaXpeW/l+aWh+S7tlxuICAgICAgICBpZiAodG90YWxTaXplID49IHRoaXMubG9nc0NhY2hlTWF4U2l6ZSl7XG4gICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLmluZGV4T2YodGhpcy5sb2dGaWxlTmFtZSkgPiAwKXtcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBqc2IuZmlsZVV0aWxzLnJlbW92ZUZpbGUoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dJbmZvKFwi5Yig6Zmk5pel5b+X5paH5Lu2XCIsIGZpbGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cml0ZVRvTG9nRmlsZShsb2dMZXZlbCA6IExvZ0xldmVsLCBtc2cgOiBhbnksIC4uLnN1YnN0IDogYW55W10pe1xuICAgICAgICBsZXQgbG9nID0gVGltZVV0aWwuTm93RGF0ZUZvcm1hdFN0cmluZygpXG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9nICs9IFwiIFtcIiArIGxvZ0xldmVsICtcIl0gXCIgKyBKU09OLnN0cmluZ2lmeShtc2cpO1xuICAgICAgICAgICAgc3Vic3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBsb2cgKz0gXCIgXCIgKyBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1jYXRjaCAoZSl7XG4gICAgICAgICAgICBsb2cgKz0gXCIgc3RyaW5naWZ5IGV4Y2VwdGlvbiBcIlxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGxldCBmaWxlUGF0aCA6IHN0cmluZyA9IHRoaXMubG9nc0ZvbGRlclBhdGggKyBcIi9cIiArIHRoaXMubG9nRmlsZU5hbWVcbiAgICAgICAgdmFyIHN0cl9kYXRhIDogc3RyaW5nID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShmaWxlUGF0aCk7IFxuICAgICAgICAvLyDlpoLmnpzlpKrlpKfvvIzlsLHmiKrmlq1cbiAgICAgICAgaWYgKHN0cl9kYXRhLmxlbmd0aCA+PSB0aGlzLmxvZ3NDYWNoZU1heFNpemUpe1xuICAgICAgICAgICAgc3RyX2RhdGEgPSBzdHJfZGF0YS5zdWJzdHIoc3RyX2RhdGEubGVuZ3RoIC8gMilcbiAgICAgICAgfVxuICAgICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKHN0cl9kYXRhICsgXCJcXG5cIiArIGxvZywgZmlsZVBhdGgpO1xuICAgIH1cbn0iXX0=