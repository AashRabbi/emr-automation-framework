
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class PatientDetailsPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#patientdetails-input',
    actionButton: '#patientdetails-action',
    status: '#patientdetails-status',
    header: '#patientdetails-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoPatientDetails() {
    await setupTestData(this.page, { module: 'patientdetails' });
    await this.page.goto('/patientdetails');
    await expect(this.page).toHaveURL(/patientdetails/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-patientdetails');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#patientdetails-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
