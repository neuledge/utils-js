import { elapsedTimeStr } from '@neuledge/units';
import { APP_ENV, NODE_ENV } from './process';
import { inspect } from 'node:util';

export interface Logger {
  debug?(message: unknown, ...args: unknown[]): void;
  log?(message: unknown, ...args: unknown[]): void;
  info(message: unknown, ...args: unknown[]): void;
  warn(message: unknown, ...args: unknown[]): void;
  error(message: unknown, ...args: unknown[]): void;
}

export type LogSeverity = 'error' | 'warn' | 'info' | 'log' | 'debug';

let logger: Logger = console;

// exports

export const getLogger = (): Logger => logger;

export const setLogger = (
  item:
    | Logger
    | {
        verbose?(message: unknown, ...args: unknown[]): void;
        log(message: unknown, ...args: unknown[]): void;
        warn(message: unknown, ...args: unknown[]): void;
        error(message: unknown, ...args: unknown[]): void;
        debug?(message: unknown, ...args: unknown[]): void;
      },
): void => {
  logger =
    'info' in item
      ? item
      : {
          debug: item.debug?.bind(item),
          log: item.verbose?.bind(item),
          info: item.log.bind(item),
          warn: item.warn.bind(item),
          error: item.error.bind(item),
        };
};

export const printServiceHeader = (): void => {
  logger.info(`NODE VERSION:    \t${process.version}`);
  logger.info(`NODE ENVIRONMENT:\t${NODE_ENV}`);
  logger.info(`APP ENVIRONMENT: \t${APP_ENV}`);
};

export const printServiceUrl = (name: string, url: string): void => {
  logger.info(`${name.toUpperCase()} SERVICE URL:\t${url}`);
};

export const printServiceStart = (ms: number): void => {
  logger.info(`SERVICE START TIME: \t${elapsedTimeStr(ms)}\n`);
};

export const printServiceTerminated = (ms: number): void => {
  logger.info(`SERVICE TERMINATED: \t${elapsedTimeStr(ms)}`);
};

export const printLog = (
  message: string,
  severity: LogSeverity = 'info',
  additionalVars?: Record<string, unknown>,
): void => {
  let varsStr;
  if (additionalVars) {
    try {
      varsStr = JSON.stringify(additionalVars);
    } catch {
      try {
        varsStr = inspect(additionalVars);
      } catch {
        varsStr = '';
      }
    }
  }

  logger[severity]?.(message, varsStr ?? '');
};

export const printError = (
  message: string,
  err: Error | unknown,
  severity: LogSeverity = 'error',
  additionalVars?: Record<string, unknown>,
): void => {
  const errObj = (err || {}) as Error;

  printLog(`${message}: ${String(errObj.message || err)}`, severity, {
    ...errObj,
    stack: errObj.stack,
    ...additionalVars,
  });
};
