import { Page, Locator } from '@playwright/test';

export class AlertsPage {

  readonly page: Page;
  readonly jsAlertButton: Locator;
  readonly jsConfirm: Locator;
  readonly jsPrompt: Locator;
  readonly result:Locator;

  constructor(page: Page) {
    this.page = page;
    this.jsAlertButton = page.getByRole('button', { name: 'Click for JS Alert' });
    this.jsConfirm = page.getByRole('button',{name:'Click for JS Confirm'});
    this.jsPrompt = page.getByRole('button',{name:'Click for JS Prompt'});
    this.result = page.locator('#result');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  }

  async clickJSAlert() {
    await this.jsAlertButton.click();
  }

  async clickJSConfirm() {
    await this.jsConfirm.click();
  }

  async clickjsPrompt(){
    await this.jsPrompt.click();
  }
  

}