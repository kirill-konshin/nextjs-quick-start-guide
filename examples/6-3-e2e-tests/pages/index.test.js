const config = require('../jest-puppeteer.config');

const openPage = (url = '/') => page.goto(`http://localhost:${config.server.port}${url}`);

describe('Basic integration', () => {

    it('shows the page', async () => {
        await openPage();
        await page.waitForSelector('div.index'); // wait for page to be rendered
        await expect(page).toMatch('Hello, octocat!Click');
    });

    it('clicks the button', async () => {
        await openPage();
        await page.waitForSelector('div.index'); // wait for page to be rendered
        await expect(page).toClick('button', {text: 'Click'});
        await expect(page).toMatch('Hello, octocat!ClickClicked');
    });

});