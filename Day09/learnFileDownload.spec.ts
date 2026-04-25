import test, { expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("learn file download",async({page})=>{

   await page.goto("https://leafground.com/file.xhtml")
   // step 1 : Choose the event listener
    const waitingForDownload =page.waitForEvent("download")
   // step 2 : Trigger the event using the download button .click() 
    await page.getByRole("button",{name :" Download"}).click()
   // step 3 : Download event to be caught
    const download=await waitingForDownload
    // step 4: fetch the response and store it in the static file directory
    download.saveAs(path.join(__dirname,"../../Data/")+ download.suggestedFilename())
    await page.waitForTimeout(2000)
    // step 5 : optional : assert the file is downloaded it the static path
    expect(fs.existsSync(path.join(__dirname,"../../Data/")+ download.suggestedFilename())).toBeTruthy()

})