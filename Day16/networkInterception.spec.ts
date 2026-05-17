import test from '@playwright/test'

test(`Abort the images`,async({page})=>{
    //will cancel the loading of all image/pic realted elemets in the app
  await page.route("**/*.{png,jpg,svg,jpeg}",route=>route.abort())
  await page.goto("https://www.amazon.com")
  await page.waitForTimeout(3000)
})

test.only(`Mocked response`,async({page})=>{

    await page.route("**/aura?preloadActions",async(route,request)=>{
        if(request.method()=='POST'){
            console.log(request.url())
            console.log(JSON.stringify(request.headers(),null,3))
            //mock the responsebody
            const mockRes={
                actions:[
                    {
                        id:1,
                      state:'SUCCESS',
                      returnValue:{
                        message:'Mocked response'
                      }
                    }
                ]
            }
          
          await route.fulfill({
             status:200,
             contentType:'application/json',
             body:JSON.stringify(mockRes)
          })
        }else{
            await route.continue()
        }
    })
     await page.goto("https://login.salesforce.com")
     await page.locator("#username").fill("gauthami.vn@testleaf.com")
     await page.locator("#password").fill("TestLeaf@123")
     await page.locator('#Login').click()
     await page.waitForTimeout(6000)
    // await page.locator(`//span[text()='App Launcher']`).click()
     
})