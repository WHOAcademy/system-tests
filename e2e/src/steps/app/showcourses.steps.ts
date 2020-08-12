import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../../pages/utils.po';
import { AppPage } from '../../pages/app.po';

let utils: Utils;
let page: AppPage;

Before(() => {
  utils = new Utils();
  page = new AppPage();
});

Given(/^I'm an un-authenticated user$/, async () => {
  await utils.navigateToPath('');
});

When(/^I go to the landing page$/, async () => {
  await utils.waitForId("course-card-0");
});

Then(/^I am shown all the courses$/, async () => {
  // get the category label
  // #courses-section > .card-columns > .card > .row > .col-md-6 > .card-body > .card-label

  expect(await page.getTheFirstCardLabel().getText()).to.equal('Category');

  expect(await page.getAllCourses().count()).to.greaterThan(3);
});
