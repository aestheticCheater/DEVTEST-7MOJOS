import * as PIXI from 'pixi.js';
import { GameApplication } from './GameApplication';

export class SlotsFrame extends PIXI.Sprite{
    slotsFrameSprite: PIXI.Sprite;
    private slotsFrameTexture: PIXI.Texture;

    constructor() {
        super();
        this.slotsFrameTexture = PIXI.Texture.from('./assets/image/SlotFrame.png');

        this.slotsFrameSprite = new PIXI.Sprite(this.slotsFrameTexture);
        this.slotsFrameSprite.anchor.set(0.5)
        this.slotsFrameSprite.position.set(GameApplication.STAGE_WIDTH * 0.5, GameApplication.STAGE_HEIGHT * 0.5)
        this.slotsFrameSprite.width = GameApplication.STAGE_WIDTH * 0.98;
        this.slotsFrameSprite.height = GameApplication.STAGE_HEIGHT * 0.50;
    }
}