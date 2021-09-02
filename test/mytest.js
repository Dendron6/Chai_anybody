// cmd run hey - will run test under hey command in package.json file
// cmd run prog - will run test under progress command in package.json file to show progress

const axios = require("axios");
const expect = require("chai").expect;

describe('HEY HEY HEY', function() {
    it('promise based way', function() {
        return axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
        })
    })
});
