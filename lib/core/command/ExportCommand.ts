import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { APPLICATION_PROXY_TOKEN, DRAWING_SERVICE, FILE_SERVICE_TOKEN, USER_ARGS_SERVICE } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";
import IAppProxy from "../model/proxy/IAppProxy";
import { Atlas } from "../model/vo/Atlas";
import IDrawService from "../service/IDrawService";
import IFileService from "../service/IFileService";
import IUserArgsService from "../service/IUserArgsService";

export default class ExportCommand implements ICommand{
    execute(notification: INotification): void {
        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy; 
        const outputDir = proxy.getOuputDir();
        const atlases = proxy.getAtlases();
        const service:IFileService = container.resolve(FILE_SERVICE_TOKEN);
        const drawer:IDrawService = container.resolve(DRAWING_SERVICE);
        const service2:IUserArgsService = container.resolve(USER_ARGS_SERVICE);
        const debug:boolean = parseInt(service2.getUserArg('debug')) === 1; 

        atlases.forEach( 
            (currentAtlas:Atlas, index:number)=>{
                const name:string = 'atlas_'+index; 
                const jsonName = name+'.json';
                const pngName = name+'.png';

                service.writeJSON(
                    Atlas.toJSON(currentAtlas), 
                    outputDir+'/'+jsonName
                );

                service.writeImage(
                    drawer.drawAtlas(currentAtlas, debug),
                    outputDir+'/'+pngName
                );
            }
        );
    }
}