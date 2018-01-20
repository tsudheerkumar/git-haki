/* eslint-disable no-console */

const config = {
  isDebugMode: false,
  prefix: 'githaki -> ',
};

const log = (msg) => {
  if (config.isDebugMode) {
    console.log(`\n ${config.prefix} ${msg}\n`);
  }
};

const info = (msg) => {
  console.info(`\ninfo: ${config.prefix} ${msg}\n`);
};

const warn = (msg) => {
  if (config.isDebugMode) {
    console.warn(`\nwarning: ${config.prefix} ${msg}\n`);
  }
};

const error = (msg) => {
  if (config.isDebugMode) {
    console.error(`\nerror: ${config.prefix} ${msg}\n`);
  }
};
module.exports = {
  log,
  info,
  warn,
  error,
};
