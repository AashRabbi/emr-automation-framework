
const { Given, When, Then } = require('@cucumber/cucumber');
const { PatientSearchPage } = require('../../src/pages/PatientSearchPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the PatientSearch page', async function () {
  const patientsearchPage = new PatientSearchPage(this.page);
  await patientsearchPage.gotoPatientSearch();
});

When('I perform action on PatientSearch with value {string}', async function (value) {
  const patientsearchPage = new PatientSearchPage(this.page);
  await patientsearchPage.performAction({ value });
});

When('I perform complex action on PatientSearch with value {string} and option {string}', async function (value, option) {
  const patientsearchPage = new PatientSearchPage(this.page);
  await patientsearchPage.performComplexAction({ value, option });
});

Then('I should see the PatientSearch UI elements', async function () {
  const patientsearchPage = new PatientSearchPage(this.page);
  await patientsearchPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const patientsearchPage = new PatientSearchPage(this.page);
  await patientsearchPage.verifyState(expectedState);
});
