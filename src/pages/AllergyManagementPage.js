
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class AllergyManagementPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#allergymanagement-input',
    actionButton: '#allergymanagement-action',
    status: '#allergymanagement-status',
    header: '#allergymanagement-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoAllergyManagement() {
    await setupTestData(this.page, { module: 'allergymanagement' });
    await this.page.goto('/allergymanagement');
    await expect(this.page).toHaveURL(/allergymanagement/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-allergymanagement');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#allergymanagement-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
