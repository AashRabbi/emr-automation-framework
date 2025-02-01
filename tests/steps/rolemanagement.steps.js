
const { Given, When, Then } = require('@cucumber/cucumber');
const { RoleManagementPage } = require('../../src/pages/RoleManagementPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the RoleManagement page', async function () {
  const rolemanagementPage = new RoleManagementPage(this.page);
  await rolemanagementPage.gotoRoleManagement();
});

When('I perform action on RoleManagement with value {string}', async function (value) {
  const rolemanagementPage = new RoleManagementPage(this.page);
  await rolemanagementPage.performAction({ value });
});

When('I perform complex action on RoleManagement with value {string} and option {string}', async function (value, option) {
  const rolemanagementPage = new RoleManagementPage(this.page);
  await rolemanagementPage.performComplexAction({ value, option });
});

Then('I should see the RoleManagement UI elements', async function () {
  const rolemanagementPage = new RoleManagementPage(this.page);
  await rolemanagementPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const rolemanagementPage = new RoleManagementPage(this.page);
  await rolemanagementPage.verifyState(expectedState);
});
