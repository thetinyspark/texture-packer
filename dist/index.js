#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserArgs_1 = require("./core/args/UserArgs");
const ImageLoader_1 = require("./core/loader/ImageLoader");
const args = new UserArgs_1.UserArgs();
const loader = new ImageLoader_1.ImageLoader();
if (!fs.existsSync(args.directory)) {
    console.log("'", args.directory, "' is not a valid directory");
    process.exit(1);
}
loader.load(args.directory).then((images) => {
    console.log(images);
});
