"use strict";
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