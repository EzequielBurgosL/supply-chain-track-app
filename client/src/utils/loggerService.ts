export const loggerService = {
  info: (message: string, ...args: unknown[]) => console.info(message, ...args),
  warn: (message: string, ...args: unknown[]) => console.warn(message, ...args),
  error: (error: Error | string, ...args: unknown[]) =>
    console.error(error, ...args),
};
