import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import IAppProxy from "../model/proxy/IAppProxy";
export default class LoadTextureCommand implements ICommand {
    execute(notification: INotification): void;
    _loadAndStore(paths: string[], proxy: IAppProxy, optimize?: boolean): Promise<void>;
}
