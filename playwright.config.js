const { defineConfig } = require("@playwright/test"); module.exports = defineConfig({ use: { headless: true, viewport: { width: 1280, height: 720 } }, projects: [{ name: "chromium", use: { browserName: "chromium" } }, { name: "firefox", use: { browserName: "firefox" } }], reporter: [["html", { open: "never" }]], testDir: "./tests" });
Updated configuration for 2024-06-12
Updated configuration for 2024-06-14
Updated configuration for 2024-06-21
Updated configuration for 2024-06-24
