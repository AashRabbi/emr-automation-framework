
import { test, expect } from '@playwright/test';
import { InsuranceVerificationPage } from '../src/pages/InsuranceVerificationPage';
import { loginUser } from '../utils/helpers';

test.describe('InsuranceVerification Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to InsuranceVerification page', async ({ page }) => {
    const insuranceverificationPage = new InsuranceVerificationPage(page);
    await insuranceverificationPage.gotoInsuranceVerification();
    await insuranceverificationPage.verifyUIElements();
  });

  test('should perform action on InsuranceVerification', async ({ page }) => {
    const insuranceverificationPage = new InsuranceVerificationPage(page);
    await insuranceverificationPage.gotoInsuranceVerification();
    await insuranceverificationPage.performAction({ value: 'test-value' });
    await insuranceverificationPage.verifyState('Action completed');
  });

  test('should perform complex action on InsuranceVerification', async ({ page }) => {
    const insuranceverificationPage = new InsuranceVerificationPage(page);
    await insuranceverificationPage.gotoInsuranceVerification();
    await insuranceverificationPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await insuranceverificationPage.verifyState('Complex action completed');
  });

  test('should handle InsuranceVerification error case', async ({ page }) => {
    const insuranceverificationPage = new InsuranceVerificationPage(page);
    await insuranceverificationPage.gotoInsuranceVerification();
    await insuranceverificationPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify InsuranceVerification UI elements', async ({ page }) => {
    const insuranceverificationPage = new InsuranceVerificationPage(page);
    await insuranceverificationPage.gotoInsuranceVerification();
    await insuranceverificationPage.verifyUIElements();
  });
});
