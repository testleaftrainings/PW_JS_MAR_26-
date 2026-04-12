import test, { expect }  from "@playwright/test";

test(`AutoRetry`,async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")
    const textField= page.getByPlaceholder("Babu Manickam")
    await expect.soft(textField).toBeDisabled()
    await page.locator('//input[@value="Chennai"]').fill(" TN")  
    //await expect(page.locator("")).toBeEditable()
    //await expect(ele).toBeEnabled()
})