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
    Console.log("client connected")
    socket.on ('chat', (data) => {
        console.log(data)
    })
})

server.listen(3100)
console.log("List", 3100)

