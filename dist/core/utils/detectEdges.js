"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanvasUtils_1 = require("./CanvasUtils");
function detectEdges(png, limit = 1) {
    const pixels = CanvasUtils_1.default.getCanvasPixels(png);
    let left = Infinity;
    let right = -Infinity;
    let top = Infinity;
    let bottom = -Infinity;
    let pos = 0;
    for (let i = 3; i < pixels.length; i += 4) {
        const row = (pos / png.width) >> 0;
        const col = pos % png.width;
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
