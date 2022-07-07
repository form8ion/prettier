import {fileTypes} from '@form8ion/core';
import * as configFile from '@form8ion/config-file';

import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';

import scaffold from './scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(configFile, 'write');
  });

  teardown(() => sandbox.restore());

  test('that prettier is scaffolded if config is provided', async () => {
    const scope = `@${any.word()}`;
    const projectRoot = any.string();
    const configPackageName = `${scope}/prettier-config`;

    const {devDependencies} = await scaffold({config: {scope}, projectRoot});

    assert.deepEqual(devDependencies, ['prettier', configPackageName]);
    assert.calledWith(
      configFile.write,
      {path: projectRoot, format: fileTypes.JSON, name: 'prettier', config: configPackageName}
    );
  });

  test('that prettier is not scaffolded if no config is provided', async () => {
    assert.deepEqual(await scaffold({}), {});
  });
});
