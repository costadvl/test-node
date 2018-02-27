const fs = require('fs');
const EventEmmiter = require('events');

class WithTime extends EventEmmiter {
    execute(asyncFun, ...args) {
        console.time('execute');
        asyncFun(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
        });
    }
}

const withTime = new WithTime();
withTime.on('data', (data)=>{
    console.log(`length: ${data.length}`);
});
withTime.on('data', (data)=>{
    console.log(`characters: ${data.toString().length}`);
});

withTime.prependListener('error', (err) => {
    console.error(`Error Log: ${err}`);
    process.exit(1);
});

// withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);
