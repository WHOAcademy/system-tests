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
  await utils.navigateToPath('onboarding');
});

When(/^I navigate through the onboarding page$/, async () => {
  await utils.waitForId("app > .about");
});

Then(/^I am shown available topics$/, async () => {
  expect(await page.getOnBoardingTitleText()).contains('Select a minimum of 3 interests');
});
