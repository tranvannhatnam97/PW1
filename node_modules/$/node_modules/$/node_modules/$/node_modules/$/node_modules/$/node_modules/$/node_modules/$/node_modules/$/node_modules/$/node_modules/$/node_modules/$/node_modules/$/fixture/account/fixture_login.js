const{test, expect} = require("@playwright/test")
import { LoginPage } from "$/model/account/login_page";
const req = require("$/tools/data-process/json_parse")
exports.expect = expect

exports.testcase = {
    // "TC_id": "TC001",
    // "input":{
    //     "username":"quynhdtb@ichiba.vn",
    //     "password":"Quynh123@"
    // },
    // "expect":{}
}

exports.test = test.extend({
    todoPage: async ({ page }, use) => {
        var loginInstance = new LoginPage(page)
        var default_testcase = exports.testcase
        var username = default_testcase['input']['username']
        var password = default_testcase['input']['password']
        await loginInstance.gotoLoginPage()
        await loginInstance.fill_username_textbox(username)
        await loginInstance.fill_password_textbox(password)
        await loginInstance.click_login_button()
        use(page)
    }
})