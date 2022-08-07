import { Zone } from "./Zone";
import { Canvas, Image } from "canvas/types";
import { Rectangle } from "@thetinyspark/moocaccino-barista";

export class Atlas{
    
    public zones:Zone[];
    public width:number;
    public height:number;

    constructor( width:number, height:number ){

        this.width = width;
        this.height = height;
        this.zones = [
            {
                x: 0, 
                y: 0, 
                width: width, 
                height: height, 
                img: null, 
                offsetX: 0,
                offsetY: 0,
                originalWidth: 0,
                originalHeight: 0,
                src:""
            }
        ];
    }

    public splitZone(zone: Zone): void {

        let zoneA: Zone = { x: 0, y: 0, width: 0, height: 0, img: null, offsetX: 0,offsetY: 0,originalWidth: 0,originalHeight: 0, src:"" };
        let zoneB: Zone = { x: 0, y: 0, width: 0, height: 0, img: null, offsetX: 0,offsetY: 0,originalWidth: 0,originalHeight: 0, src:"" };
        let img:Image = zone.img as Image;

        if (img.width > img.height) {

            zoneA.x = zone.x + img.width;
            zoneA.y = zone.y;
            zoneA.width = zone.width - img.width;
            zoneA.height = img.height;

            zoneB.x = zone.x;
            zoneB.y = zone.y + img.height;
            zoneB.width = zone.width;
            zoneB.height = zone.height - img.height;
        }
        else {
            zoneA.x = zone.x;
            zoneA.y = zone.y + img.height;
            zoneA.width = img.width;
            zoneA.height = zone.height - img.height;

            zoneB.x = zone.x + img.width;
            zoneB.y = zone.y;
            zoneB.width = zone.width - img.width;
            zoneB.height = zone.height;
        }

        if (zoneA.width > 0 && zoneA.height > 0)
            this.zones.push(zoneA);

        if (zoneB.width > 0 && zoneB.height > 0)
            this.zones.push(zoneB);

        zone.width              = img.width;
        zone.height             = img.height;
    }

    public getZone(width: number = 0, height: number = 0): Zone {

        // we sort the zones 
        this.zones = this.zones.sort(this.sortZones);
        let i: number = 0;

        // then we loop other the zones array in order to grab the most accruate one
        for (; i < this.zones.length; i++) {
            if (width <= this.zones[i].width && height <= this.zones[i].height && this.zones[i].img == null) {
                return this.zones[i];
            }
        }

        return null;

    }

    public removeEmptyZones():void{
        let i:number = this.zones.length;
        const empty = this.zones.filter( zone => zone.img === null );
        while( empty.length > 0 ){
            const cur = empty.shift();
            const pos = this.zones.indexOf(cur);
            this.zones.splice(pos, 1);
        }
        // while( --i > -1 ){
        //     if( this.zones[i].img == null ){
        //         this.zones.splice(i, 1);
        //     }
        // }
    }

    private sortZones(a: Zone, b: Zone): number {
        let area1: number = a.width * a.height;
        let area2: number = b.width * b.height;

        return (area1 < area2) ? -1 : 1;
    }

    public static toJSON(atlas:Atlas):string{
        const output = {
            width: atlas.width,
            height: atlas.height,
            zones: atlas.zones.map( 
                (zone:Zone)=>{
                    let filename:string = zone.src.toString();
                    filename = filename.substr(filename.lastIndexOf("/") + 1 );
                    filename = filename.substr(filename.lastIndexOf("\\") + 1 );
                    return {
                        x: zone.x,
                        y: zone.y,
                        offsetX: zone.offsetX,
                        offsetY: zone.offsetY,
                        originalWidth: zone.originalWidth,
                        originalHeight: zone.originalHeight,
                        width: zone.width,
                        height: zone.height,
                        id: filename.substr(0,filename.lastIndexOf(".")), 
                        img: filename, 
                    }
                }
            )
        }
        return JSON.stringify(output);
    }

}