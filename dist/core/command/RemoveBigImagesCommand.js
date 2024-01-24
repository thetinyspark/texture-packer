"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_constants_1 = require("../config/app.constants");
const facade_1 = require("../config/facade");
class RemoveBigImagesCommand {
    execute(notification) {
        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        const images = proxy.getImagesInfo();
        const size = proxy.getAtlasSize();
        this.filter(images, size, proxy);
        facade_1.facade.sendNotification(app_constants_1.PACK_IMAGES);
    }
    filter(images, size, proxy) {
        const filtered = images.filter((info) => {
            if (info.width > size || info.height > size) {
                facade_1.facade.sendNotification(app_constants_1.LOG_REMOVE_BIG_IMAGE, info);
                return false;
            }
            else {
                return true;
            }
        });
        proxy.setImagesInfo(filtered);
    }
}
exports.default = RemoveBigImagesCommand;
