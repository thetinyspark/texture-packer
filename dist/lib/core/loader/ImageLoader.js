"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLoader = void 0;
const canvas_1 = require("canvas");
const fs = require("fs");
class ImageLoader {
    constructor() { }
    load(dir) {
        let promises = [];
        let files = fs.readdirSync(dir);
        while (files.length > 0) {
            let filename = files.shift();
            let ext = filename.substr(filename.lastIndexOf("."));
            let extensions = [".png", ".jpeg", ".jpg"];
            if (extensions.indexOf(ext) == -1) {
                continue;
            }
            promises.push((0, canvas_1.loadImage)(dir + "/" + filename));
        }
        return Promise.all(promises);
    }
}
exports.ImageLoader = ImageLoader;
