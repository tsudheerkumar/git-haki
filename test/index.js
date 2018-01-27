const GitHaki = require('../src/index');

GitHaki([
  {
    name: 'pre-commit',
    command: 'npm test',
    bashDest: '.git/hooks',
  },
  {
    name: 'pre-push',
    command: 'npm test',
    bashDest: '.git/hooks',
  },
]);
