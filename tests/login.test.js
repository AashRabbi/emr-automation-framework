
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { loginUser } from '../utils/helpers';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.verifyUIElements();
  });

  test('should perform action on Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.performAction({ value: 'test-value' });
    await loginPage.verifyState('Action completed');
  });

  test('should perform complex action on Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await loginPage.verifyState('Complex action completed');
  });

  test('should handle Login error case', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Login UI elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.verifyUIElements();
  });
});
