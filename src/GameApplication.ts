/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import * as PIXI from 'pixi.js';
import { Game } from './Game';


export class GameApplication extends PIXI.Application {
    private game: Game;
    

    public static STAGE_WIDTH: number = 600;
    public static STAGE_HEIGHT: number = 600;
    private static app: GameApplication;

    constructor() {
        super(GameApplication.getAppOptions());
        this.loader = new PIXI.Loader();
        // this.loadAssets();
        // this.loader.load(() => {
        //    this.doneLoading()
        // });
        this.init();
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {


        GameApplication.app = this;
        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);
            
            this.resizeCanvas();
            this.createGame();
            
            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        };
    }
    private createGame() {
        this.game = new Game();
        this.stage.addChild(this.game)
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0x000000,
            width: GameApplication.STAGE_WIDTH,
            height: GameApplication.STAGE_HEIGHT,
        };
    }

    private resizeCanvas(): void {
        this.onResize();
        this.onResize = this.onResize.bind(this);

        window.addEventListener('resize', this.onResize);
    }

    private onResize() {
        this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
    }
    
    // private loadAssets() {
    //     this.loader.add('buttonNormal', './assets/image/SpinButton_Normal.png');
    //     this.loader.add('buttonActive', './assets/image/SpinButton_Active.png');
    //     this.loader.add('background', './assets/image/SlotFrame.png');
    //     this.loader.add('symbol1', `./assets/image/Symbol_1.png`)
    //     this.loader.add('symbol2', `./assets/image/Symbol_2.png`)
    //     this.loader.add('symbol3', `./assets/image/Symbol_3.png`)
    //     this.loader.add('symbol4', `./assets/image/Symbol_4.png`)
    //     this.loader.add('symbol5', `./assets/image/Symbol_5.png`)
    //     this.loader.add('symbol6', `./assets/image/Symbol_6.png`)
    //     this.loader.add('symbol7', `./assets/image/Symbol_7.png`)
    //     this.loader.add('symbol8', `./assets/image/Symbol_8.png`)
    // }


    // public  doneLoading() {}
}

   