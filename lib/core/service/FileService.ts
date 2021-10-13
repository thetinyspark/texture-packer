import IFileService from "./IFileService";
import * as fs from 'fs';
import * as path from 'path';
import { Canvas } from "canvas";

export default class FileService implements IFileService{
    mkDir(path: string): void {
        fs.mkdirSync(path, {recursive: true});
    }

    rmDir(path:string):void{
        if( !this.fileExists(path))
            return; 

        const paths = this.readDir(path);
        const files = this.keepOnlyFiles(paths); 
        const dirs = this.keepOnlyDirs(paths);
        files.forEach(fs.unlinkSync);
        dirs.forEach( 
            (value:string)=>{
                this.rmDir(value);
            }
        )
        fs.rmdirSync(path);
    }

    readDir(path: string, recursive:boolean = false, result:string[] = []): string[] {

        const files = fs.readdirSync(path); 
        files.forEach( 
            (filename:string)=>{
                const filepath:string = path+filename; 
                const stats = fs.statSync(filepath); 
                if( stats.isDirectory() ){
                    this.readDir(filepath+"/", recursive, result);
                }
                result.push(filepath);
            }
        )
        
        return result;
    }

    getImagesInDir(directory:string):string[]{
        const extensions = ['.png','.jpg','.jpeg'];
        const datas = this.readDir(directory, true);
        const files = this.keepOnlyFiles(datas);
        return files.filter( 
            (value:string)=>{
                const ext = path.extname(value);
                return extensions.includes(ext);
            }
        );
    }

    keepOnlyFiles(filepaths:string[]):string[]{
        return filepaths.filter( 
            (value:string)=>{
                return fs.statSync(value).isFile()
            }
        )
    }

    keepOnlyDirs(filepaths:string[]):string[]{
        return filepaths.filter( 
            (value:string)=>{
                return fs.statSync(value).isDirectory()
            }
        )
    }

    fileExists(filepath: string): boolean {
        return fs.existsSync(filepath);
    }

    writeJSON(data:string, filepath: string): void {
        fs.writeFileSync(filepath, data);
    }

    writeImage(canvas: Canvas, filepath: string): void {
        const buffer = canvas.toBuffer(); 
        fs.writeFileSync(filepath, buffer);
    }

    removeFile(filepath:string):void{
        fs.unlinkSync(filepath);
    }
}