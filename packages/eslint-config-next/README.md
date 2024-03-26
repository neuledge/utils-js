# ESLint Next.js Config

## Initial Setup

1. Install the package:

```
pnpm add -D eslint husky lint-staged prettier @neuledge/eslint-config-next
```

2. Create a `.eslintrc.json` file with the following content:

```json
{
  "extends": "@neuledge/next",
  "parserOptions": {
    "project": ["./tsconfig.json"]
  },

  "settings": {
    "next": {
      "rootDir": ["path/to/next/project"]
    }
  }
}
```

Make sure you update the path `path/to/next/project` to all the root project
directories on Next.js.

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
    "fix": "pnpm lint:fix",
    "lint": "eslint . --ext \"js,jsx,ts,tsx,mjs,cjs\"",
    "lint:fix": "pnpm lint --fix",
    "lint:strict": "pnpm lint --max-warnings 0"
  }
}
```

5. Add `lint-state` to the end of your `package.json` file:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "eslint"
  }
}
```

6. Install and configure husky:

```bash
pnpm husky init
echo 'NODE_OPTIONS="--max_old_space_size=4096" npx --no-save lint-staged' > .husky/pre-commit
```

## Usage

### Linting

```bash
pnpm lint
```

### Fixing Linting Errors

```bash
pnpm fix
```

### Strict Linting

(Best used in CI)

```bash
pnpm lint:strict
```
