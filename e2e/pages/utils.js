// import {
//   browser,
//   element,
//   by,
//   ExpectedConditions
// } from 'protractor';

// export class Utils {
//   navigateToPath(path) {
//     return browser.get(`http://${process.env.E2E_TEST_ROUTE}/${path}`) as Promise;
//   }
//   getUrlPath() {
//     return browser.getCurrentUrl();
//   }

//   getById(id) {
//     return element(by.css(`#${id}`));
//   }

//   getByTagName(tagName) {
//     return element(by.tagName(tagName));
//   }

//   waitForAng() {
//     return browser.waitForAngular();
//   }

//   waitForId(id) {
//     return browser.wait(ExpectedConditions.visibilityOf(this.getById(`${id}`)), 10000);
//   }
// }
