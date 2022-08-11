import { Image } from "canvas/types";
export declare class ImageInfo {
    private static _canvas;
    constructor(img: Image, optimize?: boolean);
    id: string;
    src: string;
    area: number;
    offsetX: number;
    offsetY: number;
    originalWidth: number;
    originalHeight: number;
    width: number;
    height: number;
}
