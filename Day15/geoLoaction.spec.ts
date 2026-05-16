
import test from '@playwright/test'


test.use({geolocation:
    {
        latitude:13.0479859,
        longitude:79.8789948
},permissions:['geolocation']})
test(`Geoloaction`,async({page})=>{
    await page.goto("https://www.google.com/maps")
    await page.locator('.sVuEFc').first().click()
    await page.waitForTimeout(3000)

})