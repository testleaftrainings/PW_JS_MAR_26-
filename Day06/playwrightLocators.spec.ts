import test from '@playwright/test'

test("Playlocators",async({page})=>{
  
    // await page.goto("https://www.amazon.ca/")

    // await page.getByPlaceholder("Search Amazon.ca").fill("Mobiles")
    // await page.getByAltText("Beauty").nth(0).click()  //alt=""
    // await page.waitForTimeout(2000)
     await page.goto("https://leaftaps.com/opentaps/control/main")
     
     //await page.locator("#username").fill("demoCSR")
     await page.getByLabel("Username",{exact:true}).fill("demoCSR")
     
     await page.getByLabel("Password").fill("crmsfa") //find the label and fill the data to the immediate input (textbox)
     await page.locator("input.decorativeSubmit").click() 
    await page.getByRole("link",{name:"CRM/SFA"}).click()
    await page.getByRole("link",{name:"Leads"}).click()
    await page.getByRole("link",{name:"Create Lead"}).click()
    await page.locator("#createLeadForm_companyName").fill("Testleaf")
    await page.locator("#createLeadForm_firstName").fill("Vidya")
    await page.locator("#createLeadForm_lastName").fill("R")
    await page.getByRole("button",{name:"Create Lead"}).click()
    
    
})