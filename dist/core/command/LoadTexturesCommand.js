"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const app_constants_1 = require("../config/app.constants");
const facade_1 = require("../config/facade");
const ioc_1 = require("../config/ioc");
const ImageInfo_1 = require("../model/vo/ImageInfo");
const LoadingBar_1 = require("../view/LoadingBar");
class LoadTextureCommand {
    execute(notification) {
        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        const sourceDir = proxy.getSourceDir();
        const service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);
        const service2 = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);
        const optimize = parseInt(service2.getUserArg('optimize')) === 1;
        if (!service.fileExists(sourceDir)) {
            console.log("non existing source dir:", sourceDir);
            return;
        }
        const images = service.getImagesInDir(sourceDir);
        this._loadAndStore(images, proxy, optimize).then(() => {
            facade_1.facade.sendNotification(app_constants_1.REMOVE_BIG_IMAGES);
        });
    }
    _loadAndStore(paths, proxy, optimize = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const bar = new LoadingBar_1.default();
            bar.start();
            const infos = yield new Promise((resolve, reject) => {
                const infos = [];
                let counter = 0;
                let max = paths.length;
                let img = null;
                const loadNext = () => __awaiter(this, void 0, void 0, function* () {
                    if (paths.length === 0) {
                        resolve(infos);
                        return;
                    }
                    img = yield (0, canvas_1.loadImage)(paths.shift());
                    infos.push(new ImageInfo_1.ImageInfo(img, optimize));
                    counter++;
                    const percent = counter / max * 100;
                    bar.progress(percent);
                    loadNext();
                });
                loadNext();
            });
            proxy.setImagesInfo(infos);
        });
    }
}
exports.default = LoadTextureCommand;
