
import test from '@playwright/test'

test(`StorageSession`,async({page})=>{
  
    await page.goto("https://velocity-speed-6027.my.salesforce.com/")
    await page.locator("#username").fill("vidyar1926-wg5c@force.com")
     await page.locator("#password").fill("vidSales@123")
      await page.locator("#Login").click()
      await page.waitForTimeout(10000)
     await page.context().storageState({path:"utils/storageInfo.json"})
        await page.locator("//span[text()='Contacts']").click()
    console.log(await page.title())
      await page.waitForTimeout(2000)
})