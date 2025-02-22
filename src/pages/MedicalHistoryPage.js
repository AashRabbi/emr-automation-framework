
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class MedicalHistoryPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#medicalhistory-input',
    actionButton: '#medicalhistory-action',
    status: '#medicalhistory-status',
    header: '#medicalhistory-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoMedicalHistory() {
    await setupTestData(this.page, { module: 'medicalhistory' });
    await this.page.goto('/medicalhistory');
    await expect(this.page).toHaveURL(/medicalhistory/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-medicalhistory');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#medicalhistory-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
