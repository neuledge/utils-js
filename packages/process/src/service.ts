import { awaitTimeout, MINUTE_MS, SECOND_MS } from '@neuledge/units';
import {
  printError,
  printLog,
  printServiceHeader,
  printServiceStart,
  printServiceTerminated,
  printServiceUrl,
} from '@/logger';
import { Server } from 'node:http';
import { handleFatalError } from './error-handling';
import { IS_NODE_ENV_PROD } from './process';

const DEFAULT_KEEP_ALIVE_SECONDS = IS_NODE_ENV_PROD ? 120 : 10;
const RUN_TERMINATE_TIMEOUT_MS = IS_NODE_ENV_PROD
  ? 2 * MINUTE_MS
  : 20 * SECOND_MS;

export interface RunConfigProcess {
  name: string;
  abort?(): PromiseLike<unknown>;
}

export type ServiceTask =
  | ServerConfig
  | MicroserviceConfig
  | PromiseLike<RunConfigProcess | null | void>;

export interface ServerConfig {
  name?: string;
  server: ServerLike | PromiseLike<ServerLike>;
  port: number;
  keepAliveSeconds?: number;
}

export interface MicroserviceConfig {
  name?: string;
  url?: string;
  microservice: MicroserviceLike | PromiseLike<MicroserviceLike>;
}

export interface ServerLike {
  listen(
    port: number,
    address: string,
    listener: unknown,
  ): Server | PromiseLike<Server>;
}

export interface MicroserviceLike {
  listen(): unknown | PromiseLike<unknown>;
  close?(): unknown | PromiseLike<unknown>;
}

export type RunResource = () => PromiseLike<unknown>;

const runTask = async (task: ServiceTask): Promise<RunResource | void> => {
  if ('server' in task) {
    const { port, name, keepAliveSeconds } = task;

    const server = await Promise.resolve(task.server).then(
      (server) =>
        new Promise<Server>((resolve) => {
          const ret = server.listen(port, '0.0.0.0', () => resolve(ret));
        }),
    );

    printServiceUrl(name || 'PUBLIC', `http://localhost:${port}`);

    // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
    server.keepAliveTimeout =
      (keepAliveSeconds || DEFAULT_KEEP_ALIVE_SECONDS) * SECOND_MS;

    // Ensure the headersTimeout is set higher than the keepAliveTimeout due to this nodejs regression bug: https://github.com/nodejs/node/issues/27363
    server.headersTimeout = server.keepAliveTimeout + SECOND_MS;

    return () =>
      new Promise<void>((resolve, reject) =>
        server.close((err) => (err ? reject(err) : resolve())),
      );
  } else if ('microservice' in task) {
    const res = await task.microservice;
    await res.listen();

    if (task.url) {
      printServiceUrl(task.name || 'MICROSERVICE', task.url);
    } else if (task.name) {
      printLog(`${task.name.toUpperCase()} STARTED`);
    }

    if (res.close) {
      return () => Promise.resolve(res.close && res.close());
    }
  } else {
    const res = await task;

    if (res && typeof res.name === 'string') {
      printLog(`${res.name.toUpperCase()} STARTED`);

      if (typeof res.abort === 'function') {
        return () => Promise.resolve(res.abort && res.abort());
      }
    }
  }
};

export const runService = (...tasks: ServiceTask[]) => {
  initService(...tasks).catch(handleFatalError);
};

export const initService = async (
  ...tasks: ServiceTask[]
): Promise<RunResource> => {
  const resources: RunResource[] = [];
  const initTime = Date.now();

  printServiceHeader();

  for (const task of tasks) {
    const resource = await runTask(task);
    if (resource) resources.push(resource);
  }

  const startTime = Date.now();
  printServiceStart(startTime - initTime);

  let end = async () => {
    const res = Promise.all(resources.map((resource) => resource()));
    end = () => res;

    return res;
  };

  let terminate = async () => {
    terminate = () => Promise.resolve();

    process.stdin.pause(); // release stdin

    await end().catch((error) => printError(`Error on close resource`, error));

    printServiceTerminated(Date.now() - startTime);

    if (IS_NODE_ENV_PROD) {
      // wait for logger to flush all output
      await awaitTimeout(10 * SECOND_MS);
    }

    setTimeout(
      () => handleFatalError(new Error(`terminate timeout`)),
      RUN_TERMINATE_TIMEOUT_MS,
    ).unref();
  };

  const exitHandler = (): void => {
    printLog(`exit signal catch`);

    terminate();
  };

  process.on('unhandledRejection', (err) => {
    printError(`Unhandled Rejection`, err);

    terminate();
  });

  process.on('uncaughtException', (err) => {
    printError(`Unhandled Exception`, err);

    terminate();
  });

  process.on('SIGTERM', exitHandler);
  process.on('SIGINT', exitHandler);
  process.on('SIGUSR1', exitHandler);
  process.on('SIGUSR2', exitHandler);

  process.stdin.resume(); // so the program will not close instantly

  return end;
};

export { type Server } from 'node:http';
