const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
const crypt = require('crypto');

const { Transform } = require('stream');

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(crypt.createCipher('aes192', 'a_secret'))
    // .on('data', () => process.stdout.write('.'))
    .pipe(progress)
    .pipe(fs.createWriteStream(file+'.zz'))
    .on('finish', () => console.log('Done'));
