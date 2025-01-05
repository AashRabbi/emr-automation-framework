
import { test, expect } from '@playwright/test';
import { PatientSearchPage } from '../src/pages/PatientSearchPage';
import { loginUser } from '../utils/helpers';

test.describe('PatientSearch Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to PatientSearch page', async ({ page }) => {
    const patientsearchPage = new PatientSearchPage(page);
    await patientsearchPage.gotoPatientSearch();
    await patientsearchPage.verifyUIElements();
  });

  test('should perform action on PatientSearch', async ({ page }) => {
    const patientsearchPage = new PatientSearchPage(page);
    await patientsearchPage.gotoPatientSearch();
    await patientsearchPage.performAction({ value: 'test-value' });
    await patientsearchPage.verifyState('Action completed');
  });

  test('should perform complex action on PatientSearch', async ({ page }) => {
    const patientsearchPage = new PatientSearchPage(page);
    await patientsearchPage.gotoPatientSearch();
    await patientsearchPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await patientsearchPage.verifyState('Complex action completed');
  });

  test('should handle PatientSearch error case', async ({ page }) => {
    const patientsearchPage = new PatientSearchPage(page);
    await patientsearchPage.gotoPatientSearch();
    await patientsearchPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify PatientSearch UI elements', async ({ page }) => {
    const patientsearchPage = new PatientSearchPage(page);
    await patientsearchPage.gotoPatientSearch();
    await patientsearchPage.verifyUIElements();
  });
});
