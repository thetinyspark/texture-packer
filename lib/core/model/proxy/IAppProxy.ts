import { IProxy } from "@thetinyspark/coffe-maker";
import { Image } from "canvas";
import { Atlas } from "../vo/Atlas";

export default interface IAppProxy extends IProxy{
    setUserArgs( sourceDir:string, outputDir:string, atlasSize:number );
    getSourceDir():string; 
    getOuputDir():string; 
    getAtlasSize():number;
    setTextures(images:Image[]);
    getTextures():Image[];
    setAtlases(atlases:Atlas[]):void; 
    getAtlases():Atlas[];
}