const {add, sub} = require ('../src/app')
const expect = require ('chai').expect
//bdd


// describe('Suite 1', () =>{
//     afterEach(()=>{
//         console.log('afterEach')
//     });
//     beforeEach(()=>{
//         console.log('beforeEach')
//     });
//     after(()=>{
//         console.log('after')
//     });
//     before(()=>{
//         console.log('before')
//     });
//     it('add(2,3) should return 5', () => {
//         expect(add(2,3)).to.be.equal(50);
//     })
// })

//TDD works with mocharc.js file and controls the behavior of mocha
const {suite, test, suiteSetup, suiteTeardown, setup, teardown} = require ('mocha')

suite('Suite 2', () =>{

    suiteSetup(()=>{
        console.log('Set up Of Suite')
    });
   suiteTeardown(()=>{
        console.log('Tear down of Suite')
    });
    setup(()=>{
        console.log('setup')
    });
    teardown(()=>{
        console.log('teardown')
    });

    test('add(3,3) should return 6', () => {
        expect(add(3,3)).to.be.equal(6);
        console.log('Success')
    })
})