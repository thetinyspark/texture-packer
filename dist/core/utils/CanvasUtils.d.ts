import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Canvas, Image } from "canvas";
/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
export default class CanvasUtils {
    static create(width?: number, height?: number): Canvas;
    static copyImg(canvas: Canvas, img: Image): void;
    static createFromImage(img: Image): Canvas;
    static canvasToImg(canvas: Canvas): Image;
    static crop(source: Canvas, bounds: Rectangle): Canvas;
    static fillRect(canvas: Canvas, color: string, x: number, y: number, width: number, height: number): void;
    static getCanvasPixels(canvas: Canvas): Uint8ClampedArray;
    static pixelsToAlphaMap(pixels: Uint8ClampedArray): number[];
    static pixelsToRGBA(pixels: Uint8ClampedArray): {
        r: number;
        g: number;
        b: number;
        a: number;
    }[];
    static getCanvasPixel(canvas: Canvas, x: number, y: number): number[];
    static canvasPixelToRGBA(pixelData: number[]): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static pixelsAreTheSame(pixelsA: number[], pixelsB: number[]): boolean;
}
