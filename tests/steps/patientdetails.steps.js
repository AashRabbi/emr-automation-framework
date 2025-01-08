
const { Given, When, Then } = require('@cucumber/cucumber');
const { PatientDetailsPage } = require('../../src/pages/PatientDetailsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the PatientDetails page', async function () {
  const patientdetailsPage = new PatientDetailsPage(this.page);
  await patientdetailsPage.gotoPatientDetails();
});

When('I perform action on PatientDetails with value {string}', async function (value) {
  const patientdetailsPage = new PatientDetailsPage(this.page);
  await patientdetailsPage.performAction({ value });
});

When('I perform complex action on PatientDetails with value {string} and option {string}', async function (value, option) {
  const patientdetailsPage = new PatientDetailsPage(this.page);
  await patientdetailsPage.performComplexAction({ value, option });
});

Then('I should see the PatientDetails UI elements', async function () {
  const patientdetailsPage = new PatientDetailsPage(this.page);
  await patientdetailsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const patientdetailsPage = new PatientDetailsPage(this.page);
  await patientdetailsPage.verifyState(expectedState);
});
