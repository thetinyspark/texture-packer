import { Rectangle } from "@thetinyspark/moocaccino-barista";
import { Canvas, createCanvas, Image, loadImage } from "canvas";

/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
 export default class CanvasUtils{
    public static create(width:number = 1, height:number = 1):Canvas{
        const canvas = createCanvas(width,height);
        canvas.width = width; 
        canvas.height = height;
        return canvas;
    }

    public static copyImg(canvas:Canvas, img:Image):void{
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const context = canvas.getContext("2d"); 
        context.clearRect(0,0,canvas.width,canvas.height); 
        context.drawImage(img,0,0, canvas.width, canvas.height);
    }

    public static createFromImage(img:Image):Canvas{
        const canvas = CanvasUtils.create(img.naturalWidth, img.naturalHeight);
        const context = canvas.getContext("2d");
        context.drawImage(img,0,0, img.naturalWidth, img.naturalHeight); 
        return canvas;
    }

    public static canvasToImg(canvas:Canvas):Image{
        const img = new Image(); 
        img.width = canvas.width;
        img.height = canvas.height;
        img.src = canvas.toDataURL("image/png");
        return img;
    }

    public static crop(source:Canvas, bounds:Rectangle):Canvas{
        const canvas = CanvasUtils.create(bounds.width, bounds.height); 
        const context = canvas.getContext("2d");
        context.save();
        context.translate(-bounds.x, -bounds.y); 
        context.drawImage(source,0,0);
        context.restore();
        return canvas;
    }

    public static fillRect(canvas:Canvas,color:string, x:number, y:number, width:number, height:number){
        const context = canvas.getContext("2d"); 
        context.save();
        context.beginPath();
        context.fillStyle = color; 
        context.translate(x,y);
        context.fillRect(0,0,width, height); 
        context.fill();
        context.closePath();
        context.restore();
    }

    public static getCanvasPixels(canvas:Canvas):Uint8ClampedArray{
        // const offscreen = CanvasUtils.create(canvas.width, canvas.height); 
        // offscreen.getContext("2d").drawImage(canvas, 0, 0); 
        // return offscreen.getContext("2d").getImageData(0,0,offscreen.width, offscreen.height).data;
        const context = canvas.getContext("2d");
        return context.getImageData(0,0,canvas.width, canvas.height).data;
    }

    public static pixelsToAlphaMap(pixels:Uint8ClampedArray):number[]{
        const result = [];
        for( let i:number = 0; i < pixels.length; i+=4){
            result.push(pixels[i+3]);
        }
        return result;
    }

    public static pixelsToRGBA(pixels:Uint8ClampedArray):{r:number,g:number,b:number,a:number}[]{
        const result = [];
        for( let i:number = 0; i < pixels.length; i+=4){
            result.push(
                {
                    r: pixels[i],
                    g: pixels[i+1],
                    b: pixels[i+2],
                    a: pixels[i+3],
                }
            );
        }
        return result;
    }
    
    public static  getCanvasPixel(canvas:Canvas, x:number, y:number):number[]{
        const pixels = CanvasUtils.getCanvasPixels(canvas);
        const pos = Math.floor( y * canvas.width * 4 ) + (x*4);
        return [
            pixels[pos],
            pixels[pos+1],
            pixels[pos+2],
            pixels[pos+3],
        ]; 
    }
    
    public static canvasPixelToRGBA(pixelData: number[]):{r:number, g:number, b:number, a:number}{
        return {
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
            a: pixelData[3]
        }
    }

    public static pixelsAreTheSame(pixelsA:number[], pixelsB:number[]):boolean{
        if( pixelsA.length !== pixelsB.length )
            return false; 
    
        for( let i:number = 0; i < pixelsA.length; i++ ){
            if( pixelsA[i] !== pixelsB[i])
                return false;
        }

        return true;
    }
}