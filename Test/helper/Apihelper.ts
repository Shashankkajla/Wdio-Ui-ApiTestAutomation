import request from "supertest"

// Request :: 

//console.log("Type of req" +`${typeof request}`);
// function ,now we know how to call function
//console.log(`Number of args ${request.length}`);
//console.log(`${request.toString}`); // give the definition of function internal implementation
// the number of argument this function will accept i.e 1 



/*
----------
>>>>> Node s request from Postman Taken  via code option on right side it help to take a code snippet to be used in super test >>>>>>>>>

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://reqres.in/api/users?page=2',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});



>> The way we are using in post man same way will go in supertest to validate i.e take querry parameter 

*/


/*
(async function getCall() {

  let result =  await request("https://reqres.in")
    .get("/api/users?page=2")
    .query({})
    .auth("","") // un pw
    .set("Content-Type", "application/json") // its in key value pair
    .set("Accept","application/json")
    console.log(`Res : ${JSON.stringify(result.body)}`);
    
    Its working making reusable function and export it 
})

// () --> Used immediate invoke function for now

// save it in debug console to check the , run this file  using node or ts node .

*/


/*
let payload ={


     email: "eve.holt@reqres.in",
     password: "pistol"

}
*/

/**
 * This function makes an asynchronous get call to the specified baseUrl and endpoint with the provided authToken and query parameters.
 *
 * @param {string} baseUrl - the base URL for the API endpoint
 * @param {string} endpoint - the specific endpoint for the API call
 * @param {string} authToken - the authentication token for the API call
 * @param {object} queryparam - the query parameters for the API call
 * @return {Promise<any>} a Promise that resolves to the result of the API call
 */
async function getCall(baseUrl : string, endpoint: string, authToken: string) { // queryparam: string

if(!baseUrl || !endpoint) {
    throw Error(`One of the given value is not valid ${baseUrl} or ${endpoint}`) // truthy check
}

 baseUrl =baseUrl.trim();
 endpoint =endpoint.trim();

  try{

    return await request(baseUrl)
    .get(endpoint)
   // .query(queryparam)
    .auth(authToken, {type: "bearer"}) // un pw
    .set("Content-Type", "application/json") // its in key value pair
    .set("Accept","application/json")
   
    

  }
    catch(err){
   // err.message = `Error making a get Call to ${endpoint}, ${err}`
    throw err
  }
}

// write same way its written in POSTMAN
  async function postCall(baseUrl : string, endpoint: string, authToken: string, payload: object) {

    if(!baseUrl || !endpoint) {
        throw Error(`One of the given value is not valid ${baseUrl} or ${endpoint}`) // truthy check
    }
    
     baseUrl =baseUrl.trim();
     endpoint =endpoint.trim();
    
      try{
    
        return await request(baseUrl)
        .post(endpoint)
        .auth(authToken, {type: "bearer"}) // un pw
        .set("Content-Type", "application/json") // its in key value pair
        .set("Accept","application/json")
        .send(payload)
       // console.log(`Res is : ${JSON.stringify(res.body)}`);
      // console.log(`Res is : ${JSON.stringify(res)}`);
        
    
      }
        catch(err){
       // err.message = `Error making a post Call to ${endpoint}, ${err}`
        throw err
      }

     
     
  }

  

   // (async function js(){
  //  }) ()
 //   --> POST 
//    ("https://reqres.in", "/api/register","", payload)

export {
  getCall, 
  postCall

} 




