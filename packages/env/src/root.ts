/**
 * We allow extending the `env` file before reading it using:
 *
 * ```
 * import { env } from '@neuledge/env/root';
 *
 * Object.extend(env, { ... });
 * ```
 */
export const env = typeof process === 'object' ? process.env : {};
