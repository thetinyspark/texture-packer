"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var ioc_1 = require("../config/ioc");
var PackImagesCommand = /** @class */ (function () {
    function PackImagesCommand() {
    }
    PackImagesCommand.prototype.execute = function (notification) {
        var packerService = ioc_1.container.resolve(app_constants_1.PACKER_SERVICE);
        var appProxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        var textures = appProxy.getTextures();
        var size = appProxy.getAtlasSize();
        var atlases = packerService.pack(textures, size, size);
        appProxy.setAtlases(atlases);
        facade_1.facade.sendNotification(app_constants_1.EXPORT_COMMAND);
    };
    return PackImagesCommand;
}());
exports.default = PackImagesCommand;
