import ITKLog, { LogLevel } from "./ITKLog";
import TKLogNone from "./TKLogNone";

export default class TKLogWeb extends TKLogNone {
   
    SetLogFile(logToFile: boolean) {
        if (logToFile){
            this.LogWarn("Web暂不支持写日志到文件")
        }else{
            super.SetLogFile(logToFile)
        }
    }
    LogInfo(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Info){
            super.LogInfo(msg, ...subst)
        }
    }
    LogDebug(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Debug){
            super.LogDebug(msg, ...subst)
        }
    }
    LogWarn(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Warn){
            super.LogWarn(msg, ...subst)
        }
    }
    LogErr(msg: any, ...subst: any[]) {
        if (this.logLevel <= LogLevel.Error){
            super.LogErr(msg, ...subst)
        }
    }
}