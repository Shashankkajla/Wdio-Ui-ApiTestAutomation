import {When} from "@wdio/cucumber-framework"
import {getCall, postCall} from "../../Test/helper/Apihelper"
import dynamicPayload from "../../Test/helper/DynamicPayload"
import chai from "chai";

//to avoid issue with chai
//const chaiSetup = require('chai');
//const chaiHttp = require('chai-http');
//chaiSetup.use(chaiHttp);
//const should = chaiSetup.should();
//const expect = chaiSetup.expect();


When(/^user perform the get details$/, async () => {

let result = await getCall("https://reqres.in", "/api/users?page=2", "")

if(result.status===200){
   // chai.expect.fail(`Failed getting user from api ${result}`)
   console.log(`Result is GET : ${JSON.stringify(result)}`);
}

chai.expect(result.status).to.equal(200)

});



When(/^user perform POST call$/, async () => {

 let response= await postCall("https://reqres.in", "/api/users", "", dynamicPayload)

 if(response.status===201){
   // chai.expect.fail(`Failed getting user from api ${result}`)
   console.log(`Result is POST : ${JSON.stringify(response.body)}`);
}

let result = await getCall("https://reqres.in", "/api/users?page=2", "")

if(result.status===200){
   // chai.expect.fail(`Failed getting user from api ${result}`)
   console.log(`Result of GET after POST : ${JSON.stringify(result.body)}`);
}


});

