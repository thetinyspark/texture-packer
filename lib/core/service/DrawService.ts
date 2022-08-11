import { Canvas, createCanvas, Image, loadImage, CanvasRenderingContext2D } from "canvas";
import { Atlas } from "../model/vo/Atlas";
import { Zone } from "../model/vo/Zone";
import IDrawService from "./IDrawService";

export default class DrawService implements IDrawService{

    private _pos:number         = 0;
    private _scene:Canvas       = null; 
    private _drawBorder:boolean = false;
    private _currentImg:Image   = null;
    private _currentZone:Zone   = null;
    private _currentAtlas:Atlas = null;
    private _resolver:Function  = null;


    private _drawImg(){
        const context = this._scene.getContext("2d");
        const img = this._currentImg;
        const zone = this._currentZone;
        context.save();
        context.drawImage(
            img, 
            zone.imgInfo.offsetX,
            zone.imgInfo.offsetY,
            zone.width,
            zone.height,
            zone.x, 
            zone.y,
            zone.width,
            zone.height,
        );
        context.restore();

        if( this._drawBorder ){
            const color = "red";

            context.save();

            context.strokeStyle = color; 
            context.lineWidth = 2;
            context.moveTo(zone.x, zone.y);
            context.lineTo(zone.x + zone.width, zone.y);
            context.lineTo(zone.x + zone.width, zone.y + zone.height);
            context.lineTo(zone.x , zone.y + zone.height);
            context.lineTo(zone.x , zone.y );
            context.stroke();

            context.restore();
        }
    }

    async _loadNext(){
        
        const atlas = this._currentAtlas;
        const resolve = this._resolver;
        if( this._pos < atlas.zones.length ){
            this._currentZone = atlas.zones[this._pos];
            try{
                const img = await loadImage(this._currentZone.imgInfo.src);
                this._currentImg = img;
                this._drawImg(); 
            }catch(error){
                console.log(error);
            }
            this._pos++;
            this._loadNext();
        }
        else{
            resolve(this._scene);
        }

    }

    drawAtlas(atlas: Atlas, drawBorder:boolean = false): Promise<Canvas> {
        this._scene         = createCanvas(atlas.width, atlas.height); 
        this._drawBorder    = drawBorder;
        this._currentAtlas  = atlas;
        this._pos           = 0;

        const promise   = new Promise( 
            (resolve)=>{
                this._resolver = resolve;
                this._loadNext();
            }
        ); 

        return promise as Promise<Canvas>;
    }
}