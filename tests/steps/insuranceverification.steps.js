
const { Given, When, Then } = require('@cucumber/cucumber');
const { InsuranceVerificationPage } = require('../../src/pages/InsuranceVerificationPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the InsuranceVerification page', async function () {
  const insuranceverificationPage = new InsuranceVerificationPage(this.page);
  await insuranceverificationPage.gotoInsuranceVerification();
});

When('I perform action on InsuranceVerification with value {string}', async function (value) {
  const insuranceverificationPage = new InsuranceVerificationPage(this.page);
  await insuranceverificationPage.performAction({ value });
});

When('I perform complex action on InsuranceVerification with value {string} and option {string}', async function (value, option) {
  const insuranceverificationPage = new InsuranceVerificationPage(this.page);
  await insuranceverificationPage.performComplexAction({ value, option });
});

Then('I should see the InsuranceVerification UI elements', async function () {
  const insuranceverificationPage = new InsuranceVerificationPage(this.page);
  await insuranceverificationPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const insuranceverificationPage = new InsuranceVerificationPage(this.page);
  await insuranceverificationPage.verifyState(expectedState);
});
