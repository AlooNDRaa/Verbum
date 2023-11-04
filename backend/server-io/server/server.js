import  Console  from 'console'
import express from 'express'
import http from "http"
import {Server as SocketServer} from "socket.io"


const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin:"http://localhost:5173",
    }
})



io.on("connection", socket => {
    Console.log("cliente conectado")
})

server.listen(3100)
console.log("Listo", 3100)