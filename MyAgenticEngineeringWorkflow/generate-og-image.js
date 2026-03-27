const { chromium } = require('playwright-chromium');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 }
  });

  await page.goto('file://' + path.resolve(__dirname, 'generate-og-image.html'));
  await page.screenshot({ path: path.resolve(__dirname, 'public/og-image.png') });

  await browser.close();
  console.log('OG image generated successfully!');
})();
