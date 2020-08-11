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

Given(/^There are topics in system$/, async () => {
  await utils.navigateToPath('');
});

When(/^I navigate through the onboarding page$/, async () => {
  await utils.navigateToPath('onboarding');
});

Then(/^I am shown available topics$/, async () => {
  expect(await utils.getByTagName("h2").getText()).contains('Select a minimum of 3 interests');
});
