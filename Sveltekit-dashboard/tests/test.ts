import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Dimension2 6.7 Max 4.3 Min 5.7 Average').click();
	await page.getByRole('button').nth(1).click();
});
