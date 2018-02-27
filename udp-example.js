const dgram = require('dgram');

const server = dgram.createSocket('udp4');

const PORT = 3333;
const HOST = '127.0.0.1';
server.bind(PORT,HOST);
