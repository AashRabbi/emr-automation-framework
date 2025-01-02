
const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../src/pages/LoginPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Login page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.gotoLogin();
});

When('I perform action on Login with value {string}', async function (value) {
  const loginPage = new LoginPage(this.page);
  await loginPage.performAction({ value });
});

When('I perform complex action on Login with value {string} and option {string}', async function (value, option) {
  const loginPage = new LoginPage(this.page);
  await loginPage.performComplexAction({ value, option });
});

Then('I should see the Login UI elements', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const loginPage = new LoginPage(this.page);
  await loginPage.verifyState(expectedState);
});
