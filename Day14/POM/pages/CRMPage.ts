import { Login } from "./LF_LoginPage";


export class CRMPage extends Login{

    async clickCrm(titleName:string){
        await this.click(this.selectors.crmLink)
        await this.verifyTitle(titleName)
    }

    async clikcLeads(){
        await this.click(this.selectors.leads.leadsLink)
    }

}