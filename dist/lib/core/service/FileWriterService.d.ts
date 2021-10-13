import IWriterService from "./IWriterService";
export default class FileWriterService implements IWriterService {
    fileExists(filepath: string): boolean;
    writeJSON(data: any, filepath: string): void;
    writeImage(canvas: HTMLCanvasElement, filepath: string): void;
}
