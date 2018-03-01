const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i = 0; i<1e7; i++);
    res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});

/**
 * Simulate a Process death
 */
// setTimeout(() => {
//     process.exit(1); // Death by random timeout
// }, Math.random() * 10000);
