/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/core/command/ExportCommand.js":
/*!********************************************!*\
  !*** ./dist/core/command/ExportCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nvar ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nvar Atlas_1 = __webpack_require__(/*! ../model/vo/Atlas */ \"./dist/core/model/vo/Atlas.js\");\r\nvar ExportCommand = /** @class */ (function () {\r\n    function ExportCommand() {\r\n    }\r\n    ExportCommand.prototype.execute = function (notification) {\r\n        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        var outputDir = proxy.getOuputDir();\r\n        var atlases = proxy.getAtlases();\r\n        var service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);\r\n        var drawer = ioc_1.container.resolve(app_constants_1.DRAWING_SERVICE);\r\n        var service2 = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);\r\n        var debug = parseInt(service2.getUserArg('debug')) === 1;\r\n        atlases.forEach(function (currentAtlas, index) {\r\n            var name = 'atlas_' + index;\r\n            var jsonName = name + '.json';\r\n            var pngName = name + '.png';\r\n            service.writeJSON(Atlas_1.Atlas.toJSON(currentAtlas), outputDir + '/' + jsonName);\r\n            service.writeImage(drawer.drawAtlas(currentAtlas, debug), outputDir + '/' + pngName);\r\n        });\r\n    };\r\n    return ExportCommand;\r\n}());\r\nexports[\"default\"] = ExportCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/ExportCommand.js?");

/***/ }),

/***/ "./dist/core/command/LoadTexturesCommand.js":
/*!**************************************************!*\
  !*** ./dist/core/command/LoadTexturesCommand.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar canvas_1 = __webpack_require__(/*! canvas */ \"canvas\");\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nvar ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nvar LoadTextureCommand = /** @class */ (function () {\r\n    function LoadTextureCommand() {\r\n    }\r\n    LoadTextureCommand.prototype.execute = function (notification) {\r\n        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        var sourceDir = proxy.getSourceDir();\r\n        var service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);\r\n        if (!service.fileExists(sourceDir)) {\r\n            console.log(\"non existing source dir:\", sourceDir);\r\n            return;\r\n        }\r\n        var images = service.getImagesInDir(sourceDir);\r\n        this._loadAndStore(images, proxy);\r\n    };\r\n    LoadTextureCommand.prototype._loadAndStore = function (paths, proxy) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var images;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this._load(paths)];\r\n                    case 1:\r\n                        images = _a.sent();\r\n                        proxy.setTextures(images);\r\n                        facade_1.facade.sendNotification(app_constants_1.REMOVE_BIG_IMAGES);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    LoadTextureCommand.prototype._load = function (paths) {\r\n        var promises = paths.map(function (path) {\r\n            return (0, canvas_1.loadImage)(path);\r\n        });\r\n        return Promise.all(promises);\r\n    };\r\n    return LoadTextureCommand;\r\n}());\r\nexports[\"default\"] = LoadTextureCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/LoadTexturesCommand.js?");

/***/ }),

/***/ "./dist/core/command/PackImagesCommand.js":
/*!************************************************!*\
  !*** ./dist/core/command/PackImagesCommand.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nvar ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nvar PackImagesCommand = /** @class */ (function () {\r\n    function PackImagesCommand() {\r\n    }\r\n    PackImagesCommand.prototype.execute = function (notification) {\r\n        var packerService = ioc_1.container.resolve(app_constants_1.PACKER_SERVICE);\r\n        var appProxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        var service = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);\r\n        var optimize = parseInt(service.getUserArg('optimize')) === 1;\r\n        var textures = appProxy.getTextures();\r\n        var size = appProxy.getAtlasSize();\r\n        var atlases = packerService.pack(textures, size, size, optimize);\r\n        appProxy.setAtlases(atlases);\r\n        facade_1.facade.sendNotification(app_constants_1.EXPORT_COMMAND);\r\n    };\r\n    return PackImagesCommand;\r\n}());\r\nexports[\"default\"] = PackImagesCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/PackImagesCommand.js?");

/***/ }),

/***/ "./dist/core/command/ParseUserArgsCommand.js":
/*!***************************************************!*\
  !*** ./dist/core/command/ParseUserArgsCommand.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nvar ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nvar nextPowerOf2_1 = __webpack_require__(/*! ../utils/nextPowerOf2 */ \"./dist/core/utils/nextPowerOf2.js\");\r\nvar ParseUserArgsCommand = /** @class */ (function () {\r\n    function ParseUserArgsCommand() {\r\n    }\r\n    ParseUserArgsCommand.prototype.execute = function (notification) {\r\n        var service = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);\r\n        var size = service.getUserArg('size');\r\n        var outputDir = service.getUserArg('output');\r\n        var sourceDir = service.getUserArg('dir');\r\n        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        proxy.setUserArgs(sourceDir, outputDir, (0, nextPowerOf2_1.default)(size));\r\n        facade_1.facade.sendNotification(app_constants_1.LOAD_TEXTURES);\r\n    };\r\n    return ParseUserArgsCommand;\r\n}());\r\nexports[\"default\"] = ParseUserArgsCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/ParseUserArgsCommand.js?");

/***/ }),

/***/ "./dist/core/command/RemoveBigImagesCommand.js":
/*!*****************************************************!*\
  !*** ./dist/core/command/RemoveBigImagesCommand.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nvar RemoveBigImagesCommand = /** @class */ (function () {\r\n    function RemoveBigImagesCommand() {\r\n    }\r\n    RemoveBigImagesCommand.prototype.execute = function (notification) {\r\n        var proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        var images = proxy.getTextures();\r\n        var size = proxy.getAtlasSize();\r\n        var filtered = images.filter(function (img) {\r\n            if (img.width > size || img.height > size) {\r\n                facade_1.facade.sendNotification(app_constants_1.LOG_REMOVE_BIG_IMAGE, img);\r\n                return false;\r\n            }\r\n            else {\r\n                return true;\r\n            }\r\n        });\r\n        proxy.setTextures(filtered);\r\n        facade_1.facade.sendNotification(app_constants_1.PACK_IMAGES);\r\n    };\r\n    return RemoveBigImagesCommand;\r\n}());\r\nexports[\"default\"] = RemoveBigImagesCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/RemoveBigImagesCommand.js?");

/***/ }),

/***/ "./dist/core/command/StartApplicationCommand.js":
/*!******************************************************!*\
  !*** ./dist/core/command/StartApplicationCommand.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nvar ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nvar StartApplicationCommand = /** @class */ (function () {\r\n    function StartApplicationCommand() {\r\n    }\r\n    StartApplicationCommand.prototype.execute = function (notification) {\r\n        var appProxy = ioc_1.container.resolve(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        var appMediator = ioc_1.container.resolve(app_constants_1.APP_MEDIATOR);\r\n        facade_1.facade.registerProxy(app_constants_1.APPLICATION_PROXY_TOKEN, appProxy);\r\n        facade_1.facade.registerProxy(app_constants_1.APP_MEDIATOR, appMediator);\r\n        appMediator.start();\r\n        facade_1.facade.sendNotification(app_constants_1.PARSE_USER_ARGS);\r\n    };\r\n    return StartApplicationCommand;\r\n}());\r\nexports[\"default\"] = StartApplicationCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/StartApplicationCommand.js?");

/***/ }),

/***/ "./dist/core/config/app.constants.js":
/*!*******************************************!*\
  !*** ./dist/core/config/app.constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LOG_REMOVE_BIG_IMAGE = exports.APPLICATION_PROXY_TOKEN = exports.APP_MEDIATOR = exports.EXPORT_COMMAND = exports.REMOVE_BIG_IMAGES = exports.PACK_IMAGES = exports.LOAD_TEXTURES = exports.PARSE_USER_ARGS = exports.START_APPLICATION = exports.APP_MODEL_TOKEN = exports.DRAWING_SERVICE = exports.PACKER_SERVICE = exports.USER_ARGS_SERVICE = exports.FILE_SERVICE_TOKEN = void 0;\r\n// services\r\nexports.FILE_SERVICE_TOKEN = 'service:file';\r\nexports.USER_ARGS_SERVICE = \"service:user-args\";\r\nexports.PACKER_SERVICE = \"service:packer-service\";\r\nexports.DRAWING_SERVICE = \"service:drawing-service\";\r\n// model \r\nexports.APP_MODEL_TOKEN = 'model:app';\r\n// commands\r\nexports.START_APPLICATION = 'START_APP';\r\nexports.PARSE_USER_ARGS = 'PARSE_USER_ARGS';\r\nexports.LOAD_TEXTURES = 'LOAD_TEXTURES';\r\nexports.PACK_IMAGES = 'PACK_IMAGES';\r\nexports.REMOVE_BIG_IMAGES = 'REMOVE_BIG_IMAGES';\r\nexports.EXPORT_COMMAND = 'EXPORT_COMMAND';\r\n// view \r\nexports.APP_MEDIATOR = 'app:mediator';\r\n// proxies\r\nexports.APPLICATION_PROXY_TOKEN = 'APP_PROXY';\r\n// custom event \r\nexports.LOG_REMOVE_BIG_IMAGE = 'log_remove_big_image';\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/config/app.constants.js?");

/***/ }),

/***/ "./dist/core/config/facade.js":
/*!************************************!*\
  !*** ./dist/core/config/facade.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.facade = void 0;\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nvar app_constants_1 = __webpack_require__(/*! ./app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar ioc_1 = __webpack_require__(/*! ./ioc */ \"./dist/core/config/ioc.js\");\r\nexports.facade = new coffe_maker_1.Facade();\r\nexports.facade.registerCommand(app_constants_1.START_APPLICATION, ioc_1.container.get(app_constants_1.START_APPLICATION));\r\nexports.facade.registerCommand(app_constants_1.PARSE_USER_ARGS, ioc_1.container.get(app_constants_1.PARSE_USER_ARGS));\r\nexports.facade.registerCommand(app_constants_1.LOAD_TEXTURES, ioc_1.container.get(app_constants_1.LOAD_TEXTURES));\r\nexports.facade.registerCommand(app_constants_1.PACK_IMAGES, ioc_1.container.get(app_constants_1.PACK_IMAGES));\r\nexports.facade.registerCommand(app_constants_1.REMOVE_BIG_IMAGES, ioc_1.container.get(app_constants_1.REMOVE_BIG_IMAGES));\r\nexports.facade.registerCommand(app_constants_1.EXPORT_COMMAND, ioc_1.container.get(app_constants_1.EXPORT_COMMAND));\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/config/facade.js?");

/***/ }),

/***/ "./dist/core/config/ioc.js":
/*!*********************************!*\
  !*** ./dist/core/config/ioc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.container = void 0;\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nvar ExportCommand_1 = __webpack_require__(/*! ../command/ExportCommand */ \"./dist/core/command/ExportCommand.js\");\r\nvar LoadTexturesCommand_1 = __webpack_require__(/*! ../command/LoadTexturesCommand */ \"./dist/core/command/LoadTexturesCommand.js\");\r\nvar PackImagesCommand_1 = __webpack_require__(/*! ../command/PackImagesCommand */ \"./dist/core/command/PackImagesCommand.js\");\r\nvar ParseUserArgsCommand_1 = __webpack_require__(/*! ../command/ParseUserArgsCommand */ \"./dist/core/command/ParseUserArgsCommand.js\");\r\nvar RemoveBigImagesCommand_1 = __webpack_require__(/*! ../command/RemoveBigImagesCommand */ \"./dist/core/command/RemoveBigImagesCommand.js\");\r\nvar StartApplicationCommand_1 = __webpack_require__(/*! ../command/StartApplicationCommand */ \"./dist/core/command/StartApplicationCommand.js\");\r\nvar AppProxy_1 = __webpack_require__(/*! ../model/proxy/AppProxy */ \"./dist/core/model/proxy/AppProxy.js\");\r\nvar DrawService_1 = __webpack_require__(/*! ../service/DrawService */ \"./dist/core/service/DrawService.js\");\r\nvar FileService_1 = __webpack_require__(/*! ../service/FileService */ \"./dist/core/service/FileService.js\");\r\nvar PackerService_1 = __webpack_require__(/*! ../service/PackerService */ \"./dist/core/service/PackerService.js\");\r\nvar UserArgsService_1 = __webpack_require__(/*! ../service/UserArgsService */ \"./dist/core/service/UserArgsService.js\");\r\nvar AppMediator_1 = __webpack_require__(/*! ../view/AppMediator */ \"./dist/core/view/AppMediator.js\");\r\nvar app_constants_1 = __webpack_require__(/*! ./app.constants */ \"./dist/core/config/app.constants.js\");\r\nexports.container = new coffe_maker_1.Container();\r\n// services\r\nexports.container.register(app_constants_1.FILE_SERVICE_TOKEN, function () { return new FileService_1.default(); }, true);\r\nexports.container.register(app_constants_1.USER_ARGS_SERVICE, function () { return new UserArgsService_1.default(); }, true);\r\nexports.container.register(app_constants_1.PACKER_SERVICE, function () { return new PackerService_1.PackerService(); }, true);\r\nexports.container.register(app_constants_1.DRAWING_SERVICE, function () { return new DrawService_1.default(); }, true);\r\n// proxies\r\nexports.container.register(app_constants_1.APPLICATION_PROXY_TOKEN, function () { return new AppProxy_1.default(); }, true);\r\n// commands\r\nexports.container.register(app_constants_1.START_APPLICATION, function () { return new StartApplicationCommand_1.default(); });\r\nexports.container.register(app_constants_1.PARSE_USER_ARGS, function () { return new ParseUserArgsCommand_1.default(); });\r\nexports.container.register(app_constants_1.LOAD_TEXTURES, function () { return new LoadTexturesCommand_1.default(); });\r\nexports.container.register(app_constants_1.PACK_IMAGES, function () { return new PackImagesCommand_1.default(); });\r\nexports.container.register(app_constants_1.REMOVE_BIG_IMAGES, function () { return new RemoveBigImagesCommand_1.default(); });\r\nexports.container.register(app_constants_1.EXPORT_COMMAND, function () { return new ExportCommand_1.default(); });\r\n//mediator\r\nexports.container.register(app_constants_1.APP_MEDIATOR, function () { return new AppMediator_1.default(); }, true);\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/config/ioc.js?");

/***/ }),

/***/ "./dist/core/model/proxy/AppProxy.js":
/*!*******************************************!*\
  !*** ./dist/core/model/proxy/AppProxy.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nvar AppModel_1 = __webpack_require__(/*! ../state/AppModel */ \"./dist/core/model/state/AppModel.js\");\r\nvar AppProxy = /** @class */ (function (_super) {\r\n    __extends(AppProxy, _super);\r\n    function AppProxy() {\r\n        var _this = _super.call(this) || this;\r\n        _this._model = new AppModel_1.default();\r\n        return _this;\r\n    }\r\n    AppProxy.prototype.setAtlases = function (atlases) {\r\n        this._model.setState({ atlases: atlases });\r\n    };\r\n    AppProxy.prototype.getAtlases = function () {\r\n        var state = this._model.getState();\r\n        return state.atlases;\r\n    };\r\n    AppProxy.prototype.getTextures = function () {\r\n        var state = this._model.getState();\r\n        return state.textures;\r\n    };\r\n    AppProxy.prototype.setTextures = function (textures) {\r\n        this._model.setState({ textures: textures });\r\n    };\r\n    AppProxy.prototype.getSourceDir = function () {\r\n        var state = this._model.getState();\r\n        return state.sourceDir;\r\n    };\r\n    AppProxy.prototype.getOuputDir = function () {\r\n        var state = this._model.getState();\r\n        return state.outputDir;\r\n    };\r\n    AppProxy.prototype.getAtlasSize = function () {\r\n        var state = this._model.getState();\r\n        return state.atlasSize;\r\n    };\r\n    AppProxy.prototype.setUserArgs = function (sourceDir, outputDir, atlasSize) {\r\n        this._model.setState({\r\n            sourceDir: sourceDir,\r\n            outputDir: outputDir,\r\n            atlasSize: atlasSize\r\n        });\r\n    };\r\n    return AppProxy;\r\n}(coffe_maker_1.Proxy));\r\nexports[\"default\"] = AppProxy;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/proxy/AppProxy.js?");

/***/ }),

/***/ "./dist/core/model/state/AppModel.js":
/*!*******************************************!*\
  !*** ./dist/core/model/state/AppModel.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nvar AppModel = /** @class */ (function (_super) {\r\n    __extends(AppModel, _super);\r\n    function AppModel() {\r\n        var _this = _super.call(this) || this;\r\n        _this.setState({});\r\n        return _this;\r\n    }\r\n    return AppModel;\r\n}(coffe_maker_1.StoreModel));\r\nexports[\"default\"] = AppModel;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/state/AppModel.js?");

/***/ }),

/***/ "./dist/core/model/vo/Atlas.js":
/*!*************************************!*\
  !*** ./dist/core/model/vo/Atlas.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Atlas = void 0;\r\nvar Atlas = /** @class */ (function () {\r\n    function Atlas(width, height) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.zones = [\r\n            {\r\n                x: 0,\r\n                y: 0,\r\n                width: width,\r\n                height: height,\r\n                img: null,\r\n                offsetX: 0,\r\n                offsetY: 0,\r\n                originalWidth: 0,\r\n                originalHeight: 0,\r\n                src: \"\"\r\n            }\r\n        ];\r\n    }\r\n    Atlas.prototype.splitZone = function (zone) {\r\n        var zoneA = { x: 0, y: 0, width: 0, height: 0, img: null, offsetX: 0, offsetY: 0, originalWidth: 0, originalHeight: 0, src: \"\" };\r\n        var zoneB = { x: 0, y: 0, width: 0, height: 0, img: null, offsetX: 0, offsetY: 0, originalWidth: 0, originalHeight: 0, src: \"\" };\r\n        var img = zone.img;\r\n        if (img.width > img.height) {\r\n            zoneA.x = zone.x + img.width;\r\n            zoneA.y = zone.y;\r\n            zoneA.width = zone.width - img.width;\r\n            zoneA.height = img.height;\r\n            zoneB.x = zone.x;\r\n            zoneB.y = zone.y + img.height;\r\n            zoneB.width = zone.width;\r\n            zoneB.height = zone.height - img.height;\r\n        }\r\n        else {\r\n            zoneA.x = zone.x;\r\n            zoneA.y = zone.y + img.height;\r\n            zoneA.width = img.width;\r\n            zoneA.height = zone.height - img.height;\r\n            zoneB.x = zone.x + img.width;\r\n            zoneB.y = zone.y;\r\n            zoneB.width = zone.width - img.width;\r\n            zoneB.height = zone.height;\r\n        }\r\n        if (zoneA.width > 0 && zoneA.height > 0)\r\n            this.zones.push(zoneA);\r\n        if (zoneB.width > 0 && zoneB.height > 0)\r\n            this.zones.push(zoneB);\r\n        zone.width = img.width;\r\n        zone.height = img.height;\r\n    };\r\n    Atlas.prototype.getZone = function (width, height) {\r\n        if (width === void 0) { width = 0; }\r\n        if (height === void 0) { height = 0; }\r\n        // we sort the zones \r\n        this.zones = this.zones.sort(this.sortZones);\r\n        var i = 0;\r\n        // then we loop other the zones array in order to grab the most accruate one\r\n        for (; i < this.zones.length; i++) {\r\n            if (width <= this.zones[i].width && height <= this.zones[i].height && this.zones[i].img == null) {\r\n                return this.zones[i];\r\n            }\r\n        }\r\n        return null;\r\n    };\r\n    Atlas.prototype.removeEmptyZones = function () {\r\n        var i = this.zones.length;\r\n        var empty = this.zones.filter(function (zone) { return zone.img === null; });\r\n        while (empty.length > 0) {\r\n            var cur = empty.shift();\r\n            var pos = this.zones.indexOf(cur);\r\n            this.zones.splice(pos, 1);\r\n        }\r\n        // while( --i > -1 ){\r\n        //     if( this.zones[i].img == null ){\r\n        //         this.zones.splice(i, 1);\r\n        //     }\r\n        // }\r\n    };\r\n    Atlas.prototype.sortZones = function (a, b) {\r\n        var area1 = a.width * a.height;\r\n        var area2 = b.width * b.height;\r\n        return (area1 < area2) ? -1 : 1;\r\n    };\r\n    Atlas.toJSON = function (atlas) {\r\n        var output = {\r\n            width: atlas.width,\r\n            height: atlas.height,\r\n            zones: atlas.zones.map(function (zone) {\r\n                var filename = zone.src.toString();\r\n                filename = filename.substr(filename.lastIndexOf(\"/\") + 1);\r\n                filename = filename.substr(filename.lastIndexOf(\"\\\\\") + 1);\r\n                return {\r\n                    x: zone.x,\r\n                    y: zone.y,\r\n                    offsetX: zone.offsetX,\r\n                    offsetY: zone.offsetY,\r\n                    originalWidth: zone.originalWidth,\r\n                    originalHeight: zone.originalHeight,\r\n                    width: zone.width,\r\n                    height: zone.height,\r\n                    id: filename.substr(0, filename.lastIndexOf(\".\")),\r\n                    img: filename,\r\n                };\r\n            })\r\n        };\r\n        return JSON.stringify(output);\r\n    };\r\n    return Atlas;\r\n}());\r\nexports.Atlas = Atlas;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/vo/Atlas.js?");

/***/ }),

/***/ "./dist/core/service/DrawService.js":
/*!******************************************!*\
  !*** ./dist/core/service/DrawService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar canvas_1 = __webpack_require__(/*! canvas */ \"canvas\");\r\nvar DrawService = /** @class */ (function () {\r\n    function DrawService() {\r\n    }\r\n    DrawService.prototype.drawAtlas = function (atlas, drawBorder) {\r\n        if (drawBorder === void 0) { drawBorder = false; }\r\n        var scene = (0, canvas_1.createCanvas)(atlas.width, atlas.height);\r\n        var context = scene.getContext(\"2d\");\r\n        atlas.zones.forEach(function (currentZone) {\r\n            context.save();\r\n            context.drawImage(currentZone.img, currentZone.offsetX, currentZone.offsetY, currentZone.width, currentZone.height, currentZone.x, currentZone.y, currentZone.width, currentZone.height);\r\n            context.restore();\r\n            if (drawBorder) {\r\n                var color = \"red\";\r\n                context.save();\r\n                context.strokeStyle = color;\r\n                context.lineWidth = 2;\r\n                context.moveTo(currentZone.x, currentZone.y);\r\n                context.lineTo(currentZone.x + currentZone.width, currentZone.y);\r\n                context.lineTo(currentZone.x + currentZone.width, currentZone.y + currentZone.height);\r\n                context.lineTo(currentZone.x, currentZone.y + currentZone.height);\r\n                context.lineTo(currentZone.x, currentZone.y);\r\n                context.stroke();\r\n                context.restore();\r\n            }\r\n        });\r\n        return scene;\r\n    };\r\n    return DrawService;\r\n}());\r\nexports[\"default\"] = DrawService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/DrawService.js?");

/***/ }),

/***/ "./dist/core/service/FileService.js":
/*!******************************************!*\
  !*** ./dist/core/service/FileService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar FileService = /** @class */ (function () {\r\n    function FileService() {\r\n    }\r\n    FileService.prototype.mkDir = function (path) {\r\n        fs.mkdirSync(path, { recursive: true });\r\n    };\r\n    FileService.prototype.rmDir = function (path) {\r\n        var _this = this;\r\n        if (!this.fileExists(path))\r\n            return;\r\n        var paths = this.readDir(path);\r\n        var files = this.keepOnlyFiles(paths);\r\n        var dirs = this.keepOnlyDirs(paths);\r\n        files.forEach(fs.unlinkSync);\r\n        dirs.forEach(function (value) {\r\n            _this.rmDir(value);\r\n        });\r\n        fs.rmdirSync(path);\r\n    };\r\n    FileService.prototype.readDir = function (path, recursive, result) {\r\n        var _this = this;\r\n        if (recursive === void 0) { recursive = false; }\r\n        if (result === void 0) { result = []; }\r\n        var files = fs.readdirSync(path);\r\n        files.forEach(function (filename) {\r\n            var filepath = path + filename;\r\n            var stats = fs.statSync(filepath);\r\n            if (stats.isDirectory()) {\r\n                _this.readDir(filepath + \"/\", recursive, result);\r\n            }\r\n            result.push(filepath);\r\n        });\r\n        return result;\r\n    };\r\n    FileService.prototype.getImagesInDir = function (directory) {\r\n        var extensions = ['.png', '.jpg', '.jpeg'];\r\n        var datas = this.readDir(directory, true);\r\n        var files = this.keepOnlyFiles(datas);\r\n        return files.filter(function (value) {\r\n            var ext = path.extname(value);\r\n            return extensions.includes(ext);\r\n        });\r\n    };\r\n    FileService.prototype.keepOnlyFiles = function (filepaths) {\r\n        return filepaths.filter(function (value) {\r\n            return fs.statSync(value).isFile();\r\n        });\r\n    };\r\n    FileService.prototype.keepOnlyDirs = function (filepaths) {\r\n        return filepaths.filter(function (value) {\r\n            return fs.statSync(value).isDirectory();\r\n        });\r\n    };\r\n    FileService.prototype.fileExists = function (filepath) {\r\n        return fs.existsSync(filepath);\r\n    };\r\n    FileService.prototype.writeJSON = function (data, filepath) {\r\n        fs.writeFileSync(filepath, data);\r\n    };\r\n    FileService.prototype.writeImage = function (canvas, filepath) {\r\n        var buffer = canvas.toBuffer();\r\n        fs.writeFileSync(filepath, buffer);\r\n    };\r\n    FileService.prototype.removeFile = function (filepath) {\r\n        fs.unlinkSync(filepath);\r\n    };\r\n    return FileService;\r\n}());\r\nexports[\"default\"] = FileService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/FileService.js?");

/***/ }),

/***/ "./dist/core/service/PackerService.js":
/*!********************************************!*\
  !*** ./dist/core/service/PackerService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PackerService = void 0;\r\nvar Atlas_1 = __webpack_require__(/*! ../model/vo/Atlas */ \"./dist/core/model/vo/Atlas.js\");\r\nvar CanvasUtils_1 = __webpack_require__(/*! ../utils/CanvasUtils */ \"./dist/core/utils/CanvasUtils.js\");\r\nvar detectEdges_1 = __webpack_require__(/*! ../utils/detectEdges */ \"./dist/core/utils/detectEdges.js\");\r\nvar PackerService = /** @class */ (function () {\r\n    function PackerService() {\r\n    }\r\n    PackerService.prototype.sortImagesByAreaAsc = function (a, b) {\r\n        var area1 = a.width * a.height;\r\n        var area2 = b.width * b.height;\r\n        return (area1 > area2) ? -1 : 1;\r\n    };\r\n    PackerService.prototype.pack = function (images, width, height, optimize) {\r\n        if (width === void 0) { width = 0; }\r\n        if (height === void 0) { height = 0; }\r\n        if (optimize === void 0) { optimize = false; }\r\n        var results = [];\r\n        var currentZone = null;\r\n        var currentImg = null;\r\n        var currentAtlas = null;\r\n        var bounds = null;\r\n        var originals = images;\r\n        var cropped = [];\r\n        var boundes = [];\r\n        images.forEach(function (tex) {\r\n            if (optimize) {\r\n                var canvas = CanvasUtils_1.default.createFromImage(tex);\r\n                var bounds_1 = (0, detectEdges_1.default)(canvas, 10);\r\n                var crop = CanvasUtils_1.default.crop(canvas, bounds_1);\r\n                boundes.push(bounds_1);\r\n                cropped.push(CanvasUtils_1.default.canvasToImg(crop));\r\n            }\r\n            else {\r\n                boundes.push({ x: 0, y: 0, width: tex.naturalWidth, height: tex.naturalHeight });\r\n            }\r\n        });\r\n        if (optimize) {\r\n            images = cropped;\r\n        }\r\n        var i = 0;\r\n        //while there's images into the images array\r\n        while (images.length > 0) {\r\n            // we sort the images\r\n            images = images.sort(this.sortImagesByAreaAsc);\r\n            // we create a new Atlas\r\n            currentAtlas = new Atlas_1.Atlas(width, height);\r\n            // we loop other the images array\r\n            for (i = 0; i < images.length; i++) {\r\n                currentImg = images[i];\r\n                bounds = boundes[i];\r\n                // we try to find a zone which can contains our image\r\n                currentZone = currentAtlas.getZone(currentImg.naturalWidth, currentImg.naturalHeight);\r\n                // if we cant find one\r\n                if (currentZone == null)\r\n                    continue;\r\n                // then we put the img into the zone \r\n                currentZone.img = currentImg;\r\n                //and create two zones from the current one\r\n                currentAtlas.splitZone(currentZone);\r\n                currentZone.originalWidth = originals[i].naturalWidth;\r\n                currentZone.originalHeight = originals[i].naturalHeight;\r\n                currentZone.offsetX = bounds.x;\r\n                currentZone.offsetY = bounds.y;\r\n                currentZone.src = originals[i].src.toString();\r\n            }\r\n            results.push(currentAtlas);\r\n            // remove empty zones \r\n            currentAtlas.removeEmptyZones();\r\n            // remove images from the array\r\n            for (i = 0; i < currentAtlas.zones.length; i++) {\r\n                // images.splice( images.indexOf(currentAtlas.zones[i].img as Canvas), 1);\r\n                images.splice(images.indexOf(currentImg), 1);\r\n            }\r\n        }\r\n        return results;\r\n    };\r\n    return PackerService;\r\n}());\r\nexports.PackerService = PackerService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/PackerService.js?");

/***/ }),

/***/ "./dist/core/service/UserArgsService.js":
/*!**********************************************!*\
  !*** ./dist/core/service/UserArgsService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar commander_1 = __webpack_require__(/*! commander */ \"commander\");\r\nvar UserArgsService = /** @class */ (function () {\r\n    function UserArgsService() {\r\n        commander_1.program.version(\"2.0.0\");\r\n        commander_1.program.option('--dir <type>', 'the texture source directory', './');\r\n        commander_1.program.option('--size <number>', 'the output atlas size', '2048');\r\n        commander_1.program.option('--output <type>', 'the output dir', './');\r\n        commander_1.program.option('--optimize <number>', 'optimize by cropping transparent pixels', '1');\r\n        commander_1.program.option('--debug <number>', 'draws regions', '0');\r\n        commander_1.program.parse(process.argv);\r\n    }\r\n    UserArgsService.prototype.getUserArg = function (key) {\r\n        return commander_1.program.opts()[key] || null;\r\n    };\r\n    return UserArgsService;\r\n}());\r\nexports[\"default\"] = UserArgsService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/UserArgsService.js?");

/***/ }),

/***/ "./dist/core/utils/CanvasUtils.js":
/*!****************************************!*\
  !*** ./dist/core/utils/CanvasUtils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar canvas_1 = __webpack_require__(/*! canvas */ \"canvas\");\r\n/**\r\n * The CanvasUtils class is a set of utilitaries for canvas elements.\r\n */\r\nvar CanvasUtils = /** @class */ (function () {\r\n    function CanvasUtils() {\r\n    }\r\n    CanvasUtils.create = function (width, height) {\r\n        if (width === void 0) { width = 1; }\r\n        if (height === void 0) { height = 1; }\r\n        var canvas = (0, canvas_1.createCanvas)(width, height);\r\n        canvas.width = width;\r\n        canvas.height = height;\r\n        return canvas;\r\n    };\r\n    CanvasUtils.createFromImage = function (img) {\r\n        var canvas = CanvasUtils.create(img.naturalWidth, img.naturalHeight);\r\n        var context = canvas.getContext(\"2d\");\r\n        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);\r\n        return canvas;\r\n    };\r\n    CanvasUtils.canvasToImg = function (canvas) {\r\n        var img = new canvas_1.Image();\r\n        img.width = canvas.width;\r\n        img.height = canvas.height;\r\n        img.src = canvas.toDataURL(\"image/png\");\r\n        return img;\r\n    };\r\n    CanvasUtils.crop = function (source, bounds) {\r\n        var canvas = CanvasUtils.create(bounds.width, bounds.height);\r\n        var context = canvas.getContext(\"2d\");\r\n        context.save();\r\n        context.translate(-bounds.x, -bounds.y);\r\n        context.drawImage(source, 0, 0);\r\n        context.restore();\r\n        return canvas;\r\n    };\r\n    CanvasUtils.fillRect = function (canvas, color, x, y, width, height) {\r\n        var context = canvas.getContext(\"2d\");\r\n        context.save();\r\n        context.beginPath();\r\n        context.fillStyle = color;\r\n        context.translate(x, y);\r\n        context.fillRect(0, 0, width, height);\r\n        context.fill();\r\n        context.closePath();\r\n        context.restore();\r\n    };\r\n    CanvasUtils.getCanvasPixels = function (canvas) {\r\n        var offscreen = CanvasUtils.create(canvas.width, canvas.height);\r\n        offscreen.getContext(\"2d\").drawImage(canvas, 0, 0);\r\n        return offscreen.getContext(\"2d\").getImageData(0, 0, offscreen.width, offscreen.height).data;\r\n    };\r\n    CanvasUtils.pixelsToRGBA = function (pixels) {\r\n        var result = [];\r\n        for (var i = 0; i < pixels.length; i += 4) {\r\n            result.push({\r\n                r: pixels[i],\r\n                g: pixels[i + 1],\r\n                b: pixels[i + 2],\r\n                a: pixels[i + 3],\r\n            });\r\n        }\r\n        return result;\r\n    };\r\n    CanvasUtils.getCanvasPixel = function (canvas, x, y) {\r\n        var pixels = CanvasUtils.getCanvasPixels(canvas);\r\n        var pos = Math.floor(y * canvas.width * 4) + (x * 4);\r\n        return [\r\n            pixels[pos],\r\n            pixels[pos + 1],\r\n            pixels[pos + 2],\r\n            pixels[pos + 3],\r\n        ];\r\n    };\r\n    CanvasUtils.canvasPixelToRGBA = function (pixelData) {\r\n        return {\r\n            r: pixelData[0],\r\n            g: pixelData[1],\r\n            b: pixelData[2],\r\n            a: pixelData[3]\r\n        };\r\n    };\r\n    CanvasUtils.pixelsAreTheSame = function (pixelsA, pixelsB) {\r\n        if (pixelsA.length !== pixelsB.length)\r\n            return false;\r\n        for (var i = 0; i < pixelsA.length; i++) {\r\n            if (pixelsA[i] !== pixelsB[i])\r\n                return false;\r\n        }\r\n        return true;\r\n    };\r\n    return CanvasUtils;\r\n}());\r\nexports[\"default\"] = CanvasUtils;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/utils/CanvasUtils.js?");

/***/ }),

/***/ "./dist/core/utils/detectEdges.js":
/*!****************************************!*\
  !*** ./dist/core/utils/detectEdges.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar CanvasUtils_1 = __webpack_require__(/*! ./CanvasUtils */ \"./dist/core/utils/CanvasUtils.js\");\r\nfunction detectEdges(png, limit) {\r\n    if (limit === void 0) { limit = 1; }\r\n    var pixels = CanvasUtils_1.default.getCanvasPixels(png);\r\n    var rgba = CanvasUtils_1.default.pixelsToRGBA(pixels);\r\n    var left = Infinity;\r\n    var right = -Infinity;\r\n    var top = Infinity;\r\n    var bottom = -Infinity;\r\n    for (var i = 0; i < rgba.length; i++) {\r\n        var row = (i / png.width) >> 0;\r\n        var col = i % png.width;\r\n        if (rgba[i].a < limit)\r\n            continue;\r\n        left = col < left ? col : left;\r\n        top = row < top ? row : top;\r\n        right = col > right ? col : right;\r\n        bottom = row > bottom ? row : bottom;\r\n    }\r\n    return { x: left, y: top, width: right - left, height: bottom - top };\r\n}\r\nexports[\"default\"] = detectEdges;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/utils/detectEdges.js?");

/***/ }),

/***/ "./dist/core/utils/nextPowerOf2.js":
/*!*****************************************!*\
  !*** ./dist/core/utils/nextPowerOf2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction getNextPowerOf2(value) {\r\n    var num = 1;\r\n    while (num < value) {\r\n        num *= 2;\r\n    }\r\n    return num;\r\n}\r\nexports[\"default\"] = getNextPowerOf2;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/utils/nextPowerOf2.js?");

/***/ }),

/***/ "./dist/core/view/AppMediator.js":
/*!***************************************!*\
  !*** ./dist/core/view/AppMediator.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nvar app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar AppMediator = /** @class */ (function (_super) {\r\n    __extends(AppMediator, _super);\r\n    function AppMediator() {\r\n        var _this = _super.call(this) || this;\r\n        _this._onRemoveBigImage = function (notification) {\r\n            var img = notification.getPayload();\r\n            var msg = \"... skipping \" + img.src + \" because it is too big\";\r\n            console.log(msg);\r\n        };\r\n        return _this;\r\n    }\r\n    AppMediator.prototype.start = function () {\r\n        this.getFacade().subscribe(app_constants_1.LOG_REMOVE_BIG_IMAGE, this._onRemoveBigImage);\r\n        this.getFacade().subscribe(app_constants_1.LOAD_TEXTURES, this._onLoadTextures);\r\n        this.getFacade().subscribe(app_constants_1.PARSE_USER_ARGS, this._onUserArgs);\r\n        this._onStart();\r\n    };\r\n    AppMediator.prototype._onUserArgs = function () {\r\n        var msg = \">>> loading user arguments\";\r\n        console.log(msg);\r\n    };\r\n    AppMediator.prototype._onPack = function () {\r\n        var msg = \">>> pack images\";\r\n        console.log(msg);\r\n    };\r\n    AppMediator.prototype._onStart = function () {\r\n        var msg = \"\\n******************************************************************\\n**************** THANK YOU FOR USING TEXTURE PACKER **************\\n******************************************************************\\n        \";\r\n        console.log(msg);\r\n    };\r\n    AppMediator.prototype._onLoadTextures = function (notification) {\r\n        var msg = \">>> loading textures\";\r\n        console.log(msg);\r\n    };\r\n    return AppMediator;\r\n}(coffe_maker_1.Mediator));\r\nexports[\"default\"] = AppMediator;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/view/AppMediator.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("//#!/usr/bin/env node\r\n\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_constants_1 = __webpack_require__(/*! ./core/config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nvar facade_1 = __webpack_require__(/*! ./core/config/facade */ \"./dist/core/config/facade.js\");\r\nfacade_1.facade.sendNotification(app_constants_1.START_APPLICATION);\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/index.js?");

/***/ }),

/***/ "@thetinyspark/coffe-maker":
/*!********************************************!*\
  !*** external "@thetinyspark/coffe-maker" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@thetinyspark/coffe-maker");

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("canvas");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("commander");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;