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
var app_constants_1 = require("../config/app.constants");
var AppMediator = /** @class */ (function (_super) {
    __extends(AppMediator, _super);
    function AppMediator() {
        var _this = _super.call(this) || this;
        _this._onRemoveBigImage = function (notification) {
            var img = notification.getPayload();
            var msg = "... skipping " + img.src + " because it is too big";
            console.log(msg);
        };
        return _this;
    }
    AppMediator.prototype.start = function () {
        this.getFacade().subscribe(app_constants_1.LOG_REMOVE_BIG_IMAGE, this._onRemoveBigImage);
        this.getFacade().subscribe(app_constants_1.LOAD_TEXTURES, this._onLoadTextures);
        this.getFacade().subscribe(app_constants_1.PARSE_USER_ARGS, this._onUserArgs);
        this._onStart();
    };
    AppMediator.prototype._onUserArgs = function () {
        var msg = ">>> loading user arguments";
        console.log(msg);
    };
    AppMediator.prototype._onPack = function () {
        var msg = ">>> pack images";
        console.log(msg);
    };
    AppMediator.prototype._onStart = function () {
        var msg = "\n******************************************************************\n**************** THANK YOU FOR USING TEXTURE PACKER **************\n******************************************************************\n        ";
        console.log(msg);
    };
    AppMediator.prototype._onLoadTextures = function (notification) {
        var msg = ">>> loading textures";
        console.log(msg);
    };
    return AppMediator;
}(coffe_maker_1.Mediator));
exports.default = AppMediator;
