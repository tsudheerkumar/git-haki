module.exports = {
  options: {
    hashbang: '#!/usr/bin/env node',
    name: 'pre-commit',
    bashDest: '.git/hooks',
    templatePath: 'haki.js',
    doNotModify: false,
  },
  'pre-commit': {
    startMsg: 'Please commit/stash unstaged files in working directory',
    endMsg: 'Good job!!! Commit successful please push your code changes',
    excCommand: 'git diff --exit-code',
  },
  'pre-push': {
    startMsg: 'Please commit/stash staged or unstaged files in working directory',
    endMsg: 'Good job!!! Code push is successful. Please raise a PR ',
    excCommand: 'git diff --exit-code && git diff --cached --exit-code',
  },
};
