# Environment variables

This package provides a simple way to access environment variables both in the
browser and in Node.js. It also provides a way to validate environment variables.

## Install

Install the package:

```
yarn add @neuledge/env
```

## Usage

### Accessing environment variables

```ts
import { env } from '@neuledge/env';

const port = env.PORT;
```

### Validating environment variables

```ts
import { env, bool } from '@neuledge/env';

const isProduction = bool(env.IS_PRODUCTION);
```

### Setting environment variables

We allow extending the `env` file before reading it using:

```ts
import { env } from '@neuledge/env/root';

Object.extend(env, { ... });
```

This is useful when you need to set environment variables in browser
environments and then load the updated `env` variable separately via:

```ts
import { env } from '@neuledge/env/browser';
```

For more details, see [Next.js Runtime Configuration](https://nextjs.org/docs/app/api-reference/next-config-js/runtime-configuration).
