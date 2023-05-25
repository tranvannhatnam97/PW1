const { test, expect } = require('@playwright/test');
exports.LoginPage = class LoginPage{
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
        await this.username_textbox.fill(username)
        await expect(this.username_textbox).toHaveValue(username)
        await this.password_textbox.fill(password)
        await expect(this.password_textbox).toHaveValue(password)
        await this.login_button.click({"force":true})
    }
    async expect_login_success(){
        await expect(this.page.getByText(/Account Information/)).toHaveCount(1)
        
    }
}