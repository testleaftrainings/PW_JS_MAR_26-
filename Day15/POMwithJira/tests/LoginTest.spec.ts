import {test} from '../utility/customFixture'
import { Login } from "../pages/LF_LoginPage";
import { parse } from "csv-parse/sync";
import fs from 'fs'
import { createJiraIssue } from '../utility/jiraintegration';


let loginData:any[]
loginData=parse(fs.readFileSync("tests/Day14/POM/data/loginCredentials.csv"),
{
     columns:true,
    skip_empty_lines:true,
})

test(`Login with LeafTaps`,async({lfLogin})=>{ 
      
    await lfLogin.loadUrl("https://leaftaps.com/opentaps/control/mai")  
    await lfLogin.enterCredentials(loginData[1].username,loginData[1].password)
    await lfLogin.doLogin()
    await lfLogin.verifyTitle("Leaftaps")   // await createJiraIssue(testInfo.title,"Failed due to netork failure")
     
})



test(`LeafTaps`,async({home})=>{       
    await home.loadUrl("https://leaftaps.com/opentaps/control/main")  
    await home.enterCredentials(loginData[1].username,loginData[1].password)
    await home.doLogin()
    await home.verifyTitle("Leaftaps")   // await createJiraIssue(testInfo.title,"Failed due to netork failure")
     await home.clickCrm()
})