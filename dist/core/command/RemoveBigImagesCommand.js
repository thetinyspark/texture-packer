"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../config/app.constants");
var facade_1 = require("../config/facade");
var RemoveBigImagesCommand = /** @class */ (function () {
    function RemoveBigImagesCommand() {
    }
    RemoveBigImagesCommand.prototype.execute = function (notification) {
        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);
        var images = proxy.getTextures();
        var size = proxy.getAtlasSize();
        var filtered = images.filter(function (img) {
            if (img.width > size || img.height > size) {
                facade_1.facade.sendNotification(app_constants_1.LOG_REMOVE_BIG_IMAGE, img);
                return false;
            }
            else {
                return true;
            }
        });
        proxy.setTextures(filtered);
        facade_1.facade.sendNotification(app_constants_1.PACK_IMAGES);
    };
    return RemoveBigImagesCommand;
}());
exports.default = RemoveBigImagesCommand;
