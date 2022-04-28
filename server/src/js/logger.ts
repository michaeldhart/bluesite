import fs from 'fs';

const logFile = 'log.txt';

export const Logger = {
  info: (message: string) => {
    fs.writeFile(
      logFile,
      `${new Date().toUTCString()}    I   ${message}\n`,
      { flag: 'a' },
      () => {
        // noop
      }
    );
  },
  warn: (message: string) => {
    fs.writeFile(
      logFile,
      `${new Date().toUTCString()}    W   ${message}\n`,
      { flag: 'a' },
      () => {
        // noop
      }
    );
  },
  error: (message: string) => {
    fs.writeFile(
      logFile,
      `${new Date().toUTCString()}    E   ${message}\n`,
      { flag: 'a' },
      () => {
        // noop
      }
    );
  },
};
