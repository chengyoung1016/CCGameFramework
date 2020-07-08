const { ccclass } = cc._decorator;

@ccclass
export default class Auto_Test extends cc.Component {
	Canvas: cc.Node;
	test1: cc.Node;
	test2: cc.Node;
	test3: cc.Node;
	test4: cc.Node;

	public static URL:string = "db://assets/scene/Test.fire"

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.test1 = this.Canvas.getChildByName("test1");
		this.test2 = this.Canvas.getChildByName("test2");
		this.test3 = this.Canvas.getChildByName("test3");
		this.test4 = this.Canvas.getChildByName("test4");

    }
}
