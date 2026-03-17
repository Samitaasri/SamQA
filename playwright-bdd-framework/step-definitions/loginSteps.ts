import { Given, When, Then,setDefaultTimeout  } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
setDefaultTimeout(60000);

let browser: Browser;
let page: Page;

Given('user is on login page', async function () {

    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://example.com");

});

When('user enters username and password', async function () {

    await page.fill('#username','admin');
    await page.fill('#password','admin123');

});

Then('user should see dashboard', async function () {

    await page.waitForSelector('#dashboard');

});