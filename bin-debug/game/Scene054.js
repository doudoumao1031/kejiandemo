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
var Scene054 = (function (_super) {
    __extends(Scene054, _super);
    function Scene054() {
        var _this = _super.call(this) || this;
        // 拖拽实现
        _this._touchStatus = false;
        _this._distance = new egret.Point();
        // this.addEventListener( egret.Event.ADDED_TO_STAGE,this.runGame,this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        console.log('scene054');
        return _this;
    }
    Scene054.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await this.loadResource()
                // await RES.loadGroup("lesson051");
                this.initView();
                return [2 /*return*/];
            });
        });
    };
    Scene054.prototype.initView = function () {
        var _this = this;
        var stageWidth = this.stage.stageWidth;
        // 音效
        var sound = RES.getRes("streamsound 0_mp3");
        this._soundchannel = sound.play(5, 1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onTimeUpdate, this); // 通过这个来监听音频 进入下一帧的回调
        // let bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");
        this._bg = new egret.Shape;
        this.addChild(this._bg = new egret.Shape());
        // var matrix:egret.Matrix = new egret.Matrix();
        // matrix.createGradientBox(this.width, this.height);
        var g = this._bg.graphics;
        // g.beginGradientFill(egret.GradientType.LINEAR, [0xff0000, 0x00ff00], [1, 1], [0, 1], matrix);
        g.beginFill(0xFFFFCC);
        g.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
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
        this._yunleft = GameUtil.createBitmapByName("yun_png"); //0.442
        this.addChild(this._yunleft);
        this._yunleft.width = stageWidth * .3;
        this._yunleft.height = stageWidth * .3 * 0.442;
        this._yunleft.x = -this._yunleft.width;
        this._yunleft.y = this.stage.stageHeight * .3;
        egret.Tween.get(this._yunleft).to({ x: stageWidth * -0.15 }, 1500).set({ x: this.stage.stageWidth * -0.15 }).call(function () {
            var yunX = _this._yunleft.x;
            egret.Tween.get(_this._yunleft, { loop: true }).to({ x: _this.stage.stageWidth }, 15000).wait(2000).set({ x: stageWidth * -0.15 });
        });
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
        var caodi = GameUtil.createBitmapByName("caodi054_png");
        // // caodi.anchorOffsetY = caodi.height/2;
        caodi.width = this.stage.stageWidth;
        caodi.anchorOffsetX = caodi.width / 2;
        caodi.height = this.stage.stageHeight * .5;
        caodi.x = this.stage.stageWidth / 2;
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
        this._text.textFlow = [
            { text: "三、do、re、mi 的练习", style: { "size": 95, "textColor": 0xE23F2C } },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            { text: "\n" },
            // ,{text:"       我们来听听它们的声音会发生什么变化呢？", style: {"size": 55, "textColor": 0xDF6B73}},
            { text: "小朋友们帮", style: { "size": 65, "textColor": 0xFF9900 } },
            { text: " do、re、mi ", style: { "size": 65, "textColor": 0xE23F2C } },
            { text: "三个小动物分别找到自己的家吧。", style: { "size": 65, "textColor": 0xFF9900 } }
        ];
        this.addChild(this._text);
        // var str: string = "<font color=#FFFFFF>哈哈哈哈</font>\n<font color='#ff0000'>嘿嘿嘿嘿</font>";
        // this._text =  new egret.TextField;
        // this._text.width = this.stage.stageWidth;
        // this._text.height = this.stage.stageHeight * .2;
        // this._text.textFlow = (new egret.HtmlTextParser).parser(str);
        // this.addChild(this._text);
        // 房子
        // this._house = GameUtil.createBitmapByName("fangzi1_png"); 
        // this._house.width = this.stage.stageWidth * 0.6;
        // this._house.height = this._house.width * 0.327;
        // this._house.x = (this.stage.stageWidth - this._house.width) / 2 + this.stage.stageWidth * 0.1;
        // this._house.y = this.stage.stageHeight * .6;
        // this.addChild(this._house);
        this._do = this.createdonghua("do");
        this._do.anchorOffsetX = this._do.width / 2;
        this._do.anchorOffsetY = this._do.height / 2;
        // this._do.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 1/3;
        this._do.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 1 / 3;
        this._do.y = this.stage.stageHeight * .55;
        this._do.scaleX = 4 * 4 / 4;
        this._do.scaleY = 4 * 4 / 4;
        egret.Tween.get(this._do).to({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 1 / 3 }, 1500).set({ x: this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 1 / 3 });
        this._re = this.createdonghua("re");
        this._re.anchorOffsetX = this._re.width / 2;
        this._re.anchorOffsetY = this._re.height / 2;
        // this._re.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 2/3;
        this._re.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 2 / 3;
        this._re.y = this.stage.stageHeight * .55;
        this._re.scaleX = 4 * 4 / 4;
        this._re.scaleY = 4 * 4 / 4;
        egret.Tween.get(this._re).to({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 2 / 3 }, 1500).set({ x: this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 2 / 3 });
        this._mi = this.createdonghua("mi");
        this._mi.anchorOffsetX = this._mi.width / 2;
        this._mi.anchorOffsetY = this._mi.height / 2;
        // this._mi.x = this.stage.stageWidth * .2 + this._bear.x +this._bear.width * 5 + this.stage.stageWidth * .5 * 3/3;
        this._mi.x = this.stage.stageWidth * .35 + this.stage.stageWidth * .5 * 3 / 3;
        this._mi.y = this.stage.stageHeight * .55;
        this._mi.scaleX = 4 * 4 / 4;
        this._mi.scaleY = 4 * 4 / 4;
        egret.Tween.get(this._mi).to({ x: this.stage.stageWidth * .25 + (this.stage.stageWidth * .5) * 3 / 3 }, 1500).set({ x: this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 3 / 3 });
        // 箭头和手
        // this._jiantou = GameUtil.createBitmapByName("jiantou_png"); 
        this._shou = GameUtil.createBitmapByName("shou_png");
        this.addChild(this._shou);
        this._shou.width = this._do.width * 3;
        this._shou.height = this._shou.width;
        this._shou.anchorOffsetX = this._shou.width / 2;
        this._shou.anchorOffsetY = this._shou.height / 2;
        this._shou.y = this.stage.stageHeight * .55 + this._shou;
        this._shou.x = this.stage.stageWidth * .30 + (this.stage.stageWidth * .5) * 1 / 3;
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
        this._girl = this.createdonghua("girl");
        this._girl.x = this.stage.stageWidth * .2;
        this._girl.y = this.stage.stageHeight * .7;
        this._girl.width = this.stage.stageWidth * .1;
        this._girl.height = 1.082 * this._girl.width;
        this.addChild(this._girl);
        this._yanggao = this.createdonghua("yanggao");
        this._yanggao.x = this.stage.stageWidth * .4;
        this._yanggao.y = this.stage.stageHeight * .7;
        this._yanggao.width = this.stage.stageWidth * .1;
        this._yanggao.height = 1.082 * this._girl.width;
        this.addChild(this._yanggao);
        // this._bear = this.createdonghua("bearmove");
        // this._bear.x = 0 - this._bear.width/2;
        // this._bear.y = this.stage.stageHeight * .7;
        // this._bear.scaleX = 4 * 5/4;
        // this._bear.scaleY = 4 * 5/4;
        // egret.Tween.get( this._bear ).to( {x:this.stage.stageWidth * .2}, 1000 ).call(()=>{
        // 	this.removeChild(this._bear);
        // 	this._bear = this.createdonghua("bear");
        // 	this._bear.x = this.stage.stageWidth * .2;
        // 	this._bear.y = this.stage.stageHeight * .7;
        // 	this._bear.scaleX = 2 * 5/4;
        // 	this._bear.scaleY = 2 * 5/4;
        // 	this.addChild(this._bear);
        // 	// 走完后添加嘴巴
        // 	this._zuiba = this.createdonghua("zuiba");
        // 	this._zuiba.x = this._bear.x - this._zuiba.width * 3;
        // 	this._zuiba.y = this._bear.y - this._zuiba.height * .8;
        // 	this._zuiba.scaleX = this._zuiba.scaleY = 3;
        // });
        // this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
        // let bear = this.createdonghua("bear");
        // bear.x = this.stage.stageWidth / 3;
        // bear.y = this.stage.stageHeight * .8;
        // bear.scaleX = 2;
        // bear.scaleY = 2;
        egret.startTick(this.onTicker, this);
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
    };
    Scene054.prototype.mouseDown = function (evt) {
        console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - evt.target.x;
        this._distance.y = evt.stageY - evt.target.y;
        this._target = evt.target;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Scene054.prototype.mouseMove = function (evt) {
        if (this._touchStatus) {
            console.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");
            this._target.x = evt.stageX - this._distance.x;
            this._target.y = evt.stageY - this._distance.y;
        }
    };
    Scene054.prototype.mouseUp = function (evt) {
        console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Scene054.prototype.onTimeUpdate = function () {
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
    Scene054.prototype._tuichu = function () {
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
            // this.stage.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
            SceneController.Scene051();
        });
    };
    return Scene054;
}(CommonScene));
__reflect(Scene054.prototype, "Scene054");
//# sourceMappingURL=Scene054.js.map