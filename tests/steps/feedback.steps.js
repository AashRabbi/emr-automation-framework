
const { Given, When, Then } = require('@cucumber/cucumber');
const { FeedbackPage } = require('../../src/pages/FeedbackPage');
const { loginUser } = require('../../src/utils/helpers');

Given('I am logged in as {string}', async function (username) {
  await loginUser(this.page, username, 'pass');
});

When('I navigate to the Feedback page', async function () {
  const feedbackPage = new FeedbackPage(this.page);
  await feedbackPage.gotoFeedback();
});

When('I perform action on Feedback with value {string}', async function (value) {
  const feedbackPage = new FeedbackPage(this.page);
  await feedbackPage.performAction({ value });
});

When('I perform complex action on Feedback with value {string} and option {string}', async function (value, option) {
  const feedbackPage = new FeedbackPage(this.page);
  await feedbackPage.performComplexAction({ value, option });
});

Then('I should see the Feedback UI elements', async function () {
  const feedbackPage = new FeedbackPage(this.page);
  await feedbackPage.verifyUIElements();
});

Then('I should see the state as {string}', async function (expectedState) {
  const feedbackPage = new FeedbackPage(this.page);
  await feedbackPage.verifyState(expectedState);
});
