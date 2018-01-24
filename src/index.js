const Utility = require('./lib/util');
const logger = require('./lib/logger');

const GitHaki = function generateHooks(options) {
  if (options.doNotModify && !options.doNotModify) logger.info('We are ready to genrate git hooks \n');
  options.forEach((hook) => {
    const util = new Utility.Utils(hook);
    util.create();
  });
  if (options.doNotModify && !options.doNotModify) logger.info('We are done with genration of git hooks');
};

GitHaki([
  {
    name: 'logger.js',
    doNotModify: true,
    templatePath: 'logger.js',
  },
]);

module.exports = GitHaki;
