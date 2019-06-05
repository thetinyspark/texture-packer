import { Image } from "canvas/types";
import { Atlas } from "./Atlas";
import { Zone } from "./Zone";

export class Packer {


    constructor() {
    }

    public pack(images: Image[], width: number = 0, height: number = 0): Atlas[] {

        let results:Atlas[] = [];
        let currentZone: Zone = null;
        let currentImg: Image = null;
        let currentAtlas: Atlas = new Atlas(width, height);

        // we create a new Atlas
        let i: number = 0;

        // we loop other the images array
        for (; i < images.length; i++) {

            currentImg = images[i];
            // we try to find a zone which can contains our image
            currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);

            // if we cant find one we create a new Atlas
            if (currentZone == null) {
                results.push(currentAtlas);
                currentAtlas = new Atlas(width, height);
                currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);

                if( currentZone == null ){
                    break;
                }
            }

            // then we put the img into the zone 
            currentZone.img = currentImg;

            //and create two zones from the current one
            currentAtlas.splitZone(currentZone, width, height);
        }

        
        
        // and we return the zones array
        results.push(currentAtlas);
        return results;
    }

}