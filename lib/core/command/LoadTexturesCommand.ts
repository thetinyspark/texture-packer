import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { Image, loadImage } from "canvas";
import { APPLICATION_PROXY_TOKEN, FILE_SERVICE_TOKEN, REMOVE_BIG_IMAGES } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";
import IAppProxy from "../model/proxy/IAppProxy";
import IFileService from "../service/IFileService";

export default class LoadTextureCommand implements ICommand{
    execute(notification: INotification): void {
        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const sourceDir = proxy.getSourceDir(); 
        const service:IFileService = container.resolve(FILE_SERVICE_TOKEN);

        if( !service.fileExists(sourceDir) ){
            console.log("non existing source dir:", sourceDir);
            return;
        }

        const images = service.getImagesInDir(sourceDir);
        this._loadAndStore(images, proxy);
    }   

    private async _loadAndStore(paths:string[], proxy:IAppProxy):Promise<void>{
        const images:Image[] = await this._load(paths);
        proxy.setTextures(images);
        facade.sendNotification(REMOVE_BIG_IMAGES);
    }

    private _load(paths:string[]):Promise<Image[]> {
        const promises:Promise<Image>[] = paths.map( 
            (path:string)=>{
                return loadImage(path);
            }
        ); 

        return Promise.all(promises);
    }
    
}