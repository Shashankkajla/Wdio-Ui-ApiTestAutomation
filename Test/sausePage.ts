import Page from "../Test/pageObjects/page";
// 1.) Importing page as its sitting in the same directory so put ./page
// 2.) Now you see --> 'Page' is declared but its value is never read.ts(6133), For for this we need to export this
// we can use default export :: means its not a named export we can export it with any name using default export
//or other way as well to export it.

class sausePage extends Page {
  constructor() {
    super(); // //3. Al of the defined methods and properties of the page
  }


  
  // **** Page Objects *****

  // All the page objects will be the getter methods

  // ** Use-Name **
  get userName_InputBox() {
    return $(`#user-name`);
  }
  get password_InputBox() {
    return $(`//input[@id="password"]`);
  }
  get login_Btn() {
    return $(`#login-button`);
  }


  // ***** Page Actions ****

  async enterUserName(un: string): Promise<void> {
    // Ask for tesId mine not setUp

    if (!un) throw Error(`Given userName ${un} is not valid !`); // First Check for falsy values

    try {
      un = un.trim();
      await this.typeTheValue(await this.userName_InputBox, un);
      // Report the step using reporterter log level winston i am unable to setUp for now...
      console.log("User name enter successfully !!" + un);
    } catch (err) {
      // err.message = `Error enterning userName : ${un}, ${err.message}`;
      throw err;
    }
  }

  // Note :: All of these function are async function internally it will returning promise that means we need to resolve the promise using
  // await

  async enterPassword(pw: string) {
    if (!pw) throw Error(`Given password is empty ${pw}`);

    try {
      pw = pw.trim();
      await this.typeTheValue(await this.password_InputBox, pw);
      console.log("User enters Pwd Successfully !!" + pw); // pw is sensitive would not show in console message
    } catch (err) {
      // err.message = `Error enterning pw : ${pw}, ${err.message}`;
      throw err;
    }
  }

  async clickBtn_Login() {
    try {
      await this.waitToClickElement(await this.login_Btn);
    } catch (error) {
      //error.message = `Unable to click Element`;
      console.log("Checking Again");
      await this.waitToClickElement(await this.login_Btn);
    }
  }

  // ****** Groupping Functionality *****
  async loginToSauseApp(userName: string, pass: string) {
    try {
     
      await this.enterUserName(userName);
      await this.enterPassword(pass);
      await this.clickBtn_Login();
      await browser.pause(5000);
    } catch (err) {
      throw err;
    }
  }

  async launchBrowserUrl(urlValue : string){
    await this.navigateTo(urlValue);
  }

}

export default new sausePage(); // step default file will call it and make use of this file
