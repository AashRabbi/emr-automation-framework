
const { Given, When, Then } = require('@cucumber/cucumber');
const { AnalyticsPage } = require('../../src/pages/AnalyticsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Analytics page', async function () {
  const analyticsPage = new AnalyticsPage(this.page);
  await analyticsPage.gotoAnalytics();
});

When('I perform action on Analytics with value {string}', async function (value) {
  const analyticsPage = new AnalyticsPage(this.page);
  await analyticsPage.performAction({ value });
});

When('I perform complex action on Analytics with value {string} and option {string}', async function (value, option) {
  const analyticsPage = new AnalyticsPage(this.page);
  await analyticsPage.performComplexAction({ value, option });
});

Then('I should see the Analytics UI elements', async function () {
  const analyticsPage = new AnalyticsPage(this.page);
  await analyticsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const analyticsPage = new AnalyticsPage(this.page);
  await analyticsPage.verifyState(expectedState);
});
