"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
class CanvasUtils {
    static create(width = 1, height = 1) {
        const canvas = (0, canvas_1.createCanvas)(width, height);
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    static copyImg(canvas, img) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    static createFromImage(img) {
        const canvas = CanvasUtils.create(img.naturalWidth, img.naturalHeight);
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        return canvas;
    }
    static canvasToImg(canvas) {
        const img = new canvas_1.Image();
        img.width = canvas.width;
        img.height = canvas.height;
        img.src = canvas.toDataURL("image/png");
        return img;
    }
    static crop(source, bounds) {
        const canvas = CanvasUtils.create(bounds.width, bounds.height);
        const context = canvas.getContext("2d");
        context.save();
        context.translate(-bounds.x, -bounds.y);
        context.drawImage(source, 0, 0);
        context.restore();
        return canvas;
    }
    static fillRect(canvas, color, x, y, width, height) {
        const context = canvas.getContext("2d");
        context.save();
        context.beginPath();
        context.fillStyle = color;
        context.translate(x, y);
        context.fillRect(0, 0, width, height);
        context.fill();
        context.closePath();
        context.restore();
    }
    static getCanvasPixels(canvas) {
        // const offscreen = CanvasUtils.create(canvas.width, canvas.height); 
        // offscreen.getContext("2d").drawImage(canvas, 0, 0); 
        // return offscreen.getContext("2d").getImageData(0,0,offscreen.width, offscreen.height).data;
        const context = canvas.getContext("2d");
        return context.getImageData(0, 0, canvas.width, canvas.height).data;
    }
    static pixelsToAlphaMap(pixels) {
        const result = [];
        for (let i = 0; i < pixels.length; i += 4) {
            result.push(pixels[i + 3]);
        }
        return result;
    }
    static pixelsToRGBA(pixels) {
        const result = [];
        for (let i = 0; i < pixels.length; i += 4) {
            result.push({
                r: pixels[i],
                g: pixels[i + 1],
                b: pixels[i + 2],
                a: pixels[i + 3],
            });
        }
        return result;
    }
    static getCanvasPixel(canvas, x, y) {
        const pixels = CanvasUtils.getCanvasPixels(canvas);
        const pos = Math.floor(y * canvas.width * 4) + (x * 4);
        return [
            pixels[pos],
            pixels[pos + 1],
            pixels[pos + 2],
            pixels[pos + 3],
        ];
    }
    static canvasPixelToRGBA(pixelData) {
        return {
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
            a: pixelData[3]
        };
    }
    static pixelsAreTheSame(pixelsA, pixelsB) {
        if (pixelsA.length !== pixelsB.length)
            return false;
        for (let i = 0; i < pixelsA.length; i++) {
            if (pixelsA[i] !== pixelsB[i])
                return false;
        }
        return true;
    }
}
exports.default = CanvasUtils;
