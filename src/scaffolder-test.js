import {assert} from 'chai';

import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that prettier is scaffolded', async () => {
    const {devDependencies} = await scaffold();

    assert.deepEqual(devDependencies, ['prettier']);
  });
});
