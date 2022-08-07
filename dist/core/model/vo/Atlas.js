"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atlas = void 0;
var Atlas = /** @class */ (function () {
    function Atlas(width, height) {
        this.width = width;
        this.height = height;
        this.zones = [
            {
                x: 0,
                y: 0,
                width: width,
                height: height,
                img: null,
                offsetX: 0,
                offsetY: 0,
                originalWidth: 0,
                originalHeight: 0,
                src: ""
            }
        ];
    }
    Atlas.prototype.splitZone = function (zone) {
        var zoneA = { x: 0, y: 0, width: 0, height: 0, img: null, offsetX: 0, offsetY: 0, originalWidth: 0, originalHeight: 0, src: "" };
        var zoneB = { x: 0, y: 0, width: 0, height: 0, img: null, offsetX: 0, offsetY: 0, originalWidth: 0, originalHeight: 0, src: "" };
        var img = zone.img;
        if (img.width > img.height) {
            zoneA.x = zone.x + img.width;
            zoneA.y = zone.y;
            zoneA.width = zone.width - img.width;
            zoneA.height = img.height;
            zoneB.x = zone.x;
            zoneB.y = zone.y + img.height;
            zoneB.width = zone.width;
            zoneB.height = zone.height - img.height;
        }
        else {
            zoneA.x = zone.x;
            zoneA.y = zone.y + img.height;
            zoneA.width = img.width;
            zoneA.height = zone.height - img.height;
            zoneB.x = zone.x + img.width;
            zoneB.y = zone.y;
            zoneB.width = zone.width - img.width;
            zoneB.height = zone.height;
        }
        if (zoneA.width > 0 && zoneA.height > 0)
            this.zones.push(zoneA);
        if (zoneB.width > 0 && zoneB.height > 0)
            this.zones.push(zoneB);
        zone.width = img.width;
        zone.height = img.height;
    };
    Atlas.prototype.getZone = function (width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        // we sort the zones 
        this.zones = this.zones.sort(this.sortZones);
        var i = 0;
        // then we loop other the zones array in order to grab the most accruate one
        for (; i < this.zones.length; i++) {
            if (width <= this.zones[i].width && height <= this.zones[i].height && this.zones[i].img == null) {
                return this.zones[i];
            }
        }
        return null;
    };
    Atlas.prototype.removeEmptyZones = function () {
        var i = this.zones.length;
        var empty = this.zones.filter(function (zone) { return zone.img === null; });
        while (empty.length > 0) {
            var cur = empty.shift();
            var pos = this.zones.indexOf(cur);
            this.zones.splice(pos, 1);
        }
        // while( --i > -1 ){
        //     if( this.zones[i].img == null ){
        //         this.zones.splice(i, 1);
        //     }
        // }
    };
    Atlas.prototype.sortZones = function (a, b) {
        var area1 = a.width * a.height;
        var area2 = b.width * b.height;
        return (area1 < area2) ? -1 : 1;
    };
    Atlas.toJSON = function (atlas) {
        var output = {
            width: atlas.width,
            height: atlas.height,
            zones: atlas.zones.map(function (zone) {
                var filename = zone.src.toString();
                filename = filename.substr(filename.lastIndexOf("/") + 1);
                filename = filename.substr(filename.lastIndexOf("\\") + 1);
                return {
                    x: zone.x,
                    y: zone.y,
                    offsetX: zone.offsetX,
                    offsetY: zone.offsetY,
                    originalWidth: zone.originalWidth,
                    originalHeight: zone.originalHeight,
                    width: zone.width,
                    height: zone.height,
                    id: filename.substr(0, filename.lastIndexOf(".")),
                    img: filename,
                };
            })
        };
        return JSON.stringify(output);
    };
    return Atlas;
}());
exports.Atlas = Atlas;
