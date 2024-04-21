import request from "supertest";
//import done from "supertest"

class ApiFunctions {
  constructor() {}

  async postCall(baseUri: string, endPoint: string, payload: object) {
    try {
      return await request(baseUri)
        .post(endPoint)
        .send(payload)
        .set("Accept", "application/json")
        //.expect('Content-Type', 'application/json;charset=UTF-8')
        .expect("Content-Length", "0")
        .expect(201);
    } catch (err) {
      console.log(`POST Error : ${err}`);
    }
  }


  /** 
 - The request.end() function is used to signal that the request has been fully configured and it's time to send it. 
 > It takes a callback function as an argument, which will be executed when the request is complete. 
 > If an error occurs during the request, it will be passed as the first argument to the callback function. 
 > If there is no error, the response object will be passed as the second argument. 
 > The expect() function is used to make assertions on the response, 
 > and the done() function is used to signal that the test case is complete.

  */
  async getCall(baseuri: string, endPoint: string){

    try{

        return await request(baseuri)
        .get(endPoint)
        .set("Accept", "application/json")
       // .expect("Content-Length", "0")
        .expect(200)
      
    }
    catch(err){
        console.log(`GET Error : ${err}`);
    }

  }

  //expect(res.text).to.be.equal('hey');


async putCall(base_Uri, endpoint, payload){

  try{
  return await request(base_Uri)
  .put(endpoint)
  .send(payload)
  .set("Accept", "application/json")
 // .expect("content-length", "0")
  .expect(200)
  }
  catch(err){
    console.log(`PUT Error : ${err}`);
  }

}  



}
export default new ApiFunctions();

 /** 
  * 
  * -->> Not Supporting in superTest if you use try catch dont use this approach
        .end((err, result)=>{

         if(err){
             console.log(`GET Error : ${err}`);
             return done(err)
         }

            //expect(result.name).to.be.equal('Sohan')
          //  done(); --> err
          console.log(result);
        })
       
        */