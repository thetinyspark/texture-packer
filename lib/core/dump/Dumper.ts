import { Atlas } from "../packer/Atlas";
import * as fs from "fs";
import { Image } from "canvas/types";

export class Dumper {


    public atlasesToJSON(atlases: Atlas[]): void {
        for (let i: number = 0; i < atlases.length; i++) {
            let data:string = JSON.stringify( 
                atlases[i], 
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
            fs.writeFileSync("atlas_" + i + ".json", data );
        }
    }
}