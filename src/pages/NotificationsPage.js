
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class NotificationsPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#notifications-input',
    actionButton: '#notifications-action',
    status: '#notifications-status',
    header: '#notifications-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoNotifications() {
    await setupTestData(this.page, { module: 'notifications' });
    await this.page.goto('/notifications');
    await expect(this.page).toHaveURL(/notifications/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-notifications');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#notifications-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
