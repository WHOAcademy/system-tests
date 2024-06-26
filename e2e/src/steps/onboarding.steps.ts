import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../pages/utils.po';
import { OnboardingPage } from '../pages/onboarding.po';

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

Given(/^someone has just registered$/, async () => {
  await utils.login();
});

When(/^they land on the onboarding page$/, async () => {
  await utils.waitForId('app > .about');
});

When(/^I hit sign up button$/, async () => {
  // Wait for the DOM
  await utils.waitForSelector('.ld-sec__one-left');

  // Get button by ID then hit click
  await utils.getBtnByText("signup").click();
});

When(/^I navigate through the onboarding process$/, async () => {
  await utils.waitForId('app > .about');
  await obPage.addEducation();
  await obPage.continueToSkills();
  await utils.waitForSelector(
    `.ob-interes__main > button:nth-child(4)`
  );
});

When(/^I navigate through the onboarding process to topics$/, async () => {
  await utils.waitForId('app > .about');
  await obPage.addEducation();
  await obPage.continueToSkills();
  await utils.waitForSelector(`.ob-interes__main > button:nth-child(4)`);

  await obPage.submitThreeSkills();
  await utils.getBtnByText('Next').click();
});

Then(/^I am taken to sign up page$/, async () => {
  expect(await utils.getUrlPath()).to.contain('sso');
  expect(await utils.getByCSS(`.login-right__div .login-right__heading h5`).getText()).to.equal('Sign up');
});

Then(/^I am shown available topics$/, async () => {
  await utils.waitForSelector(
    `#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div.ob-interes__main > div:nth-child(3) > button:nth-child(4)`
  );
  expect(await obPage.getOnBoardingTitleText()).contains('Select a minimum of 3 interests');
});

Then(/^I am shown available skills$/, async () => {
  await utils.waitForSelector(
    `#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div.ob-interes__main > button:nth-child(4)`
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
    '#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.ob-content__div > h2'
  );
  
  expect(
    await utils
      .getByCSS('#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.ob-content__div > h2')
      .getText()
  ).contains('Well done you have setup your skills');
});

Then(/^I select three interests and sumbit$/, async () => {
  await utils.waitForSelector('#app .ob-interes__main > div:nth-child(3) > button:nth-child(1)');
  await utils.getByCSS('#app .ob-interes__main > div:nth-child(3) > button:nth-child(1)').click();

  await utils.waitForSelector('#app .ob-interes__main > div:nth-child(3) > button:nth-child(2)');
  await utils.getByCSS('#app .ob-interes__main > div:nth-child(3) > button:nth-child(2)').click();

  await utils.waitForSelector('#app .ob-interes__main > div:nth-child(3) > button:nth-child(3)');
  await utils.getByCSS('#app .ob-interes__main > div:nth-child(3) > button:nth-child(3)').click();

  await utils.waitForSelector('#app .ob-interes__main > div:nth-child(3) > button:nth-child(4)');
  await utils.getByCSS('#app .ob-interes__main > div:nth-child(3) > button:nth-child(4)').click();

  await utils.getBtnByText('Next').click();

  await utils.waitForSelector(
    '#app .ob-success__content > h2'
  );

  expect(
    await utils
      .getByCSS('#app .ob-success__content > h2')
      .getText()
  ).contains('Onboarding completed!');
});

Then(/^they are asked to submit their eductational background$/, async () => {
  await obPage.addEducation();

  await obPage.continueToSkills();

  expect(await obPage.getOnBoardingTitleText()).contains('Select a minimum of 3 skills');
});
