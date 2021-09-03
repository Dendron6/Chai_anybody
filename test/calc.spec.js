const myCalc = require('../src/app');
const expect = require('chai').expect;
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe.only('should call sum once ',()=>{
    let spy;
    beforeEach(()=>{
        //arrange
        spy = sinon.spy(myCalc, 'sum');
    });
    afterEach(() =>{
        spy.restore();
    });
    it('MyClac should get callback once', ()=>{
        //Act
        myCalc.sum(10,20);
        sinon.assert.calledOnce(spy) //sinon assertion
        //Assert
        sinon.assert.calledWith(spy, 10,20)
    });
    it('MyClac should get callback once with 1 and 2', ()=>{

        //Act
        myCalc.sum(1,2);

        sinon.assert.calledOnce(spy) //sinon assertion
        //Assert
        sinon.assert.calledWith(spy, 1,2)
    });
});

describe.skip('should call sum once ',()=>{
    it.only('MyClac should get callback once', ()=>{
        //Arrange
        const spy = sinon.spy(myCalc, 'sum')
        //Act
        myCalc.sum(1,2);

        sinon.assert.calledOnce(spy) //sinon assertion
        //Assert
        sinon.assert.calledWith(spy, 1,2)
    });
});

describe.skip('Spy calculator',()=>{
    it('MyClac should get callback once', ()=>{
        //Arrange
        const spy = sinon.spy()
        //Act
        myCalc.myCalc(1,2,spy)
        //Assert
        sinon.assert.calledOnce(spy) //sinon assertion
        sinon.assert.calledWithExactly(spy, 10,2)
    });
});

describe.skip("Basic test", () => {
    it("Sum of two digits", () => {
        const result = myCalc.sum(3,2);
        expect(result).to.be.equal(5)
    })
    it("Division should equal infinity", () => {
        const result = myCalc.div(2,0);
        expect(result).to.be.equal(Infinity)
    })
})
