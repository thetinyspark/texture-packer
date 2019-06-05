import { Image } from "canvas/types";
import { Atlas } from "./Atlas";
export declare class Packer {
    constructor();
    pack(images: Image[], width?: number, height?: number): Atlas[];
}
