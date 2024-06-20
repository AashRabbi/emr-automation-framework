const { test, expect } = require("@playwright/test"); test("Clinical documentation test", async ({ page }) => { await page.goto("https://example.com"); await expect(page.locator("h1")).toContainText("EMR"); });
// Updated 2024-06-17
// Updated 2024-06-18
// Updated 2024-06-20
