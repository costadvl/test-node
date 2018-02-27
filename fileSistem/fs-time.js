const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

fs.mkdirSync(dirname);

const ms1Day = 24*60*60*10000;

for(let i = 0; i < 10; i++) {
    const filepath = path.join(dirname, `file${i}`);
    fs.writeFile(filepath, i, (err) => {
        if (err) throw err;

        const time = (Date.now() - i*ms1Day)/1000;
        fs.utimes(filepath, time, time, (err) => {
            if(err) throw err;
        });
    });
}
