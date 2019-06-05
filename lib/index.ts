#!/usr/bin/env node

import * as fs from "fs";
import {UserArgs} from './core/args/UserArgs';
import { ImageLoader } from "./core/loader/ImageLoader";
import { Image } from "canvas/types";
import { Packer } from "./core/packer/Packer";
import { Zone } from "./core/packer/Zone";
import { Atlas } from "./core/packer/Atlas";

const args:UserArgs = new UserArgs();
const loader:ImageLoader = new ImageLoader();
const packer:Packer = new Packer();

if( !fs.existsSync(args.directory)){
    console.log("'",args.directory, "' is not a valid directory");
    process.exit(1);
}

loader.load(args.directory).then(
    (images:Image[]) => {
        let atlases:Atlas[] = packer.pack(images, args.size, args.size);
        console.log(atlases);
    }
)


