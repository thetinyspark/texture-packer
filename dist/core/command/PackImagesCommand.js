"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_constants_1 = require("../config/app.constants");
const facade_1 = require("../config/facade");
const ioc_1 = require("../config/ioc");
class PackImagesCommand {
    execute(notification) {
        const packerService = ioc_1.container.resolve(app_constants_1.PACKER_SERVICE);
        const appProxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        const infos = appProxy.getImagesInfo();
        const size = appProxy.getAtlasSize();
        const atlases = packerService.pack(infos, size, size);
        appProxy.setAtlases(atlases);
        facade_1.facade.sendNotification(app_constants_1.EXPORT_COMMAND);
    }
}
exports.default = PackImagesCommand;
