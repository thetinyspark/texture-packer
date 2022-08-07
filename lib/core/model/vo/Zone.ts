import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Canvas, Image } from "canvas/types";

export class Zone{

    constructor(){
    }

    public offsetX:number = 0;
    public offsetY:number = 0;
    public originalWidth:number = 0;
    public originalHeight:number = 0;
    public width:number = 0;
    public height:number = 0;
    public x:number = 0;
    public y:number = 0;
    public img?:Image|Canvas = null;
    public src:string = "";
}