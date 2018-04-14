// class StartScene extends egret.DisplayObjectContainer{
class Scene051 extends CommonScene{
	public constructor() {
		super();
		// this.addEventListener( egret.Event.ADDED_TO_STAGE,this.runGame,this);
		this.addEventListener( egret.Event.ADDED_TO_STAGE,this.initView,this);
        console.log('scene051');
		SceneController.refresh("051");
	}

	private async runGame() {
        // await this.loadResource()
		// await RES.loadGroup("lesson051");
        this.initView();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

    }

    // private async loadResource() {
    //     try {
    //         const loadingView = new LoadingUI();
    //         this.stage.addChild(loadingView);
    //         // await RES.loadConfig("resource/default.res.json", "resource/");
    //         await RES.loadGroup("lesson051", 0, loadingView);
    //         this.stage.removeChild(loadingView);
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // }

	private _sound;

	private _bear;
	private _zuiba;
	private _soundchannel:egret.SoundChannel;
	private _do;
	private _re;
	private _mi;
	private _flowers;
	private _yuepu;
	private _text:egret.TextField;
	private _btnright;
	private _yun2;
	private _caodi;
	private _yinfu_active;
	private _yinfu_do;
	private _yinfu_re;
	private _yinfu_mi;

	private initView(){
		let currentscene = this;
		mouse.enable(this.stage);
		// 音效
		this._sound = RES.getRes("streamsound 0_mp3");
		this._soundchannel = this._sound.play(5,1);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频 进入下一帧的回调

		// let bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");
		let bg:egret.Bitmap = GameUtil.createBitmapByName("sky_png");
		let yun:egret.Bitmap = GameUtil.createBitmapByName("yun_png");
		this.addChild(bg);
		bg.width = this.stage.stageWidth;
		bg.height = this.stage.stageHeight;
		this.addChild(yun);
		yun.x = this.stage.stageWidth * .6;
		yun.y = this.stage.stageHeight * .05;
		yun.scaleX = 6;
		yun.scaleY = 6;

		this._yun2 = GameUtil.createBitmapByName("yunlianpai0001_png");
		
		this._yun2.anchorOffsetX = this._yun2.width / 2;
		this._yun2.anchorOffsetY = this._yun2.height / 2;
		this._yun2.x = this.stage.stageWidth / 2;
		this._yun2.y = this.stage.stageHeight * .5;
		this._yun2.scaleX = this.stage.stageWidth / this._yun2.width * 1.1;
		this._yun2.scaleY = this.stage.stageHeight / this._yun2.height * .25;
		this.addChild(this._yun2);
		egret.Tween.get(this._yun2, {loop:true}).to({y:this.stage.stageHeight * .45},1500).wait(500).to({y:this.stage.stageHeight * .5},1500);
		

		// let caodi = this.createdonghua("caodi");
        let caodi = GameUtil.createBitmapByName("cao051_png");
		caodi.anchorOffsetX = caodi.width/2;
		// caodi.anchorOffsetY = caodi.height/2;
		caodi.x = this.stage.stageWidth/2;

		// 标题
		this._text = new egret.TextField;
		this._text.width = this.stage.stageWidth * .5;
		this._text.height = this.stage.stageHeight * .2;
		// this._text.anchorOffsetX = this._text.width * .5;
		// this._text.anchorOffsetY = this._text.height * .5;
		this._text.x = this.stage.stageWidth * .5 - this._text.width * .5;
		this._text.y = this.stage.stageHeight * .13;
		this._text.textColor = 0;
		this._text.size = 20;
		this._text.fontFamily = "微软雅黑";
		this._text.textAlign = egret.HorizontalAlign.CENTER;
		this._text.textFlow = <Array<egret.ITextElement>>[
			{text: "一、do、re、mi 的学习", style: {"size":115, "textColor": 0x305C1D}}
			, {text: "\n"}
			, {text: "\n"}
			, {text: "\n"}
			, {text: "\n"}
			,{text:"快乐的小熊 dodo 和它的好朋友兔子 rere 和小猫 mimi。", style: {"size": 75, "textColor": 0x305C1D}}
			// , {text: "Egret", style: {"textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2}}
			// , {text: "里说一句话不能包含各种", style: {"fontFamily": "楷体"}}
			// , {text: "五", style: {"textColor": 0xff0000}}
			// , {text: "彩", style: {"textColor": 0x00ff00}}
			// , {text: "缤", style: {"textColor": 0xf000f0}}
			// , {text: "纷", style: {"textColor": 0x00ffff}}
			// , {text: "、\n"}
			// , {text: "大", style: {"size": 36}}
			// , {text: "小", style: {"size": 6}}
			// , {text: "不", style: {"size": 16}}
			// , {text: "一", style: {"size": 24}}
			// , {text: "、"}
			// , {text: "格", style: {"italic": true, "textColor": 0x00ff00}}
			// , {text: "式", style: {"size": 16, "textColor": 0xf000f0}}
			// , {text: "各", style: {"italic": true, "textColor": 0xf06f00}}
			// , {text: "样", style: {"fontFamily": "楷体"}}
			// , {text: ""}
			// , {text: "的文字了！"}
		];
		this.addChild( this._text );

		// var str: string = "<font color=#FFFFFF>哈哈哈哈</font>\n<font color='#ff0000'>嘿嘿嘿嘿</font>";
		// this._text =  new egret.TextField;
		// this._text.width = this.stage.stageWidth;
		// this._text.height = this.stage.stageHeight * .2;
		// this._text.textFlow = (new egret.HtmlTextParser).parser(str);
		// this.addChild(this._text);

		// 乐谱
		// this._yuepu = GameUtil.createBitmapByName("yinjie1_png"); 
		this._yuepu = GameUtil.createBitmapByName("yuepu11_png");
		this.addChild(this._yuepu);
		this._yuepu.anchorOffsetX = this._yuepu.width / 2;
		this._yuepu.anchorOffsetY = this._yuepu.height / 2;
		this._yuepu.x = this.stage.stageWidth / 2;
		this._yuepu.y = this.stage.$stageHeight * .35;
		this._yuepu.scaleX = this._yuepu.scaleY = this.stage.stageWidth / this._yuepu.width * .5;

		this._yinfu_do = GameUtil.createBitmapByName("yinfu1_png"); 
		this._yinfu_do.x = this._yuepu.x - this._yuepu.width * .62;
		this._yinfu_do.y = this._yuepu.y + this._yuepu.height * .895;
		this._yinfu_do.scaleX = this._yinfu_do.scaleY = 2.2;
		this.addChild(this._yinfu_do);



		caodi.y = this.stage.stageHeight * .5;
		caodi.scaleX = this.stage.stageWidth / caodi.width * 1.1;
		caodi.scaleY = this.stage.stageHeight / caodi.height * 1;
		this._caodi = caodi;
        this.addChild(caodi);

		this._bear = this.createdonghua("bearmove");
		this._bear.x = 0 - this._bear.width/2;
		this._bear.y = this.stage.stageHeight * .8;
		this._bear.scaleX = 4 * 6/4;
		this._bear.scaleY = 4 * 6/4;
		egret.Tween.get( this._bear ).to( {x:this.stage.stageWidth * .2}, 1000 ).call(()=>{
			this.removeChild(this._bear);
			this._bear = this.createdonghua("bear");
			this._bear.x = this.stage.stageWidth * .2;
			this._bear.y = this.stage.stageHeight * .8;
			this._bear.scaleX = 2 * 6/4;
			this._bear.scaleY = 2 * 6/4;
			this.addChild(this._bear);
			// 走完后添加嘴巴
			this._zuiba = this.createdonghua("zuiba");
			this._zuiba.x = this._bear.x - this._zuiba.width * 3;
			this._zuiba.y = this._bear.y - this._zuiba.height * .8;
			this._zuiba.scaleX = this._zuiba.scaleY = 3;
		});

		this._do = this.createdonghua("do");
		this._do.anchorOffsetX = this._do.width / 2;
		this._do.anchorOffsetY = this._do.height / 2;
		// this._do.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 1/3;
		this._do.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1/3;
		this._do.y = this.stage.stageHeight * .85;
		this._do.scaleX = 4 * 3/4;
		this._do.scaleY = 4 * 3/4;

		this._re = this.createdonghua("re");
		this._re.anchorOffsetX = this._re.width / 2;
		this._re.anchorOffsetY = this._re.height / 2;
		this._re.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2/3;
		this._re.y = this.stage.stageHeight * .85;
		this._re.scaleX = 4 * 3/4;
		this._re.scaleY = 4 * 3/4;

		this._mi = this.createdonghua("mi");
		this._mi.anchorOffsetX = this._mi.width / 2;
		this._mi.anchorOffsetY = this._mi.height / 2;
		this._mi.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3/3;
		this._mi.y = this.stage.stageHeight * .85;
		this._mi.scaleX = 4 * 3/4;
		this._mi.scaleY = 4 * 3/4;

		this._flowers = this.createdonghua("flowers");
		console.log(this._flowers);
		// this._flowers.anchorOffsetX = this._flowers.width / 2;
		// this._flowers.anchorOffsetY = this._flowers.height / 2;
		this._flowers.x = this.stage.stageWidth * .5;
		this._flowers.y = this.stage.stageHeight * .85;
		this._flowers.scaleX = this.stage.stageWidth / this._flowers.width * 1.1;
		this._flowers.scaleY = this.stage.stageHeight / this._flowers.height * .55;
		// console.log(this._flowers.scaleX ,this._flowers.scaleY );

		// let button:egret.Bitmap = GameUtil.createBitmapByName("btn0001_png"); 
		let button = this.createdonghua("buttonright");
		button.anchorOffsetX = button.width/2;
		button.anchorOffsetY = button.height/2;
		button.x = this.stage.stageWidth * .95;
		button.y = this.stage.stageHeight * .9;
		button.touchEnabled = true;
		button.scaleX = button.scaleY = this.stage.stageWidth / button.width * .1;
		this._btnright = button;
		this.addChild(this._btnright);
		mouse.setMouseMoveEnabled(true);
		mouse.setButtonMode(this._btnright, this._do);
		// button.addEventListener(mouse.MouseEvent.MOUSE_MOVE, ()=>{
		// 	console.log('mouse move');
		// 	this.removeChild(this._btnright);
		// 	this._btnright = this.createdonghua("buttonright_hover");
		// 	this._btnright.anchorOffsetX = this._btnright.width/2;
		// 	this._btnright.anchorOffsetY = this._btnright.height/2;
		// 	this._btnright.x = this.stage.stageWidth * .9;
		// 	this._btnright.y = this.stage.stageHeight * .8;
		// 	this._btnright.touchEnabled = true;
		// 	this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
		// 	this.addChild(this._btnright);
		// }, this);

		// button.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>{
		// 	console.log('btnright mouseover');
		// 	this.removeChild(this._btnright);
		// 	this._btnright = this.createdonghua("buttonright_hover");
		// 	this._btnright.anchorOffsetX = this._btnright.width/2;
		// 	this._btnright.anchorOffsetY = this._btnright.height/2;
		// 	this._btnright.x = this.stage.stageWidth * .9;
		// 	this._btnright.y = this.stage.stageHeight * .8;
		// 	this._btnright.touchEnabled = true;
		// 	this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
		// 	currentscene.addChild(this._btnright);
		// 	this._btnright.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>{
		// 		console.log('btnright mouseout');
		// 		this.removeChild(this._btnright);
		// 		this._btnright = this.createdonghua("buttonright");
		// 		this._btnright.anchorOffsetX = this._btnright.width/2;
		// 		this._btnright.anchorOffsetY = this._btnright.height/2;
		// 		this._btnright.x = this.stage.stageWidth * .9;
		// 		this._btnright.y = this.stage.stageHeight * .8;
		// 		this._btnright.touchEnabled = true;
		// 		this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
		// 		currentscene.addChild(this._btnright);
		// 	}, this);
		// }, this);
		
		// button.addEventListener(mouse.MouseEvent.MOUSE_OUT, ()=>{
		// 	console.log('btnright mouseout');
		// 	this.removeChild(this._btnright);
		// 	this._btnright = this.createdonghua("buttonright");
		// 	this._btnright.anchorOffsetX = this._btnright.width/2;
		// 	this._btnright.anchorOffsetY = this._btnright.height/2;
		// 	this._btnright.x = this.stage.stageWidth * .9;
		// 	this._btnright.y = this.stage.stageHeight * .8;
		// 	this._btnright.touchEnabled = true;
		// 	this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
		// 	currentscene.addChild(this._btnright);
		// }, this);
	

		this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );


		// let bear = this.createdonghua("bear");
		// bear.x = this.stage.stageWidth / 3;
        // bear.y = this.stage.stageHeight * .8;
		// bear.scaleX = 2;
		// bear.scaleY = 2;

		// egret.stopTick(this.onTicker,this);
		// egret.startTick(this.onTicker, this);
		// 需要注意的是，startTick函数的参数，第一个参数即它的回调函数，要求有返回值，如果返回为true将在回调函数执行完成之后立即重绘，为false则不会重绘。另一个参数是this对象，通常传入this即可。

	}
	private onTimeUpdate(){
		if(this._soundchannel.position > 9){
		// console.log("zhen shua xin", this._soundchannel.position);
			this._soundchannel.stop();
			this._soundchannel = null;
			if(this._zuiba.parent){ 
				this.removeChild(this._zuiba);
			}
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频
		}
	}
	private touchHandler( evt:egret.TouchEvent ){
		this.checkCollision( evt.stageX, evt.stageY );
        // switch ( evt.type ){
        //     case egret.TouchEvent.TOUCH_MOVE:
        //         // this.checkCollision( evt.stageX, evt.stageY );
        //         break;
        //     case egret.TouchEvent.TOUCH_BEGIN:
        //         // if( !this._txInfo.hitTestPoint( evt.stageX, evt.stageY ) ){ /// if代码确保触摸开始位置不在文字区域
        //             this.stage.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this );
        //             this.stage.once( egret.TouchEvent.TOUCH_END, this.touchHandler, this );
        //             // this.addChild( this._dot );
        //             this.checkCollision( evt.stageX, evt.stageY );
        //         // }
        //         break;
        //     case egret. TouchEvent.TOUCH_END:
		// 		this.stage.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this );
        //         this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
        //         // if( this._dot.parent ){
        //         //     this._dot.parent.removeChild( this._dot );
        //         // }
        //         // this.updateInfo( TouchCollideStatus.NO_TOUCHED );
        //         break;
        // }
    }
	// 封装的播放方法
	private soundplay(src:string,times:number):void{
		if(this._soundchannel){
			this._soundchannel.stop();
		}
		this._sound = RES.getRes(src);
		this._soundchannel = this._sound.play(0,times);
	}
	private checkCollision( stageX:number, stageY:number ):void {
		let Scene = this;
		if(this._btnright.hitTestPoint( stageX, stageY )){
			// let height = this.stage.stageHeight * .9;
			// console.log(egret.Tween.get(this._yun2), height);
			// let yun2 = egret.Tween.get(this._yun2);
			// egret.Tween.get(this._caodi).to({y:this.stage.stageHeight},1000);
			// egret.Tween.removeTweens(this._yun2);
			// egret.Tween.get(this._yun2).to({y:this.stage.stageHeight},1000).call(()=>{
			// 	SceneController.Scene052(Scene);
			SceneController.jumpr(Scene);
			// });
		}

        /*** 本示例关键代码段开始 ***/


        var doResult:boolean = this._do.hitTestPoint( stageX, stageY );
		var reResult:boolean = this._re.hitTestPoint( stageX, stageY );
		var miResult:boolean = this._mi.hitTestPoint( stageX, stageY );
		
        /*** 本示例关键代码段结束 ***/
		// console.log('碰撞测试',doResult);
		// console.log(this); // 输出是Scene051实例

		if(doResult && this._do.parent){
			let x = this._do.x;
			let y = this._do.y;
			this.removeChild(this._do);
			this._do = this.createdonghua("do1");
			this._do.anchorOffsetX = this._do.width * .45;
			this._do.anchorOffsetY = this._do.height / 2;
			this._do.x = x;
			this._do.y = y;
			this._do.scaleX = 4 * 3/4;
			this._do.scaleY = 4 * 3/4;
			this.addChild(this._do)
			this.soundplay("do_mp3",3);
			this._yinfu_active = GameUtil.createBitmapByName("yinfu1_active_png"); 
			this._yinfu_active.x = this._yuepu.x - this._yuepu.width * .62;
			this._yinfu_active.y = this._yuepu.y + this._yuepu.height * .895;
			this._yinfu_active.scaleX = this._yinfu_active.scaleY = 2.2;
			this.addChild(this._yinfu_active);
		}else{
			let x = this._do.x;
			let y = this._do.y;
			this.removeChild(this._do);
			this._do = this.createdonghua("do");
			this._do.anchorOffsetX = this._do.width / 2;
			this._do.anchorOffsetY = this._do.height / 2;
			this._do.x = x;
			this._do.y = y;
			this._do.scaleX = 4 * 3/4;
			this._do.scaleY = 4 * 3/4;
			this.addChild(this._do)
		}

		if(reResult && this._re.parent){
			let x = this._re.x;
			let y = this._re.y;
			this.removeChild(this._re);
			this._re = this.createdonghua("re1");
			this._re.anchorOffsetX = this._re.width * .40;
			this._re.anchorOffsetY = this._re.height / 2;
			this._re.x = x;
			this._re.y = y;
			this._re.scaleX = 4 * 3/4;
			this._re.scaleY = 4 * 3/4;
			this.addChild(this._re)
			this.soundplay("re_mp3",3);
		}else{
			let x = this._re.x;
			let y = this._re.y;
			this.removeChild(this._re);
			this._re = this.createdonghua("re");
			this._re.anchorOffsetX = this._re.width * .5;
			this._re.anchorOffsetY = this._re.height / 2;
			this._re.x = x;
			this._re.y = y;
			this._re.scaleX = 4 * 3/4;
			this._re.scaleY = 4 * 3/4;
			this.addChild(this._re)
		}

		if(miResult && this._mi.parent){
			let x = this._mi.x;
			let y = this._mi.y;
			this.removeChild(this._mi);
			this._mi = this.createdonghua("mi1");
			this._mi.anchorOffsetX = this._mi.width * .2;
			this._mi.anchorOffsetY = this._mi.height * 0.64;
			this._mi.x = x;
			this._mi.y = y;
			this._mi.scaleX = 4 * 3/4;
			this._mi.scaleY = 4 * 3/4;
			this.addChild(this._mi)
			this.soundplay("mi_mp3",3);
		}else{
			let x = this._mi.x;
			let y = this._mi.y;
			this.removeChild(this._mi);
			this._mi = this.createdonghua("mi");
			this._mi.anchorOffsetX = this._mi.width / 2;
			this._mi.anchorOffsetY = this._mi.height / 2;
			this._mi.x = x;
			this._mi.y = y;
			this._mi.scaleX = 4 * 3/4;
			this._mi.scaleY = 4 * 3/4;
			this.addChild(this._mi)
		}
        //     /// 小圆点同步手指位置
        // this._dot.x = stageX;
        // this._dot.y = stageY;

        /// 文字信息更新
        // this.updateInfo( bResult ? TouchCollideStatus.COLLIDED : TouchCollideStatus.TOUCHED_NO_COLLIDED );
    }

}