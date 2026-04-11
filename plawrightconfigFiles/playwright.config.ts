import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 
  testDir: './tests',
  fullyParallel: true,
  workers: 2, //parallel excution -->multiple browsers
  reporter: [['html',{open:'always'}]],  
  use: {
    // trace: 'on',
    // headless:false,
    // screenshot:'on',
    // video:'on'
  },  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        channel:'chrome',
        headless:false,
        screenshot:'only-on-failure',
        video:"on"

      },      
    },
    // {
    //   name: 'Firefox Browser',
    //   use: { ...devices['Desktop Firefox'],
    //     // headless:false,
    //     // screenshot:'only-on-failure',
    //     // video:"on"

    //   },
   // }  
  ],
});
