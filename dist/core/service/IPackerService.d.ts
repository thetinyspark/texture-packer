import { Atlas } from "../model/vo/Atlas";
import { ImageInfo } from "../model/vo/ImageInfo";
export default interface IPackerService {
    pack(infos: ImageInfo[], width: number, height: number): Atlas[];
}
