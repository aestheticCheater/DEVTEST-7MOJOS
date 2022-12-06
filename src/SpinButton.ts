import * as PIXI from "pixi.js";
import { GameApplication } from './GameApplication';

export class SpinButton {
  public spinButtonSprite: PIXI.Sprite;
  private spinButtonNormalTexture: PIXI.Texture;
  private spinButtonActivatedTexture: PIXI.Texture;

  constructor() {
    
    this.spinButtonNormalTexture = PIXI.Texture.from('./assets/image/SpinButton_Normal.png');
    this.spinButtonActivatedTexture = PIXI.Texture.from('./assets/image/SpinButton_Active.png');
    this.spinButtonSprite = new PIXI.Sprite(this.spinButtonNormalTexture);
    this.spinButtonSprite.interactive = true;
    this.init();
  }

  
    activeState() {
      this.spinButtonSprite.texture = this.spinButtonActivatedTexture;
      this.spinButtonSprite.interactive = false;
    }
    normalState() {
      
      this.spinButtonSprite.texture = this.spinButtonNormalTexture;
      this.spinButtonSprite.interactive = true;
    }
  
  private init() {
    this.spinButtonSprite.anchor.set(0.5);
    this.spinButtonSprite.width = GameApplication.STAGE_WIDTH * 0.12;
    this.spinButtonSprite.height = GameApplication.STAGE_HEIGHT * 0.12;
    this.spinButtonSprite.position.set(GameApplication.STAGE_WIDTH - this.spinButtonSprite.width / 2, GameApplication.STAGE_HEIGHT - this.spinButtonSprite.height / 2)
  }

}