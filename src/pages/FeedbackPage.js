
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class FeedbackPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#feedback-input',
    actionButton: '#feedback-action',
    status: '#feedback-status',
    header: '#feedback-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoFeedback() {
    await setupTestData(this.page, { module: 'feedback' });
    await this.page.goto('/feedback');
    await expect(this.page).toHaveURL(/feedback/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-feedback');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#feedback-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
