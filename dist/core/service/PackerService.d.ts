import { Atlas } from "../model/vo/Atlas";
import { ImageInfo } from "../model/vo/ImageInfo";
import IPackerService from "./IPackerService";
export declare class PackerService implements IPackerService {
    constructor();
    private sortImagesInfosByAreaAsc;
    pack(infos: ImageInfo[], width?: number, height?: number): Atlas[];
}
