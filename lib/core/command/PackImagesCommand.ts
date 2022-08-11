import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { APPLICATION_PROXY_TOKEN, EXPORT_COMMAND, PACKER_SERVICE } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";
import IAppProxy from "../model/proxy/IAppProxy";
import IPackerService from "../service/IPackerService";

export default class PackImagesCommand implements ICommand{
    execute(notification: INotification): void {
        const packerService:IPackerService = container.resolve(PACKER_SERVICE) as IPackerService;
        const appProxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const infos = appProxy.getImagesInfo();
        const size = appProxy.getAtlasSize();
        const atlases = packerService.pack(infos, size, size);
        appProxy.setAtlases(atlases);
        facade.sendNotification(EXPORT_COMMAND);
    }
}