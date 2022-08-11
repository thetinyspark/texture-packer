import { IModel, Proxy } from "@thetinyspark/coffe-maker";
import { Image } from "canvas";
import AppModel from "../state/AppModel";
import { Atlas } from "../vo/Atlas";
import { ImageInfo } from "../vo/ImageInfo";
import IAppProxy from "./IAppProxy";

export default class AppProxy extends Proxy implements IAppProxy{
    
    private _model:IModel;

    constructor(){
        super();
        this._model = new AppModel();
    }

    setImagesInfo(imageInfos:ImageInfo[]):void{
        this._model.setState({imageInfos});
    }
    
    getImagesInfo():ImageInfo[]{
        const state = this._model.getState(); 
        return state.imageInfos;
    }

    setAtlases(atlases: Atlas[]): void {
        this._model.setState({atlases});
    }

    getAtlases(): Atlas[] {
        const state = this._model.getState(); 
        return state.atlases;
    }
    
    getTextures(): Image[] {
        const state = this._model.getState(); 
        return state.textures;
    }
    
    setTextures(textures: Image[]) {
        this._model.setState({textures});
    }

    getSourceDir(): string {
        const state = this._model.getState(); 
        return state.sourceDir;
    }

    getOuputDir(): string {
        const state = this._model.getState(); 
        return state.outputDir;
    }

    getAtlasSize(): number {
        const state = this._model.getState(); 
        return state.atlasSize;
    }

    public setUserArgs( sourceDir:string, outputDir:string, atlasSize:number ){
        this._model.setState(
            {
                sourceDir, 
                outputDir, 
                atlasSize
            }
        );
    }
    
}