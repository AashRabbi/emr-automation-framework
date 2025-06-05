
import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test('Maintenance update 1', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin();
  await loginPage.login('admin', 'pass');
  await loginPage.verifyLoginSuccess();
});
  