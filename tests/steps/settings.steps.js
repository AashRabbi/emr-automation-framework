
const { Given, When, Then } = require('@cucumber/cucumber');
const { SettingsPage } = require('../../src/pages/SettingsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Settings page', async function () {
  const settingsPage = new SettingsPage(this.page);
  await settingsPage.gotoSettings();
});

When('I perform action on Settings with value {string}', async function (value) {
  const settingsPage = new SettingsPage(this.page);
  await settingsPage.performAction({ value });
});

When('I perform complex action on Settings with value {string} and option {string}', async function (value, option) {
  const settingsPage = new SettingsPage(this.page);
  await settingsPage.performComplexAction({ value, option });
});

Then('I should see the Settings UI elements', async function () {
  const settingsPage = new SettingsPage(this.page);
  await settingsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const settingsPage = new SettingsPage(this.page);
  await settingsPage.verifyState(expectedState);
});
