import test from "@playwright/test";

test.use({storageState:"utils/storageInfo.json"})
test(`Using StorageState`,async({page})=>{
   await page.goto("https://velocity-speed-6027.lightning.force.com/lightning/page/home")
    await page.locator("//span[text()='Contacts']").click()
    console.log(await page.title())
})

