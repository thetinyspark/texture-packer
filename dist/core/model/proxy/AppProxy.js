"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
const AppModel_1 = require("../state/AppModel");
class AppProxy extends coffe_maker_1.Proxy {
    constructor() {
        super();
        this._model = new AppModel_1.default();
    }
    setImagesInfo(imageInfos) {
        this._model.setState({ imageInfos });
    }
    getImagesInfo() {
        const state = this._model.getState();
        return state.imageInfos;
    }
    setAtlases(atlases) {
        this._model.setState({ atlases });
    }
    getAtlases() {
        const state = this._model.getState();
        return state.atlases;
    }
    getTextures() {
        const state = this._model.getState();
        return state.textures;
    }
    setTextures(textures) {
        this._model.setState({ textures });
    }
    getSourceDir() {
        const state = this._model.getState();
        return state.sourceDir;
    }
    getOuputDir() {
        const state = this._model.getState();
        return state.outputDir;
    }
    getAtlasSize() {
        const state = this._model.getState();
        return state.atlasSize;
    }
    setUserArgs(sourceDir, outputDir, atlasSize) {
        this._model.setState({
            sourceDir,
            outputDir,
            atlasSize
        });
    }
}
exports.default = AppProxy;
