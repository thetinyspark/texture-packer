"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("canvas");
/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
var CanvasUtils = /** @class */ (function () {
    function CanvasUtils() {
    }
    CanvasUtils.create = function (width, height) {
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        var canvas = (0, canvas_1.createCanvas)(width, height);
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    CanvasUtils.copyImg = function (canvas, img) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    CanvasUtils.createFromImage = function (img) {
        var canvas = CanvasUtils.create(img.naturalWidth, img.naturalHeight);
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        return canvas;
    };
    CanvasUtils.canvasToImg = function (canvas) {
        var img = new canvas_1.Image();
        img.width = canvas.width;
        img.height = canvas.height;
        img.src = canvas.toDataURL("image/png");
        return img;
    };
    CanvasUtils.crop = function (source, bounds) {
        var canvas = CanvasUtils.create(bounds.width, bounds.height);
        var context = canvas.getContext("2d");
        context.save();
        context.translate(-bounds.x, -bounds.y);
        context.drawImage(source, 0, 0);
        context.restore();
        return canvas;
    };
    CanvasUtils.fillRect = function (canvas, color, x, y, width, height) {
        var context = canvas.getContext("2d");
        context.save();
        context.beginPath();
        context.fillStyle = color;
        context.translate(x, y);
        context.fillRect(0, 0, width, height);
        context.fill();
        context.closePath();
        context.restore();
    };
    CanvasUtils.getCanvasPixels = function (canvas) {
        // const offscreen = CanvasUtils.create(canvas.width, canvas.height); 
        // offscreen.getContext("2d").drawImage(canvas, 0, 0); 
        // return offscreen.getContext("2d").getImageData(0,0,offscreen.width, offscreen.height).data;
        var context = canvas.getContext("2d");
        return context.getImageData(0, 0, canvas.width, canvas.height).data;
    };
    CanvasUtils.pixelsToAlphaMap = function (pixels) {
        var result = [];
        for (var i = 0; i < pixels.length; i += 4) {
            result.push(pixels[i + 3]);
        }
        return result;
    };
    CanvasUtils.pixelsToRGBA = function (pixels) {
        var result = [];
        for (var i = 0; i < pixels.length; i += 4) {
            result.push({
                r: pixels[i],
                g: pixels[i + 1],
                b: pixels[i + 2],
                a: pixels[i + 3],
            });
        }
        return result;
    };
    CanvasUtils.getCanvasPixel = function (canvas, x, y) {
        var pixels = CanvasUtils.getCanvasPixels(canvas);
        var pos = Math.floor(y * canvas.width * 4) + (x * 4);
        return [
            pixels[pos],
            pixels[pos + 1],
            pixels[pos + 2],
            pixels[pos + 3],
        ];
    };
    CanvasUtils.canvasPixelToRGBA = function (pixelData) {
        return {
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
            a: pixelData[3]
        };
    };
    CanvasUtils.pixelsAreTheSame = function (pixelsA, pixelsB) {
        if (pixelsA.length !== pixelsB.length)
            return false;
        for (var i = 0; i < pixelsA.length; i++) {
            if (pixelsA[i] !== pixelsB[i])
                return false;
        }
        return true;
    };
    return CanvasUtils;
}());
exports.default = CanvasUtils;
