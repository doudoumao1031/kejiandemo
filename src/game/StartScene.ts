// class StartScene extends egret.DisplayObjectContainer{
class StartScene extends CommonScene{
	public constructor() {
		super();
		this.addEventListener( egret.Event.ADDED_TO_STAGE,this.initView,this);
		console.log('scene050');
		SceneController.refresh("050");
		
	}

	private _soundchannel:egret.SoundChannel;
	private _zuiba;
	private _bear;

	private initView(){
		this.stage.setContentSize (3840,2160); 
		console.log("舞台宽高",this.stage.stageWidth,this.stage.stageHeight);
		let Scene = this;
		// 音效
		let sound:egret.Sound = RES.getRes("streamsound 0_mp3");
		this._soundchannel = sound.play(0,1);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频 进入下一帧的回调
		
		// setTimeout(function(){channel.stop(),5000);
		// let bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");
		let bg:egret.Bitmap = GameUtil.createBitmapByName("sky_png");
		let yun:egret.Bitmap = GameUtil.createBitmapByName("yun_png");
		this.addChild(bg);
		bg.width = this.stage.stageWidth;
		bg.height = this.stage.stageHeight;
		this.addChild(yun);
		yun.x = this.stage.stageWidth * .5;
		yun.y = this.stage.stageHeight * .05;
		yun.scaleX = 6;
		yun.scaleY = 6;
		// egret.Tween.get(yun, {loop:true}).to({x:this.stage.stageWidth/4},1500).to({x:-this.stage.stageWidth/4},1500);
		egret.Tween.get(yun, {loop:true}).to({x:this.stage.stageWidth * .8},3000).wait(500).to({x:this.stage.stageWidth * .5},3000);

		//开始游戏的按钮
		// let startBtn:egret.Bitmap = GameUtil.createBitmapByName("btn_ksyx_png");
		let startBtn:egret.Bitmap = GameUtil.createBitmapByName("button0001_png");
		this.addChild(startBtn);
		startBtn.x = (this.stage.stageWidth - startBtn.width) * 3/4;
		startBtn.y = (this.stage.stageHeight - startBtn.height)/2;
		startBtn.anchorOffsetX = startBtn.width/2;
		startBtn.anchorOffsetY = startBtn.height/2;
		startBtn.scaleX = 2.5;
		startBtn.scaleY = 2.5;
		startBtn.touchEnabled = true;
		startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			console.log("点击了开始游戏按钮，进入游戏场景");
			// SceneController.startGameScene();
			this.removeChild(this._bear);
			if(this._zuiba&&this._zuiba.parent){ //如果过快点击 需要强制移除嘴巴
				this.removeChild(this._zuiba);
			}
			this._bear = this.createdonghua("bearmove");
			this._bear.x = this.stage.stageWidth / 3;
			this._bear.y = this.stage.stageHeight * .8;
			this._bear.scaleX = 4 * 5/4;
			this._bear.scaleY = 4 * 5/4;
			egret.Tween.get( this._bear ).to( {x:this.stage.stageWidth}, 3000 ).call(()=>{
				this.removeChild(this._bear);
				SceneController.jumpr(Scene);
			});
			egret.Tween.get( startBtn ).to( {scaleX:5,scaleY:5,alpha:.3}, 1500, egret.Ease.sineIn ).call(()=>{
				this.removeChild(startBtn);
				
			});//切换场景
		},this);

		// // 加一个自定义动画 草地
		// var skeletonData = RES.getRes("cao_ske_json");
        // var textureData = RES.getRes("cao_tex_json");
        // var texture = RES.getRes("cao_tex_png");

        // var factory = new dragonBones.EgretFactory();
        // factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        // factory.addTextureAtlasData(factory.parseTextureAtlasData(textureData, texture));

        // var bear = factory.buildArmature("bear");
        // var bearobj = bear.getDisplay();
        // dragonBones.WorldClock.clock.add(bear);
        // // this.container.addChild(this.armatureDisplay);
		// this.addChild(bearobj);
        // bearobj.x = this.stage.stageWidth / 3;
        // bearobj.y = this.stage.stageHeight * 3 / 4;
		// bearobj.scaleX = 2;
		// bearobj.scaleY = 2;

		let mogu = this.createdonghua("mogu");
		mogu.x = (this.stage.stageWidth - mogu.width) * 3/4 - mogu.width*.5;
		mogu.y = (this.stage.stageHeight - startBtn.height)/2 - mogu.height*3;
		mogu.scaleX = 5;
		mogu.scaleY = 5;
		this.swapChildren( startBtn, mogu );// 换一下层级



		let dashu = this.createdonghua("dashu");
		// dashu.x = 620;
		// dashu.y = 680;
		// dashu.scaleX = 5;
		// dashu.scaleY = 5;
		dashu.scaleX = this.stage.stageWidth / dashu.width * .45;
		dashu.scaleY = this.stage.stageHeight / dashu.height * .65;
		dashu.x = dashu.width * dashu.scaleX * .5;
		dashu.y = dashu.height * dashu.scaleY * .5;

		let caodi = this.createdonghua("caodi");
		caodi.x = this.stage.stageWidth / 2;
		caodi.y = this.stage.stageHeight * .80;
		caodi.scaleX = this.stage.stageWidth / caodi.width * 1.1;
		// caodi.width = this.stage.stageWidth;
		caodi.scaleY = this.stage.stageHeight / caodi.height * .5;

		
		

		// this._bear = this.createdonghua("bear");
		// this._bear.x = this.stage.stageWidth / 3;
        // this._bear.y = this.stage.stageHeight * .8;
		// this._bear.scaleX = 2.5;
		// this._bear.scaleY = 2.5;

		// this._zuiba = this.createdonghua("zuiba");
		// this._zuiba.x = this._bear.x - this._zuiba.width * 3;
		// this._zuiba.y = this._bear.y - this._zuiba.height * .8;
		// this._zuiba.scaleX = this._zuiba.scaleY = 3;

		this._bear = this.createdonghua("bearmove");
		this._bear.scaleX = 4 * 5/4;
		this._bear.scaleY = 4 * 5/4;
		// this._bear.scaleX = this.stage.stageWidth / this._bear.width * .14;
		// this._bear.scaleY = this._bear.scaleX * 1.05;
		this._bear.x = 0 - this._bear.width/2;
		this._bear.y = this.stage.stageHeight * .75;
		egret.Tween.get( this._bear ).to( {x:this.stage.stageWidth * .33}, 1500 ).call(()=>{
			this.removeChild(this._bear);
			this._bear = this.createdonghua("bear");
			this._bear.scaleX = 2 * 5/4;
			this._bear.scaleY = 2 * 5/4;
			// this._bear.scaleX = this.stage.stageWidth / this._bear.width * .20;
			// this._bear.scaleY = this._bear.scaleX * 1.05;
			this._bear.x = this.stage.stageWidth * .33;
			this._bear.y = this.stage.stageHeight * .75;
			// this._bear.width = this.stage.stageWidth * .2;
			// this._bear.height = this._bear.width * 1.05;
			this.addChild(this._bear);
			// 走完后添加嘴巴
			this._zuiba = this.createdonghua("zuiba");
			this._zuiba.x = this._bear.x - this._zuiba.width * 3;
			this._zuiba.y = this._bear.y - this._zuiba.height * .8;
			this._zuiba.scaleX = this._zuiba.scaleY = 3;
		});

		this.addjiaoyin(); // 该方法依赖于 this._bear所以需要放在后面

		

		

		

		egret.startTick(this.onTicker, this);
		// 需要注意的是，startTick函数的参数，第一个参数即它的回调函数，要求有返回值，如果返回为true将在回调函数执行完成之后立即重绘，为false则不会重绘。另一个参数是this对象，通常传入this即可。

	}
	private onTimeUpdate(){
		if(this._soundchannel.position > 5){
			this._soundchannel.stop();
			this._soundchannel = null;
			if(this._zuiba.parent){ 
				this.removeChild(this._zuiba);
			}
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频
		}
	}
	private addjiaoyin(){
		let jy1 = this.getjiaoyin(1/9,"jiaoyinleft_png",true);
		let jy2 = this.getjiaoyin(2/9,"jiaoyinright_png",false);
		let jy3 = this.getjiaoyin(3/9,"jiaoyinleft_png",true);
		let jy4 = this.getjiaoyin(4/9,"jiaoyinright_png",false);
		let jy5 = this.getjiaoyin(5/9,"jiaoyinleft_png",true);
		let jy6 = this.getjiaoyin(6/9,"jiaoyinright_png",false);
		let jy7 = this.getjiaoyin(7/9,"jiaoyinleft_png",true);
		let jy8 = this.getjiaoyin(8/9,"jiaoyinright_png",false);
		this.addEventListener(egret.Event.ENTER_FRAME, function jiaoyin(){
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 1/9 && !jy1.parent){
				this.addChild(jy1)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 2/9 && !jy2.parent){
				this.addChild(jy2)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 3/9 && !jy3.parent){
				this.addChild(jy3)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 4/9 && !jy4.parent){
				this.addChild(jy4)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 5/9 && !jy5.parent){
				this.addChild(jy5)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 6/9 && !jy6.parent){
				this.addChild(jy6)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 7/9 && !jy7.parent){
				this.addChild(jy7)
			}
			if(this._bear.x - this._bear.width > this.stage.stageWidth * 8/9 && !jy8.parent){
				this.addChild(jy8)
				this.removeEventListener(egret.Event.ENTER_FRAME, jiaoyin, this);
			}
			
		}, this); // 通过这个来监听音频 进入下一帧的回调
	}
	private getjiaoyin(distance:number,name:string,sideleft:boolean){
		let getjiaoyin:egret.Bitmap = GameUtil.createBitmapByName(name);
		getjiaoyin.y = this.stage.stageHeight * .8 + this._bear.height/2 + (sideleft ? -getjiaoyin.height : getjiaoyin.height);
		getjiaoyin.x = this.stage.stageWidth * distance - this._bear.width/2; 
		getjiaoyin.scaleX = getjiaoyin.scaleY = 2;
		return getjiaoyin;
	}


}