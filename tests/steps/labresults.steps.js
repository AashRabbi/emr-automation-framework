
const { Given, When, Then } = require('@cucumber/cucumber');
const { LabResultsPage } = require('../../src/pages/LabResultsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the LabResults page', async function () {
  const labresultsPage = new LabResultsPage(this.page);
  await labresultsPage.gotoLabResults();
});

When('I perform action on LabResults with value {string}', async function (value) {
  const labresultsPage = new LabResultsPage(this.page);
  await labresultsPage.performAction({ value });
});

When('I perform complex action on LabResults with value {string} and option {string}', async function (value, option) {
  const labresultsPage = new LabResultsPage(this.page);
  await labresultsPage.performComplexAction({ value, option });
});

Then('I should see the LabResults UI elements', async function () {
  const labresultsPage = new LabResultsPage(this.page);
  await labresultsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const labresultsPage = new LabResultsPage(this.page);
  await labresultsPage.verifyState(expectedState);
});
