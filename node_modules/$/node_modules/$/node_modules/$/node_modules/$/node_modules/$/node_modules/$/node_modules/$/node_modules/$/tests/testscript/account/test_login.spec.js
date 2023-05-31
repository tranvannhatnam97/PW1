import { LoginPage } from "$/model/account/login_page";
// const { test, expect } = require('@playwright/test');
const { test, expect, testcase } = require('$/fixture/account/fixture_login');
const json = require("$/tools/data-process/json_parse")


/****using Fluant page object model****/
var data = json.read_json_from_file('test-data/account-manager/login.json')
console.log(data);
var testcases = data['testcases']
test.describe(data['description']['scenario'], async () => {
    testcases.forEach(testcase => {
        test(testcase['TC_id'], async ({ page }) => {
            var loginInstance = new LoginPage(page)
            await console.log(loginInstance.username_textbox.prototype)
            var username = testcase['input']['username']
            console.log(username);
            var password = testcase['input']['password']
            await loginInstance.gotoLoginPage()
            await loginInstance.fill_username_textbox(username)
            await loginInstance.fill_password_textbox(password)
            await loginInstance.click_login_button()
            await expect(loginInstance.page.getByText(/Account Information/)).toHaveCount(1)
        })
        // await
    });
})
/*** ***/


/****using fixture ****/
// var data = json.read_json_from_file('test-data/account-manager/login.json')
// var testcases = data['testcases']
// test.describe.serial('group', async () => {
//     testcases.forEach(element => {
//         testcase['TC_id'] = element['TC_id']
//         testcase['input'] = element['input']
//         testcase['expect'] = element['expect']
//         // testcase = element
//         console.log(testcase);
//         test(testcase['TC_id'], async ({ todoPage }) => {
//             await expect(todoPage.getByText(/Account Information/)).toHaveCount(1)
//         })
//     })
// })

// test('haizz', async ({ todoPage }) => {
//     await expect(todoPage.getByText(/Account Information/)).toHaveCount(1)
// })
/*** ***/