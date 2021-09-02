//https://www.youtube.com/watch?v=LaVScmQkQLI&t=138s&ab_channel=QABoxLet%27sTest
//Ways to use functions
const expect = require('chai').expect
// axios is like POSTMAN allows to get/push requests
const axios = require ("axios")

describe('async tests', function() {

    //this.retries requires function to be function() instead of ()=>
    // this.retries(1)
    // let count = 0;
    //use promise here, skip will allow to ignore this test, only will run only this test
    it.skip('promise based way', function(){

        //this.timeout(100)
        //to display count of retries
        // console.log("Retry attempt number:",count);
        // count++;
        // this.retries(2)
        // return statement is very important here
        return axios.get('https://reqres.in/api/users/2').then(res =>{
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
        })
    });

// });

    // USE DONE here
//     it('done based way', (done) => {
//         axios.get('https://reqres.in/api/users/2').then(res => {
//             expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
//             done()
//         }).catch(err => {
//            done(err)
//         })
//     });
// });
    // use async function
    this.retries(2)
    it('async wait based way', async ()=> {
        //this does not work in async()=> only in function()
        //this.timeout(100)
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
    })
});

describe('hey tests', function() {

    //this.retries requires function to be function() instead of ()=>
    // this.retries(1)
    // let count = 0;
    //use promise here
    it('promise based way', function(){
        this.timeout(200)
        //to display count of retries
        // console.log("Retry attempt number:",count);
        // count++;
        // this.retries(2)
        // return statement is very important here
        return axios.get('https://reqres.in/api/users/2').then(res =>{
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int')
        })
    });

// });

    // USE DONE here
//     it('done based way', (done) => {
//         axios.get('https://reqres.in/api/users/2').then(res => {
//             expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
//             done()
//         }).catch(err => {
//            done(err)
//         })
//     });
// });
    // use async function
    this.retries(2)
    it('async wait based way', async ()=> {
        //this does not work in async()=> only in function()
        //this.timeout(100)
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
    })
});