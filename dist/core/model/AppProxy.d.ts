import { Proxy } from "@thetinyspark/coffe-maker";
import { Image } from "canvas";
import IAppProxy from "./IAppProxy";
export default class AppProxy extends Proxy implements IAppProxy {
    private _model;
    constructor();
    getTextures(): Image[];
    setTextures(textures: Image[]): void;
    getSourceDir(): string;
    getOuputDir(): string;
    getAtlasSize(): number;
    setUserArgs(sourceDir: string, outputDir: string, atlasSize: number): void;
}
