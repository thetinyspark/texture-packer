import IFileService from "./IFileService";
import { Canvas } from "canvas";
export default class FileService implements IFileService {
    mkDir(path: string): void;
    rmDir(path: string): void;
    readDir(path: string, recursive?: boolean, result?: string[]): string[];
    getImagesInDir(directory: string): string[];
    keepOnlyFiles(filepaths: string[]): string[];
    keepOnlyDirs(filepaths: string[]): string[];
    fileExists(filepath: string): boolean;
    writeJSON(data: string, filepath: string): void;
    writeImage(canvas: Canvas, filepath: string): void;
    removeFile(filepath: string): void;
}
