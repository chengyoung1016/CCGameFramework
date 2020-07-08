import ITKLog, { LogLevel, ITKLogListener } from "./ITKLog";
import TKLogWXMini from "./TKLogWXMini";
import TKLogWeb from "./TKLogWeb";
import TKLogNative from "./TKLogNative";
import TKLogNone from "./TKLogNone";


export enum LogTrace {
    console,
    wx,
}

export default class TKLog {
    // static logLevel : LogLevel = LogLevel.Info;
    // static logTrace : LogTrace = LogTrace.console;

    private static logger : ITKLog = null;
    private static getLogger() : ITKLog {
        if (this.logger != null) {
            return this.logger;
        }

        switch (cc.sys.platform){
            case cc.sys.WECHAT_GAME:
                this.logger = new TKLogWXMini()
                console.log("微信小游戏logger")
                break;
            case cc.sys.DESKTOP_BROWSER:
            case cc.sys.MOBILE_BROWSER:
                this.logger = new TKLogWeb()
                console.log("浏览器logger")
                break;
            default:
                if (cc.sys.isNative){
                    this.logger = new TKLogNative()
                    console.log("原生logger")
                }else{
                    this.logger = new TKLogNone()
                    console.log("默认logger")
                }
                break;
        }
        return this.logger
    }

    static SetLogLevel(logLevel : LogLevel) {
        this.getLogger().SetLogLevel(logLevel)
    }
    static SetLogFile(logFile : boolean){
        this.getLogger().SetLogFile(logFile)
    }

    // 只打印在console中的调试信息
    static LogDebug(msg : any, ...subst:any[]) {
        this.getLogger().LogDebug(msg, ...subst)
    }

    static LogInfo(msg: any, ...subst: any[]) {
        this.getLogger().LogInfo(msg, ...subst)
    }

    static LogWarn(msg:any, ...subst : any[]){
        this.getLogger().LogWarn(msg, ...subst)
    }

    static LogErr(msg:any, ...subst : any[]){
        this.getLogger().LogErr(msg, ...subst)
    }

    static ToDo(msg : any, ...subst : any[]){
        this.getLogger().ToDo(msg, ...subst)
    }

    static TagLog(tag : string, msg : any, ...subst : any[]){
        this.getLogger().TagLog(tag, msg, ...subst)
    }

    static RegisterLogListener(listener : ITKLogListener) {
        this.getLogger().RegisterLogListener(listener)
    }
    static UnRegisterLogListener(listener : ITKLogListener) {
        this.getLogger().UnRegisterLogListener(listener)
    }
}
