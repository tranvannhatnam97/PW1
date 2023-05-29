import { LoginPage } from "$/model/account/login_page";
const { test, expect } = require('@playwright/test');
const req = require("$/tools/data-process/json_parse")

// class LoginTest{
//     constructor(page){
//         this.page = page
//         this.loginInst = LoginPage(page)
//     }
//     async test_login(){

//     } 
// }
var JSON_PATH = './test-data/account-manager/login.json'
let data = req.read_json_from_file(JSON_PATH)
console.log(data);
let testcase = data['testcases'][0]


const myTest = test.extend({
    todo: async ({ page }, use) => {
        var loginInstance = new LoginPage(page)
        var username = testcase['input']['username']
        var password = testcase['input']['password']
        await loginInstance.gotoLoginPage()
        await loginInstance.fill_username_textbox(username)
        await console.log(loginInstance.username_textbox.prototype)
        await loginInstance.fill_password_textbox(password)
        await loginInstance.click_login_button()
        use(loginInstance.page)
    }
})

myTest("TC_id", async ({ todo })=>{
    await expect(todo.getByText(/Account Information/)).toHaveCount(1)
})














// test.describe(data['scenario'], async () => {
//     testcases.forEach(testcase => {
//         test(testcase['TC_id'], async ({ page }) => {
//             var loginInstance = new LoginPage(page)
//             await console.log(loginInstance.username_textbox.prototype)
//             var username = testcase['input']['username']
//             console.log(username);
//             var password = testcase['input']['password']
//             await loginInstance.gotoLoginPage()
//             await loginInstance.fill_username_textbox(username)
//             await console.log(loginInstance.username_textbox.prototype)
//             await loginInstance.fill_password_textbox(password)
//             await loginInstance.click_login_button()
//             await expect(loginInstance.page.getByText(/Account Information/)).toHaveCount(1)
//         })
//         // await
//     });
// })



