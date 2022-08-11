import { IProxy } from "@thetinyspark/coffe-maker";
import { Image } from "canvas";
import { Atlas } from "../vo/Atlas";
import { ImageInfo } from "../vo/ImageInfo";
export default interface IAppProxy extends IProxy {
    setUserArgs(sourceDir: string, outputDir: string, atlasSize: number): any;
    getSourceDir(): string;
    getOuputDir(): string;
    getAtlasSize(): number;
    setTextures(images: Image[]): any;
    getTextures(): Image[];
    setAtlases(atlases: Atlas[]): void;
    getAtlases(): Atlas[];
    setImagesInfo(imageInfos: ImageInfo[]): void;
    getImagesInfo(): ImageInfo[];
}
