import Auto_loadingController from "../../autoui/common/Auto_loadingController";
import UIFrame from "../../framework/ui/UIFrame";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/common/UILoadingController")
export default class UILoadingController extends UIFrame {
	ui: Auto_loadingController = null;

	protected static prefabUrl = "common/loadingController";
	protected static className = "UILoadingController";

	onLoad() {
		this.ui = this.node.addComponent(Auto_loadingController);
	}

	start() {

	}

	onEnable() {
		this.show();
	}

	show() {
		this.node.active = true;

		//背景从透明边半透明
		this.ui.bg.stopAllActions();
		this.ui.bg.opacity = 0;
		this.ui.bg.runAction(cc.fadeTo(0.24, 180));

		//一直旋转
		this.ui.loadingSprite.stopAllActions();
		cc.tween(this.ui.loadingSprite)
			.by(1, {angle: -360})
			.repeatForever()
			.start()

		this.scheduleOnce(() => {
			this.node.active = false;
		}, 10)
	}

	hide() {
		// 背景从半透明变透明，之后隐藏节点
		this.ui.bg.stopAllActions();
		this.ui.bg.runAction(
			cc.sequence(
				cc.fadeTo(0.24, 0),
				cc.callFunc(() => {
					this.node.active = false;
				})
			)
		);
		//停止旋转
		this.ui.loadingSprite.stopAllActions();
	}

	update() {

	}

	onDisable() {

	}

	onDestroy() {
		
	}
}