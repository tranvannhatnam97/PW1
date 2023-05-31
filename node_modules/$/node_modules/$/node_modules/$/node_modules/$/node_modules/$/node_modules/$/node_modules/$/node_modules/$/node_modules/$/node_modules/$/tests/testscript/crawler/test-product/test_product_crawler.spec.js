const { test, expect } = require('@playwright/test');
const { YahooAuctionProductOriginPage } = require('$/model/crawler/yahooauction/product/origin');
const { YahooAuctionProductClonePage } = require('$/model/crawler/yahooauction/product/clone');
const json = require("$/tools/data-process/json_parse")

var data = json.read_json_from_file('test-data/crawler/product-detail/yahooauction.json')
console.log(data);
var testcases = data['testcases']
test.describe(data['description']['scenario'], async () => {
    testcases.forEach(testcase => {
        test(testcase['TC_id'], async ({ page }) => {
            var origin = new YahooAuctionProductOriginPage(page, testcase['input']['product_id'])
            var clone = new YahooAuctionProductClonePage(page, testcase['input']['product_id'])
            await origin.go_to_page()
            await console.log(origin.product_name)
            await clone.go_to_page()
            await console.log(clone.product_name)
            expect(origin.product_name).toEqual(clone.product_name)
        })
    })
})
