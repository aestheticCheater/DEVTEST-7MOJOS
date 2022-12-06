import * as PIXI from 'pixi.js';
import { GameApplication } from './GameApplication';

export class PlayerBalanceView {
    public playerBalanceContainer: PIXI.Container;
    public outOfMoney = false;
        private creditsText: PIXI.Text;
        private betText: PIXI.Text;
    private winText: PIXI.Text;
    
    constructor() {
        this.init();
   
        }
    
    
    private init() {
        this.createBackGround();
        this.createText();

        }
    
    

    private createBackGround() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.lineStyle({ width: 2, color: 0xffff00 });
        gfx.beginFill(0x000000);
        gfx.drawRoundedRect(0, 0, 170, 100, 12);
        gfx.endFill();
        let texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        this.playerBalanceContainer = new PIXI.Sprite(texture);
        this.playerBalanceContainer.y = GameApplication.STAGE_HEIGHT * 0.0010 
        this.playerBalanceContainer.x = GameApplication.STAGE_WIDTH / 2 - this.playerBalanceContainer.width /2 
    }
    
    private createText() {
        this.createCreditsLabel();
        this.createBetLabel();
        this.createWinLabel();
        this.createCreditsText();
        this.createBetText();
        this.createWinText();
    
    }
    public setWinAmount(score: number) {
        this.winText.text = score.toString(10).padStart(3, '0');
        return this.winText;
    }

    public setCredits(score:number) {
        this.creditsText.text = score.toString(10).padStart(1, '0');
        return this.creditsText
    }
  
    public setBet(score:number) {
        this.betText.text = score.toString(10).padStart(3, '0');
    }
    
    private createCreditsLabel() {
        const creditsLabel = new PIXI.Text("Credits: ", {
            "fontSize":22,
            "dropShadow": true,
            "dropShadowBlur": -2,
            "dropShadowColor": "#480f40",
            "fill": "#ffea00",
            "fontFamily": "Impact, Charcoal, sans-serif",
            "fontWeight": "bold",
            "letterSpacing": 3,
            "lineJoin": "bevel",
            "stroke": "#9f148c",
            "strokeThickness": 3
        })

        creditsLabel.resolution = 2;
        creditsLabel.anchor.set(0.5);
        creditsLabel.x = GameApplication.STAGE_WIDTH * 0.10;
        creditsLabel.y = GameApplication.STAGE_HEIGHT * 0.03;

        this.playerBalanceContainer.addChild(creditsLabel);
       
    }

    private createBetLabel() {
        const betLabel =  new PIXI.Text("Bet: ", {
            "fontSize":22,
            "dropShadow": true,
            "dropShadowBlur": -2,
            "dropShadowColor": "#480f40",
            "fill": "#ffea00",
            "fontFamily": "Impact, Charcoal, sans-serif",
            "fontWeight": "bold",
            "letterSpacing": 3,
            "lineJoin": "bevel",
            "stroke": "#9f148c",
            "strokeThickness": 3
        })
        betLabel.resolution = 2;
        betLabel.anchor.set(0.5);
        betLabel.x = GameApplication.STAGE_WIDTH * 0.06;
        betLabel.y = GameApplication.STAGE_HEIGHT * 0.08;
        this.playerBalanceContainer.addChild(betLabel)
    }

    private createWinLabel() {
            const winLabel =  new PIXI.Text("Win: ", {
                "fontSize":22,
                "dropShadow": true,
                "dropShadowBlur": -2,
                "dropShadowColor": "#480f40",
                "fill": "#ffea00",
                "fontFamily": "Impact, Charcoal, sans-serif",
                "fontWeight": "bold",
                "letterSpacing": 3,
                "lineJoin": "bevel",
                "stroke": "#9f148c",
                "strokeThickness": 3
            })
        winLabel.resolution = 2;
        winLabel.anchor.set(0.5);
        winLabel.x = GameApplication.STAGE_WIDTH * 0.065;
        winLabel.y = GameApplication.STAGE_HEIGHT * 0.14;
        this.playerBalanceContainer.addChild(winLabel)
    }

    private createCreditsText() {
        this.creditsText = new PIXI.Text("100", {
            "fontSize": 22,
            "dropShadow": true,
            "dropShadowBlur": -2,
            "dropShadowColor": "#480f40",
            "fill": "#ffea00",
            "fontFamily": "Impact, Charcoal, sans-serif",
            "fontWeight": "bold",
            "letterSpacing": 3,
            "lineJoin": "bevel",
            "stroke": "#9f148c",
            "strokeThickness": 3
        })
        this.creditsText.resolution = 2;
        this.creditsText.anchor.set(0.5);
        this.creditsText.x = GameApplication.STAGE_WIDTH * 0.25;
        this.creditsText.y = GameApplication.STAGE_HEIGHT * 0.03;
        this.playerBalanceContainer.addChild(this.creditsText)
    }

    private createBetText() {
           this.betText = new PIXI.Text("005", {
            "fontSize": 22,
            "dropShadow": true,
            "dropShadowBlur": -2,
            "dropShadowColor": "#480f40",
            "fill": "#ffea00",
            "fontFamily": "Impact, Charcoal, sans-serif",
            "fontWeight": "bold",
            "letterSpacing": 3,
            "lineJoin": "bevel",
            "stroke": "#9f148c",
            "strokeThickness": 3
        })

        this.betText.resolution = 2;
        this.betText.anchor.set(0.5);
        this.betText.x = GameApplication.STAGE_WIDTH * 0.25;
        this.betText.y = GameApplication.STAGE_HEIGHT * 0.08;
        this.playerBalanceContainer.addChild(this.betText)
    }

    private createWinText() {
           this.winText = new PIXI.Text("000", {
            "fontSize": 22,
            "dropShadow": true,
            "dropShadowBlur": -2,
            "dropShadowColor": "#480f40",
            "fill": "#ffea00",
            "fontFamily": "Impact, Charcoal, sans-serif",
            "fontWeight": "bold",
            "letterSpacing": 3,
            "lineJoin": "bevel",
            "stroke": "#9f148c",
            "strokeThickness": 3
        })

        this.winText.resolution = 2;
        this.winText.anchor.set(0.5);
        this.winText.x = GameApplication.STAGE_WIDTH * 0.25;
        this.winText.y = GameApplication.STAGE_HEIGHT * 0.14;
        this.playerBalanceContainer.addChild(this.winText)
    }


  
    }
    