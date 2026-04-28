const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 800, height: 600 });
  
  // Navigate to app
  await page.goto('http://localhost:3000');
  
  // Fill out the form
  await page.type('#m1', '85');
  await page.type('#m2', '90');
  await page.type('#m3', '78');
  await page.type('#m4', '88');
  await page.type('#m5', '92');
  
  // Click calculate
  await page.click('button');
  
  // Wait for output
  await page.waitForSelector('#output');
  await new Promise(resolve => setTimeout(resolve, 500)); // wait for dom update
  
  // Take screenshot
  await page.screenshot({ path: 'screenshot.png' });
  
  console.log('Screenshot saved as screenshot.png');
  await browser.close();
})();
