"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_constants_1 = require("../config/app.constants");
const facade_1 = require("../config/facade");
const ioc_1 = require("../config/ioc");
class StartApplicationCommand {
    execute(notification) {
        const appProxy = ioc_1.container.resolve(app_constants_1.APPLICATION_PROXY_TOKEN);
        const appMediator = ioc_1.container.resolve(app_constants_1.APP_MEDIATOR);
        facade_1.facade.registerProxy(app_constants_1.APPLICATION_PROXY_TOKEN, appProxy);
        facade_1.facade.registerProxy(app_constants_1.APP_MEDIATOR, appMediator);
        appMediator.start();
        facade_1.facade.sendNotification(app_constants_1.PARSE_USER_ARGS);
    }
}
exports.default = StartApplicationCommand;
