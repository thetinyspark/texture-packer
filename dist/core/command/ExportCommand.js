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
const app_constants_1 = require("../config/app.constants");
const facade_1 = require("../config/facade");
const ioc_1 = require("../config/ioc");
const Atlas_1 = require("../model/vo/Atlas");
class ExportCommand {
    constructor() {
        this._atlases = [];
    }
    execute(notification) {
        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        const atlases = proxy.getAtlases();
        this._atlases = atlases;
        this.exportNext();
    }
    exportNext() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._atlases.length > 0) {
                const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
                const outputDir = proxy.getOuputDir();
                const service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);
                const service2 = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);
                const debug = parseInt(service2.getUserArg('debug')) === 1;
                const drawer = ioc_1.container.resolve(app_constants_1.DRAWING_SERVICE);
                const currentAtlas = this._atlases.shift();
                const scene = yield drawer.drawAtlas(currentAtlas, debug);
                const name = 'atlas_' + this._atlases.length;
                const jsonName = name + '.json';
                const pngName = name + '.png';
                service.writeJSON(Atlas_1.Atlas.toJSON(currentAtlas), outputDir + '/' + jsonName);
                service.writeImage(scene, outputDir + '/' + pngName);
                this.exportNext();
            }
        });
    }
}
exports.default = ExportCommand;
