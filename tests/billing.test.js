
import { test, expect } from '@playwright/test';
import { BillingPage } from '../src/pages/BillingPage';
import { loginUser } from '../utils/helpers';

test.describe('Billing Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Billing page', async ({ page }) => {
    const billingPage = new BillingPage(page);
    await billingPage.gotoBilling();
    await billingPage.verifyUIElements();
  });

  test('should perform action on Billing', async ({ page }) => {
    const billingPage = new BillingPage(page);
    await billingPage.gotoBilling();
    await billingPage.performAction({ value: 'test-value' });
    await billingPage.verifyState('Action completed');
  });

  test('should perform complex action on Billing', async ({ page }) => {
    const billingPage = new BillingPage(page);
    await billingPage.gotoBilling();
    await billingPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await billingPage.verifyState('Complex action completed');
  });

  test('should handle Billing error case', async ({ page }) => {
    const billingPage = new BillingPage(page);
    await billingPage.gotoBilling();
    await billingPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Billing UI elements', async ({ page }) => {
    const billingPage = new BillingPage(page);
    await billingPage.gotoBilling();
    await billingPage.verifyUIElements();
  });
});
