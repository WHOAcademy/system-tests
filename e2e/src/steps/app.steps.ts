import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../pages/utils.po';
import { AppPage } from '../pages/app.po';

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
  await utils.waitForId('app .ld-page');
});

Then(/^I am displayed the landing page$/, async () => {
  expect(await page.getTitleText()).to.contains('Welcome to WHO Academy');
});

Given(/^I'm an un-authenticated user$/, async () => {
  await utils.navigateToPath('');
});

When(/^I go to the landing page$/, async () => {
  await utils.waitForId('course-card-0');
});

Then(/^I am shown all the courses$/, async () => {
  expect(await page.getTheFirstCardLabel().getText()).to.equal('Category');
  expect(await page.getAllCourses().count()).to.greaterThan(1);
});
