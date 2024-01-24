"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
class DrawService {
    constructor() {
        this._pos = 0;
        this._scene = null;
        this._drawBorder = false;
        this._currentImg = null;
        this._currentZone = null;
        this._currentAtlas = null;
        this._resolver = null;
    }
    _drawImg() {
        const context = this._scene.getContext("2d");
        const img = this._currentImg;
        const zone = this._currentZone;
        context.save();
        context.drawImage(img, zone.imgInfo.offsetX, zone.imgInfo.offsetY, zone.width, zone.height, zone.x, zone.y, zone.width, zone.height);
        context.restore();
        if (this._drawBorder) {
            const color = "red";
            context.save();
            context.strokeStyle = color;
            context.lineWidth = 2;
            context.moveTo(zone.x, zone.y);
            context.lineTo(zone.x + zone.width, zone.y);
            context.lineTo(zone.x + zone.width, zone.y + zone.height);
            context.lineTo(zone.x, zone.y + zone.height);
            context.lineTo(zone.x, zone.y);
            context.stroke();
            context.restore();
        }
    }
    _loadNext() {
        return __awaiter(this, void 0, void 0, function* () {
            const atlas = this._currentAtlas;
            const resolve = this._resolver;
            if (this._pos < atlas.zones.length) {
                this._currentZone = atlas.zones[this._pos];
                try {
                    const img = yield (0, canvas_1.loadImage)(this._currentZone.imgInfo.src);
                    this._currentImg = img;
                    this._drawImg();
                }
                catch (error) {
                    console.log(error);
                }
                this._pos++;
                this._loadNext();
            }
            else {
                resolve(this._scene);
            }
        });
    }
    drawAtlas(atlas, drawBorder = false) {
        this._scene = (0, canvas_1.createCanvas)(atlas.width, atlas.height);
        this._drawBorder = drawBorder;
        this._currentAtlas = atlas;
        this._pos = 0;
        const promise = new Promise((resolve) => {
            this._resolver = resolve;
            this._loadNext();
        });
        return promise;
    }
}
exports.default = DrawService;
