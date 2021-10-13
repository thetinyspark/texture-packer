import nextPowerOf2 from '../../lib/core/utils/nextPowerOf2';
describe('nextPowerOf2 test suite', 
()=>{

    const data = [
        {input: 0, expected:1},
        {input: 1, expected:1},
        {input: 2, expected:2},
        {input: 3, expected:4},
        {input: 4, expected:4},
        {input: 5, expected:8},
        {input: 8, expected:8},
        {input: 9, expected:16},
    ]; 

    data.forEach( 
        (current)=>{
            const expected = current.expected; 
            const input = current.input; 

            it(`next power of 2 should be equal to ${expected} for ${input}`, 
            ()=>{
                const result = nextPowerOf2(input); 
                expect(result).toEqual(expected)
            })
        }
    );
})