
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIBridgeNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22cf9Y+cylIw7zWNJLEUwG6', 'UIBridgeNormal');
// script/framework/ui/UIBridgeNormal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIRoot_1 = require("./UIRoot");
var TKLog_1 = require("../log/TKLog");
var ResLoadManager_1 = require("../utils/ResLoadManager");
var UIBridgeNormal = /** @class */ (function () {
    function UIBridgeNormal() {
    }
    UIBridgeNormal.prototype.InitBridge = function () {
    };
    UIBridgeNormal.prototype.CreateUIController = function (uiNode, uiTemplateName) {
        var frame = uiNode.getComponent(uiTemplateName);
        if (frame == null) {
            return null;
        }
        // uiNode.position = new cc.Vec2(0,0);
        // uiNode.scale = 1;
        var pannel = UIRoot_1.default.getInstance().GetPannel(frame.PannelIndex);
        if (pannel == null) {
            pannel = UIRoot_1.default.getInstance().GetPannel(0);
            TKLog_1.default.LogWarn("找不到UIRoot的Pannel(" + frame.PannelIndex + ")");
        }
        if (pannel != null) {
            pannel.node.addChild(frame.node);
            // frame.node.scale = 1;
            // frame.node.position = cc.Vec2.ZERO;
        }
        return frame;
    };
    UIBridgeNormal.prototype.UIObjectFilter = function (controller, uiNode) {
    };
    UIBridgeNormal.prototype.LoadUIAsset = function (uiTemplateName) {
        // return ResLoadManager.getInstance().LoadRes("prefab/ui/" + uiTemplateName, cc.Prefab);
        return ResLoadManager_1.default.getInstance().LoadRes(uiTemplateName, cc.Prefab);
    };
    return UIBridgeNormal;
}());
exports.default = UIBridgeNormal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3VpL1VJQnJpZGdlTm9ybWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQThCO0FBQzlCLHNDQUFpQztBQUNqQywwREFBcUQ7QUFFckQ7SUFBQTtJQW1DQSxDQUFDO0lBbENHLG1DQUFVLEdBQVY7SUFFQSxDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCLFVBQW1CLE1BQWUsRUFBRSxjQUFzQjtRQUV0RCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUcsS0FBSyxJQUFJLElBQUksRUFBQztZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxzQ0FBc0M7UUFDdEMsb0JBQW9CO1FBRXBCLElBQUksTUFBTSxHQUFHLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxJQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUM7WUFDZCxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsZUFBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBRyxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLHdCQUF3QjtZQUN4QixzQ0FBc0M7U0FDekM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsdUNBQWMsR0FBZCxVQUFlLFVBQXVDLEVBQUUsTUFBZTtJQUV2RSxDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLGNBQXVCO1FBQy9CLHlGQUF5RjtRQUN6RixPQUFPLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUdMLHFCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVUlCcmlkZ2UgZnJvbSBcIi4vSVVJQnJpZGdlXCI7XG5pbXBvcnQgVUlSb290IGZyb20gXCIuL1VJUm9vdFwiO1xuaW1wb3J0IFRLTG9nIGZyb20gXCIuLi9sb2cvVEtMb2dcIjtcbmltcG9ydCBSZXNMb2FkTWFuYWdlciBmcm9tIFwiLi4vdXRpbHMvUmVzTG9hZE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlCcmlkZ2VOb3JtYWwgaW1wbGVtZW50cyBJVUlCcmlkZ2Uge1xuICAgIEluaXRCcmlkZ2UoKSB7XG4gICAgICAgIFxuICAgIH0gICAgXG4gICAgQ3JlYXRlVUlDb250cm9sbGVyKHVpTm9kZTogY2MuTm9kZSwgdWlUZW1wbGF0ZU5hbWU6IHN0cmluZyk6IGltcG9ydChcIi4vVUlGcmFtZVwiKS5kZWZhdWx0IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBmcmFtZSA9IHVpTm9kZS5nZXRDb21wb25lbnQodWlUZW1wbGF0ZU5hbWUpO1xuICAgICAgICBpZihmcmFtZSA9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdWlOb2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzIoMCwwKTtcbiAgICAgICAgLy8gdWlOb2RlLnNjYWxlID0gMTtcblxuICAgICAgICBsZXQgcGFubmVsID0gVUlSb290LmdldEluc3RhbmNlKCkuR2V0UGFubmVsKGZyYW1lLlBhbm5lbEluZGV4KTtcbiAgICAgICAgaWYocGFubmVsID09IG51bGwpe1xuICAgICAgICAgICAgcGFubmVsID0gVUlSb290LmdldEluc3RhbmNlKCkuR2V0UGFubmVsKDApO1xuICAgICAgICAgICAgVEtMb2cuTG9nV2FybihcIuaJvuS4jeWIsFVJUm9vdOeahFBhbm5lbChcIiArIGZyYW1lLlBhbm5lbEluZGV4K1wiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZihwYW5uZWwgIT0gbnVsbCl7XG4gICAgICAgICAgICBwYW5uZWwubm9kZS5hZGRDaGlsZChmcmFtZS5ub2RlKTtcbiAgICAgICAgICAgIC8vIGZyYW1lLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICAgICAgLy8gZnJhbWUubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICAgIFVJT2JqZWN0RmlsdGVyKGNvbnRyb2xsZXI6IGltcG9ydChcIi4vVUlGcmFtZVwiKS5kZWZhdWx0LCB1aU5vZGU6IGNjLk5vZGUpIHtcblxuICAgIH1cbiAgICBMb2FkVUlBc3NldCh1aVRlbXBsYXRlTmFtZSA6IHN0cmluZyk6IFByb21pc2U8Y2MuUHJlZmFiPiB7XG4gICAgICAgIC8vIHJldHVybiBSZXNMb2FkTWFuYWdlci5nZXRJbnN0YW5jZSgpLkxvYWRSZXMoXCJwcmVmYWIvdWkvXCIgKyB1aVRlbXBsYXRlTmFtZSwgY2MuUHJlZmFiKTtcbiAgICAgICAgcmV0dXJuIFJlc0xvYWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuTG9hZFJlcyh1aVRlbXBsYXRlTmFtZSwgY2MuUHJlZmFiKTtcbiAgICB9XG5cblxufVxuIl19