import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
export default class LoadTextureCommand implements ICommand {
    execute(notification: INotification): void;
    private _loadAndStore;
    private _load;
}
