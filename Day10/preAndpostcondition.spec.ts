
import test from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'

let loginData:any[]
test.beforeAll('read data',async()=>{ 
loginData=parse(fs.readFileSync("utils/loginCredentials.csv"),{
     columns:true,
    skip_empty_lines:true,
})
})

//test.use({storageState:'utils/storageInfo.json'})
test.beforeEach('Verify the homepage',async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.getByRole("link",{name:"CRM/SFA"}).click()
})

test(`Test-1`,async({page})=>{
   await page.getByRole("link",{name:"Leads"}).click()
})


test(`Test-2`,async({page})=>{
   await page.getByRole("link",{name:"Accounts"}).click()
})

let status:any
test.afterEach(`test staus`,async({page}) =>{
   status=test.info().status
   console.log(status)
})

test.afterAll(`Log defect in jira`,async()=>{
    console.log("Log defect in jira : " + status)
})