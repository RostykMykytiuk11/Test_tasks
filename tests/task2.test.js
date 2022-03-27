const { mersen } = require('../task2')
describe('The mersen function tests',()=>{
    test('The result should be an array with values 1,3,7,15',()=>{
        expect(mersen(50)).toEqual([1,3,7,15,31])
    })
    test('The result should be "Please enter the correct data"',()=>{
        expect(mersen('text')).toBe("Please Enter correct data")
    })
    test('The result should be "Please Enter  correct data"',()=>{
        expect(mersen(-34555)).toBe("Please Enter correct data")
    })
    test('The result should be an array with values 1,3,7,15',()=>{
        expect(mersen(100)).toEqual([1,3,7,15,31,63])
    })
})