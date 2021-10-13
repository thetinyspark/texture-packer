"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackerService = void 0;
var Atlas_1 = require("../model/vo/Atlas");
var PackerService = /** @class */ (function () {
    function PackerService() {
    }
    PackerService.prototype.sortImagesByAreaAsc = function (a, b) {
        var area1 = a.naturalWidth * a.naturalHeight;
        var area2 = b.naturalWidth * b.naturalHeight;
        return (area1 > area2) ? -1 : 1;
    };
    PackerService.prototype.removeTooBigImages = function (images, width, height) {
        var results = [];
        var i = 0;
        for (; i < images.length; i++) {
            if (images[i].naturalWidth > width || images[i].naturalHeight > height)
                continue;
            results.push(images[i]);
        }
        return results;
    };
    PackerService.prototype.pack = function (images, width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var results = [];
        var currentZone = null;
        var currentImg = null;
        var currentAtlas = null;
        // if the image is too big, then skip it
        images = this.removeTooBigImages(images, width, height);
        var i = 0;
        //while there's images into the images array
        while (images.length > 0) {
            // we sort the images
            images = images.sort(this.sortImagesByAreaAsc);
            // we create a new Atlas
            currentAtlas = new Atlas_1.Atlas(width, height);
            // we loop other the images array
            for (i = 0; i < images.length; i++) {
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
            for (i = 0; i < currentAtlas.zones.length; i++) {
                images.splice(images.indexOf(currentAtlas.zones[i].img), 1);
            }
        }
        return results;
    };
    return PackerService;
}());
exports.PackerService = PackerService;
