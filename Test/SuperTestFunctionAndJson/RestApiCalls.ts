import request from "supertest";

class ApiFunctions{

constructor(){

}


async postCall(baseUri: string, endPoint: string, payload: object){

try{    
return await request(baseUri)
.post(endPoint)
.send(payload)
.set('Accept', 'application/json')
//.expect('Content-Type', 'application/json;charset=UTF-8')
.expect('Content-Length', '0')
.expect(201)

}
catch(err){
    console.log(`POST Error : ${err}`);
}

}
}
export default new ApiFunctions();