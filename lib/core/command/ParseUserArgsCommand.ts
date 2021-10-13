import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { APPLICATION_PROXY_TOKEN, LOAD_TEXTURES, USER_ARGS_SERVICE } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";
import IAppProxy from "../model/proxy/IAppProxy";
import IUserArgsService from "../service/IUserArgsService";
import getNextPowerOf2 from "../utils/nextPowerOf2";

export default class ParseUserArgsCommand implements ICommand{
    execute(notification: INotification): void {
        const service:IUserArgsService = container.resolve(USER_ARGS_SERVICE);
        const size:number = service.getUserArg('size'); 
        const outputDir:string = service.getUserArg('output');
        const sourceDir:string = service.getUserArg('dir');

        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        proxy.setUserArgs(sourceDir, outputDir, getNextPowerOf2(size));

        facade.sendNotification(LOAD_TEXTURES);
    }
}