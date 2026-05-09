import { test,chromium} from '@playwright/test';
import { AccountsPage, LeadsPage } from './lfUsecase';


test('Leads test', async ({page}) => {
  // const browser=await chromium.launch({headless:false})
  // const browserContext=await browser.newContext()
  // const page=await browserContext.newPage()
  //await page.goto()
  // const lp=new LaunchApplication(page)
  // await lp.loadUrl()

  const lead=new LeadsPage(page)
  await lead.loadUrl()
  await lead.enterUsername("demoCSR")
  await lead.enterPassword("crmsfa")
  await lead.clickLogin()
  await lead.crmClick()
  await lead.clickLeads()

});

test('Accounts test', async ({page}) => {
  const acc=new AccountsPage(page)
  await acc.loadUrl()
  await acc.enterUsername("demoCSR")
  await acc.enterPassword("crmsfa")
  await acc.clickLogin()
  await acc.crmClick()
  await acc.clickLeads()
  await acc.clickAccounts()

});