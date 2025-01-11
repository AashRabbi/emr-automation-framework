
const { Given, When, Then } = require('@cucumber/cucumber');
const { AppointmentSchedulingPage } = require('../../src/pages/AppointmentSchedulingPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the AppointmentScheduling page', async function () {
  const appointmentschedulingPage = new AppointmentSchedulingPage(this.page);
  await appointmentschedulingPage.gotoAppointmentScheduling();
});

When('I perform action on AppointmentScheduling with value {string}', async function (value) {
  const appointmentschedulingPage = new AppointmentSchedulingPage(this.page);
  await appointmentschedulingPage.performAction({ value });
});

When('I perform complex action on AppointmentScheduling with value {string} and option {string}', async function (value, option) {
  const appointmentschedulingPage = new AppointmentSchedulingPage(this.page);
  await appointmentschedulingPage.performComplexAction({ value, option });
});

Then('I should see the AppointmentScheduling UI elements', async function () {
  const appointmentschedulingPage = new AppointmentSchedulingPage(this.page);
  await appointmentschedulingPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const appointmentschedulingPage = new AppointmentSchedulingPage(this.page);
  await appointmentschedulingPage.verifyState(expectedState);
});
