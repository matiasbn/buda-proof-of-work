# Buda POW

JS script to lookup for the 'b00da' substring in the SHA256 digest of a random 100 length long hex string.

It repeats this process 20 times, then adds the input, the digest of SHA256 and the position of the 'b00da' substring to an array of objects.

Finally, transforms the array to an object, and parse it to a JSON file.

# Pre-requisites

Node.js: 12.18.0 orlast LTS version

# Usage
Install the dependencies:
```bash
npm install
```
Run the start script of the package.json file:
```bash
npm run start
```

The script itself is in the index.js file.

It would print a ```done``` message once the JSON file is created. The file name is 'buda-pow.json'

# buda-pow.json

The project already includes a buda-pow.json file with the specified data.
