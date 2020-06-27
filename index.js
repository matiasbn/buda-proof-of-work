const sha256 = require('crypto-js/sha256');
const cryptoRandomString = require('crypto-random-string');
const fs = require('fs');

let code = cryptoRandomString({ length: 100 });
let hash = sha256(code).toString();
const digests = [];

while (digests.length !== 20) {
  if (hash.indexOf('b00da') !== -1) {
    digests.push({ code, hash, position: hash.indexOf('b00da') });
  }
  code = cryptoRandomString({ length: 100 });
  hash = sha256(code).toString();
}

const object = {};
digests.forEach((digest, index) => {
  object[index + 1] = digest;
});

const json = JSON.stringify(object);

fs.writeFile('buda-pow.json', json, 'utf8', () => console.log('done'));
