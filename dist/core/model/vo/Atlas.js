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
                img: null
            }
        ];
    }
    Atlas.prototype.splitZone = function (zone, width, height) {
        var zoneA = { x: 0, y: 0, width: 0, height: 0, img: null };
        var zoneB = { x: 0, y: 0, width: 0, height: 0, img: null };
        var img = zone.img;
        if (img.naturalWidth > img.naturalHeight) {
            zoneA.x = zone.x + img.naturalWidth;
            zoneA.y = zone.y;
            zoneA.width = zone.width - img.naturalWidth;
            zoneA.height = img.naturalHeight;
            zoneB.x = zone.x;
            zoneB.y = zone.y + img.naturalHeight;
            zoneB.width = zone.width;
            zoneB.height = zone.height - img.naturalHeight;
        }
        else {
            zoneA.x = zone.x;
            zoneA.y = zone.y + img.naturalHeight;
            zoneA.width = img.naturalWidth;
            zoneA.height = zone.height - img.naturalHeight;
            zoneB.x = zone.x + img.naturalWidth;
            zoneB.y = zone.y;
            zoneB.width = zone.width - img.naturalWidth;
            zoneB.height = zone.height;
        }
        if (zoneA.width > 0 && zoneA.height > 0)
            this.zones.push(zoneA);
        if (zoneB.width > 0 && zoneB.height > 0)
            this.zones.push(zoneB);
        zone.width = img.naturalWidth;
        zone.height = img.naturalHeight;
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
        while (--i > -1) {
            if (this.zones[i].img == null) {
                this.zones.splice(i, 1);
            }
        }
    };
    Atlas.prototype.sortZones = function (a, b) {
        var area1 = a.width * a.height;
        var area2 = b.width * b.height;
        return (area1 < area2) ? -1 : 1;
    };
    Atlas.toJSON = function (atlas) {
        return JSON.stringify(atlas, function (key, value) {
            if (key == "img") {
                var img = value;
                var filename = img.src.toString();
                filename = filename.substr(filename.lastIndexOf("/") + 1);
                filename = filename.substr(filename.lastIndexOf("\\") + 1);
                return filename;
            }
            return value;
        });
    };
    return Atlas;
}());
exports.Atlas = Atlas;
