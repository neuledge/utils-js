export const awaitTimeout = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const rejectTimeout = (timeout: number, err?: Error): Promise<void> =>
  awaitTimeout(timeout).then(() => {
    throw err || new Error('Timeout');
  });
