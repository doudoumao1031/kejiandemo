var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// class StartScene extends egret.DisplayObjectContainer{
var Scene052 = (function (_super) {
    __extends(Scene052, _super);
    function Scene052() {
        var _this = _super.call(this) || this;
        // this.addEventListener( egret.Event.ADDED_TO_STAGE,this.runGame,this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        console.log('scene051');
        return _this;
    }
    Scene052.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await this.loadResource()
                // await RES.loadGroup("lesson051");
                this.initView();
                return [2 /*return*/];
            });
        });
    };
    Scene052.prototype.initView = function () {
        var _this = this;
        var stageWidth = this.stage.stageWidth;
        // 音效
        var sound = RES.getRes("streamsound 0_mp3");
        this._soundchannel = sound.play(5, 1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频 进入下一帧的回调
        // let bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");
        this._bg = new egret.Shape;
        this.addChild(this._bg = new egret.Shape());
        var matrix = new egret.Matrix();
        matrix.createGradientBox(this.width, this.height);
        var g = this._bg.graphics;
        // g.beginGradientFill(egret.GradientType.LINEAR, [0xff0000, 0x00ff00], [1, 1], [0, 1], matrix);
        g.beginFill(0xEFD3DA);
        g.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        g.endFill();
        this._bg = GameUtil.createBitmapByName("bg053_png");
        this.addChild(this._bg);
        this._bg.width = this.stage.stageWidth;
        this._bg.height = this.stage.stageHeight;
        this._yunright = GameUtil.createBitmapByName("yun_png");
        this.addChild(this._yunright);
        this._yunright;
        this._yunright.width = stageWidth * .45;
        this._yunright.height = stageWidth * .45 * .442;
        this._yunright.x = this.stage.stageWidth + this._yunright.width / 2;
        this._yunright.y = this.stage.stageHeight * .05;
        egret.Tween.get(this._yunright).to({ x: this.stage.stageWidth * .6 }, 1500).set({ x: this.stage.stageWidth * .6 }).call(function () {
            var yunY = _this._yunright.y;
            egret.Tween.get(_this._yunright, { loop: true }).to({ y: yunY + _this._yunright.height / 4 }, 1500).wait(500).to({ y: yunY - _this._yunright.height / 4 * 1 }, 3000).to({ y: yunY }, 1500);
        });
        this._yunleft = GameUtil.createBitmapByName("yun_png"); //0.442
        this.addChild(this._yunleft);
        this._yunleft.width = stageWidth * .3;
        this._yunleft.height = stageWidth * .3 * 0.442;
        this._yunleft.x = -this._yunleft.width;
        this._yunleft.y = this.stage.stageHeight * .35;
        egret.Tween.get(this._yunleft).to({ x: stageWidth * -0.15 }, 1500).set({ x: this.stage.stageWidth * -0.15 }).call(function () {
            var yunX = _this._yunleft.x;
            egret.Tween.get(_this._yunleft, { loop: true }).to({ x: yunX + _this._yunright.width / 4 }, 3000).wait(200).to({ x: yunX - _this._yunright.width / 4 * 1 }, 6000).to({ x: yunX }, 3000);
        });
        this._caihong = GameUtil.createBitmapByName("caihong1_png");
        this.addChild(this._caihong);
        this._caihong.width = this.stage.stageWidth;
        this._caihong.height = this.stage.stageWidth * .388; //高宽比 .388
        this._caihong.anchorOffsetX = this._caihong.width / 2;
        this._caihong.anchorOffsetY = this._caihong.height / 2;
        this._caihong.x = this.stage.stageWidth / 2;
        this._caihong.y = this.stage.stageHeight * .95;
        this._caihong.fillMode = egret.BitmapFillMode.SCALE;
        egret.Tween.get(this._caihong).to({ y: this.stage.stageHeight * .95 }, 1500).wait(500).to({ y: this.stage.stageHeight * 1 }, 3000).to({ y: this.stage.stageHeight * .95 }, 1500).set({ y: this.stage.stageHeight * .95 }).call(function () {
            egret.Tween.removeTweens(_this._caihong);
            egret.Tween.get(_this._caihong, { loop: true }).to({ y: _this.stage.stageHeight * .9 }, 1500).wait(500).to({ y: _this.stage.stageHeight * 1 }, 3000).to({ y: _this.stage.stageHeight * .95 }, 1500);
        });
        var yun2 = GameUtil.createBitmapByName("yunlianpai0001_png");
        this.addChild(yun2);
        yun2.width = stageWidth * 1.5;
        yun2.height = stageWidth * 1.5 * 0.098 * 1.2; // 0.098
        yun2.anchorOffsetX = yun2.width / 2;
        yun2.anchorOffsetY = yun2.height / 2;
        yun2.x = this.stage.stageWidth / 2;
        yun2.y = this.stage.stageHeight * 1 + yun2.height / 2;
        // yun2.scaleX = this.stage.stageWidth / yun2.width * 1.5; 0.442
        // yun2.scaleY = this.stage.stageHeight / yun2.height * .30;
        egret.Tween.get(yun2).to({ x: this.stage.stageHeight }).call(function () {
            egret.Tween.get(yun2, { loop: true }).to({ y: _this.stage.stageHeight * .9 }, 1500).wait(500).to({ y: _this.stage.stageHeight * 1.1 }, 3000).to({ y: _this.stage.stageHeight * 1 }, 1500);
        });
        this._yun2 = yun2;
        // yun.height = this.stage.stageHeight;
        // // let caodi = this.createdonghua("caodi");
        // let caodi = GameUtil.createBitmapByName("cao051_png");
        // caodi.anchorOffsetX = caodi.width/2;
        // // caodi.anchorOffsetY = caodi.height/2;
        // caodi.x = this.stage.stageWidth/2;
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
        this._text.textFlow = [
            { text: "二、do、re、mi 的变化", style: { "size": 95, "textColor": 0xCC00FF } },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "       我们来听听它们的声音会发生什么变化呢？", style: { "size": 55, "textColor": 0xDF6B73 } }
            // ,
            // {text: "小朋友们帮do、re、mi三个小动物分别找到自己的家吧。", style: {"size": 95, "textColor": 0xFF9900}}
        ];
        this.addChild(this._text);
        // var str: string = "<font color=#FFFFFF>哈哈哈哈</font>\n<font color='#ff0000'>嘿嘿嘿嘿</font>";
        // this._text =  new egret.TextField;
        // this._text.width = this.stage.stageWidth;
        // this._text.height = this.stage.stageHeight * .2;
        // this._text.textFlow = (new egret.HtmlTextParser).parser(str);
        // this.addChild(this._text);
        // 乐谱
        this._yuepu_left = GameUtil.createBitmapByName("yuepu1_png");
        this.addChild(this._yuepu_left);
        this._yuepu_left.anchorOffsetX = this._yuepu_left.width / 2;
        this._yuepu_left.anchorOffsetY = this._yuepu_left.height / 2;
        this._yuepu_left.x = this.stage.stageWidth / 2 - this.stage.stageWidth * .25;
        this._yuepu_left.y = this.stage.$stageHeight * .35;
        this._yuepu_left.scaleX = this._yuepu_left.scaleY = this.stage.stageWidth / this._yuepu_left.width * .18;
        this._yuepu_mid = GameUtil.createBitmapByName("yuepu2_png");
        this.addChild(this._yuepu_mid);
        this._yuepu_mid.anchorOffsetX = this._yuepu_mid.width / 2;
        this._yuepu_mid.anchorOffsetY = this._yuepu_mid.height / 2;
        this._yuepu_mid.x = this.stage.stageWidth / 2;
        this._yuepu_mid.y = this.stage.$stageHeight * .35;
        this._yuepu_mid.scaleX = this._yuepu_mid.scaleY = this.stage.stageWidth / this._yuepu_mid.width * .18;
        this._yuepu_right = GameUtil.createBitmapByName("yuepu3_png");
        this.addChild(this._yuepu_right);
        this._yuepu_right.anchorOffsetX = this._yuepu_right.width / 2;
        this._yuepu_right.anchorOffsetY = this._yuepu_right.height / 2;
        this._yuepu_right.x = this.stage.stageWidth / 2 + this.stage.stageWidth * .25;
        this._yuepu_right.y = this.stage.$stageHeight * .35;
        this._yuepu_right.scaleX = this._yuepu_right.scaleY = this.stage.stageWidth / this._yuepu_right.width * .18;
        // this._bear = this.createdonghua("bearmove");
        // this._bear.x = 0 - this._bear.width/2;
        // this._bear.y = this.stage.stageHeight * .8;
        // this._bear.scaleX = 4 * 5/4;
        // this._bear.scaleY = 4 * 5/4;
        // egret.Tween.get( this._bear ).to( {x:this.stage.stageWidth * .2}, 1000 ).call(()=>{
        // 	this.removeChild(this._bear);
        // 	this._bear = this.createdonghua("bear");
        // 	this._bear.x = this.stage.stageWidth * .2;
        // 	this._bear.y = this.stage.stageHeight * .8;
        // 	this._bear.scaleX = 2 * 5/4;
        // 	this._bear.scaleY = 2 * 5/4;
        // 	this.addChild(this._bear);
        // 	// 走完后添加嘴巴
        // 	this._zuiba = this.createdonghua("zuiba");
        // 	this._zuiba.x = this._bear.x - this._zuiba.width * 3;
        // 	this._zuiba.y = this._bear.y - this._zuiba.height * .8;
        // 	this._zuiba.scaleX = this._zuiba.scaleY = 3;
        // });
        this._do = this.createdonghua("do");
        this._do.anchorOffsetX = this._do.width / 2;
        this._do.anchorOffsetY = this._do.height / 2;
        // this._do.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 1/3;
        this._do.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1 / 3;
        this._do.y = this.stage.stageHeight * .85;
        this._do.scaleX = 4 * 5 / 4;
        this._do.scaleY = 4 * 5 / 4;
        egret.Tween.get(this._do).to({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 1 / 3 }, 1500).set({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 1 / 3 });
        this._re = this.createdonghua("re");
        this._re.anchorOffsetX = this._re.width / 2;
        this._re.anchorOffsetY = this._re.height / 2;
        // this._re.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 2/3;
        this._re.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2 / 3;
        this._re.y = this.stage.stageHeight * .85;
        this._re.scaleX = 4 * 5 / 4;
        this._re.scaleY = 4 * 5 / 4;
        egret.Tween.get(this._re).to({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 2 / 3 }, 1500).set({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 2 / 3 });
        this._mi = this.createdonghua("mi");
        this._mi.anchorOffsetX = this._mi.width / 2;
        this._mi.anchorOffsetY = this._mi.height / 2;
        // this._mi.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 3/3;
        this._mi.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3 / 3;
        this._mi.y = this.stage.stageHeight * .85;
        this._mi.scaleX = 4 * 5 / 4;
        this._mi.scaleY = 4 * 5 / 4;
        egret.Tween.get(this._mi).to({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 3 / 3 }, 1500).set({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 3 / 3 });
        // this._flowers = this.createdonghua("flowers");
        // console.log(this._flowers);
        // this._flowers.anchorOffsetX = this._flowers.width / 2;
        // this._flowers.anchorOffsetY = this._flowers.height / 2;
        // this._flowers.x = this.stage.stageWidth * .5;
        // this._flowers.y = this.stage.stageHeight * .88;
        // this._flowers.scaleX = this.stage.stageWidth / this._flowers.width * 1.1;
        // this._flowers.scaleY = this.stage.stageHeight / this._flowers.height * .55;
        // console.log(this._flowers.scaleX ,this._flowers.scaleY );
        this._btnleft = GameUtil.createBitmapByName("btnleft0001_png");
        this._btnleft.anchorOffsetX = this._btnleft.width / 2;
        this._btnleft.anchorOffsetY = this._btnleft.height / 2;
        this._btnleft.x = this.stage.stageWidth * .1;
        this._btnleft.y = this.stage.stageHeight * .75;
        this._btnleft.scaleX = this._btnleft.scaleY = this.stage.stageWidth / this._btnleft.width * .1;
        this.addChild(this._btnleft);
        this._btnright = GameUtil.createBitmapByName("btnright0001_png");
        this._btnright.anchorOffsetX = this._btnright.width / 2;
        this._btnright.anchorOffsetY = this._btnright.height / 2;
        this._btnright.x = this.stage.stageWidth * .9;
        this._btnright.y = this.stage.stageHeight * .75;
        this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
        this.addChild(this._btnright);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
        // let bear = this.createdonghua("bear");
        // bear.x = this.stage.stageWidth / 3;
        // bear.y = this.stage.stageHeight * .8;
        // bear.scaleX = 2;
        // bear.scaleY = 2;
        egret.startTick(this.onTicker, this);
        // 需要注意的是，startTick函数的参数，第一个参数即它的回调函数，要求有返回值，如果返回为true将在回调函数执行完成之后立即重绘，为false则不会重绘。另一个参数是this对象，通常传入this即可。
    };
    Scene052.prototype.onTimeUpdate = function () {
        if (this._soundchannel.position > 9) {
            // console.log("zhen shua xin", this._soundchannel.position);
            this._soundchannel.stop();
            this._soundchannel = null;
            // if(this._zuiba.parent){ 
            // 	this.removeChild(this._zuiba);
            // }
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频
        }
    };
    Scene052.prototype.touchHandler = function (evt) {
        this.checkCollision(evt.stageX, evt.stageY);
        // switch ( evt.type ){
        //     case egret.TouchEvent.TOUCH_MOVE:
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
        //         this.stage.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this );
        //         this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
        //         // if( this._dot.parent ){
        //         //     this._dot.parent.removeChild( this._dot );
        //         // }
        //         // this.updateInfo( TouchCollideStatus.NO_TOUCHED );
        //         break;
        // }
    };
    Scene052.prototype._tuichu = function () {
        var _this = this;
        egret.Tween.removeTweens(this._caihong);
        egret.Tween.removeTweens(this._yun2);
        egret.Tween.removeTweens(this._yunleft);
        egret.Tween.removeTweens(this._yunright);
        egret.Tween.removeTweens(this._do);
        egret.Tween.removeTweens(this._re);
        egret.Tween.removeTweens(this._mi);
        // egret.Tween.get(this._caihong).to({y:0+this.stage.stageHeight},1000)
        // egret.Tween.get(this._caihong).to({y:0},1000)
        console.log('舞台高度', this._caihong.height);
        egret.Tween.get(this._do).to({ x: this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1 / 3 }, 1000);
        egret.Tween.get(this._re).to({ x: this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2 / 3 }, 1000);
        egret.Tween.get(this._mi).to({ x: this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3 / 3 }, 1000);
        egret.Tween.get(this._caihong).to({ y: this.stage.stageHeight + this._caihong.height }, 1000);
        egret.Tween.get(this._yun2).to({ y: this.stage.stageHeight + this._yun2.height }, 1000);
        egret.Tween.get(this._yunleft).to({ x: -this._yunleft.width }, 1000);
        egret.Tween.get(this._yunright).to({ x: this.stage.stageWidth + this._yunright.width }, 1000)
            .call(function () {
            _this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.touchHandler, _this);
            SceneController.Scene051();
        });
    };
    Scene052.prototype.checkCollision = function (stageX, stageY) {
        if (this._btnleft.hitTestPoint(stageX, stageY)) {
            // SceneController.Scene051();
            this._tuichu();
        }
        /*** 本示例关键代码段开始 ***/
        var doResult = this._do.hitTestPoint(stageX, stageY);
        var reResult = this._re.hitTestPoint(stageX, stageY);
        var miResult = this._mi.hitTestPoint(stageX, stageY);
        /*** 本示例关键代码段结束 ***/
        // console.log('碰撞测试',doResult);
        // console.log(this); // 输出是Scene051实例
        if (doResult && this._do.parent) {
            var x = this._do.x;
            var y = this._do.y;
            this.removeChild(this._do);
            this._do = this.createdonghua("do_hover");
            this._do.anchorOffsetX = this._do.width * .45;
            this._do.anchorOffsetY = this._do.height / 2;
            this._do.x = x;
            this._do.y = y;
            this._do.scaleX = 4 * 5 / 4;
            this._do.scaleY = 4 * 5 / 4;
            this.addChild(this._do);
        }
        else {
            var x = this._do.x;
            var y = this._do.y;
            this.removeChild(this._do);
            this._do = this.createdonghua("do");
            this._do.anchorOffsetX = this._do.width / 2;
            this._do.anchorOffsetY = this._do.height / 2;
            this._do.x = x;
            this._do.y = y;
            this._do.scaleX = 4 * 5 / 4;
            this._do.scaleY = 4 * 5 / 4;
            this.addChild(this._do);
        }
        if (reResult && this._re.parent) {
            var x = this._re.x;
            var y = this._re.y;
            this.removeChild(this._re);
            this._re = this.createdonghua("re_hover");
            this._re.anchorOffsetX = this._re.width * .38;
            this._re.anchorOffsetY = this._re.height / 2;
            this._re.x = x;
            this._re.y = y;
            this._re.scaleX = 4 * 5 / 4;
            this._re.scaleY = 4 * 5 / 4;
            this.addChild(this._re);
        }
        else {
            var x = this._re.x;
            var y = this._re.y;
            this.removeChild(this._re);
            this._re = this.createdonghua("re");
            this._re.anchorOffsetX = this._re.width * .5;
            this._re.anchorOffsetY = this._re.height / 2;
            this._re.x = x;
            this._re.y = y;
            this._re.scaleX = 4 * 5 / 4;
            this._re.scaleY = 4 * 5 / 4;
            this.addChild(this._re);
        }
        if (miResult && this._mi.parent) {
            var x = this._mi.x;
            var y = this._mi.y;
            this.removeChild(this._mi);
            this._mi = this.createdonghua("mi_hover");
            this._mi.anchorOffsetX = this._mi.width * .2;
            this._mi.anchorOffsetY = this._mi.height / 2;
            this._mi.x = x;
            this._mi.y = y;
            this._mi.scaleX = 4 * 5 / 4;
            this._mi.scaleY = 4 * 5 / 4;
            this.addChild(this._mi);
        }
        else {
            var x = this._mi.x;
            var y = this._mi.y;
            this.removeChild(this._mi);
            this._mi = this.createdonghua("mi");
            this._mi.anchorOffsetX = this._mi.width / 2;
            this._mi.anchorOffsetY = this._mi.height / 2;
            this._mi.x = x;
            this._mi.y = y;
            this._mi.scaleX = 4 * 5 / 4;
            this._mi.scaleY = 4 * 5 / 4;
            this.addChild(this._mi);
        }
        //     /// 小圆点同步手指位置
        // this._dot.x = stageX;
        // this._dot.y = stageY;
        /// 文字信息更新
        // this.updateInfo( bResult ? TouchCollideStatus.COLLIDED : TouchCollideStatus.TOUCHED_NO_COLLIDED );
    };
    return Scene052;
}(CommonScene));
__reflect(Scene052.prototype, "Scene052");
//# sourceMappingURL=Scene052.js.map