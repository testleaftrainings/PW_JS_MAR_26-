import { Page } from "@playwright/test";
import { PlaywrightWrapper } from "../utility/pwWrapperClass";

export class Login extends PlaywrightWrapper{
   // page!:Page
 

    public selectors={
         userName:"#username",
         password:"#password",
         loginButton:".decorativeSubmit",
         crmLink:`text=CRM/SFA`,
         leads:{
            leadsLink:`//a[text()='Leads']`,
            createLeadLink:`//a[text()='Create Lead']`
         },
         accounts:{        

         }

    }

    constructor(page:Page){
        super(page)
        this.page=page
    }

   async launchApp(url:string){
       await this.loadUrl(url)
   }

   async enterCredentials(username:string,password:string){
         await this.fillData(this.selectors.userName,username)
         await this.fillData(this.selectors.password,password)
   }

   
   async doLogin(){
        await this.click(this.selectors.loginButton)
        await this.storageState()

   }


}