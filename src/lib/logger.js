/* eslint-disable no-console */
const chalk = require('chalk');

const config = {
  isDebugMode: false,
  prefix: 'githaki -> ',
};

const log = (msg) => {
  if (config.isDebugMode) {
    console.log(chalk.green(`\nlog: ${config.prefix} ${msg}\n`));
  }
};

const info = (msg) => {
  console.info(chalk.green(`\ninfo: ${config.prefix} ${msg}\n`));
};

const warn = (msg) => {
  console.warn(chalk.blue(`\nwarning: ${config.prefix} ${msg}\n`));
};

const error = (msg) => {
  console.error(chalk.red(`\nerror: ${config.prefix} ${msg}\n`));
};
module.exports = {
  log,
  info,
  warn,
  error,
};
