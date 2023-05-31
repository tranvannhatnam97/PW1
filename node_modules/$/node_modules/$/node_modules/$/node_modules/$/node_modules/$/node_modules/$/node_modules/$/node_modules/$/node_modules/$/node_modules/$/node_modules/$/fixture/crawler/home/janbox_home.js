const{test, expect} = require("@playwright/test")
const { JanboxHomePage } = require('$/model/crawler/home/janbox_home');

exports.test = test.extend({
    homePage: async ({page}, use)=>{
        var janboxHomePage = new JanboxHomePage(page)
        await janboxHomePage.go_to_page()
        await janboxHomePage.set_category_list()
        use(page)
    }
})