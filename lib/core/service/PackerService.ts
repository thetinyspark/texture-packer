import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Image } from "canvas/types";
import { Atlas } from "../model/vo/Atlas";
import { ImageInfo } from "../model/vo/ImageInfo";
import { Zone } from "../model/vo/Zone";
import IPackerService from "./IPackerService";

export class PackerService implements IPackerService {


    constructor() { }

    private sortImagesInfosByAreaAsc(a: ImageInfo, b: ImageInfo): number {
        return (a.area > b.area) ? -1 : 1;
    }

    public pack(infos: ImageInfo[], width: number = 0, height: number = 0): Atlas[] {

        let results: Atlas[]            = [];
        let currentZone: Zone           = null;
        let currentImgInfo: ImageInfo   = null;
        let currentAtlas: Atlas         = null;
        
        let i: number = 0;

        //while there's images into the images array
        while (infos.length > 0) {

            // we sort the infos
            infos = infos.sort(this.sortImagesInfosByAreaAsc);
            
            // we create a new Atlas
            currentAtlas = new Atlas(width, height);
            // we loop other the images array
            for ( i = 0; i < infos.length; i++) {
                
                currentImgInfo = infos[i];

                // we try to find a zone which can contains our image
                currentZone = currentAtlas.getZone(currentImgInfo.width, currentImgInfo.height);
                
                // if we cant find one
                if (currentZone == null)
                    continue;
                
                // then we put the img into the zone 
                currentZone.imgInfo = currentImgInfo;
                
                //and create two zones from the current one
                currentAtlas.splitZone(currentZone);
            }
            
            results.push(currentAtlas);
            
            // remove empty zones 
            currentAtlas.removeEmptyZones();

            // remove infos from the array
            for( i = 0; i < currentAtlas.zones.length; i++ ){
                infos.splice( infos.indexOf(currentAtlas.zones[i].imgInfo ), 1);
            }
        }

        return results;
    }

}