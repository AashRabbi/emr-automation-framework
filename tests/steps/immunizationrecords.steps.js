
const { Given, When, Then } = require('@cucumber/cucumber');
const { ImmunizationRecordsPage } = require('../../src/pages/ImmunizationRecordsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the ImmunizationRecords page', async function () {
  const immunizationrecordsPage = new ImmunizationRecordsPage(this.page);
  await immunizationrecordsPage.gotoImmunizationRecords();
});

When('I perform action on ImmunizationRecords with value {string}', async function (value) {
  const immunizationrecordsPage = new ImmunizationRecordsPage(this.page);
  await immunizationrecordsPage.performAction({ value });
});

When('I perform complex action on ImmunizationRecords with value {string} and option {string}', async function (value, option) {
  const immunizationrecordsPage = new ImmunizationRecordsPage(this.page);
  await immunizationrecordsPage.performComplexAction({ value, option });
});

Then('I should see the ImmunizationRecords UI elements', async function () {
  const immunizationrecordsPage = new ImmunizationRecordsPage(this.page);
  await immunizationrecordsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const immunizationrecordsPage = new ImmunizationRecordsPage(this.page);
  await immunizationrecordsPage.verifyState(expectedState);
});
