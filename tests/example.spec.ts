// tests/example.spec.ts
import { test, expect, Page } from '@playwright/test';

const APP_URL = 'https://wannapa368.github.io/wannapachattong368/';

/** ---------- Bootstrapping ---------- **/
const gotoApp = async (page: Page) => {
  await page.goto(APP_URL);
  await expect(page.locator('#q-app')).toBeVisible(); // Quasar root
  await expect(page.locator('form')).toBeVisible();   // Form ต้องโหลด
};

/** ---------- Tests ---------- **/
test.describe('Quasar Form Validation on GitHub Pages', () => {

  test('should validate name input', async ({ page }) => {
    await gotoApp(page);
    const nameInput = page.locator('input[name="name"]');
    await nameInput.fill('');
    await page.locator('form').evaluate(form => form.dispatchEvent(new Event('submit')));
    await expect(page.locator('.q-field__messages')).toContainText(/Name is required/i);

    await nameInput.fill('John Doe');
    await page.locator('form').evaluate(form => form.dispatchEvent(new Event('submit')));
    await expect(page.locator('.q-field__messages')).not.toContainText(/Name is required/i);
  });

  test('should validate age input', async ({ page }) => {
    await gotoApp(page);
    const ageInput = page.locator('input[name="age"]');
    await ageInput.fill('abc');
    await page.locator('form').evaluate(form => form.dispatchEvent(new Event('submit')));
    await expect(page.locator('.q-field__messages')).toContainText(/Age must be a number/i);

    await ageInput.fill('25');
    await page.locator('form').evaluate(form => form.dispatchEvent(new Event('submit')));
    await expect(page.locator('.q-field__messages')).not.toContainText(/Age must be a number/i);
  });

});
