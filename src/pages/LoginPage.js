
import { Page, expect } from '@playwright/test';
import { loginUser } from '../utils/helpers';

export class LoginPage {
  readonly page: Page;
  readonly locators = {
    username: '#username',
    password: '#password',
    loginButton: '#login-button',
    errorMessage: '#error-message',
    welcomeBanner: '.welcome-banner'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLogin() {
    await this.page.goto('/login');
    await expect(this.page).toHaveURL(/login/);
  }

  async login(username = 'admin', password = 'pass') {
    await loginUser(this.page, username, password);
    await this.page.click(this.locators.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator(this.locators.welcomeBanner)).toBeVisible();
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async verifyLoginFailure(errorMessage = 'Invalid credentials') {
    await expect(this.page.locator(this.locators.errorMessage)).toHaveText(errorMessage);
  }

  async attemptLoginWithRole(role) {
    const credentials = {
      admin: { username: 'admin', password: 'pass' },
      doctor: { username: 'doctor', password: 'doc123' },
      nurse: { username: 'nurse', password: 'nurse456' }
    };
    await this.login(credentials[role].username, credentials[role].password);
  }
}
