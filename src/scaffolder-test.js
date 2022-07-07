import {assert} from 'chai';
import any from '@travi/any';

import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that prettier is scaffolded if config is provided', async () => {
    const {devDependencies} = await scaffold({config: {scope: `@${any.word()}`}});

    assert.deepEqual(devDependencies, ['prettier']);
  });

  test('that prettier is not scaffolded if no config is provided', async () => {
    assert.deepEqual(await scaffold({}), {});
  });
});
