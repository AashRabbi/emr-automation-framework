
const { Given, When, Then } = require('@cucumber/cucumber');
const { HelpPage } = require('../../src/pages/HelpPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Help page', async function () {
  const helpPage = new HelpPage(this.page);
  await helpPage.gotoHelp();
});

When('I perform action on Help with value {string}', async function (value) {
  const helpPage = new HelpPage(this.page);
  await helpPage.performAction({ value });
});

When('I perform complex action on Help with value {string} and option {string}', async function (value, option) {
  const helpPage = new HelpPage(this.page);
  await helpPage.performComplexAction({ value, option });
});

Then('I should see the Help UI elements', async function () {
  const helpPage = new HelpPage(this.page);
  await helpPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const helpPage = new HelpPage(this.page);
  await helpPage.verifyState(expectedState);
});
