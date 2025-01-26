
import { test, expect } from '@playwright/test';
import { SettingsPage } from '../src/pages/SettingsPage';
import { loginUser } from '../utils/helpers';

test.describe('Settings Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Settings page', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.gotoSettings();
    await settingsPage.verifyUIElements();
  });

  test('should perform action on Settings', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.gotoSettings();
    await settingsPage.performAction({ value: 'test-value' });
    await settingsPage.verifyState('Action completed');
  });

  test('should perform complex action on Settings', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.gotoSettings();
    await settingsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await settingsPage.verifyState('Complex action completed');
  });

  test('should handle Settings error case', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.gotoSettings();
    await settingsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Settings UI elements', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.gotoSettings();
    await settingsPage.verifyUIElements();
  });
});
