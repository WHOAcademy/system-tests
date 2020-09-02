import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`http://${process.env.E2E_TEST_ROUTE}`) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(
      by.css('#app > div > div > div.ld-page__sec > div:nth-child(1) > div:nth-child(1) > div > h1')
    ).getText() as Promise<string>;
  }

  // Show Courses
  getTheFirstCardLabel() {
    const selector = '.courses-card__left > div > p';
    return element(by.css(selector));
  }

  getAllCourses() {
    const selector = '.card';
    return element.all(by.css(selector));
  }
}
