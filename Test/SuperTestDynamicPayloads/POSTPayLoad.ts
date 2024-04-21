import fs from "fs"
import util from "util"
import faker from "faker"


//export let post_File_Location -> No need to use it at run time

class PostPayLoad{

  payload;  
constructor(payload){
  this.payload=payload;

}

to_storedPayload(){

return JSON.stringify(this.payload, null, 2)

}


async saveToFile(fileLocation){

let writeToFile = util.promisify(fs.writeFile)

try{

    await writeToFile(fileLocation, this.to_storedPayload())
    console.log("File saved successfully at:", fileLocation);
}
catch(err){

    console.log(`File Error : ${err}`);

}
   

}

async readJSONFile(filelocation){

  let readFileValue = util.promisify(fs.readFile)

  try{

   let data = await readFileValue(filelocation, "utf8")
   console.log('File Read Successfully');
   let valIs = await JSON.parse(data);
   //console.log(`${JSON.stringify(valIs)}`); 
   // Printing payload successfully
  
   return JSON.stringify(valIs, null, 2);

  }

  catch(err){
    console.log(`File Error : ${err}`);
  }
   
  return null;

}


async writeGetRequestToJSONFile(filelocation: string, result_object){


    let writeToFile_getCall = util.promisify(fs.writeFile)

    try{

         await writeToFile_getCall(filelocation, result_object) // JSON.stringify(result_object, null, 2) 
         // as its an object so to pass it using JSON stringify alwz.
        console.log("GET File saved successfully at:", filelocation);
    }
    catch(err){
      console.log(`File Error GET To write in File: ${err}`);
    }


}


async writeJSOnDataToPutFile(filelocation, fileData){

  let writeToPut =  util.promisify(fs.writeFile)
  try{
 
    let jsonObject = JSON.parse(fileData)
    await writeToPut(filelocation, jsonObject)
    console.log(`Data Added to PUt File : ${filelocation}`);
  }
  catch(err){
    console.log(`File Error : ${err}`);

  }

}

//const jsonObject = JSON.parse(jsonString);

// Write the JSON object to a JSON file
//fs.writeFileSync('output.json', JSON.stringify(jsonObject, null, 2));

}


let jsonPayLoadIs = {

    "email": faker.internet.email(),
    "firstName": faker.name.firstName(6),
    "lastName":  faker.name.lastName(6)
  

}

export default new PostPayLoad(jsonPayLoadIs)

//payloadIs.saveToFile(post_File_Location)

 