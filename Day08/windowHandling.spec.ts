import test from "@playwright/test";


test('Handling tabs',async({page,context})=>{

    await page.goto("https://www.iob.bank.in/en/")
    await page.locator("button#englishBtn").click()
    await page.locator("//span[text()='Login']").click()
    console.log(await page.title())
    const pageRef= page.waitForEvent('popup') //pagelevel  //event
    page.locator("//a[text()=' Internet Banking Personal Login']").click() //trigger the even
    const newTab=await pageRef //resolving promise
    console.log(await newTab.title())
   await newTab.locator("#loginsubmit_loginId").fill("ryworehyi")
   await newTab.waitForTimeout(2000)
   await page.locator("//i[contains(@class,'bi-person-circle me-1')]").click()
   await page.bringToFront()
    await newTab.waitForTimeout(2000)
   await newTab.bringToFront()
   await newTab.waitForTimeout(2000)

})


test.only("Handling multiplewindows",async({page,context})=>{

  await page.goto("https://www.leafground.com/window.xhtml")

        const [multiplePromises]  =await Promise.all([
           // context.waitForEvent('page'),
            page.waitForEvent('popup'),
            //page.waitForLoadState('load'),
            page.getByText("Open Multiple",{exact:true}).click()
        ])
       const numOfPages= multiplePromises.context().pages()
       console.log(numOfPages)
 
       let pageREf:any
       for(let i=0;i<numOfPages.length;i++){
        await page.waitForTimeout(3000)
        await numOfPages[i].title()
          const title=await numOfPages[i].title()
          if(title=="Dashboard"){
            pageREf=numOfPages[i]
          }
       }

       await pageREf.locator("#email").fill("vid@gmail.com")
       await pageREf.bringToFront()
       await page.waitForTimeout(2000)
})