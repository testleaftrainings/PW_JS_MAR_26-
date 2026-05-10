import { expect, Page, test } from "@playwright/test";

export abstract class PlaywrightWrapper{

   page!:Page

   constructor(page:Page){
     this.page=page
   }


   //method will enter the url 
   public async loadUrl(url:string){
         await this.page.goto(url)
            }


            //the method will clear the textbox and then enter the data
   public async clearAndType(selector:string,data:string){
            try{
             const ele= this.page.locator(selector)
             await ele.clear()
             await ele.fill(data)
            }catch(error){
                console.log(error)
            }
        }

        //method will fill the data
     public async fillData(selector:string,data:string){
          //await  test.step(`Filled the ${data}`,async()=>{ 
            try{
             const ele= this.page.locator(selector)
             await ele.fill(data)
            }catch(error){
                console.log(error)
            }
     //   })
    }

    //method supports to click on any webelement
    public async click(selector:string,force?:boolean){
           // await this.page.waitForSelector(selector)
            await this.page.locator(selector).click()
        
    }

    //,method use to verify the title
    public async verifyTitle(title:string){
//await  test.step(`Verifiying the title of the page`,async()=>{
            const pageTitle=await this.page.title()
            expect(pageTitle).toContain(title)
    //    })
    }
   
    //method for store the session info
    public async storageState( ){
        await this.page.context().storageState({path:""})

    }

}