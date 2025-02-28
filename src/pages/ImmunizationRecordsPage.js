
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class ImmunizationRecordsPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#immunizationrecords-input',
    actionButton: '#immunizationrecords-action',
    status: '#immunizationrecords-status',
    header: '#immunizationrecords-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoImmunizationRecords() {
    await setupTestData(this.page, { module: 'immunizationrecords' });
    await this.page.goto('/immunizationrecords');
    await expect(this.page).toHaveURL(/immunizationrecords/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-immunizationrecords');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#immunizationrecords-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
