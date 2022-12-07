# TypeScript Config

## Initial Setup

1. Install the package:

```
yarn add -DW typescript @neuledge/tsconfig
```

2. Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "prepare": "yarn prepare:ts",
    "prepare:ts": "ts-patch install -s"
  }
}
```

3. Create a `tsconfig.json` file with the following content:

```json
{
  "extends": "@neuledge/tsconfig/base.json",
  "compilerOptions": {
    "baseUrl": "src",
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__ignore__/**"]
}
```
