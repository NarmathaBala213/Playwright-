class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username) {
        await this.page.locator(this.username).fill(username);
    }

    async enterPassword(password) {
        await this.page.locator(this.password).fill(password);
    }

    async clickLogin() {
        await this.page.locator(this.loginBtn).click();
    }
}

module.exports = LoginPage;