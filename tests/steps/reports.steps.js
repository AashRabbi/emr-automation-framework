
const { Given, When, Then } = require('@cucumber/cucumber');
const { ReportsPage } = require('../../src/pages/ReportsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Reports page', async function () {
  const reportsPage = new ReportsPage(this.page);
  await reportsPage.gotoReports();
});

When('I perform action on Reports with value {string}', async function (value) {
  const reportsPage = new ReportsPage(this.page);
  await reportsPage.performAction({ value });
});

When('I perform complex action on Reports with value {string} and option {string}', async function (value, option) {
  const reportsPage = new ReportsPage(this.page);
  await reportsPage.performComplexAction({ value, option });
});

Then('I should see the Reports UI elements', async function () {
  const reportsPage = new ReportsPage(this.page);
  await reportsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const reportsPage = new ReportsPage(this.page);
  await reportsPage.verifyState(expectedState);
});
