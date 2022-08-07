import { Canvas } from "canvas";
import { Atlas } from "../model/vo/Atlas";

export default interface IDrawService{
    drawAtlas(atlas:Atlas, drawBorder:boolean):Canvas
}