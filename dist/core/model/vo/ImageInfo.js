"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageInfo = void 0;
const CanvasUtils_1 = require("../../utils/CanvasUtils");
const detectEdges_1 = require("../../utils/detectEdges");
class ImageInfo {
    constructor(img, optimize = true) {
        this.id = "";
        this.src = "";
        this.area = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.originalWidth = 0;
        this.originalHeight = 0;
        this.width = 0;
        this.height = 0;
        let bounds = { x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight };
        let filename = img.src.toString();
        filename = filename.substring(filename.lastIndexOf("/") + 1);
        filename = filename.substring(filename.lastIndexOf("\\") + 1);
        filename = filename.substring(0, filename.lastIndexOf("."));
        this.originalWidth = img.naturalWidth;
        this.originalHeight = img.naturalHeight;
        if (optimize) {
            CanvasUtils_1.default.copyImg(ImageInfo._canvas, img);
            bounds = (0, detectEdges_1.default)(ImageInfo._canvas, 10);
        }
        this.offsetX = bounds.x;
        this.offsetY = bounds.y;
        this.width = bounds.width;
        this.height = bounds.height;
        this.src = img.src.toString();
        this.id = filename;
        this.area = this.width * this.height;
    }
}
exports.ImageInfo = ImageInfo;
ImageInfo._canvas = CanvasUtils_1.default.create(100, 100);
