
import { test, expect } from '@playwright/test';
import { MedicalHistoryPage } from '../src/pages/MedicalHistoryPage';
import { loginUser } from '../utils/helpers';

test.describe('MedicalHistory Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to MedicalHistory page', async ({ page }) => {
    const medicalhistoryPage = new MedicalHistoryPage(page);
    await medicalhistoryPage.gotoMedicalHistory();
    await medicalhistoryPage.verifyUIElements();
  });

  test('should perform action on MedicalHistory', async ({ page }) => {
    const medicalhistoryPage = new MedicalHistoryPage(page);
    await medicalhistoryPage.gotoMedicalHistory();
    await medicalhistoryPage.performAction({ value: 'test-value' });
    await medicalhistoryPage.verifyState('Action completed');
  });

  test('should perform complex action on MedicalHistory', async ({ page }) => {
    const medicalhistoryPage = new MedicalHistoryPage(page);
    await medicalhistoryPage.gotoMedicalHistory();
    await medicalhistoryPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await medicalhistoryPage.verifyState('Complex action completed');
  });

  test('should handle MedicalHistory error case', async ({ page }) => {
    const medicalhistoryPage = new MedicalHistoryPage(page);
    await medicalhistoryPage.gotoMedicalHistory();
    await medicalhistoryPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify MedicalHistory UI elements', async ({ page }) => {
    const medicalhistoryPage = new MedicalHistoryPage(page);
    await medicalhistoryPage.gotoMedicalHistory();
    await medicalhistoryPage.verifyUIElements();
  });
});
