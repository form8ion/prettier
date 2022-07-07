import {assert} from 'chai';
import any from '@travi/any';

import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that prettier is scaffolded if config is provided', async () => {
    const scope = `@${any.word()}`;

    const {devDependencies} = await scaffold({config: {scope}});

    assert.deepEqual(devDependencies, ['prettier', `${scope}/prettier-config`]);
  });

  test('that prettier is not scaffolded if no config is provided', async () => {
    assert.deepEqual(await scaffold({}), {});
  });
});
