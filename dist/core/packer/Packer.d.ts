import { Image } from "canvas/types";
import { Atlas } from "./Atlas";
export declare class Packer {
    constructor();
    private sortImages;
    private trim;
    pack(images: Image[], width?: number, height?: number): Atlas[];
}
