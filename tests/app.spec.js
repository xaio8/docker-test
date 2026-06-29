const { test, expect } = require('@playwright/test');

test.describe('Docker Testing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the page title', async ({ page }) => {
    await expect(page).toHaveTitle('Docker Testing Page');
  });

  test('should display the heading', async ({ page }) => {
    const heading = page.locator('h2');
    await expect(heading).toHaveText('Environment Test Connection');
  });

  test('should have a clickable button', async ({ page }) => {
    const button = page.locator('#testBtn');
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await expect(button).toHaveText('Click Me');
  });

  test('should change output text when button is clicked', async ({ page }) => {
    const button = page.locator('#testBtn');
    const output = page.locator('#output');

    // Initial state
    await expect(output).toHaveText('Waiting for click...');

    // Click the button
    await button.click();

    // Verify the text changed
    await expect(output).toHaveText('🚀 JavaScript is working perfectly!');
  });

  test('should change output color to success green when button is clicked', async ({ page }) => {
    const button = page.locator('#testBtn');
    const output = page.locator('#output');

    // Click the button
    await button.click();

    // Verify the color changed to success green
    const color = await output.evaluate((el) => getComputedStyle(el).color);
    expect(color).toBe('rgb(16, 185, 129)'); // #10b981
  });

  test('should log to console when button is clicked', async ({ page }) => {
    const button = page.locator('#testBtn');

    // Listen for console events
    const consoleMessages = [];
    page.on('console', (msg) => consoleMessages.push(msg.text()));

    // Click the button
    await button.click();

    // Verify console log was triggered
    expect(consoleMessages).toContain('Test log: Button was successfully clicked.');
  });
});