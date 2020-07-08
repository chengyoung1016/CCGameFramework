export default class TimeUtil {
    private static start_date = new Date();

    public static time() {
        return TimeUtil.GetSecWhenStart()
    }
    /**
     * 获取游戏开始到现在经历了多少秒
     */
    public static GetSecWhenStart() {
        return Math.floor(TimeUtil.GetMilSecWhenStart() / 1000)
    }
    /**
     * 获取游戏开始到现在经历了多少毫秒
     */
    public static GetMilSecWhenStart() {
        return Date.now() - this.start_date.valueOf();
    }
    /**
     * 获取格林威治时间秒数
     */
    public static NowSec() {
        return Math.floor(Date.now() / 1000)
    }

    /**
     * 获取当前时间的字符串格式 Year-Month-Day Hour:Minute:Second
     */
    public static NowDateFormatString(): string {
        let d = new Date();
        return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    }
    /**
     * 获取年月日的字符串格式，并使用split间隔
     * 比如split为 - 则返回 2020-2-2
     * @param split 间隔符号
     */
    public static NowDataYMDFormatString(split: string): string {
        let d = new Date();
        return d.getFullYear() + split + d.getMonth() + split + d.getDay()
    }

    public static formatSec(sec: number): string {
        const day = Math.floor(sec / 86400);
        const hour = Math.floor((sec - day * 86400) / 3600);
        const minute = Math.floor((sec - day * 86400 - hour * 3600) / 60);
        const second = sec - day * 86400 - hour * 3600 - minute * 60;

        let strHour = hour.toString();
        if (hour < 10) {
            strHour = "0" + hour;
        }
        let strMinute = minute.toString();
        if (minute < 10) {
            strMinute = "0" + minute;
        }
        let strSecond = second.toString();
        if (second < 10) {
            strHour = "0" + second;
        }

        return `${strHour}:${strMinute}:${strSecond}`;
    }
}