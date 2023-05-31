const { test, chromium, expect, Page } = require('@playwright/test');
const json = require("$/tools/data-process/json_parse");
const { JanboxCategoryPage } = require('$/model/crawler/category/janbox_category');
const { JanboxHomePage } = require('$/model/crawler/home/janbox_home');

test.describe("Test e2e crawler", async () => {
    let page;
    let homepage;
    test.beforeAll(async ({ browser, homepage }) => {
        page = await browser.newPage()
        homepage = new JanboxHomePage(page)
        await homepage.go_to_page()
        await homepage.set_category_list()
    })
    // await console.log(homepage.category_list_count);
    test('Test category', async ({ page }) => {
        // for (var category of homepage.category_list){
        //     await console.log('+');
        //     await console.log(await category.locator('//a').getAttribute('href'))
        //     await category.click()
        // }
    })


})