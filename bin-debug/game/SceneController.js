var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneController = (function () {
    function SceneController() {
        this.startScene = new StartScene();
        this.gameScene = new GameScene();
        this.overScene = new OverScene();
        //自己加的场景
        this.Scene051 = new Scene051();
        this.Scene052 = new Scene052();
    }
    Object.defineProperty(SceneController, "instance", {
        get: function () {
            if (!this.sceneController) {
                this.sceneController = new SceneController();
            }
            return this.sceneController;
        },
        enumerable: true,
        configurable: true
    });
    // Main类本身也继承这个类class Main extends egret.DisplayObjectContainer 
    SceneController.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
     * 游戏初始化（进入开始游戏场景）
     */
    // 这儿的逻辑是 .instance 下挂载各个场景
    // .instance._stage 下负责实际呈现
    // stage的场景似乎不用删除直接层级覆盖就行 是因为是单例可以直接加？
    SceneController.initGame = function () {
        var stage = this.instance._stage;
        // 如果已有一起场景这抹去 再初始化（还原）这场景
        if (this.instance.gameScene.parent) {
            stage.removeChild(this.instance.gameScene);
            this.instance.gameScene = new GameScene();
        }
        if (this.instance.overScene.parent) {
            stage.removeChild(this.instance.overScene);
            this.instance.overScene = new OverScene();
        }
        //加入开始场景
        // stage.addChild( this.instance.startScene );
        // stage.addChild( this.instance.Scene051 );
        stage.addChild(this.instance.Scene052);
    };
    /**
     * 游戏开始（进入游戏场景）
     */
    SceneController.startGameScene = function () {
        var stage = this.instance._stage;
        //移除原来的开始场景
        if (this.instance.startScene.parent) {
            stage.removeChild(this.instance.startScene);
            this.instance.startScene = new StartScene();
        }
        if (this.instance.gameScene.parent) {
            stage.removeChild(this.instance.gameScene);
            this.instance.gameScene = new GameScene();
        }
        if (this.instance.overScene.parent) {
            stage.removeChild(this.instance.overScene);
            this.instance.overScene = new OverScene();
        }
        // 游戏数据初始化
        GameData.distance = 0;
        GameData.barrierCount = 0;
        GameData.eggCount = 0;
        GameData.isAlive = true;
        this.loadLevelData();
        //障碍物的位置
        GameData.elements = GameData.elements.concat();
        // stage.addChild( this.instance.gameScene );
        // stage.addChild(this.instance.Scene051);
        stage.addChild(this.instance.Scene052);
    };
    /**
     * 游戏开始 （开始游戏）
     */
    SceneController.startGame = function () {
        //游戏开始了
        GameData.hasStart = true;
        this.instance.gameScene.startGame();
        //定时器开始
        this.instance.gameScene.startTicker();
    };
    SceneController.loadLevelData = function () {
        var levelData = RES.getRes("config_json");
        GameData.elements = levelData.elements;
        //按照比例计算
        GameData.speed = (levelData.properties.speed / 1920) * egret.MainContext.instance.stage.stageHeight;
        GameData.gravity = (levelData.properties.gravity / 1920) * egret.MainContext.instance.stage.stageHeight;
        GameData.jumpSpeed = (levelData.properties.jumpSpeed / 1920) * egret.MainContext.instance.stage.stageHeight;
        GameData.barrierWidth = levelData.properties.barrierWidth;
        GameData.maxMileage = levelData.properties.maxMileage;
    };
    /**
     * 游戏结束
     */
    SceneController.GameEnd = function () {
        GameData.hasStart = false;
        this.instance.gameScene.stopTicker();
        var stage = this.instance._stage;
        stage.addChild(this.instance.overScene);
    };
    SceneController.pauseGame = function () {
        if (GameData.ispause) {
            egret.ticker.resume();
            GameData.ispause = false;
        }
        else {
            egret.ticker.pause();
            GameData.ispause = true;
        }
    };
    SceneController.Scene051 = function () {
        var stage = this.instance._stage;
        //移除原来的开始场景
        if (this.instance.startScene.parent) {
            stage.removeChild(this.instance.startScene);
            // this.instance.startScene = new StartScene();
        }
        if (this.instance.gameScene.parent) {
            stage.removeChild(this.instance.gameScene);
            // this.instance.gameScene = new GameScene();
        }
        if (this.instance.overScene.parent) {
            stage.removeChild(this.instance.overScene);
            // this.instance.overScene = new OverScene();
        }
        if (this.instance.Scene051.parent) {
            stage.removeChild(this.instance.Scene051);
        }
        if (this.instance.Scene052.parent) {
            stage.removeChild(this.instance.Scene052);
        }
        stage.addChild(this.instance.Scene051);
    };
    SceneController.Scene052 = function () {
        var stage = this.instance._stage;
        //移除原来的开始场景
        if (this.instance.startScene.parent) {
            stage.removeChild(this.instance.startScene);
            // this.instance.startScene = new StartScene();
        }
        if (this.instance.gameScene.parent) {
            stage.removeChild(this.instance.gameScene);
            // this.instance.gameScene = new GameScene();
        }
        if (this.instance.overScene.parent) {
            stage.removeChild(this.instance.overScene);
            // this.instance.overScene = new OverScene();
        }
        if (this.instance.Scene051.parent) {
            stage.removeChild(this.instance.Scene051);
        }
        if (this.instance.Scene052.parent) {
            stage.removeChild(this.instance.Scene052);
        }
        stage.addChild(this.instance.Scene052);
    };
    return SceneController;
}());
__reflect(SceneController.prototype, "SceneController");
//# sourceMappingURL=SceneController.js.map