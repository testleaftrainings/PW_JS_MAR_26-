import test, { expect } from '@playwright/test'
import credentials from "../../Data/leaftapsLogin.json"


test.describe.serial("executing role based test ",async()=>{

    for(let data of credentials){
test(`Learning JSON Parameterization role is ${data.role}`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill(data.username)
    await page.locator("#password").fill(data.password)
    await page.locator(".decorativeSubmit").click()
})
    }
})