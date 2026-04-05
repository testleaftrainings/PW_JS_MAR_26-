import test from "playwright/test";


test('Using fixture',async({page})=>{     
    await page.goto("http:www.google.com")
})