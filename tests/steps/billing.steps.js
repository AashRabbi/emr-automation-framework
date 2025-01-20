
const { Given, When, Then } = require('@cucumber/cucumber');
const { BillingPage } = require('../../src/pages/BillingPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Billing page', async function () {
  const billingPage = new BillingPage(this.page);
  await billingPage.gotoBilling();
});

When('I perform action on Billing with value {string}', async function (value) {
  const billingPage = new BillingPage(this.page);
  await billingPage.performAction({ value });
});

When('I perform complex action on Billing with value {string} and option {string}', async function (value, option) {
  const billingPage = new BillingPage(this.page);
  await billingPage.performComplexAction({ value, option });
});

Then('I should see the Billing UI elements', async function () {
  const billingPage = new BillingPage(this.page);
  await billingPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const billingPage = new BillingPage(this.page);
  await billingPage.verifyState(expectedState);
});
