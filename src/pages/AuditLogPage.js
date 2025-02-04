
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class AuditLogPage {
  readonly page: Page;
  readonly locators = {
    mainInput: '#auditlog-input',
    actionButton: '#auditlog-action',
    status: '#auditlog-status',
    header: '#auditlog-header'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoAuditLog() {
    await setupTestData(this.page, { module: 'auditlog' });
    await this.page.goto('/auditlog');
    await expect(this.page).toHaveURL(/auditlog/);
  }

  async performAction(data = {}) {
    await this.page.fill(this.locators.mainInput, data.value || 'test-auditlog');
    await this.page.click(this.locators.actionButton);
    await expect(this.page.locator(this.locators.status)).toHaveText('Action completed');
  }

  async verifyUIElements() {
    await expect(this.page.locator(this.locators.header)).toBeVisible();
    await expect(this.page.locator(this.locators.mainInput)).toBeEnabled();
  }

  async performComplexAction(data = {}) {
    await this.performAction(data);
    await this.page.selectOption('#auditlog-select', data.option || 'option1');
    await expect(this.page.locator(this.locators.status)).toHaveText('Complex action completed');
  }

  async verifyState(expectedState) {
    await expect(this.page.locator(this.locators.status)).toHaveText(expectedState);
  }
}
