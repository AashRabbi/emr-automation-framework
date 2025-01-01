
import { Page } from '@playwright/test';

export async function loginUser(page: Page, username: string, password: string) {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#login-button');
  await page.waitForURL('/dashboard');
}

export async function setupTestData(page: Page, data: any) {
  await page.evaluate((testData) => {
    window.localStorage.setItem('testData', JSON.stringify(testData));
  }, data);
}

export async function clearTestData(page: Page) {
  await page.evaluate(() => {
    window.localStorage.clear();
  });
}

export async function generateReport(page: Page, reportName: string) {
  // Simulate generating a test report
  await page.evaluate((name) => {
    console.log(`Generating report: ${name}`);
  }, reportName);
}
