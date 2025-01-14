
import { test, expect } from '@playwright/test';
import { PrescriptionManagementPage } from '../src/pages/PrescriptionManagementPage';
import { loginUser } from '../utils/helpers';

test.describe('PrescriptionManagement Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to PrescriptionManagement page', async ({ page }) => {
    const prescriptionmanagementPage = new PrescriptionManagementPage(page);
    await prescriptionmanagementPage.gotoPrescriptionManagement();
    await prescriptionmanagementPage.verifyUIElements();
  });

  test('should perform action on PrescriptionManagement', async ({ page }) => {
    const prescriptionmanagementPage = new PrescriptionManagementPage(page);
    await prescriptionmanagementPage.gotoPrescriptionManagement();
    await prescriptionmanagementPage.performAction({ value: 'test-value' });
    await prescriptionmanagementPage.verifyState('Action completed');
  });

  test('should perform complex action on PrescriptionManagement', async ({ page }) => {
    const prescriptionmanagementPage = new PrescriptionManagementPage(page);
    await prescriptionmanagementPage.gotoPrescriptionManagement();
    await prescriptionmanagementPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await prescriptionmanagementPage.verifyState('Complex action completed');
  });

  test('should handle PrescriptionManagement error case', async ({ page }) => {
    const prescriptionmanagementPage = new PrescriptionManagementPage(page);
    await prescriptionmanagementPage.gotoPrescriptionManagement();
    await prescriptionmanagementPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify PrescriptionManagement UI elements', async ({ page }) => {
    const prescriptionmanagementPage = new PrescriptionManagementPage(page);
    await prescriptionmanagementPage.gotoPrescriptionManagement();
    await prescriptionmanagementPage.verifyUIElements();
  });
});
