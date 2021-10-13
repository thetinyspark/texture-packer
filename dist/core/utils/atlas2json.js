"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atlasesToJSON = void 0;
function atlasesToJSON(atlases) {
    var result = [];
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
        result.push(data);
    }
    return result;
}
exports.atlasesToJSON = atlasesToJSON;
