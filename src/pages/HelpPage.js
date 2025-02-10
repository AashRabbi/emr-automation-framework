
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class HelpPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#help-input',
    actionButton: '#help-action',
    status: '#help-status',
    header: '#help-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHelp() {
    await setupTestData(this.page, { module: 'help' });
    await this.page.goto('/help');
    await expect(this.page).toHaveURL(/help/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-help');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#help-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
