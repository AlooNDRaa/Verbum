import Console from 'console';
import express from 'express';
import http from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io: SocketServer = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
});

io.on('connection', (socket: Socket) => {
    Console.log(socket.id);
    socket.on('chat', (body: string) => {
        console.log(body);
        socket.broadcast.emit('chat', {
            body,
            from: socket.id.slice(6),
        });
    });
});

server.listen(3100);
console.log('List', 3100);