/* global config */
const logger = require('./logger');

// HOOK STARTS
const { exec } = require('child_process');

const cwd = process.cwd(); // Current working directory

exec(config.excCommand, (err) => {
  let exitCode = 0;
  if (err) {
    exitCode = -1;
    logger.info(config.startMsg);
    process.exit(exitCode);
  } else {
    logger.info(`Code ${config.name.replace('pre-', '')} is in progress...`);
    exec(config.taskCommand, { // command to tasks for commit
      cwd,
      maxBuffer: Infinity, // buffer size to display logs
    }, (error) => {
      let exitStatusCode = 0;
      if (error) {
        exitStatusCode = -1;
        logger.info('Errors!!! Please fix them and try again.');
      } else {
        logger.info(config.endMsg);
      }
      process.exit(exitStatusCode);
    }).stdout.on('data', (data) => {
      logger.info(data.toString());
    });
  }
});
// HOOK ENDS
