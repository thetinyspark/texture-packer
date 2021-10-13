"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const fs = require("fs");
const canvas_1 = require("canvas");
class Drawer {
    constructor() { }
    draw(atlases, outputDir = ".") {
        let i = 0;
        for (; i < atlases.length; i++) {
            fs.writeFileSync(outputDir + "/atlas_" + i + ".png", this.drawAtlas(atlases[i]).toBuffer());
        }
    }
    drawAtlas(atlas) {
        let canvas = (0, canvas_1.createCanvas)(atlas.width, atlas.height);
        let ctx = canvas.getContext("2d");
        let zone = null;
        let i = 0;
        ctx.save();
        for (; i < atlas.zones.length; i++) {
            zone = atlas.zones[i];
            if (zone.img !== null) {
                ctx.drawImage(zone.img, zone.x, zone.y, zone.width, zone.height);
            }
        }
        ctx.restore();
        return canvas;
    }
}
exports.Drawer = Drawer;
