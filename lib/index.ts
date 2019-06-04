#!/usr/bin/env node

import * as fs from "fs";
import {UserArgs} from './core/args/UserArgs';
import { ImageLoader } from "./core/loader/ImageLoader";
import { Image } from "canvas/types";

const args:UserArgs = new UserArgs();
const loader:ImageLoader = new ImageLoader();

if( !fs.existsSync(args.directory)){
    console.log("'",args.directory, "' is not a valid directory");
    process.exit(1);
}

// loader.load(args.directory).then(
//     (images:Image[]) => {
//         console.log(images);
//     }
// )


