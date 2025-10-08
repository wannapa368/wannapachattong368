import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',        // โฟลเดอร์เก็บ test
  timeout: 30000,            // timeout แต่ละ test
  retries: 1,                // retry ถ้า fail
  reporter: [
    ['list'],
    ['html', { outputFolder: 'tests/playwright-report' }]
  ],
  use: {
    headless: true,
    baseURL: process.env.BASE_URL || 'http://localhost:9000', // ใช้ URL จริงจาก workflow
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
});
