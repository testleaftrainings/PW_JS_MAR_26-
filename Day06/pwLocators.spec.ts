import test from '@playwright/test'

test("Playlocators",async({page})=>{
  
    await page.goto("https://www.amazon.ca/")
    const searchBox=page.getByPlaceholder("Search Amazon.ca")
    await searchBox.fill("phones")
    await searchBox.press('Enter')   
    await page.getByLabel("Samsung Galaxy").nth(0).click()
    await page.getByTitle("Add to Shopping Cart").click()    
    })