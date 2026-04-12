import test, { expect } from '@playwright/test'
test("Assertions",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
     await page.locator("#username").fill("demoCSR") //locator assertion    
     const pass=page.locator("input[id=password]")
     await pass.clear()
     await pass.fill("crmsfa")   
     const submit= page.locator("input.decorativeSubmit")
     await submit.isEnabled() //locator 
     await submit.click()   
     await page.locator("text=CRM/SFA").click()
    const title=await page.title()  
    expect(title).toContain("testleaf")//generic assertion
    await expect(page).toHaveURL("https://leaftaps.com/crmsfa/control/main") //Page aassertion auto retrying
})