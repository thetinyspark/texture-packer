import { IService } from "@thetinyspark/coffe-maker";
export default interface IWriterService extends IService {
    writeJSON(data: any, filepath: string): void;
    writeImage(canvas: HTMLCanvasElement, filepath: string): void;
    fileExists(filepath: string): boolean;
}
