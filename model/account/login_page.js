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
    async fill_username_textbox(username){
        await this.username_textbox.fill(username)
        // await expect(this.username_textbox).toHaveValue(username)
    }
    async fill_password_textbox(username){
        await this.password_textbox.fill(username) 
        // await expect(this.password_textbox).toHaveValue(password)
    }
    async click_login_button(){
        await this.login_button.click()
    }
    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click({"force":true})
    }
}