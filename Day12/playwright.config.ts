import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect:{
    timeout:10000  // 10 seconds for each assertion
  },
 // timeout:60000,// 60 seconds for each test
  testDir: './tests',
  fullyParallel: false,
  //retries:2,
  workers: 2, //parallel excution -->multiple browsers
  reporter: [['html']],  
  //repeatEach:2, //to confirm the flakiness on execution repeat the test as needed
  //grep:[/'smoke'/,/'regression'/], //execute the set of files which the given test title
  //testMatch:["/tests/Day12/**.spec.ts",""], //execute the set of given files
  //testIgnore:["/tests/Day12/**.spec.ts"],//ignore the file from execution 
  //grepInvert:[/"Create"/,/"Login"/], //ignore the file from excution -matching with test title
  use: {
     trace: 'on',
   },  
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        channel:'chrome',
        headless:false,
        screenshot:'only-on-failure',
        video:"on",
      },  
               
    },
     
  ],
});
