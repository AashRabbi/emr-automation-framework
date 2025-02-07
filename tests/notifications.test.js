
import { test, expect } from '@playwright/test';
import { NotificationsPage } from '../src/pages/NotificationsPage';
import { loginUser } from '../utils/helpers';

test.describe('Notifications Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Notifications page', async ({ page }) => {
    const notificationsPage = new NotificationsPage(page);
    await notificationsPage.gotoNotifications();
    await notificationsPage.verifyUIElements();
  });

  test('should perform action on Notifications', async ({ page }) => {
    const notificationsPage = new NotificationsPage(page);
    await notificationsPage.gotoNotifications();
    await notificationsPage.performAction({ value: 'test-value' });
    await notificationsPage.verifyState('Action completed');
  });

  test('should perform complex action on Notifications', async ({ page }) => {
    const notificationsPage = new NotificationsPage(page);
    await notificationsPage.gotoNotifications();
    await notificationsPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await notificationsPage.verifyState('Complex action completed');
  });

  test('should handle Notifications error case', async ({ page }) => {
    const notificationsPage = new NotificationsPage(page);
    await notificationsPage.gotoNotifications();
    await notificationsPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Notifications UI elements', async ({ page }) => {
    const notificationsPage = new NotificationsPage(page);
    await notificationsPage.gotoNotifications();
    await notificationsPage.verifyUIElements();
  });
});
