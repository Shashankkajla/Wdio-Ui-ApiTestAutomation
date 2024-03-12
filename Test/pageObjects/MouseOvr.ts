import Page from "./page";


class MouseOvr extends Page{


 constructor(){
    super()
 }


 // >>>>>> *** Page Objects *** <<<<<<<

 get mouseOvr() { return $(`//a[text()="Main Item 2"]`) }

 get mouseOvr_subList() {
    return $(`//a[text()="SUB SUB LIST »"]`)
 }

 get click_mouseItem(){ return $(`//a[text()="Sub Sub Item 1"]`)}
  

 // >>>>>> *** Page Functions *** <<<<<<<
 
 async launchUrl(str: string){

   await this.navigateToUsingUrl(str);
   browser.pause(5000)

  
 }

 async perform_mouseOvr_ToClickElement(){

// MouseOver 
  let eleIs = await this.mouseOvr
  await eleIs.moveTo()

// MouseOver & click 
  let subList = await this.mouseOvr_subList

  if(await subList.isDisplayed()) {
  await subList.moveTo()
  await this.waitToClickElement(await this.click_mouseItem)
  }
  await browser.pause(8000)


 }


 // Scrolling :: Function in JS ::



}





export default new MouseOvr()