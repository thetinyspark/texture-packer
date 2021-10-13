"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var coffe_maker_1 = require("@thetinyspark/coffe-maker");
var LoadTexturesCommand_1 = require("../command/LoadTexturesCommand");
var PackImagesCommand_1 = require("../command/PackImagesCommand");
var ParseUserArgsCommand_1 = require("../command/ParseUserArgsCommand");
var StartApplicationCommand_1 = require("../command/StartApplicationCommand");
var AppProxy_1 = require("../model/proxy/AppProxy");
var FileService_1 = require("../service/FileService");
var PackerService_1 = require("../service/PackerService");
var UserArgsService_1 = require("../service/UserArgsService");
var app_constants_1 = require("./app.constants");
exports.container = new coffe_maker_1.Container();
// services
exports.container.register(app_constants_1.FILE_SERVICE_TOKEN, function () { return new FileService_1.default(); }, true);
exports.container.register(app_constants_1.USER_ARGS_SERVICE, function () { return new UserArgsService_1.default(); }, true);
exports.container.register(app_constants_1.PACKER_SERVICE, function () { return new PackerService_1.PackerService(); }, true);
// proxies
exports.container.register(app_constants_1.APPLICATION_PROXY_TOKEN, function () { return new AppProxy_1.default(); }, true);
// comands
exports.container.register(app_constants_1.START_APPLICATION, function () { return new StartApplicationCommand_1.default(); });
exports.container.register(app_constants_1.PARSE_USER_ARGS, function () { return new ParseUserArgsCommand_1.default(); });
exports.container.register(app_constants_1.LOAD_TEXTURES, function () { return new LoadTexturesCommand_1.default(); });
exports.container.register(app_constants_1.PACK_IMAGES, function () { return new PackImagesCommand_1.default(); });
