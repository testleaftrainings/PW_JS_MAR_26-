import test from '@playwright/test'
import dotenv from 'dotenv'


dotenv.config({path:`utils/prod.env`})

test(`Learning Env to read the data`,async()=>{
  console.log(process.env.LT_username)

})

 const username=process.env.LT_username as string  //type assertion

test.only(`Learning CSV Parameterization testcase id`,async({page})=>{
    await page.goto(process.env.Base_url as string)
    await page.locator("#username").fill(username)
    await page.locator("#password").fill(process.env.LT_password as string)
    await page.locator(".decorativeSubmit").click()
})