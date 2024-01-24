"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class FileService {
    mkDir(path) {
        fs.mkdirSync(path, { recursive: true });
    }
    rmDir(path) {
        if (!this.fileExists(path))
            return;
        const paths = this.readDir(path);
        const files = this.keepOnlyFiles(paths);
        const dirs = this.keepOnlyDirs(paths);
        files.forEach(fs.unlinkSync);
        dirs.forEach((value) => {
            this.rmDir(value);
        });
        fs.rmdirSync(path);
    }
    readDir(path, recursive = false, result = []) {
        const files = fs.readdirSync(path);
        files.forEach((filename) => {
            const filepath = path + filename;
            const stats = fs.statSync(filepath);
            if (stats.isDirectory()) {
                this.readDir(filepath + "/", recursive, result);
            }
            result.push(filepath);
        });
        return result;
    }
    getImagesInDir(directory) {
        const extensions = ['.png', '.jpg', '.jpeg'];
        const datas = this.readDir(directory, true);
        const files = this.keepOnlyFiles(datas);
        return files.filter((value) => {
            const ext = path.extname(value);
            return extensions.includes(ext);
        });
    }
    keepOnlyFiles(filepaths) {
        return filepaths.filter((value) => {
            return fs.statSync(value).isFile();
        });
    }
    keepOnlyDirs(filepaths) {
        return filepaths.filter((value) => {
            return fs.statSync(value).isDirectory();
        });
    }
    fileExists(filepath) {
        return fs.existsSync(filepath);
    }
    writeJSON(data, filepath) {
        fs.writeFileSync(filepath, data);
    }
    writeImage(canvas, filepath) {
        const buffer = canvas.toBuffer();
        fs.writeFileSync(filepath, buffer);
    }
    removeFile(filepath) {
        fs.unlinkSync(filepath);
    }
}
exports.default = FileService;
