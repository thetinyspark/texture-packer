#!/usr/bin/env node

import * as fs from "fs";
import {UserArgs} from './core/args/UserArgs';

const args:UserArgs = new UserArgs();

if( !fs.existsSync(args.directory)){
    console.log("'",args.directory, "' is not a valid directory");
    process.exit(1);
}

let filenames:string[]  = fs.readdirSync(args.directory);
console.log(filenames);
