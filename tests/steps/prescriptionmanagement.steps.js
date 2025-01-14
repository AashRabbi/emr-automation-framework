
const { Given, When, Then } = require('@cucumber/cucumber');
const { PrescriptionManagementPage } = require('../../src/pages/PrescriptionManagementPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the PrescriptionManagement page', async function () {
  const prescriptionmanagementPage = new PrescriptionManagementPage(this.page);
  await prescriptionmanagementPage.gotoPrescriptionManagement();
});

When('I perform action on PrescriptionManagement with value {string}', async function (value) {
  const prescriptionmanagementPage = new PrescriptionManagementPage(this.page);
  await prescriptionmanagementPage.performAction({ value });
});

When('I perform complex action on PrescriptionManagement with value {string} and option {string}', async function (value, option) {
  const prescriptionmanagementPage = new PrescriptionManagementPage(this.page);
  await prescriptionmanagementPage.performComplexAction({ value, option });
});

Then('I should see the PrescriptionManagement UI elements', async function () {
  const prescriptionmanagementPage = new PrescriptionManagementPage(this.page);
  await prescriptionmanagementPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const prescriptionmanagementPage = new PrescriptionManagementPage(this.page);
  await prescriptionmanagementPage.verifyState(expectedState);
});
