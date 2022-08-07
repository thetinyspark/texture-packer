"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var ioc_1 = require("../config/ioc");
var Atlas_1 = require("../model/vo/Atlas");
var ExportCommand = /** @class */ (function () {
    function ExportCommand() {
    }
    ExportCommand.prototype.execute = function (notification) {
        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        var outputDir = proxy.getOuputDir();
        var atlases = proxy.getAtlases();
        var service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);
        var drawer = ioc_1.container.resolve(app_constants_1.DRAWING_SERVICE);
        var service2 = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);
        var debug = parseInt(service2.getUserArg('debug')) === 1;
        atlases.forEach(function (currentAtlas, index) {
            var name = 'atlas_' + index;
            var jsonName = name + '.json';
            var pngName = name + '.png';
            service.writeJSON(Atlas_1.Atlas.toJSON(currentAtlas), outputDir + '/' + jsonName);
            service.writeImage(drawer.drawAtlas(currentAtlas, debug), outputDir + '/' + pngName);
        });
    };
    return ExportCommand;
}());
exports.default = ExportCommand;
