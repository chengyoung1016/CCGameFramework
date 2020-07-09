"use strict";
cc._RF.push(module, '387deMt+ytNeJ572J+Czhhh', 'IBuilder');
// script/netMessage/IBuilder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeFormat = exports.MessageType = void 0;
var CodeFormat;
(function (CodeFormat) {
    CodeFormat["JSON"] = "JSON";
    CodeFormat["Protobuf"] = "Protobuf";
})(CodeFormat || (CodeFormat = {}));
exports.CodeFormat = CodeFormat;
//房间模式 FarmRoom
//本地联调  Building  BuildingAbility
var MessageType;
(function (MessageType) {
    // 未知的服务方法
    MessageType["Unknown"] = "HD_Unkown";
    // 建立连接成功触发
    MessageType["HelloWorld_Say"] = "HelloWorld/HD_Say";
    // 用户登录
    MessageType["Auth_Login"] = "Login/HD_Login";
    // 用户鉴权
    MessageType["Auth_Auth"] = "Login/HD_Auth";
    // 测试消息
    MessageType["MSG_ROOMINFO"] = "Login/HD_MSG_ROOM_INFO";
    MessageType["CustomREQ"] = "Login/HD_Custom";
    MessageType["Hello"] = "Login/HD_Hello";
    // 加入房间
    MessageType["HD_GetAvailableTable"] = "Matrix/HD_GetAvailableTable";
    MessageType["HD_Enter"] = "Matrix/HD_Enter";
    MessageType["HD_Exit"] = "Matrix/HD_Exit";
    MessageType["MSG_JoinRoom"] = "Login/HD_MSG_JoinRoom";
    MessageType["MSG_OnEnter"] = "Matrix/MSG_OnEnter";
    // 进入游戏房间
    MessageType["HD_EnterGame"] = "FarmRoom/HD_EnterGame";
    MessageType["HD_MSG_Room_OnEnter"] = "FarmRoom/MSG_OnEnter";
    MessageType["HD_MSG_Room_OnPause"] = "FarmRoom/MSG_OnPause";
    MessageType["HD_MSG_Room_OnStop"] = "FarmRoom/MSG_OnStop";
    // player
    MessageType["HD_TestSay"] = "FarmRoom/HD_TestSay";
    MessageType["HD_MSG_PlayerInfo"] = "FarmRoom/HD_MSG_PlayerInfo";
    // building         
    MessageType["HD_MSG_BuildingList"] = "FarmRoom/HD_MSG_BuildingList";
    MessageType["HD_CanBuildList"] = "FarmRoom/HD_CanBuildList";
    MessageType["HD_Build"] = "FarmRoom/HD_Build";
    MessageType["HD_BuildCompleteImm"] = "FarmRoom/HD_BuildCompleteImm";
    MessageType["HD_MSG_BUILDING_STATE_CHANGED"] = "FarmRoom/HD_MSG_BUILDING_STATE_CHANGED";
    MessageType["HD_PreComplete"] = "FarmRoom/HD_PreComplete";
    MessageType["HD_BuildEdit"] = "FarmRoom/HD_BuildEdit";
    MessageType["HD_BuildRecovery"] = "FarmRoom/HD_BuildRecovery";
    MessageType["HD_BuildingUpgrade"] = "FarmRoom/HD_BuildUpgrading";
    // Building   前缀加HD_MSG_的代表服务器主动下发的
    //庄园之心
    MessageType["HD_HomeCenterInfo"] = "FarmRoom/HD_ManorHeartInfo";
    MessageType["HD_AvatarIds"] = "FarmRoom/HD_AvatarIds";
    MessageType["HD_UpdateAvatar"] = "FarmRoom/HD_UpdateAvatar";
    MessageType["HD_UpdateNickName"] = "FarmRoom/HD_UpdateNickName";
    //谷仓
    MessageType["HD_BreadBasketInfo"] = "FarmRoom/HD_BarnInfo";
    MessageType["HD_BreadBasketCropSell"] = "FarmRoom/HD_BarnSell";
    //耕地
    MessageType["HD_PlowLandsState"] = "FarmRoom/HD_ArableLandsState";
    MessageType["HD_MSG_CROP_STATE_CHANGED"] = "FarmRoom/HD_MSG_CROP_STATE_CHANGED";
    MessageType["HD_ShowPlanCrops"] = "FarmRoom/HD_ShowPlanCrops";
    MessageType["HD_PlanCropStart"] = "FarmRoom/HD_PlanCropStart";
    MessageType["HD_PlanCropSpeedUp"] = "FarmRoom/HD_PlanCropSpeedUp";
    MessageType["HD_PlanCropHarvest"] = "FarmRoom/HD_PlanCropHarvest";
    MessageType["HD_UnlockCrop"] = "FarmRoom/HD_UnlockCrop";
    // 任务等相关
    MessageType["HD_MSG_QuestUpdate"] = "FarmRoom/HD_MSG_QuestUpdate";
    MessageType["HD_MSG_QuestList"] = "FarmRoom/HD_MSG_QuestList";
    MessageType["HD_MSG_PhoneCall"] = "FarmRoom/HD_MSG_PhoneCall";
    MessageType["HD_DialogStageDone"] = "FarmRoom/HD_DialogStageDone";
    MessageType["HD_QuestGainExtraAward"] = "FarmRoom/HD_QuestGainExtraAward";
    MessageType["HD_QuestGainDailyCircleOne"] = "FarmRoom/HD_QuestGainDailyCircleOne";
    //单词泡泡
    MessageType["HD_GetWordPopupReward"] = "FarmRoom/HD_WordBubbleEnd";
    MessageType["HD_MSG_WordPopup"] = "FarmRoom/HD_MSG_WORD_BUBBLE_CHANGED";
    //邮箱
    MessageType["HD_MailList"] = "FarmRoom/HD_MailList";
    MessageType["HD_MailDetail"] = "FarmRoom/HD_MailDetail";
    MessageType["HD_ReadMail"] = "FarmRoom/HD_ReaderMail";
    MessageType["HD_GetMailAttachMent"] = "FarmRoom/HD_ReceiveAnnex";
    //宣传栏
    MessageType["HD_UpdateBillboards"] = "FarmRoom/HD_UpdateBillboards";
    // 货币
    MessageType["HD_MSG_CurrencyStateChanged"] = "FarmRoom/HD_MSG_CurrencyStateChanged";
    /*******************************踢卡互动单词********************************/
    MessageType["HD_MatLearnProgress"] = "FarmRoom/HD_MatLearningProgress";
    MessageType["HD_UnitLearnProgress"] = "FarmRoom/HD_UnitLearningProgress";
    MessageType["HD_GameUpload"] = "FarmRoom/HD_GameUpload";
    MessageType["HD_StudyUpload"] = "FarmRoom/HD_StudyUpload";
    MessageType["HD_GameWords"] = "FarmRoom/HD_GameWords";
    MessageType["HD_MaterialList"] = "FarmRoom/HD_MaterialList";
    MessageType["HD_UpdateMat"] = "FarmRoom/HD_UpdateMat";
    /*******************************踢卡互动单词********************************/
})(MessageType || (MessageType = {}));
exports.MessageType = MessageType;

cc._RF.pop();