"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("canvas");
var DrawService = /** @class */ (function () {
    function DrawService() {
    }
    DrawService.prototype.drawAtlas = function (atlas) {
        var scene = (0, canvas_1.createCanvas)(atlas.width, atlas.height);
        var context = scene.getContext("2d");
        atlas.zones.forEach(function (currentZone) {
            context.drawImage(currentZone.img, currentZone.x, currentZone.y);
        });
        return scene;
    };
    return DrawService;
}());
exports.default = DrawService;
