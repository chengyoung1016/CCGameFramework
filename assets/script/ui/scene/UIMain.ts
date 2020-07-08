import Auto_Main from "../../autoui/scene/Auto_Main";
import UIFrame from "../../framework/ui/UIFrame";
import UIModule from "../../framework/ui/UIModule";
import UILoadingController from "../common/UILoadingController";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UIMain")
export default class UIMain extends UIFrame {
	ui: Auto_Main = null;

	protected static prefabUrl = "";
	protected static className = "UIMain";

	onLoad() {
		this.ui = this.node.addComponent(Auto_Main);
	}

	start() {
		UIModule.getInstance().OpenWindow(UILoadingController);
		this.scheduleOnce(() => {
			UIModule.getInstance().DestroyWindow(UILoadingController);
			// UIModule.getInstance().DestroyAllWindow();
		}, 4);
	}

	onEnable() {

	}

	update() {

	}

	onDisable() {

	}

	onDestroy() {
		
	}
}