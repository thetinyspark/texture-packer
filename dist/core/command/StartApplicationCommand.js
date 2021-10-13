"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var ioc_1 = require("../config/ioc");
var StartApplicationCommand = /** @class */ (function () {
    function StartApplicationCommand() {
    }
    StartApplicationCommand.prototype.execute = function (notification) {
        var appProxy = ioc_1.container.resolve(app_constants_1.APPLICATION_PROXY_TOKEN);
        facade_1.facade.registerProxy(app_constants_1.APPLICATION_PROXY_TOKEN, appProxy);
        facade_1.facade.sendNotification(app_constants_1.PARSE_USER_ARGS);
    };
    return StartApplicationCommand;
}());
exports.default = StartApplicationCommand;
