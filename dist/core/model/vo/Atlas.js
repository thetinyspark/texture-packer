"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atlas = void 0;
class Atlas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.zones = [
            {
                x: 0,
                y: 0,
                width: width,
                height: height,
                imgInfo: null
            }
        ];
    }
    splitZone(zone) {
        let zoneA = { x: 0, y: 0, width: 0, height: 0, imgInfo: null };
        let zoneB = { x: 0, y: 0, width: 0, height: 0, imgInfo: null };
        let img = zone.imgInfo;
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
    }
    getZone(width = 0, height = 0) {
        // we sort the zones 
        this.zones = this.zones.sort(this.sortZones);
        let i = 0;
        // then we loop other the zones array in order to grab the most accruate one
        for (; i < this.zones.length; i++) {
            if (width <= this.zones[i].width && height <= this.zones[i].height && this.zones[i].imgInfo == null) {
                return this.zones[i];
            }
        }
        return null;
    }
    removeEmptyZones() {
        let i = this.zones.length;
        const empty = this.zones.filter(zone => zone.imgInfo === null);
        while (empty.length > 0) {
            const cur = empty.shift();
            const pos = this.zones.indexOf(cur);
            this.zones.splice(pos, 1);
        }
    }
    sortZones(a, b) {
        let area1 = a.width * a.height;
        let area2 = b.width * b.height;
        return (area1 < area2) ? -1 : 1;
    }
    static toJSON(atlas) {
        const output = {
            width: atlas.width,
            height: atlas.height,
            zones: atlas.zones.map((zone) => {
                return {
                    x: zone.x,
                    y: zone.y,
                    offsetX: zone.imgInfo.offsetX,
                    offsetY: zone.imgInfo.offsetY,
                    originalWidth: zone.imgInfo.originalWidth,
                    originalHeight: zone.imgInfo.originalHeight,
                    width: zone.width,
                    height: zone.height,
                    id: zone.imgInfo.id,
                    img: zone.imgInfo.id,
                };
            })
        };
        return JSON.stringify(output);
    }
}
exports.Atlas = Atlas;
