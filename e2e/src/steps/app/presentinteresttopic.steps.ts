import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { Utils } from '../../pages/utils.po';
import { AppPage } from '../../pages/app.po';

// TODO: Move to global scope
setDefaultTimeout(60 * 1000);

let utils: Utils;
let page: AppPage;

Before(() => {
  utils = new Utils();
  page = new AppPage();
});
