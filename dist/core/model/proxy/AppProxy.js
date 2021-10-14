"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var coffe_maker_1 = require("@thetinyspark/coffe-maker");
var AppModel_1 = require("../state/AppModel");
var AppProxy = /** @class */ (function (_super) {
    __extends(AppProxy, _super);
    function AppProxy() {
        var _this = _super.call(this) || this;
        _this._model = new AppModel_1.default();
        return _this;
    }
    AppProxy.prototype.setAtlases = function (atlases) {
        this._model.setState({ atlases: atlases });
    };
    AppProxy.prototype.getAtlases = function () {
        var state = this._model.getState();
        return state.atlases;
    };
    AppProxy.prototype.getTextures = function () {
        var state = this._model.getState();
        return state.textures;
    };
    AppProxy.prototype.setTextures = function (textures) {
        this._model.setState({ textures: textures });
    };
    AppProxy.prototype.getSourceDir = function () {
        var state = this._model.getState();
        return state.sourceDir;
    };
    AppProxy.prototype.getOuputDir = function () {
        var state = this._model.getState();
        return state.outputDir;
    };
    AppProxy.prototype.getAtlasSize = function () {
        var state = this._model.getState();
        return state.atlasSize;
    };
    AppProxy.prototype.setUserArgs = function (sourceDir, outputDir, atlasSize) {
        this._model.setState({
            sourceDir: sourceDir,
            outputDir: outputDir,
            atlasSize: atlasSize
        });
    };
    return AppProxy;
}(coffe_maker_1.Proxy));
exports.default = AppProxy;
