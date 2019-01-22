/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package.json');

const btcConverter = './src/main.js';


describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
  it('should return a description when call --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any provided currency')).to.be.true;
      done();
    });
  });
});
