exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/features/**/*.feature'],
  capabilities: {
    shardTestFiles: true,
    browserName: 'firefox'
  },
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    format: 'json:./reports/cucumber-results.json',
    require: ['./src/steps/**/*.steps.ts']
  },
  onPrepare() {
    browser.ignoreSynchronization = true;
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};
