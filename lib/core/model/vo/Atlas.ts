import { Zone } from "./Zone";
import { Image } from "canvas/types";

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
                img: null
            }
        ];
    }

    public splitZone(zone: Zone, width: number, height: number): void {

        let zoneA: Zone = { x: 0, y: 0, width: 0, height: 0, img: null };
        let zoneB: Zone = { x: 0, y: 0, width: 0, height: 0, img: null };
        let img: Image = zone.img;

        if (img.naturalWidth > img.naturalHeight) {

            zoneA.x = zone.x + img.naturalWidth;
            zoneA.y = zone.y;
            zoneA.width = zone.width - img.naturalWidth;
            zoneA.height = img.naturalHeight;

            zoneB.x = zone.x;
            zoneB.y = zone.y + img.naturalHeight;
            zoneB.width = zone.width;
            zoneB.height = zone.height - img.naturalHeight;
        }
        else {
            zoneA.x = zone.x;
            zoneA.y = zone.y + img.naturalHeight;
            zoneA.width = img.naturalWidth;
            zoneA.height = zone.height - img.naturalHeight;

            zoneB.x = zone.x + img.naturalWidth;
            zoneB.y = zone.y;
            zoneB.width = zone.width - img.naturalWidth;
            zoneB.height = zone.height;
        }

        if (zoneA.width > 0 && zoneA.height > 0)
            this.zones.push(zoneA);

        if (zoneB.width > 0 && zoneB.height > 0)
            this.zones.push(zoneB);

        zone.width = img.naturalWidth;
        zone.height = img.naturalHeight;
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
        while( --i > -1 ){
            if( this.zones[i].img == null ){
                this.zones.splice(i, 1);
            }
        }
    }

    private sortZones(a: Zone, b: Zone): number {
        let area1: number = a.width * a.height;
        let area2: number = b.width * b.height;

        return (area1 < area2) ? -1 : 1;
    }

    public static toJSON(atlas:Atlas):string{
        return JSON.stringify( 
            atlas, 
            (key:string, value:any) => { 
                
                if( key == "img"){
                    let img:Image = value as Image;
                    let filename:string = img.src.toString();
                    filename = filename.substr(filename.lastIndexOf("/") + 1 );
                    filename = filename.substr(filename.lastIndexOf("\\") + 1 );
                    return filename;
                }

                return value;
            }
        );
    }

}