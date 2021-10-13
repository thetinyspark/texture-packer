import { Image } from "canvas";
import { Atlas } from "../model/vo/Atlas";

export function atlasesToJSON(atlases: Atlas[]): string[] {
    const result:string[] = [];
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

        result.push(data);
    }

    return result;
}