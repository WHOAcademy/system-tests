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
  // Get button by ID then hit click
  await utils.getById('lxp-signup').click();
});

Then(/^I am taken to sign up page$/, async () => {
  expect(await utils.getUrlPath()).to.contain('keycloak');
  utils.waitForId('kc-title-page').then(() => {
    expect(utils.getById('kc-title-page').getText()).to.equal('Registration');
  });
});
