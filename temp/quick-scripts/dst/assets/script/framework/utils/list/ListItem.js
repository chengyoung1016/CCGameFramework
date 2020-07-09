
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/list/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6df707MN2JCQINFRXiOsZ4h', 'ListItem');
// script/framework/utils/list/ListItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder;
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
    SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
})(SelectedType || (SelectedType = {}));
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //图标
        // @property({ type: cc.Sprite, tooltip: CC_DEV && '图标' })
        // icon: cc.Sprite = null;
        //标题
        // @property({ type: cc.Node, tooltip: CC_DEV && '标题' })
        // title: cc.Node = null;
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        //被选标志
        _this.selectedFlag = null;
        //被选择的SpriteFrame
        _this.selectedSpriteFrame = null;
        //未被选择的SpriteFrame
        _this._unselectedSpriteFrame = null;
        //被选中的字体
        _this.selectedLabel = null;
        //被选中的颜色
        _this.selectedColor = null;
        //未被选中的颜色
        _this._unselectedColor = null;
        _this.adaptiveSize = false;
        //选择
        _this._selected = false;
        //是否已经注册过事件
        _this._eventReg = false;
        return _this;
        // onClickThis() {
        //     this.list.selectedId = this.listId;
        // }
    }
    Object.defineProperty(ListItem.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            if (!this.selectedFlag)
                return;
            switch (this.selectedMode) {
                case SelectedType.TOGGLE:
                    this.selectedFlag.active = val;
                    if (this.selectedLabel != null) {
                        this.selectedLabel.color = val ? this.selectedColor : this._unselectedColor;
                    }
                    break;
                case SelectedType.SWITCH:
                    var sp = this.selectedFlag.getComponent(cc.Sprite);
                    if (sp)
                        sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                    if (this.selectedLabel) {
                        this.selectedLabel.color = val ? this.selectedColor : this._unselectedColor;
                    }
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "btnCom", {
        get: function () {
            if (!this._btnCom)
                this._btnCom = this.node.getComponent(cc.Button);
            return this._btnCom;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.onLoad = function () {
        // //没有按钮组件的话，selectedFlag无效
        // if (!this.btnCom)
        //     this.selectedMode == SelectedType.NONE;
        //有选择模式时，保存相应的东西
        if (this.selectedLabel) {
            this._unselectedColor = this.selectedLabel.color;
        }
        if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedFlag.getComponent(cc.Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
        }
    };
    ListItem.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
    };
    ListItem.prototype._registerEvent = function () {
        if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
                this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }
            if (this.adaptiveSize) {
                this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }
            this._eventReg = true;
        }
    };
    ListItem.prototype._onSizeChange = function () {
        this.list._onItemAdaptive(this.node);
    };
    /**
     * 创建事件
     * @param {cc.Component} component 组件脚本
     * @param {string} handlerName 触发函数名称
     * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
     * @returns cc.Component.EventHandler
     */
    ListItem.prototype.createEvt = function (component, handlerName, node) {
        if (node === void 0) { node = null; }
        if (!component.isValid)
            return; //有些异步加载的，节点以及销毁了。
        component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
        var evt = new cc.Component.EventHandler();
        evt.target = node || component.node;
        evt.component = component['comName'];
        evt.handler = handlerName;
        return evt;
    };
    ListItem.prototype.showAni = function (aniType, callFunc, del) {
        var _this = this;
        var acts;
        switch (aniType) {
            case 0: //向上消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * 2),
                ];
                break;
            case 1: //向右消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * 2, 0),
                ];
                break;
            case 2: //向下消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * -2),
                ];
                break;
            case 3: //向左消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * -2, 0),
                ];
                break;
            default: //默认：缩小消失
                acts = [
                    cc.scaleTo(.3, .1),
                ];
                break;
        }
        if (callFunc || del) {
            acts.push(cc.callFunc(function () {
                if (del) {
                    _this.list._delSingleItem(_this.node);
                    for (var n = _this.list.displayData.length - 1; n >= 0; n--) {
                        if (_this.list.displayData[n].id == _this.listId) {
                            _this.list.displayData.splice(n, 1);
                            break;
                        }
                    }
                }
                callFunc();
            }));
        }
        this.node.runAction(cc.sequence(acts));
    };
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], ListItem.prototype, "selectedMode", void 0);
    __decorate([
        property({
            type: cc.Node, tooltip: CC_DEV && '被选标志',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], ListItem.prototype, "selectedFlag", void 0);
    __decorate([
        property({
            type: cc.SpriteFrame, tooltip: CC_DEV && '被选择的SpriteFrame',
            visible: function () { return this.selectedMode == SelectedType.SWITCH; }
        })
    ], ListItem.prototype, "selectedSpriteFrame", void 0);
    __decorate([
        property({
            type: cc.Node, tooltip: CC_DEV && '被选字体节点',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], ListItem.prototype, "selectedLabel", void 0);
    __decorate([
        property({
            // type: cc.Color, 
            tooltip: CC_DEV && '被选择的字体颜色',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], ListItem.prototype, "selectedColor", void 0);
    __decorate([
        property()
        //自适应尺寸
        ,
        property({
            tooltip: CC_DEV && '自适应尺寸（宽或高）',
        })
    ], ListItem.prototype, "adaptiveSize", void 0);
    ListItem = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List Item'),
        executionOrder(-5001) //先于List
    ], ListItem);
    return ListItem;
}(cc.Component));
exports.default = ListItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL2xpc3QvTGlzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUEzRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBR3BGLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQU1EO0lBQStDLDRCQUFZO0lBQTNEO1FBQUEscUVBa01DO1FBak1HLElBQUk7UUFDSiwwREFBMEQ7UUFDMUQsMEJBQTBCO1FBQzFCLElBQUk7UUFDSix3REFBd0Q7UUFDeEQseUJBQXlCO1FBQ3pCLE1BQU07UUFLTixrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU07UUFLTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBaUI7UUFLakIseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxrQkFBa0I7UUFDbEIsNEJBQXNCLEdBQW1CLElBQUksQ0FBQztRQUM5QyxRQUFRO1FBS1IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsUUFBUTtRQU1SLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBQy9CLFNBQVM7UUFDVCxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFNbEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsSUFBSTtRQUNKLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFrQzNCLFdBQVc7UUFDSCxlQUFTLEdBQUcsS0FBSyxDQUFDOztRQTBHMUIsa0JBQWtCO1FBQ2xCLDBDQUEwQztRQUMxQyxJQUFJO0lBRVIsQ0FB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QUFNLElBQUksaUJBQWlCO1lBQzFELE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDO1NBQ2hFLENBQUM7eURBQ3lDO0lBUTNDO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxRQUFRO1lBQzFDLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFDO1NBQzVELENBQUM7bURBQzRCO0lBTzlCO1FBTEMsUUFBUSxDQUFDO1lBQ04sbUJBQW1CO1lBQ25CLE9BQU8sRUFBRSxNQUFNLElBQUksVUFBVTtZQUM3QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQztTQUM3RCxDQUFDO21EQUM2QjtJQVEvQjtRQUxDLFFBQVEsRUFBRTtRQUNYLE9BQU87O1FBQ04sUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLE1BQU0sSUFBSSxZQUFZO1NBQ2xDLENBQUM7a0RBQzRCO0lBL0NKLFFBQVE7UUFKckMsT0FBTztRQUNQLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBVSxRQUFRO09BQ1YsUUFBUSxDQWtNckM7SUFBRCxlQUFDO0NBbE1ELEFBa01DLENBbE04QyxFQUFFLENBQUMsU0FBUyxHQWtNMUQ7a0JBbE02QixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51LCBleGVjdXRpb25PcmRlciB9ID0gY2MuX2RlY29yYXRvcjtcblxuXG5lbnVtIFNlbGVjdGVkVHlwZSB7XG4gICAgTk9ORSA9IDAsXG4gICAgVE9HR0xFID0gMSxcbiAgICBTV0lUQ0ggPSAyLFxufVxuXG5AY2NjbGFzc1xuQGRpc2FsbG93TXVsdGlwbGUoKVxuQG1lbnUoJ+iHquWumuS5iee7hOS7ti9MaXN0IEl0ZW0nKVxuQGV4ZWN1dGlvbk9yZGVyKC01MDAxKSAgICAgICAgICAvL+WFiOS6jkxpc3RcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvL+Wbvuagh1xuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZSwgdG9vbHRpcDogQ0NfREVWICYmICflm77moIcnIH0pXG4gICAgLy8gaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICAvL+agh+mimFxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiAn5qCH6aKYJyB9KVxuICAgIC8vIHRpdGxlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL+mAieaLqeaooeW8j1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgInmi6nmqKHlvI8nXG4gICAgfSlcbiAgICBzZWxlY3RlZE1vZGU6IFNlbGVjdGVkVHlwZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xuICAgIC8v6KKr6YCJ5qCH5b+XXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmoIflv5cnLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSB9XG4gICAgfSlcbiAgICBzZWxlY3RlZEZsYWc6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8v6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmi6nnmoRTcHJpdGVGcmFtZScsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIIH1cbiAgICB9KVxuICAgIHNlbGVjdGVkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAvL+acquiiq+mAieaLqeeahFNwcml0ZUZyYW1lXG4gICAgX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIC8v6KKr6YCJ5Lit55qE5a2X5L2TXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInlrZfkvZPoioLngrknLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORX1cbiAgICB9KVxuICAgIHNlbGVjdGVkTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8v6KKr6YCJ5Lit55qE6aKc6ImyXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgLy8gdHlwZTogY2MuQ29sb3IsIFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+iiq+mAieaLqeeahOWtl+S9k+minOiJsicsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FIH1cbiAgICB9KVxuICAgIHNlbGVjdGVkQ29sb3I6IGNjLkNvbG9yID0gbnVsbDtcbiAgICAvL+acquiiq+mAieS4reeahOminOiJslxuICAgIF91bnNlbGVjdGVkQ29sb3I6IGNjLkNvbG9yID0gbnVsbDtcbiAgICBAcHJvcGVydHkoKVxuICAgIC8v6Ieq6YCC5bqU5bC65a+4XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfoh6rpgILlupTlsLrlr7jvvIjlrr3miJbpq5jvvIknLFxuICAgIH0pXG4gICAgYWRhcHRpdmVTaXplOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy/pgInmi6lcbiAgICBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZXQgc2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsO1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRGbGFnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5UT0dHTEU6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuYWN0aXZlID0gdmFsO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRMYWJlbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbC5jb2xvciA9IHZhbCA/IHRoaXMuc2VsZWN0ZWRDb2xvciA6IHRoaXMuX3Vuc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TV0lUQ0g6XG4gICAgICAgICAgICAgICAgbGV0IHNwOiBjYy5TcHJpdGUgPSB0aGlzLnNlbGVjdGVkRmxhZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ApXG4gICAgICAgICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdmFsID8gdGhpcy5zZWxlY3RlZFNwcml0ZUZyYW1lIDogdGhpcy5fdW5zZWxlY3RlZFNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwuY29sb3IgPSB2YWwgPyB0aGlzLnNlbGVjdGVkQ29sb3IgOiB0aGlzLl91bnNlbGVjdGVkQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgIH1cbiAgICAvL+aMiemSrue7hOS7tlxuICAgIHByaXZhdGUgX2J0bkNvbTogYW55O1xuICAgIGdldCBidG5Db20oKSB7XG4gICAgICAgIGlmICghdGhpcy5fYnRuQ29tKVxuICAgICAgICAgICAgdGhpcy5fYnRuQ29tID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYnRuQ29tO1xuICAgIH1cbiAgICAvL+S+nei1lueahExpc3Tnu4Tku7ZcbiAgICBwdWJsaWMgbGlzdDogTGlzdDtcbiAgICAvL+aYr+WQpuW3sue7j+azqOWGjOi/h+S6i+S7tlxuICAgIHByaXZhdGUgX2V2ZW50UmVnID0gZmFsc2U7XG4gICAgLy/luo/liJdpZFxuICAgIHB1YmxpYyBsaXN0SWQ6IG51bWJlcjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gLy/msqHmnInmjInpkq7nu4Tku7bnmoTor53vvIxzZWxlY3RlZEZsYWfml6DmlYhcbiAgICAgICAgLy8gaWYgKCF0aGlzLmJ0bkNvbSlcbiAgICAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5OT05FO1xuICAgICAgICAvL+aciemAieaLqeaooeW8j+aXtu+8jOS/neWtmOebuOW6lOeahOS4nOilv1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc2VsZWN0ZWRDb2xvciA9IHRoaXMuc2VsZWN0ZWRMYWJlbC5jb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNXSVRDSCkge1xuICAgICAgICAgICAgbGV0IGNvbTogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWUgPSBjb20uc3ByaXRlRnJhbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLl9vblNpemVDaGFuZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50UmVnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5Db20gJiYgdGhpcy5saXN0LnNlbGVjdGVkTW9kZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbS5jbGlja0V2ZW50cy51bnNoaWZ0KHRoaXMuY3JlYXRlRXZ0KHRoaXMsICdvbkNsaWNrVGhpcycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0aXZlU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuX29uU2l6ZUNoYW5nZSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9ldmVudFJlZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaXplQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmxpc3QuX29uSXRlbUFkYXB0aXZlKHRoaXMubm9kZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIm+W7uuS6i+S7tlxuICAgICAqIEBwYXJhbSB7Y2MuQ29tcG9uZW50fSBjb21wb25lbnQg57uE5Lu26ISa5pysXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhhbmRsZXJOYW1lIOinpuWPkeWHveaVsOWQjeensFxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gbm9kZSDnu4Tku7bmiYDlnKhub2Rl77yI5LiN5Lyg55qE5oOF5Ya15LiL5Y+WY29tcG9uZW50Lm5vZGXvvIlcbiAgICAgKiBAcmV0dXJucyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXG4gICAgICovXG4gICAgY3JlYXRlRXZ0KGNvbXBvbmVudDogY2MuQ29tcG9uZW50LCBoYW5kbGVyTmFtZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudC5pc1ZhbGlkKVxuICAgICAgICAgICAgcmV0dXJuOy8v5pyJ5Lqb5byC5q2l5Yqg6L2955qE77yM6IqC54K55Lul5Y+K6ZSA5q+B5LqG44CCXG4gICAgICAgIGNvbXBvbmVudFsnY29tTmFtZSddID0gY29tcG9uZW50Wydjb21OYW1lJ10gfHwgY29tcG9uZW50Lm5hbWUubWF0Y2goL1xcPCguKj8pXFw+L2cpLnBvcCgpLnJlcGxhY2UoL1xcPHw+L2csICcnKTtcbiAgICAgICAgbGV0IGV2dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGV2dC50YXJnZXQgPSBub2RlIHx8IGNvbXBvbmVudC5ub2RlO1xuICAgICAgICBldnQuY29tcG9uZW50ID0gY29tcG9uZW50Wydjb21OYW1lJ107XG4gICAgICAgIGV2dC5oYW5kbGVyID0gaGFuZGxlck5hbWU7XG4gICAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuXG4gICAgc2hvd0FuaShhbmlUeXBlOiBudW1iZXIsIGNhbGxGdW5jOiBGdW5jdGlvbiwgZGVsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBhY3RzOiBhbnlbXTtcbiAgICAgICAgc3dpdGNoIChhbmlUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDA6IC8v5ZCR5LiK5raI5aSxXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIDAsIHRoaXMubm9kZS5oZWlnaHQgKiAyKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiAvL+WQkeWPs+a2iOWksVxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KC4zLCB0aGlzLm5vZGUud2lkdGggKiAyLCAwKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvL+WQkeS4i+a2iOWksVxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KC4zLCAwLCB0aGlzLm5vZGUuaGVpZ2h0ICogLTIpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IC8v5ZCR5bem5raI5aSxXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIHRoaXMubm9kZS53aWR0aCAqIC0yLCAwKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogLy/pu5jorqTvvJrnvKnlsI/mtojlpLFcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4zLCAuMSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbEZ1bmMgfHwgZGVsKSB7XG4gICAgICAgICAgICBhY3RzLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Ll9kZWxTaW5nbGVJdGVtKHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMubGlzdC5kaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5kaXNwbGF5RGF0YVtuXS5pZCA9PSB0aGlzLmxpc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5kaXNwbGF5RGF0YS5zcGxpY2UobiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdHMpKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBvbkNsaWNrVGhpcygpOiB2b2lkO1xuICAgIC8vIG9uQ2xpY2tUaGlzKCkge1xuICAgIC8vICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xuICAgIC8vIH1cblxufVxuIl19