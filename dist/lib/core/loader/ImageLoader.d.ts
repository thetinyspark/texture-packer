import { Image } from "canvas";
export declare class ImageLoader {
    constructor();
    load(dir: string): Promise<Image[]>;
}
