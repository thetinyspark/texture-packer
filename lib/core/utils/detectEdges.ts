import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Canvas } from "canvas";
import CanvasUtils from "./CanvasUtils";

export default function detectEdges(png:Canvas, limit:number = 1): Rectangle {
    const pixels = CanvasUtils.getCanvasPixels(png);
    const rgba = CanvasUtils.pixelsToRGBA(pixels);
    let left:number = Infinity;
    let right:number = -Infinity;
    let top:number = Infinity;
    let bottom:number = -Infinity;
    for( let i:number = 0; i < rgba.length; i++){
        const row:number = ( i / png.width ) >> 0;
        const col:number = i % png.width;
        if( rgba[i].a < limit )
            continue;

        left = col < left ? col : left;
        top = row < top ? row : top;
        right = col > right ? col : right;
        bottom = row > bottom ? row : bottom;
    }
    
    return {x:left,y:top,width:right-left,height:bottom-top};
}
  