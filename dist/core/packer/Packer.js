"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Atlas_1 = require("./Atlas");
class Packer {
    constructor() {
    }
    pack(images, width = 0, height = 0) {
        let results = [];
        let currentZone = null;
        let currentImg = null;
        let currentAtlas = new Atlas_1.Atlas(width, height);
        // we create a new Atlas
        let i = 0;
        // we loop other the images array
        for (; i < images.length; i++) {
            currentImg = images[i];
            // we try to find a zone which can contains our image
            currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);
            // if we cant find one we create a new Atlas
            if (currentZone == null) {
                results.push(currentAtlas);
                currentAtlas = new Atlas_1.Atlas(width, height);
                currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);
                if (currentZone == null) {
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
exports.Packer = Packer;
