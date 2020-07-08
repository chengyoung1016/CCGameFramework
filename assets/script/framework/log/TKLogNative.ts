
import TKLogNone from "./TKLogNone";
import TimeUtil from "../time/TimeUtil";
import { LogLevel } from "./ITKLog";

export default class TKLogNative extends TKLogNone {

    FOLDER_NAME : string = "logs"
    logsFolderPath : string = ""
    logsCacheMaxSize : number = 5 * 1024 * 1024
    logFileName : string = "log.txt"

    constructor(){
        super();
        // this.logFile = true

        this.logFileName = TimeUtil.NowDataYMDFormatString("_") + ".txt"

        this.makeSureDirExist();
        this.checkClearDirCache();
    }

    LogInfo(msg: any, ...subst: any[]) {
        super.LogInfo(msg, ...subst)
        if (this.logFile){
            this.writeToLogFile(LogLevel.Info, msg, ...subst)
        }
    }
    LogDebug(msg: any, ...subst: any[]) {
        super.LogDebug(msg, ...subst)
        if (this.logFile){
            this.writeToLogFile(LogLevel.Debug,msg, ...subst)
        }
    }
    LogWarn(msg: any, ...subst: any[]) {
        super.LogWarn(msg, ...subst)
        if (this.logFile){
            this.writeToLogFile(LogLevel.Warn,msg, ...subst)
        }
    }
    LogErr(msg: any, ...subst: any[]) {
        super.LogErr(msg, ...subst)
        if (this.logFile){
            this.writeToLogFile(LogLevel.Error,msg, ...subst)
        }
    }
    
    // 创建logs文件夹
    makeSureDirExist(){
        var writeable_path = jsb.fileUtils.getWritablePath();
        this.logsFolderPath = writeable_path + this.FOLDER_NAME;

        if(!jsb.fileUtils.isDirectoryExist(this.logsFolderPath)) {
            jsb.fileUtils.createDirectory(this.logsFolderPath);
        }
    }

    // 检测是否删除日志文件
    checkClearDirCache() {
        let totalSize : number = 0
        let files : string[] = jsb.fileUtils.listFiles(this.logsFolderPath)
        // 遍历所有文件，计算占用空间大小
        files.forEach(file => {
            let strData : string = jsb.fileUtils.getStringFromFile(file)
            // this.LogInfo("file", file, jsb.fileUtils.getFileSize(file), strData.length)
            if (!file.endsWith("./")){
                totalSize += jsb.fileUtils.getFileSize(file)
            }
        });

        // 超过大小，就删除以前的日志文件
        if (totalSize >= this.logsCacheMaxSize){
            files.forEach(file => {
                if (file.indexOf(this.logFileName) > 0){

                }else{
                    jsb.fileUtils.removeFile(file)
                    this.LogInfo("删除日志文件", file)
                }
            });
        }
    }

    writeToLogFile(logLevel : LogLevel, msg : any, ...subst : any[]){
        let log = TimeUtil.NowDateFormatString()
        
        try {
            log += " [" + logLevel +"] " + JSON.stringify(msg);
            subst.forEach(item => {
                log += " " + JSON.stringify(item)
            });
        }catch (e){
            log += " stringify exception "
        }
       
        let filePath : string = this.logsFolderPath + "/" + this.logFileName
        var str_data : string = jsb.fileUtils.getStringFromFile(filePath); 
        // 如果太大，就截断
        if (str_data.length >= this.logsCacheMaxSize){
            str_data = str_data.substr(str_data.length / 2)
        }
        jsb.fileUtils.writeStringToFile(str_data + "\n" + log, filePath);
    }
}