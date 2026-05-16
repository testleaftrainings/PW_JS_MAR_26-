import test, { devices } from '@playwright/test'
test(`webtable`,async({page})=>{

 await page.goto("https://www.leafground.com/table.xhtml")
 for(let i=1;i<=5;i++){
 console.log(await page.locator(`//table[@role='grid']/tbody/tr[${i}]`).innerText())
 }
})

test('shadowdom',async({page})=>{
    await page.goto("https://www.salesforce.com/ca/products/")
    await page.locator("(//span[text()='Products'])[1]").click()
   
    
})

test.use({...devices['Blackberry PlayBook landscape']})
test.only('KeyboardPress',async({page})=>{

await page.goto("http://www.amazon.com")
    const ele= page.locator("#twotabsearchtextbox")
    await ele.fill("Mobiles")
    await ele.press("Enter")
})
