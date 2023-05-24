// @ts-check
const { test, expect } = require('@playwright/test');
import { LoginPage }from "../../model/default_login_page"
import { data} from "../data/default_login_data"


data.forEach(data=>{
  test(data.TC_id + ':Login by default ', async ({ page }) => {
    const loginInst = new LoginPage(page)
    await loginInst.gotoLoginPage()
    await loginInst.page.waitForLoadState('domcontentloaded')
    await loginInst.login(data.test_data.username, data.test_data.password)
    await loginInst.expect_login_success()
  });
})


