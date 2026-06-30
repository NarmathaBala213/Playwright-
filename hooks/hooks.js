const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

let browser;
let page;
let loginPage;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    loginPage = new LoginPage(page);

    this.page = page;
    this.loginPage = loginPage;
});

After(async function () {
    await browser.close();
});