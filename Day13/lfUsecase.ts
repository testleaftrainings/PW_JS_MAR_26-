import { LaunchApplication } from "./baseClass";
//launch url ,login with username n password -->crmsfa link-->Leads-->CreateLeads
export class LFLoginPage extends LaunchApplication{
    
    async enterUsername(uname:string){
       await this.lppage.locator("#username").fill(uname)
    }
    
    async enterPassword(password:string){
       await this.lppage.locator("#password").fill(password)
    }

    
    async clickLogin(){
      await  this.lppage.locator(".decorativeSubmit").click()
    }
}

export class LFHomePage extends LFLoginPage{
    
    async crmClick(){
        await this.lppage.locator(`text=CRM/SFA`).click()
    }

    async clickLogout(){
 
    }
}

export class MTHomePage extends LFHomePage{

    async clickLeads(){
        await this.lppage.locator("//a[text()='Leads']").click()
    }

    async clickAccounts(){
        await this.lppage.locator("//a[text()='Accounts']").click()
    }
}

export class LeadsPage extends MTHomePage{


}

export class AccountsPage extends MTHomePage{

}