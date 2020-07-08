const {ccclass, property} = cc._decorator;

export enum PlayOpp {
    onLoad,
    onEnable,
    onStart,
    Update,
    Manual,
}

@ccclass
export default class PlayOppBaseComponent extends cc.Component {
    @property({type:cc.Enum(PlayOpp)})
    public opp : PlayOpp = PlayOpp.Manual;

    onLoad(){
        if(this.opp == PlayOpp.onLoad){
            this.Excute();
        }
    }

    onEnable(){
        if(this.opp == PlayOpp.onEnable){
            this.Excute();
        }
    }

    start(){
        if(this.opp == PlayOpp.onStart){
            this.Excute();
        }
    }

    update(dt){
        if(this.opp == PlayOpp.Update){
            this.Excute();
        }
    }

    Excute(){
        // override todo
    }
}
