const { test, expect } = require('@playwright/test');
const { YahooAuctionProductOriginPage } = require('$/model/crawler/yahooauction/product/origin');
const { YahooAuctionProductClonePage } = require('$/model/crawler/yahooauction/product/clone');

test('First test', async({page})=>{
    var origin =new YahooAuctionProductOriginPage(page, "l1093567329")
    var clone = new YahooAuctionProductClonePage(page, "l1093567329")
    await origin.go_to_page()
    await console.log(origin.product_name)
    await clone.go_to_page()
    await console.log(clone.product_name)

})