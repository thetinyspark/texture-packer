import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
export default class ExportCommand implements ICommand {
    private _atlases;
    execute(notification: INotification): void;
    exportNext(): Promise<void>;
}
