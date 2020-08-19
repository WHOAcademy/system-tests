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

Given(/^There are topics in system$/, async () => {
  // TODO: implement keycloak register
  await utils.navigateToPath('');

  // Wait for the DOM
  await utils.waitForId("lxp-signup");

  // Get button by ID then hit click
  await utils.getById('lxp-signup').click();

  // Wait for the DOM
  await utils.waitForId("kc-form-options > div > span > a");

  // Get button by ID then hit click
  await utils.getById('kc-form-options > div > span > a').click();

  // Wait for the DOM
  await utils.waitForId("kc-page-title");

  // Enter username
  await utils.getById('username').sendKeys("mickey");

  // Enter password
  await utils.getById('password').sendKeys("mouse");

  // Get button by ID then hit click on Log In button
  await utils.getById('kc-login').click();
});

When(/^I navigate through the onboarding page$/, async () => {
  await utils.waitForId("app > .about");
});

Then(/^I am shown available topics$/, async () => {
  expect(await page.getOnBoardingTitleText()).contains('Select a minimum of 3 interests');
});
