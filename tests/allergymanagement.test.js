
import { test, expect } from '@playwright/test';
import { AllergyManagementPage } from '../src/pages/AllergyManagementPage';
import { loginUser } from '../utils/helpers';

test.describe('AllergyManagement Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to AllergyManagement page', async ({ page }) => {
    const allergymanagementPage = new AllergyManagementPage(page);
    await allergymanagementPage.gotoAllergyManagement();
    await allergymanagementPage.verifyUIElements();
  });

  test('should perform action on AllergyManagement', async ({ page }) => {
    const allergymanagementPage = new AllergyManagementPage(page);
    await allergymanagementPage.gotoAllergyManagement();
    await allergymanagementPage.performAction({ value: 'test-value' });
    await allergymanagementPage.verifyState('Action completed');
  });

  test('should perform complex action on AllergyManagement', async ({ page }) => {
    const allergymanagementPage = new AllergyManagementPage(page);
    await allergymanagementPage.gotoAllergyManagement();
    await allergymanagementPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await allergymanagementPage.verifyState('Complex action completed');
  });

  test('should handle AllergyManagement error case', async ({ page }) => {
    const allergymanagementPage = new AllergyManagementPage(page);
    await allergymanagementPage.gotoAllergyManagement();
    await allergymanagementPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify AllergyManagement UI elements', async ({ page }) => {
    const allergymanagementPage = new AllergyManagementPage(page);
    await allergymanagementPage.gotoAllergyManagement();
    await allergymanagementPage.verifyUIElements();
  });
});
