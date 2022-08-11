"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackerService = void 0;
var Atlas_1 = require("../model/vo/Atlas");
var PackerService = /** @class */ (function () {
    function PackerService() {
    }
    PackerService.prototype.sortImagesInfosByAreaAsc = function (a, b) {
        return (a.area > b.area) ? -1 : 1;
    };
    PackerService.prototype.pack = function (infos, width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var results = [];
        var currentZone = null;
        var currentImgInfo = null;
        var currentAtlas = null;
        var i = 0;
        //while there's images into the images array
        while (infos.length > 0) {
            // we sort the infos
            infos = infos.sort(this.sortImagesInfosByAreaAsc);
            // we create a new Atlas
            currentAtlas = new Atlas_1.Atlas(width, height);
            // we loop other the images array
            for (i = 0; i < infos.length; i++) {
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
            for (i = 0; i < currentAtlas.zones.length; i++) {
                infos.splice(infos.indexOf(currentAtlas.zones[i].imgInfo), 1);
            }
        }
        return results;
    };
    return PackerService;
}());
exports.PackerService = PackerService;
