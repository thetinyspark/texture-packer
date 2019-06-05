import { loadImage, Image } from "canvas";
import * as fs from "fs";
export class ImageLoader {


    constructor() {}

    public load(dir: string): Promise<Image[]> {
        let promises: Promise<Image>[] = [];
        let files = fs.readdirSync(dir);

        while (files.length > 0) {

            let filename: string = files.shift() as string;
            let ext: string = filename.substr(filename.lastIndexOf("."));
            let extensions: string[] = [".png", ".jpeg", ".jpg"];

            if (extensions.indexOf(ext) == -1) {
                continue;
            }
            
            promises.push( loadImage(dir + "/" + filename) );

        }

        return Promise.all(promises);
    }
}