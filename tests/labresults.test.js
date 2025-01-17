
import { test, expect } from '@playwright/test';
import { LabResultsPage } from '../src/pages/LabResultsPage';
import { loginUser } from '../utils/helpers';

test.describe('LabResults Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to LabResults page', async ({ page }) => {
    const labresultsPage = new LabResultsPage(page);
    await labresultsPage.gotoLabResults();
    await labresultsPage.verifyUIElements();
  });

  test('should perform action on LabResults', async ({ page }) => {
    const labresultsPage = new LabResultsPage(page);
    await labresultsPage.gotoLabResults();
    await labresultsPage.performAction({ value: 'test-value' });
    await labresultsPage.verifyState('Action completed');
  });

  test('should perform complex action on LabResults', async ({ page }) => {
    const labresultsPage = new LabResultsPage(page);
    await labresultsPage.gotoLabResults();
    await labresultsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await labresultsPage.verifyState('Complex action completed');
  });

  test('should handle LabResults error case', async ({ page }) => {
    const labresultsPage = new LabResultsPage(page);
    await labresultsPage.gotoLabResults();
    await labresultsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify LabResults UI elements', async ({ page }) => {
    const labresultsPage = new LabResultsPage(page);
    await labresultsPage.gotoLabResults();
    await labresultsPage.verifyUIElements();
  });
});
