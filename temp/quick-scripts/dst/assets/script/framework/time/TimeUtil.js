
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/time/TimeUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12d68xgCNtI3qygCqOlVZN0', 'TimeUtil');
// script/framework/time/TimeUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtil = /** @class */ (function () {
    function TimeUtil() {
    }
    TimeUtil.time = function () {
        return TimeUtil.GetSecWhenStart();
    };
    /**
     * 获取游戏开始到现在经历了多少秒
     */
    TimeUtil.GetSecWhenStart = function () {
        return Math.floor(TimeUtil.GetMilSecWhenStart() / 1000);
    };
    /**
     * 获取游戏开始到现在经历了多少毫秒
     */
    TimeUtil.GetMilSecWhenStart = function () {
        return Date.now() - this.start_date.valueOf();
    };
    /**
     * 获取格林威治时间秒数
     */
    TimeUtil.NowSec = function () {
        return Math.floor(Date.now() / 1000);
    };
    /**
     * 获取当前时间的字符串格式 Year-Month-Day Hour:Minute:Second
     */
    TimeUtil.NowDateFormatString = function () {
        var d = new Date();
        return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    };
    /**
     * 获取年月日的字符串格式，并使用split间隔
     * 比如split为 - 则返回 2020-2-2
     * @param split 间隔符号
     */
    TimeUtil.NowDataYMDFormatString = function (split) {
        var d = new Date();
        return d.getFullYear() + split + d.getMonth() + split + d.getDay();
    };
    TimeUtil.formatSec = function (sec) {
        var day = Math.floor(sec / 86400);
        var hour = Math.floor((sec - day * 86400) / 3600);
        var minute = Math.floor((sec - day * 86400 - hour * 3600) / 60);
        var second = sec - day * 86400 - hour * 3600 - minute * 60;
        var strHour = hour.toString();
        if (hour < 10) {
            strHour = "0" + hour;
        }
        var strMinute = minute.toString();
        if (minute < 10) {
            strMinute = "0" + minute;
        }
        var strSecond = second.toString();
        if (second < 10) {
            strHour = "0" + second;
        }
        return strHour + ":" + strMinute + ":" + strSecond;
    };
    TimeUtil.start_date = new Date();
    return TimeUtil;
}());
exports.default = TimeUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3RpbWUvVGltZVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBK0RBLENBQUM7SUE1RGlCLGFBQUksR0FBbEI7UUFDSSxPQUFPLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0lBQ0Q7O09BRUc7SUFDVyx3QkFBZSxHQUE3QjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBQ0Q7O09BRUc7SUFDVywyQkFBa0IsR0FBaEM7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDRDs7T0FFRztJQUNXLGVBQU0sR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNXLDRCQUFtQixHQUFqQztRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JJLENBQUM7SUFDRDs7OztPQUlHO0lBQ1csK0JBQXNCLEdBQXBDLFVBQXFDLEtBQWE7UUFDOUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDdEUsQ0FBQztJQUVhLGtCQUFTLEdBQXZCLFVBQXdCLEdBQVc7UUFDL0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFN0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNYLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUNiLFNBQVMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQzFCO1FBRUQsT0FBVSxPQUFPLFNBQUksU0FBUyxTQUFJLFNBQVcsQ0FBQztJQUNsRCxDQUFDO0lBN0RjLG1CQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQThEM0MsZUFBQztDQS9ERCxBQStEQyxJQUFBO2tCQS9Eb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVVdGlsIHtcbiAgICBwcml2YXRlIHN0YXRpYyBzdGFydF9kYXRlID0gbmV3IERhdGUoKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIFRpbWVVdGlsLkdldFNlY1doZW5TdGFydCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlua4uOaIj+W8gOWni+WIsOeOsOWcqOe7j+WOhuS6huWkmuWwkeenklxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0U2VjV2hlblN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihUaW1lVXRpbC5HZXRNaWxTZWNXaGVuU3RhcnQoKSAvIDEwMDApXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlua4uOaIj+W8gOWni+WIsOeOsOWcqOe7j+WOhuS6huWkmuWwkeavq+enklxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0TWlsU2VjV2hlblN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRfZGF0ZS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluagvOael+Wogeayu+aXtumXtOenkuaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTm93U2VjKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blvZPliY3ml7bpl7TnmoTlrZfnrKbkuLLmoLzlvI8gWWVhci1Nb250aC1EYXkgSG91cjpNaW51dGU6U2Vjb25kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBOb3dEYXRlRm9ybWF0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgZC5nZXRNb250aCgpICsgXCItXCIgKyBkLmdldERheSgpICsgXCIgXCIgKyBkLmdldEhvdXJzKCkgKyBcIjpcIiArIGQuZ2V0TWludXRlcygpICsgXCI6XCIgKyBkLmdldFNlY29uZHMoKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blubTmnIjml6XnmoTlrZfnrKbkuLLmoLzlvI/vvIzlubbkvb/nlKhzcGxpdOmXtOmalFxuICAgICAqIOavlOWmgnNwbGl05Li6IC0g5YiZ6L+U5ZueIDIwMjAtMi0yXG4gICAgICogQHBhcmFtIHNwbGl0IOmXtOmalOespuWPt1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTm93RGF0YVlNREZvcm1hdFN0cmluZyhzcGxpdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gZC5nZXRGdWxsWWVhcigpICsgc3BsaXQgKyBkLmdldE1vbnRoKCkgKyBzcGxpdCArIGQuZ2V0RGF5KClcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdFNlYyhzZWM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRheSA9IE1hdGguZmxvb3Ioc2VjIC8gODY0MDApO1xuICAgICAgICBjb25zdCBob3VyID0gTWF0aC5mbG9vcigoc2VjIC0gZGF5ICogODY0MDApIC8gMzYwMCk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IE1hdGguZmxvb3IoKHNlYyAtIGRheSAqIDg2NDAwIC0gaG91ciAqIDM2MDApIC8gNjApO1xuICAgICAgICBjb25zdCBzZWNvbmQgPSBzZWMgLSBkYXkgKiA4NjQwMCAtIGhvdXIgKiAzNjAwIC0gbWludXRlICogNjA7XG5cbiAgICAgICAgbGV0IHN0ckhvdXIgPSBob3VyLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChob3VyIDwgMTApIHtcbiAgICAgICAgICAgIHN0ckhvdXIgPSBcIjBcIiArIGhvdXI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0ck1pbnV0ZSA9IG1pbnV0ZS50b1N0cmluZygpO1xuICAgICAgICBpZiAobWludXRlIDwgMTApIHtcbiAgICAgICAgICAgIHN0ck1pbnV0ZSA9IFwiMFwiICsgbWludXRlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHJTZWNvbmQgPSBzZWNvbmQudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHNlY29uZCA8IDEwKSB7XG4gICAgICAgICAgICBzdHJIb3VyID0gXCIwXCIgKyBzZWNvbmQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7c3RySG91cn06JHtzdHJNaW51dGV9OiR7c3RyU2Vjb25kfWA7XG4gICAgfVxufSJdfQ==