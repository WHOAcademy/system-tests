import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I know the address of LXP$/, async () => {
  await page.navigateTo();
});

When(/^I navigate to it$/, () => {});

Then(/^I am displayed the landing page$/, async () => {
  expect(await page.getTitleText()).to.contains('🐭Welcome to the');
});
