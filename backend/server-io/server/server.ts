import Console from 'console';
import express from 'express';
import http from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import axios from 'axios'

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
        axios.post('http://localhost:3000/save-message', { body })
            .then((response) => {
                console.log(response.data);
                socket.emit('chat', { body: body, from: socket.id.slice(6) }); // Enviar el mensaje al cliente que lo envió
            })
            .catch((error) => {
                console.error('Error al enviar mensaje a Express', error);
            });
    });
});


server.listen(3100);
console.log('List', 3100);

