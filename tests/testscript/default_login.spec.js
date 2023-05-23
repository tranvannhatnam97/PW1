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
    // await loginInst.page.waitForLoadState('domcontentloaded')
    await loginInst.page.waitForNavigation({url: 'https://test-org.ichiba.net/vi/'})
    await loginInst.expect_login_success()
    // await loginInst.page.waitForTimeout(3000)
    // await expect(loginInst.page.getByText(/Account Information/)).toHaveCount(1)
  });
})


