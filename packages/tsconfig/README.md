# TypeScript Config

## Initial Setup

1. Install the package:

```
npm i -d typescript @neuledge/tsconfig
```

2. Create a `tsconfig.json` file with the following content:

```json
{
  "extends": "@neuledge/tsconfig/base.json",
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["src"]
}
```

You can change and extends the `compilerOptions` and `include` as you wish.
Use `exclude` to override the default `exclude` values: `["node_modules", "**/__ignore__/**"]`.
