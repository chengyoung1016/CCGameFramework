
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/list/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f90e2MRdxpN96kojGEtACsH', 'List');
// script/framework/utils/list/List.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder, requireComponent = _a.requireComponent;
var ListItem_1 = require("./ListItem");
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 1] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
})(TemplateType || (TemplateType = {}));
var SlideType;
(function (SlideType) {
    SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
    SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
    SlideType[SlideType["PAGE"] = 3] = "PAGE";
})(SlideType || (SlideType = {}));
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
    SelectedType[SelectedType["MULT"] = 2] = "MULT";
})(SelectedType || (SelectedType = {}));
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //模板类型
        _this.templateType = TemplateType.NODE;
        //模板Item（Node）
        _this.tmpNode = null;
        //模板Item（Prefab）
        _this.tmpPrefab = null;
        //滑动模式
        _this._slideMode = SlideType.NORMAL;
        //翻页作用距离
        _this.pageDistance = .3;
        //页面改变事件
        _this.pageChangeEvent = new cc.Component.EventHandler();
        //是否为虚拟列表（动态列表）
        _this._virtual = true;
        //是否为循环列表
        _this.cyclic = false;
        //缺省居中
        _this.lackCenter = false;
        //缺省可滑动
        _this.lackSlide = false;
        //刷新频率
        _this._updateRate = 0;
        //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
        _this.frameByFrameRenderNum = 0;
        //渲染事件（渲染器）
        _this.renderEvent = new cc.Component.EventHandler();
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        _this.repeatEventSingle = false;
        //触发选择事件
        _this.selectedEvent = null; //new cc.Component.EventHandler();
        //当前选择id
        _this._selectedId = -1;
        _this._forceUpdate = false;
        _this._updateDone = true;
        //列表数量
        _this._numItems = 0;
        _this._inited = false;
        _this._needUpdateWidget = false;
        _this._aniDelRuning = false;
        _this._doneAfterUpdate = false;
        _this.adhering = false;
        _this._adheringBarrier = false;
        _this.curPageNum = 0;
        return _this;
    }
    Object.defineProperty(List.prototype, "slideMode", {
        get: function () {
            return this._slideMode;
        },
        set: function (val) {
            this._slideMode = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        set: function (val) {
            if (val != null)
                this._virtual = val;
            if (!CC_DEV && this._numItems != 0) {
                this._onScrolling();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (val) {
            if (val >= 0 && val <= 6) {
                this._updateRate = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "selectedId", {
        get: function () {
            return this._selectedId;
        },
        set: function (val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
                case SelectedType.SINGLE: {
                    if (!t.repeatEventSingle && val == t._selectedId)
                        return;
                    item = t.getItemByListId(val);
                    // if (!item && val >= 0)
                    //     return;
                    var listItem = void 0;
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                        t._lastSelectedId = null;
                    t._selectedId = val;
                    if (item) {
                        listItem = item.getComponent(ListItem_1.default);
                        listItem.selected = true;
                    }
                    if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                        var lastItem = t.getItemByListId(t._lastSelectedId);
                        if (lastItem) {
                            lastItem.getComponent(ListItem_1.default).selected = false;
                        }
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems));
                    }
                    break;
                }
                case SelectedType.MULT: {
                    item = t.getItemByListId(val);
                    if (!item)
                        return;
                    var listItem = item.getComponent(ListItem_1.default);
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    t._selectedId = val;
                    var bool = !listItem.selected;
                    listItem.selected = bool;
                    var sub = t.multSelected.indexOf(val);
                    if (bool && sub < 0) {
                        t.multSelected.push(val);
                    }
                    else if (!bool && sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems), bool);
                    }
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numItems", {
        get: function () {
            return this._actualNumItems;
        },
        set: function (val) {
            var t = this;
            if (!t.checkInited(false))
                return;
            if (val == null || val < 0) {
                cc.error('numItems set the wrong::', val);
                return;
            }
            t._actualNumItems = t._numItems = val;
            t._forceUpdate = true;
            if (t._virtual) {
                t._resizeContent();
                if (t.cyclic) {
                    t._numItems = t._cyclicNum * t._numItems;
                }
                t._onScrolling();
                if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE)
                    t.curPageNum = t.nearestListId;
            }
            else {
                var layout = t.content.getComponent(cc.Layout);
                if (layout) {
                    layout.enabled = true;
                }
                t._delRedundantItem();
                t.firstListId = 0;
                if (t.frameByFrameRenderNum > 0) {
                    //先渲染几个出来
                    var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                    for (var n = 0; n < len; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    if (t.frameByFrameRenderNum < t._numItems) {
                        t._updateCounter = t.frameByFrameRenderNum;
                        t._updateDone = false;
                    }
                }
                else {
                    for (var n = 0; n < val; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    t.displayItemNum = val;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    //----------------------------------------------------------------------------
    List.prototype.onLoad = function () {
        this._init();
    };
    List.prototype.onDestroy = function () {
        var t = this;
        if (t._itemTmp && t._itemTmp.isValid)
            t._itemTmp.destroy();
        if (t.tmpNode && t.tmpNode.isValid)
            t.tmpNode.destroy();
        // let total = t._pool.size();
        while (t._pool.size()) {
            var node = t._pool.get();
            node.destroy();
        }
        // if (total)
        //     cc.log('-----------------' + t.node.name + '<List> destroy node total num. =>', total);
    };
    List.prototype.onEnable = function () {
        // if (!CC_EDITOR) 
        this._registerEvent();
        this._init();
    };
    List.prototype.onDisable = function () {
        // if (!CC_EDITOR) 
        this._unregisterEvent();
    };
    //注册事件
    List.prototype._registerEvent = function () {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.on('touch-up', t._onTouchUp, t);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.on('scroll-began', t._onScrollBegan, t, true);
        t.node.on('scroll-ended', t._onScrollEnded, t, true);
        t.node.on('scrolling', t._onScrolling, t, true);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //卸载事件
    List.prototype._unregisterEvent = function () {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.off('touch-up', t._onTouchUp, t);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.off('scroll-began', t._onScrollBegan, t, true);
        t.node.off('scroll-ended', t._onScrollEnded, t, true);
        t.node.off('scrolling', t._onScrolling, t, true);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //初始化各种..
    List.prototype._init = function () {
        var t = this;
        if (t._inited)
            return;
        t._scrollView = t.node.getComponent(cc.ScrollView);
        t.content = t._scrollView.content;
        if (!t.content) {
            cc.error(t.node.name + "'s cc.ScrollView unset content!");
            return;
        }
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type; //排列模式
        t._resizeMode = t._layout.resizeMode; //自适应模式
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop; //顶边距
        t._rightGap = t._layout.paddingRight; //右边距
        t._bottomGap = t._layout.paddingBottom; //底边距
        t._leftGap = t._layout.paddingLeft; //左边距
        t._columnGap = t._layout.spacingX; //列距
        t._lineGap = t._layout.spacingY; //行距
        t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;
        t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
        t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向
        t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
        // 特定的滑动模式处理
        if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
            t._scrollView.inertia = false;
            t._scrollView._onMouseWheel = function () {
                return;
            };
        }
        if (!t.virtual) // lackCenter 仅支持 Virtual 模式
            t.lackCenter = false;
        t._lastDisplayData = []; //最后一次刷新的数据
        t.displayData = []; //当前数据
        t._pool = new cc.NodePool(); //这是个池子..
        t._forceUpdate = false; //是否强制更新
        t._updateCounter = 0; //当前分帧渲染帧数
        t._updateDone = true; //分帧渲染是否完成
        t.curPageNum = 0; //当前页数
        if (t.cyclic || 0) {
            t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
            t._scrollView._startBounceBackIfNeeded = function () {
                return false;
            };
            // t._scrollView._scrollChildren = function () {
            //     return false;
            // }
        }
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                switch (t._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        t._alignCalcType = 1;
                        break;
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        t._alignCalcType = 2;
                        break;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                switch (t._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                        t._alignCalcType = 3;
                        break;
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                        t._alignCalcType = 4;
                        break;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        switch (t._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                                break;
                        }
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        switch (t._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                                break;
                        }
                        break;
                }
                break;
            }
        }
        // 清空 content
        // t.content.children.forEach((child: cc.Node) => {
        //     child.removeFromParent();
        //     if (child != t.tmpNode && child.isValid)
        //         child.destroy();
        // });
        t.content.removeAllChildren();
        t._inited = true;
    };
    /**
     * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
     * @param {Number} dt
     */
    List.prototype._processAutoScrolling = function (dt) {
        // let isAutoScrollBrake = this._scrollView._isNecessaryAutoScrollBrake();
        var brakingFactor = 1;
        this._scrollView['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._scrollView['_autoScrollAccumulatedTime'] / this._scrollView['_autoScrollTotalTime']);
        if (this._scrollView['_autoScrollAttenuate']) {
            var time = percentage - 1;
            percentage = time * time * time * time * time + 1;
        }
        var newPosition = this._scrollView['_autoScrollStartPosition'].add(this._scrollView['_autoScrollTargetDelta'].mul(percentage));
        var EPSILON = this._scrollView['getScrollEndedEventTiming']();
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        // cc.log(reachedEnd, Math.abs(percentage - 1), EPSILON)
        var fireEvent = Math.abs(percentage - 1) <= this._scrollView['getScrollEndedEventTiming']();
        if (fireEvent && !this._scrollView['_isScrollEndedWithThresholdEventFired']) {
            this._scrollView['_dispatchEvent']('scroll-ended-with-threshold');
            this._scrollView['_isScrollEndedWithThresholdEventFired'] = true;
        }
        // if (this._scrollView.elastic && !reachedEnd) {
        //     let brakeOffsetPosition = newPosition.sub(this._scrollView._autoScrollBrakingStartPosition);
        //     if (isAutoScrollBrake) {
        //         brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor);
        //     }
        //     newPosition = this._scrollView._autoScrollBrakingStartPosition.add(brakeOffsetPosition);
        // } else {
        //     let moveDelta = newPosition.sub(this._scrollView.getContentPosition());
        //     let outOfBoundary = this._scrollView._getHowMuchOutOfBoundary(moveDelta);
        //     if (!outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
        //         newPosition = newPosition.add(outOfBoundary);
        //         reachedEnd = true;
        //     }
        // }
        if (reachedEnd) {
            this._scrollView['_autoScrolling'] = false;
        }
        var deltaMove = newPosition.sub(this._scrollView.getContentPosition());
        // cc.log(deltaMove)
        this._scrollView['_moveContent'](this._scrollView['_clampDelta'](deltaMove), reachedEnd);
        this._scrollView['_dispatchEvent']('scrolling');
        // scollTo API controll move
        if (!this._scrollView['_autoScrolling']) {
            this._scrollView['_isBouncing'] = false;
            this._scrollView['_scrolling'] = false;
            this._scrollView['_dispatchEvent']('scroll-ended');
        }
    };
    //设置模板Item
    List.prototype.setTemplateItem = function (item) {
        if (!item)
            return;
        var t = this;
        t._itemTmp = item;
        if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN)
            t._itemSize = t._layout.cellSize;
        else
            t._itemSize = cc.size(item.width, item.height);
        //获取ListItem，如果没有就取消选择模式
        var com = item.getComponent(ListItem_1.default);
        var remove = false;
        if (!com)
            remove = true;
        // if (com) {
        //     if (!com._btnCom && !item.getComponent(cc.Button)) {
        //         remove = true;
        //     }
        // }
        if (remove) {
            t.selectedMode = SelectedType.NONE;
        }
        com = item.getComponent(cc.Widget);
        if (com && com.enabled) {
            t._needUpdateWidget = true;
        }
        if (t.selectedMode == SelectedType.MULT)
            t.multSelected = [];
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL:
                t._colLineNum = 1;
                t._sizeType = false;
                break;
            case cc.Layout.Type.VERTICAL:
                t._colLineNum = 1;
                t._sizeType = true;
                break;
            case cc.Layout.Type.GRID:
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        //计算列数
                        var trimW = t.content.width - t._leftGap - t._rightGap;
                        t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
                        t._sizeType = true;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        //计算行数
                        var trimH = t.content.height - t._topGap - t._bottomGap;
                        t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
                        t._sizeType = false;
                        break;
                }
                break;
        }
    };
    /**
     * 检查是否初始化
     * @param {Boolean} printLog 是否打印错误信息
     * @returns
     */
    List.prototype.checkInited = function (printLog) {
        if (printLog === void 0) { printLog = true; }
        if (!this._inited) {
            if (printLog)
                cc.error('List initialization not completed!');
            return false;
        }
        return true;
    };
    //禁用 Layout 组件，自行计算 Content Size
    List.prototype._resizeContent = function () {
        var t = this;
        var result;
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._leftGap + fixed.val + (t._itemSize.width * (t._numItems - fixed.count)) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                else {
                    result = t._leftGap + (t._itemSize.width * t._numItems) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._topGap + fixed.val + (t._itemSize.height * (t._numItems - fixed.count)) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                else {
                    result = t._topGap + (t._itemSize.height * t._numItems) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                //网格模式不支持居中
                if (t.lackCenter)
                    t.lackCenter = false;
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        var lineNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._topGap + (t._itemSize.height * lineNum) + (t._lineGap * (lineNum - 1)) + t._bottomGap;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        var colNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._leftGap + (t._itemSize.width * colNum) + (t._columnGap * (colNum - 1)) + t._rightGap;
                        break;
                }
                break;
            }
        }
        var layout = t.content.getComponent(cc.Layout);
        if (layout)
            layout.enabled = false;
        t._allItemSize = result;
        t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? (t._topGap + t._bottomGap) : (t._leftGap + t._rightGap));
        if (t.cyclic) {
            var totalSize = (t._sizeType ? t.node.height : t.node.width);
            t._cyclicPos1 = 0;
            totalSize -= t._cyclicPos1;
            t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
            var spacing = t._sizeType ? t._lineGap : t._columnGap;
            t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
            t._cyclicAllItemSize = t._allItemSize + (t._allItemSizeNoEdge * (t._cyclicNum - 1)) + (spacing * (t._cyclicNum - 1));
            t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
            t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
            // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
        }
        t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
        var slideOffset = ((!t._lack || !t.lackCenter) && t.lackSlide) ? 0 : .1;
        var targetWH = t._lack ? ((t._sizeType ? t.node.height : t.node.width) - slideOffset) : (t.cyclic ? t._cyclicAllItemSize : t._allItemSize);
        if (targetWH < 0)
            targetWH = 0;
        if (t._sizeType) {
            t.content.height = targetWH;
        }
        else {
            t.content.width = targetWH;
        }
        // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);
    };
    //滚动进行时...
    List.prototype._onScrolling = function (ev) {
        if (ev === void 0) { ev = null; }
        if (this.frameCount == null)
            this.frameCount = this._updateRate;
        if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
            this.frameCount--;
            return;
        }
        else
            this.frameCount = this._updateRate;
        if (this._aniDelRuning)
            return;
        //循环列表处理
        if (this.cyclic) {
            var scrollPos = this.content.getPosition();
            scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
            var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
            var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.x = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos += add;
                        // }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.x = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos -= add;
                        // }
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.x = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.x = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.y = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.y = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.y = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.y = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    break;
            }
        }
        this._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        if (this._sizeType) {
            vTop = this.viewTop;
            vBottom = this.viewBottom;
        }
        else {
            vRight = this.viewRight;
            vLeft = this.viewLeft;
        }
        if (this._virtual) {
            this.displayData = [];
            var itemPos = void 0;
            var curId = 0;
            var endId = this._numItems - 1;
            if (this._customSize) {
                var breakFor = false;
                //如果该item的位置在可视区域内，就推入displayData
                for (; curId <= endId && !breakFor; curId++) {
                    itemPos = this._calcItemPos(curId);
                    switch (this._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (this._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
            else {
                var ww = this._itemSize.width + this._columnGap;
                var hh = this._itemSize.height + this._lineGap;
                switch (this._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        curId = (vLeft + this._leftGap) / ww;
                        endId = (vRight + this._rightGap) / ww;
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        curId = (-vRight - this._rightGap) / ww;
                        endId = (-vLeft - this._leftGap) / ww;
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        curId = (-vTop - this._topGap) / hh;
                        endId = (-vBottom - this._bottomGap) / hh;
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        curId = (vBottom + this._bottomGap) / hh;
                        endId = (vTop + this._topGap) / hh;
                        break;
                }
                curId = Math.floor(curId) * this._colLineNum;
                endId = Math.ceil(endId) * this._colLineNum;
                endId--;
                if (curId < 0)
                    curId = 0;
                if (endId >= this._numItems)
                    endId = this._numItems - 1;
                for (; curId <= endId; curId++) {
                    this.displayData.push(this._calcItemPos(curId));
                }
            }
            this._delRedundantItem();
            if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                this._lastDisplayData = [];
                return;
            }
            this.firstListId = this.displayData[0].id;
            this.displayItemNum = this.displayData.length;
            var len = this._lastDisplayData.length;
            var haveDataChange = this.displayItemNum != len;
            if (haveDataChange) {
                // 如果是逐帧渲染，需要排序
                if (this.frameByFrameRenderNum > 0) {
                    this._lastDisplayData.sort(function (a, b) { return a - b; });
                }
                // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
                haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
            }
            if (this._forceUpdate || haveDataChange) { //如果是强制更新
                if (this.frameByFrameRenderNum > 0) {
                    // if (this._updateDone) {
                    // this._lastDisplayData = [];
                    //逐帧渲染
                    if (this._numItems > 0) {
                        if (!this._updateDone) {
                            this._doneAfterUpdate = true;
                        }
                        else {
                            this._updateCounter = 0;
                        }
                        this._updateDone = false;
                    }
                    else {
                        this._updateCounter = 0;
                        this._updateDone = true;
                    }
                    // }
                }
                else {
                    //直接渲染
                    this._lastDisplayData = [];
                    // cc.log('List Display Data II::', this.displayData);
                    for (var c = 0; c < this.displayItemNum; c++) {
                        this._createOrUpdateItem(this.displayData[c]);
                    }
                    this._forceUpdate = false;
                }
            }
            this._calcNearestItem();
        }
    };
    //计算可视范围
    List.prototype._calcViewPos = function () {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + this.node.width;
                this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
                this.viewRight += this.elasticRight;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - this.node.width;
                this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
                this.viewLeft -= this.elasticLeft;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - this.node.height;
                this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
                this.viewBottom += this.elasticBottom;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + this.node.height;
                this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
                this.viewTop -= this.elasticTop;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
        }
    };
    //计算位置 根据id
    List.prototype._calcItemPos = function (id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        right = left + width;
                        if (this.lackCenter) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left += offset;
                            right += offset;
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        left = right - width;
                        if (this.lackCenter) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left -= offset;
                            right -= offset;
                        }
                        return {
                            id: id,
                            right: right,
                            left: left,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                }
                break;
            case cc.Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        bottom = top - height;
                        if (this.lackCenter) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top -= offset;
                            bottom -= offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                    }
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        top = bottom + height;
                        if (this.lackCenter) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top += offset;
                            bottom += offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                        break;
                    }
                }
            }
            case cc.Layout.Type.GRID: {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL: {
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                bottom = top - this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                top = bottom + this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                        }
                        itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                itemX += (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                itemX += ((1 - this._itemTmp.anchorX) * this._itemSize.width);
                                itemX -= ((1 - this.content.anchorX) * this.content.width);
                                itemX *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: itemX,
                            y: itemY,
                        };
                    }
                    case cc.Layout.AxisDirection.VERTICAL: {
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                right = left + this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                left = right - this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX += ((1 - this.content.anchorX) * this.content.width);
                                break;
                            }
                        }
                        itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                itemY -= ((1 - this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += ((1 - this.content.anchorY) * this.content.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                itemY -= ((this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += (this.content.anchorY * this.content.height);
                                itemY *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: itemX,
                            y: itemY,
                        };
                    }
                }
                break;
            }
        }
    };
    //计算已存在的Item的位置
    List.prototype._calcExistItemPos = function (id) {
        var item = this.getItemByListId(id);
        if (!item)
            return null;
        var data = {
            id: id,
            x: item.x,
            y: item.y,
        };
        if (this._sizeType) {
            data.top = item.y + (item.height * (1 - item.anchorY));
            data.bottom = item.y - (item.height * item.anchorY);
        }
        else {
            data.left = item.x - (item.width * item.anchorX);
            data.right = item.x + (item.width * (1 - item.anchorX));
        }
        return data;
    };
    //获取Item位置
    List.prototype.getItemPos = function (id) {
        if (this._virtual)
            return this._calcItemPos(id);
        else {
            if (this.frameByFrameRenderNum)
                return this._calcItemPos(id);
            else
                return this._calcExistItemPos(id);
        }
    };
    //获取固定尺寸
    List.prototype._getFixedSize = function (listId) {
        if (!this._customSize)
            return null;
        if (listId == null)
            listId = this._numItems;
        var fixed = 0;
        var count = 0;
        for (var id in this._customSize) {
            if (parseInt(id) < listId) {
                fixed += this._customSize[id];
                count++;
            }
        }
        return {
            val: fixed,
            count: count,
        };
    };
    //滚动结束时..
    List.prototype._onScrollBegan = function () {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
    };
    //滚动结束时..
    List.prototype._onScrollEnded = function () {
        var t = this;
        if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
                item.runAction(cc.sequence(cc.scaleTo(.1, 1.06), cc.scaleTo(.1, 1)));
            }
        }
        t._onScrolling();
        if (t._slideMode == SlideType.ADHERING &&
            !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
    };
    // 触摸时
    List.prototype._onTouchStart = function (ev, captureListeners) {
        if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners))
            return;
        var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;
        if (!isMe) {
            var itemNode = ev.target;
            while (itemNode._listId == null && itemNode.parent)
                itemNode = itemNode.parent;
            this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
        }
    };
    //触摸抬起时..
    List.prototype._onTouchUp = function () {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (this.adhering)
                this._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    List.prototype._onTouchCancelled = function (ev, captureListeners) {
        var t = this;
        if (t._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate)
            return;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (t.adhering)
                t._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                t._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    //当尺寸改变
    List.prototype._onSizeChanged = function () {
        if (this.checkInited(false))
            this._onScrolling();
    };
    //当Item自适应
    List.prototype._onItemAdaptive = function (item) {
        // if (this.checkInited(false)) {
        if ((!this._sizeType && item.width != this._itemSize.width)
            || (this._sizeType && item.height != this._itemSize.height)) {
            if (!this._customSize)
                this._customSize = {};
            var val = this._sizeType ? item.height : item.width;
            if (this._customSize[item._listId] != val) {
                this._customSize[item._listId] = val;
                this._resizeContent();
                // this.content.children.forEach((child: cc.Node) => {
                //     this._updateItemPos(child);
                // });
                this.updateAll();
                // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
                if (this._scrollToListId != null) {
                    this._scrollPos = null;
                    this.unschedule(this._scrollToSo);
                    this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - ((new Date()).getTime() / 1000)));
                }
            }
        }
        // }
    };
    //PAGE粘附
    List.prototype._pageAdhere = function () {
        var t = this;
        if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0))
            return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
            var timeInSecond = .5;
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (t._beganPos > curPos) {
                        t.prePage(timeInSecond);
                        // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                    }
                    else {
                        t.nextPage(timeInSecond);
                        // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (t._beganPos < curPos) {
                        t.prePage(timeInSecond);
                    }
                    else {
                        t.nextPage(timeInSecond);
                    }
                    break;
            }
        }
        else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
        }
        t._beganPos = null;
    };
    //粘附
    List.prototype.adhere = function () {
        var t = this;
        if (!t.checkInited())
            return;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
            return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
    };
    //Update..
    List.prototype.update = function () {
        if (this.frameByFrameRenderNum <= 0 || this._updateDone)
            return;
        // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
        if (this._virtual) {
            var len = (this._updateCounter + this.frameByFrameRenderNum) > this.displayItemNum ? this.displayItemNum : (this._updateCounter + this.frameByFrameRenderNum);
            for (var n = this._updateCounter; n < len; n++) {
                var data = this.displayData[n];
                if (data) {
                    this._createOrUpdateItem(data);
                }
            }
            if (this._updateCounter >= this.displayItemNum - 1) { //最后一个
                if (this._doneAfterUpdate) {
                    this._updateCounter = 0;
                    this._updateDone = false;
                    // if (!this._scrollView.isScrolling())
                    this._doneAfterUpdate = false;
                }
                else {
                    this._updateDone = true;
                    this._delRedundantItem();
                    this._forceUpdate = false;
                    this._calcNearestItem();
                    if (this.slideMode == SlideType.PAGE)
                        this.curPageNum = this.nearestListId;
                }
            }
            else {
                this._updateCounter += this.frameByFrameRenderNum;
            }
        }
        else {
            if (this._updateCounter < this._numItems) {
                var len = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                for (var n = this._updateCounter; n < len; n++) {
                    this._createOrUpdateItem2(n);
                }
                this._updateCounter += this.frameByFrameRenderNum;
            }
            else {
                this._updateDone = true;
                this._calcNearestItem();
                if (this.slideMode == SlideType.PAGE)
                    this.curPageNum = this.nearestListId;
            }
        }
    };
    /**
     * 创建或更新Item（虚拟列表用）
     * @param {Object} data 数据
     */
    List.prototype._createOrUpdateItem = function (data) {
        var item = this.getItemByListId(data.id);
        if (!item) { //如果不存在
            var canGet = this._pool.size() > 0;
            if (canGet) {
                item = this._pool.get();
                // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
            }
            else {
                item = cc.instantiate(this._itemTmp);
                // cc.log('新建::', data.id, item);
            }
            if (item._listId != data.id) {
                item._listId = data.id;
                item.setContentSize(this._itemSize);
            }
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            this.content.addChild(item);
            if (canGet && this._needUpdateWidget) {
                var widget = item.getComponent(cc.Widget);
                if (widget)
                    widget.updateAlignment();
            }
            item.setSiblingIndex(this.content.childrenCount - 1);
            var listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = data.id;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        this._resetItemSize(item);
        this._updateListItem(item['listItem']);
        if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
        }
    };
    //创建或更新Item（非虚拟列表用）
    List.prototype._createOrUpdateItem2 = function (listId) {
        var item = this.content.children[listId];
        var listItem;
        if (!item) { //如果不存在
            item = cc.instantiate(this._itemTmp);
            item._listId = listId;
            this.content.addChild(item);
            listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = listId;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item._listId = listId;
            if (listItem)
                listItem.listId = listId;
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
            }
        }
        this._updateListItem(listItem);
        if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
        }
    };
    List.prototype._updateListItem = function (listItem) {
        if (!listItem)
            return;
        if (this.selectedMode > SelectedType.NONE) {
            var item = listItem.node;
            switch (this.selectedMode) {
                case SelectedType.SINGLE:
                    listItem.selected = this.selectedId == item._listId;
                    break;
                case SelectedType.MULT:
                    listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                    break;
            }
        }
    };
    //仅虚拟列表用
    List.prototype._resetItemSize = function (item) {
        return;
        var size;
        if (this._customSize && this._customSize[item._listId]) {
            size = this._customSize[item._listId];
        }
        else {
            if (this._colLineNum > 1)
                item.setContentSize(this._itemSize);
            else
                size = this._sizeType ? this._itemSize.height : this._itemSize.width;
        }
        if (size) {
            if (this._sizeType)
                item.height = size;
            else
                item.width = size;
        }
    };
    /**
     * 更新Item位置
     * @param {Number||Node} listIdOrItem
     */
    List.prototype._updateItemPos = function (listIdOrItem) {
        var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
        var pos = this.getItemPos(item._listId);
        item.setPosition(pos.x, pos.y);
    };
    /**
     * 设置多选
     * @param {Array} args 可以是单个listId，也可是个listId数组
     * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
     */
    List.prototype.setMultSelected = function (args, bool) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        if (bool == null) {
            t.multSelected = args;
        }
        else {
            var listId = void 0, sub = void 0;
            if (bool) {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub < 0) {
                        t.multSelected.push(listId);
                    }
                }
            }
            else {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                }
            }
        }
        t._forceUpdate = true;
        t._onScrolling();
    };
    /**
     * 更新指定的Item
     * @param {Array} args 单个listId，或者数组
     * @returns
     */
    List.prototype.updateItem = function (args) {
        if (!this.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        for (var n = 0, len = args.length; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item)
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
        }
    };
    /**
     * 更新全部
     */
    List.prototype.updateAll = function () {
        if (!this.checkInited())
            return;
        this.numItems = this.numItems;
    };
    /**
     * 根据ListID获取Item
     * @param {Number} listId
     * @returns
     */
    List.prototype.getItemByListId = function (listId) {
        if (this.content) {
            for (var n = this.content.childrenCount - 1; n >= 0; n--) {
                var item = this.content.children[n];
                if (item._listId == listId)
                    return item;
            }
        }
    };
    /**
     * 获取在显示区域外的Item
     * @returns
     */
    List.prototype._getOutsideItem = function () {
        var item;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
            item = this.content.children[n];
            if (!this.displayData.find(function (d) { return d.id == item._listId; })) {
                result.push(item);
            }
        }
        return result;
    };
    //删除显示区域以外的Item
    List.prototype._delRedundantItem = function () {
        if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
                var item = arr[n];
                if (this._scrollItem && item._listId == this._scrollItem._listId)
                    continue;
                this._pool.put(item);
                for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                    if (this._lastDisplayData[m] == item._listId) {
                        this._lastDisplayData.splice(m, 1);
                        break;
                    }
                }
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
        }
        else {
            while (this.content.childrenCount > this._numItems) {
                this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
            }
        }
    };
    //删除单个Item
    List.prototype._delSingleItem = function (item) {
        // cc.log('DEL::', item['_listId'], item);
        item.removeFromParent();
        if (item.destroy)
            item.destroy();
        item = null;
    };
    /**
     * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
     * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
     */
    List.prototype.aniDelItem = function (listId, callFunc, aniType) {
        var t = this;
        if (!t.checkInited() || t.cyclic || !t._virtual)
            return cc.error('This function is not allowed to be called!');
        if (t._aniDelRuning)
            return cc.warn('Please wait for the current deletion to finish!');
        var item = t.getItemByListId(listId);
        var listItem;
        if (!item) {
            callFunc(listId);
            return;
        }
        else {
            listItem = item.getComponent(ListItem_1.default);
        }
        t._aniDelRuning = true;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = listItem.selected;
        listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._numItems - 2) {
                newId = curLastId + 1;
            }
            if (newId != null) {
                var newData = t._calcItemPos(newId);
                t.displayData.push(newData);
                if (t._virtual)
                    t._createOrUpdateItem(newData);
                else
                    t._createOrUpdateItem2(newId);
            }
            else
                t._numItems--;
            if (t.selectedMode == SelectedType.SINGLE) {
                if (resetSelectedId) {
                    t._selectedId = -1;
                }
                else if (t._selectedId - 1 >= 0) {
                    t._selectedId--;
                }
            }
            else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
                var sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                    t.multSelected.splice(sub, 1);
                }
                //多选的数据，在其后的全部减一
                for (var n = t.multSelected.length - 1; n >= 0; n--) {
                    var id = t.multSelected[n];
                    if (id >= listId)
                        t.multSelected[n]--;
                }
            }
            if (t._customSize) {
                if (t._customSize[listId])
                    delete t._customSize[listId];
                var newCustomSize = {};
                var size = void 0;
                for (var id in t._customSize) {
                    size = t._customSize[id];
                    var idNumber = parseInt(id);
                    newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
                }
                t._customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = .2333;
            var acts, haveCB;
            for (var n = newId != null ? newId : curLastId; n >= listId + 1; n--) {
                item = t.getItemByListId(n);
                if (item) {
                    var posData = t._calcItemPos(n - 1);
                    acts = [
                        cc.moveTo(sec, cc.v2(posData.x, posData.y)),
                    ];
                    if (n <= listId + 1) {
                        haveCB = true;
                        acts.push(cc.callFunc(function () {
                            t._aniDelRuning = false;
                            callFunc(listId);
                        }));
                    }
                    if (acts.length > 1)
                        item.runAction(cc.sequence(acts));
                    else
                        item.runAction(acts[0]);
                }
            }
            if (!haveCB) {
                t._aniDelRuning = false;
                callFunc(listId);
            }
        }, true);
    };
    /**
     * 滚动到..
     * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
     * @param {Number} timeInSecond 时间
     * @param {Number} offset 索引目标位置偏移，0-1
     * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
     */
    List.prototype.scrollTo = function (listId, timeInSecond, offset, overStress) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        if (offset === void 0) { offset = null; }
        if (overStress === void 0) { overStress = false; }
        var t = this;
        if (!t.checkInited(false))
            return;
        // t._scrollView.stopAutoScroll();
        if (timeInSecond == null) //默认0.5
            timeInSecond = .5;
        else if (timeInSecond < 0)
            timeInSecond = 0;
        if (listId < 0)
            listId = 0;
        else if (listId >= t._numItems)
            listId = t._numItems - 1;
        // 以防设置了numItems之后layout的尺寸还未更新
        if (!t._virtual && t._layout && t._layout.enabled)
            t._layout.updateLayout();
        var pos = t.getItemPos(listId);
        var targetX, targetY;
        switch (t._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                targetX = pos.left;
                if (offset != null)
                    targetX -= t.node.width * offset;
                else
                    targetX -= t._leftGap;
                pos = cc.v2(targetX, 0);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                targetX = pos.right - t.node.width;
                if (offset != null)
                    targetX += t.node.width * offset;
                else
                    targetX += t._rightGap;
                pos = cc.v2(targetX + t.content.width, 0);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                targetY = pos.top;
                if (offset != null)
                    targetY += t.node.height * offset;
                else
                    targetY += t._topGap;
                pos = cc.v2(0, -targetY);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                targetY = pos.bottom + t.node.height;
                if (offset != null)
                    targetY -= t.node.height * offset;
                else
                    targetY -= t._bottomGap;
                pos = cc.v2(0, -targetY + t.content.height);
                break;
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
        // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
        // t._scrollView.stopAutoScroll();
        if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            t._scrollToListId = listId;
            t._scrollToEndTime = ((new Date()).getTime() / 1000) + timeInSecond;
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t._scrollToSo = t.scheduleOnce(function () {
                if (!t._adheringBarrier) {
                    t.adhering = t._adheringBarrier = false;
                }
                t._scrollPos =
                    t._scrollToListId =
                        t._scrollToEndTime =
                            t._scrollToSo =
                                null;
                //cc.log('2222222222', t._adheringBarrier)
                if (overStress) {
                    // t.scrollToListId = listId;
                    var item = t.getItemByListId(listId);
                    if (item) {
                        item.runAction(cc.sequence(cc.scaleTo(.1, 1.05), cc.scaleTo(.1, 1)));
                    }
                }
            }, timeInSecond + .1);
            if (timeInSecond <= 0) {
                t._onScrolling();
            }
        }
    };
    /**
     * 计算当前滚动窗最近的Item
     */
    List.prototype._calcNearestItem = function () {
        var t = this;
        t.nearestListId = null;
        var data, center;
        if (t._virtual)
            t._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        vTop = t.viewTop;
        vRight = t.viewRight;
        vBottom = t.viewBottom;
        vLeft = t.viewLeft;
        var breakFor = false;
        for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
            data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
            if (data) {
                center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                switch (t._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        if (data.right >= vLeft) {
                            t.nearestListId = data.id;
                            if (vLeft > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        if (data.left <= vRight) {
                            t.nearestListId = data.id;
                            if (vRight < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (data.bottom <= vTop) {
                            t.nearestListId = data.id;
                            if (vTop < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (data.top >= vBottom) {
                            t.nearestListId = data.id;
                            if (vBottom > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                }
            }
        }
        //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
        data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
        if (data && data.id == t._numItems - 1) {
            center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (vRight > center)
                        t.nearestListId = data.id;
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (vLeft < center)
                        t.nearestListId = data.id;
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (vBottom < center)
                        t.nearestListId = data.id;
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (vTop > center)
                        t.nearestListId = data.id;
                    break;
            }
        }
        // cc.log('t.nearestListId =', t.nearestListId);
    };
    //上一页
    List.prototype.prePage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👈');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum - 1, timeInSecond);
    };
    //下一页
    List.prototype.nextPage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👉');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum + 1, timeInSecond);
    };
    //跳转到第几页
    List.prototype.skipPage = function (pageNum, timeInSecond) {
        var t = this;
        if (!t.checkInited())
            return;
        if (t._slideMode != SlideType.PAGE)
            return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
        if (pageNum < 0 || pageNum >= t._numItems)
            return;
        if (t.curPageNum == pageNum)
            return;
        // cc.log(pageNum);
        t.curPageNum = pageNum;
        if (t.pageChangeEvent) {
            cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
        }
        t.scrollTo(pageNum, timeInSecond);
    };
    //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
    List.prototype.calcCustomSize = function (numItems) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!t._itemTmp)
            return cc.error('Unset template item!');
        if (!t.renderEvent)
            return cc.error('Unset Render-Event!');
        t._customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
            cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);
            if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
                t._customSize[n] = t._sizeType ? temp.height : temp.width;
            }
        }
        if (!Object.keys(t._customSize).length)
            t._customSize = null;
        temp.removeFromParent();
        if (temp.destroy)
            temp.destroy();
        return t._customSize;
    };
    __decorate([
        property({ type: cc.Enum(TemplateType), tooltip: CC_DEV && '模板类型', })
    ], List.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.NODE; }
        })
    ], List.prototype, "tmpNode", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.PREFAB; }
        })
    ], List.prototype, "tmpPrefab", void 0);
    __decorate([
        property()
    ], List.prototype, "_slideMode", void 0);
    __decorate([
        property({
            type: cc.Enum(SlideType),
            tooltip: CC_DEV && '滑动模式'
        })
    ], List.prototype, "slideMode", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1, .1],
            tooltip: CC_DEV && '翻页作用距离',
            slide: true,
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageDistance", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '页面改变事件',
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageChangeEvent", void 0);
    __decorate([
        property()
    ], List.prototype, "_virtual", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: CC_DEV && '是否为虚拟列表（动态列表）'
        })
    ], List.prototype, "virtual", null);
    __decorate([
        property({
            tooltip: CC_DEV && '是否为循环列表',
            visible: function () {
                var val = this.virtual && this.slideMode == SlideType.NORMAL;
                if (!val)
                    this.cyclic = false;
                return val;
            }
        })
    ], List.prototype, "cyclic", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）',
            visible: function () { return this.virtual; }
        })
    ], List.prototype, "lackCenter", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否可滑动',
            visible: function () {
                var val = this.virtual && !this.lackCenter;
                if (!val)
                    this.lackSlide = false;
                return val;
            }
        })
    ], List.prototype, "lackSlide", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], List.prototype, "_updateRate", void 0);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 6, 1],
            tooltip: CC_DEV && '刷新频率（值越大刷新频率越低、性能越高）',
            slide: true,
        })
    ], List.prototype, "updateRate", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 12, 1],
            tooltip: CC_DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
            slide: true,
        })
    ], List.prototype, "frameByFrameRenderNum", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '渲染事件（渲染器）',
        })
    ], List.prototype, "renderEvent", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], List.prototype, "selectedMode", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && '是否重复响应单选事件',
            visible: function () { return this.selectedMode == SelectedType.SINGLE; }
        })
    ], List.prototype, "repeatEventSingle", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '触发选择事件',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], List.prototype, "selectedEvent", void 0);
    __decorate([
        property({
            serializable: false
        })
    ], List.prototype, "_numItems", void 0);
    List = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List'),
        requireComponent(cc.ScrollView)
        //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
        ,
        executionOrder(-5000)
    ], List);
    return List;
}(cc.Component));
exports.default = List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL2xpc3QvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQWtGLEVBQUUsQ0FBQyxVQUFVLEVBQTdGLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQUEsRUFBRSxnQkFBZ0Isc0JBQWtCLENBQUM7QUFFdEcsdUNBQWtDO0FBRWxDLElBQUssWUFHSjtBQUhELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBRUQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsNkNBQVUsQ0FBQTtJQUNWLGlEQUFZLENBQUE7SUFDWix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYiwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtJQUNWLCtDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFRRDtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW8rREM7UUFuK0RHLE1BQU07UUFFRSxrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZELGNBQWM7UUFNZCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFnQjtRQU1oQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLE1BQU07UUFFRSxnQkFBVSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFXakQsUUFBUTtRQVFELGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVE7UUFNQSxxQkFBZSxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMs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UUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTTtTQUM1QixDQUFDOzhDQUNvRDtJQUt0RDtRQUpDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxNQUFNLElBQUksWUFBWTtZQUMvQixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRSxDQUFDO21EQUN3QztJQU8xQztRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLE1BQU0sSUFBSSxRQUFRO1lBQzNCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlELENBQUM7K0NBQ3FEO0lBaUZ2RDtRQUhDLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUM7MkNBQzRCO0lBN05iLElBQUk7UUFOeEIsT0FBTztRQUNQLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbEIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNoQywrSEFBK0g7O1FBQzlILGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztPQUNELElBQUksQ0FvK0R4QjtJQUFELFdBQUM7Q0FwK0RELEFBbytEQyxDQXArRGlDLEVBQUUsQ0FBQyxTQUFTLEdBbytEN0M7a0JBcCtEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGRpc2FsbG93TXVsdGlwbGUsIG1lbnUsIGV4ZWN1dGlvbk9yZGVyLCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5cbmVudW0gVGVtcGxhdGVUeXBlIHtcbiAgICBOT0RFID0gMSxcbiAgICBQUkVGQUIgPSAyLFxufVxuXG5lbnVtIFNsaWRlVHlwZSB7XG4gICAgTk9STUFMID0gMSwvL+aZrumAmlxuICAgIEFESEVSSU5HID0gMiwvL+eymOmZhOaooeW8j++8jOWwhuW8uuWItuWFs+mXrea7muWKqOaDr+aAp1xuICAgIFBBR0UgPSAzLC8v6aG16Z2i5qih5byP77yM5bCG5by65Yi25YWz6Zet5rua5Yqo5oOv5oCnXG59XG5cbmVudW0gU2VsZWN0ZWRUeXBlIHtcbiAgICBOT05FID0gMCxcbiAgICBTSU5HTEUgPSAxLC8v5Y2V6YCJXG4gICAgTVVMVCA9IDIsLy/lpJrpgIlcbn1cblxuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlKClcbkBtZW51KCfoh6rlrprkuYnnu4Tku7YvTGlzdCcpXG5AcmVxdWlyZUNvbXBvbmVudChjYy5TY3JvbGxWaWV3KVxuLy/ohJrmnKznlJ/lkb3lkajmnJ/lm57osIPnmoTmiafooYzkvJjlhYjnuqfjgILlsI/kuo4gMCDnmoTohJrmnKzlsIbkvJjlhYjmiafooYzvvIzlpKfkuo4gMCDnmoTohJrmnKzlsIbmnIDlkI7miafooYzjgILor6XkvJjlhYjnuqflj6rlr7kgb25Mb2FkLCBvbkVuYWJsZSwgc3RhcnQsIHVwZGF0ZSDlkowgbGF0ZVVwZGF0ZSDmnInmlYjvvIzlr7kgb25EaXNhYmxlIOWSjCBvbkRlc3Ryb3kg5peg5pWI44CCXG5AZXhlY3V0aW9uT3JkZXIoLTUwMDApXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvL+aooeadv+exu+Wei1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVGVtcGxhdGVUeXBlKSwgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb/nsbvlnosnLCB9KVxuICAgIHByaXZhdGUgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUgPSBUZW1wbGF0ZVR5cGUuTk9ERTtcbiAgICAvL+aooeadv0l0ZW3vvIhOb2Rl77yJXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb9JdGVtJyxcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5OT0RFOyB9XG4gICAgfSlcbiAgICB0bXBOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL+aooeadv0l0ZW3vvIhQcmVmYWLvvIlcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/SXRlbScsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PSBUZW1wbGF0ZVR5cGUuUFJFRkFCOyB9XG4gICAgfSlcbiAgICB0bXBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgLy/mu5HliqjmqKHlvI9cbiAgICBAcHJvcGVydHkoKVxuICAgIHByaXZhdGUgX3NsaWRlTW9kZTogU2xpZGVUeXBlID0gU2xpZGVUeXBlLk5PUk1BTDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFNsaWRlVHlwZSksXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5ruR5Yqo5qih5byPJ1xuICAgIH0pXG4gICAgc2V0IHNsaWRlTW9kZSh2YWw6IFNsaWRlVHlwZSkge1xuICAgICAgICB0aGlzLl9zbGlkZU1vZGUgPSB2YWw7XG4gICAgfVxuICAgIGdldCBzbGlkZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGU7XG4gICAgfVxuICAgIC8v57+76aG15L2c55So6Led56a7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgIHJhbmdlOiBbMCwgMSwgLjFdLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+e/u+mhteS9nOeUqOi3neemuycsXG4gICAgICAgIHNsaWRlOiB0cnVlLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFOyB9XG4gICAgfSlcbiAgICBwdWJsaWMgcGFnZURpc3RhbmNlOiBudW1iZXIgPSAuMztcbiAgICAvL+mhtemdouaUueWPmOS6i+S7tlxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6aG16Z2i5pS55Y+Y5LqL5Lu2JyxcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTsgfVxuICAgIH0pXG4gICAgcHJpdmF0ZSBwYWdlQ2hhbmdlRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgIC8v5piv5ZCm5Li66Jma5ouf5YiX6KGo77yI5Yqo5oCB5YiX6KGo77yJXG4gICAgQHByb3BlcnR5KClcbiAgICBwcml2YXRlIF92aXJ0dWFsOiBib29sZWFuID0gdHJ1ZTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Cb29sZWFuLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpuS4uuiZmuaLn+WIl+ihqO+8iOWKqOaAgeWIl+ihqO+8iSdcbiAgICB9KVxuICAgIHNldCB2aXJ0dWFsKHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsID0gdmFsO1xuICAgICAgICBpZiAoIUNDX0RFViAmJiB0aGlzLl9udW1JdGVtcyAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB2aXJ0dWFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbDtcbiAgICB9XG4gICAgLy/mmK/lkKbkuLrlvqrnjq/liJfooahcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpuS4uuW+queOr+WIl+ihqCcsXG4gICAgICAgIHZpc2libGUoKSB7XG4gICAgICAgICAgICBsZXQgdmFsOiBib29sZWFuID0gdGhpcy52aXJ0dWFsICYmIHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5OT1JNQUw7XG4gICAgICAgICAgICBpZiAoIXZhbClcbiAgICAgICAgICAgICAgICB0aGlzLmN5Y2xpYyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcHVibGljIGN5Y2xpYzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8v57y655yB5bGF5LitXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdJdGVt5pWw6YeP5LiN6Laz5Lul5aGr5ruhQ29udGVudOaXtu+8jOaYr+WQpuWxheS4reaYvuekukl0ZW3vvIjkuI3mlK/mjIFHcmlk5biD5bGA77yJJyxcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudmlydHVhbDsgfVxuICAgIH0pXG4gICAgcHVibGljIGxhY2tDZW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvL+e8uuecgeWPr+a7keWKqFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnSXRlbeaVsOmHj+S4jei2s+S7peWhq+a7oUNvbnRlbnTml7bvvIzmmK/lkKblj6/mu5HliqgnLFxuICAgICAgICB2aXNpYmxlKCkge1xuICAgICAgICAgICAgbGV0IHZhbDogYm9vbGVhbiA9IHRoaXMudmlydHVhbCAmJiAhdGhpcy5sYWNrQ2VudGVyO1xuICAgICAgICAgICAgaWYgKCF2YWwpXG4gICAgICAgICAgICAgICAgdGhpcy5sYWNrU2xpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHB1YmxpYyBsYWNrU2xpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvL+WIt+aWsOmikeeOh1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcbiAgICBwcml2YXRlIF91cGRhdGVSYXRlOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgIHJhbmdlOiBbMCwgNiwgMV0sXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5Yi35paw6aKR546H77yI5YC86LaK5aSn5Yi35paw6aKR546H6LaK5L2O44CB5oCn6IO96LaK6auY77yJJyxcbiAgICAgICAgc2xpZGU6IHRydWUsXG4gICAgfSlcbiAgICBzZXQgdXBkYXRlUmF0ZSh2YWw6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsID49IDAgJiYgdmFsIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJhdGUgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHVwZGF0ZVJhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVSYXRlO1xuICAgIH1cbiAgICAvL+WIhuW4p+a4suafk++8iOavj+W4p+a4suafk+eahEl0ZW3mlbDph4/vvIg8PTDml7blhbPpl63liIbluKfmuLLmn5PvvInvvIlcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICByYW5nZTogWzAsIDEyLCAxXSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgJDluKfmuLLmn5Pml7bvvIzmr4/luKfmuLLmn5PnmoRJdGVt5pWw6YeP77yIPD0w5pe25YWz6Zet5YiG5bin5riy5p+T77yJJyxcbiAgICAgICAgc2xpZGU6IHRydWUsXG4gICAgfSlcbiAgICBwdWJsaWMgZnJhbWVCeUZyYW1lUmVuZGVyTnVtOiBudW1iZXIgPSAwO1xuICAgIC8v5riy5p+T5LqL5Lu277yI5riy5p+T5Zmo77yJXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmuLLmn5Pkuovku7bvvIjmuLLmn5PlmajvvIknLFxuICAgIH0pXG4gICAgcHJpdmF0ZSByZW5kZXJFdmVudDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgLy/pgInmi6nmqKHlvI9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFNlbGVjdGVkVHlwZSksXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6YCJ5oup5qih5byPJ1xuICAgIH0pXG4gICAgcHVibGljIHNlbGVjdGVkTW9kZTogU2VsZWN0ZWRUeXBlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmmK/lkKbph43lpI3lk43lupTljZXpgInkuovku7YnLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRTsgfVxuICAgIH0pXG4gICAgcHVibGljIHJlcGVhdEV2ZW50U2luZ2xlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy/op6blj5HpgInmi6nkuovku7ZcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+inpuWPkemAieaLqeS6i+S7ticsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FOyB9XG4gICAgfSlcbiAgICBwcml2YXRlIHNlbGVjdGVkRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBudWxsLy9uZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgIC8v5b2T5YmN6YCJ5oupaWRcbiAgICBwcml2YXRlIF9zZWxlY3RlZElkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgbXVsdFNlbGVjdGVkOiBudW1iZXJbXTtcbiAgICBzZXQgc2VsZWN0ZWRJZCh2YWw6IG51bWJlcikge1xuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcbiAgICAgICAgbGV0IGl0ZW06IGFueTtcbiAgICAgICAgc3dpdGNoICh0LnNlbGVjdGVkTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU0lOR0xFOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0LnJlcGVhdEV2ZW50U2luZ2xlICYmIHZhbCA9PSB0Ll9zZWxlY3RlZElkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKCFpdGVtICYmIHZhbCA+PSAwKVxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcbiAgICAgICAgICAgICAgICBpZiAodC5fc2VsZWN0ZWRJZCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XG4gICAgICAgICAgICAgICAgZWxzZSAvL+WmguaenO+8nDDliJnlj5bmtojpgInmi6nvvIzmiopfbGFzdFNlbGVjdGVkSWTkuZ/nva7nqbrlkKfvvIzlpoLmnpzku6XlkI7mnInnibnmrorpnIDmsYLlho3mlLnlkKfjgIJcbiAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSB2YWw7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHQuX2xhc3RTZWxlY3RlZElkID49IDAgJiYgdC5fbGFzdFNlbGVjdGVkSWQgIT0gdC5fc2VsZWN0ZWRJZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuX2xhc3RTZWxlY3RlZElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0SXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDoge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZCh2YWwpO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAodC5fc2VsZWN0ZWRJZCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XG4gICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9ICFsaXN0SXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGJvb2w7XG4gICAgICAgICAgICAgICAgbGV0IHN1YjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZih2YWwpO1xuICAgICAgICAgICAgICAgIGlmIChib29sICYmIHN1YiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJvb2wgJiYgc3ViID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyksIGJvb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQ7XG4gICAgfVxuICAgIHByaXZhdGUgX2ZvcmNlVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfYWxpZ246IG51bWJlcjtcbiAgICBwcml2YXRlIF9ob3Jpem9udGFsRGlyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdmVydGljYWxEaXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zdGFydEF4aXM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9hbGlnbkNhbGNUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNvbnRlbnQ6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBmaXJzdExpc3RJZDogbnVtYmVyO1xuICAgIHB1YmxpYyBkaXNwbGF5SXRlbU51bTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3VwZGF0ZURvbmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX3VwZGF0ZUNvdW50ZXI6IG51bWJlcjtcbiAgICBwdWJsaWMgX2FjdHVhbE51bUl0ZW1zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY3ljbGljTnVtOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY3ljbGljUG9zMTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2N5Y2xpY1BvczI6IG51bWJlcjtcbiAgICAvL+WIl+ihqOaVsOmHj1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgICB9KVxuICAgIHByaXZhdGUgX251bUl0ZW1zOiBudW1iZXIgPSAwO1xuICAgIHNldCBudW1JdGVtcyh2YWw6IG51bWJlcikge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPCAwKSB7XG4gICAgICAgICAgICBjYy5lcnJvcignbnVtSXRlbXMgc2V0IHRoZSB3cm9uZzo6JywgdmFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0Ll9hY3R1YWxOdW1JdGVtcyA9IHQuX251bUl0ZW1zID0gdmFsO1xuICAgICAgICB0Ll9mb3JjZVVwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHQuX3ZpcnR1YWwpIHtcbiAgICAgICAgICAgIHQuX3Jlc2l6ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgIGlmICh0LmN5Y2xpYykge1xuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zID0gdC5fY3ljbGljTnVtICogdC5fbnVtSXRlbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xuICAgICAgICAgICAgaWYgKCF0LmZyYW1lQnlGcmFtZVJlbmRlck51bSAmJiB0LnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcbiAgICAgICAgICAgICAgICB0LmN1clBhZ2VOdW0gPSB0Lm5lYXJlc3RMaXN0SWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGF5b3V0OiBjYy5MYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICAgICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdC5fZGVsUmVkdW5kYW50SXRlbSgpO1xuXG4gICAgICAgICAgICB0LmZpcnN0TGlzdElkID0gMDtcbiAgICAgICAgICAgIGlmICh0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAvL+WFiOa4suafk+WHoOS4quWHuuadpVxuICAgICAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gdC5fbnVtSXRlbXMgPyB0Ll9udW1JdGVtcyA6IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDA7IG4gPCBsZW47IG4rKykge1xuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPCB0Ll9udW1JdGVtcykge1xuICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XG4gICAgICAgICAgICAgICAgICAgIHQuX3VwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDA7IG4gPCB2YWw7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LmRpc3BsYXlJdGVtTnVtID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBudW1JdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdHVhbE51bUl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXc7XG4gICAgZ2V0IHNjcm9sbFZpZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxWaWV3O1xuICAgIH1cbiAgICBwcml2YXRlIF9sYXlvdXQ6IGNjLkxheW91dDtcbiAgICBwcml2YXRlIF9yZXNpemVNb2RlOiBjYy5MYXlvdXQuUmVzaXplTW9kZTtcbiAgICBwcml2YXRlIF90b3BHYXA6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yaWdodEdhcDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2JvdHRvbUdhcDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xlZnRHYXA6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2NvbHVtbkdhcDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xpbmVHYXA6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jb2xMaW5lTnVtOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9sYXN0RGlzcGxheURhdGE6IG51bWJlcltdO1xuICAgIHB1YmxpYyBkaXNwbGF5RGF0YTogYW55W107XG4gICAgcHJpdmF0ZSBfcG9vbDogY2MuTm9kZVBvb2w7XG5cbiAgICBwcml2YXRlIF9pdGVtVG1wOiBhbnk7XG4gICAgcHJpdmF0ZSBfbmVlZFVwZGF0ZVdpZGdldDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2l0ZW1TaXplOiBjYy5TaXplO1xuICAgIHByaXZhdGUgX3NpemVUeXBlOiBib29sZWFuO1xuXG4gICAgcHVibGljIF9jdXN0b21TaXplOiBhbnk7XG5cbiAgICBwcml2YXRlIGZyYW1lQ291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9hbmlEZWxSdW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHZpZXdUb3A6IG51bWJlcjtcbiAgICBwcml2YXRlIHZpZXdSaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgdmlld0JvdHRvbTogbnVtYmVyO1xuICAgIHByaXZhdGUgdmlld0xlZnQ6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2RvbmVBZnRlclVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBlbGFzdGljVG9wOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBlbGFzdGljUmlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGVsYXN0aWNCb3R0b206IG51bWJlcjtcbiAgICBwcml2YXRlIGVsYXN0aWNMZWZ0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHNjcm9sbFRvTGlzdElkOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGFkaGVyaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9hZGhlcmluZ0JhcnJpZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG5lYXJlc3RMaXN0SWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBjdXJQYWdlTnVtOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2JlZ2FuUG9zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsUG9zOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb0xpc3RJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3Njcm9sbFRvRW5kVGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3Njcm9sbFRvU286IGFueTtcblxuICAgIHByaXZhdGUgX2xhY2s6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYWxsSXRlbVNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9hbGxJdGVtU2l6ZU5vRWRnZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsSXRlbTogYW55Oy8v5b2T5YmN5o6n5Yi2IFNjcm9sbFZpZXcg5rua5Yqo55qEIEl0ZW1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcbiAgICAgICAgaWYgKHQuX2l0ZW1UbXAgJiYgdC5faXRlbVRtcC5pc1ZhbGlkKVxuICAgICAgICAgICAgdC5faXRlbVRtcC5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0LnRtcE5vZGUgJiYgdC50bXBOb2RlLmlzVmFsaWQpXG4gICAgICAgICAgICB0LnRtcE5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyBsZXQgdG90YWwgPSB0Ll9wb29sLnNpemUoKTtcbiAgICAgICAgd2hpbGUgKHQuX3Bvb2wuc2l6ZSgpKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHQuX3Bvb2wuZ2V0KCk7XG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodG90YWwpXG4gICAgICAgIC8vICAgICBjYy5sb2coJy0tLS0tLS0tLS0tLS0tLS0tJyArIHQubm9kZS5uYW1lICsgJzxMaXN0PiBkZXN0cm95IG5vZGUgdG90YWwgbnVtLiA9PicsIHRvdGFsKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgLy8gaWYgKCFDQ19FRElUT1IpIFxuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIC8vIGlmICghQ0NfRURJVE9SKSBcbiAgICAgICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XG4gICAgfVxuICAgIC8v5rOo5YaM5LqL5Lu2XG4gICAgX3JlZ2lzdGVyRXZlbnQoKSB7XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vbigndG91Y2gtdXAnLCB0Ll9vblRvdWNoVXAsIHQpO1xuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtZW5kZWQnLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xuICAgIH1cbiAgICAvL+WNuOi9veS6i+S7tlxuICAgIF91bnJlZ2lzdGVyRXZlbnQoKSB7XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xuICAgICAgICB0Lm5vZGUub2ZmKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCk7XG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcbiAgICB9XG4gICAgLy/liJ3lp4vljJblkITnp40uLlxuICAgIF9pbml0KCkge1xuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcbiAgICAgICAgaWYgKHQuX2luaXRlZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0Ll9zY3JvbGxWaWV3ID0gdC5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcblxuICAgICAgICB0LmNvbnRlbnQgPSB0Ll9zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgICAgIGlmICghdC5jb250ZW50KSB7XG4gICAgICAgICAgICBjYy5lcnJvcih0Lm5vZGUubmFtZSArIFwiJ3MgY2MuU2Nyb2xsVmlldyB1bnNldCBjb250ZW50IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHQuX2xheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcblxuICAgICAgICB0Ll9hbGlnbiA9IHQuX2xheW91dC50eXBlOyAvL+aOkuWIl+aooeW8j1xuICAgICAgICB0Ll9yZXNpemVNb2RlID0gdC5fbGF5b3V0LnJlc2l6ZU1vZGU7IC8v6Ieq6YCC5bqU5qih5byPXG4gICAgICAgIHQuX3N0YXJ0QXhpcyA9IHQuX2xheW91dC5zdGFydEF4aXM7XG5cbiAgICAgICAgdC5fdG9wR2FwID0gdC5fbGF5b3V0LnBhZGRpbmdUb3A7IC8v6aG26L656LedXG4gICAgICAgIHQuX3JpZ2h0R2FwID0gdC5fbGF5b3V0LnBhZGRpbmdSaWdodDsgLy/lj7Povrnot51cbiAgICAgICAgdC5fYm90dG9tR2FwID0gdC5fbGF5b3V0LnBhZGRpbmdCb3R0b207IC8v5bqV6L656LedXG4gICAgICAgIHQuX2xlZnRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0xlZnQ7IC8v5bem6L656LedXG5cbiAgICAgICAgdC5fY29sdW1uR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdYOyAvL+WIl+i3nVxuICAgICAgICB0Ll9saW5lR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdZOyAvL+ihjOi3nVxuXG4gICAgICAgIHQuX2NvbExpbmVOdW07IC8v5YiX5pWw5oiW6KGM5pWw77yI6Z2eR1JJROaooeW8j+WImT0x77yM6KGo56S65Y2V5YiX5oiW5Y2V6KGM77yJO1xuXG4gICAgICAgIHQuX3ZlcnRpY2FsRGlyID0gdC5fbGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uOyAvL+WeguebtOaOkuWIl+WtkOiKgueCueeahOaWueWQkVxuICAgICAgICB0Ll9ob3Jpem9udGFsRGlyID0gdC5fbGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb247IC8v5rC05bmz5o6S5YiX5a2Q6IqC54K555qE5pa55ZCRXG5cbiAgICAgICAgdC5zZXRUZW1wbGF0ZUl0ZW0oY2MuaW5zdGFudGlhdGUodC50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQiA/IHQudG1wUHJlZmFiIDogdC50bXBOb2RlKSk7XG5cbiAgICAgICAgLy8g54m55a6a55qE5ruR5Yqo5qih5byP5aSE55CGXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HIHx8IHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5pbmVydGlhID0gZmFsc2U7XG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXQudmlydHVhbCkgICAgICAgICAvLyBsYWNrQ2VudGVyIOS7heaUr+aMgSBWaXJ0dWFsIOaooeW8j1xuICAgICAgICAgICAgdC5sYWNrQ2VudGVyID0gZmFsc2U7XG5cbiAgICAgICAgdC5fbGFzdERpc3BsYXlEYXRhID0gW107IC8v5pyA5ZCO5LiA5qyh5Yi35paw55qE5pWw5o2uXG4gICAgICAgIHQuZGlzcGxheURhdGEgPSBbXTsgLy/lvZPliY3mlbDmja5cbiAgICAgICAgdC5fcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpOyAgICAvL+i/meaYr+S4quaxoOWtkC4uXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gZmFsc2U7ICAgICAgICAgLy/mmK/lkKblvLrliLbmm7TmlrBcbiAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IDA7ICAgICAgICAgICAvL+W9k+WJjeWIhuW4p+a4suafk+W4p+aVsFxuICAgICAgICB0Ll91cGRhdGVEb25lID0gdHJ1ZTsgICAgICAgICAgIC8v5YiG5bin5riy5p+T5piv5ZCm5a6M5oiQXG5cbiAgICAgICAgdC5jdXJQYWdlTnVtID0gMDsgICAgICAgICAgICAgICAvL+W9k+WJjemhteaVsFxuXG4gICAgICAgIGlmICh0LmN5Y2xpYyB8fCAwKSB7XG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9wcm9jZXNzQXV0b1Njcm9sbGluZyA9IHRoaXMuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nLmJpbmQodCk7XG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9zdGFydEJvdW5jZUJhY2tJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3Ll9zY3JvbGxDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5faG9yaXpvbnRhbERpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOa4heepuiBjb250ZW50XG4gICAgICAgIC8vIHQuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xuICAgICAgICAvLyAgICAgY2hpbGQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAvLyAgICAgaWYgKGNoaWxkICE9IHQudG1wTm9kZSAmJiBjaGlsZC5pc1ZhbGlkKVxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHQuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDkuLrkuoblrp7njrDlvqrnjq/liJfooajvvIzlv4XpobvopoblhpljYy5TY3JvbGxWaWV355qE5p+Q5Lqb5Ye95pWwXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR0XG4gICAgICovXG4gICAgX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nKGR0OiBudW1iZXIpIHtcbiAgICAgICAgLy8gbGV0IGlzQXV0b1Njcm9sbEJyYWtlID0gdGhpcy5fc2Nyb2xsVmlldy5faXNOZWNlc3NhcnlBdXRvU2Nyb2xsQnJha2UoKTtcbiAgICAgICAgbGV0IGJyYWtpbmdGYWN0b3I6IG51bWJlciA9IDE7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lJ10gKz0gZHQgKiAoMSAvIGJyYWtpbmdGYWN0b3IpO1xuXG4gICAgICAgIGxldCBwZXJjZW50YWdlOiBudW1iZXIgPSBNYXRoLm1pbigxLCB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbEFjY3VtdWxhdGVkVGltZSddIC8gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxUb3RhbFRpbWUnXSk7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbEF0dGVudWF0ZSddKSB7XG4gICAgICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gcGVyY2VudGFnZSAtIDE7XG4gICAgICAgICAgICBwZXJjZW50YWdlID0gdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uOiBhbnkgPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQodGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxUYXJnZXREZWx0YSddLm11bChwZXJjZW50YWdlKSk7XG4gICAgICAgIGxldCBFUFNJTE9OOiBudW1iZXIgPSB0aGlzLl9zY3JvbGxWaWV3WydnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nJ10oKTtcbiAgICAgICAgbGV0IHJlYWNoZWRFbmQ6IGJvb2xlYW4gPSBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSkgPD0gRVBTSUxPTjtcbiAgICAgICAgLy8gY2MubG9nKHJlYWNoZWRFbmQsIE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSwgRVBTSUxPTilcblxuICAgICAgICBsZXQgZmlyZUV2ZW50OiBib29sZWFuID0gTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpIDw9IHRoaXMuX3Njcm9sbFZpZXdbJ2dldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmcnXSgpO1xuICAgICAgICBpZiAoZmlyZUV2ZW50ICYmICF0aGlzLl9zY3JvbGxWaWV3WydfaXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19kaXNwYXRjaEV2ZW50J10oJ3Njcm9sbC1lbmRlZC13aXRoLXRocmVzaG9sZCcpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCddID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLl9zY3JvbGxWaWV3LmVsYXN0aWMgJiYgIXJlYWNoZWRFbmQpIHtcbiAgICAgICAgLy8gICAgIGxldCBicmFrZU9mZnNldFBvc2l0aW9uID0gbmV3UG9zaXRpb24uc3ViKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxCcmFraW5nU3RhcnRQb3NpdGlvbik7XG4gICAgICAgIC8vICAgICBpZiAoaXNBdXRvU2Nyb2xsQnJha2UpIHtcbiAgICAgICAgLy8gICAgICAgICBicmFrZU9mZnNldFBvc2l0aW9uID0gYnJha2VPZmZzZXRQb3NpdGlvbi5tdWwoYnJha2luZ0ZhY3Rvcik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxCcmFraW5nU3RhcnRQb3NpdGlvbi5hZGQoYnJha2VPZmZzZXRQb3NpdGlvbik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBsZXQgbW92ZURlbHRhID0gbmV3UG9zaXRpb24uc3ViKHRoaXMuX3Njcm9sbFZpZXcuZ2V0Q29udGVudFBvc2l0aW9uKCkpO1xuICAgICAgICAvLyAgICAgbGV0IG91dE9mQm91bmRhcnkgPSB0aGlzLl9zY3JvbGxWaWV3Ll9nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShtb3ZlRGVsdGEpO1xuICAgICAgICAvLyAgICAgaWYgKCFvdXRPZkJvdW5kYXJ5LmZ1enp5RXF1YWxzKGNjLnYyKDAsIDApLCBFUFNJTE9OKSkge1xuICAgICAgICAvLyAgICAgICAgIG5ld1Bvc2l0aW9uID0gbmV3UG9zaXRpb24uYWRkKG91dE9mQm91bmRhcnkpO1xuICAgICAgICAvLyAgICAgICAgIHJlYWNoZWRFbmQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHJlYWNoZWRFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsaW5nJ10gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWx0YU1vdmU6IGFueSA9IG5ld1Bvc2l0aW9uLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcbiAgICAgICAgLy8gY2MubG9nKGRlbHRhTW92ZSlcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX21vdmVDb250ZW50J10odGhpcy5fc2Nyb2xsVmlld1snX2NsYW1wRGVsdGEnXShkZWx0YU1vdmUpLCByZWFjaGVkRW5kKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2Rpc3BhdGNoRXZlbnQnXSgnc2Nyb2xsaW5nJyk7XG5cbiAgICAgICAgLy8gc2NvbGxUbyBBUEkgY29udHJvbGwgbW92ZVxuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsaW5nJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19pc0JvdW5jaW5nJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19zY3JvbGxpbmcnXSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2Rpc3BhdGNoRXZlbnQnXSgnc2Nyb2xsLWVuZGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/orr7nva7mqKHmnb9JdGVtXG4gICAgc2V0VGVtcGxhdGVJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICB0Ll9pdGVtVG1wID0gaXRlbTtcblxuICAgICAgICBpZiAodC5fcmVzaXplTW9kZSA9PSBjYy5MYXlvdXQuUmVzaXplTW9kZS5DSElMRFJFTilcbiAgICAgICAgICAgIHQuX2l0ZW1TaXplID0gdC5fbGF5b3V0LmNlbGxTaXplO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0Ll9pdGVtU2l6ZSA9IGNjLnNpemUoaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xuXG4gICAgICAgIC8v6I635Y+WTGlzdEl0ZW3vvIzlpoLmnpzmsqHmnInlsLHlj5bmtojpgInmi6nmqKHlvI9cbiAgICAgICAgbGV0IGNvbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcbiAgICAgICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIWNvbSlcbiAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgIC8vIGlmIChjb20pIHtcbiAgICAgICAgLy8gICAgIGlmICghY29tLl9idG5Db20gJiYgIWl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcbiAgICAgICAgLy8gICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgIHQuc2VsZWN0ZWRNb2RlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XG4gICAgICAgIH1cbiAgICAgICAgY29tID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgaWYgKGNvbSAmJiBjb20uZW5hYmxlZCkge1xuICAgICAgICAgICAgdC5fbmVlZFVwZGF0ZVdpZGdldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5NVUxUKVxuICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQgPSBbXTtcblxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6K6h566X5YiX5pWwXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbVc6IG51bWJlciA9IHQuY29udGVudC53aWR0aCAtIHQuX2xlZnRHYXAgLSB0Ll9yaWdodEdhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltVyArIHQuX2NvbHVtbkdhcCkgLyAodC5faXRlbVNpemUud2lkdGggKyB0Ll9jb2x1bW5HYXApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfooYzmlbBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmltSDogbnVtYmVyID0gdC5jb250ZW50LmhlaWdodCAtIHQuX3RvcEdhcCAtIHQuX2JvdHRvbUdhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltSCArIHQuX2xpbmVHYXApIC8gKHQuX2l0ZW1TaXplLmhlaWdodCArIHQuX2xpbmVHYXApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5qOA5p+l5piv5ZCm5Yid5aeL5YyWXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBwcmludExvZyDmmK/lkKbmiZPljbDplJnor6/kv6Hmga9cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGNoZWNrSW5pdGVkKHByaW50TG9nOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2luaXRlZCkge1xuICAgICAgICAgICAgaWYgKHByaW50TG9nKVxuICAgICAgICAgICAgICAgIGNjLmVycm9yKCdMaXN0IGluaXRpYWxpemF0aW9uIG5vdCBjb21wbGV0ZWQhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8v56aB55SoIExheW91dCDnu4Tku7bvvIzoh6rooYzorqHnrpcgQ29udGVudCBTaXplXG4gICAgX3Jlc2l6ZUNvbnRlbnQoKSB7XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXI7XG5cbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0Ll9nZXRGaXhlZFNpemUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUud2lkdGggKiAodC5fbnVtSXRlbXMgLSBmaXhlZC5jb3VudCkpICsgKHQuX2NvbHVtbkdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX3JpZ2h0R2FwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyAodC5faXRlbVNpemUud2lkdGggKiB0Ll9udW1JdGVtcykgKyAodC5fY29sdW1uR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fcmlnaHRHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdC5fZ2V0Rml4ZWRTaXplKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiB0Ll9udW1JdGVtcykgKyAodC5fbGluZUdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX2JvdHRvbUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcbiAgICAgICAgICAgICAgICAvL+e9keagvOaooeW8j+S4jeaUr+aMgeWxheS4rVxuICAgICAgICAgICAgICAgIGlmICh0LmxhY2tDZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgIHQubGFja0NlbnRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTnVtOiBudW1iZXIgPSBNYXRoLmNlaWwodC5fbnVtSXRlbXMgLyB0Ll9jb2xMaW5lTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiBsaW5lTnVtKSArICh0Ll9saW5lR2FwICogKGxpbmVOdW0gLSAxKSkgKyB0Ll9ib3R0b21HYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xOdW06IG51bWJlciA9IE1hdGguY2VpbCh0Ll9udW1JdGVtcyAvIHQuX2NvbExpbmVOdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIGNvbE51bSkgKyAodC5fY29sdW1uR2FwICogKGNvbE51bSAtIDEpKSArIHQuX3JpZ2h0R2FwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxheW91dDogY2MuTGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICBpZiAobGF5b3V0KVxuICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0Ll9hbGxJdGVtU2l6ZSA9IHJlc3VsdDtcbiAgICAgICAgdC5fYWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZSAtICh0Ll9zaXplVHlwZSA/ICh0Ll90b3BHYXAgKyB0Ll9ib3R0b21HYXApIDogKHQuX2xlZnRHYXAgKyB0Ll9yaWdodEdhcCkpO1xuXG4gICAgICAgIGlmICh0LmN5Y2xpYykge1xuICAgICAgICAgICAgbGV0IHRvdGFsU2l6ZTogbnVtYmVyID0gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XG5cbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczEgPSAwO1xuICAgICAgICAgICAgdG90YWxTaXplIC09IHQuX2N5Y2xpY1BvczE7XG4gICAgICAgICAgICB0Ll9jeWNsaWNOdW0gPSBNYXRoLmNlaWwodG90YWxTaXplIC8gdC5fYWxsSXRlbVNpemVOb0VkZ2UpICsgMTtcbiAgICAgICAgICAgIGxldCBzcGFjaW5nOiBudW1iZXIgPSB0Ll9zaXplVHlwZSA/IHQuX2xpbmVHYXAgOiB0Ll9jb2x1bW5HYXA7XG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MyID0gdC5fY3ljbGljUG9zMSArIHQuX2FsbEl0ZW1TaXplTm9FZGdlICsgc3BhY2luZztcbiAgICAgICAgICAgIHQuX2N5Y2xpY0FsbEl0ZW1TaXplID0gdC5fYWxsSXRlbVNpemUgKyAodC5fYWxsSXRlbVNpemVOb0VkZ2UgKiAodC5fY3ljbGljTnVtIC0gMSkpICsgKHNwYWNpbmcgKiAodC5fY3ljbGljTnVtIC0gMSkpO1xuICAgICAgICAgICAgdC5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqIHQuX2N5Y2xpY051bTtcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlICs9IHNwYWNpbmcgKiAodC5fY3ljbGljTnVtIC0gMSk7XG4gICAgICAgICAgICAvLyBjYy5sb2coJ19jeWNsaWNOdW0gLT4nLCB0Ll9jeWNsaWNOdW0sIHQuX2FsbEl0ZW1TaXplTm9FZGdlLCB0Ll9hbGxJdGVtU2l6ZSwgdC5fY3ljbGljUG9zMSwgdC5fY3ljbGljUG9zMik7XG4gICAgICAgIH1cblxuICAgICAgICB0Ll9sYWNrID0gIXQuY3ljbGljICYmIHQuX2FsbEl0ZW1TaXplIDwgKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XG4gICAgICAgIGxldCBzbGlkZU9mZnNldDogbnVtYmVyID0gKCghdC5fbGFjayB8fCAhdC5sYWNrQ2VudGVyKSAmJiB0LmxhY2tTbGlkZSkgPyAwIDogLjE7XG5cbiAgICAgICAgbGV0IHRhcmdldFdIOiBudW1iZXIgPSB0Ll9sYWNrID8gKCh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpIC0gc2xpZGVPZmZzZXQpIDogKHQuY3ljbGljID8gdC5fY3ljbGljQWxsSXRlbVNpemUgOiB0Ll9hbGxJdGVtU2l6ZSk7XG4gICAgICAgIGlmICh0YXJnZXRXSCA8IDApXG4gICAgICAgICAgICB0YXJnZXRXSCA9IDA7XG5cbiAgICAgICAgaWYgKHQuX3NpemVUeXBlKSB7XG4gICAgICAgICAgICB0LmNvbnRlbnQuaGVpZ2h0ID0gdGFyZ2V0V0g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0LmNvbnRlbnQud2lkdGggPSB0YXJnZXRXSDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNjLmxvZygnX3Jlc2l6ZUNvbnRlbnQoKSAgbnVtSXRlbXMgPScsIHQuX251bUl0ZW1zLCAn77yMY29udGVudCA9JywgdC5jb250ZW50KTtcbiAgICB9XG5cbiAgICAvL+a7muWKqOi/m+ihjOaXti4uLlxuICAgIF9vblNjcm9sbGluZyhldjogY2MuRXZlbnQgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lQ291bnQgPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XG4gICAgICAgIGlmICghdGhpcy5fZm9yY2VVcGRhdGUgJiYgKGV2ICYmIGV2LnR5cGUgIT0gJ3Njcm9sbC1lbmRlZCcpICYmIHRoaXMuZnJhbWVDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudC0tO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvL+W+queOr+WIl+ihqOWkhOeQhlxuICAgICAgICBpZiAodGhpcy5jeWNsaWMpIHtcbiAgICAgICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgc2Nyb2xsUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyBzY3JvbGxQb3MueSA6IHNjcm9sbFBvcy54O1xuXG4gICAgICAgICAgICBsZXQgYWRkVmFsID0gdGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgKyAodGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9saW5lR2FwIDogdGhpcy5fY29sdW1uR2FwKTtcbiAgICAgICAgICAgIGxldCBhZGQ6IGFueSA9IHRoaXMuX3NpemVUeXBlID8gY2MudjIoMCwgYWRkVmFsKSA6IGNjLnYyKGFkZFZhbCwgMCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPiAtdGhpcy5fY3ljbGljUG9zMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5zdWIoYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX2JlZ2FuUG9zICs9IGFkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX2JlZ2FuUG9zIC09IGFkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5fY3ljbGljUG9zMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSB0aGlzLl9jeWNsaWNQb3MyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gdGhpcy5fY3ljbGljUG9zMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5zdWIoYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5fY3ljbGljUG9zMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5zdWIoYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zIDwgLXRoaXMuX2N5Y2xpY1BvczIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uYWRkKGFkZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYWxjVmlld1BvcygpO1xuXG4gICAgICAgIGxldCB2VG9wOiBudW1iZXIsIHZSaWdodDogbnVtYmVyLCB2Qm90dG9tOiBudW1iZXIsIHZMZWZ0OiBudW1iZXI7XG4gICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSkge1xuICAgICAgICAgICAgdlRvcCA9IHRoaXMudmlld1RvcDtcbiAgICAgICAgICAgIHZCb3R0b20gPSB0aGlzLnZpZXdCb3R0b207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2UmlnaHQgPSB0aGlzLnZpZXdSaWdodDtcbiAgICAgICAgICAgIHZMZWZ0ID0gdGhpcy52aWV3TGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhID0gW107XG4gICAgICAgICAgICBsZXQgaXRlbVBvczogYW55O1xuXG4gICAgICAgICAgICBsZXQgY3VySWQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBsZXQgZW5kSWQ6IG51bWJlciA9IHRoaXMuX251bUl0ZW1zIC0gMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL+WmguaenOivpWl0ZW3nmoTkvY3nva7lnKjlj6/op4bljLrln5/lhoXvvIzlsLHmjqjlhaVkaXNwbGF5RGF0YVxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZCAmJiAhYnJlYWtGb3I7IGN1cklkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBvcyA9IHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHZMZWZ0ICYmIGl0ZW1Qb3MubGVmdCA8PSB2UmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHZUb3AgJiYgaXRlbVBvcy50b3AgPj0gdkJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLmJvdHRvbSA8PSB2VG9wICYmIGl0ZW1Qb3MudG9wID49IHZCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5yaWdodCA+PSB2TGVmdCAmJiBpdGVtUG9zLmxlZnQgPD0gdlJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHd3OiBudW1iZXIgPSB0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcDtcbiAgICAgICAgICAgICAgICBsZXQgaGg6IG51bWJlciA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXA7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh2TGVmdCArIHRoaXMuX2xlZnRHYXApIC8gd3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2UmlnaHQgKyB0aGlzLl9yaWdodEdhcCkgLyB3dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZSaWdodCAtIHRoaXMuX3JpZ2h0R2FwKSAvIHd3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZMZWZ0IC0gdGhpcy5fbGVmdEdhcCkgLyB3dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZUb3AgLSB0aGlzLl90b3BHYXApIC8gaGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICgtdkJvdHRvbSAtIHRoaXMuX2JvdHRvbUdhcCkgLyBoaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAodkJvdHRvbSArIHRoaXMuX2JvdHRvbUdhcCkgLyBoaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKHZUb3AgKyB0aGlzLl90b3BHYXApIC8gaGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VySWQgPSBNYXRoLmZsb29yKGN1cklkKSAqIHRoaXMuX2NvbExpbmVOdW07XG4gICAgICAgICAgICAgICAgZW5kSWQgPSBNYXRoLmNlaWwoZW5kSWQpICogdGhpcy5fY29sTGluZU51bTtcbiAgICAgICAgICAgICAgICBlbmRJZC0tO1xuICAgICAgICAgICAgICAgIGlmIChjdXJJZCA8IDApXG4gICAgICAgICAgICAgICAgICAgIGN1cklkID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZW5kSWQgPj0gdGhpcy5fbnVtSXRlbXMpXG4gICAgICAgICAgICAgICAgICAgIGVuZElkID0gdGhpcy5fbnVtSXRlbXMgLSAxO1xuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZDsgY3VySWQrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2godGhpcy5fY2FsY0l0ZW1Qb3MoY3VySWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPD0gMCB8fCAhdGhpcy5fbnVtSXRlbXMpIHsgLy9pZiBub25lLCBkZWxldGUgYWxsLlxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlyc3RMaXN0SWQgPSB0aGlzLmRpc3BsYXlEYXRhWzBdLmlkO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5SXRlbU51bSA9IHRoaXMuZGlzcGxheURhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBsZXQgaGF2ZURhdGFDaGFuZ2U6IGJvb2xlYW4gPSB0aGlzLmRpc3BsYXlJdGVtTnVtICE9IGxlbjtcbiAgICAgICAgICAgIGlmIChoYXZlRGF0YUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+mAkOW4p+a4suafk++8jOmcgOimgeaOkuW6j1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEgLSBiIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlm6BMaXN055qE5pi+56S65pWw5o2u5piv5pyJ5bqP55qE77yM5omA5Lul5Y+q6ZyA6KaB5Yik5pat5pWw57uE6ZW/5bqm5piv5ZCm55u4562J77yM5Lul5Y+K5aS044CB5bC+5Lik5Liq5YWD57Sg5piv5ZCm55u4562J5Y2z5Y+v44CCXG4gICAgICAgICAgICAgICAgaGF2ZURhdGFDaGFuZ2UgPSB0aGlzLmZpcnN0TGlzdElkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVswXSB8fCB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuZGlzcGxheUl0ZW1OdW0gLSAxXS5pZCAhPSB0aGlzLl9sYXN0RGlzcGxheURhdGFbbGVuIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSB8fCBoYXZlRGF0YUNoYW5nZSkgeyAgICAvL+WmguaenOaYr+W8uuWItuabtOaWsFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3VwZGF0ZURvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8v6YCQ5bin5riy5p+TXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9udW1JdGVtcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXBkYXRlRG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy/nm7TmjqXmuLLmn5NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnTGlzdCBEaXNwbGF5IERhdGEgSUk6OicsIHRoaXMuZGlzcGxheURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuZGlzcGxheUl0ZW1OdW07IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKHRoaXMuZGlzcGxheURhdGFbY10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/orqHnrpflj6/op4bojIPlm7RcbiAgICBfY2FsY1ZpZXdQb3MoKSB7XG4gICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHNjcm9sbFBvcy54ID4gMCA/IHNjcm9sbFBvcy54IDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gKHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDApIC0gdGhpcy5lbGFzdGljTGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IHRoaXMudmlld0xlZnQgKyB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0aGlzLnZpZXdSaWdodCA+IHRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld1JpZ2h0IC0gdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY0xlZnQsIHRoaXMuZWxhc3RpY1JpZ2h0LCB0aGlzLnZpZXdMZWZ0LCB0aGlzLnZpZXdSaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1JpZ2h0ID0gc2Nyb2xsUG9zLnggPCAwID8gLXNjcm9sbFBvcy54IDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IChzY3JvbGxQb3MueCA+IDAgPyAtc2Nyb2xsUG9zLnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSB0aGlzLnZpZXdSaWdodCAtIHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNMZWZ0ID0gdGhpcy52aWV3TGVmdCA8IC10aGlzLmNvbnRlbnQud2lkdGggPyBNYXRoLmFicyh0aGlzLnZpZXdMZWZ0ICsgdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSBzY3JvbGxQb3MueSA8IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCA9IChzY3JvbGxQb3MueSA+IDAgPyAtc2Nyb2xsUG9zLnkgOiAwKSArIHRoaXMuZWxhc3RpY1RvcDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSB0aGlzLnZpZXdUb3AgLSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHRoaXMudmlld0JvdHRvbSA8IC10aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3Qm90dG9tICsgdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0JvdHRvbSArPSB0aGlzLmVsYXN0aWNCb3R0b207XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHNjcm9sbFBvcy55ID4gMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gKHNjcm9sbFBvcy55IDwgMCA/IC1zY3JvbGxQb3MueSA6IDApIC0gdGhpcy5lbGFzdGljQm90dG9tO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCA9IHRoaXMudmlld0JvdHRvbSArIHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdGhpcy52aWV3VG9wID4gdGhpcy5jb250ZW50LmhlaWdodCA/IE1hdGguYWJzKHRoaXMudmlld1RvcCAtIHRoaXMuY29udGVudC5oZWlnaHQpIDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgLT0gdGhpcy5lbGFzdGljVG9wO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNUb3AsIHRoaXMuZWxhc3RpY0JvdHRvbSwgdGhpcy52aWV3VG9wLCB0aGlzLnZpZXdCb3R0b20pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v6K6h566X5L2N572uIOagueaNrmlkXG4gICAgX2NhbGNJdGVtUG9zKGlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgaXRlbVg6IG51bWJlciwgaXRlbVk6IG51bWJlcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpICsgKGZpeGVkLnZhbCArICh0aGlzLl9jb2x1bW5HYXAgKiBmaXhlZC5jb3VudCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2l0ZW1UbXAueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fY29sdW1uR2FwICogZml4ZWQuY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQgLSB3aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAodGhpcy5jb250ZW50LndpZHRoIC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gLXRoaXMuX3RvcEdhcCAtICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpIC0gKGZpeGVkLnZhbCArICh0aGlzLl9saW5lR2FwICogZml4ZWQuY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAodGhpcy5jb250ZW50LmhlaWdodCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wIC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogKGlkIC0gZml4ZWQuY291bnQpKSArIChmaXhlZC52YWwgKyAodGhpcy5fbGluZUdhcCAqIGZpeGVkLmNvdW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGJvdHRvbSArIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAodGhpcy5jb250ZW50LmhlaWdodCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbExpbmU6IG51bWJlciA9IE1hdGguZmxvb3IoaWQgLyB0aGlzLl9jb2xMaW5lTnVtKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogY29sTGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGNvbExpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gdGhpcy5fbGVmdEdhcCArICgoaWQgJSB0aGlzLl9jb2xMaW5lTnVtKSAqICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKCgxIC0gdGhpcy5faXRlbVRtcC5hbmNob3JYKSAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKCgxIC0gdGhpcy5jb250ZW50LmFuY2hvclgpICogdGhpcy5jb250ZW50LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKj0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGl0ZW1YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGNvbExpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGxlZnQgKyB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogY29sTGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IC10aGlzLl90b3BHYXAgLSAoKGlkICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgLT0gKCgxIC0gdGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JZKSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAtPSAoKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSArPSAodGhpcy5jb250ZW50LmFuY2hvclkgKiB0aGlzLmNvbnRlbnQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKj0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGl0ZW1YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+iuoeeul+W3suWtmOWcqOeahEl0ZW3nmoTkvY3nva5cbiAgICBfY2FsY0V4aXN0SXRlbVBvcyhpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChpZCk7XG4gICAgICAgIGlmICghaXRlbSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgeDogaXRlbS54LFxuICAgICAgICAgICAgeTogaXRlbS55LFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSkge1xuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSBpdGVtLnkgLSAoaXRlbS5oZWlnaHQgKiBpdGVtLmFuY2hvclkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IGl0ZW0ueCArIChpdGVtLndpZHRoICogKDEgLSBpdGVtLmFuY2hvclgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgLy/ojrflj5ZJdGVt5L2N572uXG4gICAgZ2V0SXRlbVBvcyhpZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0V4aXN0SXRlbVBvcyhpZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/ojrflj5blm7rlrprlsLrlr7hcbiAgICBfZ2V0Rml4ZWRTaXplKGxpc3RJZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAobGlzdElkID09IG51bGwpXG4gICAgICAgICAgICBsaXN0SWQgPSB0aGlzLl9udW1JdGVtcztcbiAgICAgICAgbGV0IGZpeGVkOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChpZCkgPCBsaXN0SWQpIHtcbiAgICAgICAgICAgICAgICBmaXhlZCArPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWw6IGZpeGVkLFxuICAgICAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgICB9XG4gICAgfVxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cbiAgICBfb25TY3JvbGxCZWdhbigpIHtcbiAgICAgICAgdGhpcy5fYmVnYW5Qb3MgPSB0aGlzLl9zaXplVHlwZSA/IHRoaXMudmlld1RvcCA6IHRoaXMudmlld0xlZnQ7XG4gICAgfVxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cbiAgICBfb25TY3JvbGxFbmRlZCgpIHtcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XG4gICAgICAgIGlmICh0LnNjcm9sbFRvTGlzdElkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB0LmdldEl0ZW1CeUxpc3RJZCh0LnNjcm9sbFRvTGlzdElkKTtcbiAgICAgICAgICAgIHQuc2Nyb2xsVG9MaXN0SWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMS4wNiksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAvL25ldyBjYy5jYWxsRnVuYyhmdW5jdGlvbiAocnVuTm9kZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcblxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORyAmJlxuICAgICAgICAgICAgIXQuYWRoZXJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvL2NjLmxvZyh0LmFkaGVyaW5nLCB0Ll9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpLCB0Ll9zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpO1xuICAgICAgICAgICAgdC5hZGhlcmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZUFkaGVyZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOinpuaRuOaXtlxuICAgIF9vblRvdWNoU3RhcnQoZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXdbJ19oYXNOZXN0ZWRWaWV3R3JvdXAnXShldiwgY2FwdHVyZUxpc3RlbmVycykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBpc01lID0gZXYuZXZlbnRQaGFzZSA9PT0gY2MuRXZlbnQuQVRfVEFSR0VUICYmIGV2LnRhcmdldCA9PT0gdGhpcy5ub2RlO1xuICAgICAgICBpZiAoIWlzTWUpIHtcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogYW55ID0gZXYudGFyZ2V0O1xuICAgICAgICAgICAgd2hpbGUgKGl0ZW1Ob2RlLl9saXN0SWQgPT0gbnVsbCAmJiBpdGVtTm9kZS5wYXJlbnQpXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBpdGVtTm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gaXRlbU5vZGUuX2xpc3RJZCAhPSBudWxsID8gaXRlbU5vZGUgOiBldi50YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/op6bmkbjmiqzotbfml7YuLlxuICAgIF9vblRvdWNoVXAoKSB7XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICB0Ll9zY3JvbGxQb3MgPSBudWxsO1xuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRoZXJpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRoZXJpbmdCYXJyaWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbDtcbiAgICB9XG5cbiAgICBfb25Ub3VjaENhbmNlbGxlZChldiwgY2FwdHVyZUxpc3RlbmVycykge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0Ll9zY3JvbGxWaWV3WydfaGFzTmVzdGVkVmlld0dyb3VwJ10oZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHx8IGV2LnNpbXVsYXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHQuX3Njcm9sbFBvcyA9IG51bGw7XG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HKSB7XG4gICAgICAgICAgICBpZiAodC5hZGhlcmluZylcbiAgICAgICAgICAgICAgICB0Ll9hZGhlcmluZ0JhcnJpZXIgPSB0cnVlO1xuICAgICAgICAgICAgdC5hZGhlcmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdC5fcGFnZUFkaGVyZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgICAvL+W9k+WwuuWvuOaUueWPmFxuICAgIF9vblNpemVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0luaXRlZChmYWxzZSkpXG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xuICAgIH1cbiAgICAvL+W9k0l0ZW3oh6rpgILlupRcbiAgICBfb25JdGVtQWRhcHRpdmUoaXRlbSkge1xuICAgICAgICAvLyBpZiAodGhpcy5jaGVja0luaXRlZChmYWxzZSkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCF0aGlzLl9zaXplVHlwZSAmJiBpdGVtLndpZHRoICE9IHRoaXMuX2l0ZW1TaXplLndpZHRoKVxuICAgICAgICAgICAgfHwgKHRoaXMuX3NpemVUeXBlICYmIGl0ZW0uaGVpZ2h0ICE9IHRoaXMuX2l0ZW1TaXplLmhlaWdodClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVNpemUpXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZSA9IHt9O1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuX3NpemVUeXBlID8gaXRlbS5oZWlnaHQgOiBpdGVtLndpZHRoO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSAhPSB2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl91cGRhdGVJdGVtUG9zKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbCgpO1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjeato+WcqOi/kOihjCBzY3JvbGxUb++8jOiCr+WumuS8muS4jeWHhuehru+8jOWcqOi/memHjOWBmuS/ruato1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0xpc3RJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFBvcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zY3JvbGxUb1NvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLl9zY3JvbGxUb0xpc3RJZCwgTWF0aC5tYXgoMCwgdGhpcy5fc2Nyb2xsVG9FbmRUaW1lIC0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vUEFHReeymOmZhFxuICAgIF9wYWdlQWRoZXJlKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jeWNsaWMgJiYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgY3VyUG9zID0gdC5fc2l6ZVR5cGUgPyB0LnZpZXdUb3AgOiB0LnZpZXdMZWZ0O1xuICAgICAgICBsZXQgZGlzID0gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCkgKiB0LnBhZ2VEaXN0YW5jZTtcbiAgICAgICAgbGV0IGNhblNraXAgPSBNYXRoLmFicyh0Ll9iZWdhblBvcyAtIGN1clBvcykgPiBkaXM7XG4gICAgICAgIGlmIChjYW5Ta2lwKSB7XG4gICAgICAgICAgICBsZXQgdGltZUluU2Vjb25kID0gLjU7XG4gICAgICAgICAgICBzd2l0Y2ggKHQuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXG4gICAgICAgICAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyA+IGN1clBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19wYWdlQWRoZXJlICAgUFBQUFBQUFBQUFBQUFBQJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19wYWdlQWRoZXJlICAgTk5OTk5OTk5OTk5OTk5OJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBjdXJQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHQuZWxhc3RpY1RvcCA8PSAwICYmIHQuZWxhc3RpY1JpZ2h0IDw9IDAgJiYgdC5lbGFzdGljQm90dG9tIDw9IDAgJiYgdC5lbGFzdGljTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xuICAgICAgICB9XG4gICAgICAgIHQuX2JlZ2FuUG9zID0gbnVsbDtcbiAgICB9XG4gICAgLy/nspjpmYRcbiAgICBhZGhlcmUoKSB7XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHQuYWRoZXJpbmcgPSB0cnVlO1xuICAgICAgICB0Ll9jYWxjTmVhcmVzdEl0ZW0oKTtcbiAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHQuX3NpemVUeXBlID8gdC5fdG9wR2FwIDogdC5fbGVmdEdhcCkgLyAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcbiAgICAgICAgbGV0IHRpbWVJblNlY29uZDogbnVtYmVyID0gLjc7XG4gICAgICAgIHQuc2Nyb2xsVG8odC5uZWFyZXN0TGlzdElkLCB0aW1lSW5TZWNvbmQsIG9mZnNldCk7XG4gICAgfVxuICAgIC8vVXBkYXRlLi5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA8PSAwIHx8IHRoaXMuX3VwZGF0ZURvbmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCwgdGhpcy5fdXBkYXRlQ291bnRlciwgdGhpcy5kaXNwbGF5RGF0YVt0aGlzLl91cGRhdGVDb3VudGVyXSk7XG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XG4gICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKSA+IHRoaXMuZGlzcGxheUl0ZW1OdW0gPyB0aGlzLmRpc3BsYXlJdGVtTnVtIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBuIDwgbGVuOyBuKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5kaXNwbGF5RGF0YVtuXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0oZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA+PSB0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMSkgeyAvL+acgOWQjuS4gOS4qlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kb25lQWZ0ZXJVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLl9zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPCB0aGlzLl9udW1JdGVtcykge1xuICAgICAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5fbnVtSXRlbXMgPyB0aGlzLl9udW1JdGVtcyA6ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJvlu7rmiJbmm7TmlrBJdGVt77yI6Jma5ouf5YiX6KGo55So77yJXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5pWw5o2uXG4gICAgICovXG4gICAgX2NyZWF0ZU9yVXBkYXRlSXRlbShkYXRhOiBhbnkpIHtcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGRhdGEuaWQpO1xuICAgICAgICBpZiAoIWl0ZW0pIHsgLy/lpoLmnpzkuI3lrZjlnKhcbiAgICAgICAgICAgIGxldCBjYW5HZXQ6IGJvb2xlYW4gPSB0aGlzLl9wb29sLnNpemUoKSA+IDA7XG4gICAgICAgICAgICBpZiAoY2FuR2V0KSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuX3Bvb2wuZ2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCfku47msaDkuK3lj5blh7o6OiAgIOaXp2lkID0nLCBpdGVtWydfbGlzdElkJ10sICfvvIzmlrBpZCA9JywgZGF0YS5pZCwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+aWsOW7ujo6JywgZGF0YS5pZCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5fbGlzdElkICE9IGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29udGVudFNpemUodGhpcy5faXRlbVNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihjYy52MihkYXRhLngsIGRhdGEueSkpO1xuICAgICAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIGlmIChjYW5HZXQgJiYgdGhpcy5fbmVlZFVwZGF0ZVdpZGdldCkge1xuICAgICAgICAgICAgICAgIGxldCB3aWRnZXQ6IGNjLldpZGdldCA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldClcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zZXRTaWJsaW5nSW5kZXgodGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxKTtcblxuICAgICAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcbiAgICAgICAgICAgIGl0ZW1bJ2xpc3RJdGVtJ10gPSBsaXN0SXRlbTtcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmxpc3RJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSAmJiB0aGlzLnJlbmRlckV2ZW50KSB7IC8v5by65Yi25pu05pawXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xuICAgICAgICAgICAgLy8gY2MubG9nKCdBREQ6OicsIGRhdGEuaWQsIGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oaXRlbVsnbGlzdEl0ZW0nXSk7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihkYXRhLmlkKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGRhdGEuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v5Yib5bu65oiW5pu05pawSXRlbe+8iOmdnuiZmuaLn+WIl+ihqOeUqO+8iVxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0yKGxpc3RJZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbGlzdElkXTtcbiAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXG4gICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XG4gICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBsaXN0SWQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcbiAgICAgICAgICAgIGl0ZW1bJ2xpc3RJdGVtJ10gPSBsaXN0SXRlbTtcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmxpc3RJZCA9IGxpc3RJZDtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHsgLy/lvLrliLbmm7TmlrBcbiAgICAgICAgICAgIGl0ZW0uX2xpc3RJZCA9IGxpc3RJZDtcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSlcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0SWQgPSBsaXN0SWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YobGlzdElkKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGxpc3RJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW06IExpc3RJdGVtKSB7XG4gICAgICAgIGlmICghbGlzdEl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FKSB7XG4gICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gbGlzdEl0ZW0ubm9kZTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZElkID09IGl0ZW0uX2xpc3RJZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDpcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0aGlzLm11bHRTZWxlY3RlZC5pbmRleE9mKGl0ZW0uX2xpc3RJZCkgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/ku4XomZrmi5/liJfooajnlKhcbiAgICBfcmVzZXRJdGVtU2l6ZShpdGVtOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgc2l6ZTogbnVtYmVyO1xuICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSAmJiB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0pIHtcbiAgICAgICAgICAgIHNpemUgPSB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29sTGluZU51bSA+IDEpXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuX3NpemVUeXBlID8gdGhpcy5faXRlbVNpemUuaGVpZ2h0IDogdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSlcbiAgICAgICAgICAgICAgICBpdGVtLmhlaWdodCA9IHNpemU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgaXRlbS53aWR0aCA9IHNpemU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05pawSXRlbeS9jee9rlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfHxOb2RlfSBsaXN0SWRPckl0ZW1cbiAgICAgKi9cbiAgICBfdXBkYXRlSXRlbVBvcyhsaXN0SWRPckl0ZW06IGFueSkge1xuICAgICAgICBsZXQgaXRlbTogYW55ID0gaXNOYU4obGlzdElkT3JJdGVtKSA/IGxpc3RJZE9ySXRlbSA6IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZE9ySXRlbSk7XG4gICAgICAgIGxldCBwb3M6IGFueSA9IHRoaXMuZ2V0SXRlbVBvcyhpdGVtLl9saXN0SWQpO1xuICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWkmumAiVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y+v5Lul5piv5Y2V5LiqbGlzdElk77yM5Lmf5Y+v5piv5LiqbGlzdElk5pWw57uEXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBib29sIOWAvO+8jOWmguaenOS4um51bGznmoTor53vvIzliJnnm7TmjqXnlKhhcmdz6KaG55uWXG4gICAgICovXG4gICAgc2V0TXVsdFNlbGVjdGVkKGFyZ3M6IGFueSwgYm9vbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xuICAgICAgICAgICAgYXJncyA9IFthcmdzXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9vbCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IGFyZ3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkOiBudW1iZXIsIHN1YjogbnVtYmVyO1xuICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcmdzLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XG4gICAgICAgICAgICAgICAgICAgIHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2gobGlzdElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0SWQgPSBhcmdzW25dO1xuICAgICAgICAgICAgICAgICAgICBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmjIflrprnmoRJdGVtXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDljZXkuKpsaXN0SWTvvIzmiJbogIXmlbDnu4RcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oYXJnczogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbYXJnc107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSBhcmdzLmxlbmd0aDsgbiA8IGxlbjsgbisrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkOiBudW1iZXIgPSBhcmdzW25dO1xuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XG4gICAgICAgICAgICBpZiAoaXRlbSlcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05paw5YWo6YOoXG4gICAgICovXG4gICAgdXBkYXRlQWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5udW1JdGVtcyA9IHRoaXMubnVtSXRlbXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOagueaNrkxpc3RJROiOt+WPlkl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGlzdElkXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRJdGVtQnlMaXN0SWQobGlzdElkOiBudW1iZXIpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uX2xpc3RJZCA9PSBsaXN0SWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWcqOaYvuekuuWMuuWfn+WklueahEl0ZW1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIF9nZXRPdXRzaWRlSXRlbSgpIHtcbiAgICAgICAgbGV0IGl0ZW06IGFueTtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgaXRlbSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltuXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNwbGF5RGF0YS5maW5kKGQgPT4gZC5pZCA9PSBpdGVtLl9saXN0SWQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy/liKDpmaTmmL7npLrljLrln5/ku6XlpJbnmoRJdGVtXG4gICAgX2RlbFJlZHVuZGFudEl0ZW0oKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XG4gICAgICAgICAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX2dldE91dHNpZGVJdGVtKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcnIubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gYXJyW25dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxJdGVtICYmIGl0ZW0uX2xpc3RJZCA9PSB0aGlzLl9zY3JvbGxJdGVtLl9saXN0SWQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wucHV0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG06IG51bWJlciA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBtID49IDA7IG0tLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhW21dID09IGl0ZW0uX2xpc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNwbGljZShtLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2MubG9nKCflrZjlhaU6OicsIHN0ciwgJyAgICBwb29sLmxlbmd0aCA9JywgdGhpcy5fcG9vbC5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50ID4gdGhpcy5fbnVtSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxTaW5nbGVJdGVtKHRoaXMuY29udGVudC5jaGlsZHJlblt0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+WIoOmZpOWNleS4qkl0ZW1cbiAgICBfZGVsU2luZ2xlSXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgLy8gY2MubG9nKCdERUw6OicsIGl0ZW1bJ19saXN0SWQnXSwgaXRlbSk7XG4gICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBpZiAoaXRlbS5kZXN0cm95KVxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgIH1cbiAgICAvKiogXG4gICAgICog5Yqo5pWI5Yig6ZmkSXRlbe+8iOatpOaWueazleWPqumAgueUqOS6juiZmuaLn+WIl+ihqO+8jOWNs192aXJ0dWFsPXRydWXvvIlcbiAgICAgKiDkuIDlrpropoHlnKjlm57osIPlh73mlbDph4zph43mlrDorr7nva7mlrDnmoRudW1JdGVtc+i/m+ihjOWIt+aWsO+8jOavleern+acrExpc3TmmK/pnaDmlbDmja7pqbHliqjnmoTjgIJcbiAgICAgKi9cbiAgICBhbmlEZWxJdGVtKGxpc3RJZDogbnVtYmVyLCBjYWxsRnVuYzogRnVuY3Rpb24sIGFuaVR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcblxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSB8fCB0LmN5Y2xpYyB8fCAhdC5fdmlydHVhbClcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQhJyk7XG5cbiAgICAgICAgaWYgKHQuX2FuaURlbFJ1bmluZylcbiAgICAgICAgICAgIHJldHVybiBjYy53YXJuKCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIScpO1xuXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0LmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xuICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtO1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSB0cnVlO1xuICAgICAgICBsZXQgY3VyTGFzdElkOiBudW1iZXIgPSB0LmRpc3BsYXlEYXRhW3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMV0uaWQ7XG4gICAgICAgIGxldCByZXNldFNlbGVjdGVkSWQ6IGJvb2xlYW4gPSBsaXN0SXRlbS5zZWxlY3RlZDtcbiAgICAgICAgbGlzdEl0ZW0uc2hvd0FuaShhbmlUeXBlLCAoKSA9PiB7XG4gICAgICAgICAgICAvL+WIpOaWreacieayoeacieS4i+S4gOS4qu+8jOWmguaenOacieeahOivne+8jOWIm+W7uueyl+adpVxuICAgICAgICAgICAgbGV0IG5ld0lkOiBudW1iZXI7XG4gICAgICAgICAgICBpZiAoY3VyTGFzdElkIDwgdC5fbnVtSXRlbXMgLSAyKSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSBjdXJMYXN0SWQgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0lkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YTogYW55ID0gdC5fY2FsY0l0ZW1Qb3MobmV3SWQpO1xuICAgICAgICAgICAgICAgIHQuZGlzcGxheURhdGEucHVzaChuZXdEYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAodC5fdmlydHVhbClcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtKG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuZXdJZCk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcy0tO1xuICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TSU5HTEUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzZXRTZWxlY3RlZElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQuX3NlbGVjdGVkSWQgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQgJiYgdC5tdWx0U2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xuICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/lpJrpgInnmoTmlbDmja7vvIzlnKjlhbblkI7nmoTlhajpg6jlh4/kuIBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQ6IG51bWJlciA9IHQubXVsdFNlbGVjdGVkW25dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPj0gbGlzdElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWRbbl0tLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplW2xpc3RJZF0pXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0Ll9jdXN0b21TaXplW2xpc3RJZF07XG4gICAgICAgICAgICAgICAgbGV0IG5ld0N1c3RvbVNpemU6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gdC5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBzaXplID0gdC5fY3VzdG9tU2l6ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZE51bWJlcjogbnVtYmVyID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDdXN0b21TaXplW2lkTnVtYmVyIC0gKGlkTnVtYmVyID49IGxpc3RJZCA/IDEgOiAwKV0gPSBzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0Ll9jdXN0b21TaXplID0gbmV3Q3VzdG9tU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v5ZCO6Z2i55qESXRlbeWQkeWJjeaAvOeahOWKqOaViFxuICAgICAgICAgICAgbGV0IHNlYzogbnVtYmVyID0gLjIzMzM7XG4gICAgICAgICAgICBsZXQgYWN0czogYW55W10sIGhhdmVDQjogYm9vbGVhbjtcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IG5ld0lkICE9IG51bGwgPyBuZXdJZCA6IGN1ckxhc3RJZDsgbiA+PSBsaXN0SWQgKyAxOyBuLS0pIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQobik7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0RhdGE6IGFueSA9IHQuX2NhbGNJdGVtUG9zKG4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhzZWMsIGNjLnYyKHBvc0RhdGEueCwgcG9zRGF0YS55KSksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDw9IGxpc3RJZCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVDQiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RzLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdHMubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdHMpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oYWN0c1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXZlQ0IpIHtcbiAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYWxsRnVuYyhsaXN0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5rua5Yqo5YiwLi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGlzdElkIOe0ouW8le+8iOWmguaenDww77yM5YiZ5rua5Yiw6aaW5LiqSXRlbeS9jee9ru+8jOWmguaenD49X251bUl0ZW1z77yM5YiZ5rua5Yiw5pyA5pyrSXRlbeS9jee9ru+8iVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lSW5TZWNvbmQg5pe26Ze0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCDntKLlvJXnm67moIfkvY3nva7lgY/np7vvvIwwLTFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJTdHJlc3Mg5rua5Yqo5ZCO5piv5ZCm5by66LCD6K+lSXRlbe+8iOi/meWPquaYr+S4quWunumqjOWKn+iDve+8iVxuICAgICAqL1xuICAgIHNjcm9sbFRvKGxpc3RJZDogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41LCBvZmZzZXQ6IG51bWJlciA9IG51bGwsIG92ZXJTdHJlc3M6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHQuX3Njcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcbiAgICAgICAgaWYgKHRpbWVJblNlY29uZCA9PSBudWxsKSAgIC8v6buY6K6kMC41XG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAuNTtcbiAgICAgICAgZWxzZSBpZiAodGltZUluU2Vjb25kIDwgMClcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IDA7XG4gICAgICAgIGlmIChsaXN0SWQgPCAwKVxuICAgICAgICAgICAgbGlzdElkID0gMDtcbiAgICAgICAgZWxzZSBpZiAobGlzdElkID49IHQuX251bUl0ZW1zKVxuICAgICAgICAgICAgbGlzdElkID0gdC5fbnVtSXRlbXMgLSAxO1xuICAgICAgICAvLyDku6XpmLLorr7nva7kuoZudW1JdGVtc+S5i+WQjmxheW91dOeahOWwuuWvuOi/mOacquabtOaWsFxuICAgICAgICBpZiAoIXQuX3ZpcnR1YWwgJiYgdC5fbGF5b3V0ICYmIHQuX2xheW91dC5lbmFibGVkKVxuICAgICAgICAgICAgdC5fbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xuXG4gICAgICAgIGxldCBwb3MgPSB0LmdldEl0ZW1Qb3MobGlzdElkKTtcbiAgICAgICAgbGV0IHRhcmdldFg6IG51bWJlciwgdGFyZ2V0WTogbnVtYmVyO1xuXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLmxlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYIC09IHQubm9kZS53aWR0aCAqIG9mZnNldDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5fbGVmdEdhcDtcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52Mih0YXJnZXRYLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5yaWdodCAtIHQubm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCArPSB0Ll9yaWdodEdhcDtcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52Mih0YXJnZXRYICsgdC5jb250ZW50LndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IHBvcy50b3A7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQuX3RvcEdhcDtcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigwLCAtdGFyZ2V0WSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBwb3MuYm90dG9tICsgdC5ub2RlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgLT0gdC5ub2RlLmhlaWdodCAqIG9mZnNldDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgLT0gdC5fYm90dG9tR2FwO1xuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKDAsIC10YXJnZXRZICsgdC5jb250ZW50LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpZXdQb3M6IGFueSA9IHQuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB2aWV3UG9zID0gTWF0aC5hYnModC5fc2l6ZVR5cGUgPyB2aWV3UG9zLnkgOiB2aWV3UG9zLngpO1xuXG4gICAgICAgIGxldCBjb21wYXJlUG9zID0gdC5fc2l6ZVR5cGUgPyBwb3MueSA6IHBvcy54O1xuICAgICAgICBsZXQgcnVuU2Nyb2xsID0gTWF0aC5hYnMoKHQuX3Njcm9sbFBvcyAhPSBudWxsID8gdC5fc2Nyb2xsUG9zIDogdmlld1BvcykgLSBjb21wYXJlUG9zKSA+IC41O1xuICAgICAgICAvLyBjYy5sb2cocnVuU2Nyb2xsLCB0Ll9zY3JvbGxQb3MsIHZpZXdQb3MsIGNvbXBhcmVQb3MpXG5cbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xuICAgICAgICBpZiAocnVuU2Nyb2xsKSB7XG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHBvcywgdGltZUluU2Vjb25kKTtcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvTGlzdElkID0gbGlzdElkO1xuICAgICAgICAgICAgdC5fc2Nyb2xsVG9FbmRUaW1lID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSArIHRpbWVJblNlY29uZDtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhsaXN0SWQsIHQuY29udGVudC53aWR0aCwgdC5jb250ZW50LmdldFBvc2l0aW9uKCksIHBvcyk7XG4gICAgICAgICAgICB0Ll9zY3JvbGxUb1NvID0gdC5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdC5fYWRoZXJpbmdCYXJyaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuYWRoZXJpbmcgPSB0Ll9hZGhlcmluZ0JhcnJpZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5fc2Nyb2xsUG9zID1cbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9MaXN0SWQgPVxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb0VuZFRpbWUgPVxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb1NvID1cbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgICAgICAvL2NjLmxvZygnMjIyMjIyMjIyMicsIHQuX2FkaGVyaW5nQmFycmllcilcbiAgICAgICAgICAgICAgICBpZiAob3ZlclN0cmVzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0LnNjcm9sbFRvTGlzdElkID0gbGlzdElkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4xLCAxLjA1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4xLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGltZUluU2Vjb25kICsgLjEpO1xuXG4gICAgICAgICAgICBpZiAodGltZUluU2Vjb25kIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuoeeul+W9k+WJjea7muWKqOeql+acgOi/keeahEl0ZW1cbiAgICAgKi9cbiAgICBfY2FsY05lYXJlc3RJdGVtKCkge1xuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcbiAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gbnVsbDtcbiAgICAgICAgbGV0IGRhdGE6IGFueSwgY2VudGVyOiBudW1iZXI7XG5cbiAgICAgICAgaWYgKHQuX3ZpcnR1YWwpXG4gICAgICAgICAgICB0Ll9jYWxjVmlld1BvcygpO1xuXG4gICAgICAgIGxldCB2VG9wOiBudW1iZXIsIHZSaWdodDogbnVtYmVyLCB2Qm90dG9tOiBudW1iZXIsIHZMZWZ0OiBudW1iZXI7XG4gICAgICAgIHZUb3AgPSB0LnZpZXdUb3A7XG4gICAgICAgIHZSaWdodCA9IHQudmlld1JpZ2h0O1xuICAgICAgICB2Qm90dG9tID0gdC52aWV3Qm90dG9tO1xuICAgICAgICB2TGVmdCA9IHQudmlld0xlZnQ7XG5cbiAgICAgICAgbGV0IGJyZWFrRm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgdC5jb250ZW50LmNoaWxkcmVuQ291bnQgJiYgIWJyZWFrRm9yOyBuICs9IHQuX2NvbExpbmVOdW0pIHtcbiAgICAgICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVtuXSA6IHQuX2NhbGNFeGlzdEl0ZW1Qb3Mobik7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IHQuX3NpemVUeXBlID8gKChkYXRhLnRvcCArIGRhdGEuYm90dG9tKSAvIDIpIDogKGNlbnRlciA9IChkYXRhLmxlZnQgKyBkYXRhLnJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmlnaHQgPj0gdkxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2TGVmdCA+IGNlbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZWZ0IDw9IHZSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSaWdodCA8IGNlbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ib3R0b20gPD0gdlRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZUb3AgPCBjZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudG9wID49IHZCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tID4gY2VudGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgKz0gdC5fY29sTGluZU51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/liKTmlq3mnIDlkI7kuIDkuKpJdGVt44CC44CC44CC77yI5ZOO77yM6L+Z5Lqb5Yik5pat55yf5b+D5oG25b+D77yM5Yik5pat5LqG5YmN6Z2i55qE6L+Y6KaB5Yik5pat5pyA5ZCO5LiA5Liq44CC44CC44CC5LiA5byA5aeL5ZGi77yM5bCx5Y+q5pyJ5LiA5Liq5biD5bGA77yI5Y2V5YiX5biD5bGA77yJ77yM6YKj5pe25YCZ5Luj56CB5omN5LiJ55m+6KGM77yM5ZCO5p2l5bCx5oOz552A5a6M5ZaE5ZWK77yM6Im5Li7ov5nlnZHnnJ/mt7HvvIznjrDlnKjov5nooYzmlbDpg73kuIDljYPkupTkuoY9ID18fO+8iVxuICAgICAgICBkYXRhID0gdC5fdmlydHVhbCA/IHQuZGlzcGxheURhdGFbdC5kaXNwbGF5SXRlbU51bSAtIDFdIDogdC5fY2FsY0V4aXN0SXRlbVBvcyh0Ll9udW1JdGVtcyAtIDEpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlkID09IHQuX251bUl0ZW1zIC0gMSkge1xuICAgICAgICAgICAgY2VudGVyID0gdC5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XG4gICAgICAgICAgICBzd2l0Y2ggKHQuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0ID4gY2VudGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZMZWZ0IDwgY2VudGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZCb3R0b20gPCBjZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA+IGNlbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNjLmxvZygndC5uZWFyZXN0TGlzdElkID0nLCB0Lm5lYXJlc3RMaXN0SWQpO1xuICAgIH1cbiAgICAvL+S4iuS4gOmhtVxuICAgIHByZVBhZ2UodGltZUluU2Vjb25kOiBudW1iZXIgPSAuNSkge1xuICAgICAgICAvLyBjYy5sb2coJ/CfkYgnKTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtIC0gMSwgdGltZUluU2Vjb25kKTtcbiAgICB9XG4gICAgLy/kuIvkuIDpobVcbiAgICBuZXh0UGFnZSh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41KSB7XG4gICAgICAgIC8vIGNjLmxvZygn8J+RiScpO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gKyAxLCB0aW1lSW5TZWNvbmQpO1xuICAgIH1cbiAgICAvL+i3s+i9rOWIsOesrOWHoOmhtVxuICAgIHNraXBQYWdlKHBhZ2VOdW06IG51bWJlciwgdGltZUluU2Vjb25kOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodC5fc2xpZGVNb2RlICE9IFNsaWRlVHlwZS5QQUdFKVxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCwgTXVzdCBTbGlkZU1vZGUgPSBQQUdFIScpO1xuICAgICAgICBpZiAocGFnZU51bSA8IDAgfHwgcGFnZU51bSA+PSB0Ll9udW1JdGVtcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHQuY3VyUGFnZU51bSA9PSBwYWdlTnVtKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBjYy5sb2cocGFnZU51bSk7XG4gICAgICAgIHQuY3VyUGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgIGlmICh0LnBhZ2VDaGFuZ2VFdmVudCkge1xuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnBhZ2VDaGFuZ2VFdmVudF0sIHBhZ2VOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHQuc2Nyb2xsVG8ocGFnZU51bSwgdGltZUluU2Vjb25kKTtcbiAgICB9XG4gICAgLy/orqHnrpcgQ3VzdG9tU2l6Ze+8iOi/meS4quWHveaVsOi/mOaYr+S/neeVmeWQp++8jOafkOS6m+e9leingeeahOaDheWGteeahOehrui/mOaYr+mcgOimgeaJi+WKqOiuoeeul2N1c3RvbVNpemXnmoTvvIlcbiAgICBjYWxjQ3VzdG9tU2l6ZShudW1JdGVtczogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0Ll9pdGVtVG1wKVxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCB0ZW1wbGF0ZSBpdGVtIScpO1xuICAgICAgICBpZiAoIXQucmVuZGVyRXZlbnQpXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1Vuc2V0IFJlbmRlci1FdmVudCEnKTtcbiAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IHt9O1xuICAgICAgICBsZXQgdGVtcDogYW55ID0gY2MuaW5zdGFudGlhdGUodC5faXRlbVRtcCk7XG4gICAgICAgIHQuY29udGVudC5hZGRDaGlsZCh0ZW1wKTtcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IG51bUl0ZW1zOyBuKyspIHtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5yZW5kZXJFdmVudF0sIHRlbXAsIG4pO1xuICAgICAgICAgICAgaWYgKHRlbXAuaGVpZ2h0ICE9IHQuX2l0ZW1TaXplLmhlaWdodCB8fCB0ZW1wLndpZHRoICE9IHQuX2l0ZW1TaXplLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZVtuXSA9IHQuX3NpemVUeXBlID8gdGVtcC5oZWlnaHQgOiB0ZW1wLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LmtleXModC5fY3VzdG9tU2l6ZSkubGVuZ3RoKVxuICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IG51bGw7XG4gICAgICAgIHRlbXAucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBpZiAodGVtcC5kZXN0cm95KVxuICAgICAgICAgICAgdGVtcC5kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiB0Ll9jdXN0b21TaXplO1xuICAgIH1cbn0iXX0=