process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = [];


server.on('connection', socket => {
    socket.id = counter++;

    console.log('Client cnnection');
    socket.write('Please type your name: ');
    
    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}`);
            sockets[socket.id] = socket;
            return;
        }
        Object.entries(sockets).forEach(([key,cs]) => {
            if (socket.id === key) return;
            cs.write(`${socket.name}:`);
            cs.write(data);
        });
    });
    socket.on('end', ()=>{
        console.log('Client disconected ', socket.id);
        delete sockets[socket.id];
    });
});

server.listen(8000, () => console.log('Server bound'));
