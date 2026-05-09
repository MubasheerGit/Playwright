const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });

  // Create a new context with maximized viewport
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');
  console.log('Opened Google page');
  console.log('Browser maximized to fit screen');

  // Wait for a moment (optional)
  await page.waitForTimeout(2000);

  // Navigate to Yahoo
  await page.goto('https://www.yahoo.com');
  console.log('Navigated to Yahoo page');

  // Close any popup that might appear
  try {
    const closeSelectors = [
      '[aria-label="Close"]',
      '.close',
      '#close',
      '[data-testid="close-button"]',
      '.modal-close',
      '.popup-close'
    ];

    for (const selector of closeSelectors) {
      try {
        await page.locator(selector).click({ timeout: 2000 });
        console.log('Closed popup with selector:', selector);
        break;
      } catch (e) {
        // Continue to next selector
      }
    }
  } catch (e) {
    console.log('No popup found or already closed');
  }

  // Wait for a moment (optional)
  await page.waitForTimeout(2000);

  // Check where the cursor/focus is by default
  const focusedElement = await page.evaluate(() => {
    const active = document.activeElement;
    return {
      tagName: active.tagName,
      id: active.id,
      className: active.className,
      type: active.type,
      name: active.name
    };
  });
  console.log('🎯 Default cursor position on Yahoo:');
  console.log('   Tag:', focusedElement.tagName);
  console.log('   ID:', focusedElement.id || 'none');
  console.log('   Class:', focusedElement.className || 'none');
  console.log('   Type:', focusedElement.type || 'N/A');
  console.log('   Name:', focusedElement.name || 'none');

  // Close the browser
  await browser.close();
  console.log('Browser closed');
})();