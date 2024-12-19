import { test, expect } from '@playwright/test';

// Test 1: Check if a button with text "add" exists
test('AppHasAddButton', async ({ page }) => {
  await page.goto('http://44.202.219.42:80'); 

  // Locate the button with text "add"
  const addButton = await page.locator('button', { hasText: 'add' });
  await expect(addButton).toBeVisible();
});

// Test 2: Check subtraction functionality
test('AppCanSubtract', async ({ page }) => {
  await page.goto('http://44.202.219.42:80');

  // Simulate entering numbers and performing subtraction
  await page.fill('input[name="number1"]', '7'); // Replace selector if needed
  await page.fill('input[name="number2"]', '3');
  await page.click('#subtract');

  // Verify the result
  const result = await page.locator('#result');
  await expect(result).toHaveText('The result is: 4');
});
