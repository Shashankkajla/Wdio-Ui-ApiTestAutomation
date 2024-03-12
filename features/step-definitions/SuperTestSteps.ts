import {Given, Then} from "@wdio/cucumber-framework"
import postPayLoad from "../../Test/SuperTestDynamicPayloads/POSTPayLoad"
import apiJson from "../../Test/SuperTestFunctionAndJson/RestApiCalls"
import chai from "chai"


let postLocn
let base_Uri
let post_endPint
let responseIs


Given(/^user details to create a new dynamic payload and postPayloadLocn$/, () => {

    let fileLocation = 'Test/RestApiJSON/PostCall.json' // use Relative Path
    postLocn =fileLocation.trim();
    console.log(`File Location is : ${postLocn}`);

 
});


Then(/^validate user baseuri path "([^"]*)" and endpoint "([^"]*)"$/, (baseuri, endpoint) => {
	
 if(!baseuri && !endpoint) throw Error(`Base Uri or Endpoint is not valid : ${baseuri}, ${endpoint}`) // truthy check
 
 base_Uri = baseuri.trim();
 post_endPint=endpoint.trim();

console.log(`BaseUri is : ${base_Uri} and Endpoint is : ${post_endPint}`);


});

Then(/^perform  POST Operation on given path$/, () => {

    postPayLoad.saveToFile(postLocn) // relative path
    let postLoad: Promise<string | null> = postPayLoad.readJSONFile(postLocn)
   // console.log(`Post Payload is : ${JSON.stringify(postLoad)}`);
    postLoad.then((result)=>{

    // promise printing payload successfully as read file json returns promise
    // as the function is alos returning promise
        console.log(result);
    }) 
  
    //Promise<Response | undefined>
    responseIs = apiJson.postCall(base_Uri, post_endPint, postLoad)
    console.log(typeof responseIs);
    console.log(`${JSON.stringify(responseIs.status)}`);

    responseIs.then((result)=>{
        console.log(result.status);
        console.log(result.headers);
        chai.expect(result.status).to.equal(parseInt("201"))
    })

    .catch((err)=>{
        console.log(`POST Call Error : ${err}`);
    })
    

});


Then(/^validate the status code of the POST call 201$/, () => {

   // chai.expect(responseIs.status).to.equal(parseInt("201")) // responseIs.status).to.equal(parseInt(201))

   responseIs.then((result)=>{
  //  console.log(result.status);
    //console.log(result.headers);
    chai.expect(result.status).to.equal(parseInt("201"))
})

.catch((err)=>{
    console.log(`POST Call Error : ${err}`);
})


});









