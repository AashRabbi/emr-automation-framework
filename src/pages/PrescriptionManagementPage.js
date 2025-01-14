
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class PrescriptionManagementPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#prescriptionmanagement-input',
    actionButton: '#prescriptionmanagement-action',
    status: '#prescriptionmanagement-status',
    header: '#prescriptionmanagement-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoPrescriptionManagement() {
    await setupTestData(this.page, { module: 'prescriptionmanagement' });
    await this.page.goto('/prescriptionmanagement');
    await expect(this.page).toHaveURL(/prescriptionmanagement/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-prescriptionmanagement');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#prescriptionmanagement-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
