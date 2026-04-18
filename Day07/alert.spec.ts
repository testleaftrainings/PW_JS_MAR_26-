import test from '@playwright/test';


test("Learning alert",async({page})=>{
   await page.goto("https://www.leafground.com/alert.xhtml")
   await page.locator("//span[text()='Show']").first().click()
   //alerts are auto dismissed if you are not handling it -there is no exception
   await page.locator("//span[text()='Show']").nth(1).click()
   await page.waitForTimeout(3000)
})

test("Based on alert type using event handler",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    page.on('dialog',alertType=>{
       const dialogType= alertType.type()
       const message=alertType.message()
       console.log(`The alert type is ${dialogType} and the message is ${message}`)
       if(dialogType==='prompt'){
       alertType.accept('Vidya')
       }else{
        alertType.dismiss()
       }
    })
    await page.locator("//span[text()='Show']").first().click()   //simple alert
   //alerts are auto dismissed if you are not handling it -there is no exception
   await page.locator("//span[text()='Show']").nth(1).click()  //confirm alert
   await page.waitForTimeout(3000)
   //
   await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click() //prompt alert
   await page.waitForTimeout(3000)
//sweet alert
   await page.locator(`//span[text()='Dismiss']`).click()

})



test.only("Based on alert type using event handler",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")

    page.once('dialog',alertType=>{      
       alertType.accept()       
    })
    await page.locator("//span[text()='Show']").first().click()   //simple alert
   //alerts are auto dismissed if you are not handling it -there is no exception
   
    page.once('dialog',alertType=>{      
       alertType.dismiss()       
    })
   await page.locator("//span[text()='Show']").nth(1).click()  //confirm alert
   await page.waitForTimeout(3000)
   
    page.once('dialog',alertType=>{      
       alertType.accept('Vidya')       
    })
    
   await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click() //prompt alert

   await page.waitForTimeout(3000)

})