
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class LabResultsPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#labresults-input',
    actionButton: '#labresults-action',
    status: '#labresults-status',
    header: '#labresults-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLabResults() {
    await setupTestData(this.page, { module: 'labresults' });
    await this.page.goto('/labresults');
    await expect(this.page).toHaveURL(/labresults/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-labresults');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#labresults-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
