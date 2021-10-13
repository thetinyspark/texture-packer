import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { APPLICATION_PROXY_TOKEN, PARSE_USER_ARGS } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";

export default class StartApplicationCommand implements ICommand{
    execute(notification: INotification): void {
        const appProxy = container.resolve(APPLICATION_PROXY_TOKEN); 
        facade.registerProxy(APPLICATION_PROXY_TOKEN, appProxy);
        facade.sendNotification(PARSE_USER_ARGS);
    }
}