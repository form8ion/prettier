export default function ({config}) {
  if (!config) return {};

  return {devDependencies: ['prettier', `${config.scope}/prettier-config`]};
}
