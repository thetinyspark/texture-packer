import { createCanvas } from "canvas";
import FileService from "../../lib/core/service/FileService";

describe('FileService test suite', 
()=>{
    const currentFile = __filename;
    const service = new FileService();
    const tmpPath = __dirname+"/tmp/";
    const subPath = tmpPath+"sub/"; 
    const jsonPath = tmpPath+"john.doe.json";
    const imgPath = tmpPath+"john.doe.png";
    const jsonData = JSON.stringify({name:"John Doe"});
    const canvas = createCanvas(100,100);

    beforeEach( 
        ()=>{
            service.mkDir(subPath);
        }
    );

    afterEach( 
        ()=>{
            service.rmDir(tmpPath);
        }
    );

    it('should be able to instanciate a new FileService', 
    ()=>{
        expect(service).toBeTruthy();
    }); 

    it('should be able to tell if a specific file exists or not', 
    ()=>{
        expect(service.fileExists(currentFile)).toBeTrue();
    }); 

    it('should write a json file into the specific path', 
    ()=>{
        service.writeJSON(jsonData, jsonPath );
        expect(service.fileExists(jsonPath)).toBeTrue();
    });

    it('should write an image from a canvas into the specific path', 
    ()=>{
        service.writeImage(canvas, imgPath ); 
        expect( service.fileExists(imgPath) ).toBeTrue();
    });

    it('should remove a file into the specific path', 
    ()=>{
        service.writeJSON(jsonData, jsonPath ); 
        service.removeFile(jsonPath);
        expect(service.fileExists(jsonPath)).toBeFalse();
    });

    it('should create a directory recursively', 
    ()=>{
        expect(service.fileExists(subPath)).toBeTrue();
    });

    it('should remove a directory', 
    ()=>{
        service.rmDir(subPath); 
        expect(service.fileExists(subPath)).toBeFalse();
    })

    it('should list all the files into a specific directory', 
    ()=>{
        service.writeJSON(jsonData, jsonPath);
        expect(service.readDir(tmpPath)).toContain(jsonPath);
    }); 

    it('should list all files in a specific directory, recursively', 
    ()=>{
        service.writeJSON(jsonData, jsonPath);
        const files = service.readDir(tmpPath, true); 
        expect(files).toContain(jsonPath);
    });

    it('should remove a non empty folder', 
    ()=>{
        service.writeJSON(jsonData, jsonPath);
        service.rmDir(tmpPath); 
        expect(service.fileExists(tmpPath)).toBeFalse();
    }); 
})