import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Canvas } from "canvas";
import CanvasUtils from "./CanvasUtils";

export default function detectEdges(png:Canvas, limit:number = 1): Rectangle {
    const pixels = CanvasUtils.getCanvasPixels(png);
    let left:number = Infinity;
    let right:number = -Infinity;
    let top:number = Infinity;
    let bottom:number = -Infinity;
    let pos:number = 0;
    for( let i:number = 3; i < pixels.length; i+=4){
        const row:number = ( pos / png.width ) >> 0;
        const col:number = pos % png.width;
        pos++;

        if( pixels[i] < limit )
            continue;

        left    = col < left ? col : left;
        top     = row < top ? row : top;
        right   = col > right ? col : right;
        bottom  = row > bottom ? row : bottom;
    }
    
    return {x:left,y:top,width:right-left,height:bottom-top};
}
  