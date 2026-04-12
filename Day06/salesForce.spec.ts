import test ,{expect}from "@playwright/test";

test('SalesForce login',async({page})=>{
      await page.goto("https://login.salesforce.com/?locale=ca")
      await page.locator("#username").fill("bhuvanesh.moorthy@testleaf.com")
      await page.locator("#password").fill("Qeagle@2025")
      await page.locator("#Login").click()
      await expect(page).toHaveTitle("Home | Salesforce") //autoRetrying


})