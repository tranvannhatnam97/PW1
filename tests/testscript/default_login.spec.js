// @ts-check
const { test, expect } = require('@playwright/test');
import { LoginPage } from "$/model/default_login_model"
const req = require("$/tools/data-process/json_parse")


test.describe("Login Test", (users_data) => {
  test.beforeEach(async () => {
    // let users_data = req.read_json_from_file('./test-data/account-manager/login.json')
    users_data = await req.read_json_from_file('./test-data/account-manager/login.json')['data']
    await console.log(users_data)
  })

  // for (const dt of ){
  //   test(dt['TC_id'], async ({ page }) => {
  //         await page.goto('https://test-org.ichiba.net/vi/')
  //       })
  // }

  // users_data.foreach(element => {
  //   test(element['TC_id'], async ({ page }) => {
  //     await page.goto('https://test-org.ichiba.net/vi/')
  //   })
  // });
  // for (const dt of outer){
  //   test(outer['TC_id'], async({page})=>{
  //     await page.goto('https://test-org.ichiba.net/vi/')
  //   })
  // }

})
  // test(':Login by default ', async ({ page }) => {
  //   const loginInst = new LoginPage(page)
  //   await loginInst.gotoLoginPage()
  //   await loginInst.login(data.test_data.username, data.test_data.password)
  //   await loginInst.expect_login_success()
  // })


