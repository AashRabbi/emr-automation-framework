
import { test, expect } from '@playwright/test';
import { RoleManagementPage } from '../src/pages/RoleManagementPage';
import { loginUser } from '../utils/helpers';

test.describe('RoleManagement Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to RoleManagement page', async ({ page }) => {
    const rolemanagementPage = new RoleManagementPage(page);
    await rolemanagementPage.gotoRoleManagement();
    await rolemanagementPage.verifyUIElements();
  });

  test('should perform action on RoleManagement', async ({ page }) => {
    const rolemanagementPage = new RoleManagementPage(page);
    await rolemanagementPage.gotoRoleManagement();
    await rolemanagementPage.performAction({ value: 'test-value' });
    await rolemanagementPage.verifyState('Action completed');
  });

  test('should perform complex action on RoleManagement', async ({ page }) => {
    const rolemanagementPage = new RoleManagementPage(page);
    await rolemanagementPage.gotoRoleManagement();
    await rolemanagementPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await rolemanagementPage.verifyState('Complex action completed');
  });

  test('should handle RoleManagement error case', async ({ page }) => {
    const rolemanagementPage = new RoleManagementPage(page);
    await rolemanagementPage.gotoRoleManagement();
    await rolemanagementPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify RoleManagement UI elements', async ({ page }) => {
    const rolemanagementPage = new RoleManagementPage(page);
    await rolemanagementPage.gotoRoleManagement();
    await rolemanagementPage.verifyUIElements();
  });
});
