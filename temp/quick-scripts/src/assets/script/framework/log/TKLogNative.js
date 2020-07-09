"use strict";
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