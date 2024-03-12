import Page from "../pageObjects/page";

class DataTable extends Page {
  constructor() {
    super();
  }

  // **************** Page Objects ********************
  get click_AddCart() {
    return $(`button[text()="Add to cart"]`);
  }

  get click_RemoveCart() {
    return $(`button[text()="Remove"]`);
  }

  get listOfElements_ToValidate(){ return $$(`//div/a/div`) }

  // **** Dynamic Data Table Objects *****

  get row_Count() { return $$(`//table[@id='table1']//tbody//tr`) }

  get col_Count() { return $$(`//table[@id="table1"]//th`) }

  // *************** Page Actions ********************

  async genericGetElementCall(str: string) {
    if (!str) {
      throw Error(`value is not present in ${str}`);
    }

    try {
      let value = await $(
        `//div/a/div[text()="${str}"]/following::button[text()="Add to cart"]`
      );

      if (await value.isDisplayed()) {
        await value.click();
        console.log(`Add To Cart Clicked ! >> ${str}`);
      } else {
        let valueFlag = value.isDisplayed();
        console.log(`Present? ${valueFlag}`);
        value.click();
      }

      await browser.pause(9000);
     
     // let vv = await this.click_RemoveCart
      //let x = await vv.getText();
      //console.log(`Values is ? ${x}`);

      console.log("Hellooo");

      //let multilevel = await $(`//div/a/div[text()="${str}"]`)
      //console.log(`Total Length >> ${multilevel}`);

    } catch (err) {
      throw err;
    }
  }


async store_Arr(){

    let val_store =[]

    let valueIs = await this.listOfElements_ToValidate
    console.log(`Length is await ${valueIs.length}`);

    
    for(let i=0; i< await valueIs.length; i++){

        let textIs  = await valueIs[i].getText();

         val_store.push(`${i} : ${textIs}`);

    }


    console.log(`Array val is : ${val_store}`);

}



async store_Objects(){

    let object ={
        1: "",
        last: "",
        3: "",
        4: "",
        5: "",
        6: ""
    }

    let valueIs = await this.listOfElements_ToValidate
    console.log(`Length is await ${valueIs.length}`);

    for(let k=0; k<valueIs.length; k++){

        // assign values 
         if(k===0) object[1]= await valueIs[k].getText()
         if(k===1) object.last= await valueIs[k].getText()
         if(k===2) object[3] = await valueIs[k].getText()
         if(k===3) object[4] = await valueIs[k].getText()
         if(k===4) object[5] = await valueIs[k].getText()
         if(k===5) object[6] = await valueIs[k].getText()

    }

    console.log(`Object is ${JSON.stringify(object)}`);
    // {"1":"Sauce Labs Backpack","3":"Sauce Labs Bolt T-Shirt","4":"Sauce Labs Fleece Jacket","5":"Sauce Labs Onesie","6":"Test.allTheThings() T-Shirt (Red)","last":"Sauce Labs Bike Light"}

     //>>>> Here, ===>>>>  Object get Keys, values and entry set and used for in loop as well.


     let key = Object.keys(object);
     console.log(`Obj Keys ${key}`);
     // Obj Keys 1,3,4,5,6,last

    let objVal = Object.values(object);
    console.log(`Obj values ${objVal}`);
    //Obj values Sauce Labs Backpack,Sauce Labs Bolt T-Shirt,Sauce Labs Fleece Jacket,Sauce Labs Onesie,Test.allTheThings() 
    //T-Shirt (Red),Sauce Labs Bike Light

    let entry = Object.entries(object);
    console.log(`Obj Entries >> ${entry}`);
    //Obj Entries >> 1,Sauce Labs Backpack,3,Sauce Labs Bolt T-Shirt,4,Sauce Labs Fleece Jacket,5,Sauce Labs Onesie,6,Test.allTheThings() 
    //T-Shirt (Red),last,Sauce Labs Bike Light

     

      // for(let ob  in object){
      // console.log(`${object[ob]}`); --> Need to check in LearningJS 
     // }
    

    }


// ************* $$$$$$$ Handling Dynamic Data Tables $$$$$$ ****************

async table_Handling(str: string){

    await this.navigateToUsingUrl(str)
    await browser.pause(4000)

    let rowArr= await this.row_Count
    let colArr= await this.col_Count

    console.log(`Row Length : ${rowArr.length} and Col length : ${colArr.length}`);
    // Row Length : 4 and Col length : 6

}


async handlingData_NestedLoopForTable(strVal : string){

    await this.table_Handling(strVal)

       let rowArr= await this.row_Count
       let colArr= await this.col_Count

       let table_Arr =[]
      // let ArrObj=[]

       // Adding the data to Object:
       let obj ={

        LastName : "",
        FirstName : "",
        Email : "",
        Due : "",
        WebSite : "",
        Action: ""

       }
    

       for(let i=0; i<rowArr.length; i++){
       
        for(let k=0; k<colArr.length; k++){

         let value = await $(`//table[@id='table1']//tbody//tr[${i+1}]//td[${k+1}]`).getText();

        // let value = await colArr[k].getText(); -> In this case data won't come in object as tr[1]: row  starts and td[1] : cols 
        // This will work for a single loop conditions.

          table_Arr.push(value); // Adding the all table data to array
 
        // Assigning values to Object
         if(k===0) obj.LastName=value;
         if(k===1) obj.FirstName=value;
         if(k===2) obj.Email=value;
         if(k===3) obj.Due=value;
         if(k===4) obj.WebSite=value;
         if(k===5) obj.Action=value;


        }
        console.log(`Object Stored in i loop ---->>>>> :: ${JSON.stringify(obj)}`);


   // console.log(`Object Stored ---->>>>> :: ${JSON.stringify(obj)}`);
    // Object Stored ---->>>>> :: {"LastName":"Smith","FirstName":"John","Email":"jsmith@gmail.com","Due":"$50.00","WebSite":"http://www.jsmith.com","Action":"edit delete"}
   // Object Stored ---->>>>> :: {"LastName":"Bach","FirstName":"Frank","Email":"fbach@yahoo.com","Due":"$51.00","WebSite":"http://www.frank.com","Action":"edit delete"}
  //Object Stored ---->>>>> :: {"LastName":"Doe","FirstName":"Jason","Email":"jdoe@hotmail.com","Due":"$100.00","WebSite":"http://www.jdoe.com","Action":"edit delete"}
 //Object Stored ---->>>>> :: {"LastName":"Conway","FirstName":"Tim","Email":"tconway@earthlink.net","Due":"$50.00","WebSite":"http://www.timconway.com","Action":"edit delete"}

 }


    console.log(`Array values are : ${table_Arr}`);
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>`);
 // If i print obj outside than it will only print me the last row data.
 
}

async handlingSingleRowowDataFromTable_usingCondition(){

    let rowArr= await this.row_Count
    let colArr= await this.col_Count
    let rowData= 2
    let objectSingleData = []

   let obj ={

    LastName : "",
    FirstName : "",
    Email : "",
    Due : "",
    WebSite : "",
    Action: ""

   }

    for(let i=0; i<rowArr.length; i++){

      for(let k=0; k<colArr.length; k++){
     

     let value = await $(`//table[@id='table1']//tbody//tr[${i+1}]//td[${k+1}]`).getText();
     let firstName = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${rowData}]`).getText();


      if(firstName==='Jason'){

         // Assigning values to Object
         if(k===0) obj.LastName=value;
         if(k===1) obj.FirstName=value;
         if(k===2) obj.Email=value;
         if(k===3) obj.Due=value;
         if(k===4) obj.WebSite=value;
         if(k===5) obj.Action=value;

         // break; -> It won't work if tomorrow you hve specific condn

      }

      }

    //1. valid data it will hold rest of the 3 obj will be empty
    if (obj.FirstName) {
    //2. Only push the data if person object has a valid data in it
    objectSingleData.push(obj);
    
   }
    }

console.log(`Object Single Row Stored  ---->>>>> :: ${JSON.stringify(obj)}`);
// Single Row Stored :: {"LastName":"Doe","FirstName":"Jason","Email":"jdoe@hotmail.com","Due":"$100.00","WebSite":"http://www.jdoe.com","Action":"edit delete"}

 }


async singleCell_valueDataFrom_DynamicTableWithArray(){

    let arr = []

    let single_col_CellData  = await $$(`//table[@id="table1"]//tbody//td[4]`)


     for(let k=0; k< single_col_CellData.length ; k++){
       
       arr.push(await single_col_CellData[k].getText()); // use await either will print [object Promise]

     }


     console.log(`Price Col is : ${arr}`);
     // Price Col is : $50.00,$51.00,$100.00,$50.00

    let kIs = arr.filter((item)=>{

       console.log(typeof item);

       let itemValue = parseFloat(item.replace('$',''))  // Here its automatically convert to string to numbr

       // or use this -->> 
       // let val = Number(itemValue); // convert to number either give error 
        // Operator '>' cannot be applied to types 'string' and 'number'.ts(2365)

       return itemValue > 50.00;

     })

     console.log(`Value stored : ${kIs}`);

    //  string
   // string
  // string
 // string
// Value stored : $51.00,$100.00

}


async  singleCell_DynamicTableWithArray_Print_userName(){

   let arr =[]
   
    let single_col_CellData_Price  = await $$(`//table[@id="table1"]//tbody//td[4]`)

    for(let k=0; k<single_col_CellData_Price.length; k++){

    let firstName_Col = await $(`//table[@id="table1"]//tbody//tr[${k+1}]//td[2]`);

     let nameIs = await firstName_Col.getText();

     let priceIs =single_col_CellData_Price[k].getText();

    // The + operator in front of price.replace("$", "") is a shorthand way to convert the string to a number
    if(+(await priceIs).replace('$','') > 50.00 ){

      arr.push(nameIs)
    }


    }

    console.log(`Array Name is : ${arr}`); // Frank,Jason

}


}





export default new DataTable();
