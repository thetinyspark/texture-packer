"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class FileWriterService {
    fileExists(filepath) {
        console.log(fs);
        return fs.existsSync(filepath);
    }
    writeJSON(data, filepath) {
    }
    writeImage(canvas, filepath) {
    }
}
exports.default = FileWriterService;
