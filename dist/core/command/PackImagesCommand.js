"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var ioc_1 = require("../config/ioc");
// import { atlasesToJSON } from "../utils/atlas2json";
var PackImagesCommand = /** @class */ (function () {
    function PackImagesCommand() {
    }
    PackImagesCommand.prototype.execute = function (notification) {
        var packerService = ioc_1.container.resolve(app_constants_1.PACKER_SERVICE);
        var appProxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        var textures = appProxy.getTextures();
        // TODO test: 
        // refactor and test PackerService
        // make Atlas anemic
        // make Zone  anemic
        // put atlasesToJson into a dedicated service (or just use it into a specific command)
        // const atlases = packerService.pack(textures);
        // const jsons = atlasesToJSON(atlases);
        console.log(textures);
    };
    return PackImagesCommand;
}());
exports.default = PackImagesCommand;
