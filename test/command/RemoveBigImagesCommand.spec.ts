import { Notification } from '@thetinyspark/moocaccino-barista';
import { createCanvas } from 'canvas';
import RemoveBigImagesCommand from '../../lib/core/command/RemoveBigImagesCommand';
import { APPLICATION_PROXY_TOKEN, FILE_SERVICE_TOKEN } from '../../lib/core/config/app.constants';
import { facade } from '../../lib/core/config/facade';
import AppProxy from '../../lib/core/model/proxy/AppProxy';
import IAppProxy from '../../lib/core/model/proxy/IAppProxy';
import { ImageInfo } from '../../lib/core/model/vo/ImageInfo';
import FileService from '../../lib/core/service/FileService';
import IFileService from '../../lib/core/service/IFileService';
import CanvasUtils from '../../lib/core/utils/CanvasUtils';
describe('RemoveBigImagesCommand test suite', 
()=>{

    const imageInfo1:ImageInfo = {
        area: 10000, 
        width: 100, 
        height:100, 
        src: "image1.png", 
        id: "image1", 
        offsetX: 0, 
        offsetY: 0, 
        originalWidth: 100, 
        originalHeight: 100
    };

    const imageInfo2:ImageInfo = {
        area: 20000, 
        width: 500, 
        height:40, 
        src: "image2.png", 
        id: "image2", 
        offsetX: 0, 
        offsetY: 0, 
        originalWidth: 500, 
        originalHeight: 40
    };

    const imageInfo3:ImageInfo = {
        area: 200000, 
        width: 5000, 
        height:40, 
        src: "image3.png", 
        id: "image3", 
        offsetX: 0, 
        offsetY: 0, 
        originalWidth: 5000, 
        originalHeight: 40
    };

    it('should be able to load images infos and return them with optimization', 
    async ()=>{
        // given
        const command = new RemoveBigImagesCommand();
        const proxy:IAppProxy = new AppProxy();
        
        const infos:ImageInfo[] = [imageInfo1, imageInfo2, imageInfo3];
        facade.registerProxy(APPLICATION_PROXY_TOKEN, proxy);

        // when 
        command.filter(infos, 1024, proxy);
        const filtered = proxy.getImagesInfo();

        // then
        expect(filtered.length).toEqual(2);
        expect(filtered[0].id).toEqual("image1");
        expect(filtered[1].id).toEqual("image2");
    });
})