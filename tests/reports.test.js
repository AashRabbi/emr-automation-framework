
import { test, expect } from '@playwright/test';
import { ReportsPage } from '../src/pages/ReportsPage';
import { loginUser } from '../utils/helpers';

test.describe('Reports Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Reports page', async ({ page }) => {
    const reportsPage = new ReportsPage(page);
    await reportsPage.gotoReports();
    await reportsPage.verifyUIElements();
  });

  test('should perform action on Reports', async ({ page }) => {
    const reportsPage = new ReportsPage(page);
    await reportsPage.gotoReports();
    await reportsPage.performAction({ value: 'test-value' });
    await reportsPage.verifyState('Action completed');
  });

  test('should perform complex action on Reports', async ({ page }) => {
    const reportsPage = new ReportsPage(page);
    await reportsPage.gotoReports();
    await reportsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await reportsPage.verifyState('Complex action completed');
  });

  test('should handle Reports error case', async ({ page }) => {
    const reportsPage = new ReportsPage(page);
    await reportsPage.gotoReports();
    await reportsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Reports UI elements', async ({ page }) => {
    const reportsPage = new ReportsPage(page);
    await reportsPage.gotoReports();
    await reportsPage.verifyUIElements();
  });
});
