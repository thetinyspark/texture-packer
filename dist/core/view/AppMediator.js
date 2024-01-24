"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
const app_constants_1 = require("../config/app.constants");
class AppMediator extends coffe_maker_1.Mediator {
    constructor() {
        super();
        this._onRemoveBigImage = (notification) => {
            const img = notification.getPayload();
            const msg = `... skipping ${img.src} because it is too big`;
            console.log(msg);
        };
    }
    start() {
        this.getFacade().subscribe(app_constants_1.LOG_REMOVE_BIG_IMAGE, this._onRemoveBigImage);
        this.getFacade().subscribe(app_constants_1.LOAD_TEXTURES, this._onLoadTextures);
        this.getFacade().subscribe(app_constants_1.PARSE_USER_ARGS, this._onUserArgs);
        this._onStart();
    }
    _onUserArgs() {
        const msg = `>>> loading user arguments`;
        console.log(msg);
    }
    _onPack() {
        const msg = `>>> pack images`;
        console.log(msg);
    }
    _onStart() {
        const msg = `
******************************************************************
**************** THANK YOU FOR USING TEXTURE PACKER **************
******************************************************************
        `;
        console.log(msg);
    }
    _onLoadTextures(notification) {
        const msg = `>>> loading textures`;
        console.log(msg);
    }
}
exports.default = AppMediator;
