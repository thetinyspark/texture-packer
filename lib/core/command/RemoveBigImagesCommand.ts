import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { Image } from "canvas";
import { APPLICATION_PROXY_TOKEN, LOG_REMOVE_BIG_IMAGE, PACK_IMAGES } from "../config/app.constants";
import { facade } from "../config/facade";
import IAppProxy from "../model/proxy/IAppProxy";

export default class RemoveBigImagesCommand implements ICommand{
    execute(notification: INotification): void {
        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const images = proxy.getTextures();
        const size = proxy.getAtlasSize(); 

        const filtered = images.filter( 
            (img:Image)=>{
                
                if( img.width > size || img.height  > size ){
                    facade.sendNotification(LOG_REMOVE_BIG_IMAGE, img);
                    return false;
                }
                else{
                    return true;
                }
            }
        );

        proxy.setTextures(filtered);
        facade.sendNotification(PACK_IMAGES);
    }
    
}