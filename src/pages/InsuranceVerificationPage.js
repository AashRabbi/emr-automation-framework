
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class InsuranceVerificationPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#insuranceverification-input',
    actionButton: '#insuranceverification-action',
    status: '#insuranceverification-status',
    header: '#insuranceverification-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoInsuranceVerification() {
    await setupTestData(this.page, { module: 'insuranceverification' });
    await this.page.goto('/insuranceverification');
    await expect(this.page).toHaveURL(/insuranceverification/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-insuranceverification');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#insuranceverification-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
