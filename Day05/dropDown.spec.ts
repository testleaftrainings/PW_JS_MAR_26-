import test from '@playwright/test'
test("Learning basic CSS locator",async({page})=>{
    await page.goto("https://www.amazon.ca/ref=nav_logo")

    await page.selectOption("#searchDropdownBox",{value:"search-alias=automotive"})

    await page.waitForTimeout(2000)
    await page.selectOption("#searchDropdownBox",{index:6})

        await page.waitForTimeout(2000)

  await page.selectOption("#searchDropdownBox",{label:"Luggage & Travel Gear"})

        await page.waitForTimeout(2000)
    
const count=await page.locator("select#searchDropdownBox option").count()
console.log(count)
    
})