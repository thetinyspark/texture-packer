import { Canvas, Image } from "canvas/types";
export declare class Zone {
    constructor();
    offsetX: number;
    offsetY: number;
    originalWidth: number;
    originalHeight: number;
    width: number;
    height: number;
    x: number;
    y: number;
    img?: Image | Canvas;
    src: string;
}
