"use strict";
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