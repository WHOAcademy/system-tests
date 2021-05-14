import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`http://${process.env.E2E_TEST_ROUTE}`) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(
      by.css('#app > div > div > div > div > div.row.ld-page__one > div.d-flex.justify-content-center.align-items-center.col > div > h1')
    ).getText() as Promise<string>;
  }

  // Show Courses
  getTheFirstCardLabel() {
    const selector = '.courses-card__sec1 > .lxp-card__content > .card-label';
    return element(by.css(selector));
  }

  getAllCourses() {
    const selector = '.card';
    return element.all(by.css(selector));
  }
}
