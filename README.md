# Utils Packages

## Initial Setup

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
