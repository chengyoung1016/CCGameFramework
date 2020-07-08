const { ccclass } = cc._decorator;

@ccclass
export default class Auto_loadingController extends cc.Component {
	loadingController: cc.Node;
	bg: cc.Node;
	loadingSprite: cc.Node;

	public static URL:string = "db://assets/resources/prefab/common/loadingController.prefab"

    onLoad () {
		this.loadingController = this.node
		this.bg = this.loadingController.getChildByName("bg");
		this.loadingSprite = this.loadingController.getChildByName("loadingSprite");

    }
}
