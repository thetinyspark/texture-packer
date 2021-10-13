"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var fs = require("fs");
var canvas_1 = require("canvas");
var Drawer = /** @class */ (function () {
    function Drawer() {
    }
    Drawer.prototype.draw = function (atlases, outputDir) {
        if (outputDir === void 0) { outputDir = "."; }
        var i = 0;
        for (; i < atlases.length; i++) {
            fs.writeFileSync(outputDir + "/atlas_" + i + ".png", this.drawAtlas(atlases[i]).toBuffer());
        }
    };
    Drawer.prototype.drawAtlas = function (atlas) {
        var canvas = (0, canvas_1.createCanvas)(atlas.width, atlas.height);
        var ctx = canvas.getContext("2d");
        var zone = null;
        var i = 0;
        ctx.save();
        for (; i < atlas.zones.length; i++) {
            zone = atlas.zones[i];
            if (zone.img !== null) {
                ctx.drawImage(zone.img, zone.x, zone.y, zone.width, zone.height);
            }
        }
        ctx.restore();
        return canvas;
    };
    return Drawer;
}());
exports.Drawer = Drawer;
