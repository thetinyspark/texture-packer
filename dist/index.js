#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserArgs_1 = require("./core/args/UserArgs");
const ImageLoader_1 = require("./core/loader/ImageLoader");
const Packer_1 = require("./core/packer/Packer");
const Drawer_1 = require("./core/drawing/Drawer");
const Dumper_1 = require("./core/dump/Dumper");
const args = new UserArgs_1.UserArgs();
const loader = new ImageLoader_1.ImageLoader();
const packer = new Packer_1.Packer();
const drawer = new Drawer_1.Drawer();
const dumper = new Dumper_1.Dumper();
if (!fs.existsSync(args.directory)) {
    console.log("'", args.directory, "' is not a valid directory");
    process.exit(1);
}
loader.load(args.directory).then((images) => {
    let atlases = packer.pack(images, args.size, args.size);
    drawer.draw(atlases);
    dumper.atlasesToJSON(atlases);
}).catch((error) => {
    console.log(error);
});
