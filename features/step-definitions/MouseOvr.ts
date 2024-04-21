import { When } from "@wdio/cucumber-framework";
import mouseFunction from "../../Test/pageObjects/MouseOvr"


When(/^user perform MouseOver functions$/, async () => {

// await mouseFunction.
await mouseFunction.perform_mouseOvr_ToClickElement();
let eleIs = await mouseFunction.mouseOvr
eleIs.scrollIntoView();
console.log("Hello");


});


When(/^user perform scrolling$/, async () => {

await mouseFunction.launchUrl("https://demoqa.com/menu");
// ***  key press *** 
// await browser.keys("Enter");
// await browser.keys([Key.Ctrl, 'a'])

});


When(/^user Perform multiple Window Handling$/, async () => {
/**
 *  
 * Window Handling :: 
 * 
 * 
 *  */	



});

