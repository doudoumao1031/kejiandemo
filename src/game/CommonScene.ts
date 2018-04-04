class CommonScene extends egret.DisplayObjectContainer{

    public constructor() {
		super();
        // this.addEventListener( egret.Event.ADDED_TO_STAGE,this.initView,this);
        // let sky = GameUtil.createBitmapByName("sky_png");
        // this.addChild(sky);
        // sky.x = sky.y = 0;
        // sky.width = this.stage.stageWidth;
        // sky.height = this.stage.stageHeight;
	}

    // private initView(){
    //     let sky = GameUtil.createBitmapByName("sky_png");
    //     this.addChild(sky);
    //     sky.x = sky.y = 0;
    //     sky.width = this.stage.stageWidth;
    //     sky.height = this.stage.stageHeight;
    // }

	// 抽象出来的动画获取方法
	protected createdonghua(name:string){
		var skeletonData = RES.getRes(name + "_ske_json");
        var textureData = RES.getRes(name + "_tex_json");
        var texture = RES.getRes(name + "_tex_png");

        var factory = new dragonBones.EgretFactory();
        factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlasData(factory.parseTextureAtlasData(textureData, texture));

        var armature = factory.buildArmature(name);
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
		this.addChild(armatureDisplay);
		armature.animation.gotoAndPlay(name);

		return armatureDisplay // 暴露给外部配置
	}

	protected _time:number;
	protected onTicker(timeStamp:number) { // 可以认为startTick在每帧渲染时 把当前毫秒数传入了渲染回调 然后dragonBones.WorldClock.clock.advanceTime是更新定时器
        if(!this._time) {
            this._time = timeStamp;
        }

        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;

        dragonBones.WorldClock.clock.advanceTime(pass / 1000);

        return false; // 这儿不会触发重绘制 只是让动画运动
    }

    // protected createBitmapByName(name: string) {
    //     let result = new egret.Bitmap();
    //     let texture: egret.Texture = RES.getRes(name);
    //     result.texture = texture;
    //     return result;
    // }
}