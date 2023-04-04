import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Dimension2 6.7 Max 4.3 Min 5.7 Average').click();
	await page.getByRole('button').nth(1).click();
})
