import test, { expect } from '@playwright/test'


test(`Visual Regression`,async({page})=>{
  await page.goto("http://www.amazon.com")
// const ele=page.locator("#twotabsearchtextbox")
// const ss=await ele.screenshot({path:"utils/screenshot.png"})
  await expect(page).toHaveScreenshot({maxDiffPixelRatio:100})
  await page.waitForTimeout(2000)
})