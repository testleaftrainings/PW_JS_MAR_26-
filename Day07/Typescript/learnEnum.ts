




enum Enivronment{
    qaurl="http://www.google.com/qa",
    stagingUrl="htttp://www.google.com/staging"
}

async function lauchBrowser(url:Enivronment){
         const browser:test.Browser= await chromium.launch({channel:'chrome'})
          const browserContext:BrowserContext=await browser.newContext()
          const page:Page=await browserContext.newPage()
          await page.goto(url)
         
}
function loadUrl(url:Enivronment){
    console.log(url)
}


loadUrl(Enivronment.qaurl)
loadUrl(Enivronment.stagingUrl)

lauchBrowser(Enivronment.qaurl)
lauchBrowser(Enivronment.stagingUrl)