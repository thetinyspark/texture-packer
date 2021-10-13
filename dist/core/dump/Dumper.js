"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dumper = void 0;
var fs = require("fs");
var Dumper = /** @class */ (function () {
    function Dumper() {
    }
    Dumper.prototype.atlasesToJSON = function (atlases) {
        for (var i = 0; i < atlases.length; i++) {
            var data = JSON.stringify(atlases[i], function (key, value) {
                if (key == "img") {
                    var img = value;
                    var filename = img.src.toString();
                    filename = filename.substr(filename.lastIndexOf("/") + 1);
                    filename = filename.substr(filename.lastIndexOf("\\") + 1);
                    return filename;
                }
                return value;
            });
            fs.writeFileSync("atlas_" + i + ".json", data);
        }
    };
    return Dumper;
}());
exports.Dumper = Dumper;
