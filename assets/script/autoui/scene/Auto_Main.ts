const { ccclass } = cc._decorator;

@ccclass
export default class Auto_Main extends cc.Component {
	Canvas: cc.Node;
	Background: cc.Node;

	public static URL:string = "db://assets/scene/Main.fire"

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.Background = this.Canvas.getChildByName("Background");

    }
}
