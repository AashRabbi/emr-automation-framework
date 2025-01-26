
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class SettingsPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#settings-input',
    actionButton: '#settings-action',
    status: '#settings-status',
    header: '#settings-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoSettings() {
    await setupTestData(this.page, { module: 'settings' });
    await this.page.goto('/settings');
    await expect(this.page).toHaveURL(/settings/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-settings');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#settings-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
