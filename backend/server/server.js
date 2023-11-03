import { Console } from 'console'
import express from 'express'
import http from "http"
import {Server as socketServer} from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new socketServer(server)

io.on("connection", socket => {
    Console.log("cliente conectado")
})

server.listen(3100)
console.log("listoo", 3100)