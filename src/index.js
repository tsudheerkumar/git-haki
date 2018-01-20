const Utility = require('./lib/util');
logger = require('./lib/logger');

class GitHaki {
    constructor(options) {
        this.options = options;
        this.generateHooks();
    }
    generateHooks() {
        logger.info(`We are ready to genrate git hooks \n`);
        this.options.forEach(hook => {

            const util = new Utility.Utils(hook);
            util.create();
        });
        logger.info(`We are done with genration of git hooks`);
    }
}

new GitHaki([
    {
        name: 'logger.js',
        doNotModify: true,
        templatePath: 'logger.js'
    }
]);

module.exports = GitHaki;