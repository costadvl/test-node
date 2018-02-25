const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

server.on('response', (response) => {
    console.log('\x1Bc');
    console.log(`Response: ${response}`);
    console.log('\n>');
    
});

let command, args;
rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});
