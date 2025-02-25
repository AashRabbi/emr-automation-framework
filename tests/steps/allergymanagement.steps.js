
const { Given, When, Then } = require('@cucumber/cucumber');
const { AllergyManagementPage } = require('../../src/pages/AllergyManagementPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the AllergyManagement page', async function () {
  const allergymanagementPage = new AllergyManagementPage(this.page);
  await allergymanagementPage.gotoAllergyManagement();
});

When('I perform action on AllergyManagement with value {string}', async function (value) {
  const allergymanagementPage = new AllergyManagementPage(this.page);
  await allergymanagementPage.performAction({ value });
});

When('I perform complex action on AllergyManagement with value {string} and option {string}', async function (value, option) {
  const allergymanagementPage = new AllergyManagementPage(this.page);
  await allergymanagementPage.performComplexAction({ value, option });
});

Then('I should see the AllergyManagement UI elements', async function () {
  const allergymanagementPage = new AllergyManagementPage(this.page);
  await allergymanagementPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const allergymanagementPage = new AllergyManagementPage(this.page);
  await allergymanagementPage.verifyState(expectedState);
});
