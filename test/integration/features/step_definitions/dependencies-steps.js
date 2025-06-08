import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the dependencies are defined', async function () {
  const {devDependencies} = this.scaffoldResult;

  assert.equal(devDependencies.includes(`${this.scope}/prettier-config`), true);
});
