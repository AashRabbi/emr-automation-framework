
import { test, expect } from '@playwright/test';
import { AnalyticsPage } from '../src/pages/AnalyticsPage';
import { loginUser } from '../utils/helpers';

test.describe('Analytics Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Analytics page', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.gotoAnalytics();
    await analyticsPage.verifyUIElements();
  });

  test('should perform action on Analytics', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.gotoAnalytics();
    await analyticsPage.performAction({ value: 'test-value' });
    await analyticsPage.verifyState('Action completed');
  });

  test('should perform complex action on Analytics', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.gotoAnalytics();
    await analyticsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await analyticsPage.verifyState('Complex action completed');
  });

  test('should handle Analytics error case', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.gotoAnalytics();
    await analyticsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Analytics UI elements', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.gotoAnalytics();
    await analyticsPage.verifyUIElements();
  });
});
