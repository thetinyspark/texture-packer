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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("canvas");
var DrawService = /** @class */ (function () {
    function DrawService() {
        this._pos = 0;
        this._scene = null;
        this._drawBorder = false;
        this._currentImg = null;
        this._currentZone = null;
        this._currentAtlas = null;
        this._resolver = null;
    }
    DrawService.prototype._drawImg = function () {
        var context = this._scene.getContext("2d");
        var img = this._currentImg;
        var zone = this._currentZone;
        context.save();
        context.drawImage(img, zone.imgInfo.offsetX, zone.imgInfo.offsetY, zone.width, zone.height, zone.x, zone.y, zone.width, zone.height);
        context.restore();
        if (this._drawBorder) {
            var color = "red";
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
    };
    DrawService.prototype._loadNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var atlas, resolve, img, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        atlas = this._currentAtlas;
                        resolve = this._resolver;
                        if (!(this._pos < atlas.zones.length)) return [3 /*break*/, 5];
                        this._currentZone = atlas.zones[this._pos];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, canvas_1.loadImage)(this._currentZone.imgInfo.src)];
                    case 2:
                        img = _a.sent();
                        this._currentImg = img;
                        this._drawImg();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this._pos++;
                        this._loadNext();
                        return [3 /*break*/, 6];
                    case 5:
                        resolve(this._scene);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DrawService.prototype.drawAtlas = function (atlas, drawBorder) {
        var _this = this;
        if (drawBorder === void 0) { drawBorder = false; }
        this._scene = (0, canvas_1.createCanvas)(atlas.width, atlas.height);
        this._drawBorder = drawBorder;
        this._currentAtlas = atlas;
        this._pos = 0;
        var promise = new Promise(function (resolve) {
            _this._resolver = resolve;
            _this._loadNext();
        });
        return promise;
    };
    return DrawService;
}());
exports.default = DrawService;
