import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { Image, loadImage  } from "canvas";
import { APPLICATION_PROXY_TOKEN, FILE_SERVICE_TOKEN, REMOVE_BIG_IMAGES, USER_ARGS_SERVICE } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";
import IAppProxy from "../model/proxy/IAppProxy";
import { ImageInfo } from "../model/vo/ImageInfo";
import IFileService from "../service/IFileService";
import IUserArgsService from "../service/IUserArgsService";
import LoadingBar from "../view/LoadingBar";

export default class LoadTextureCommand implements ICommand{
    execute(notification: INotification): void {
        
        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const sourceDir = proxy.getSourceDir(); 
        const service:IFileService = container.resolve(FILE_SERVICE_TOKEN);
        const service2:IUserArgsService = container.resolve(USER_ARGS_SERVICE);
        const optimize:boolean = parseInt(service2.getUserArg('optimize')) === 1; 

        if( !service.fileExists(sourceDir) ){
            console.log("non existing source dir:", sourceDir);
            return;
        }

        const images = service.getImagesInDir(sourceDir);
        this._loadAndStore(images, proxy, optimize).then( 
            ()=>{
                facade.sendNotification(REMOVE_BIG_IMAGES);
            }
        );
    }   

    public async _loadAndStore(paths:string[], proxy:IAppProxy, optimize:boolean = true):Promise<void>{

        const bar = new LoadingBar();
        bar.start();

        const infos:ImageInfo[] = await new Promise( 
            (resolve, reject)=>{
                const infos = [];
                let counter = 0;
                let max = paths.length;
                let img = null;
                const loadNext = async ()=>{
                    if( paths.length === 0 ){
                        resolve(infos); 
                        return;
                    }

                    img = await loadImage(paths.shift());
                    infos.push(new ImageInfo(img, optimize));
                    counter++;
                    const percent = counter/max*100;
                    bar.progress(percent);
                    loadNext();
                }; 
                loadNext();
            }
        );
        proxy.setImagesInfo(infos);
    }
    
}