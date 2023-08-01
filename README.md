# Utils Packages

You can find all the utils packages under the `packages` folder. Each package is a separate npm package and can be installed individually.

## Packages

| Package                                                     | Version                                                                                                                                    | Description                                                                                            |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [@neuledge/tsconfig](packages/tsconfig)                     | [![npm version](https://badge.fury.io/js/%40neuledge%2Ftsconfig.svg)](https://badge.fury.io/js/%40neuledge%2Ftsconfig)                     | This package provides a base TypeScript configuration for Neuledge packages.                           |
| [@neuledge/eslint-config](packages/eslint-config)           | [![npm version](https://badge.fury.io/js/%40neuledge%2Feslint-config.svg)](https://badge.fury.io/js/%40neuledge%2Feslint-config)           | This package provides a base ESLint configuration for Neuledge packages.                               |
| [@neuledge/eslint-config-next](packages/eslint-config-next) | [![npm version](https://badge.fury.io/js/%40neuledge%2Feslint-config-next.svg)](https://badge.fury.io/js/%40neuledge%2Feslint-config-next) | This package provides a base ESLint configuration for Neuledge Next.js projects.                       |
| [@neuledge/jest-ts-preset](packages/jest-ts-preset)         | [![npm version](https://badge.fury.io/js/%40neuledge%2Fjest-ts-preset.svg)](https://badge.fury.io/js/%40neuledge%2Fjest-ts-preset)         | This package provides a base Jest configuration for Neuledge TypeScript projects.                      |
| [@neuledge/jest-tsd-preset](packages/jest-tsd-preset)       | [![npm version](https://badge.fury.io/js/%40neuledge%2Fjest-tsd-preset.svg)](https://badge.fury.io/js/%40neuledge%2Fjest-tsd-preset)       | This package provides a base Jest configuration for Neuledge TypeScript projects with type checking.   |
| [@neuledge/units](packages/units)                           | [![npm version](https://badge.fury.io/js/%40neuledge%2Funits.svg)](https://badge.fury.io/js/%40neuledge%2Funits)                           | This package provides set of constants for commonly used units such as `DAY_MS` and `SIZE_MB`.         |
| [@neuledge/env](packages/env)                               | [![npm version](https://badge.fury.io/js/%40neuledge%2Fenv.svg)](https://badge.fury.io/js/%40neuledge%2Fenv)                               | This package provides a simple way to access environment variables both in the browser and in Node.js. |
| [@neuledge/process](packages/process)                       | [![npm version](https://badge.fury.io/js/%40neuledge%2Fprocess.svg)](https://badge.fury.io/js/%40neuledge%2Fprocess)                       | This package provides a simple way manage Node.js process lifecycle.                                   |
| [@neuledge/id](packages/id)                                 | [![npm version](https://badge.fury.io/js/%40neuledge%2Fid.svg)](https://badge.fury.io/js/%40neuledge%2Fid)                                 | This package provides a globally unique identifier based on the upcoming UUIDv7 standard.              |

## Local development

1. Create a new `.npmrc` file under the root folder with the following content:

```
//npm.pkg.github.com/:_authToken=GITHUB_PRIVATE_TOKEN
registry=https://registry.npmjs.org
```

2. Replace `GITHUB_PRIVATE_TOKEN` with a new private token created under [Github developer settings](https://github.com/settings/tokens). Make sure to give the token permission to read/write packages.

3. Run `yarn && yarn bootstrap`

## Release new version

First commit all changes and use `yarn test` to verify build is valid. Then use:

```
yarn release
```
