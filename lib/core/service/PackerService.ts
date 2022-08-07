import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Image } from "canvas/types";
import { cp } from "fs";
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
        let original:Image      = null;
        const corresp           = [];
        const originals         = images;
        const cropped           = [];

        images.forEach(
            tex => {
                if( optimize ){
                    const canvas = CanvasUtils.createFromImage(tex);
                    const bounds = detectEdges(canvas, 10);
                    const crop = CanvasUtils.crop(canvas, bounds);
                    const cropImg = CanvasUtils.canvasToImg(crop);
                    CanvasUtils.canvasToImg(crop)
                    cropped.push(cropImg);
                    corresp.push({original: tex, cropped: cropImg, bounds: bounds})
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
                if( !optimize){
                    bounds = {x:0,y:0, width: currentImg.naturalWidth, height: currentImg.naturalHeight}
                    original = currentImg;
                }
                else{
                    const current = corresp.find( c => c.cropped === currentImg );
                    bounds = current.bounds;
                    original = current.original;
                }

                // we try to find a zone which can contains our image
                currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);
                
                // if we cant find one
                if (currentZone == null)
                    continue;
                
                // then we put the img into the zone 
                currentZone.img = currentImg;
                
                //and create two zones from the current one
                currentAtlas.splitZone(currentZone);
                currentZone.originalWidth       = original.naturalWidth;
                currentZone.originalHeight      = original.naturalHeight;
                currentZone.offsetX             = bounds.x;
                currentZone.offsetY             = bounds.y;
                currentZone.src                 = original.src.toString();
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