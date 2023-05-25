const { test, expect, chromium, webkit, firefox } = require('@playwright/test');
test('has title', async ({ page }) => {
  const browser = await webkit.launch()
  page = await browser.newPage()
  await page.goto('https://test-org.ichiba.net/vi/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);
  const username = 'mongtoria1@gmail.com'
  const password = 'Cr@zyloop1'
  const username_textbox = await page.locator('//*[@id="txt_email"]')
  await username_textbox.fill(username)
  await expect(username_textbox).toHaveValue(username)
  const password_textbox = await page.locator('//*[@id="input_password"]')
  await password_textbox.fill(password)
  await expect(password_textbox).toHaveValue(password)

  const login_button = await page.locator('//button[contains(text(),"Login")]')
  login_button.click()
  await expect(page.getByText(/Account Information/)).toHaveCount(1)
});