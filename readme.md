# git-haki@1.0.0

A simple way to add git hooks. 
Hooks enable team to only push quality code. Haki makes it easier to create hooks.

## Installation

> npm install git-haki --save-dev

This will install the git-haki as devdependencies.

## Usage

To use

> const GitHaki = require('git-haki');
GitHaki({
    name: 'post-commit',
    command: 'npm test'
});

This will create post commit git hook which will run npm test script specified in your projects package json.


## Limitation

Supports only pre-commit and pre-push git hooks 

## Future

Will add support for
- Other git hooks
- Run from command line with configuraion file and options
- Logging issues

## How can you help
- Please log issues or feature requests
- Create PRs with feature request by forking rep
- Help in creating and improving documentation
