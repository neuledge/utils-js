import { printError } from '@/logger';

export const handleFatalError = (err: Error | unknown, exitCode = 1): never => {
  printError('Fatal Error', err);

  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(exitCode);
};
