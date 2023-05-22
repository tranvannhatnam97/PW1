// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async({page})=>{
    await page.goto('https://test-org.ichiba.net/vi/')//.catch((err)=>console.log('b.failed'))
    await expect(page).toHaveTitle('Login')
    await page.waitForTimeout(3000)
    await expect(page.getByRole('button', {'name': /Login/})).toHaveCount(1)
});
test('TC001:Login by default ', async ({ page }) => {
  await test.step('TC001_TS001:login!', async()=>{
    await page.locator('//*[@id="txt_email"]').fill('quynhdtb@ichiba.vn')
    await page.locator('//*[@id="input_password"]').fill('Quynh123@')
    await page.getByRole('button', {'name': /Login/}).click()
    await page.waitForTimeout(3000)
    await expect(page.getByText(/Account Information/)).toHaveCount(1)
  })
});
test('TC002:Login by facebook', async ({ page }) => {
  await test.step('TC002_TS001:login!', async()=>{
    await page.locator('.social_item_facebook').click()
    await page.locator('//input[@id="email"]').fill('00000000')
    await page.locator('//input[@id="pass"]').fill('aaaaaaaaaaa')
    await page.locator('//button[@id="loginbutton"]').click()
    await expect(page.locator('//span[contains(text(),"OK")]')).toHaveCount(1)
  })
});

// test('TC003:Login by Gmail', async({page})=>{
//   await test.step('TC003_TS001:login!', async()=>{
//     await.page.locator('.')
//   })
// })



