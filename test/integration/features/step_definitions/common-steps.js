import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import assert from 'node:assert';
import {fileExists} from '@form8ion/core';
import {After, Then, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(
  resolve(__dirname, '..', '..', '..', '..', 'node_modules')
);

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  this.scaffoldRoot = process.cwd();

  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const {scaffold} = await import('@form8ion/prettier');

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  this.scaffoldResult = await scaffold({
    projectRoot: this.scaffoldRoot,
    ...(this.scope && {config: {scope: this.scope}})
  });
});

Then('prettier is not configured', async function () {
  assert.deepEqual(this.scaffoldResult, {});
  assert.equal(await fileExists(`${this.scaffoldRoot}/.prettierrc.json`), false);
});
