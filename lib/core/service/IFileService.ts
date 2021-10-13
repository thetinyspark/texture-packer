import { IService } from "@thetinyspark/coffe-maker";
import { Canvas } from "canvas";

export default interface IFileService extends IService{
    writeJSON(data:any, filepath:string):void;
    writeImage(canvas:Canvas, filepath:string):void;
    fileExists(filepath:string):boolean;
    readDir(path:string, recursive?:boolean, result?:string[]):string[];
    mkDir(path:string):void; 
    keepOnlyFiles(filepaths:string[]):string[];
    keepOnlyDirs(filepaths:string[]):string[];
    getImagesInDir(path:string):string[];
}