"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_REMOVE_BIG_IMAGE = exports.APPLICATION_PROXY_TOKEN = exports.APP_MEDIATOR = exports.EXPORT_COMMAND = exports.REMOVE_BIG_IMAGES = exports.PACK_IMAGES = exports.LOAD_TEXTURES = exports.PARSE_USER_ARGS = exports.START_APPLICATION = exports.APP_MODEL_TOKEN = exports.DRAWING_SERVICE = exports.PACKER_SERVICE = exports.USER_ARGS_SERVICE = exports.FILE_SERVICE_TOKEN = void 0;
// services
exports.FILE_SERVICE_TOKEN = 'service:file';
exports.USER_ARGS_SERVICE = "service:user-args";
exports.PACKER_SERVICE = "service:packer-service";
exports.DRAWING_SERVICE = "service:drawing-service";
// model 
exports.APP_MODEL_TOKEN = 'model:app';
// commands
exports.START_APPLICATION = 'START_APP';
exports.PARSE_USER_ARGS = 'PARSE_USER_ARGS';
exports.LOAD_TEXTURES = 'LOAD_TEXTURES';
exports.PACK_IMAGES = 'PACK_IMAGES';
exports.REMOVE_BIG_IMAGES = 'REMOVE_BIG_IMAGES';
exports.EXPORT_COMMAND = 'EXPORT_COMMAND';
// view 
exports.APP_MEDIATOR = 'app:mediator';
// proxies
exports.APPLICATION_PROXY_TOKEN = 'APP_PROXY';
// custom event 
exports.LOG_REMOVE_BIG_IMAGE = 'log_remove_big_image';
