"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dumper = void 0;
const fs = require("fs");
class Dumper {
    atlasesToJSON(atlases) {
        for (let i = 0; i < atlases.length; i++) {
            let data = JSON.stringify(atlases[i], (key, value) => {
                if (key == "img") {
                    let img = value;
                    let filename = img.src.toString();
                    filename = filename.substr(filename.lastIndexOf("/") + 1);
                    filename = filename.substr(filename.lastIndexOf("\\") + 1);
                    return filename;
                }
                return value;
            });
            fs.writeFileSync("atlas_" + i + ".json", data);
        }
    }
}
exports.Dumper = Dumper;
