import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://apps-platform-qa-eus-001.azurewebsites.net/');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('raidemo.raitest@gmail.com');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Hello123!');
  await page.getByPlaceholder('Password').press('Enter');
  await page.waitForLoadState('load');  // waits for the load event to be fired
  await page.locator('#Checkbox').nth(0).click();
  await page.locator('#Checkbox').nth(1).click();
  await page.locator('#Checkbox').nth(2).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForLoadState('load');  // waits for the load event to be fired
  await page.locator('div').filter({ hasText: /^Tailored Promotion$/ }).click();
  await page.waitForTimeout(8000)  // waits for the load event to be fired
  await page.getByRole('button', { name: 'channel_new' }).click();
  await page.getByRole('button', { name: 'Select all' }).click();
  await page.getByRole('button', { name: 'chain_name_new' }).click();
  await page.getByRole('button', { name: 'Select all' }).click();
  await page.getByRole('button', { name: 'category_new' }).click();
  await page.getByRole('button', { name: 'Select all' }).click();
  await page.getByRole('button', { name: 'manufacturer_new' }).click();
  await page.getByRole('button', { name: 'Select all' }).click();
  await page.frameLocator('iframe[title="https\\:\\/\\/apps-dash-qa-eus-001\\.azurewebsites\\.net\\/hl\\/\\&cid\\=a122f66a-26fb-487c-8f6f-9f93605b08c4\\&mm\\=Mondelez\\&r_h1\\=all\\&r_d1\\=all\\&p_h1\\=all\\&p_h2\\=all"]').locator('#treemap div').filter({ hasText: 'Dark ChocolateMilk ChocolateCoconut ChocolateWhite ChocolateCrispy chocolateMond' }).first().click();
  await page.frameLocator('iframe[title="https\\:\\/\\/apps-dash-qa-eus-001\\.azurewebsites\\.net\\/hl\\/\\&cid\\=a122f66a-26fb-487c-8f6f-9f93605b08c4\\&mm\\=Mondelez\\&r_h1\\=all\\&r_d1\\=all\\&p_h1\\=all\\&p_h2\\=all"]').locator('g:nth-child(3) > .surface').click();
});