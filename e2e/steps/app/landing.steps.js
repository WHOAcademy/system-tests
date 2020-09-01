const {
  client
} = require('nightwatch-api');
const {
  expect
} = require('chai');
const {
  Before,
  Given,
  When,
  Then,
} = require('cucumber');


Before(() => {
  this.landingPage = client.page.landing();
});

Given(/^I know the address of LXP$/, () => {

});

When(/^I navigate to it$/, async () => {
  await this.landingPage.navigate().waitForElementVisible(".home", 1000);
});

Then(/^I am displayed the landing page$/, async () => {
  await this.landingPage.expect.element('@pageTitle').to.be.visible
  await this.landingPage.expect.element('@pageTitle').text.to.contains('🐭Latest health knowledge and evidence');
});


Given(/^I'm an un-authenticated user$/, () => {});

When(/^I go to the landing page$/, async () => {
  await this.landingPage.navigate().waitForElementVisible("#course-card-0", 1000);
});

Then(/^I am shown all the courses$/, async () => {
  expect(await page.getTheFirstCardLabel().getText()).to.equal('Category');

  expect(await page.getAllCourses().count()).to.greaterThan(3);
});
