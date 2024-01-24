"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_constants_1 = require("../config/app.constants");
const facade_1 = require("../config/facade");
const ioc_1 = require("../config/ioc");
const nextPowerOf2_1 = require("../utils/nextPowerOf2");
class ParseUserArgsCommand {
    execute(notification) {
        const service = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);
        const size = service.getUserArg('size');
        const outputDir = service.getUserArg('output');
        const sourceDir = service.getUserArg('dir');
        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        proxy.setUserArgs(sourceDir, outputDir, (0, nextPowerOf2_1.default)(size));
        facade_1.facade.sendNotification(app_constants_1.LOAD_TEXTURES);
    }
}
exports.default = ParseUserArgsCommand;
