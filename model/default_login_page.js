const { test, expect } = require('@playwright/test');
exports.LoginPage= class LoginPage{
    constructor(page){
        this.page = page
        this.username_textbox = this.page.locator('//*[@id="txt_email"]')
        this.password_textbox = this.page.locator('//*[@id="input_password"]')
        this.login_button = this.page.locator('//button[contains(text(),"Login")]')
    }
    async gotoLoginPage(){
        await this.page.goto('https://test-org.ichiba.net/vi/')
    }
    async login(username, password){
        // await this.page.waitForLoadState('domcontentloaded')
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click({"force":true})
        // await this.page.waitForNavigation({url: 'https://test-org.ichiba.net/vi/'})
        // await this.page.waitForURL('https://test-org.ichiba.net/vi/')
        // await this.page.navigate('https://test-org.ichiba.net/vi/')
    }
    async expect_login_success(){
        // await this.page.waitForTimeout(3000)
        // await this.page.waitForLoadState('domcontentloaded')
        await expect(this.page.getByText(/Account Information/)).toHaveCount(1)
    }
}