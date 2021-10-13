import { Image } from "canvas";
import { Atlas } from "../model/vo/Atlas";
export default interface IPackerService {
    pack(images: Image[]): Atlas[];
    removeTooBigImages(images: Image[], maxWidth: number, maxHeight: number): Image[];
    sortImagesByAreaAsc(a: Image, b: Image): number;
}
