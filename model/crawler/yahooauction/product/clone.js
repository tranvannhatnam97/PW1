exports.YahooAuctionProductClonePage = class YahooAuctionProductOriginPage{
    constructor(page, id){
        this.page = page
        this.product_id = id
        this.url = this.page.url()
        // this.product_name_text = this.page.locator('.ProductTitle__text')
        // this.current_price_text = this.page.locator('xpath=//dd[@class="Price__value"] >> nth=0')
        // this.current_price_text = this.page.locator('.Price__value').nth(0)
    }
    async go_to_page(){
        await this.page.goto('http://103.139.103.33:19000/shop-single.html?id=' + this.product_id)
        // await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForTimeout(5000)
        // await this.page.mouse.click(1,1)
        // await this.close_popup()
        await this.get_product_name()
        await this.get_current_price()
        
    }
    async close_popup(){
        // await this.page.locator('#js-close').click()
    }
    async get_product_name(){
        this.product_name_text = this.page.locator('.product-details')
        this.product_name = (await this.product_name_text.innerText()).valueOf()
    }
    async get_current_price(){
        // this.current_price_text = this.page.locator('xpath=//div[@class="price"]/span[@class="current"] >> nth=0')
        // this.current_price = (await this.current_price_text.innerText()).valueOf()
    }
    
    
}