import test from '@playwright/test'
test(`API with PW`,async({page,request})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("text=CRM/SFA").click()
    const response=await request.post(`https://leaftaps.com/crmsfa/control/createLeadForm`,{
        data:{
            "companyName":"Qeagle",
            "firstName":"Vidya",
            "lastName":"bharathi"
        }
    })
    console.log(response.status())
   


})