
export default class Page{      
        constructor(){

        }
    
        // With async function the typeScript won't work and the return type must be present in typeScript to write function.
        // So make some changes in tsconfig.json file .
    
        //The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<void>'?ts(1064)
    
        async navigateTo(path: string): Promise<void> {
    
         await browser.deleteAllCookies()
         await browser.maximizeWindow();
         await browser.setTimeout({implicit: 15000, pageLoad:15000})
         await browser.url(path);
         
        }

        async navigateToUsingUrl(path: string): Promise<void> {
    
            await browser.deleteAllCookies()
            await browser.maximizeWindow();
            await browser.setTimeout({implicit: 15000, pageLoad:15000})
            await browser.navigateTo(path);
            
           }
    
        async waitToClickElement(ele: WebdriverIO.Element){
    
            await ele.waitForClickable({timeout: 10000})
            if(!ele.elementId){
                throw Error(ele.error?.message)
    
            }
            await ele.click();
        }
    
    
        async typeTheValue(ele: WebdriverIO.Element, text: string){
    
           await ele.waitForDisplayed({timeout: 6000})
    
               if(!ele.elementId){
              throw Error(ele.error?.message)
               }
               await ele.setValue(text);
    
           }
    
        }
    
    