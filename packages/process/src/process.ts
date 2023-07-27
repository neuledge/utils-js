import os from 'node:os';
import { env } from '@neuledge/env';

export const NODE_ENV = env.NODE_ENV ?? 'development';
export const IS_NODE_ENV_PROD = NODE_ENV === 'production';

export const APP_ENV = env.APP_ENV ?? (IS_NODE_ENV_PROD ? 'unknown' : 'local');

export const IS_LOCAL = APP_ENV === 'local';
export const IS_LIVE = APP_ENV === 'live';

if (!IS_NODE_ENV_PROD && !IS_LOCAL) {
  throw new Error('NODE_ENV must be "production" on non-local environments');
}

export type ProcessId = string;

export const getProcessId = (): ProcessId => `${os.hostname()}:${process.pid}`;
