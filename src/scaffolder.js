import {fileTypes} from '@form8ion/core';
import {write} from '@form8ion/config-file';

export default async function ({config, projectRoot}) {
  if (!config) return {};

  const configPackageName = `${config.scope}/prettier-config`;

  await write({
    path: projectRoot,
    format: fileTypes.JSON,
    name: 'prettier',
    config: configPackageName
  });

  return {
    eslint: {configs: ['prettier']},
    devDependencies: [configPackageName]
  };
}
