const { test, expect } = require('@playwright/test');
exports.YahooAuctionCategoryPage = class YahooAuctionCategoryPage{
    constructor(page){
        this.page = page
        this.username_textbox = this.page.locator('//*[@id="txt_email"]')
        this.password_textbox = this.page.locator('//*[@id="input_password"]')
        this.login_button = this.page.locator('//button[contains(text(),"Login")]')
    }
    
}