
import { test, expect } from '@playwright/test';
import { AuditLogPage } from '../src/pages/AuditLogPage';
import { loginUser } from '../utils/helpers';

test.describe('AuditLog Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page, 'admin', 'pass');
  });

  test('should navigate to AuditLog page', async ({ page }) => {
    const auditlogPage = new AuditLogPage(page);
    await auditlogPage.gotoAuditLog();
    await auditlogPage.verifyUIElements();
  });

  test('should perform action on AuditLog', async ({ page }) => {
    const auditlogPage = new AuditLogPage(page);
    await auditlogPage.gotoAuditLog();
    await auditlogPage.performAction({ value: 'test-value' });
    await auditlogPage.verifyState('Action completed');
  });

  test('should perform complex action on AuditLog', async ({ page }) => {
    const auditlogPage = new AuditLogPage(page);
    await auditlogPage.gotoAuditLog();
    await auditlogPage.performComplexAction({ value: 'complex-test', option: 'option2' });
    await auditlogPage.verifyState('Complex action completed');
  });

  test('should handle AuditLog error case', async ({ page }) => {
    const auditlogPage = new AuditLogPage(page);
    await auditlogPage.gotoAuditLog();
    await auditlogPage.performAction({ value: '' });
    await expect(page.locator('#error')).toHaveText('Invalid input');
  });

  test('should verify AuditLog UI elements', async ({ page }) => {
    const auditlogPage = new AuditLogPage(page);
    await auditlogPage.gotoAuditLog();
    await auditlogPage.verifyUIElements();
  });
});
