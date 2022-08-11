import { Notification } from '@thetinyspark/moocaccino-barista';
import { createCanvas } from 'canvas';
import LoadTexturesCommand from '../../lib/core/command/LoadTexturesCommand';
import { APPLICATION_PROXY_TOKEN, FILE_SERVICE_TOKEN, REMOVE_BIG_IMAGES } from '../../lib/core/config/app.constants';
import { facade } from '../../lib/core/config/facade';
import AppProxy from '../../lib/core/model/proxy/AppProxy';
import IAppProxy from '../../lib/core/model/proxy/IAppProxy';
import FileService from '../../lib/core/service/FileService';
import IFileService from '../../lib/core/service/IFileService';
import CanvasUtils from '../../lib/core/utils/CanvasUtils';
describe('LoadTexturesCommand test suite', 
()=>{

    // + 1 because there's a problem with fill rect ?
    
    
    beforeAll( 
        ()=>{
            const tmpPath = "./tmp/";
            const image1 = CanvasUtils.create(100,100);
            CanvasUtils.fillRect(image1, "red", 10,10,81,81); 
            const service = new FileService();
            const proxy = new AppProxy();
            facade.registerService(FILE_SERVICE_TOKEN, service);
            facade.registerProxy(APPLICATION_PROXY_TOKEN, proxy);
            proxy.setUserArgs(tmpPath, "./output", 1024);

            service.mkDir(tmpPath);
            service.writeImage(image1, tmpPath+"my_image1.png");
            service.writeImage(image1, tmpPath+"my_image2.png");
        }
    ); 

    afterAll( 
        ()=>{
            const tmpPath = "./tmp/";
            const service = new FileService();
            service.removeFile(tmpPath+"my_image1.png");
            service.removeFile(tmpPath+"my_image2.png");
            service.rmDir(tmpPath);
        }
    );

    it('should be able to load images infos and return them with optimization', 
    async ()=>{
        // given
        const command = new LoadTexturesCommand();
        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const service:IFileService = facade.getService(FILE_SERVICE_TOKEN) as IFileService;

        // when 
        const images = service.getImagesInDir(proxy.getSourceDir());
        await command._loadAndStore(images, proxy, true); 
        const infos = proxy.getImagesInfo();

        // then
        expect(infos[0].id).toEqual("my_image1");
        expect(infos[1].id).toEqual("my_image2");
        expect(infos[1].offsetX).toEqual(10);
        expect(infos[1].offsetY).toEqual(10);
        expect(infos[1].width).toEqual(80);
        expect(infos[1].height).toEqual(80);
    });

    it('should be able to load images infos and return them without optimization', 
    async ()=>{
        // given
        const command = new LoadTexturesCommand();
        const proxy:IAppProxy = facade.getProxy(APPLICATION_PROXY_TOKEN) as IAppProxy;
        const service:IFileService = facade.getService(FILE_SERVICE_TOKEN) as IFileService;

        // when 
        const images = service.getImagesInDir(proxy.getSourceDir());
        await command._loadAndStore(images, proxy, false); 
        const infos = proxy.getImagesInfo();

        // then
        expect(infos[0].id).toEqual("my_image1");
        expect(infos[1].id).toEqual("my_image2");
        expect(infos[1].offsetX).toEqual(0);
        expect(infos[1].offsetY).toEqual(0);
        expect(infos[1].width).toEqual(100);
        expect(infos[1].height).toEqual(100);
    });
})