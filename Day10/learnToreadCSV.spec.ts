import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

let loginData:any[]
loginData=parse(fs.readFileSync("utils/loginCredentials.csv"),{
     columns:true,
    skip_empty_lines:true,
})


// test('Reading CSv file',async()=>{
//     console.log(loginData)
// })

for(let data of loginData){
test(`Learning CSV Parameterization testcase id ${data.tcId}`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill(data.username)
    await page.locator("#password").fill(data.password)
    await page.locator(".decorativeSubmit").click()
})
    }


