const GitHaki = require('../src/index');

GitHaki([
  {
    name: 'pre-commit',
    command: 'npm test',
  },
  {
    name: 'pre-push',
    command: 'npm test',
  },
]);
