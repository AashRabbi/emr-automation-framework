
import { test, expect } from '@playwright/test';
import { UserManagementPage } from '../src/pages/UserManagementPage';
import { loginUser } from '../utils/helpers';

test.describe('UserManagement Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to UserManagement page', async ({ page }) => {
    const usermanagementPage = new UserManagementPage(page);
    await usermanagementPage.gotoUserManagement();
    await usermanagementPage.verifyUIElements();
  });

  test('should perform action on UserManagement', async ({ page }) => {
    const usermanagementPage = new UserManagementPage(page);
    await usermanagementPage.gotoUserManagement();
    await usermanagementPage.performAction({ value: 'test-value' });
    await usermanagementPage.verifyState('Action completed');
  });

  test('should perform complex action on UserManagement', async ({ page }) => {
    const usermanagementPage = new UserManagementPage(page);
    await usermanagementPage.gotoUserManagement();
    await usermanagementPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await usermanagementPage.verifyState('Complex action completed');
  });

  test('should handle UserManagement error case', async ({ page }) => {
    const usermanagementPage = new UserManagementPage(page);
    await usermanagementPage.gotoUserManagement();
    await usermanagementPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify UserManagement UI elements', async ({ page }) => {
    const usermanagementPage = new UserManagementPage(page);
    await usermanagementPage.gotoUserManagement();
    await usermanagementPage.verifyUIElements();
  });
});
