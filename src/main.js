#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description('Convert Bitcoin to any provided currency')
  .parse(process.argv);

