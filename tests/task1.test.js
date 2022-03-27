const { sum } = require('../task1')
describe('The sum function tests',()=>{
    test('The result should be 14',()=>{
        expect(sum(3335,4)).toBe(14)
    })
    test('The result should be "Please Enter the correct data"',()=>{
        expect(sum(123,5)).toBe("Please enter the correct data")
    })
    test('The result should be 20',()=>{
        expect(sum(123456785,3)).toBe(20)
    })
    test('The result should be grater than 12',()=>{
        expect(sum(123456785,3)).toBeGreaterThan(12)
    })
    test('The result should be lower than 22',()=>{
        expect(sum(123456785,3)).toBeLessThan(22)
    })
})