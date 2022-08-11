import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { Image } from "canvas";
import { APPLICATION_PROXY_TOKEN, LOG_REMOVE_BIG_IMAGE, PACK_IMAGES } from "../config/app.constants";
import { facade } from "../config/facade";
import IAppProxy from "../model/proxy/IAppProxy";
import { ImageInfo } from "../model/vo/ImageInfo";

export default class RemoveBigImagesCommand implements ICommand{
    execute(notification: INotification): void {

        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const images = proxy.getImagesInfo();
        const size = proxy.getAtlasSize(); 
        this.filter(images, size, proxy);
        facade.sendNotification(PACK_IMAGES);
    }

    public filter(images:ImageInfo[], size:number, proxy:IAppProxy):void{
        const filtered = images.filter( 
            (info:ImageInfo)=>{
                if( info.width > size || info.height  > size ){
                    facade.sendNotification(LOG_REMOVE_BIG_IMAGE, info);
                    return false;
                }
                else{
                    return true;
                }
            }
        );
        proxy.setImagesInfo(filtered);
    }
    
}