import { Login } from "./LF_LoginPage";


export class CRMPage extends Login{

    async clickCrm(){
        await this.click(this.selectors.crmLink)
    }

    async clikcLeads(){
        await this.click(this.selectors.leads.leadsLink)
    }

}