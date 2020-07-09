
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/PlayOppBaseComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57206X39L5Ex4F9GHDFF7OU', 'PlayOppBaseComponent');
// script/framework/utils/PlayOppBaseComponent.ts

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
exports.PlayOpp = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayOpp;
(function (PlayOpp) {
    PlayOpp[PlayOpp["onLoad"] = 0] = "onLoad";
    PlayOpp[PlayOpp["onEnable"] = 1] = "onEnable";
    PlayOpp[PlayOpp["onStart"] = 2] = "onStart";
    PlayOpp[PlayOpp["Update"] = 3] = "Update";
    PlayOpp[PlayOpp["Manual"] = 4] = "Manual";
})(PlayOpp = exports.PlayOpp || (exports.PlayOpp = {}));
var PlayOppBaseComponent = /** @class */ (function (_super) {
    __extends(PlayOppBaseComponent, _super);
    function PlayOppBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.opp = PlayOpp.Manual;
        return _this;
    }
    PlayOppBaseComponent.prototype.onLoad = function () {
        if (this.opp == PlayOpp.onLoad) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.onEnable = function () {
        if (this.opp == PlayOpp.onEnable) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.start = function () {
        if (this.opp == PlayOpp.onStart) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.update = function (dt) {
        if (this.opp == PlayOpp.Update) {
            this.Excute();
        }
    };
    PlayOppBaseComponent.prototype.Excute = function () {
        // override todo
    };
    __decorate([
        property({ type: cc.Enum(PlayOpp) })
    ], PlayOppBaseComponent.prototype, "opp", void 0);
    PlayOppBaseComponent = __decorate([
        ccclass
    ], PlayOppBaseComponent);
    return PlayOppBaseComponent;
}(cc.Component));
exports.default = PlayOppBaseComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL1BsYXlPcHBCYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFZLE9BTVg7QUFORCxXQUFZLE9BQU87SUFDZix5Q0FBTSxDQUFBO0lBQ04sNkNBQVEsQ0FBQTtJQUNSLDJDQUFPLENBQUE7SUFDUCx5Q0FBTSxDQUFBO0lBQ04seUNBQU0sQ0FBQTtBQUNWLENBQUMsRUFOVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFNbEI7QUFHRDtJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQStCQztRQTdCVSxTQUFHLEdBQWEsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7SUE2QjFDLENBQUM7SUEzQkcscUNBQU0sR0FBTjtRQUNJLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDSSxJQUFHLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBQztZQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFHLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBQztZQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLGdCQUFnQjtJQUNwQixDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztxREFDSTtJQUZyQixvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQStCeEM7SUFBRCwyQkFBQztDQS9CRCxBQStCQyxDQS9CaUQsRUFBRSxDQUFDLFNBQVMsR0ErQjdEO2tCQS9Cb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIFBsYXlPcHAge1xuICAgIG9uTG9hZCxcbiAgICBvbkVuYWJsZSxcbiAgICBvblN0YXJ0LFxuICAgIFVwZGF0ZSxcbiAgICBNYW51YWwsXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5T3BwQmFzZUNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkVudW0oUGxheU9wcCl9KVxuICAgIHB1YmxpYyBvcHAgOiBQbGF5T3BwID0gUGxheU9wcC5NYW51YWw7XG5cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgaWYodGhpcy5vcHAgPT0gUGxheU9wcC5vbkxvYWQpe1xuICAgICAgICAgICAgdGhpcy5FeGN1dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGlmKHRoaXMub3BwID09IFBsYXlPcHAub25FbmFibGUpe1xuICAgICAgICAgICAgdGhpcy5FeGN1dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCl7XG4gICAgICAgIGlmKHRoaXMub3BwID09IFBsYXlPcHAub25TdGFydCl7XG4gICAgICAgICAgICB0aGlzLkV4Y3V0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgaWYodGhpcy5vcHAgPT0gUGxheU9wcC5VcGRhdGUpe1xuICAgICAgICAgICAgdGhpcy5FeGN1dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEV4Y3V0ZSgpe1xuICAgICAgICAvLyBvdmVycmlkZSB0b2RvXG4gICAgfVxufVxuIl19