import { Image } from "canvas";
import { Atlas } from "../model/vo/Atlas";

export default interface IPackerService{
    pack(images:Image[], width:number, height:number):Atlas[]; 
}