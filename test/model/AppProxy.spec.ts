import { Image } from 'canvas';
import AppProxy from '../../lib/core/model/proxy/AppProxy';
describe('AppProxy test suite', 
()=>{
    const proxy = new AppProxy();

    it('should be able to set user args and retrieve it', 
    ()=>{
        const sourceDir = "./foo"; 
        const outputDir = "./bar"; 
        const size = 452; 

        proxy.setUserArgs(sourceDir, outputDir, size); 
        expect(proxy.getAtlasSize()).toEqual(size);
        expect(proxy.getOuputDir()).toEqual(outputDir);
        expect(proxy.getSourceDir()).toEqual(sourceDir);
    });

    it('should be able to set textures and retrieve them', 
    ()=>{
        const textures = [ new Image(), new Image(), new Image() ];
        proxy.setTextures(textures); 
        expect(proxy.getTextures()).toEqual(textures);
    });
})