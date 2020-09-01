import { browser, by, element, ElementFinder } from 'protractor';
import { Utils } from './utils.po';

const utils = new Utils();

export class OnboardingPage {
  getOnBoardingTitleText(): Promise<string> {
    return element(
      by.css('#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div.ob-interes__main > h2')
    ).getText() as Promise<string>;
  }

  async clickBadge(badge: string): Promise<unknown> {
    await utils
      .getById(
        `app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div.ob-interes__main > button:nth-child(${badge})`
      )
      .click();

    await utils.waitForId('rate-skills-modal');

    await utils.getByCSS('.ob-dd__icon').click();

    await utils.waitForSelector('ul.show');

    await utils.getByCSS('ul > li:nth-child(1) > a').click();

    return utils.getBtnByText('Add').click();
  }

  async submitThreeSkills(): Promise<unknown> {
    await this.clickBadge('3');
    await this.clickBadge('4');
    await this.clickBadge('5');

    await utils.getBtnByText('Next').click();

    return utils.waitForSelector(
      '#app > div > div > div > div > div > div.p-0.h-100.col-8 > div > div > div > div.d-flex.h-100 > h2'
    );
  }
}
