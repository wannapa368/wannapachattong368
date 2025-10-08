// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000, // max 30s ต่อ test
  expect: {
    timeout: 5000, // timeout สำหรับ expect
  },
  fullyParallel: true,
  retries: 1, // retry ครั้งเดียวเมื่อ fail
  reporter: [
    ['list'],           // แสดงผลบน Actions console
    ['html', { open: 'never' }] // สร้าง HTML report
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure', // ถ้า fail จะ capture
    video: 'retain-on-failure',    // ถ้า fail จะบันทึก video
    trace: 'retain-on-failure',    // ถ้า fail จะเก็บ trace
    baseURL: process.env.APP_URL || 'https://wannapa368.github.io/wannapachattong368/',
    actionTimeout: 5000,
    navigationTimeout: 15000,
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
