import test from '@playwright/test'

test(`Learning frames`,async({page})=>{

  await page.goto("https://www.leafground.com/frame.xhtml")
  const allFrames= page.frames()
  console.log(allFrames.length)
  //array starts here with 0 index
  //1st index [0] will the main page which is called main frame
  const mainFrame=allFrames[0]
  await mainFrame.title()
  //await page.locator("#Click").click() wont work as the element is in the frame
  const firstFrame=allFrames[1]
  const frme1Ele= firstFrame.locator("#Click")
  console.log(await frme1Ele.innerText())
  await frme1Ele.click()
  console.log(await frme1Ele.innerText())
  //nested frame
  const nestedFrame=allFrames[4]
  await nestedFrame.locator("#Click").click()
  await page.waitForTimeout(2000)
})

test(`Learning Frames using frameObject`,async({page})=>{
await page.goto("https://www.leafground.com/frame.xhtml")
 const firstFrame= page.frame({url:"https://www.leafground.com/default.xhtml"})
 //page.frame("(//iframe)[1]")
  const frameCount=firstFrame?.childFrames() //identify number of child frmae
  console.log(frameCount?.length)
  await firstFrame?.locator("#Click").click()
// const outerFrame= page.frame({url:"https://www.leafground.com/page.xhtml"})
//  const innerFrames= outerFrame?.childFrames() //? optional chaining operator
//     console.log(innerFrames?.length)
//   await innerFrames?.at(0)?.locator("#Click").click()  
//await page.title()
})


test.only(`FrameLocator`,async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()
    //nested frame
    const outerFr= page.frameLocator(`//h5[contains(text(), 'Click Me (Inside Nested frame)')]/following-sibling::iframe`)
            const innerfr=outerFr.frameLocator('#frame2')
                await  innerfr.locator("#Click").click()

})