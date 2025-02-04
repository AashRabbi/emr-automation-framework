
const { Given, When, Then } = require('@cucumber/cucumber');
const { AuditLogPage } = require('../../src/pages/AuditLogPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the AuditLog page', async function () {
  const auditlogPage = new AuditLogPage(this.page);
  await auditlogPage.gotoAuditLog();
});

When('I perform action on AuditLog with value {string}', async function (value) {
  const auditlogPage = new AuditLogPage(this.page);
  await auditlogPage.performAction({ value });
});

When('I perform complex action on AuditLog with value {string} and option {string}', async function (value, option) {
  const auditlogPage = new AuditLogPage(this.page);
  await auditlogPage.performComplexAction({ value, option });
});

Then('I should see the AuditLog UI elements', async function () {
  const auditlogPage = new AuditLogPage(this.page);
  await auditlogPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const auditlogPage = new AuditLogPage(this.page);
  await auditlogPage.verifyState(expectedState);
});
