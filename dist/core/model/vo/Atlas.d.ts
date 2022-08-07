import { Zone } from "./Zone";
export declare class Atlas {
    zones: Zone[];
    width: number;
    height: number;
    constructor(width: number, height: number);
    splitZone(zone: Zone): void;
    getZone(width?: number, height?: number): Zone;
    removeEmptyZones(): void;
    private sortZones;
    static toJSON(atlas: Atlas): string;
}
