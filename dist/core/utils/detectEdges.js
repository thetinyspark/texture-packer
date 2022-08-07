"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasUtils_1 = require("./CanvasUtils");
function detectEdges(png, limit) {
    if (limit === void 0) { limit = 1; }
    var pixels = CanvasUtils_1.default.getCanvasPixels(png);
    var rgba = CanvasUtils_1.default.pixelsToRGBA(pixels);
    var left = Infinity;
    var right = -Infinity;
    var top = Infinity;
    var bottom = -Infinity;
    for (var i = 0; i < rgba.length; i++) {
        var row = (i / png.width) >> 0;
        var col = i % png.width;
        if (rgba[i].a < limit)
            continue;
        left = col < left ? col : left;
        top = row < top ? row : top;
        right = col > right ? col : right;
        bottom = row > bottom ? row : bottom;
    }
    return { x: left, y: top, width: right - left, height: bottom - top };
}
exports.default = detectEdges;
