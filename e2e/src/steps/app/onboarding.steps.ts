import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../../pages/utils.po';
import { OnboardingPage } from '../../pages/onboarding.po';

// TODO: Move to global scope
setDefaultTimeout(60 * 1000);

let utils: Utils;
let obPage: OnboardingPage;

Before(() => {
  utils = new Utils();
  obPage = new OnboardingPage();
});

Given(/^I go to LXP$/, async () => {
  await utils.navigateToPath('');
});

Given(/^There are skills in system$/, async () => {
  await utils.login();
});

Given(/^There are topics in system$/, async () => {
  await utils.login();
});

When(/^I hit sign up button$/, async () => {
  // Wait for the DOM
  await utils.waitForId('lxp-signup');

  // Get button by ID then hit click
  await utils.getById('lxp-signup').click();
});

When(/^I navigate through the onboarding process$/, async () => {
  await utils.waitForId('app > .about');
  // todo check what layout vue is currently loaded
});

When(/^I navigate through the onboarding process to topics$/, async () => {
  // wait for skills to load
  await utils.waitForSelector(
    `#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div.ob-interes__main > button:nth-child(3)`
  );
  await obPage.submitThreeSkills();
  await utils.getBtnByText('Next').click();
});

Then(/^I am taken to sign up page$/, async () => {
  expect(await utils.getUrlPath()).to.contain('keycloak');
  expect(await utils.getById('kc-page-title').getText()).to.equal('Register');
});

Then(/^I am shown available topics$/, async () => {
  expect(await obPage.getOnBoardingTitleText()).contains('Select a minimum of 3 interests');
});

Then(/^I am shown available skills$/, async () => {
  await utils.waitForSelector(
    `#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div.ob-interes__main > button:nth-child(3)`
  );
  expect(await obPage.getOnBoardingTitleText()).contains('Select a minimum of 3 skills');
});

Then(/^I select three and sumbit$/, async () => {
  await obPage.clickBadge('3');
  await obPage.clickBadge('4');
  await obPage.clickBadge('5');

  await utils.getBtnByText('Next').click();

  // check im on the success page
  await utils.waitForSelector(
    '#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2'
  );

  expect(
    await utils
      .getByCSS('#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2')
      .getText()
  ).contains('Well done you have setup your skills');
});

Then(/^I select three interests and sumbit$/, async () => {
  await utils.getBtnByText('Leadership').click();
  await utils.getBtnByText('Management').click();
  await utils.getBtnByText('Administration').click();

  await utils.getBtnByText('Next').click();

  await utils.waitForSelector(
    '#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2'
  );

  expect(
    await utils
      .getByCSS('#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2')
      .getText()
  ).contains('Begin your learning');
});
