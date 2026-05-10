import { CRMPage } from "./CRMPage";
import { Login } from "./LF_LoginPage";


export class HomePage extends CRMPage{

    async clikcLeads(){
        await this.click(this.selectors.leads.leadsLink)
    }
}