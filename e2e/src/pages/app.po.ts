import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`http://${process.env.E2E_TEST_ROUTE}`) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('#app > div.home > div > h2')).getText() as Promise<string>;
  }

  // Show Courses

  getTheFirstCardLabel() {
    const selector = '#course-card-0 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)';
    return element(by.css(selector));
  }

  getAllCourses() {
    const selector = '#courses-section > .card-columns > .card > .row > .col-md-6 > .card-body > .card-label';
    return element.all(by.css(selector));
  }

  // Onboarding

  getOnBoardingTitleText(): Promise<string> {
    return element(by.css('#app > div.about > h2')).getText() as Promise<string>;
  }
}
