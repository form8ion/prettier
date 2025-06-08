import {fileTypes} from '@form8ion/core';
import {write as writeConfig} from '@form8ion/config-file';

import {describe, vi, it, expect} from 'vitest';
import any from '@travi/any';

import scaffold from './scaffolder.js';

vi.mock('@form8ion/config-file');

describe('scaffolder', () => {
  it('should scaffold prettier if config is provided', async () => {
    const scope = `@${any.word()}`;
    const projectRoot = any.string();
    const configPackageName = `${scope}/prettier-config`;

    const {dependencies, eslint} = await scaffold({
      config: {scope},
      projectRoot
    });

    expect(dependencies.javascript.development).toEqual([configPackageName]);
    expect(eslint).toEqual({configs: ['prettier']});
    expect(writeConfig).toHaveBeenCalledWith({
      path: projectRoot,
      format: fileTypes.JSON,
      name: 'prettier',
      config: configPackageName
    });
  });

  it('should not scaffold prettier if no config is provided', async () => {
    expect(await scaffold({})).toEqual({});
  });
});
