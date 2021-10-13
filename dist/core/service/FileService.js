"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.prototype.mkDir = function (path) {
        fs.mkdirSync(path, { recursive: true });
    };
    FileService.prototype.rmDir = function (path) {
        var _this = this;
        if (!this.fileExists(path))
            return;
        var paths = this.readDir(path);
        var files = this.keepOnlyFiles(paths);
        var dirs = this.keepOnlyDirs(paths);
        files.forEach(fs.unlinkSync);
        dirs.forEach(function (value) {
            _this.rmDir(value);
        });
        fs.rmdirSync(path);
    };
    FileService.prototype.readDir = function (path, recursive, result) {
        var _this = this;
        if (recursive === void 0) { recursive = false; }
        if (result === void 0) { result = []; }
        var files = fs.readdirSync(path);
        files.forEach(function (filename) {
            var filepath = path + filename;
            var stats = fs.statSync(filepath);
            if (stats.isDirectory()) {
                _this.readDir(filepath + "/", recursive, result);
            }
            result.push(filepath);
        });
        return result;
    };
    FileService.prototype.getImagesInDir = function (directory) {
        var extensions = ['.png', '.jpg', '.jpeg'];
        var datas = this.readDir(directory, true);
        var files = this.keepOnlyFiles(datas);
        return files.filter(function (value) {
            var ext = path.extname(value);
            return extensions.includes(ext);
        });
    };
    FileService.prototype.keepOnlyFiles = function (filepaths) {
        return filepaths.filter(function (value) {
            return fs.statSync(value).isFile();
        });
    };
    FileService.prototype.keepOnlyDirs = function (filepaths) {
        return filepaths.filter(function (value) {
            return fs.statSync(value).isDirectory();
        });
    };
    FileService.prototype.fileExists = function (filepath) {
        return fs.existsSync(filepath);
    };
    FileService.prototype.writeJSON = function (data, filepath) {
        fs.writeFileSync(filepath, data);
    };
    FileService.prototype.writeImage = function (canvas, filepath) {
        var buffer = canvas.toBuffer();
        fs.writeFileSync(filepath, buffer);
    };
    FileService.prototype.removeFile = function (filepath) {
        fs.unlinkSync(filepath);
    };
    return FileService;
}());
exports.default = FileService;
