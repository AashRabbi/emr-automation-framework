
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class AnalyticsPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#analytics-input',
    actionButton: '#analytics-action',
    status: '#analytics-status',
    header: '#analytics-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoAnalytics() {
    await setupTestData(this.page, { module: 'analytics' });
    await this.page.goto('/analytics');
    await expect(this.page).toHaveURL(/analytics/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-analytics');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#analytics-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
