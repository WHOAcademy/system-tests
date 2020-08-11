import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../../pages/utils.po';

let utils: Utils;

Before(() => {
  utils = new Utils();
});

Given(/^I go to LXP$/, async () => {
  await utils.navigateToPath('');
});

When(/^I hit sign up button$/, async () => {
  // TODO: running headless `npm run e2e:headless` breaks here
  // Get button by ID then hit click
  await utils.getById('lxp-signup').click();
});

Then(/^I am taken to sign up page$/, async () => {
  expect(await utils.getUrlPath()).to.contain('keycloak');
  expect(await utils.getById('kc-page-title').getText()).to.equal('Register');
});
