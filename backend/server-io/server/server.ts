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
        // Envía el mensaje a Express para que lo guarde en la base de datos
        axios.post('http://localhost:3000/save-message', { body })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error al enviar mensaje a Express', error);
            });

        // Emite el mensaje a todos los clientes conectados
        socket.broadcast.emit('chat', {
            body: body,
            from: socket.id.slice(6),
        });
    });
});


server.listen(3100);
console.log('List', 3100);

