
import {test as baseTest} from '@playwright/test'
import { Login } from '../pages/LF_LoginPage';
import { CRMPage } from '../pages/CRMPage';
import { AccountsPage } from '../../../Typescript/oops/lfUsecase';


 type myFixtures={
    lfLogin:Login,
    home:CRMPage,  
    acc:AccountsPage 
 }

export const test= baseTest.extend<myFixtures>({
    lfLogin: async({page},use)=>{
        await page.goto("https://leaftaps.com/")
        await page.fill("","")
        await page.fill("","")
        await page.click(".decorativeSubmit")
        await page.context().storageState({path:""})
        const lp=new Login(page)
        await use(lp)
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


   