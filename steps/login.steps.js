const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('User opens login page', async function () {
    await this.loginPage.open();
});

When('User enters username {string}', async function (username) {
    await this.loginPage.enterUsername(username);
});

When('User enters password {string}', async function (password) {
    await this.loginPage.enterPassword(password);
});

When('User clicks Login button', async function () {
    await this.loginPage.clickLogin();
});

Then('User should navigate to products page', async function () {
    const url = this.page.url();
    assert(url.includes('inventory'));
    console.log("Login Successfull");
});
