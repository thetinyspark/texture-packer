"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var ioc_1 = require("../config/ioc");
var nextPowerOf2_1 = require("../utils/nextPowerOf2");
var ParseUserArgsCommand = /** @class */ (function () {
    function ParseUserArgsCommand() {
    }
    ParseUserArgsCommand.prototype.execute = function (notification) {
        var service = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);
        var size = service.getUserArg('size');
        var outputDir = service.getUserArg('output');
        var sourceDir = service.getUserArg('dir');
        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        proxy.setUserArgs(sourceDir, outputDir, (0, nextPowerOf2_1.default)(size));
        facade_1.facade.sendNotification(app_constants_1.LOAD_TEXTURES);
    };
    return ParseUserArgsCommand;
}());
exports.default = ParseUserArgsCommand;
