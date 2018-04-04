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
var CommonScene = (function (_super) {
    __extends(CommonScene, _super);
    function CommonScene() {
        return _super.call(this) || this;
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
    CommonScene.prototype.createdonghua = function (name) {
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
        return armatureDisplay; // 暴露给外部配置
    };
    CommonScene.prototype.onTicker = function (timeStamp) {
        if (!this._time) {
            this._time = timeStamp;
        }
        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;
        dragonBones.WorldClock.clock.advanceTime(pass / 1000);
        return false; // 这儿不会触发重绘制 只是让动画运动
    };
    return CommonScene;
}(egret.DisplayObjectContainer));
__reflect(CommonScene.prototype, "CommonScene");
//# sourceMappingURL=CommonScene.js.map