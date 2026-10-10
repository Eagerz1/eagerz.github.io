import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';

const base = 'http://127.0.0.1:4179';
const server = spawn('npm', ['run', 'dev', '--', '--host', '127.0.0.1', '--port', '4179', '--strictPort'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: process.platform === 'win32',
});
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw new Error('Vite exited before serving: ' + serverOutput);
    try {
      const response = await fetch(base);
      if (response.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error('Timed out waiting for Vite: ' + serverOutput);
}

const assert = (condition, message) => { if (!condition) throw new Error(message); };
let browser;

try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  await mkdir('test-screenshots', { recursive: true });

  for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    // Mock the OS clipboard: validate the generated message without depending on CI clipboard permissions.
    await context.addInitScript(() => {
      let copiedText = '';
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async text => { copiedText = text; },
          readText: async () => copiedText,
        },
      });
    });
    const page = await context.newPage();
    page.setDefaultTimeout(8000);
    page.setDefaultNavigationTimeout(15000);
    console.log('Testing viewport: ' + width);
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto(base + '/#/home', { waitUntil: 'domcontentloaded' });
    await page.locator('h1').getByText(/BUILD A SERVER/i).waitFor();
    assert((await page.title()).includes('Home'), 'Home document title missing');
    await page.screenshot({ path: 'test-screenshots/home-' + width + '.png', fullPage: true, timeout: 15000 });
    const nav = page.locator('.main-nav');
    if (width < 700) {
      await page.getByRole('button', { name: 'Open menu' }).click();
      assert(await nav.isVisible(), 'Mobile menu did not open');
    }
    for (const route of ['projects', 'services', 'about', 'contact']) {
      await page.goto(base + '/#/' + route, { waitUntil: 'domcontentloaded' });
      await page.locator('main h1').waitFor();
      assert((await page.title()).toLowerCase().includes(route), 'Page title incorrect: ' + route);
      assert((await page.locator('main h1').count()) === 1, 'Missing page heading: ' + route);
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      assert(scrollWidth <= width + 2, 'Horizontal overflow on ' + route + ' at ' + width + 'px: ' + scrollWidth);
    }
    await page.goto(base + '/#/projects');
    assert(await page.locator('.project-card').count() === 6, 'Expected six projects');
    await page.getByRole('button', { name: 'Skript' }).click();
    assert(await page.locator('.project-card').count() === 1, 'Skript filter incorrect');
    await page.getByRole('button', { name: 'Discord' }).click();
    assert(await page.locator('.project-card').count() === 1, 'Discord filter incorrect');
    await page.goto(base + '/#/about');
    assert(await page.getByText(/fictional testimonial examples/i).count() === 1, 'Missing sample review disclosure');
    await page.goto(base + '/#/contact');
    await page.getByPlaceholder(/What should the plugin do/i).fill('A custom Skyblock shop GUI');
    await page.getByPlaceholder(/e.g. \$100/i).fill('$150');
    await page.getByRole('button', { name: /Copy commission brief/i }).click();
    await page.getByRole('button', { name: /Brief copied/i }).waitFor({ timeout: 5000 });
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    assert(clipboard.includes('A custom Skyblock shop GUI') && clipboard.includes('$150'), 'Copied commission brief incomplete');
    await page.screenshot({ path: 'test-screenshots/contact-' + width + '.png', fullPage: true, timeout: 15000 });
    assert(errors.length === 0, 'Browser errors at ' + width + 'px: ' + errors.join('; '));
    await context.close();
    console.log('PASS: navigation, routes, projects, contact and viewport ' + width);
  }
  console.log('All portfolio browser smoke tests passed.');
} finally {
  if (browser) await browser.close();
  server.kill('SIGTERM');
}
