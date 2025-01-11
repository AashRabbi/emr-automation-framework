
import { test, expect } from '@playwright/test';
import { AppointmentSchedulingPage } from '../src/pages/AppointmentSchedulingPage';
import { loginUser } from '../utils/helpers';

test.describe('AppointmentScheduling Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to AppointmentScheduling page', async ({ page }) => {
    const appointmentschedulingPage = new AppointmentSchedulingPage(page);
    await appointmentschedulingPage.gotoAppointmentScheduling();
    await appointmentschedulingPage.verifyUIElements();
  });

  test('should perform action on AppointmentScheduling', async ({ page }) => {
    const appointmentschedulingPage = new AppointmentSchedulingPage(page);
    await appointmentschedulingPage.gotoAppointmentScheduling();
    await appointmentschedulingPage.performAction({ value: 'test-value' });
    await appointmentschedulingPage.verifyState('Action completed');
  });

  test('should perform complex action on AppointmentScheduling', async ({ page }) => {
    const appointmentschedulingPage = new AppointmentSchedulingPage(page);
    await appointmentschedulingPage.gotoAppointmentScheduling();
    await appointmentschedulingPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await appointmentschedulingPage.verifyState('Complex action completed');
  });

  test('should handle AppointmentScheduling error case', async ({ page }) => {
    const appointmentschedulingPage = new AppointmentSchedulingPage(page);
    await appointmentschedulingPage.gotoAppointmentScheduling();
    await appointmentschedulingPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify AppointmentScheduling UI elements', async ({ page }) => {
    const appointmentschedulingPage = new AppointmentSchedulingPage(page);
    await appointmentschedulingPage.gotoAppointmentScheduling();
    await appointmentschedulingPage.verifyUIElements();
  });
});
