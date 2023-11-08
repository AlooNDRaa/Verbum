"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
});
io.on('connection', (socket) => {
    console_1.default.log(socket.id);
    socket.on('chat', (body) => {
        console.log(body);
        socket.broadcast.emit('chat', {
            body,
            from: socket.id.slice(6),
        });
    });
});
server.listen(3100);
console.log('List', 3100);
