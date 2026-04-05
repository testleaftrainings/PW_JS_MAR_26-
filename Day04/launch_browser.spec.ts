//filename.spec.ts
//npx playwright test filename.spec.ts

//npm -->node package manage
//npx-->node package executor

import {chromium, firefox, test} from '@playwright/test'

test('Launch Chrome Browser',async()=>{
    
      const browser= await chromium.launch({channel:'chrome'})
      const browserContext=await browser.newContext()
      const page=await browserContext.newPage()
      await page.goto("http://www.google.com")
})

test('Launch FireFox Browser',async()=>{    
      const browser= await firefox.launch({headless:false})
      const browserContext=await browser.newContext()
      const page=await browserContext.newPage()
      await page.goto("http://www.google.com")
})