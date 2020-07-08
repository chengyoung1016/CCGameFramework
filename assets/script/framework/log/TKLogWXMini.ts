import ITKLog, { LogLevel } from "./ITKLog";
import TKLogNone from "./TKLogNone";

export default class TKLogWXMini extends TKLogNone{
    
    SetLogFile(logToFile: boolean) {
        this.ToDo("还没有实现写入日志文件")
    }
    LogInfo(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Info) {
            var lm = this.getLogManager()
            if (lm && lm.log) {
                lm.log(msg, ...subst)
                super.LogInfo(msg, ...subst)
            } else {
                super.LogInfo(msg, ...subst)
            }
        }
    }
    LogDebug(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Debug) {
            var lm = this.getLogManager()
            if (lm && lm.log) {
                lm.log(msg, ...subst)
                super.LogDebug(msg, ...subst)
            } else {
                super.LogDebug(msg, ...subst)
            }
        }
    }
    LogWarn(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Warn) {
            var lm = this.getLogManager()
            if (lm && lm.log) {
                lm.log(msg, ...subst)
                super.LogWarn(msg, ...subst)
            } else {
                super.LogWarn(msg, ...subst)
            }
        }
    }
    LogErr(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Error) {
            var lm = this.getLogManager()
            if (lm && lm.log) {
                lm.log(msg, ...subst)
                super.LogErr(msg, ...subst)
            } else {
                super.LogErr(msg, ...subst)
            }
        }
    }

    private getLogManager() : LogManager {
        if (wx.getLogManager) {
            return wx.getLogManager({level:0})
        }
        return null
    }
    
}