import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import IAppProxy from "../model/proxy/IAppProxy";
import { ImageInfo } from "../model/vo/ImageInfo";
export default class RemoveBigImagesCommand implements ICommand {
    execute(notification: INotification): void;
    filter(images: ImageInfo[], size: number, proxy: IAppProxy): void;
}
