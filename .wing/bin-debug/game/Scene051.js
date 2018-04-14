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
var Scene051 = (function (_super) {
    __extends(Scene051, _super);
    function Scene051() {
        var _this = _super.call(this) || this;
        // this.addEventListener( egret.Event.ADDED_TO_STAGE,this.runGame,this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        console.log('scene051');
        SceneController.refresh("051");
        return _this;
    }
    Scene051.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await this.loadResource()
                // await RES.loadGroup("lesson051");
                this.initView();
                return [2 /*return*/];
            });
        });
    };
    Scene051.prototype.initView = function () {
        var _this = this;
        var currentscene = this;
        // 音效
        var sound = RES.getRes("streamsound 0_mp3");
        this._soundchannel = sound.play(5, 1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频 进入下一帧的回调
        // let bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");
        var bg = GameUtil.createBitmapByName("sky_png");
        var yun = GameUtil.createBitmapByName("yun_png");
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
        egret.Tween.get(this._yun2, { loop: true }).to({ y: this.stage.stageHeight * .45 }, 1500).wait(500).to({ y: this.stage.stageHeight * .5 }, 1500);
        // let caodi = this.createdonghua("caodi");
        var caodi = GameUtil.createBitmapByName("cao051_png");
        caodi.anchorOffsetX = caodi.width / 2;
        // caodi.anchorOffsetY = caodi.height/2;
        caodi.x = this.stage.stageWidth / 2;
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
            { text: "一、do、re、mi 的学习", style: { "size": 115, "textColor": 0x305C1D } },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "快乐的小熊 dodo 和它的好朋友兔子 rere 和小猫 mimi。", style: { "size": 75, "textColor": 0x305C1D } }
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
        this.addChild(this._text);
        // var str: string = "<font color=#FFFFFF>哈哈哈哈</font>\n<font color='#ff0000'>嘿嘿嘿嘿</font>";
        // this._text =  new egret.TextField;
        // this._text.width = this.stage.stageWidth;
        // this._text.height = this.stage.stageHeight * .2;
        // this._text.textFlow = (new egret.HtmlTextParser).parser(str);
        // this.addChild(this._text);
        // 乐谱
        this._yuepu = GameUtil.createBitmapByName("yinjie1_png");
        this.addChild(this._yuepu);
        this._yuepu.anchorOffsetX = this._yuepu.width / 2;
        this._yuepu.anchorOffsetY = this._yuepu.height / 2;
        this._yuepu.x = this.stage.stageWidth / 2;
        this._yuepu.y = this.stage.$stageHeight * .35;
        this._yuepu.scaleX = this._yuepu.scaleY = this.stage.stageWidth / this._yuepu.width * .5;
        caodi.y = this.stage.stageHeight * .5;
        caodi.scaleX = this.stage.stageWidth / caodi.width * 1.1;
        caodi.scaleY = this.stage.stageHeight / caodi.height * 1;
        this._caodi = caodi;
        this.addChild(caodi);
        this._bear = this.createdonghua("bearmove");
        this._bear.x = 0 - this._bear.width / 2;
        this._bear.y = this.stage.stageHeight * .8;
        this._bear.scaleX = 4 * 6 / 4;
        this._bear.scaleY = 4 * 6 / 4;
        egret.Tween.get(this._bear).to({ x: this.stage.stageWidth * .2 }, 1000).call(function () {
            _this.removeChild(_this._bear);
            _this._bear = _this.createdonghua("bear");
            _this._bear.x = _this.stage.stageWidth * .2;
            _this._bear.y = _this.stage.stageHeight * .8;
            _this._bear.scaleX = 2 * 6 / 4;
            _this._bear.scaleY = 2 * 6 / 4;
            _this.addChild(_this._bear);
            // 走完后添加嘴巴
            _this._zuiba = _this.createdonghua("zuiba");
            _this._zuiba.x = _this._bear.x - _this._zuiba.width * 3;
            _this._zuiba.y = _this._bear.y - _this._zuiba.height * .8;
            _this._zuiba.scaleX = _this._zuiba.scaleY = 3;
        });
        this._do = this.createdonghua("do");
        this._do.anchorOffsetX = this._do.width / 2;
        this._do.anchorOffsetY = this._do.height / 2;
        // this._do.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 1/3;
        this._do.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1 / 3;
        this._do.y = this.stage.stageHeight * .85;
        this._do.scaleX = 4 * 3 / 4;
        this._do.scaleY = 4 * 3 / 4;
        this._re = this.createdonghua("re");
        this._re.anchorOffsetX = this._re.width / 2;
        this._re.anchorOffsetY = this._re.height / 2;
        this._re.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2 / 3;
        this._re.y = this.stage.stageHeight * .85;
        this._re.scaleX = 4 * 3 / 4;
        this._re.scaleY = 4 * 3 / 4;
        this._mi = this.createdonghua("mi");
        this._mi.anchorOffsetX = this._mi.width / 2;
        this._mi.anchorOffsetY = this._mi.height / 2;
        this._mi.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3 / 3;
        this._mi.y = this.stage.stageHeight * .85;
        this._mi.scaleX = 4 * 3 / 4;
        this._mi.scaleY = 4 * 3 / 4;
        this._flowers = this.createdonghua("flowers");
        console.log(this._flowers);
        // this._flowers.anchorOffsetX = this._flowers.width / 2;
        // this._flowers.anchorOffsetY = this._flowers.height / 2;
        this._flowers.x = this.stage.stageWidth * .5;
        this._flowers.y = this.stage.stageHeight * .85;
        this._flowers.scaleX = this.stage.stageWidth / this._flowers.width * 1.1;
        this._flowers.scaleY = this.stage.stageHeight / this._flowers.height * .55;
        // console.log(this._flowers.scaleX ,this._flowers.scaleY );
        var button = GameUtil.createBitmapByName("btn0001_png");
        this.addChild(button);
        button.anchorOffsetX = button.width / 2;
        button.anchorOffsetY = button.height / 2;
        button.x = this.stage.stageWidth * .9;
        button.y = this.stage.stageHeight * .8;
        button.touchEnabled = true;
        button.scaleX = button.scaleY = this.stage.stageWidth / button.width * .1;
        button.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log('move chufa');
        }, this);
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log('touch begin');
        }, this);
        // button.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        // 	console.log("btn tap chuf");
        // },this);
        // this._btnright = GameUtil.createBitmapByName("btn0001_png"); 
        // // this._btnright = this.createdonghua("buttonright");
        // this._btnright.x = this.stage.stageWidth * .9;
        // this._btnright.y = this.stage.stageHeight * .8;
        // this._btnright.scaleX = this._btnright.scaleY = this.stage.stageWidth / this._btnright.width * .1;
        // this.addChild(this._btnright);
        // this._btnright.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        // 	console.log("btn tap chuf");
        // },this);
        // this._btnright.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
        // 	console.log("btn begin chuf");
        // },this);
        // this._btnright.addEventListener(egret.TouchEvent.TOUCH_MOVE,()=>{
        // 	console.log('btn move chufa');
        // 	currentscene._btnright.scaleX = currentscene._btnright.scaleY = currentscene.stage.stageWidth / currentscene._btnright.width * .15;
        // 	currentscene._btnright.rotation += 5;
        // },this);
        // this._btnright.addEventListener(egret.TouchEvent.TOUCH_END,()=>{
        // 	console.log('btn end chufa');
        // 	currentscene._btnright.scaleX = currentscene._btnright.scaleY = currentscene.stage.stageWidth / currentscene._btnright.width * .1;
        // 	// this._btnright.rotation += 5;
        // },this);
        // this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
        // let bear = this.createdonghua("bear");
        // bear.x = this.stage.stageWidth / 3;
        // bear.y = this.stage.stageHeight * .8;
        // bear.scaleX = 2;
        // bear.scaleY = 2;
        // egret.startTick(this.onTicker, this);
        // 需要注意的是，startTick函数的参数，第一个参数即它的回调函数，要求有返回值，如果返回为true将在回调函数执行完成之后立即重绘，为false则不会重绘。另一个参数是this对象，通常传入this即可。
    };
    Scene051.prototype.onTimeUpdate = function () {
        if (this._soundchannel.position > 9) {
            // console.log("zhen shua xin", this._soundchannel.position);
            this._soundchannel.stop();
            this._soundchannel = null;
            if (this._zuiba.parent) {
                this.removeChild(this._zuiba);
            }
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频
        }
    };
    Scene051.prototype.touchHandler = function (evt) {
        this.checkCollision(evt.stageX, evt.stageY);
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
    };
    Scene051.prototype.checkCollision = function (stageX, stageY) {
        var Scene = this;
        if (this._btnright.hitTestPoint(stageX, stageY)) {
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
            this._do = this.createdonghua("do1");
            this._do.anchorOffsetX = this._do.width * .45;
            this._do.anchorOffsetY = this._do.height / 2;
            this._do.x = x;
            this._do.y = y;
            this._do.scaleX = 4 * 3 / 4;
            this._do.scaleY = 4 * 3 / 4;
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
            this._do.scaleX = 4 * 3 / 4;
            this._do.scaleY = 4 * 3 / 4;
            this.addChild(this._do);
        }
        if (reResult && this._re.parent) {
            var x = this._re.x;
            var y = this._re.y;
            this.removeChild(this._re);
            this._re = this.createdonghua("re1");
            this._re.anchorOffsetX = this._re.width * .40;
            this._re.anchorOffsetY = this._re.height / 2;
            this._re.x = x;
            this._re.y = y;
            this._re.scaleX = 4 * 3 / 4;
            this._re.scaleY = 4 * 3 / 4;
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
            this._re.scaleX = 4 * 3 / 4;
            this._re.scaleY = 4 * 3 / 4;
            this.addChild(this._re);
        }
        if (miResult && this._mi.parent) {
            var x = this._mi.x;
            var y = this._mi.y;
            this.removeChild(this._mi);
            this._mi = this.createdonghua("mi1");
            this._mi.anchorOffsetX = this._mi.width * .2;
            this._mi.anchorOffsetY = this._mi.height * 0.64;
            this._mi.x = x;
            this._mi.y = y;
            this._mi.scaleX = 4 * 3 / 4;
            this._mi.scaleY = 4 * 3 / 4;
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
            this._mi.scaleX = 4 * 3 / 4;
            this._mi.scaleY = 4 * 3 / 4;
            this.addChild(this._mi);
        }
        //     /// 小圆点同步手指位置
        // this._dot.x = stageX;
        // this._dot.y = stageY;
        /// 文字信息更新
        // this.updateInfo( bResult ? TouchCollideStatus.COLLIDED : TouchCollideStatus.TOUCHED_NO_COLLIDED );
    };
    return Scene051;
}(CommonScene));
__reflect(Scene051.prototype, "Scene051");
//# sourceMappingURL=Scene051.js.map