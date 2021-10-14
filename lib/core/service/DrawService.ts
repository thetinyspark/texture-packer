import { Canvas, createCanvas } from "canvas";
import { Atlas } from "../model/vo/Atlas";
import { Zone } from "../model/vo/Zone";
import IDrawService from "./IDrawService";

export default class DrawService implements IDrawService{
    drawAtlas(atlas: Atlas): Canvas {

        const scene = createCanvas(atlas.width, atlas.height); 
        const context = scene.getContext("2d");

        atlas.zones.forEach( 
            (currentZone:Zone)=>{
                context.drawImage(currentZone.img, currentZone.x, currentZone.y);
            }
        ); 

        return scene;
    }
}