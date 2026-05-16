
import {test as baseTest} from '@playwright/test'
import { Login } from '../pages/LF_LoginPage';
import { CRMPage } from '../pages/CRMPage';
import { AccountsPage } from '../../../Typescript/oops/lfUsecase';
import { createJiraIssue } from './jiraintegration';
import { logDefect } from './logDefectinJira';


 type myFixtures={
    lfLogin:Login,
    home:CRMPage,  
    acc:AccountsPage 
 }

export const test= baseTest.extend<myFixtures>({
    lfLogin: async({page},use)=>{
        const lp=new Login(page)
        await use(lp)
        console.log("Clean up the resources")  //post condition 

    },
     home: async({page},use)=>{
        const hp=new CRMPage(page)
        await use(hp)
    } ,  

    acc:async({page},use)=>{
        const ac=new AccountsPage(page)
        await use(ac)
    }
   })

   let key:any
//post condition
test.afterEach(`Jira`,async({},testInfo)=>{
     key=  await logDefect(testInfo)

})

// test.afterAll('Uplaod attachment',async()=>{
//     await updateJiraIssue(key)
// })