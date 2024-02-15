# TypeScript Config

This package provides a base TypeScript configuration for Neuledge packages.

## Config Files

- [`base.json`](#initial-setup): Base TypeScript configuration.
- [`nestjs.json`](#nextjs-setup): TypeScript configuration for Nest.js projects.
- [`nextjs.json`](#nestjs-setup): TypeScript configuration for Next.js projects.

## Initial Setup

1. Install the package:

```
pnpm add -D rimraf typescript @types/node tsc-alias tsup @neuledge/tsconfig
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

```json
{
  "entry": ["src/index.ts"],
  "format": ["esm", "cjs"],
  "sourcemap": true,
  "shims": true
}
```

4. Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "types": "rimraf --glob dist/*.{d.ts,d.ts.map} dist/**/*.{d.ts,d.ts.map} && tsc --emitDeclarationOnly && tsc-alias",
    "build": "rimraf --glob dist/*.{js,js.map,mjs,mjs.map} && tsup"
  }
}
```

5. Add the following to your `.gitignore`:

```
dist
```

6. Add the following to your `.npmignore`:

```
/*
!/dist/*.js
!/dist/*.js.map
!/dist/*.mjs
!/dist/*.mjs.map
!/dist/**/*.d.ts
```

## Next.js Setup

If you're using a [Next.js](https://nextjs.org/) project, you should follow the instructions below instead of the ones above:

1. Setup new project with TypeScript:

```
pnpm create next-app
```

2. Install the package:

```
pnpm add -D @neuledge/tsconfig
```

3. Replace the `tsconfig.json` file with the following content:

```json
{
  "extends": "@neuledge/tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "plugins": [{ "name": "next" }]
  },
  "include": [
    ".eslintrc.cjs",
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.cjs",
    "**/*.mjs",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules", "**/__ignore__/**"]
}
```

## Nest.js Setup

If you're using a [Nest.js](https://nestjs.com/) project, you should follow the instructions below instead of the ones above:

1. Install the package:

```
pnpm add -D @neuledge/tsconfig
```

2. Replace the `tsconfig.json` file with the following content:

```json
{
  "extends": "@neuledge/tsconfig/nestjs.json",
  "compilerOptions": {
    "baseUrl": "./",
    "rootDir": "./",
    "outDir": "./dist"
  },
  "exclude": ["dist", "node_modules"]
}
```
