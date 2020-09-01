import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect, util } from 'chai';

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

Given(/^I go to LXP$/, async () => {
  await utils.navigateToPath('');
});

When(/^I hit sign up button$/, async () => {
  // Wait for the DOM
  await utils.waitForId('lxp-signup');

  // Get button by ID then hit click
  await utils.getById('lxp-signup').click();
});

Then(/^I am taken to sign up page$/, async () => {
  expect(await utils.getUrlPath()).to.contain('keycloak');
  expect(await utils.getById('kc-page-title').getText()).to.equal('Register');
});

Given(/^There are skills in system$/, async () => {
  await utils.login();
});

Given(/^There are topics in system$/, async () => {
  await utils.login();
});

When(/^I navigate through the onboarding process$/, async () => {
  await utils.waitForId('app > .about');
  // todo check what layout vue is currently loaded
});

Then(/^I am shown available topics$/, async () => {
  expect(await page.getOnBoardingTitleText()).contains('Select a minimum of 3 interests');
});

Then(/^I am shown available skills$/, async () => {
  await utils.waitForSelector(
    `#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div.ob-interes__main > button:nth-child(3)`
  );

  expect(await page.getOnBoardingTitleText()).contains('Select a minimum of 3 skills');

  // todo wait for
  // #app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div.ob-interes__main > button:nth-child(3)
});

Then(/^I select three and sumbit$/, async () => {
  await utils.clickBadge('3');
  await utils.clickBadge('4');
  await utils.clickBadge('5');

  await utils.getBtnByText('Next').click();
  // .rate-skills-modal > ul > li.active-class
  // #rate-skills-modal > ul > li:nth-child(1) > a
  // expect(await page.getOnBoardingTitleText()).contains('Select a minimum of 3 skills');
  await utils.waitForSelector(
    '#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2'
  );

  expect(
    await utils
      .getByCSS('#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2')
      .getText()
  ).contains('Well done you have setup your skills');
});
