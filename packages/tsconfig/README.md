# TypeScript Config

## Initial Setup

1. Install the package:

```
yarn add -DW rimraf typescript @types/node tsc-alias tsup @neuledge/tsconfig
```

2. Create a `tsconfig.json` file with the following content:

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

3. Create a `tsup.config.json` file with the following content:

````json
{
  "entry": ["src/index.ts"],
  "format": ["esm", "cjs"],
  "sourcemap": true,
  "shims": true
}
```

3. Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "types": "rimraf --glob dist/*.{d.ts,d.ts.map} dist/**/*.{d.ts,d.ts.map} && tsc --emitDeclarationOnly && tsc-alias",
    "build": "rimraf --glob dist/*.{js,js.map,mjs,mjs.map} && tsup"
  }
}
````

4. Add the following to your `.gitignore`:

```
dist
```

5. Add the following to your `.npmignore`:

```
/*
!/dist/*.js
!/dist/*.js.map
!/dist/*.mjs
!/dist/*.mjs.map
!/dist/**/*.d.ts
```
