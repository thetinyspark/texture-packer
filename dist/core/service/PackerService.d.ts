import { Image } from "canvas/types";
import { Atlas } from "../model/vo/Atlas";
import IPackerService from "./IPackerService";
export declare class PackerService implements IPackerService {
    constructor();
    sortImagesByAreaAsc(a: Image, b: Image): number;
    removeTooBigImages(images: Image[], width: number, height: number): Image[];
    pack(images: Image[], width?: number, height?: number): Atlas[];
}
