import { Zone } from "./Zone";
export declare class Atlas {
    zones: Zone[];
    width: number;
    height: number;
    constructor(width: number, height: number);
    splitZone(zone: Zone, width: number, height: number): void;
    getZone(width?: number, height?: number): Zone;
    private sortZones;
}
