import { Console } from 'console'
import express from 'express'
import http from "http"
import {Server as socketServer} from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new socketServer(server)

io.on("connection", socket => {
    Console.log("cliente conectado")
    socket.on ('chat', (data) => {
        console.log(data)
    })
})

server.listen(4000)
console.log("listoo", 4000)

/* 
import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server as socketServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new socketServer(server);

const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con el origen correcto de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
io.use((socket, next) => {
  const origin = socket.handshake.headers.origin;
  if (origin === 'http://localhost:5173') {
    cors(corsOptions)(socket.request, socket.request.res, next);
  } else {
    next(new Error('No permitido por CORS'));
  }
});

io.on('connection', (socket) => {
  console.log('Cliente conectado');
});

server.listen(4000, () => {
  console.log('Servidor en ejecución en el puerto 4000');
});
*/