
export enum LogLevel {
    Info,
    Debug,
    Warn,
    Error,
    None,
}

export interface ITKLogListener{
    OnLoged(level : LogLevel, msg : any, ...subst:any[])
}
export default interface ITKLog {
    SetLogLevel(level : LogLevel);
    SetLogFile(logToFile : boolean);

    // 有日志输出时回调函数
    // 函数参数为 (eventName : string, logLevel : LogLevel, msg : any, ...subst : any[])
    // (事件名称,此条日志等级,日志内容，日志参数)
    RegisterLogListener(listener : ITKLogListener)
    UnRegisterLogListener(listener : ITKLogListener)
    
    LogInfo(msg : any, ...subst:any[]);
    LogDebug(msg : any, ...subst:any[]);
    LogWarn(msg:any, ...subst : any[]);
    LogErr(msg:any, ...subst : any[]);
    ToDo(msg : any, ...subst : any[]);
    TagLog(tag : string, msg : any, ...subst : any[]);
}