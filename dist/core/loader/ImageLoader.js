"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLoader = void 0;
var canvas_1 = require("canvas");
var fs = require("fs");
var ImageLoader = /** @class */ (function () {
    function ImageLoader() {
    }
    ImageLoader.prototype.load = function (dir) {
        var promises = [];
        var files = fs.readdirSync(dir);
        while (files.length > 0) {
            var filename = files.shift();
            var ext = filename.substr(filename.lastIndexOf("."));
            var extensions = [".png", ".jpeg", ".jpg"];
            if (extensions.indexOf(ext) == -1) {
                continue;
            }
            promises.push((0, canvas_1.loadImage)(dir + "/" + filename));
        }
        return Promise.all(promises);
    };
    return ImageLoader;
}());
exports.ImageLoader = ImageLoader;
