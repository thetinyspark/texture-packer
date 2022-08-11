"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var RemoveBigImagesCommand = /** @class */ (function () {
    function RemoveBigImagesCommand() {
    }
    RemoveBigImagesCommand.prototype.execute = function (notification) {
        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        var images = proxy.getImagesInfo();
        var size = proxy.getAtlasSize();
        this.filter(images, size, proxy);
        facade_1.facade.sendNotification(app_constants_1.PACK_IMAGES);
    };
    RemoveBigImagesCommand.prototype.filter = function (images, size, proxy) {
        var filtered = images.filter(function (info) {
            if (info.width > size || info.height > size) {
                facade_1.facade.sendNotification(app_constants_1.LOG_REMOVE_BIG_IMAGE, info);
                return false;
            }
            else {
                return true;
            }
        });
        proxy.setImagesInfo(filtered);
    };
    return RemoveBigImagesCommand;
}());
exports.default = RemoveBigImagesCommand;
