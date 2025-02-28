
import { test, expect } from '@playwright/test';
import { ImmunizationRecordsPage } from '../src/pages/ImmunizationRecordsPage';
import { loginUser } from '../utils/helpers';

test.describe('ImmunizationRecords Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to ImmunizationRecords page', async ({ page }) => {
    const immunizationrecordsPage = new ImmunizationRecordsPage(page);
    await immunizationrecordsPage.gotoImmunizationRecords();
    await immunizationrecordsPage.verifyUIElements();
  });

  test('should perform action on ImmunizationRecords', async ({ page }) => {
    const immunizationrecordsPage = new ImmunizationRecordsPage(page);
    await immunizationrecordsPage.gotoImmunizationRecords();
    await immunizationrecordsPage.performAction({ value: 'test-value' });
    await immunizationrecordsPage.verifyState('Action completed');
  });

  test('should perform complex action on ImmunizationRecords', async ({ page }) => {
    const immunizationrecordsPage = new ImmunizationRecordsPage(page);
    await immunizationrecordsPage.gotoImmunizationRecords();
    await immunizationrecordsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await immunizationrecordsPage.verifyState('Complex action completed');
  });

  test('should handle ImmunizationRecords error case', async ({ page }) => {
    const immunizationrecordsPage = new ImmunizationRecordsPage(page);
    await immunizationrecordsPage.gotoImmunizationRecords();
    await immunizationrecordsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify ImmunizationRecords UI elements', async ({ page }) => {
    const immunizationrecordsPage = new ImmunizationRecordsPage(page);
    await immunizationrecordsPage.gotoImmunizationRecords();
    await immunizationrecordsPage.verifyUIElements();
  });
});
