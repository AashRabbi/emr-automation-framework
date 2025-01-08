
import { test, expect } from '@playwright/test';
import { PatientDetailsPage } from '../src/pages/PatientDetailsPage';
import { loginUser } from '../utils/helpers';

test.describe('PatientDetails Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to PatientDetails page', async ({ page }) => {
    const patientdetailsPage = new PatientDetailsPage(page);
    await patientdetailsPage.gotoPatientDetails();
    await patientdetailsPage.verifyUIElements();
  });

  test('should perform action on PatientDetails', async ({ page }) => {
    const patientdetailsPage = new PatientDetailsPage(page);
    await patientdetailsPage.gotoPatientDetails();
    await patientdetailsPage.performAction({ value: 'test-value' });
    await patientdetailsPage.verifyState('Action completed');
  });

  test('should perform complex action on PatientDetails', async ({ page }) => {
    const patientdetailsPage = new PatientDetailsPage(page);
    await patientdetailsPage.gotoPatientDetails();
    await patientdetailsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await patientdetailsPage.verifyState('Complex action completed');
  });

  test('should handle PatientDetails error case', async ({ page }) => {
    const patientdetailsPage = new PatientDetailsPage(page);
    await patientdetailsPage.gotoPatientDetails();
    await patientdetailsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify PatientDetails UI elements', async ({ page }) => {
    const patientdetailsPage = new PatientDetailsPage(page);
    await patientdetailsPage.gotoPatientDetails();
    await patientdetailsPage.verifyUIElements();
  });
});
