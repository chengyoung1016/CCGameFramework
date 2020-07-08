import ITKLog, { LogLevel, ITKLogListener } from "./ITKLog";
import Emitter from "../event/Emitter";

export default class TKLogNone implements ITKLog{
    
    protected logLevel : LogLevel = LogLevel.Info;
    protected logFile : boolean = false;

    protected listeners : ITKLogListener[] = []

    SetLogLevel(level: LogLevel) {
        this.logLevel = level;
    }
    SetLogFile(logToFile: boolean) {
        this.logFile = logToFile;
    }
    LogInfo(msg: any, ...subst: any[]) {
        console.log(msg, ...subst)
        this.logCallback(LogLevel.Info, msg, ...subst)
    }
    LogDebug(msg: any, ...subst: any[]) {
        console.log(msg, ...subst)
        this.logCallback(LogLevel.Debug, msg, ...subst)
    }
    LogWarn(msg: any, ...subst: any[]) {
        console.warn(msg, ...subst)
        this.logCallback(LogLevel.Warn, msg, ...subst)
    }
    LogErr(msg: any, ...subst: any[]) {
        console.error(msg, ...subst)
        this.logCallback(LogLevel.Error, msg, ...subst)
    }
    ToDo(msg: any, ...subst: any[]) {
        this.LogWarn("TooooDooooo:"+msg, subst);
    }
    TagLog(tag: string, msg: any, ...subst: any[]) {
        this.LogInfo(tag+":" + msg, subst)
    }

    RegisterLogListener(listener: import("./ITKLog").ITKLogListener) {
        for(let i = 0; i < this.listeners.length; ++i){
            if(this.listeners[i] == listener){
                return
            }
        }
        this.listeners.push(listener)
    }
    UnRegisterLogListener(listener: import("./ITKLog").ITKLogListener) {
        this.listeners = this.listeners.filter(item => item !== listener)
    }
    
    private logCallback(level : LogLevel, msg : any, ...subst : any[]) {
        for(let i = 0; i < this.listeners.length; ++i){
            this.listeners[i].OnLoged(level, msg, ...subst)
        }
    }
}