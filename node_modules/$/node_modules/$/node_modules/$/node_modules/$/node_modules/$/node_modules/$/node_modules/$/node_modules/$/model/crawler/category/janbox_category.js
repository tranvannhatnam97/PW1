exports.JanboxCategoryPage = class JanboxCategoryPage{
    constructor(page, id){
        this.page = page
        this.id = id
        this.url = 'http://103.139.103.33:19000/index.html?category=' + this.id
        this.product_list = []
    }
    async set_url(){
        this.url = this.page.url()
    }
    async set_id(){
        this.id = this.url.replace('http://103.139.103.33:19000/index.html?category=', '')
    }
    async go_to_page(id){
        await this.page.goto(this.url)
        // await this.page.waitForSelector('.product')
        // await this.page.waitForLoadState('domcontentloaded')
    }
    async set_data(){
        
        await this.page.waitForSelector('.product')
        await this.page.waitForLoadState('domcontentloaded')
        await this.set_url()
        await this.set_id()
        await this.set_product_list()
    }
    async set_product_list(){
        // var product_list_element = this.page.locator('.products')
        var products_element = await this.page.locator('.product')
        this.product_list_count = await products_element.count()
        for (var i = 0; i < this.product_list_count; i++){
            this.product_list.push(await products_element.nth(i))
        }
    }
}