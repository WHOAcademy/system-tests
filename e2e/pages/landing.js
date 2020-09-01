const {
  client
} = require('nightwatch-api');

const appCommands = {
  navigateTo: () => {
    return client.url(`http://${process.env.E2E_TEST_ROUTE}`);
  },

  getTitleText: () => {
    return element(by.css('#app > div.home > div > h2')).getText();
  },

  getTheFirstCardLabel: () => {
    const selector = '#course-card-0 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)';
    return element(by.css(selector));
  },

  getAllCourses: () => {
    const selector = '#courses-section > .card-columns > .card > .row > .col-md-6 > .card-body > .card-label';
    return element.all(by.css(selector));
  },

  getOnBoardingTitleText: () => {
    return element(by.css('#app > div.about > div > h2')).getText();
  },
}
module.exports = {
  url: `http://${process.env.E2E_TEST_ROUTE}`,
  commands: [],
  elements: {
    allCourses: '#courses-section > .card-columns > .card > .row > .col-md-6 > .card-body > .card-label',
    firstCardLabel: '#course-card-0 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)',
    pageTitle: 'h2'
  }
}
