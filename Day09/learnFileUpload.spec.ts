import test, { expect } from "@playwright/test";
import path from "path";

test("learn file upload using the input tag",async({page})=>{
     await page.goto("https://leafground.com/file.xhtml")
     // step 1 : identify the webelement whether input tag is available
     const chooseButton =page.locator(`(//input[@type='file'])[1]`)
     // step 2 : provide the static file location using path.join()
     // __dirname =C:\SessionProjects\PlaywrightWorkspace\PWMAR26\tests\Day9
     //C:\SessionProjects\playwrightWorkspace\pwMAR26\Data
     const filePath = path.join(__dirname, '../../Data/PlaywrightBGI.png')
     // step 3 : inject the file path directly into the dom
     await chooseButton.setInputFiles(filePath)
     await page.waitForTimeout(3000)
     await expect(page.locator(".ui-fileupload-filename")).toHaveText(/PlaywrightBGI.*/)
     // to multiple file 
//        setInputFiles([
//        path.join(__dirname, 'file1.txt'),
//        path.join(__dirname, 'file2.txt')]);

    
})

test.only('learn file upload without input tag', async ({ page }) => {
  // Run only focused tests in the entire project.
  await page.goto("https://the-internet.herokuapp.com/upload")
  // step 1 : Implement right event listerner and wait for that particular event
     const eventFileSelector = page.waitForEvent("filechooser")
  // step 2 : Trigger the dialog box using .click()
  await page.locator(`//div[@id='drag-drop-upload']`).click()
  // step 3 : Catch the event inject he path 
   const caughtEvent = await eventFileSelector
  // step 4 : Inject the file path using setFiles()--> when input tag is hidden or inaccessible
  const filePathHiddenInput = path.join(__dirname, '../../Data/QeagleLogo.jpeg')
  await caughtEvent.setFiles(filePathHiddenInput)
  await page.waitForTimeout(3000)
  // step 5 : optional assert the file is been uploaded
  await expect(page.locator("//div[@class='dz-filename']/span").first()).toHaveText(/QeagleLogo.*/)
})