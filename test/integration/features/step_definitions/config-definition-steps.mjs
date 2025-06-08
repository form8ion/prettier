import assert from 'node:assert';

import {Given, Then} from '@cucumber/cucumber';
import any from '@travi/any';

Given('a prettier config is defined', async function () {
  this.scope = `@${any.word()}`;
});

Given('no prettier config is defined', async function () {
  this.scope = undefined;
});

Then('the eslint config is defined', async function () {
  assert.deepEqual(this.scaffoldResult.eslint.configs, ['prettier']);
});
