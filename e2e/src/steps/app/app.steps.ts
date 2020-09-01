import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../../pages/utils.po';
import { AppPage } from '../../pages/app.po';

// TODO: Move to global scope
setDefaultTimeout(60 * 1000);

let utils: Utils;
let page: AppPage;

Before(() => {
  utils = new Utils();
  page = new AppPage();
});

Given(/^I know the address of LXP$/, async () => {
  await page.navigateTo();
});

When(/^I navigate to it$/, async () => {
  await utils.waitForId('app > .ld-page');
});

Then(/^I am displayed the landing page$/, async () => {
  expect(await page.getTitleText()).to.contains('Revolutionizing lifelong learning in health');
});
