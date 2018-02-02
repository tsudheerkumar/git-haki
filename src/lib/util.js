const fs = require('fs');
const path = require('path');
const logger = require('./logger');
const config = require('./config');

const getContent = (filePath) => {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, { encoding: 'utf-8' });
  }
  return null;
};

class Utils {
  constructor(options) {
    config.options.bashDest = options.bashDest ? options.bashDest : config.options.bashDest;
    this.options = Object.assign({}, config.options, options);
  }
  create() {
    let { templatePath, bashDest } = this.options;
    const { name, doNotModify, pathError } = this.options;

    if (!doNotModify) logger.info(`Genrating hooks for ${name}`);

    bashDest = path.resolve(bashDest, name);
    templatePath = `${__dirname}/${templatePath}`;

    let fileContent = getContent(templatePath);

    if (fileContent && !doNotModify) {
      const configuration = this.getConfiguration();

      fileContent = `${this.options.hashbang}
            \n\n
            ${configuration}
            \n\n
            ${fileContent}`;
    }
    try {
      fs.writeFileSync(bashDest, fileContent);

      fs.chmodSync(bashDest, '755');
    } catch (err) {
      throw new Error(logger.error(pathError));
    }

    if (!doNotModify) logger.info(`Genrated hooks for ${name}`);
  }
  getConfiguration() {
    const { name, command } = this.options;
    const { startMsg, endMsg, excCommand } = config[name];
    const cwd = process.cwd().split(path.sep).join('/');
    return `\n
            const config = {
                name: "${name}",
                startMsg:"${startMsg}",
                endMsg: "${endMsg}",
                excCommand: "${excCommand}",
                taskCommand: "${command}",
                cwd:"${cwd}"
            };
        \n`;
  }
  validateScriptLanguage(script) {
    if (!this.isValidScriptLanguage(script, this.options.hashbang)) {
      throw new Error('ERR_INVALID_SCRIPT_LANGUAGE');
    }
  }
}

module.exports.Utils = Utils;
