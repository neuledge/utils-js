# ESLint Default Config

## Initial Setup

1. Install the package:

```
yarn add -DW eslint husky lint-staged prettier @neuledge/eslint-config
```

2. Create a `.eslintrc.json` file with the following content:

```json
{
  "extends": "@neuledge"
}
```

3. Create a `.prettierrc.json` file with the following content:

```json
{
  "singleQuote": true
}
```

4. Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "prepare": "husky install || echo \"skip husky\"",
    "fix": "yarn lint:fix",
    "lint": "eslint . --ext \"js,ts,mjs,cjs\"",
    "lint:fix": "yarn lint --fix",
    "lint:strict": "yarn lint --max-warnings 0"
  }
}
```

5. Add `lint-state` to the end of your `package.json` file:

```json
{
  "lint-staged": {
    "*.{js,ts,mjs,cjs}": "eslint"
  }
}
```

6. Install and configure husky:

```bash
yarn prepare
yarn husky add .husky/commit-msg 'NODE_OPTIONS="--max_old_space_size=4096" npx --no-save lint-staged'
```

## Usage

### Linting

```bash
yarn lint
```

### Fixing Linting Errors

```bash
yarn fix
```

### Strict Linting

(Best used in CI)

```bash
yarn lint:strict
```
