import { Image } from "canvas/types";
import { Atlas } from "../model/vo/Atlas";
import IPackerService from "./IPackerService";
export declare class PackerService implements IPackerService {
    constructor();
    private sortImagesByAreaAsc;
    pack(images: Image[], width?: number, height?: number): Atlas[];
}
