const _ = require('lodash');
const protractorBase = require('./protractor.conf')


const overRideConfig = {
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--window-size=1280x800', "--headless", "--disable-gpu", "--no-sandbox"]
    }
  }
}

const thing = _.merge({}, protractorBase.config, overRideConfig)

exports.config = thing
