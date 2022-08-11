"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasUtils_1 = require("./CanvasUtils");
function detectEdges(png, limit) {
    if (limit === void 0) { limit = 1; }
    var pixels = CanvasUtils_1.default.getCanvasPixels(png);
    var left = Infinity;
    var right = -Infinity;
    var top = Infinity;
    var bottom = -Infinity;
    var pos = 0;
    for (var i = 3; i < pixels.length; i += 4) {
        var row = (pos / png.width) >> 0;
        var col = pos % png.width;
        pos++;
        if (pixels[i] < limit)
            continue;
        left = col < left ? col : left;
        top = row < top ? row : top;
        right = col > right ? col : right;
        bottom = row > bottom ? row : bottom;
    }
    return { x: left, y: top, width: right - left, height: bottom - top };
}
exports.default = detectEdges;
