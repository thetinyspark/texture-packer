import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Canvas, Image } from "canvas/types";
import CanvasUtils from "../../utils/CanvasUtils";
import detectEdges from "../../utils/detectEdges";

export class ImageInfo{

    private static _canvas = CanvasUtils.create(100,100);

    constructor(img:Image, optimize:boolean = true){
        let bounds:Rectangle        = {x:0, y:0, width:img.naturalWidth, height: img.naturalHeight};
        let filename                = img.src.toString();
        filename                    = filename.substring(filename.lastIndexOf("/") + 1 );
        filename                    = filename.substring(filename.lastIndexOf("\\") + 1 );
        filename                    = filename.substring(0,filename.lastIndexOf("."));
        this.originalWidth          = img.naturalWidth;
        this.originalHeight         = img.naturalHeight;
        
        if( optimize ){
            CanvasUtils.copyImg( ImageInfo._canvas, img );
            bounds = detectEdges(ImageInfo._canvas, 10);
        }
        

        this.offsetX    = bounds.x;
        this.offsetY    = bounds.y;
        this.width      = bounds.width;
        this.height     = bounds.height;
        this.src        = img.src.toString();
        this.id         = filename;
        this.area       = this.width * this.height;
    }

    public id:string                = "";
    public src:string               = "";
    public area:number              = 0;
    public offsetX:number           = 0;
    public offsetY:number           = 0;
    public originalWidth:number     = 0;
    public originalHeight:number    = 0;
    public width:number             = 0;
    public height:number            = 0;
}