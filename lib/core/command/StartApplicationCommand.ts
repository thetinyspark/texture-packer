import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { APPLICATION_PROXY_TOKEN, APP_MEDIATOR, PARSE_USER_ARGS } from "../config/app.constants";
import { facade } from "../config/facade";
import { container } from "../config/ioc";

export default class StartApplicationCommand implements ICommand{
    execute(notification: INotification): void {
        const appProxy = container.resolve(APPLICATION_PROXY_TOKEN); 
        const appMediator = container.resolve(APP_MEDIATOR); 

        facade.registerProxy(APPLICATION_PROXY_TOKEN, appProxy);
        facade.registerProxy(APP_MEDIATOR, appMediator);

        appMediator.start();
        facade.sendNotification(PARSE_USER_ARGS);
    }
}