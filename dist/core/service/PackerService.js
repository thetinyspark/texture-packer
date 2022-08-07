"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackerService = void 0;
var Atlas_1 = require("../model/vo/Atlas");
var CanvasUtils_1 = require("../utils/CanvasUtils");
var detectEdges_1 = require("../utils/detectEdges");
var PackerService = /** @class */ (function () {
    function PackerService() {
    }
    PackerService.prototype.sortImagesByAreaAsc = function (a, b) {
        var area1 = a.width * a.height;
        var area2 = b.width * b.height;
        return (area1 > area2) ? -1 : 1;
    };
    PackerService.prototype.pack = function (images, width, height, optimize) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (optimize === void 0) { optimize = false; }
        var results = [];
        var currentZone = null;
        var currentImg = null;
        var currentAtlas = null;
        var bounds = null;
        var original = null;
        var corresp = [];
        var originals = images;
        var cropped = [];
        images.forEach(function (tex) {
            if (optimize) {
                var canvas = CanvasUtils_1.default.createFromImage(tex);
                var bounds_1 = (0, detectEdges_1.default)(canvas, 10);
                var crop = CanvasUtils_1.default.crop(canvas, bounds_1);
                var cropImg = CanvasUtils_1.default.canvasToImg(crop);
                CanvasUtils_1.default.canvasToImg(crop);
                cropped.push(cropImg);
                corresp.push({ original: tex, cropped: cropImg, bounds: bounds_1 });
            }
        });
        if (optimize) {
            images = cropped;
        }
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
                if (!optimize) {
                    bounds = { x: 0, y: 0, width: currentImg.naturalWidth, height: currentImg.naturalHeight };
                    original = currentImg;
                }
                else {
                    var current = corresp.find(function (c) { return c.cropped === currentImg; });
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
                currentZone.originalWidth = original.naturalWidth;
                currentZone.originalHeight = original.naturalHeight;
                currentZone.offsetX = bounds.x;
                currentZone.offsetY = bounds.y;
                currentZone.src = original.src.toString();
            }
            results.push(currentAtlas);
            // remove empty zones 
            currentAtlas.removeEmptyZones();
            // remove images from the array
            for (i = 0; i < currentAtlas.zones.length; i++) {
                // images.splice( images.indexOf(currentAtlas.zones[i].img as Canvas), 1);
                images.splice(images.indexOf(currentImg), 1);
            }
        }
        return results;
    };
    return PackerService;
}());
exports.PackerService = PackerService;
