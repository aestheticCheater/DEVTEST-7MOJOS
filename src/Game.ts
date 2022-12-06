import * as PIXI from 'pixi.js'; 
import { GameApplication } from './GameApplication';
import { SlotsFrame } from './SlotsFrame';
import { SpinButton } from './SpinButton';
import { PlayerBalanceView } from './PlayerBalanceView';
import { ReelsFactory } from './ReelsFactory';
import { Model } from './Model';
import { WinNotification }  from './WinNotification';
export class Game extends PIXI.Container {
    public static isWin: Boolean = false;

    public gameObjectContainer: PIXI.Container;
    private slotsBackgroundSprite: SlotsFrame;
    private spinButtonSprite: SpinButton;
    private reelsFactory: ReelsFactory;
    private playerBalance: PlayerBalanceView
    private winNotification: WinNotification;
    
    constructor() {
        super();
        this.init();

    }
    
    private init() {
        this.createGameObjContainer();
        this.createGameContent();
        this.createUIContent();
        this.setInteractiveCallbacks();
    }
    
    
    
    private createGameObjContainer() {
        this.gameObjectContainer = new PIXI.Container();
        this.gameObjectContainer.interactive = true;
        this.gameObjectContainer.buttonMode = true;
        this.addChild(this.gameObjectContainer);
    }
    
    private createGameContent() {
        this.createCasinoFrame();
        this.createReels();
    }
    
    private createUIContent() {
        this.createBorderCover();
        this.createPlayerWallet();
        this.createSpinButton();
        this.createWinNotification();
    }

    private createWinNotification() {
        this.winNotification = new WinNotification();
        this.addChild(this.winNotification.sprite);
    }
    
    
    public showWinNotification() {
        this.winNotification.show();
    }
    public hideWinNotification() {
        this.winNotification.hide();
    }
    
    private createCasinoFrame() {
        this.slotsBackgroundSprite = new SlotsFrame()
        this.gameObjectContainer.addChild(this.slotsBackgroundSprite.slotsFrameSprite);
    }
    
    private createSpinButton() {
        this.spinButtonSprite = new SpinButton()
        this.spinButtonSprite.spinButtonSprite.interactive = true;
        this.spinButtonSprite.spinButtonSprite.buttonMode = true;
        this.addChild(this.spinButtonSprite.spinButtonSprite);
        
    }

    private createReels() {
        this.reelsFactory = new ReelsFactory();
        this.gameObjectContainer.addChild(this.reelsFactory.reelsContainer);
    }

    private createPlayerWallet() {
        this.playerBalance = new PlayerBalanceView();
        this.addChild(this.playerBalance.playerBalanceContainer);

    }
    
    
    private setInteractiveCallbacks() {
        this.spinButtonSprite.spinButtonSprite.on('click', this.startGame.bind(this))
        
    }
    
    private createBorderCover() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(0x000000)
        gfx.drawRect(0, 0, 100, 155);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
    
        const topCover: PIXI.Sprite = new PIXI.Sprite(texture);
        topCover.y = (GameApplication.STAGE_HEIGHT / 2) - GameApplication.STAGE_HEIGHT / 3  - 100;
        topCover.width = GameApplication.STAGE_WIDTH;
        const bottomCover: PIXI.Sprite = new PIXI.Sprite(texture);

        bottomCover.width = GameApplication.STAGE_WIDTH;
        bottomCover.y = (GameApplication.STAGE_HEIGHT / 2) + GameApplication.STAGE_HEIGHT / 3 - 55;

        
        
        this.addChild(topCover);
        this.addChild(bottomCover);
    }
    private resetGame() {
        Model.getInstance().resetGame();
        this.playerBalance.setCredits(Model.getInstance().getCredits());
        this.playerBalance.setBet(5);
        this.playerBalance.setWinAmount(0);
        this.startGame();
    }
     
    public checkForWin() {
            
            if (Game.isWin) {
                this.spinButtonSprite.activeState();
                this.winNotification.show();
                this.playerBalance.setWinAmount(Model.getInstance().getWinningAmount());
                setTimeout(() => {
                    this.winNotification.hide();
                    this.spinButtonSprite.normalState();
                },3000)
                Model.getInstance().incrementCredits();
                this.playerBalance.setCredits(Model.getInstance().getCredits())
                Game.isWin = false;
         } 
            else if (!Game.isWin) {
             //    Model.getInstance().decrementCredits();
                Model.getInstance().decrement();
                this.playerBalance.setCredits(Model.getInstance().getCredits());
            } 
    }

    
        
    buttonGameModes() {
        setTimeout(() => {
            this.spinButtonSprite.normalState();
        },4000)
        this.spinButtonSprite.activeState()
    }
    
    private startGame() {
        if (Model.getInstance().outOfCredits) {
            this.resetGame();
        }
        this.buttonGameModes();
        this.reelsFactory.triggerAsyncSpin();
        this.checkForWin();
    }
    
   
}



