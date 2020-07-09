
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/netMessage/IBuilder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbmV0TWVzc2FnZS9JQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFLLFVBR0o7QUFIRCxXQUFLLFVBQVU7SUFDYiwyQkFBYSxDQUFBO0lBQ2IsbUNBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUhJLFVBQVUsS0FBVixVQUFVLFFBR2Q7QUF1R29CLGdDQUFVO0FBckcvQixlQUFlO0FBQ2YsaUNBQWlDO0FBQ2pDLElBQUssV0E0Rko7QUE1RkQsV0FBSyxXQUFXO0lBQ1osVUFBVTtJQUNWLG9DQUFxQixDQUFBO0lBQ3JCLFdBQVc7SUFDWCxtREFBb0MsQ0FBQTtJQUNwQyxPQUFPO0lBQ1AsNENBQTZCLENBQUE7SUFDN0IsT0FBTztJQUNQLDBDQUEyQixDQUFBO0lBQzNCLE9BQU87SUFDUCxzREFBdUMsQ0FBQTtJQUN2Qyw0Q0FBNkIsQ0FBQTtJQUM3Qix1Q0FBd0IsQ0FBQTtJQUN4QixPQUFPO0lBQ1AsbUVBQW9ELENBQUE7SUFDcEQsMkNBQTRCLENBQUE7SUFDNUIseUNBQTBCLENBQUE7SUFDMUIscURBQXNDLENBQUE7SUFDdEMsaURBQWtDLENBQUE7SUFFbEMsU0FBUztJQUNULHFEQUFzQyxDQUFBO0lBQ3RDLDJEQUE0QyxDQUFBO0lBQzVDLDJEQUE0QyxDQUFBO0lBQzVDLHlEQUEwQyxDQUFBO0lBQzFDLFNBQVM7SUFDVCxpREFBa0MsQ0FBQTtJQUNsQywrREFBZ0QsQ0FBQTtJQUNoRCxvQkFBb0I7SUFDcEIsbUVBQW9ELENBQUE7SUFDcEQsMkRBQTRDLENBQUE7SUFDNUMsNkNBQThCLENBQUE7SUFDOUIsbUVBQW9ELENBQUE7SUFDcEQsdUZBQXdFLENBQUE7SUFDeEUseURBQTBDLENBQUE7SUFDMUMscURBQXNDLENBQUE7SUFDdEMsNkRBQThDLENBQUE7SUFDOUMsZ0VBQWlELENBQUE7SUFFakQsbUNBQW1DO0lBQ25DLE1BQU07SUFDTiwrREFBZ0QsQ0FBQTtJQUNoRCxxREFBc0MsQ0FBQTtJQUN0QywyREFBNEMsQ0FBQTtJQUM1QywrREFBZ0QsQ0FBQTtJQUVoRCxJQUFJO0lBQ0osMERBQTJDLENBQUE7SUFDM0MsOERBQStDLENBQUE7SUFFL0MsSUFBSTtJQUNKLGlFQUFrRCxDQUFBO0lBQ2xELCtFQUFnRSxDQUFBO0lBQ2hFLDZEQUE4QyxDQUFBO0lBQzlDLDZEQUE4QyxDQUFBO0lBQzlDLGlFQUFrRCxDQUFBO0lBQ2xELGlFQUFrRCxDQUFBO0lBQ2xELHVEQUF3QyxDQUFBO0lBRXhDLFFBQVE7SUFDUixpRUFBa0QsQ0FBQTtJQUNsRCw2REFBOEMsQ0FBQTtJQUM5Qyw2REFBOEMsQ0FBQTtJQUM5QyxpRUFBa0QsQ0FBQTtJQUNsRCx5RUFBMEQsQ0FBQTtJQUMxRCxpRkFBaUUsQ0FBQTtJQUVqRSxNQUFNO0lBQ04sa0VBQW1ELENBQUE7SUFDbkQsdUVBQXdELENBQUE7SUFFeEQsSUFBSTtJQUNKLG1EQUFvQyxDQUFBO0lBQ3BDLHVEQUF3QyxDQUFBO0lBQ3hDLHFEQUFzQyxDQUFBO0lBQ3RDLGdFQUFpRCxDQUFBO0lBRWpELEtBQUs7SUFDTCxtRUFBb0QsQ0FBQTtJQUVwRCxLQUFLO0lBQ0wsbUZBQW9FLENBQUE7SUFFcEUsdUVBQXVFO0lBQ3ZFLHNFQUF1RCxDQUFBO0lBQ3ZELHdFQUF5RCxDQUFBO0lBQ3pELHVEQUF3QyxDQUFBO0lBQ3hDLHlEQUEwQyxDQUFBO0lBQzFDLHFEQUFzQyxDQUFBO0lBQ3RDLDJEQUE0QyxDQUFBO0lBQzVDLHFEQUFzQyxDQUFBO0lBQ3RDLHVFQUF1RTtBQUMzRSxDQUFDLEVBNUZJLFdBQVcsS0FBWCxXQUFXLFFBNEZmO0FBT08sa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05ldEJhc2VNZXNzYWdlLCBOZXRCYXNlUmVxLCBOZXRCYXNlUmVzcE50Zn0gZnJvbSAnLi9NZXNzYWdlJ1xuZW51bSBDb2RlRm9ybWF0IHtcbiAgSlNPTiA9ICdKU09OJyxcbiAgUHJvdG9idWYgPSAnUHJvdG9idWYnXG59XG5cbi8v5oi/6Ze05qih5byPIEZhcm1Sb29tXG4vL+acrOWcsOiBlOiwgyAgQnVpbGRpbmcgIEJ1aWxkaW5nQWJpbGl0eVxuZW51bSBNZXNzYWdlVHlwZSB7XG4gICAgLy8g5pyq55+l55qE5pyN5Yqh5pa55rOVXG4gICAgVW5rbm93biA9IFwiSERfVW5rb3duXCIsXG4gICAgLy8g5bu656uL6L+e5o6l5oiQ5Yqf6Kem5Y+RXG4gICAgSGVsbG9Xb3JsZF9TYXkgPSBcIkhlbGxvV29ybGQvSERfU2F5XCIsXG4gICAgLy8g55So5oi355m75b2VXG4gICAgQXV0aF9Mb2dpbiA9IFwiTG9naW4vSERfTG9naW5cIixcbiAgICAvLyDnlKjmiLfpibTmnYNcbiAgICBBdXRoX0F1dGggPSBcIkxvZ2luL0hEX0F1dGhcIixcbiAgICAvLyDmtYvor5Xmtojmga9cbiAgICBNU0dfUk9PTUlORk8gPSBcIkxvZ2luL0hEX01TR19ST09NX0lORk9cIixcbiAgICBDdXN0b21SRVEgPSBcIkxvZ2luL0hEX0N1c3RvbVwiLFxuICAgIEhlbGxvID0gXCJMb2dpbi9IRF9IZWxsb1wiLFxuICAgIC8vIOWKoOWFpeaIv+mXtFxuICAgIEhEX0dldEF2YWlsYWJsZVRhYmxlID0gXCJNYXRyaXgvSERfR2V0QXZhaWxhYmxlVGFibGVcIixcbiAgICBIRF9FbnRlciA9IFwiTWF0cml4L0hEX0VudGVyXCIsXG4gICAgSERfRXhpdCA9IFwiTWF0cml4L0hEX0V4aXRcIixcbiAgICBNU0dfSm9pblJvb20gPSBcIkxvZ2luL0hEX01TR19Kb2luUm9vbVwiLFxuICAgIE1TR19PbkVudGVyID0gXCJNYXRyaXgvTVNHX09uRW50ZXJcIixcblxuICAgIC8vIOi/m+WFpea4uOaIj+aIv+mXtFxuICAgIEhEX0VudGVyR2FtZSA9IFwiRmFybVJvb20vSERfRW50ZXJHYW1lXCIsXG4gICAgSERfTVNHX1Jvb21fT25FbnRlciA9IFwiRmFybVJvb20vTVNHX09uRW50ZXJcIixcbiAgICBIRF9NU0dfUm9vbV9PblBhdXNlID0gXCJGYXJtUm9vbS9NU0dfT25QYXVzZVwiLFxuICAgIEhEX01TR19Sb29tX09uU3RvcCA9IFwiRmFybVJvb20vTVNHX09uU3RvcFwiLFxuICAgIC8vIHBsYXllclxuICAgIEhEX1Rlc3RTYXkgPSBcIkZhcm1Sb29tL0hEX1Rlc3RTYXlcIixcbiAgICBIRF9NU0dfUGxheWVySW5mbyA9IFwiRmFybVJvb20vSERfTVNHX1BsYXllckluZm9cIixcbiAgICAvLyBidWlsZGluZyAgICAgICAgIFxuICAgIEhEX01TR19CdWlsZGluZ0xpc3QgPSBcIkZhcm1Sb29tL0hEX01TR19CdWlsZGluZ0xpc3RcIixcbiAgICBIRF9DYW5CdWlsZExpc3QgPSBcIkZhcm1Sb29tL0hEX0NhbkJ1aWxkTGlzdFwiLCAgICAgICAgIC8v6ZW/5oyJ56m65Zyw6K+35rGC55qE5bu66YCg5YiX6KGoXG4gICAgSERfQnVpbGQgPSBcIkZhcm1Sb29tL0hEX0J1aWxkXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+35rGC5bu66YCgXG4gICAgSERfQnVpbGRDb21wbGV0ZUltbSA9IFwiRmFybVJvb20vSERfQnVpbGRDb21wbGV0ZUltbVwiLCAgICAgICAgIC8v56uL5Y2z5a6M5oiQIO+8iOWKoOmAn++8iVxuICAgIEhEX01TR19CVUlMRElOR19TVEFURV9DSEFOR0VEID0gXCJGYXJtUm9vbS9IRF9NU0dfQlVJTERJTkdfU1RBVEVfQ0hBTkdFRFwiLCAgICAgIC8v5bu6562R54mp55qE5bu66YCg54q25oCBXG4gICAgSERfUHJlQ29tcGxldGUgPSBcIkZhcm1Sb29tL0hEX1ByZUNvbXBsZXRlXCIsICAgICAgICAgICAgICAgICAgIC8v6K+35rGC5o+t5bmVXG4gICAgSERfQnVpbGRFZGl0ID0gXCJGYXJtUm9vbS9IRF9CdWlsZEVkaXRcIiwgICAgICAgICAgICAgICAgICAgICAgIC8v6K+35rGC57yW6L6RXG4gICAgSERfQnVpbGRSZWNvdmVyeSA9IFwiRmFybVJvb20vSERfQnVpbGRSZWNvdmVyeVwiLCAgICAgICAgICAgICAgIC8v6K+35rGC5Zue5pS2XG4gICAgSERfQnVpbGRpbmdVcGdyYWRlID0gXCJGYXJtUm9vbS9IRF9CdWlsZFVwZ3JhZGluZ1wiLCAgICAgICAgICAgICAvL+ivt+axguWNh+e6p1xuICAgIFxuICAgIC8vIEJ1aWxkaW5nICAg5YmN57yA5YqgSERfTVNHX+eahOS7o+ihqOacjeWKoeWZqOS4u+WKqOS4i+WPkeeahFxuICAgIC8v5bqE5Zut5LmL5b+DXG4gICAgSERfSG9tZUNlbnRlckluZm8gPSBcIkZhcm1Sb29tL0hEX01hbm9ySGVhcnRJbmZvXCIsICAgICAgICAvL+W6hOWbreS5i+W/g1xuICAgIEhEX0F2YXRhcklkcyA9IFwiRmFybVJvb20vSERfQXZhdGFySWRzXCIsICAgICAgICAgICAgICAgICAgLy/lpLTlg4/liJfooahcbiAgICBIRF9VcGRhdGVBdmF0YXIgPSBcIkZhcm1Sb29tL0hEX1VwZGF0ZUF2YXRhclwiLCAgICAgICAgICAgIC8v5L+u5pS55aS05YOPXG4gICAgSERfVXBkYXRlTmlja05hbWUgPSBcIkZhcm1Sb29tL0hEX1VwZGF0ZU5pY2tOYW1lXCIsICAgICAgICAvL+S/ruaUueaYteensFxuXG4gICAgLy/osLfku5NcbiAgICBIRF9CcmVhZEJhc2tldEluZm8gPSBcIkZhcm1Sb29tL0hEX0Jhcm5JbmZvXCIsICAgICAgICAgICAgIC8v6K+35rGC6LC35LuT5L+h5oGvXG4gICAgSERfQnJlYWRCYXNrZXRDcm9wU2VsbCA9IFwiRmFybVJvb20vSERfQmFyblNlbGxcIiwgICAgICAgICAgICAgICAgICAgIC8v5Ye65ZSuXG5cbiAgICAvL+iAleWcsFxuICAgIEhEX1Bsb3dMYW5kc1N0YXRlID0gXCJGYXJtUm9vbS9IRF9BcmFibGVMYW5kc1N0YXRlXCIsICAgIC8v6K+35rGC6ICV5Zyw5L+h5oGvXG4gICAgSERfTVNHX0NST1BfU1RBVEVfQ0hBTkdFRCA9IFwiRmFybVJvb20vSERfTVNHX0NST1BfU1RBVEVfQ0hBTkdFRFwiLCAvL+WGnOS9nOeJqeeKtuaAgeS/oeaBr+aUueWPmFxuICAgIEhEX1Nob3dQbGFuQ3JvcHMgPSBcIkZhcm1Sb29tL0hEX1Nob3dQbGFuQ3JvcHNcIiwgICAgICAgIC8v5pi+56S655qE56eN5qSN5Yac5L2c54mp5YiX6KGoXG4gICAgSERfUGxhbkNyb3BTdGFydCA9IFwiRmFybVJvb20vSERfUGxhbkNyb3BTdGFydFwiLCAgICAgICAgLy/lvIDlp4vnp43mpI3lhpzkvZznialcbiAgICBIRF9QbGFuQ3JvcFNwZWVkVXAgPSBcIkZhcm1Sb29tL0hEX1BsYW5Dcm9wU3BlZWRVcFwiLCAgICAvL+WKoOmAn+WGnOS9nOeJqVxuICAgIEhEX1BsYW5Dcm9wSGFydmVzdCA9IFwiRmFybVJvb20vSERfUGxhbkNyb3BIYXJ2ZXN0XCIsICAgIC8v5pS26I635Yac5L2c54mpXG4gICAgSERfVW5sb2NrQ3JvcCA9IFwiRmFybVJvb20vSERfVW5sb2NrQ3JvcFwiLCAgICAgICAgICAgICAgLy/op6PplIHlhpzkvZznialcblxuICAgIC8vIOS7u+WKoeetieebuOWFs1xuICAgIEhEX01TR19RdWVzdFVwZGF0ZSA9IFwiRmFybVJvb20vSERfTVNHX1F1ZXN0VXBkYXRlXCIsIC8vIOS7u+WKoeaVsOaNruaUueWPmOabtOaWsOWQjOmAmuefpVxuICAgIEhEX01TR19RdWVzdExpc3QgPSBcIkZhcm1Sb29tL0hEX01TR19RdWVzdExpc3RcIiwgLy8g5b2T5YmN546p5a625Lu75Yqh5YiX6KGo5L+h5oGvXG4gICAgSERfTVNHX1Bob25lQ2FsbCA9IFwiRmFybVJvb20vSERfTVNHX1Bob25lQ2FsbFwiLCAgLy8g546p5a625pS25YiwTlBD55qE55S16K+dXG4gICAgSERfRGlhbG9nU3RhZ2VEb25lID0gXCJGYXJtUm9vbS9IRF9EaWFsb2dTdGFnZURvbmVcIiwgLy8g546p5a625Lu75Yqh5a+56K+d57uT5p2fXG4gICAgSERfUXVlc3RHYWluRXh0cmFBd2FyZCA9IFwiRmFybVJvb20vSERfUXVlc3RHYWluRXh0cmFBd2FyZFwiLCAvLyDor7fmsYLkuIDmrKHpop3lpJblpZblirHpooblj5ZcbiAgICBIRF9RdWVzdEdhaW5EYWlseUNpcmNsZU9uZSA9XCJGYXJtUm9vbS9IRF9RdWVzdEdhaW5EYWlseUNpcmNsZU9uZVwiLCAvLyDor7fmsYLkuIDkuKrml6XluLjlvqrnjq/ku7vliqFcbiBcbiAgICAvL+WNleivjeazoeazoVxuICAgIEhEX0dldFdvcmRQb3B1cFJld2FyZCA9IFwiRmFybVJvb20vSERfV29yZEJ1YmJsZUVuZFwiLCAgICAgICAgICAgIC8v6K+35rGC6I635b6X5Y2V6K+N5rOh5rOh5aWW5YqxXG4gICAgSERfTVNHX1dvcmRQb3B1cCA9IFwiRmFybVJvb20vSERfTVNHX1dPUkRfQlVCQkxFX0NIQU5HRURcIiwgICAgICAgLy/mnI3liqHnq6/kuIvlj5HnmoTljZXor43ms6Hms6Hkv6Hmga9cblxuICAgIC8v6YKu566xXG4gICAgSERfTWFpbExpc3QgPSBcIkZhcm1Sb29tL0hEX01haWxMaXN0XCIsICAgICAgICAgICAgICAgICAgLy/pgq7ku7bliJfooahcbiAgICBIRF9NYWlsRGV0YWlsID0gXCJGYXJtUm9vbS9IRF9NYWlsRGV0YWlsXCIsICAgICAgICAgICAgICAvL+mCruS7tuivpue7huS/oeaBr1xuICAgIEhEX1JlYWRNYWlsID0gXCJGYXJtUm9vbS9IRF9SZWFkZXJNYWlsXCIsICAgICAgICAgICAgICAvL+mCruS7tuW3suivu1xuICAgIEhEX0dldE1haWxBdHRhY2hNZW50ID0gXCJGYXJtUm9vbS9IRF9SZWNlaXZlQW5uZXhcIiwgICAgICAgICAvL+iOt+WPlumCruS7tumZhOS7tlxuXG4gICAgLy/lrqPkvKDmoI9cbiAgICBIRF9VcGRhdGVCaWxsYm9hcmRzID0gXCJGYXJtUm9vbS9IRF9VcGRhdGVCaWxsYm9hcmRzXCIsICAgICAvL+abtOaWsOWuo+S8oOagj+S/oeaBr1xuXG4gICAgLy8g6LSn5biBXG4gICAgSERfTVNHX0N1cnJlbmN5U3RhdGVDaGFuZ2VkID0gXCJGYXJtUm9vbS9IRF9NU0dfQ3VycmVuY3lTdGF0ZUNoYW5nZWRcIiwgLy8g6LSn5biB5raI6ICXXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKui4ouWNoeS6kuWKqOWNleivjSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEhEX01hdExlYXJuUHJvZ3Jlc3MgPSBcIkZhcm1Sb29tL0hEX01hdExlYXJuaW5nUHJvZ3Jlc3NcIiwgICAgICAgLy/or7fmsYLmlZnmnZDlrabkuaDov5vluqZcbiAgICBIRF9Vbml0TGVhcm5Qcm9ncmVzcyA9IFwiRmFybVJvb20vSERfVW5pdExlYXJuaW5nUHJvZ3Jlc3NcIiwgICAgIC8v6K+35rGC5Y2V5YWD5a2m5Lmg6L+b5bqmXG4gICAgSERfR2FtZVVwbG9hZCA9IFwiRmFybVJvb20vSERfR2FtZVVwbG9hZFwiLCAgICAgICAgICAgICAgICAgICAvL+S4iuS8oOa4uOaIj+aVsOaNrlxuICAgIEhEX1N0dWR5VXBsb2FkID0gXCJGYXJtUm9vbS9IRF9TdHVkeVVwbG9hZFwiLCAgICAgICAgICAgICAgICAgLy/kuIrkvKDlrabkuaDmlbDmja5cbiAgICBIRF9HYW1lV29yZHMgPSBcIkZhcm1Sb29tL0hEX0dhbWVXb3Jkc1wiLCAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5Y2V6K+NXG4gICAgSERfTWF0ZXJpYWxMaXN0ID0gXCJGYXJtUm9vbS9IRF9NYXRlcmlhbExpc3RcIiwgICAgICAgICAgICAgICAvL+iOt+WPluaVmeadkOWIl+ihqFxuICAgIEhEX1VwZGF0ZU1hdCA9IFwiRmFybVJvb20vSERfVXBkYXRlTWF0XCIsICAgICAgICAgICAgICAgICAgICAgLy/kv67mlLnmlZnmnZBcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKui4ouWNoeS6kuWKqOWNleivjSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xufVxuaW50ZXJmYWNlIElNZXNzYWdlQnVpbGRlciB7XG4gIEJ1aWxkTWVzc2FnZSh0b3BpYyA6IHN0cmluZywgaWQ6IG51bWJlciwgcGF5bG9hZDogVWludDhBcnJheSk6IE5ldEJhc2VNZXNzYWdlO1xuXG4gIEJ1aWxkUmVxdWVzdCh0b3BpYyA6IHN0cmluZykgOiBOZXRCYXNlUmVxO1xuICBCdWlsZFJlc3BvbnNlKHRvcGljIDogc3RyaW5nLCBpZCA6IG51bWJlciwgcGF5bG9hZCA6IFVpbnQ4QXJyYXkpIDogTmV0QmFzZVJlc3BOdGY7XG59XG5leHBvcnQge01lc3NhZ2VUeXBlLCBDb2RlRm9ybWF0fVxuZXhwb3J0IGRlZmF1bHQgSU1lc3NhZ2VCdWlsZGVyIl19