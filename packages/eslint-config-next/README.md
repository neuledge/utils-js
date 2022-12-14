# ESLint Next.js Config

## Initial Setup

1. Install the package:

```
npm i -d eslint prettier @neuledge/eslint-config-next
```

2. Create a `.eslintrc.json` file with the following content:

```json
{
  "extends": "@neuledge/next",

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
  "singleQuote": true,
  "trailingComma": "all"
}
```
