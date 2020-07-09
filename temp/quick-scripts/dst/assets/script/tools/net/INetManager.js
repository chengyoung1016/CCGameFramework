
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tools/net/INetManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cb220qsI5HX4Soqz+EcrRd', 'INetManager');
// script/tools/net/INetManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetEventType = void 0;
var NetEventType;
(function (NetEventType) {
    // 建立连接成功触发
    NetEventType["OnOpen"] = "NetEventType_OnOpen";
    // 网络关闭时触发
    NetEventType["OnClose"] = "NetEventType_OnClose";
    // 系统级别的错误
    // 参数：err(Error)
    NetEventType["OnError"] = "NetEventType_OnError";
    // 收到网络消息时触发，事件名称实际为 NetEventType_OnMessage_【msgcode】 的形式
    // 参数:消息的JSONObj对象(any),err(NetMessageError)
    NetEventType["OnMessage"] = "NetEventType_OnMessage";
    //用户在其他设备登录了
    NetEventType["Unauthorized"] = "NetEventType_Unauthorized";
})(NetEventType = exports.NetEventType || (exports.NetEventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbHMvbmV0L0lOZXRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQVksWUFhWDtBQWJELFdBQVksWUFBWTtJQUNwQixXQUFXO0lBQ1gsOENBQThCLENBQUE7SUFDOUIsVUFBVTtJQUNWLGdEQUFnQyxDQUFBO0lBQ2hDLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0RBQWdDLENBQUE7SUFDaEMseURBQXlEO0lBQ3pELDRDQUE0QztJQUM1QyxvREFBb0MsQ0FBQTtJQUNwQyxZQUFZO0lBQ1osMERBQTBDLENBQUE7QUFDOUMsQ0FBQyxFQWJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBYXZCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0QmFzZVJlcSwgTmV0QmFzZU1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vbmV0TWVzc2FnZS9NZXNzYWdlXCI7XG5cbmV4cG9ydCBlbnVtIE5ldEV2ZW50VHlwZSB7XG4gICAgLy8g5bu656uL6L+e5o6l5oiQ5Yqf6Kem5Y+RXG4gICAgT25PcGVuID0gXCJOZXRFdmVudFR5cGVfT25PcGVuXCIsXG4gICAgLy8g572R57uc5YWz6Zet5pe26Kem5Y+RXG4gICAgT25DbG9zZSA9IFwiTmV0RXZlbnRUeXBlX09uQ2xvc2VcIixcbiAgICAvLyDns7vnu5/nuqfliKvnmoTplJnor69cbiAgICAvLyDlj4LmlbDvvJplcnIoRXJyb3IpXG4gICAgT25FcnJvciA9IFwiTmV0RXZlbnRUeXBlX09uRXJyb3JcIixcbiAgICAvLyDmlLbliLDnvZHnu5zmtojmga/ml7bop6blj5HvvIzkuovku7blkI3np7Dlrp7pmYXkuLogTmV0RXZlbnRUeXBlX09uTWVzc2FnZV/jgJBtc2djb2Rl44CRIOeahOW9ouW8j1xuICAgIC8vIOWPguaVsDrmtojmga/nmoRKU09OT2Jq5a+56LGhKGFueSksZXJyKE5ldE1lc3NhZ2VFcnJvcilcbiAgICBPbk1lc3NhZ2UgPSBcIk5ldEV2ZW50VHlwZV9Pbk1lc3NhZ2VcIixcbiAgICAvL+eUqOaIt+WcqOWFtuS7luiuvuWkh+eZu+W9leS6hlxuICAgIFVuYXV0aG9yaXplZCA9IFwiTmV0RXZlbnRUeXBlX1VuYXV0aG9yaXplZFwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJTmV0TWFuYWdlciB7XG4gICAgQ3JlYXRlSW5pdChwYXJhbXMgOiBhbnkpO1xuICAgIE9uT3BlbihtZXNzYWdlIDogYW55KTtcbiAgICBPbkNsb3NlKG1lc3NhZ2UgOiBhbnkpO1xuICAgIE9uTWVzc2FnZShtZXNzYWdlIDogYW55KTtcbiAgICBPbkVycm9yKG1lc3NhZ2UgOiBhbnkpO1xuICAgIFNlbmRSZXF1ZXN0KHJlcSA6IE5ldEJhc2VSZXEpO1xuICAgIFBvc3RNZXNzYWdlKG1lc3NhZ2UgOiBOZXRCYXNlTWVzc2FnZSwgY2FsbGJhY2s6IEZ1bmN0aW9ufG51bGwpOiB2b2lkO1xuXG4gICAgUmVnaXN0ZXJNc2dMaXN0ZW5lcihtc2dDb2RlIDogc3RyaW5nLCBjYWxsYmFjayA6IEZ1bmN0aW9uLCBjb250ZXh0IDogYW55KTtcbiAgICBVblJlZ2lzdGVyTXNnTGlzdGVuZXIobXNnQ29kZSA6IHN0cmluZywgY2FsbGJhY2sgOiBGdW5jdGlvbiwgY29udGV4dCA6IGFueSk7XG5cbiAgICBSZWdpc3RlckRlZmF1bHRNc2dMaXN0ZW5lcihjYWxsYmFjayA6IEZ1bmN0aW9uLCBjb250ZXh0IDogYW55KTtcbn1cbiJdfQ==