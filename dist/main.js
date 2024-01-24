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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nconst ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nconst Atlas_1 = __webpack_require__(/*! ../model/vo/Atlas */ \"./dist/core/model/vo/Atlas.js\");\r\nclass ExportCommand {\r\n    constructor() {\r\n        this._atlases = [];\r\n    }\r\n    execute(notification) {\r\n        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        const atlases = proxy.getAtlases();\r\n        this._atlases = atlases;\r\n        this.exportNext();\r\n    }\r\n    exportNext() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (this._atlases.length > 0) {\r\n                const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n                const outputDir = proxy.getOuputDir();\r\n                const service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);\r\n                const service2 = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);\r\n                const debug = parseInt(service2.getUserArg('debug')) === 1;\r\n                const drawer = ioc_1.container.resolve(app_constants_1.DRAWING_SERVICE);\r\n                const currentAtlas = this._atlases.shift();\r\n                const scene = yield drawer.drawAtlas(currentAtlas, debug);\r\n                const name = 'atlas_' + this._atlases.length;\r\n                const jsonName = name + '.json';\r\n                const pngName = name + '.png';\r\n                service.writeJSON(Atlas_1.Atlas.toJSON(currentAtlas), outputDir + '/' + jsonName);\r\n                service.writeImage(scene, outputDir + '/' + pngName);\r\n                this.exportNext();\r\n            }\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = ExportCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/ExportCommand.js?");

/***/ }),

/***/ "./dist/core/command/LoadTexturesCommand.js":
/*!**************************************************!*\
  !*** ./dist/core/command/LoadTexturesCommand.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst canvas_1 = __webpack_require__(/*! canvas */ \"canvas\");\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nconst ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nconst ImageInfo_1 = __webpack_require__(/*! ../model/vo/ImageInfo */ \"./dist/core/model/vo/ImageInfo.js\");\r\nconst LoadingBar_1 = __webpack_require__(/*! ../view/LoadingBar */ \"./dist/core/view/LoadingBar.js\");\r\nclass LoadTextureCommand {\r\n    execute(notification) {\r\n        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        const sourceDir = proxy.getSourceDir();\r\n        const service = ioc_1.container.resolve(app_constants_1.FILE_SERVICE_TOKEN);\r\n        const service2 = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);\r\n        const optimize = parseInt(service2.getUserArg('optimize')) === 1;\r\n        if (!service.fileExists(sourceDir)) {\r\n            console.log(\"non existing source dir:\", sourceDir);\r\n            return;\r\n        }\r\n        const images = service.getImagesInDir(sourceDir);\r\n        this._loadAndStore(images, proxy, optimize).then(() => {\r\n            facade_1.facade.sendNotification(app_constants_1.REMOVE_BIG_IMAGES);\r\n        });\r\n    }\r\n    _loadAndStore(paths, proxy, optimize = true) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const bar = new LoadingBar_1.default();\r\n            bar.start();\r\n            const infos = yield new Promise((resolve, reject) => {\r\n                const infos = [];\r\n                let counter = 0;\r\n                let max = paths.length;\r\n                let img = null;\r\n                const loadNext = () => __awaiter(this, void 0, void 0, function* () {\r\n                    if (paths.length === 0) {\r\n                        resolve(infos);\r\n                        return;\r\n                    }\r\n                    img = yield (0, canvas_1.loadImage)(paths.shift());\r\n                    infos.push(new ImageInfo_1.ImageInfo(img, optimize));\r\n                    counter++;\r\n                    const percent = counter / max * 100;\r\n                    bar.progress(percent);\r\n                    loadNext();\r\n                });\r\n                loadNext();\r\n            });\r\n            proxy.setImagesInfo(infos);\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = LoadTextureCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/LoadTexturesCommand.js?");

/***/ }),

/***/ "./dist/core/command/PackImagesCommand.js":
/*!************************************************!*\
  !*** ./dist/core/command/PackImagesCommand.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nconst ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nclass PackImagesCommand {\r\n    execute(notification) {\r\n        const packerService = ioc_1.container.resolve(app_constants_1.PACKER_SERVICE);\r\n        const appProxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        const infos = appProxy.getImagesInfo();\r\n        const size = appProxy.getAtlasSize();\r\n        const atlases = packerService.pack(infos, size, size);\r\n        appProxy.setAtlases(atlases);\r\n        facade_1.facade.sendNotification(app_constants_1.EXPORT_COMMAND);\r\n    }\r\n}\r\nexports[\"default\"] = PackImagesCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/PackImagesCommand.js?");

/***/ }),

/***/ "./dist/core/command/ParseUserArgsCommand.js":
/*!***************************************************!*\
  !*** ./dist/core/command/ParseUserArgsCommand.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nconst ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nconst nextPowerOf2_1 = __webpack_require__(/*! ../utils/nextPowerOf2 */ \"./dist/core/utils/nextPowerOf2.js\");\r\nclass ParseUserArgsCommand {\r\n    execute(notification) {\r\n        const service = ioc_1.container.resolve(app_constants_1.USER_ARGS_SERVICE);\r\n        const size = service.getUserArg('size');\r\n        const outputDir = service.getUserArg('output');\r\n        const sourceDir = service.getUserArg('dir');\r\n        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        proxy.setUserArgs(sourceDir, outputDir, (0, nextPowerOf2_1.default)(size));\r\n        facade_1.facade.sendNotification(app_constants_1.LOAD_TEXTURES);\r\n    }\r\n}\r\nexports[\"default\"] = ParseUserArgsCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/ParseUserArgsCommand.js?");

/***/ }),

/***/ "./dist/core/command/RemoveBigImagesCommand.js":
/*!*****************************************************!*\
  !*** ./dist/core/command/RemoveBigImagesCommand.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nclass RemoveBigImagesCommand {\r\n    execute(notification) {\r\n        const proxy = facade_1.facade.getProxy(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        const images = proxy.getImagesInfo();\r\n        const size = proxy.getAtlasSize();\r\n        this.filter(images, size, proxy);\r\n        facade_1.facade.sendNotification(app_constants_1.PACK_IMAGES);\r\n    }\r\n    filter(images, size, proxy) {\r\n        const filtered = images.filter((info) => {\r\n            if (info.width > size || info.height > size) {\r\n                facade_1.facade.sendNotification(app_constants_1.LOG_REMOVE_BIG_IMAGE, info);\r\n                return false;\r\n            }\r\n            else {\r\n                return true;\r\n            }\r\n        });\r\n        proxy.setImagesInfo(filtered);\r\n    }\r\n}\r\nexports[\"default\"] = RemoveBigImagesCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/RemoveBigImagesCommand.js?");

/***/ }),

/***/ "./dist/core/command/StartApplicationCommand.js":
/*!******************************************************!*\
  !*** ./dist/core/command/StartApplicationCommand.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ../config/facade */ \"./dist/core/config/facade.js\");\r\nconst ioc_1 = __webpack_require__(/*! ../config/ioc */ \"./dist/core/config/ioc.js\");\r\nclass StartApplicationCommand {\r\n    execute(notification) {\r\n        const appProxy = ioc_1.container.resolve(app_constants_1.APPLICATION_PROXY_TOKEN);\r\n        const appMediator = ioc_1.container.resolve(app_constants_1.APP_MEDIATOR);\r\n        facade_1.facade.registerProxy(app_constants_1.APPLICATION_PROXY_TOKEN, appProxy);\r\n        facade_1.facade.registerProxy(app_constants_1.APP_MEDIATOR, appMediator);\r\n        appMediator.start();\r\n        facade_1.facade.sendNotification(app_constants_1.PARSE_USER_ARGS);\r\n    }\r\n}\r\nexports[\"default\"] = StartApplicationCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/command/StartApplicationCommand.js?");

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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.facade = void 0;\r\nconst coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nconst app_constants_1 = __webpack_require__(/*! ./app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst ioc_1 = __webpack_require__(/*! ./ioc */ \"./dist/core/config/ioc.js\");\r\nexports.facade = new coffe_maker_1.Facade();\r\nexports.facade.registerCommand(app_constants_1.START_APPLICATION, ioc_1.container.get(app_constants_1.START_APPLICATION));\r\nexports.facade.registerCommand(app_constants_1.PARSE_USER_ARGS, ioc_1.container.get(app_constants_1.PARSE_USER_ARGS));\r\nexports.facade.registerCommand(app_constants_1.LOAD_TEXTURES, ioc_1.container.get(app_constants_1.LOAD_TEXTURES));\r\nexports.facade.registerCommand(app_constants_1.PACK_IMAGES, ioc_1.container.get(app_constants_1.PACK_IMAGES));\r\nexports.facade.registerCommand(app_constants_1.REMOVE_BIG_IMAGES, ioc_1.container.get(app_constants_1.REMOVE_BIG_IMAGES));\r\nexports.facade.registerCommand(app_constants_1.EXPORT_COMMAND, ioc_1.container.get(app_constants_1.EXPORT_COMMAND));\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/config/facade.js?");

/***/ }),

/***/ "./dist/core/config/ioc.js":
/*!*********************************!*\
  !*** ./dist/core/config/ioc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.container = void 0;\r\nconst coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nconst ExportCommand_1 = __webpack_require__(/*! ../command/ExportCommand */ \"./dist/core/command/ExportCommand.js\");\r\nconst LoadTexturesCommand_1 = __webpack_require__(/*! ../command/LoadTexturesCommand */ \"./dist/core/command/LoadTexturesCommand.js\");\r\nconst PackImagesCommand_1 = __webpack_require__(/*! ../command/PackImagesCommand */ \"./dist/core/command/PackImagesCommand.js\");\r\nconst ParseUserArgsCommand_1 = __webpack_require__(/*! ../command/ParseUserArgsCommand */ \"./dist/core/command/ParseUserArgsCommand.js\");\r\nconst RemoveBigImagesCommand_1 = __webpack_require__(/*! ../command/RemoveBigImagesCommand */ \"./dist/core/command/RemoveBigImagesCommand.js\");\r\nconst StartApplicationCommand_1 = __webpack_require__(/*! ../command/StartApplicationCommand */ \"./dist/core/command/StartApplicationCommand.js\");\r\nconst AppProxy_1 = __webpack_require__(/*! ../model/proxy/AppProxy */ \"./dist/core/model/proxy/AppProxy.js\");\r\nconst DrawService_1 = __webpack_require__(/*! ../service/DrawService */ \"./dist/core/service/DrawService.js\");\r\nconst FileService_1 = __webpack_require__(/*! ../service/FileService */ \"./dist/core/service/FileService.js\");\r\nconst PackerService_1 = __webpack_require__(/*! ../service/PackerService */ \"./dist/core/service/PackerService.js\");\r\nconst UserArgsService_1 = __webpack_require__(/*! ../service/UserArgsService */ \"./dist/core/service/UserArgsService.js\");\r\nconst AppMediator_1 = __webpack_require__(/*! ../view/AppMediator */ \"./dist/core/view/AppMediator.js\");\r\nconst app_constants_1 = __webpack_require__(/*! ./app.constants */ \"./dist/core/config/app.constants.js\");\r\nexports.container = new coffe_maker_1.Container();\r\n// services\r\nexports.container.register(app_constants_1.FILE_SERVICE_TOKEN, () => { return new FileService_1.default(); }, true);\r\nexports.container.register(app_constants_1.USER_ARGS_SERVICE, () => { return new UserArgsService_1.default(); }, true);\r\nexports.container.register(app_constants_1.PACKER_SERVICE, () => { return new PackerService_1.PackerService(); }, true);\r\nexports.container.register(app_constants_1.DRAWING_SERVICE, () => { return new DrawService_1.default(); }, true);\r\n// proxies\r\nexports.container.register(app_constants_1.APPLICATION_PROXY_TOKEN, () => { return new AppProxy_1.default(); }, true);\r\n// commands\r\nexports.container.register(app_constants_1.START_APPLICATION, () => { return new StartApplicationCommand_1.default(); });\r\nexports.container.register(app_constants_1.PARSE_USER_ARGS, () => { return new ParseUserArgsCommand_1.default(); });\r\nexports.container.register(app_constants_1.LOAD_TEXTURES, () => { return new LoadTexturesCommand_1.default(); });\r\nexports.container.register(app_constants_1.PACK_IMAGES, () => { return new PackImagesCommand_1.default(); });\r\nexports.container.register(app_constants_1.REMOVE_BIG_IMAGES, () => { return new RemoveBigImagesCommand_1.default(); });\r\nexports.container.register(app_constants_1.EXPORT_COMMAND, () => { return new ExportCommand_1.default(); });\r\n//mediator\r\nexports.container.register(app_constants_1.APP_MEDIATOR, () => { return new AppMediator_1.default(); }, true);\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/config/ioc.js?");

/***/ }),

/***/ "./dist/core/model/proxy/AppProxy.js":
/*!*******************************************!*\
  !*** ./dist/core/model/proxy/AppProxy.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nconst AppModel_1 = __webpack_require__(/*! ../state/AppModel */ \"./dist/core/model/state/AppModel.js\");\r\nclass AppProxy extends coffe_maker_1.Proxy {\r\n    constructor() {\r\n        super();\r\n        this._model = new AppModel_1.default();\r\n    }\r\n    setImagesInfo(imageInfos) {\r\n        this._model.setState({ imageInfos });\r\n    }\r\n    getImagesInfo() {\r\n        const state = this._model.getState();\r\n        return state.imageInfos;\r\n    }\r\n    setAtlases(atlases) {\r\n        this._model.setState({ atlases });\r\n    }\r\n    getAtlases() {\r\n        const state = this._model.getState();\r\n        return state.atlases;\r\n    }\r\n    getTextures() {\r\n        const state = this._model.getState();\r\n        return state.textures;\r\n    }\r\n    setTextures(textures) {\r\n        this._model.setState({ textures });\r\n    }\r\n    getSourceDir() {\r\n        const state = this._model.getState();\r\n        return state.sourceDir;\r\n    }\r\n    getOuputDir() {\r\n        const state = this._model.getState();\r\n        return state.outputDir;\r\n    }\r\n    getAtlasSize() {\r\n        const state = this._model.getState();\r\n        return state.atlasSize;\r\n    }\r\n    setUserArgs(sourceDir, outputDir, atlasSize) {\r\n        this._model.setState({\r\n            sourceDir,\r\n            outputDir,\r\n            atlasSize\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = AppProxy;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/proxy/AppProxy.js?");

/***/ }),

/***/ "./dist/core/model/state/AppModel.js":
/*!*******************************************!*\
  !*** ./dist/core/model/state/AppModel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nclass AppModel extends coffe_maker_1.StoreModel {\r\n    constructor() {\r\n        super();\r\n        this.setState({});\r\n    }\r\n}\r\nexports[\"default\"] = AppModel;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/state/AppModel.js?");

/***/ }),

/***/ "./dist/core/model/vo/Atlas.js":
/*!*************************************!*\
  !*** ./dist/core/model/vo/Atlas.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Atlas = void 0;\r\nclass Atlas {\r\n    constructor(width, height) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.zones = [\r\n            {\r\n                x: 0,\r\n                y: 0,\r\n                width: width,\r\n                height: height,\r\n                imgInfo: null\r\n            }\r\n        ];\r\n    }\r\n    splitZone(zone) {\r\n        let zoneA = { x: 0, y: 0, width: 0, height: 0, imgInfo: null };\r\n        let zoneB = { x: 0, y: 0, width: 0, height: 0, imgInfo: null };\r\n        let img = zone.imgInfo;\r\n        if (img.width > img.height) {\r\n            zoneA.x = zone.x + img.width;\r\n            zoneA.y = zone.y;\r\n            zoneA.width = zone.width - img.width;\r\n            zoneA.height = img.height;\r\n            zoneB.x = zone.x;\r\n            zoneB.y = zone.y + img.height;\r\n            zoneB.width = zone.width;\r\n            zoneB.height = zone.height - img.height;\r\n        }\r\n        else {\r\n            zoneA.x = zone.x;\r\n            zoneA.y = zone.y + img.height;\r\n            zoneA.width = img.width;\r\n            zoneA.height = zone.height - img.height;\r\n            zoneB.x = zone.x + img.width;\r\n            zoneB.y = zone.y;\r\n            zoneB.width = zone.width - img.width;\r\n            zoneB.height = zone.height;\r\n        }\r\n        if (zoneA.width > 0 && zoneA.height > 0)\r\n            this.zones.push(zoneA);\r\n        if (zoneB.width > 0 && zoneB.height > 0)\r\n            this.zones.push(zoneB);\r\n        zone.width = img.width;\r\n        zone.height = img.height;\r\n    }\r\n    getZone(width = 0, height = 0) {\r\n        // we sort the zones \r\n        this.zones = this.zones.sort(this.sortZones);\r\n        let i = 0;\r\n        // then we loop other the zones array in order to grab the most accruate one\r\n        for (; i < this.zones.length; i++) {\r\n            if (width <= this.zones[i].width && height <= this.zones[i].height && this.zones[i].imgInfo == null) {\r\n                return this.zones[i];\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n    removeEmptyZones() {\r\n        let i = this.zones.length;\r\n        const empty = this.zones.filter(zone => zone.imgInfo === null);\r\n        while (empty.length > 0) {\r\n            const cur = empty.shift();\r\n            const pos = this.zones.indexOf(cur);\r\n            this.zones.splice(pos, 1);\r\n        }\r\n    }\r\n    sortZones(a, b) {\r\n        let area1 = a.width * a.height;\r\n        let area2 = b.width * b.height;\r\n        return (area1 < area2) ? -1 : 1;\r\n    }\r\n    static toJSON(atlas) {\r\n        const output = {\r\n            width: atlas.width,\r\n            height: atlas.height,\r\n            zones: atlas.zones.map((zone) => {\r\n                return {\r\n                    x: zone.x,\r\n                    y: zone.y,\r\n                    offsetX: zone.imgInfo.offsetX,\r\n                    offsetY: zone.imgInfo.offsetY,\r\n                    originalWidth: zone.imgInfo.originalWidth,\r\n                    originalHeight: zone.imgInfo.originalHeight,\r\n                    width: zone.width,\r\n                    height: zone.height,\r\n                    id: zone.imgInfo.id,\r\n                    img: zone.imgInfo.id,\r\n                };\r\n            })\r\n        };\r\n        return JSON.stringify(output);\r\n    }\r\n}\r\nexports.Atlas = Atlas;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/vo/Atlas.js?");

/***/ }),

/***/ "./dist/core/model/vo/ImageInfo.js":
/*!*****************************************!*\
  !*** ./dist/core/model/vo/ImageInfo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ImageInfo = void 0;\r\nconst CanvasUtils_1 = __webpack_require__(/*! ../../utils/CanvasUtils */ \"./dist/core/utils/CanvasUtils.js\");\r\nconst detectEdges_1 = __webpack_require__(/*! ../../utils/detectEdges */ \"./dist/core/utils/detectEdges.js\");\r\nclass ImageInfo {\r\n    constructor(img, optimize = true) {\r\n        this.id = \"\";\r\n        this.src = \"\";\r\n        this.area = 0;\r\n        this.offsetX = 0;\r\n        this.offsetY = 0;\r\n        this.originalWidth = 0;\r\n        this.originalHeight = 0;\r\n        this.width = 0;\r\n        this.height = 0;\r\n        let bounds = { x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight };\r\n        let filename = img.src.toString();\r\n        filename = filename.substring(filename.lastIndexOf(\"/\") + 1);\r\n        filename = filename.substring(filename.lastIndexOf(\"\\\\\") + 1);\r\n        filename = filename.substring(0, filename.lastIndexOf(\".\"));\r\n        this.originalWidth = img.naturalWidth;\r\n        this.originalHeight = img.naturalHeight;\r\n        if (optimize) {\r\n            CanvasUtils_1.default.copyImg(ImageInfo._canvas, img);\r\n            bounds = (0, detectEdges_1.default)(ImageInfo._canvas, 10);\r\n        }\r\n        this.offsetX = bounds.x;\r\n        this.offsetY = bounds.y;\r\n        this.width = bounds.width;\r\n        this.height = bounds.height;\r\n        this.src = img.src.toString();\r\n        this.id = filename;\r\n        this.area = this.width * this.height;\r\n    }\r\n}\r\nexports.ImageInfo = ImageInfo;\r\nImageInfo._canvas = CanvasUtils_1.default.create(100, 100);\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/model/vo/ImageInfo.js?");

/***/ }),

/***/ "./dist/core/service/DrawService.js":
/*!******************************************!*\
  !*** ./dist/core/service/DrawService.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst canvas_1 = __webpack_require__(/*! canvas */ \"canvas\");\r\nclass DrawService {\r\n    constructor() {\r\n        this._pos = 0;\r\n        this._scene = null;\r\n        this._drawBorder = false;\r\n        this._currentImg = null;\r\n        this._currentZone = null;\r\n        this._currentAtlas = null;\r\n        this._resolver = null;\r\n    }\r\n    _drawImg() {\r\n        const context = this._scene.getContext(\"2d\");\r\n        const img = this._currentImg;\r\n        const zone = this._currentZone;\r\n        context.save();\r\n        context.drawImage(img, zone.imgInfo.offsetX, zone.imgInfo.offsetY, zone.width, zone.height, zone.x, zone.y, zone.width, zone.height);\r\n        context.restore();\r\n        if (this._drawBorder) {\r\n            const color = \"red\";\r\n            context.save();\r\n            context.strokeStyle = color;\r\n            context.lineWidth = 2;\r\n            context.moveTo(zone.x, zone.y);\r\n            context.lineTo(zone.x + zone.width, zone.y);\r\n            context.lineTo(zone.x + zone.width, zone.y + zone.height);\r\n            context.lineTo(zone.x, zone.y + zone.height);\r\n            context.lineTo(zone.x, zone.y);\r\n            context.stroke();\r\n            context.restore();\r\n        }\r\n    }\r\n    _loadNext() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const atlas = this._currentAtlas;\r\n            const resolve = this._resolver;\r\n            if (this._pos < atlas.zones.length) {\r\n                this._currentZone = atlas.zones[this._pos];\r\n                try {\r\n                    const img = yield (0, canvas_1.loadImage)(this._currentZone.imgInfo.src);\r\n                    this._currentImg = img;\r\n                    this._drawImg();\r\n                }\r\n                catch (error) {\r\n                    console.log(error);\r\n                }\r\n                this._pos++;\r\n                this._loadNext();\r\n            }\r\n            else {\r\n                resolve(this._scene);\r\n            }\r\n        });\r\n    }\r\n    drawAtlas(atlas, drawBorder = false) {\r\n        this._scene = (0, canvas_1.createCanvas)(atlas.width, atlas.height);\r\n        this._drawBorder = drawBorder;\r\n        this._currentAtlas = atlas;\r\n        this._pos = 0;\r\n        const promise = new Promise((resolve) => {\r\n            this._resolver = resolve;\r\n            this._loadNext();\r\n        });\r\n        return promise;\r\n    }\r\n}\r\nexports[\"default\"] = DrawService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/DrawService.js?");

/***/ }),

/***/ "./dist/core/service/FileService.js":
/*!******************************************!*\
  !*** ./dist/core/service/FileService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst fs = __webpack_require__(/*! fs */ \"fs\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nclass FileService {\r\n    mkDir(path) {\r\n        fs.mkdirSync(path, { recursive: true });\r\n    }\r\n    rmDir(path) {\r\n        if (!this.fileExists(path))\r\n            return;\r\n        const paths = this.readDir(path);\r\n        const files = this.keepOnlyFiles(paths);\r\n        const dirs = this.keepOnlyDirs(paths);\r\n        files.forEach(fs.unlinkSync);\r\n        dirs.forEach((value) => {\r\n            this.rmDir(value);\r\n        });\r\n        fs.rmdirSync(path);\r\n    }\r\n    readDir(path, recursive = false, result = []) {\r\n        const files = fs.readdirSync(path);\r\n        files.forEach((filename) => {\r\n            const filepath = path + filename;\r\n            const stats = fs.statSync(filepath);\r\n            if (stats.isDirectory()) {\r\n                this.readDir(filepath + \"/\", recursive, result);\r\n            }\r\n            result.push(filepath);\r\n        });\r\n        return result;\r\n    }\r\n    getImagesInDir(directory) {\r\n        const extensions = ['.png', '.jpg', '.jpeg'];\r\n        const datas = this.readDir(directory, true);\r\n        const files = this.keepOnlyFiles(datas);\r\n        return files.filter((value) => {\r\n            const ext = path.extname(value);\r\n            return extensions.includes(ext);\r\n        });\r\n    }\r\n    keepOnlyFiles(filepaths) {\r\n        return filepaths.filter((value) => {\r\n            return fs.statSync(value).isFile();\r\n        });\r\n    }\r\n    keepOnlyDirs(filepaths) {\r\n        return filepaths.filter((value) => {\r\n            return fs.statSync(value).isDirectory();\r\n        });\r\n    }\r\n    fileExists(filepath) {\r\n        return fs.existsSync(filepath);\r\n    }\r\n    writeJSON(data, filepath) {\r\n        fs.writeFileSync(filepath, data);\r\n    }\r\n    writeImage(canvas, filepath) {\r\n        const buffer = canvas.toBuffer();\r\n        fs.writeFileSync(filepath, buffer);\r\n    }\r\n    removeFile(filepath) {\r\n        fs.unlinkSync(filepath);\r\n    }\r\n}\r\nexports[\"default\"] = FileService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/FileService.js?");

/***/ }),

/***/ "./dist/core/service/PackerService.js":
/*!********************************************!*\
  !*** ./dist/core/service/PackerService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PackerService = void 0;\r\nconst Atlas_1 = __webpack_require__(/*! ../model/vo/Atlas */ \"./dist/core/model/vo/Atlas.js\");\r\nclass PackerService {\r\n    constructor() { }\r\n    sortImagesInfosByAreaAsc(a, b) {\r\n        return (a.area > b.area) ? -1 : 1;\r\n    }\r\n    pack(infos, width = 0, height = 0) {\r\n        let results = [];\r\n        let currentZone = null;\r\n        let currentImgInfo = null;\r\n        let currentAtlas = null;\r\n        let i = 0;\r\n        //while there's images into the images array\r\n        while (infos.length > 0) {\r\n            // we sort the infos\r\n            infos = infos.sort(this.sortImagesInfosByAreaAsc);\r\n            // we create a new Atlas\r\n            currentAtlas = new Atlas_1.Atlas(width, height);\r\n            // we loop other the images array\r\n            for (i = 0; i < infos.length; i++) {\r\n                currentImgInfo = infos[i];\r\n                // we try to find a zone which can contains our image\r\n                currentZone = currentAtlas.getZone(currentImgInfo.width, currentImgInfo.height);\r\n                // if we cant find one\r\n                if (currentZone == null)\r\n                    continue;\r\n                // then we put the img into the zone \r\n                currentZone.imgInfo = currentImgInfo;\r\n                //and create two zones from the current one\r\n                currentAtlas.splitZone(currentZone);\r\n            }\r\n            results.push(currentAtlas);\r\n            // remove empty zones \r\n            currentAtlas.removeEmptyZones();\r\n            // remove infos from the array\r\n            for (i = 0; i < currentAtlas.zones.length; i++) {\r\n                infos.splice(infos.indexOf(currentAtlas.zones[i].imgInfo), 1);\r\n            }\r\n        }\r\n        return results;\r\n    }\r\n}\r\nexports.PackerService = PackerService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/PackerService.js?");

/***/ }),

/***/ "./dist/core/service/UserArgsService.js":
/*!**********************************************!*\
  !*** ./dist/core/service/UserArgsService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst commander_1 = __webpack_require__(/*! commander */ \"commander\");\r\nclass UserArgsService {\r\n    constructor() {\r\n        commander_1.program.version(\"1.11.0\");\r\n        commander_1.program.option('--dir <type>', 'the texture source directory', './');\r\n        commander_1.program.option('--size <number>', 'the output atlas size', '2048');\r\n        commander_1.program.option('--output <type>', 'the output dir', './');\r\n        commander_1.program.option('--optimize <number>', 'optimize by cropping transparent pixels', '1');\r\n        commander_1.program.option('--debug <number>', 'draws regions', '0');\r\n        commander_1.program.parse(process.argv);\r\n    }\r\n    getUserArg(key) {\r\n        return commander_1.program.opts()[key] || null;\r\n    }\r\n}\r\nexports[\"default\"] = UserArgsService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/service/UserArgsService.js?");

/***/ }),

/***/ "./dist/core/utils/CanvasUtils.js":
/*!****************************************!*\
  !*** ./dist/core/utils/CanvasUtils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst canvas_1 = __webpack_require__(/*! canvas */ \"canvas\");\r\n/**\r\n * The CanvasUtils class is a set of utilitaries for canvas elements.\r\n */\r\nclass CanvasUtils {\r\n    static create(width = 1, height = 1) {\r\n        const canvas = (0, canvas_1.createCanvas)(width, height);\r\n        canvas.width = width;\r\n        canvas.height = height;\r\n        return canvas;\r\n    }\r\n    static copyImg(canvas, img) {\r\n        canvas.width = img.naturalWidth;\r\n        canvas.height = img.naturalHeight;\r\n        const context = canvas.getContext(\"2d\");\r\n        context.clearRect(0, 0, canvas.width, canvas.height);\r\n        context.drawImage(img, 0, 0, canvas.width, canvas.height);\r\n    }\r\n    static createFromImage(img) {\r\n        const canvas = CanvasUtils.create(img.naturalWidth, img.naturalHeight);\r\n        const context = canvas.getContext(\"2d\");\r\n        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);\r\n        return canvas;\r\n    }\r\n    static canvasToImg(canvas) {\r\n        const img = new canvas_1.Image();\r\n        img.width = canvas.width;\r\n        img.height = canvas.height;\r\n        img.src = canvas.toDataURL(\"image/png\");\r\n        return img;\r\n    }\r\n    static crop(source, bounds) {\r\n        const canvas = CanvasUtils.create(bounds.width, bounds.height);\r\n        const context = canvas.getContext(\"2d\");\r\n        context.save();\r\n        context.translate(-bounds.x, -bounds.y);\r\n        context.drawImage(source, 0, 0);\r\n        context.restore();\r\n        return canvas;\r\n    }\r\n    static fillRect(canvas, color, x, y, width, height) {\r\n        const context = canvas.getContext(\"2d\");\r\n        context.save();\r\n        context.beginPath();\r\n        context.fillStyle = color;\r\n        context.translate(x, y);\r\n        context.fillRect(0, 0, width, height);\r\n        context.fill();\r\n        context.closePath();\r\n        context.restore();\r\n    }\r\n    static getCanvasPixels(canvas) {\r\n        // const offscreen = CanvasUtils.create(canvas.width, canvas.height); \r\n        // offscreen.getContext(\"2d\").drawImage(canvas, 0, 0); \r\n        // return offscreen.getContext(\"2d\").getImageData(0,0,offscreen.width, offscreen.height).data;\r\n        const context = canvas.getContext(\"2d\");\r\n        return context.getImageData(0, 0, canvas.width, canvas.height).data;\r\n    }\r\n    static pixelsToAlphaMap(pixels) {\r\n        const result = [];\r\n        for (let i = 0; i < pixels.length; i += 4) {\r\n            result.push(pixels[i + 3]);\r\n        }\r\n        return result;\r\n    }\r\n    static pixelsToRGBA(pixels) {\r\n        const result = [];\r\n        for (let i = 0; i < pixels.length; i += 4) {\r\n            result.push({\r\n                r: pixels[i],\r\n                g: pixels[i + 1],\r\n                b: pixels[i + 2],\r\n                a: pixels[i + 3],\r\n            });\r\n        }\r\n        return result;\r\n    }\r\n    static getCanvasPixel(canvas, x, y) {\r\n        const pixels = CanvasUtils.getCanvasPixels(canvas);\r\n        const pos = Math.floor(y * canvas.width * 4) + (x * 4);\r\n        return [\r\n            pixels[pos],\r\n            pixels[pos + 1],\r\n            pixels[pos + 2],\r\n            pixels[pos + 3],\r\n        ];\r\n    }\r\n    static canvasPixelToRGBA(pixelData) {\r\n        return {\r\n            r: pixelData[0],\r\n            g: pixelData[1],\r\n            b: pixelData[2],\r\n            a: pixelData[3]\r\n        };\r\n    }\r\n    static pixelsAreTheSame(pixelsA, pixelsB) {\r\n        if (pixelsA.length !== pixelsB.length)\r\n            return false;\r\n        for (let i = 0; i < pixelsA.length; i++) {\r\n            if (pixelsA[i] !== pixelsB[i])\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n}\r\nexports[\"default\"] = CanvasUtils;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/utils/CanvasUtils.js?");

/***/ }),

/***/ "./dist/core/utils/detectEdges.js":
/*!****************************************!*\
  !*** ./dist/core/utils/detectEdges.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst CanvasUtils_1 = __webpack_require__(/*! ./CanvasUtils */ \"./dist/core/utils/CanvasUtils.js\");\r\nfunction detectEdges(png, limit = 1) {\r\n    const pixels = CanvasUtils_1.default.getCanvasPixels(png);\r\n    let left = Infinity;\r\n    let right = -Infinity;\r\n    let top = Infinity;\r\n    let bottom = -Infinity;\r\n    let pos = 0;\r\n    for (let i = 3; i < pixels.length; i += 4) {\r\n        const row = (pos / png.width) >> 0;\r\n        const col = pos % png.width;\r\n        pos++;\r\n        if (pixels[i] < limit)\r\n            continue;\r\n        left = col < left ? col : left;\r\n        top = row < top ? row : top;\r\n        right = col > right ? col : right;\r\n        bottom = row > bottom ? row : bottom;\r\n    }\r\n    return { x: left, y: top, width: right - left, height: bottom - top };\r\n}\r\nexports[\"default\"] = detectEdges;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/utils/detectEdges.js?");

/***/ }),

/***/ "./dist/core/utils/nextPowerOf2.js":
/*!*****************************************!*\
  !*** ./dist/core/utils/nextPowerOf2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction getNextPowerOf2(value) {\r\n    let num = 1;\r\n    while (num < value) {\r\n        num *= 2;\r\n    }\r\n    return num;\r\n}\r\nexports[\"default\"] = getNextPowerOf2;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/utils/nextPowerOf2.js?");

/***/ }),

/***/ "./dist/core/view/AppMediator.js":
/*!***************************************!*\
  !*** ./dist/core/view/AppMediator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"@thetinyspark/coffe-maker\");\r\nconst app_constants_1 = __webpack_require__(/*! ../config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nclass AppMediator extends coffe_maker_1.Mediator {\r\n    constructor() {\r\n        super();\r\n        this._onRemoveBigImage = (notification) => {\r\n            const img = notification.getPayload();\r\n            const msg = `... skipping ${img.src} because it is too big`;\r\n            console.log(msg);\r\n        };\r\n    }\r\n    start() {\r\n        this.getFacade().subscribe(app_constants_1.LOG_REMOVE_BIG_IMAGE, this._onRemoveBigImage);\r\n        this.getFacade().subscribe(app_constants_1.LOAD_TEXTURES, this._onLoadTextures);\r\n        this.getFacade().subscribe(app_constants_1.PARSE_USER_ARGS, this._onUserArgs);\r\n        this._onStart();\r\n    }\r\n    _onUserArgs() {\r\n        const msg = `>>> loading user arguments`;\r\n        console.log(msg);\r\n    }\r\n    _onPack() {\r\n        const msg = `>>> pack images`;\r\n        console.log(msg);\r\n    }\r\n    _onStart() {\r\n        const msg = `\r\n******************************************************************\r\n**************** THANK YOU FOR USING TEXTURE PACKER **************\r\n******************************************************************\r\n        `;\r\n        console.log(msg);\r\n    }\r\n    _onLoadTextures(notification) {\r\n        const msg = `>>> loading textures`;\r\n        console.log(msg);\r\n    }\r\n}\r\nexports[\"default\"] = AppMediator;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/view/AppMediator.js?");

/***/ }),

/***/ "./dist/core/view/LoadingBar.js":
/*!**************************************!*\
  !*** ./dist/core/view/LoadingBar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst process = __webpack_require__(/*! process */ \"process\");\r\nclass LoadingBar {\r\n    constructor() { }\r\n    start() { }\r\n    progress(num) {\r\n        num = Math.round(num);\r\n        const numFilled = Math.round(num / 5);\r\n        const numEmpties = (100 / 5) - numFilled;\r\n        const filled = (String)(\"=\").repeat(numFilled);\r\n        const empty = (String)(\"-\").repeat(numEmpties);\r\n        if (num === 100) {\r\n            process.stdout.write(\"[\" + filled + empty + \"] \" + num + \"%\");\r\n            process.stdout.write(\"\\n\");\r\n        }\r\n        else {\r\n            process.stdout.write(\"[\" + filled + empty + \"] \" + num + \"% \\r\");\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = LoadingBar;\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/core/view/LoadingBar.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("//#!/usr/bin/env node\r\n\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_constants_1 = __webpack_require__(/*! ./core/config/app.constants */ \"./dist/core/config/app.constants.js\");\r\nconst facade_1 = __webpack_require__(/*! ./core/config/facade */ \"./dist/core/config/facade.js\");\r\nfacade_1.facade.sendNotification(app_constants_1.START_APPLICATION);\r\n\n\n//# sourceURL=webpack://@thetinyspark/texture-packer/./dist/index.js?");

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

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

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