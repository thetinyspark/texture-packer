import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { APPLICATION_PROXY_TOKEN, PACKER_SERVICE } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";
import IAppProxy from "../model/proxy/IAppProxy";
import IPackerService from "../service/IPackerService";
// import { atlasesToJSON } from "../utils/atlas2json";

export default class PackImagesCommand implements ICommand{
    execute(notification: INotification): void {
        const packerService:IPackerService = container.resolve(PACKER_SERVICE) as IPackerService;
        const appProxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const textures = appProxy.getTextures(); 

        // TODO test: 
        // refactor and test PackerService
        // make Atlas anemic
        // make Zone  anemic
        // put atlasesToJson into a dedicated service (or just use it into a specific command)

        
        // const atlases = packerService.pack(textures);
        // const jsons = atlasesToJSON(atlases);
        console.log(textures);
    }
    
}