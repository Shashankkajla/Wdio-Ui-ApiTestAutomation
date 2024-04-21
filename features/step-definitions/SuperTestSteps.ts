import {Given, Then} from "@wdio/cucumber-framework"
import postPayLoad from "../../Test/SuperTestDynamicPayloads/POSTPayLoad"
import apiJson from "../../Test/SuperTestFunctionAndJson/RestApiCalls"
import chai from "chai"


let postLocn
let base_Uri
let post_endPint
let responseIs
let  get_response
//let put_request


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


Then(/^perform  GET Operation on given path$/, () => {

    get_response = apiJson.getCall(base_Uri, post_endPint)

   console.log(typeof get_response);
   
   get_response.then((result)=>{

    console.log(result?.status);
    console.log(result?.body);
    //chai.expect(result?.status).to.equal(parseInt("200"))

   })

   .catch((err)=>{
    console.log(`GET Call Error : ${err}`);
   })
    

});

Then(/^validate the status code of the POST call 200$/, () => {
    let fileLocation = 'Test/RestApiJSON/GETCall.json'

    get_response.then((result)=>{
    chai.expect(result?.status).to.equal(parseInt("200"))

    postPayLoad.writeGetRequestToJSONFile(fileLocation, JSON.stringify(result?.body, null, 2)) // relative path, result)

    // Now Perform chai validation Accordingly ::
    // you can did it from file or from result? as well most prefer is using result way
    
     console.log(`${result?.body[1].email}`);
      
     if(!result?.body[1].email){

        chai.expect(result?.body[1].email).to.equal("raman@way2automation.com")
     //   chai.expect(result.body[1]).to.deep.equal({ "id": 2, "email": "raman@way2automation.com", "firstName": "Raman", "lastName": "Ar" });


     }


       })
    
       .catch((err)=>{
        console.log(`GET Call Error : ${err}`);
       })
    
});


Then(/^perform put call on the created post to update the data$/, () => {
    let put_FileLocation = 'Test/RestApiJSON/PutCall.json'
  
    /** 
  
    let post_locn = 'Test/RestApiJSON/PostCall.json' // use Relative Path
    let put_FileLocation = 'Test/RestApiJSON/PutCall.json'
    let resultIs

    postPayLoad.saveToFile(post_locn) // relative path

    let readPostData = postPayLoad.readJSONFile(post_locn)


    readPostData.then((result)=>{
       // console.log(`PUT Payload is : ${JSON.stringify(result, null, 2)}`);
        // Here POST PayLoad Readed 
        //result.replace(/\n/g, "").replace(/ /g, "");
         resultIs=result
        postPayLoad.writeJSOnDataToPutFile(put_FileLocation, JSON.stringify(resultIs, null, 2))
        // /-> To start regular expression , /n - removed the blank spaces, /g - global search
       //JSON.stringify(result?.replace(/\n/g, "").replace(/ /g, ""), null, 2))
    })

    .catch((err)=>{
        console.log(`POST PayLoad Readed Error : ${err}`);
    })

    */

     //Need to use promise to print ::  console.log(` PUT File Status :: ${JSON.stringify(resultIs)}`);



     //Now use PUT call
     let read_put : Promise<string | null> =postPayLoad.readJSONFile(put_FileLocation)

     read_put.then((result)=>{

        console.log(`PUT Response is : ${result}`);

     })
            
     .catch((err)=>{

        console.log(`Error Put : ${err}`);
     })

     let res =apiJson.putCall(base_Uri, post_endPint, read_put)

     res.then((result)=>{

        console.log(result?.status);
     })

     






});

Then(/^check the status code of the PUT is 201$/, () => {
});











