// class StartScene extends egret.DisplayObjectContainer{
class Scene053 extends CommonScene{
	public constructor() {
		super();
		// this.addEventListener( egret.Event.ADDED_TO_STAGE,this.runGame,this);
		this.addEventListener( egret.Event.ADDED_TO_STAGE,this.initView,this);
        console.log('scene053');
		SceneController.refresh("053");
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

    private _bg;

	private _bear;
	private _zuiba;
	private _soundchannel:egret.SoundChannel;
	private _do;
	private _re;
	private _mi;
	private _flowers;
	private _yuepu_left;
	private _yuepu_mid;
	private _yuepu_right;
	private _text:egret.TextField;
	private _btnleft;
	private _btnright;
	private _yunright;
	private _yunleft;
    private _yun2;
	private _caihong;
	private _house;
	private _jiantou;
	private _shou;

	private initView(){

		let stageWidth = this.stage.stageWidth;
		// 音效
		let sound:egret.Sound = RES.getRes("streamsound 0_mp3");
		this._soundchannel = sound.play(5,1);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频 进入下一帧的回调

		// let bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");

        this._bg = new egret.Shape;

        this.addChild(this._bg = new egret.Shape());
        // var matrix:egret.Matrix = new egret.Matrix();
        // matrix.createGradientBox(this.width, this.height);
        var g:egret.Graphics = this._bg.graphics;
        // g.beginGradientFill(egret.GradientType.LINEAR, [0xff0000, 0x00ff00], [1, 1], [0, 1], matrix);
        g.beginFill( 0xFFFFCC ); 
        g.drawRect( 0, 0, this.stage.stageWidth, this.stage.stageHeight );
        g.endFill();

		// this._bg = GameUtil.createBitmapByName("bg053_png");
		// this.addChild(this._bg);
		// this._bg.width = this.stage.stageWidth;
		// this._bg.height = this.stage.stageHeight;
        	
		// this._yunright = GameUtil.createBitmapByName("yun_png");
		// this.addChild(this._yunright);
		// this._yunright;
		// this._yunright.width = stageWidth * .45;
		// this._yunright.height = stageWidth * .45 * .442;
		// this._yunright.x = this.stage.stageWidth+this._yunright.width/2;
		// this._yunright.y = this.stage.stageHeight * .05;
		// egret.Tween.get(this._yunright).to({x:this.stage.stageWidth * .6},1500).set({x:this.stage.stageWidth * .6}).call(()=>{
		// 	let yunY = this._yunright.y;
		// 	egret.Tween.get(this._yunright, {loop:true}).to({y:yunY + this._yunright.height/4},1500).wait(500).to({y:yunY - this._yunright.height/4 * 1},3000).to({y:yunY},1500);
		// })

		this._yunleft = GameUtil.createBitmapByName("yun_png");//0.442
		this.addChild(this._yunleft);
		this._yunleft.width = stageWidth * .3;
		this._yunleft.height = stageWidth * .3 * 0.442;
		this._yunleft.x = -this._yunleft.width;
		this._yunleft.y = this.stage.stageHeight * .3;
		let dangqianScene = this;
		if(this._yunleft){
			egret.Tween.get(dangqianScene._yunleft).to({x:stageWidth * -0.15},1500).set({x:dangqianScene.stage.stageWidth * -0.15}).call(()=>{
				let yunX = dangqianScene._yunleft.x;
				// egret.Tween.get(dangqianScene._yunleft, {loop:true}).to({x:dangqianScene.stage.stageWidth},15000).wait(2000).set({x:stageWidth * -0.15});
			})
		}
		



		// let yun2:egret.Bitmap = GameUtil.createBitmapByName("yunlianpai0001_png");
		// this.addChild(yun2);
		// yun2.width = stageWidth*0.5;
		// yun2.height = yun2.width*0.098 *1.2; // 0.098
		// yun2.anchorOffsetX = yun2.width / 2;
		// yun2.anchorOffsetY = yun2.height / 2;
		// yun2.x = this.stage.stageWidth / 2;
		// yun2.y = this.stage.stageHeight * .35 + yun2.height;
		// let yun2y = yun2.y;
		// egret.Tween.get(yun2).to({x:this.stage.stageHeight}).call(()=>{
		// 	egret.Tween.get(yun2, {loop:true}).to({y:yun2y - yun2.height/2},1500).wait(500).to({y:yun2y +  yun2.height/2},3000).to({y:yun2y},1500);
		// });
        // this._yun2 = yun2;



		
		// 草地
		// // let caodi = this.createdonghua("caodi");
        let caodi = GameUtil.createBitmapByName("caodi054_png");
		// // caodi.anchorOffsetY = caodi.height/2;
		caodi.width = this.stage.stageWidth;
		caodi.anchorOffsetX = caodi.width/2;
		caodi.height = this.stage.stageHeight * .5;
		caodi.x = this.stage.stageWidth/2;
		caodi.y = this.stage.stageHeight * .5;
		this.addChild(caodi);

		// 花
		this._flowers = this.createdonghua("flowers");
		console.log(this._flowers);
		// this._flowers.anchorOffsetX = this._flowers.width / 2;
		// this._flowers.anchorOffsetY = this._flowers.height / 2;
		this._flowers.x = this.stage.stageWidth * .5;
		this._flowers.y = this.stage.stageHeight * .88;
		this._flowers.scaleX = this.stage.stageWidth / this._flowers.width * 1.1;
		this._flowers.scaleY = this.stage.stageHeight / this._flowers.height * .55;
		// console.log(this._flowers.scaleX ,this._flowers.scaleY );

		// 标题
		this._text = new egret.TextField;
		this._text.width = this.stage.stageWidth * .8;
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
			{text: "三、do、re、mi 的练习", style: {"size": 95, "textColor": 0xE23F2C}}
			, {text: "\n"}
			, {text: "\n"}
			, {text: "\n"}
			, {text: "\n"}
			, {text: "\n"}
			, {text: "\n"},
			// ,{text:"       我们来听听它们的声音会发生什么变化呢？", style: {"size": 55, "textColor": 0xDF6B73}},
            {text: "小朋友们帮", style: {"size": 65, "textColor": 0xFF9900}},
            {text: " do、re、mi ", style: {"size": 65, "textColor": 0xE23F2C}},
            {text: "三个小动物分别找到自己的家吧。", style: {"size": 65, "textColor": 0xFF9900}}
		];
		this.addChild( this._text );

		// var str: string = "<font color=#FFFFFF>哈哈哈哈</font>\n<font color='#ff0000'>嘿嘿嘿嘿</font>";
		// this._text =  new egret.TextField;
		// this._text.width = this.stage.stageWidth;
		// this._text.height = this.stage.stageHeight * .2;
		// this._text.textFlow = (new egret.HtmlTextParser).parser(str);
		// this.addChild(this._text);

	
		// 房子
		this._house = GameUtil.createBitmapByName("fangzi1_png"); 
		this._house.width = this.stage.stageWidth * 0.6;
		this._house.height = this._house.width * 0.327;
		this._house.x = (this.stage.stageWidth - this._house.width) / 2 + this.stage.stageWidth * 0.1;
		this._house.y = this.stage.stageHeight * .6;
		this.addChild(this._house);


		

		this._do = this.createdonghua("do");
		this._do.anchorOffsetX = this._do.width / 2;
		this._do.anchorOffsetY = this._do.height / 2;
		// this._do.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 1/3;
		this._do.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1/3;
		this._do.y = this.stage.stageHeight * .55;
		this._do.scaleX = 4 * 4/4;
		this._do.scaleY = 4 * 4/4;
		egret.Tween.get(this._do).to({x:this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 1/3 },1500).set({x:this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 1/3});

		this._re = this.createdonghua("re");
		this._re.anchorOffsetX = this._re.width / 2;
		this._re.anchorOffsetY = this._re.height / 2;
		// this._re.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 2/3;
		this._re.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2/3;
		this._re.y = this.stage.stageHeight * .55;
		this._re.scaleX = 4 * 4/4;
		this._re.scaleY = 4 * 4/4;
		egret.Tween.get(this._re).to({x:this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 2/3 },1500).set({x:this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 2/3});

		this._mi = this.createdonghua("mi");
		this._mi.anchorOffsetX = this._mi.width / 2;
		this._mi.anchorOffsetY = this._mi.height / 2;
		// this._mi.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 3/3;
		this._mi.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3/3;
		this._mi.y = this.stage.stageHeight * .55;
		this._mi.scaleX = 4 * 4/4;
		this._mi.scaleY = 4 * 4/4;
		egret.Tween.get(this._mi).to({x:this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 3/3 },1500).set({x:this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 3/3});

		// 箭头和手
		// this._jiantou = GameUtil.createBitmapByName("jiantou_png"); 
		this._shou = GameUtil.createBitmapByName("shou_png"); 
		this.addChild(this._shou);
		this._shou.width = this._do.width * 3;
		this._shou.height = this._shou.width;
		this._shou.anchorOffsetX = this._shou.width / 2;
		this._shou.anchorOffsetY = this._shou.height / 2;
		this._shou.y = this.stage.stageHeight * .55 + this._shou;
		this._shou.x = this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 1/3;

		

		this._btnleft = GameUtil.createBitmapByName("btnleft0001_png"); 
		this._btnleft.anchorOffsetX = this._btnleft.width / 2;
		this._btnleft.anchorOffsetY = this._btnleft.height / 2;
		this._btnleft.x = this.stage.stageWidth * .06;
		this._btnleft.y = this.stage.stageHeight * .80;
		this._btnleft.scaleX = this._btnleft.scaleY = this.stage.stageWidth / this._btnleft.width * .1;
		this.addChild(this._btnleft);

		this._btnright = GameUtil.createBitmapByName("btnright0001_png"); 
		this._btnright.anchorOffsetX = this._btnright.width / 2;
		this._btnright.anchorOffsetY = this._btnright.height / 2;
		this._btnright.x = this.stage.stageWidth * .94;
		this._btnright.y = this.stage.stageHeight * .80;
		this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
		this.addChild(this._btnright);

		this._bear = this.createdonghua("bearmove");
		this._bear.x = 0 - this._bear.width/2;
		this._bear.y = this.stage.stageHeight * .7;
		this._bear.scaleX = 4 * 5/4;
		this._bear.scaleY = 4 * 5/4;
		let dangqianstage = this.stage;
		egret.Tween.get( this._bear ).to( {x:this.stage.stageWidth * .2}, 1000 ).call(()=>{
			this.removeChild(this._bear);
			this._bear = this.createdonghua("bear");
			// console.log(this.stage);
			this._bear.x = dangqianstage.stageWidth * .2;
			this._bear.y = dangqianstage.stageHeight * .7;
			this._bear.scaleX = 2 * 5/4;
			this._bear.scaleY = 2 * 5/4;
			this.addChild(this._bear);
			// 走完后添加嘴巴
			this._zuiba = this.createdonghua("zuiba");
			this._zuiba.x = this._bear.x - this._zuiba.width * 3;
			this._zuiba.y = this._bear.y - this._zuiba.height * .8;
			this._zuiba.scaleX = this._zuiba.scaleY = 3;
		});

		// this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );


		// let bear = this.createdonghua("bear");
		// bear.x = this.stage.stageWidth / 3;
        // bear.y = this.stage.stageHeight * .8;
		// bear.scaleX = 2;
		// bear.scaleY = 2;

		// egret.startTick(this.onTicker, this);
		// 需要注意的是，startTick函数的参数，第一个参数即它的回调函数，要求有返回值，如果返回为true将在回调函数执行完成之后立即重绘，为false则不会重绘。另一个参数是this对象，通常传入this即可。

		// 拖拽实现
        this._do.touchEnabled = true;
        this._do.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this._do.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);

		this._re.touchEnabled = true;
        this._re.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this._re.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);

		this._mi.touchEnabled = true;
        this._mi.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this._mi.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);

	}
	

	// 拖拽实现
	private _touchStatus:boolean = false;       
    private _distance:egret.Point = new egret.Point();
	private _target;
	private mouseDown(evt:egret.TouchEvent)
    {
        console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - evt.target.x;
        this._distance.y = evt.stageY - evt.target.y;
		this._target = evt.target;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt:egret.TouchEvent)
    {
        if( this._touchStatus )
        {
            console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
            this._target.x = evt.stageX - this._distance.x;
            this._target.y = evt.stageY - this._distance.y;
        }
    }

    private mouseUp(evt:egret.TouchEvent)
    {
        console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }
	private onTimeUpdate(){
		if(this._soundchannel.position > 9){
		// console.log("zhen shua xin", this._soundchannel.position);
			this._soundchannel.stop();
			this._soundchannel = null;
			// if(this._zuiba.parent){ 
			// 	this.removeChild(this._zuiba);
			// }
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频
		}
	}
	
	private _tuichu(){
		egret.Tween.removeTweens(this._caihong);
		egret.Tween.removeTweens(this._yun2);
		egret.Tween.removeTweens(this._yunleft);
		egret.Tween.removeTweens(this._yunright);
		egret.Tween.removeTweens(this._do);
		egret.Tween.removeTweens(this._re);
		egret.Tween.removeTweens(this._mi);
		// egret.Tween.get(this._caihong).to({y:0+this.stage.stageHeight},1000)
		// egret.Tween.get(this._caihong).to({y:0},1000)
		console.log('舞台高度',this._caihong.height);
		// egret.Tween.get(this._do).to({x:this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1/3},1000)
		// egret.Tween.get(this._re).to({x:this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2/3},1000)
		// egret.Tween.get(this._mi).to({x:this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3/3},1000)
		// egret.Tween.get(this._caihong).to({y:this.stage.stageHeight+this._caihong.height},1000)
		// egret.Tween.get(this._yun2).to({y:this.stage.stageHeight+this._yun2.height},1000)
		// egret.Tween.get(this._yunleft).to({x:-this._yunleft.width},1000)
		// egret.Tween.get(this._yunright).to({x:this.stage.stageWidth+this._yunright.width},1000)
		// .call(()=>{
			// this.stage.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
			SceneController.jumpl(this);
		// })
	}
	

}