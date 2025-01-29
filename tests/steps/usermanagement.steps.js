
const { Given, When, Then } = require('@cucumber/cucumber');
const { UserManagementPage } = require('../../src/pages/UserManagementPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the UserManagement page', async function () {
  const usermanagementPage = new UserManagementPage(this.page);
  await usermanagementPage.gotoUserManagement();
});

When('I perform action on UserManagement with value {string}', async function (value) {
  const usermanagementPage = new UserManagementPage(this.page);
  await usermanagementPage.performAction({ value });
});

When('I perform complex action on UserManagement with value {string} and option {string}', async function (value, option) {
  const usermanagementPage = new UserManagementPage(this.page);
  await usermanagementPage.performComplexAction({ value, option });
});

Then('I should see the UserManagement UI elements', async function () {
  const usermanagementPage = new UserManagementPage(this.page);
  await usermanagementPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const usermanagementPage = new UserManagementPage(this.page);
  await usermanagementPage.verifyState(expectedState);
});
