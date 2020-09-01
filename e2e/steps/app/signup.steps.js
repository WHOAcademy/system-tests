// import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
// import { expect } from 'chai';

// import { Utils } from '../../pages/utils.po';

// // TODO: Move to global scope
// setDefaultTimeout(60 * 1000);

// let utils: Utils;

// Before(() => {
//   utils = new Utils();
// });

// Given(/^I go to LXP$/, async () => {
//   await utils.navigateToPath('');
// });

// When(/^I hit sign up button$/, async () => {
//   // Wait for the DOM
//   await utils.waitForId("lxp-signup");

//   // Get button by ID then hit click
//   await utils.getById('lxp-signup').click();
// });

// Then(/^I am taken to sign up page$/, async () => {
//   expect(await utils.getUrlPath()).to.contain('keycloak');
//   expect(await utils.getById('kc-page-title').getText()).to.equal('Register');
// });
