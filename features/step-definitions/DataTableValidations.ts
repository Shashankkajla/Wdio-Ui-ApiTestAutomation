import {When, Then} from "@wdio/cucumber-framework"
import dataTable from "../../Test/pageObjects/DataTable"
// import util from 'util';
// import fs from 'fs';




When(/^User store multiple of Data by passing value and click.$/, async () => {

 await dataTable.genericGetElementCall("Sauce Labs Fleece Jacket")

// const write = util.promisify(fs.writeFile)
// const read= util.promisify(fs.readFile)

// await write('','utf8')

});


When(/^user store all the values in array and perform action.$/, async () => {

      await dataTable.store_Arr();
});


When(/^user store all the values in Objects and perform action.$/, async () => {

   await dataTable.store_Objects();

});


Then(/^user handling the DataTable Values$/, async () => {

    await dataTable.handlingData_NestedLoopForTable("https://the-internet.herokuapp.com/tables")

});


Then(/^get a Single row based data from the dataTable$/, async () => {

    await dataTable.handlingSingleRowowDataFromTable_usingCondition();
	
});

Then(/^get a Single cell value data from the dataTable$/, async () => {

    await dataTable.singleCell_valueDataFrom_DynamicTableWithArray();
});


Then(/^get single cell value and print the corrosponding username when price gets satisfied from DataTable$/, async () => {

    await dataTable.singleCell_DynamicTableWithArray_Print_userName();
});





