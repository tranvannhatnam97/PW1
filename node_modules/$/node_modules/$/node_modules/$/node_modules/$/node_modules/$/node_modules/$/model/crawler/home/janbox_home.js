exports.JanboxHomePage = class JanboxHomePage{
    constructor(page, id){
        this.base_url = 'http://103.139.103.33:19000/'
        this.page = page
        this.category_list = []
    }
    async go_to_page(){
        await this.page.goto('http://103.139.103.33:19000')
        await this.page.waitForSelector('.widget__category')
        await this.page.waitForLoadState('networkidle') 
        // this.page.waitForTimeout(100)
    }
    async set_category_list(){
        var category_element = await this.page.locator('xpath=//ul[@class="widget__category"]/li')
        this.category_list_count = await category_element.count()
        for (var i = 0; i < this.category_list_count; i++){
            // await console.log(await category_element.nth(i).locator('//a').getAttribute('href'));
            await this.category_list.push(await category_element.nth(i))
        }
        await console.log(await this.category_list_count);
        // await console.log(await this.category_list[0].innerText());
    }
    ////widget__category
    
}