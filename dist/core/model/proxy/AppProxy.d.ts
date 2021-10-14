import { Proxy } from "@thetinyspark/coffe-maker";
import { Image } from "canvas";
import { Atlas } from "../vo/Atlas";
import IAppProxy from "./IAppProxy";
export default class AppProxy extends Proxy implements IAppProxy {
    private _model;
    constructor();
    setAtlases(atlases: Atlas[]): void;
    getAtlases(): Atlas[];
    getTextures(): Image[];
    setTextures(textures: Image[]): void;
    getSourceDir(): string;
    getOuputDir(): string;
    getAtlasSize(): number;
    setUserArgs(sourceDir: string, outputDir: string, atlasSize: number): void;
}
