
import { test, expect } from '@playwright/test';
import { FeedbackPage } from '../src/pages/FeedbackPage';
import { loginUser } from '../utils/helpers';

test.describe('Feedback Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to Feedback page', async ({ page }) => {
    const feedbackPage = new FeedbackPage(page);
    await feedbackPage.gotoFeedback();
    await feedbackPage.verifyUIElements();
  });

  test('should perform action on Feedback', async ({ page }) => {
    const feedbackPage = new FeedbackPage(page);
    await feedbackPage.gotoFeedback();
    await feedbackPage.performAction({ value: 'test-value' });
    await feedbackPage.verifyState('Action completed');
  });

  test('should perform complex action on Feedback', async ({ page }) => {
    const feedbackPage = new FeedbackPage(page);
    await feedbackPage.gotoFeedback();
    await feedbackPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await feedbackPage.verifyState('Complex action completed');
  });

  test('should handle Feedback error case', async ({ page }) => {
    const feedbackPage = new FeedbackPage(page);
    await feedbackPage.gotoFeedback();
    await feedbackPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify Feedback UI elements', async ({ page }) => {
    const feedbackPage = new FeedbackPage(page);
    await feedbackPage.gotoFeedback();
    await feedbackPage.verifyUIElements();
  });
});
