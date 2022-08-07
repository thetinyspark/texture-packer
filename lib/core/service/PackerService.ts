import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Image } from "canvas/types";
import { Atlas } from "../model/vo/Atlas";
import { Zone } from "../model/vo/Zone";
import CanvasUtils from "../utils/CanvasUtils";
import detectEdges from "../utils/detectEdges";
import IPackerService from "./IPackerService";

export class PackerService implements IPackerService {


    constructor() { }

    private sortImagesByAreaAsc(a: Image, b: Image): number {
        let area1: number = a.width * a.height;
        let area2: number = b.width * b.height;
        return (area1 > area2) ? -1 : 1;
    }

    public pack(images: Image[], width: number = 0, height: number = 0, optimize:boolean = false): Atlas[] {

        let results: Atlas[]    = [];
        let currentZone: Zone   = null;
        let currentImg: Image   = null;
        let currentAtlas: Atlas = null;
        let bounds:Rectangle    = null;
        const originals         = images;
        const cropped           = [];
        const boundes           = [];

        images.forEach(
            tex => {
                if( optimize ){
                    const canvas = CanvasUtils.createFromImage(tex);
                    const bounds = detectEdges(canvas, 10);
                    const crop = CanvasUtils.crop(canvas, bounds);
                    boundes.push(bounds);
                    cropped.push(CanvasUtils.canvasToImg(crop));
                }
                else{
                    boundes.push({x:0,y:0, width: tex.naturalWidth, height: tex.naturalHeight});
                }
            }
        ); 
        
        

        if( optimize ){
            images = cropped;
        }

        let i: number = 0;

        //while there's images into the images array
        while (images.length > 0) {

            // we sort the images
            images = images.sort(this.sortImagesByAreaAsc);
            
            // we create a new Atlas
            currentAtlas = new Atlas(width, height);
            // we loop other the images array
            for ( i = 0; i < images.length; i++) {
                
                currentImg = images[i];
                bounds = boundes[i];

                // we try to find a zone which can contains our image
                currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);
                
                // if we cant find one
                if (currentZone == null)
                    continue;
                
                // then we put the img into the zone 
                currentZone.img = currentImg;
                
                //and create two zones from the current one
                currentAtlas.splitZone(currentZone);
                currentZone.originalWidth       = originals[i].naturalWidth;
                currentZone.originalHeight      = originals[i].naturalHeight;
                currentZone.offsetX             = bounds.x;
                currentZone.offsetY             = bounds.y;
                currentZone.src                 = originals[i].src.toString();
            }
            
            results.push(currentAtlas);
            
            // remove empty zones 
            currentAtlas.removeEmptyZones();

            // remove images from the array
            for( i = 0; i < currentAtlas.zones.length; i++ ){
                // images.splice( images.indexOf(currentAtlas.zones[i].img as Canvas), 1);
                images.splice( images.indexOf(currentImg), 1);
            }
        }

        return results;
    }

}