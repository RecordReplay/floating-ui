import {PlaywrightTestConfig, devices} from '@playwright/test';
import {devices as replayDevices} from '@recordreplay/playwright-config';

const config: PlaywrightTestConfig = {
  workers: 1,
  use: {
    launchOptions: {
      ignoreDefaultArgs: ['--hide-scrollbars'],
    },
  },
  webServer: {
    command: 'npm run dev',
    port: 1234,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'replay-firefox',
      use: {
        ...replayDevices["Replay Firefox"] as any
      }
    },
    {
      name: 'replay-chromium',
      use: {
        ...replayDevices["Replay Chromium"] as any
      }
    },
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
    // {
    //   name: 'firefox',
    //   use: {...devices['Desktop Firefox']},
    // },
    // {
    //   name: 'webkit',
    //   use: {...devices['Desktop Safari']},
    // },
  ],
};

export default config;
