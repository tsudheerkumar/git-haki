/* eslint-disable no-console */
const chalk = require('chalk');

const config = {
  isDebugMode: false,
  prefix: 'githaki -> ',
};

const log = (msg) => {
  if (config.isDebugMode) {
    console.log(chalk.green(`\nlog: ${config.prefix} ${msg}`));
  }
};

const info = (msg) => {
  console.info(chalk.green(`\ninfo: ${config.prefix} ${msg}`));
};

const warn = (msg) => {
  console.warn(chalk.blue(`\nwarning: ${config.prefix} ${msg}`));
};

const error = (msg) => {
  console.error(chalk.red(`\nerror: ${config.prefix} ${msg}`));
};
module.exports = {
  log,
  info,
  warn,
  error,
};
