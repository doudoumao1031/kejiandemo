class SceneController {

	private _stage:egret.DisplayObjectContainer;

	// private createGameScene() {
    //     let container:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    //     this.addChild(container);
    //     SceneController.instance.setStage( container );
    //     SceneController.initGame();
    // }
	public activeScene:string;
	private startScene:StartScene;
	// private gameScene:GameScene;
	// private overScene:OverScene;
	private Scene051:Scene051;
	private Scene052:Scene052;
	private Scene053:Scene053;
	private Scene054:Scene054;
	public constructor() {
		// this.startScene = new StartScene();
		// this.Scene051 = new Scene051();
		// this.Scene052 = new Scene052();
		// this.Scene053 = new Scene053();
		// this.Scene054 = new Scene054();
		this.startScene = null;
		this.Scene051 = null;
		this.Scene052 = null;
		this.Scene053 = null;
		this.Scene054 = null;
	}
	static sceneController:SceneController; //类本身可以嵌套
	static get instance(){ // get 是TS的类获取方法？ SceneController.instance 应该是给instance的get方法 因为在TS中类需要先实例化
		if(!this.sceneController){
			this.sceneController = new SceneController();
		}
		return this.sceneController;
	}

	// Main类本身也继承这个类class Main extends egret.DisplayObjectContainer 
	public  setStage(s:egret.DisplayObjectContainer){
		this._stage = s;
	}

	/**
	 * 游戏初始化（进入开始游戏场景）
	 */
	// 这儿的逻辑是 .instance 下挂载各个场景
	// .instance._stage 下负责实际呈现
	// stage的场景似乎不用删除直接层级覆盖就行 是因为是单例可以直接加？
	static initGame(){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		// 如果已有一起场景这抹去 再初始化（还原）这场景
		// if( this.instance.gameScene.parent){          
		// 	stage.removeChild( this.instance.gameScene );
		// 	this.instance.gameScene = new GameScene();
		// }
		// if( this.instance.overScene.parent){
		// 	stage.removeChild(this.instance.overScene);
		// 	this.instance.overScene = new OverScene();
		// }
		// 加入开始场景
		this.instance.startScene = new StartScene();
		stage.addChild( this.instance.startScene );
		// stage.addChild( this.instance.Scene052 );
		// stage.addChild(this.instance.Scene054);
	}
	/**
	 * 游戏开始（进入游戏场景）
	 */
	// static startGameScene(){
	// 	let stage:egret.DisplayObjectContainer = this.instance._stage;

	// 	//移除原来的开始场景
	// 	if(this.instance.startScene.parent){
	// 		stage.removeChild( this.instance.startScene );
	// 		this.instance.startScene = new StartScene();
	// 	}
	// 	if(this.instance.gameScene.parent){
	// 		stage.removeChild( this.instance.gameScene );
	// 		this.instance.gameScene = new GameScene();
	// 	}
	// 	if(this.instance.overScene.parent){
	// 		stage.removeChild( this.instance.overScene );
	// 		this.instance.overScene = new OverScene();
	// 	}
	// 	// 游戏数据初始化
	// 	GameData.distance = 0;
	// 	GameData.barrierCount = 0;
	// 	GameData.eggCount = 0;
	// 	GameData.isAlive = true;
	// 	this.loadLevelData();
	// 	//障碍物的位置
	// 	GameData.elements = GameData.elements.concat();
	// 	// stage.addChild( this.instance.gameScene );
	// 	// stage.addChild(this.instance.Scene051);
	// 	// stage.addChild(this.instance.Scene054);
	// }

	/**
	 * 游戏开始 （开始游戏）
	 */
	// static startGame(){
	// 	//游戏开始了
	// 	GameData.hasStart = true;
	// 	this.instance.gameScene.startGame();
	// 	//定时器开始
	// 	this.instance.gameScene.startTicker();
	// }

	static loadLevelData(){
        let levelData = RES.getRes("config_json");
        GameData.elements = levelData.elements
		//按照比例计算
        GameData.speed = (levelData.properties.speed / 1920) * egret.MainContext.instance.stage.stageHeight;
        GameData.gravity = (levelData.properties.gravity / 1920) * egret.MainContext.instance.stage.stageHeight;
        GameData.jumpSpeed = (levelData.properties.jumpSpeed / 1920) * egret.MainContext.instance.stage.stageHeight;
        GameData.barrierWidth = levelData.properties.barrierWidth;
		GameData.maxMileage = levelData.properties.maxMileage;		
	} 

	/**
	 * 游戏结束
	 */

	// static GameEnd(){
	// 	GameData.hasStart = false;
	// 	this.instance.gameScene.stopTicker();
	// 	let stage = this.instance._stage;
	// 	stage.addChild( this.instance.overScene );
	// }

	static pauseGame(){
		if( GameData.ispause){
			egret.ticker.resume();
			GameData.ispause = false;
		}else{
			egret.ticker.pause();
			GameData.ispause = true;
		}
	}

	static Scene051(scene){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		if(scene.touchHandler){
			stage.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, scene.touchHandler, this );
		}
		//移除原来的开始场景
		if(this.instance.startScene&&this.instance.startScene.parent){
			stage.removeChild( this.instance.startScene );
			this.instance.startScene = null;
		}
		if(this.instance.Scene051&&this.instance.Scene051.parent){
			stage.removeChild(this.instance.Scene051);
			this.instance.Scene051 = null;
		}
		if(this.instance.Scene052&&this.instance.Scene052.parent){
			stage.removeChild(this.instance.Scene052);
			this.instance.Scene052 = null;
		}
		if(this.instance.Scene053&&this.instance.Scene053.parent){
			stage.removeChild(this.instance.Scene053);
			this.instance.Scene053 = null;
		}
		if(this.instance.Scene054&&this.instance.Scene054.parent){
			stage.removeChild(this.instance.Scene054);
			this.instance.Scene054 = null;
		}
		this.instance.Scene051 = new Scene051();
		stage.addChild( this.instance.Scene051 );
	}

	static Scene052(scene){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		if(scene.touchHandler){
			stage.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, scene.touchHandler, this );
		}
		//移除原来的开始场景
		if(this.instance.startScene&&this.instance.startScene.parent){
			stage.removeChild( this.instance.startScene );
			this.instance.startScene = null;
		}
		if(this.instance.Scene051&&this.instance.Scene051.parent){
			stage.removeChild(this.instance.Scene051);
			this.instance.Scene051 = null;
		}
		if(this.instance.Scene052&&this.instance.Scene052.parent){
			stage.removeChild(this.instance.Scene052);
			this.instance.Scene052 = null;
		}
		if(this.instance.Scene053&&this.instance.Scene053.parent){
			stage.removeChild(this.instance.Scene053);
			this.instance.Scene053 = null;
		}
		if(this.instance.Scene054&&this.instance.Scene054.parent){
			stage.removeChild(this.instance.Scene054);
			this.instance.Scene054 = null;
		}
		this.instance.Scene052 = new Scene052();
		stage.addChild( this.instance.Scene052 );
	}

	static Scene053(scene){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		if(scene.touchHandler){
			stage.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, scene.touchHandler, this );
		}
		//移除原来的开始场景
		if(this.instance.startScene&&this.instance.startScene.parent){
			stage.removeChild( this.instance.startScene );
			this.instance.startScene = null;
		}
		if(this.instance.Scene051&&this.instance.Scene051.parent){
			stage.removeChild(this.instance.Scene051);
			this.instance.Scene051 = null;
		}
		if(this.instance.Scene052&&this.instance.Scene052.parent){
			stage.removeChild(this.instance.Scene052);
			this.instance.Scene052 = null;
		}
		if(this.instance.Scene053&&this.instance.Scene053.parent){
			stage.removeChild(this.instance.Scene053);
			this.instance.Scene053 = null;
		}
		if(this.instance.Scene054&&this.instance.Scene054.parent){
			stage.removeChild(this.instance.Scene054);
			this.instance.Scene054 = null;
		}
		this.instance.Scene053 = new Scene053();
		stage.addChild( this.instance.Scene053 );
	}

	static Scene054(scene){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		if(scene.touchHandler){
			stage.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, scene.touchHandler, this );
		}
		//移除原来的开始场景
		if(this.instance.startScene&&this.instance.startScene.parent){
			stage.removeChild( this.instance.startScene );
			this.instance.startScene = null;
		}
		if(this.instance.Scene051&&this.instance.Scene051.parent){
			stage.removeChild(this.instance.Scene051);
			this.instance.Scene051 = null;
		}
		if(this.instance.Scene052&&this.instance.Scene052.parent){
			stage.removeChild(this.instance.Scene052);
			this.instance.Scene052 = null;
		}
		if(this.instance.Scene053&&this.instance.Scene053.parent){
			stage.removeChild(this.instance.Scene053);
			this.instance.Scene053 = null;
		}
		if(this.instance.Scene054&&this.instance.Scene054.parent){
			stage.removeChild(this.instance.Scene054);
			this.instance.Scene054 = null;
		}
		this.instance.Scene054 = new Scene054();
		stage.addChild( this.instance.Scene054 );
	}

	// 公共的跳转方法
	static jumpr(scene){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		let activeScene:string  = this.instance.activeScene;
		setTimeout(()=>{
			switch(activeScene){
				case '050':
				SceneController.Scene051(scene);
				break;
				case '051':
				SceneController.Scene052(scene);
				break;
				case '052':
				SceneController.Scene053(scene);
				break;
				case '053':
				SceneController.Scene054(scene);
				break;
				case '054':
				break;
				default:;
			}

		},400);
		// if(this.instance.startScene&&this.instance.startScene.parent){
		// 	var bol = this.instance.startScene&&this.instance.startScene.parent;
		// 	console.log('jumpr starts',this.instance.startScene,this.instance.startScene.parent);
		// 	SceneController.Scene051(scene);
		// }
		// if(this.instance.Scene051&&this.instance.Scene051.parent){
		// 	// var bol1 = this.instance.Scene051&&this.instance.Scene051.parent;
		// 	// console.log('jumpr 051', bol1);
		// 	console.log('jumpr 051',this.instance.Scene051,this.instance.Scene051.parent);
		// 	SceneController.Scene052(scene);
		// }
		// if(this.instance.Scene052&&this.instance.Scene052.parent){
		// 	SceneController.Scene053(scene);
		// }
		// if(this.instance.Scene053&&this.instance.Scene053.parent){
		// 	SceneController.Scene054(scene);
		// }
		// if(this.instance.Scene054&&this.instance.Scene054.parent){
		// 	return;
		// }
	}
	static jumpl(scene){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		let activeScene:string  = this.instance.activeScene;
		switch(activeScene){
			case '050':
			break;
			case '051':
			// SceneController.Scene052(scene);
			break;
			case '052':
			SceneController.Scene051(scene);
			break;
			case '053':
			SceneController.Scene052(scene);
			break;
			case '054':
			SceneController.Scene053(scene);
			break;
			default:;
		}
		// if(this.instance.startScene&&this.instance.startScene.parent){
		// 	// SceneController.Scene051(scene);
		// 	return
		// }
		// if(this.instance.Scene051&&this.instance.Scene051.parent){
		// 	// SceneController.Scene052(scene);
		// 	return
		// }
		// if(this.instance.Scene052&&this.instance.Scene052.parent){
		// 	SceneController.Scene051(scene);
		// }
		// if(this.instance.Scene053&&this.instance.Scene053.parent){
		// 	SceneController.Scene052(scene);
		// }
		// if(this.instance.Scene054&&this.instance.Scene054.parent){
		// 	SceneController.Scene053(scene);
		// }
	}
	static refresh(num){
		this.instance.activeScene = num;
	}

}