
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/autoui/scene/Auto_Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3046sczmBDJY3o+ZQTMX28', 'Auto_Test');
// script/autoui/scene/Auto_Test.ts

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
var ccclass = cc._decorator.ccclass;
var Auto_Test = /** @class */ (function (_super) {
    __extends(Auto_Test, _super);
    function Auto_Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auto_Test.prototype.onLoad = function () {
        var parent = this.node.getParent();
        this.Canvas = parent.getChildByName("Canvas");
        this.test1 = this.Canvas.getChildByName("test1");
        this.test2 = this.Canvas.getChildByName("test2");
        this.test3 = this.Canvas.getChildByName("test3");
        this.test4 = this.Canvas.getChildByName("test4");
    };
    Auto_Test.URL = "db://assets/scene/Test.fire";
    Auto_Test = __decorate([
        ccclass
    ], Auto_Test);
    return Auto_Test;
}(cc.Component));
exports.default = Auto_Test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYXV0b3VpL3NjZW5lL0F1dG9fVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFrQkEsQ0FBQztJQVRHLDBCQUFNLEdBQU47UUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFWVSxhQUFHLEdBQVUsNkJBQTZCLENBQUE7SUFQcEMsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWtCN0I7SUFBRCxnQkFBQztDQWxCRCxBQWtCQyxDQWxCc0MsRUFBRSxDQUFDLFNBQVMsR0FrQmxEO2tCQWxCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9fVGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdENhbnZhczogY2MuTm9kZTtcblx0dGVzdDE6IGNjLk5vZGU7XG5cdHRlc3QyOiBjYy5Ob2RlO1xuXHR0ZXN0MzogY2MuTm9kZTtcblx0dGVzdDQ6IGNjLk5vZGU7XG5cblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJkYjovL2Fzc2V0cy9zY2VuZS9UZXN0LmZpcmVcIlxuXG4gICAgb25Mb2FkICgpIHtcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5ub2RlLmdldFBhcmVudCgpO1xuXHRcdHRoaXMuQ2FudmFzID0gcGFyZW50LmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuXHRcdHRoaXMudGVzdDEgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcInRlc3QxXCIpO1xuXHRcdHRoaXMudGVzdDIgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcInRlc3QyXCIpO1xuXHRcdHRoaXMudGVzdDMgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcInRlc3QzXCIpO1xuXHRcdHRoaXMudGVzdDQgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcInRlc3Q0XCIpO1xuXG4gICAgfVxufVxuIl19