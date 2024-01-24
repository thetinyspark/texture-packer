"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
const ExportCommand_1 = require("../command/ExportCommand");
const LoadTexturesCommand_1 = require("../command/LoadTexturesCommand");
const PackImagesCommand_1 = require("../command/PackImagesCommand");
const ParseUserArgsCommand_1 = require("../command/ParseUserArgsCommand");
const RemoveBigImagesCommand_1 = require("../command/RemoveBigImagesCommand");
const StartApplicationCommand_1 = require("../command/StartApplicationCommand");
const AppProxy_1 = require("../model/proxy/AppProxy");
const DrawService_1 = require("../service/DrawService");
const FileService_1 = require("../service/FileService");
const PackerService_1 = require("../service/PackerService");
const UserArgsService_1 = require("../service/UserArgsService");
const AppMediator_1 = require("../view/AppMediator");
const app_constants_1 = require("./app.constants");
exports.container = new coffe_maker_1.Container();
// services
exports.container.register(app_constants_1.FILE_SERVICE_TOKEN, () => { return new FileService_1.default(); }, true);
exports.container.register(app_constants_1.USER_ARGS_SERVICE, () => { return new UserArgsService_1.default(); }, true);
exports.container.register(app_constants_1.PACKER_SERVICE, () => { return new PackerService_1.PackerService(); }, true);
exports.container.register(app_constants_1.DRAWING_SERVICE, () => { return new DrawService_1.default(); }, true);
// proxies
exports.container.register(app_constants_1.APPLICATION_PROXY_TOKEN, () => { return new AppProxy_1.default(); }, true);
// commands
exports.container.register(app_constants_1.START_APPLICATION, () => { return new StartApplicationCommand_1.default(); });
exports.container.register(app_constants_1.PARSE_USER_ARGS, () => { return new ParseUserArgsCommand_1.default(); });
exports.container.register(app_constants_1.LOAD_TEXTURES, () => { return new LoadTexturesCommand_1.default(); });
exports.container.register(app_constants_1.PACK_IMAGES, () => { return new PackImagesCommand_1.default(); });
exports.container.register(app_constants_1.REMOVE_BIG_IMAGES, () => { return new RemoveBigImagesCommand_1.default(); });
exports.container.register(app_constants_1.EXPORT_COMMAND, () => { return new ExportCommand_1.default(); });
//mediator
exports.container.register(app_constants_1.APP_MEDIATOR, () => { return new AppMediator_1.default(); }, true);
