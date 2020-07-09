import {NetBaseMessage, NetBaseReq, NetBaseRespNtf} from './Message'
enum CodeFormat {
  JSON = 'JSON',
  Protobuf = 'Protobuf'
}

//房间模式 FarmRoom
//本地联调  Building  BuildingAbility
enum MessageType {
    // 未知的服务方法
    Unknown = "HD_Unkown",
    // 建立连接成功触发
    HelloWorld_Say = "HelloWorld/HD_Say",
    // 用户登录
    Auth_Login = "Login/HD_Login",
    // 用户鉴权
    Auth_Auth = "Login/HD_Auth",
    // 测试消息
    MSG_ROOMINFO = "Login/HD_MSG_ROOM_INFO",
    CustomREQ = "Login/HD_Custom",
    Hello = "Login/HD_Hello",
    // 加入房间
    HD_GetAvailableTable = "Matrix/HD_GetAvailableTable",
    HD_Enter = "Matrix/HD_Enter",
    HD_Exit = "Matrix/HD_Exit",
    MSG_JoinRoom = "Login/HD_MSG_JoinRoom",
    MSG_OnEnter = "Matrix/MSG_OnEnter",

    // 进入游戏房间
    HD_EnterGame = "FarmRoom/HD_EnterGame",
    HD_MSG_Room_OnEnter = "FarmRoom/MSG_OnEnter",
    HD_MSG_Room_OnPause = "FarmRoom/MSG_OnPause",
    HD_MSG_Room_OnStop = "FarmRoom/MSG_OnStop",
    // player
    HD_TestSay = "FarmRoom/HD_TestSay",
    HD_MSG_PlayerInfo = "FarmRoom/HD_MSG_PlayerInfo",
    // building         
    HD_MSG_BuildingList = "FarmRoom/HD_MSG_BuildingList",
    HD_CanBuildList = "FarmRoom/HD_CanBuildList",         //长按空地请求的建造列表
    HD_Build = "FarmRoom/HD_Build",                               //请求建造
    HD_BuildCompleteImm = "FarmRoom/HD_BuildCompleteImm",         //立即完成 （加速）
    HD_MSG_BUILDING_STATE_CHANGED = "FarmRoom/HD_MSG_BUILDING_STATE_CHANGED",      //建筑物的建造状态
    HD_PreComplete = "FarmRoom/HD_PreComplete",                   //请求揭幕
    HD_BuildEdit = "FarmRoom/HD_BuildEdit",                       //请求编辑
    HD_BuildRecovery = "FarmRoom/HD_BuildRecovery",               //请求回收
    HD_BuildingUpgrade = "FarmRoom/HD_BuildUpgrading",             //请求升级
    
    // Building   前缀加HD_MSG_的代表服务器主动下发的
    //庄园之心
    HD_HomeCenterInfo = "FarmRoom/HD_ManorHeartInfo",        //庄园之心
    HD_AvatarIds = "FarmRoom/HD_AvatarIds",                  //头像列表
    HD_UpdateAvatar = "FarmRoom/HD_UpdateAvatar",            //修改头像
    HD_UpdateNickName = "FarmRoom/HD_UpdateNickName",        //修改昵称

    //谷仓
    HD_BreadBasketInfo = "FarmRoom/HD_BarnInfo",             //请求谷仓信息
    HD_BreadBasketCropSell = "FarmRoom/HD_BarnSell",                    //出售

    //耕地
    HD_PlowLandsState = "FarmRoom/HD_ArableLandsState",    //请求耕地信息
    HD_MSG_CROP_STATE_CHANGED = "FarmRoom/HD_MSG_CROP_STATE_CHANGED", //农作物状态信息改变
    HD_ShowPlanCrops = "FarmRoom/HD_ShowPlanCrops",        //显示的种植农作物列表
    HD_PlanCropStart = "FarmRoom/HD_PlanCropStart",        //开始种植农作物
    HD_PlanCropSpeedUp = "FarmRoom/HD_PlanCropSpeedUp",    //加速农作物
    HD_PlanCropHarvest = "FarmRoom/HD_PlanCropHarvest",    //收获农作物
    HD_UnlockCrop = "FarmRoom/HD_UnlockCrop",              //解锁农作物

    // 任务等相关
    HD_MSG_QuestUpdate = "FarmRoom/HD_MSG_QuestUpdate", // 任务数据改变更新同通知
    HD_MSG_QuestList = "FarmRoom/HD_MSG_QuestList", // 当前玩家任务列表信息
    HD_MSG_PhoneCall = "FarmRoom/HD_MSG_PhoneCall",  // 玩家收到NPC的电话
    HD_DialogStageDone = "FarmRoom/HD_DialogStageDone", // 玩家任务对话结束
    HD_QuestGainExtraAward = "FarmRoom/HD_QuestGainExtraAward", // 请求一次额外奖励领取
    HD_QuestGainDailyCircleOne ="FarmRoom/HD_QuestGainDailyCircleOne", // 请求一个日常循环任务
 
    //单词泡泡
    HD_GetWordPopupReward = "FarmRoom/HD_WordBubbleEnd",            //请求获得单词泡泡奖励
    HD_MSG_WordPopup = "FarmRoom/HD_MSG_WORD_BUBBLE_CHANGED",       //服务端下发的单词泡泡信息

    //邮箱
    HD_MailList = "FarmRoom/HD_MailList",                  //邮件列表
    HD_MailDetail = "FarmRoom/HD_MailDetail",              //邮件详细信息
    HD_ReadMail = "FarmRoom/HD_ReaderMail",              //邮件已读
    HD_GetMailAttachMent = "FarmRoom/HD_ReceiveAnnex",         //获取邮件附件

    //宣传栏
    HD_UpdateBillboards = "FarmRoom/HD_UpdateBillboards",     //更新宣传栏信息

    // 货币
    HD_MSG_CurrencyStateChanged = "FarmRoom/HD_MSG_CurrencyStateChanged", // 货币消耗

    /*******************************踢卡互动单词********************************/
    HD_MatLearnProgress = "FarmRoom/HD_MatLearningProgress",       //请求教材学习进度
    HD_UnitLearnProgress = "FarmRoom/HD_UnitLearningProgress",     //请求单元学习进度
    HD_GameUpload = "FarmRoom/HD_GameUpload",                   //上传游戏数据
    HD_StudyUpload = "FarmRoom/HD_StudyUpload",                 //上传学习数据
    HD_GameWords = "FarmRoom/HD_GameWords",                     //获取单词
    HD_MaterialList = "FarmRoom/HD_MaterialList",               //获取教材列表
    HD_UpdateMat = "FarmRoom/HD_UpdateMat",                     //修改教材
    /*******************************踢卡互动单词********************************/
}
interface IMessageBuilder {
  BuildMessage(topic : string, id: number, payload: Uint8Array): NetBaseMessage;

  BuildRequest(topic : string) : NetBaseReq;
  BuildResponse(topic : string, id : number, payload : Uint8Array) : NetBaseRespNtf;
}
export {MessageType, CodeFormat}
export default IMessageBuilder