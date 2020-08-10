import { browser, element, by, ExpectedConditions } from 'protractor';

export class Utils {
  navigateToPath(path: string): Promise<unknown> {
    return browser.get(`http://${process.env.E2E_TEST_ROUTE}/${path}`) as Promise<unknown>;
  }
  getUrlPath() {
    return browser.getCurrentUrl();
  }

  getById(id: string) {
    return element(by.css(`#${id}`));
  }

  waitForAng() {
    return browser.waitForAngular();
  }

  waitForId(id: string) {
    return browser.wait(ExpectedConditions.visibilityOf(this.getById(`${id}`)), 10000);
  }
}
