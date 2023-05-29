// @ts-check
const { test } = require('@playwright/test');
import { LoginPage } from "$/model/default_login_model"
const req = require("$/tools/data-process/json_parse")

let users_data = req.read_json_from_file('./test-data/account-manager/login.json')["testcases"]
console.log(users_data);
test.describe("Login Test", async () => {

  await users_data.forEach(element=>{
    test(element['TC_id'], async({page})=>{
      await console.log(page);
      const loginInst = new LoginPage(page)
      await loginInst.gotoLoginPage()
      await loginInst.login(element['input']['username'], element['input']['password'])
      await loginInst.expect_login_success()
    })
  })

})


