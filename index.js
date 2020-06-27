const sha256 = require('crypto-js/sha256');
const cryptoRandomString = require('crypto-random-string');

let code = cryptoRandomString({ length: 100 });
let hash = sha256(code).toString();
const digests = [];
while (digests.length !== 10) {
  if (hash.indexOf('b00da') !== -1) {
    digests.push({ code, hash, position: hash.indexOf('b00da') });
  }
  code = cryptoRandomString({ length: 100 });
  hash = sha256(code).toString();
}
console.log(digests);
