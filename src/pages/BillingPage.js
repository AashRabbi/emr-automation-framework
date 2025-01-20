
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class BillingPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#billing-input',
    actionButton: '#billing-action',
    status: '#billing-status',
    header: '#billing-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoBilling() {
    await setupTestData(this.page, { module: 'billing' });
    await this.page.goto('/billing');
    await expect(this.page).toHaveURL(/billing/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-billing');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#billing-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
