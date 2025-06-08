import {promises as fs} from 'node:fs';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the config file is created', async function () {
  assert.equal(
    await fs.readFile(`${this.scaffoldRoot}/.prettierrc.json`, 'utf-8'),
    `"${this.scope}/prettier-config"
`
  );
});
