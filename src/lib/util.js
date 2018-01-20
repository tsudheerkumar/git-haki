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
    this.options = Object.assign(config.options, options);
  }
  create() {
    let { templatePath, bashDest} = this.options;
    const { name, doNotModify} = this.options;

    logger.info(`Genrating hooks for ${name}`);

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

    fs.writeFileSync(bashDest, fileContent);

    fs.chmodSync(bashDest, '755');

    logger.info(`Genrated hooks for ${name}`);
  }
  getConfiguration() {
    const { name, command } = this.options;
    const { startMsg, endMsg, excCommand } = config[name];
    return `\n
            const config = {
                name: "${name}",
                startMsg:"${startMsg}",
                endMsg: "${endMsg}",
                excCommand: "${excCommand}",
                taskCommand: "${command}"
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
