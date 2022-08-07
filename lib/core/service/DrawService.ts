import { Canvas, createCanvas } from "canvas";
import { Atlas } from "../model/vo/Atlas";
import { Zone } from "../model/vo/Zone";
import IDrawService from "./IDrawService";

export default class DrawService implements IDrawService{
    drawAtlas(atlas: Atlas, drawBorder:boolean = false): Canvas {

        const scene = createCanvas(atlas.width, atlas.height); 
        const context = scene.getContext("2d");

        atlas.zones.forEach( 
            (currentZone:Zone)=>{

                context.save();
                context.drawImage(
                    currentZone.img, 
                    currentZone.offsetX,
                    currentZone.offsetY,
                    currentZone.width,
                    currentZone.height,
                    currentZone.x, 
                    currentZone.y,
                    currentZone.width,
                    currentZone.height,
                );
                context.restore();

                if( drawBorder ){
                    const color = "red";

                    context.save();
    
                    context.strokeStyle = color; 
                    context.lineWidth = 2;
                    context.moveTo(currentZone.x, currentZone.y);
                    context.lineTo(currentZone.x + currentZone.width, currentZone.y);
                    context.lineTo(currentZone.x + currentZone.width, currentZone.y + currentZone.height);
                    context.lineTo(currentZone.x , currentZone.y + currentZone.height);
                    context.lineTo(currentZone.x , currentZone.y );
                    context.stroke();
    
                    context.restore();
                }
            }
        ); 

        return scene;
    }
}