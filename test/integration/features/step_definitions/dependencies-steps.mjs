import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the dependencies are defined', async function () {
  const {devDependencies} = this.scaffoldResult;

  assert.include(devDependencies, `${this.scope}/prettier-config`);
});
