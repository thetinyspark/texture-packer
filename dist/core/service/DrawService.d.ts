import { Canvas } from "canvas";
import { Atlas } from "../model/vo/Atlas";
import IDrawService from "./IDrawService";
export default class DrawService implements IDrawService {
    private _pos;
    private _scene;
    private _drawBorder;
    private _currentImg;
    private _currentZone;
    private _currentAtlas;
    private _resolver;
    private _drawImg;
    _loadNext(): Promise<void>;
    drawAtlas(atlas: Atlas, drawBorder?: boolean): Promise<Canvas>;
}
