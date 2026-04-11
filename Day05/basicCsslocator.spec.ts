import test, { expect } from '@playwright/test'
test("Learning basic CSS locator",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")

     //to locate element in the webpage and type into it
     await page.locator("#username").fill("demoCSR")
     //locator("id=username")
     await page.locator("input[id=password]").fill("crmsfa")

     //click a button
     await page.locator("input.decorativeSubmit").click()

     //pause the execution
     //await page.waitForTimeout(3000)

     await page.locator("text=CRM/SFA").click()
     //a[text=CRM/SFA]

     const title=await page.title()
     console.log(title)

     //validate the title
     expect(title).toContain("testleaf")


})