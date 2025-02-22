
const { Given, When, Then } = require('@cucumber/cucumber');
const { MedicalHistoryPage } = require('../../src/pages/MedicalHistoryPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the MedicalHistory page', async function () {
  const medicalhistoryPage = new MedicalHistoryPage(this.page);
  await medicalhistoryPage.gotoMedicalHistory();
});

When('I perform action on MedicalHistory with value {string}', async function (value) {
  const medicalhistoryPage = new MedicalHistoryPage(this.page);
  await medicalhistoryPage.performAction({ value });
});

When('I perform complex action on MedicalHistory with value {string} and option {string}', async function (value, option) {
  const medicalhistoryPage = new MedicalHistoryPage(this.page);
  await medicalhistoryPage.performComplexAction({ value, option });
});

Then('I should see the MedicalHistory UI elements', async function () {
  const medicalhistoryPage = new MedicalHistoryPage(this.page);
  await medicalhistoryPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const medicalhistoryPage = new MedicalHistoryPage(this.page);
  await medicalhistoryPage.verifyState(expectedState);
});
