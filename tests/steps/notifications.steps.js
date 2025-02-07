
const { Given, When, Then } = require('@cucumber/cucumber');
const { NotificationsPage } = require('../../src/pages/NotificationsPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Notifications page', async function () {
  const notificationsPage = new NotificationsPage(this.page);
  await notificationsPage.gotoNotifications();
});

When('I perform action on Notifications with value {string}', async function (value) {
  const notificationsPage = new NotificationsPage(this.page);
  await notificationsPage.performAction({ value });
});

When('I perform complex action on Notifications with value {string} and option {string}', async function (value, option) {
  const notificationsPage = new NotificationsPage(this.page);
  await notificationsPage.performComplexAction({ value, option });
});

Then('I should see the Notifications UI elements', async function () {
  const notificationsPage = new NotificationsPage(this.page);
  await notificationsPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const notificationsPage = new NotificationsPage(this.page);
  await notificationsPage.verifyState(expectedState);
});
