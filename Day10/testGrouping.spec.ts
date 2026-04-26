import test from '@playwright/test'

test.describe(`Grouping tests`,async()=>{
   test.describe.configure({mode:'serial',retries:2});
test(`Test -1`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#passwor").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})

test(`Test -2 `,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})

  
test(`Test -3 `,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})

})