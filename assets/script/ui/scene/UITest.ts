import Auto_Test from "../../autoui/scene/Auto_Test";
import UIFrame from "../../framework/ui/UIFrame";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UITest")
export default class UITest extends UIFrame {
	ui: Auto_Test = null;

	protected static prefabUrl = "";
	protected static className = "UITest";

	onLoad() {
		this.ui = this.node.addComponent(Auto_Test);
	}

	start() {
		
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