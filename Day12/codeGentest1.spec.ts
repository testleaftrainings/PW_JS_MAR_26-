import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL579485655444');
});