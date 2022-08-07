import {promises as fs} from 'node:fs';

import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the config file is created', async function () {
  assert.equal(
    await fs.readFile(`${this.scaffoldRoot}/.prettierrc.json`, 'utf-8'),
    `"${this.scope}/prettier-config"`
  );
});
