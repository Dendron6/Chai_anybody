//https://www.youtube.com/watch?v=_BuT1uoZ-vw&ab_channel=QABoxLet%27sTest
const {expect, assert} = require('chai');
const should = require ('chai').should();

describe('Chai Assertion', ()=> {
    const a = 20
    arr = [30, 40, 50]
    obj = {name: 'Avi', age: 9, isMale: true}
    myFunc = (a, b) => a + b
    isTrue = true
    nan = NaN
    myUndefined = undefined;

    it('Assert Style', () => {
        assert.typeOf(arr, 'array');
        assert.include(arr, 30, '30 isnt there in the array');
        assert.lengthOf(arr, 3, "Length isn't 3")
        assert.deepEqual(arr, [30, 40, 50]);
        assert.sameOrderedMembers(arr, [30, 40, 50]);
    })
    it('Expect Style', () => {
        expect(obj).to.have.keys(['name', 'age']);

    })
    it.only('Expect Style', () => {
        arr.should.include(30);
    })
})

