import { test,expect } from '@playwright/test';
import { AlertsPage } from '../pages/alertpage';

test.skip('handle the alerts', async ({ page }) => {

  const alertpage = new AlertsPage(page);
  await alertpage.navigate();

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await alertpage.clickJSAlert();

});
test.skip('handle the prompts',async({page}) =>{
  const alertpage = new AlertsPage(page);
  await alertpage.navigate();

  page.on('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.dismiss();
  })

  await alertpage.clickJSConfirm();

})
test('handle the prompts and give inputs',async({page})=>{
  const alertpage= new AlertsPage(page);
  await alertpage.navigate();

  page.on('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept('Mass');
    await page.waitForTimeout(3000);
  })
  await page.waitForTimeout(3000);

  await alertpage.clickjsPrompt();
  await page.waitForTimeout(3000);
  await expect(alertpage.result).toHaveText('You entered: Mass'); //to have exact text
  await expect(alertpage.result).toContainText(/mass/i); //partially- dont care the caps or small
})