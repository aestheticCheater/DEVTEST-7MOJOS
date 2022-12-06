import * as PIXI from "pixi.js";

import { GameApplication } from './GameApplication';
export class WinNotification extends PIXI.Container {
  public sprite: PIXI.Sprite;
  

  constructor() {
    super();
    this.init();
    this.sprite.visible = false;
    this.sprite.alpha = 0;

  }
  private init() {
    this.createSprite();
  }
  private createSprite() {
        
    const gfx: PIXI.Graphics = new PIXI.Graphics();
    gfx.lineStyle({ width: 2, color: 0xffff00 });
    gfx.beginFill(0x000000);
    gfx.drawRect(0, 0, 400, 120);
    gfx.endFill();
       
    
    const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.x = GameApplication.STAGE_WIDTH / 2 - this.sprite.width / 2;
    this.sprite.y = GameApplication.STAGE_HEIGHT * 0.79;
     
    let winText: PIXI.Text = new PIXI.Text("You Win!", {
      "align": "center",
      "dropShadow": true,
      "dropShadowBlur": 6,
      "dropShadowColor": "#480f40",
      "fill": "#ffea00",
      "fontFamily": "Tahoma",
      "fontSize": 31,
      "fontWeight": "800",
      "letterSpacing": 4,
      "lineJoin": "bevel",
      "stroke": "#9f148c",
      "strokeThickness": 4,
      "wordWrapWidth": 0
    })
    winText.resolution = 3;
    winText.width = 400;
    winText.height = 75;
     
    winText.x = this.sprite.width * 0.60 - winText.width / 2;
    winText.y = this.sprite.height / 2 - winText.height / 2;
    this.sprite.addChild(winText);
  }

  public hide() {
    this.sprite.visible = false;
    this.sprite.alpha = 0;

  }
    
  public show() {
    this.sprite.visible = true;
    this.sprite.alpha = 1;
  }
}

