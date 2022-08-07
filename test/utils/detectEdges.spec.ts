import detectEdges from '../../lib/core/utils/detectEdges';
import CanvasUtils from '../../lib/core/utils/CanvasUtils';
describe('detectEdges test suite', 
()=>{
    it(`should be able to detect edges of image content (skip transparent pixels) 1/3`, 
    ()=>{
        // given 
        const image1 = CanvasUtils.create(100,100);
        // + 1 because there's a problem with fill rect ?
        CanvasUtils.fillRect(image1, "red", 10,10,81,81); 

        // when 
        const result1 = detectEdges(image1);

        // then 
        expect( result1 ).toEqual( {x:10,y:10,width:80,height:80});
    });

    it(`should be able to detect edges of image content (skip transparent pixels) 2/3`, 
    ()=>{
        // given 
        const image1 = CanvasUtils.create(100,100);
        CanvasUtils.fillRect(image1, "green", 40,40,21,21);

        // when 
        const result1 = detectEdges(image1);

        // then 
        expect( result1 ).toEqual( {x:40,y:40,width:20,height:20});
    });

    it(`should be able to detect edges of image content (skip transparent pixels) 3/3`, 
    ()=>{
        // given 
        const image1 = CanvasUtils.create(100,100);
        CanvasUtils.fillRect(image1, "blue", 10,10,10,10);
        CanvasUtils.fillRect(image1, "blue", 10,50,10,10);
        CanvasUtils.fillRect(image1, "blue", 90,50,1,1);
        CanvasUtils.fillRect(image1, "blue", 50,90,1,1);

        // when 
        const result1 = detectEdges(image1);

        // then 
        expect( result1 ).toEqual( {x:10,y:10,width:80,height:80});
    });
})