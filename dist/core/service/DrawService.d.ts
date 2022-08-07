import { Canvas } from "canvas";
import { Atlas } from "../model/vo/Atlas";
import IDrawService from "./IDrawService";
export default class DrawService implements IDrawService {
    drawAtlas(atlas: Atlas, drawBorder?: boolean): Canvas;
}
