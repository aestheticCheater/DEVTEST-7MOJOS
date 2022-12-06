import * as PIXI from 'pixi.js';
import { GameApplication } from './GameApplication';

export class Reel {
    public reelContainer: PIXI.Container;
    public symbolTextures: Array<PIXI.Texture>;
    public symbolSprites: Array<PIXI.Sprite>;

    constructor(positionOfSymbols: number) {
        this.symbolSprites = [];
        this.reelContainer = new PIXI.Container();
        this.symbolTextures = [
            PIXI.Texture.from('./assets/image/Symbol_1.png'),
            PIXI.Texture.from('./assets/image/Symbol_2.png'),
            PIXI.Texture.from('./assets/image/Symbol_3.png'),
            PIXI.Texture.from('./assets/image/Symbol_4.png'),
            PIXI.Texture.from('./assets/image/Symbol_5.png'),
            PIXI.Texture.from('./assets/image/Symbol_6.png'),
            PIXI.Texture.from('./assets/image/Symbol_7.png'),
            PIXI.Texture.from('./assets/image/Symbol_8.png')
        ];
        this.reelFactory(positionOfSymbols);
    }

    private reelFactory(positionOfSymbols: number) {
        const OFFSETTOP: number = 5;
        const REEL_WIDTH:number = ((GameApplication.STAGE_WIDTH / 2) / 5);
        const REEL_HEIGHT:number = GameApplication.STAGE_HEIGHT / 2 + OFFSETTOP ;
        const CELLS:number = 3;
        const XCELLSOFFSET: number = 0;
        this.reelContainer.x = positionOfSymbols * REEL_WIDTH * XCELLSOFFSET;
       
        
        for (let i = 0; i < CELLS + 1; i++) {
            const symbolPosition = new PIXI.Sprite(this.symbolTextures[Math.floor(Math.random() * this.symbolTextures.length)]);
            symbolPosition.height = (REEL_HEIGHT / 3)  ;
            symbolPosition.width = REEL_WIDTH + 60;
            symbolPosition.x = positionOfSymbols * symbolPosition.width;
            symbolPosition.y = i * symbolPosition.height + (REEL_HEIGHT / 2) - symbolPosition.height ; 
            this.symbolSprites.push(symbolPosition);
            this.reelContainer.addChild(symbolPosition);
        }
    }


   public pushSymbols(x: number, y: number, symbol2: PIXI.DisplayObject, yVelocity: number) {
        const symbol = new PIXI.Sprite(this.symbolTextures[Math.floor(Math.random() * this.symbolTextures.length)]);
        symbol.height = 100
        symbol.width = 120
        symbol.x = x;
        this.symbolSprites.pop();
        this.symbolSprites.splice(0, 0, symbol);
        this.reelContainer.addChildAt(symbol, 0);
        symbol.y += yVelocity;
    }


        addBlurring(symbol:PIXI.DisplayObject) {
        const blur = new PIXI.filters.BlurFilter(4,2);
        symbol.filters = [blur]
    }

   
    public oneLoop() {
        this.checkOutOfBound();
        
    }

    
    private checkOutOfBound() {
        let outOfBound: boolean = false;
        let yVelocity: number = 5;
        
       
        for (let i = this.symbolSprites.length - 1; i >= 0; i--) {
            let symbol = this.symbolSprites[i];
            if (symbol.y + yVelocity > GameApplication.STAGE_HEIGHT - (this.symbolSprites[i].height * 1.5) - 27) {
                symbol.y = this.symbolSprites[i].y;
                outOfBound = true;
                symbol.y = 10;
                
            }
            
            else {
                // this.addBlurring(symbol);
                symbol.y += yVelocity;
            }
            
            if (outOfBound && i == this.symbolSprites.length - 1) {
                
                this.reelContainer.removeChildAt(i);

                this.pushSymbols(symbol.x, symbol.y, symbol, yVelocity); 

                GameApplication.getApp().ticker.remove(this.checkOutOfBound, this);
                }
            }
        }
    }
    
    

    
  
    




