import { test } from "../utility/customFixture";
import { Login } from "../pages/LF_LoginPage";
import { LeadsPage } from "../../../Typescript/oops/lfUsecase";


test.use({storageState:"utils/Leaftaps.json"})
test(`Login with LeafTaps`,async({home,acc})=>{     
     await home.loadUrl("https://leaftaps.com/opentaps/control/login")
     await home.clickCrm("Leaftaps")  
     await acc.clickAccounts()
      
})