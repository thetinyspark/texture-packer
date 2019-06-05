import * as fs from "fs";
import {createCanvas, Canvas} from "canvas";
import { Atlas } from "../packer/Atlas";
import { Zone } from "../packer/Zone";

export class Drawer{
    constructor(){}

    public draw(atlases:Atlas[], outputDir:string = "."):void{
        let i:number = 0;

        for( ; i < atlases.length; i++ ){
            fs.writeFileSync(
                outputDir + "/atlas_"+i+".png", 
                this.drawAtlas(atlases[i]).toBuffer()
            )
        }
    }

    private drawAtlas( atlas:Atlas ):Canvas{
        let canvas = createCanvas(atlas.width, atlas.height);
        let ctx = canvas.getContext("2d");
        let zone:Zone = null;
        let i:number = 0;

        ctx.save();

        for( ; i < atlas.zones.length; i++ ){
            zone = atlas.zones[i];

            if( zone.img !== null ){
                ctx.drawImage(zone.img, zone.x, zone.y, zone.width, zone.height );
            }
        }

        ctx.restore();


        return canvas;
    }
}