# Process utilities

This package contains constants and helper functions that are useful in a Node.js process.

## Install

Install the package:

```
yarn add @neuledge/process
```

## Usage

### Running a service

Using `runService` automatically handles signals and logs errors so the service
can shutdown gracefully.

#### Running an HTTP service

```ts
import { runService } from '@neuledge/process';
import http from 'http';

const app = http.createServer((req, res) => {
  res.end('Hello World!');
});

runService({
  name: 'my-service',
  server: app,
  port: 3000,
  keepAliveSeconds: 30,
});
```

#### Running a worker

```ts
import { printLog, runService, RunConfigProcess } from '@neuledge/process';

const worker = async (): Promise<RunConfigProcess> => {
  const interval = setInterval(() => {
    printLog('worker is running', 'info');
  }, 1000);

  const stop = async () => {
    clearInterval(interval);
  };

  return { name: 'watch', abort: stop };
};

runService(worker);
```

### Logging

```ts
import { Logger, ValidationPipe } from '@nestjs/common';
import { setLogger, printLog, printError } from '@neuledge/process';

// Set the logger to use the NestJS logger
setLogger(new Logger());

// Use the logger
printLog('Hello World!', 'info', { foo: 'bar' });

// Use the logger to print an error
printError('we got an error', new Error('Something went wrong!'), 'warn', {
  foo: 'bar',
});
```

### Environment variables

```ts
import { APP_ENV } from '@neuledge/process';

if (IS_LOCAL) {
  // Do something
} else if (APP_ENV === 'prod') {
  // Do something else
}
```
