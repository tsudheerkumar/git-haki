const Utility = require('./lib/util');
const logger = require('./lib/logger');

const GitHaki = function generateHooks(options) {

  const loggerConfig = {
    name: 'logger.js',
    doNotModify: true,
    templatePath: 'logger.js',
  };

  if (options[0].bashDest) {
    loggerConfig.bashDest = options[0].bashDest;
  }
  options.unshift(loggerConfig);

  if (options.doNotModify && !options.doNotModify) logger.info('We are ready to genrate git hooks \n');
  options.forEach((hook) => {
    const util = new Utility.Utils(hook);
    util.create();
  });
  if (options.doNotModify && !options.doNotModify) logger.info('We are done with genration of git hooks');
};

module.exports = GitHaki;
