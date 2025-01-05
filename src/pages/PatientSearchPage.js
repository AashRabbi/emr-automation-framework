
import { Page, expect } from '@playwright/test';
import { setupTestData } from '../utils/helpers';

export class PatientSearchPage {
  readonly page: Page;
  readonly locators = {
    searchInput: '#patient-search-input',
    searchButton: '#search-button',
    resultsTable: '.patient-results-table',
    resultRow: '.patient-row'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async gotoPatientSearch() {
    await setupTestData(this.page, { module: 'patient-search' });
    await this.page.goto('/patient-search');
    await expect(this.page).toHaveURL(/patient-search/);
  }

  async searchPatient(query) {
    await this.page.fill(this.locators.searchInput, query);
    await this.page.click(this.locators.searchButton);
    await this.page.waitForSelector(this.locators.resultsTable);
  }

  async selectPatient(index = 0) {
    const rows = this.page.locator(this.locators.resultRow);
    await rows.nth(index).click();
    await expect(this.page).toHaveURL(/patient-details/);
  }

  async verifySearchResultsCount(expectedCount) {
    const rows = this.page.locator(this.locators.resultRow);
    await expect(rows).toHaveCount(expectedCount);
  }

  async verifyNoResults() {
    await expect(this.page.locator(this.locators.resultsTable)).toContainText('No results found');
  }
}
