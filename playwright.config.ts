import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration File
 * Optimized for Assignment 1 Data Extraction
 */
export default defineConfig({
  // Specifies the directory where your test files are located
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if 'test.only' is left in the code
  forbidOnly: !!process.env.CI,

  // RETRIES: Set to 0 locally to avoid duplicate logs in your console
  retries: process.env.CI ? 2 : 0,

  // WORKERS: Set to 1. 
  // This ensures tests run ONE BY ONE. 
  // If they run in parallel, your Console Logs will get mixed up!
  workers: process.env.CI ? 1 : 1,

  // REPORTER: Added 'list' so you can see the console.log output clearly in VS Code terminal
  reporter: [['list'], ['html']],

  /* Shared settings for all the projects below */
  use: {
    // 1. Base URL
    baseURL: 'https://www.swifttranslator.com',

    // 2. Trace Collection
    trace: 'on-first-retry',

    // 3. Headless Mode: False means you can see the browser
    headless: false,

    // 4. Screenshots: Take screenshot only if test fails
    screenshot: 'only-on-failure',
    
    // 5. Viewport: Set a standard size to ensure UI elements are visible
    viewport: { width: 1280, height: 720 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium', // Google Chrome / Edge
      use: { ...devices['Desktop Chrome'] },
    },
    
    // Uncomment if you need other browsers later
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});