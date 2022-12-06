import * as PIXI from 'pixi.js';
import { GameApplication } from './GameApplication';
import { Game } from './Game';
import { Reel }  from './Reel';
import { SpinButton } from './SpinButton';

export class ReelsFactory {
    public reels: Array<Reel>;
    public reelsContainer: PIXI.Container;
    private delayBetweenSpins: number;
    private spinButtonSprite: SpinButton;
    public reel: Reel

    constructor() {
        this.reels = [];
        this.reelsContainer = new PIXI.Container();

        for (let i = 0; i < 5; i++) {
            const reel = new Reel(i);
            this.reels.push(reel);
            this.reelsContainer.addChild(reel.reelContainer);
        }
        this.reelsContainer.x = 0;
    }
    
    
    
    public triggerAsyncSpin() {
         
            
        this.delayBetweenSpins = 0;
        let counter = 0;
        this.reels.forEach(reel => {
            setTimeout(() => {
                counter++;
                GameApplication.getApp().ticker.add(reel.oneLoop, reel);
                    
            }, this.delayBetweenSpins);
            counter++;
            this.delayBetweenSpins += 100;
                
        });
        this.stopAsyncSpin();

    }
    
    private stopAsyncSpin() {
           
        setTimeout(() => {

            this.reels.forEach(reel => {
                setTimeout(() => {
                    GameApplication.getApp().ticker.remove(reel.oneLoop, reel);

                }, this.delayBetweenSpins)
                this.delayBetweenSpins += 100;
            })
            this.checkPrice();
        }, 3000);
    }




   public checkPrice() {
        let winningLane = this.reels[2];
         
        if (winningLane.symbolSprites[0].texture === winningLane.symbolSprites[1].texture && winningLane.symbolSprites[0].texture === winningLane.symbolSprites[2].texture ||
            winningLane.symbolSprites[1].texture === winningLane.symbolSprites[2].texture && winningLane.symbolSprites[1].texture === winningLane.symbolSprites[3].texture ||
            winningLane.symbolSprites[2].texture === winningLane.symbolSprites[3].texture && winningLane.symbolSprites[2].texture === winningLane.symbolSprites[4].texture ||
            winningLane.symbolSprites[3].texture === winningLane.symbolSprites[4].texture && winningLane.symbolSprites[3].texture === winningLane.symbolSprites[2].texture)
        {
            Game.isWin = true;
            
            }

           
          
          
            // this.scoreboard.increment();
            // this.victoryScreen.show();
    }
}

