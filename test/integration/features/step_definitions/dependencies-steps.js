import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the dependencies are defined', async function () {
  const {dependencies: {javascript: {development}}} = this.scaffoldResult;

  assert.equal(development.includes(`${this.scope}/prettier-config`), true);
});
