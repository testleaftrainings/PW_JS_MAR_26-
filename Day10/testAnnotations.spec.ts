import test from '@playwright/test'
test(`Test -1`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})
    
test.skip(`Test -2 skip`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})

  
test.fixme(`Test -3 fix`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})

  
test(`Test -4 slow`,async({page})=>{
    test.slow() //slow down the test
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
})

  
test(`Test 5 test info`,async({page})=>{

    test.info().annotations.push({type:"Regression",description:"End to end flow"},
                                 {type:"Module",description:"Leads"})
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    
})