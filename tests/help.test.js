
import { test, expect } from '@playwright/test';
import { HelpPage } from '../src/pages/HelpPage';
import { loginUser } from '../utils/helpers';

test.describe('Help Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Help page', async ({ page }) => {
    const helpPage = new HelpPage(page);
    await helpPage.gotoHelp();
    await helpPage.verifyUIElements();
  });

  test('should perform action on Help', async ({ page }) => {
    const helpPage = new HelpPage(page);
    await helpPage.gotoHelp();
    await helpPage.performAction({ value: 'test-value' });
    await helpPage.verifyState('Action completed');
  });

  test('should perform complex action on Help', async ({ page }) => {
    const helpPage = new HelpPage(page);
    await helpPage.gotoHelp();
    await helpPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await helpPage.verifyState('Complex action completed');
  });

  test('should handle Help error case', async ({ page }) => {
    const helpPage = new HelpPage(page);
    await helpPage.gotoHelp();
    await helpPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Help UI elements', async ({ page }) => {
    const helpPage = new HelpPage(page);
    await helpPage.gotoHelp();
    await helpPage.verifyUIElements();
  });
});
