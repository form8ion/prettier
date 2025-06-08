# prettier

form8ion plugin for projects that manage code style with prettier

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Features

* Configures prettier in the scaffolded project to extend the provided
  [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations)
* Installs the provided shareable config
* Installs the related eslint config and configures eslint to use it

### Notes

* prettier will only be configured if a config scope is defined
* the shareable config is expected to define a dependency on `prettier`, so the
  scaffolded project will not be configured to depend directly on `prettier`
* the pretter and eslint config names are defined by convention, so packages
  that are named as `@<your-scope>/prettier-config` and
  `@<your-scope>/eslint-config-prettier` are expected to exist

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]
[![Try @form8ion/prettier on RunKit][runkit-badge]][runkit-link]
![node][node-badge]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/prettier --save-prod
```

### Example

#### Import

```javascript
import {scaffold} from '@form8ion/prettier';
```

#### Execute

```javascript
(async () => {
  await scaffold({projectRoot: process.cwd(), config: {scope: '@foo'}});
})();
```

## Contributing

<!--contribution-badges start -->

[![PRs Welcome][PRs-badge]][PRs-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![semantic-release: angular][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/form8ion/prettier/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/prettier/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/form8ion/prettier

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/prettier?logo=codecov

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/prettier.svg?logo=opensourceinitiative

[npm-link]: https://www.npmjs.com/package/@form8ion/prettier

[npm-badge]: https://img.shields.io/npm/v/@form8ion/prettier?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/prettier

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/prettier.svg

[node-badge]: https://img.shields.io/node/v/@form8ion/prettier?logo=node.js

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg
