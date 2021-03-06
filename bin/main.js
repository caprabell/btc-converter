#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var convertBTC = require('./convertBTC');

program.version(pkg.version).description('Convert Bitcoin to any provided currency').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <amount>', 'Value in Bitcoin to be converted. (Default: 1)').parse(process.argv);

console.log(convertBTC(program.currency, program.amount));