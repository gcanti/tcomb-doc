# Contributing Guide

Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will
always be given.

## Setting up your environment

After forking tcomb-doc to your own github org, do the following steps to get started:

```sh
# clone your fork to your local machine
git clone https://github.com/gcanti/tcomb-doc.git

# step into local repo
cd tcomb-doc

# install dependencies
npm install
```

### Running Tests

```sh
npm test
```

### Style & Linting

This codebase adheres to the `eslint:recommended` and is
enforced using [ESLint](http://eslint.org/).

It is recommended that you install an eslint plugin for your editor of choice when working on this
codebase, however you can always check to see if the source code is compliant by running:

```sh
npm run lint
```

## Pull Request Guidelines

Before you submit a pull request from your forked repo, check that it meets these guidelines:

1. If the pull request fixes a bug, it should include tests that fail without the changes, and pass
with them.
2. If the pull request adds functionality, the docs should be updated as part of the same PR.
3. Please rebase and resolve all conflicts before submitting.
