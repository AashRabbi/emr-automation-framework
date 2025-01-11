
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class AppointmentSchedulingPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#appointmentscheduling-input',
    actionButton: '#appointmentscheduling-action',
    status: '#appointmentscheduling-status',
    header: '#appointmentscheduling-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoAppointmentScheduling() {
    await setupTestData(this.page, { module: 'appointmentscheduling' });
    await this.page.goto('/appointmentscheduling');
    await expect(this.page).toHaveURL(/appointmentscheduling/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-appointmentscheduling');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#appointmentscheduling-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
