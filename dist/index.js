#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserArgs_1 = require("./core/args/UserArgs");
const ImageLoader_1 = require("./core/loader/ImageLoader");
const Packer_1 = require("./core/packer/Packer");
const args = new UserArgs_1.UserArgs();
const loader = new ImageLoader_1.ImageLoader();
const packer = new Packer_1.Packer();
if (!fs.existsSync(args.directory)) {
    console.log("'", args.directory, "' is not a valid directory");
    process.exit(1);
}
loader.load(args.directory).then((images) => {
    let atlases = packer.pack(images, args.size, args.size);
    console.log(JSON.stringify(atlases));
});
