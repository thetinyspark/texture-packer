"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("canvas");
var DrawService = /** @class */ (function () {
    function DrawService() {
    }
    DrawService.prototype.drawAtlas = function (atlas, drawBorder) {
        if (drawBorder === void 0) { drawBorder = false; }
        var scene = (0, canvas_1.createCanvas)(atlas.width, atlas.height);
        var context = scene.getContext("2d");
        atlas.zones.forEach(function (currentZone) {
            context.save();
            context.drawImage(currentZone.img, currentZone.offsetX, currentZone.offsetY, currentZone.width, currentZone.height, currentZone.x, currentZone.y, currentZone.width, currentZone.height);
            context.restore();
            if (drawBorder) {
                var color = "red";
                context.save();
                context.strokeStyle = color;
                context.lineWidth = 2;
                context.moveTo(currentZone.x, currentZone.y);
                context.lineTo(currentZone.x + currentZone.width, currentZone.y);
                context.lineTo(currentZone.x + currentZone.width, currentZone.y + currentZone.height);
                context.lineTo(currentZone.x, currentZone.y + currentZone.height);
                context.lineTo(currentZone.x, currentZone.y);
                context.stroke();
                context.restore();
            }
        });
        return scene;
    };
    return DrawService;
}());
exports.default = DrawService;
