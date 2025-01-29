
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class UserManagementPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#usermanagement-input',
    actionButton: '#usermanagement-action',
    status: '#usermanagement-status',
    header: '#usermanagement-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoUserManagement() {
    await setupTestData(this.page, { module: 'usermanagement' });
    await this.page.goto('/usermanagement');
    await expect(this.page).toHaveURL(/usermanagement/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-usermanagement');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#usermanagement-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
