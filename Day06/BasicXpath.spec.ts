import test from "@playwright/test";

test('Basic xpath',async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    //id=username
    await page.locator(`//input[@id='username']`).fill("demoCSR")
    ////input[contains(@id,'name')]
    await page.locator("//p[@class='top']/input").fill('demoCSR')
})