const http = require('http');

const req = http.get(
    'http://www.google.es',
    (res) => {
        // res: IncomingMessage
        console.log(res.statusCode);
        console.log(res.headers);
        res.on('data', (data) => {
            // data: <Buffer>
            console.log(data.toString());
        });
    }
);

req.on('error', (e) => console.log(e));
console.log(req.agent); // http.Agent

req.end();
