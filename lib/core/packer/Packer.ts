import { Image } from "canvas/types";
import { Atlas } from "./Atlas";
import { Zone } from "./Zone";

export class Packer {


    constructor() { }

    private sortImages(a: Image, b: Image): number {
        let area1: number = a.naturalWidth * a.naturalHeight;
        let area2: number = b.naturalWidth * b.naturalHeight;
        return (area1 > area2) ? -1 : 1;
    }

    private trim(images: Image[], width: number, height: number): Image[] {
        let results: Image[] = [];
        let i: number = 0;

        for (; i < images.length; i++) {
            if (images[i].naturalWidth > width || images[i].naturalHeight > height)
                continue;

            results.push(images[i]);
        }

        return results;
    }

    public pack(images: Image[], width: number = 0, height: number = 0): Atlas[] {

        let results: Atlas[] = [];
        let currentZone: Zone = null;
        let currentImg: Image = null;
        let currentAtlas: Atlas = null;

        // if the image is too big, then skip it
        images = this.trim(images, width, height);
        

        
        let i: number = 0;

        

        //while there's images into the images array
        while (images.length > 0) {

            
            // we sort the images
            images = images.sort(this.sortImages);
            
            // we create a new Atlas
            currentAtlas = new Atlas(width, height);
            // we loop other the images array
            for ( i = 0; i < images.length; i++) {
                
                currentImg = images[i];
                
                // we try to find a zone which can contains our image
                currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);
                
                // if we cant find one
                if (currentZone == null)
                    continue;
                
                // then we put the img into the zone 
                currentZone.img = currentImg;
                
                //and create two zones from the current one
                currentAtlas.splitZone(currentZone, width, height);
            }
            
            results.push(currentAtlas);
            
            // remove empty zones 
            currentAtlas.removeEmptyZones();

            // remove images from the array
            for( i = 0; i < currentAtlas.zones.length; i++ ){
                images.splice( images.indexOf(currentAtlas.zones[i].img), 1);
            }
        }

        return results;
    }

}