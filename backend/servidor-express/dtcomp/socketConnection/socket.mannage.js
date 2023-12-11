"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSocket = void 0;
const socket_io_1 = require("socket.io");
const chat_controller_1 = require("../controllers/chat.controller");
function configureSocket(server) {
    return __awaiter(this, void 0, void 0, function* () {
        const io = new socket_io_1.Server(server, {
            cors: {
                origin: 'http://localhost:5173',
            },
        });
        io.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
            const userList = yield (0, chat_controller_1.getUserList)();
            io.to(socket.id).emit('userList', userList);
            socket.on('chat', (body) => __awaiter(this, void 0, void 0, function* () {
                console.log(body);
                socket.broadcast.emit('chat', {
                    body: body,
                    from: "me",
                });
                console.log(socket.id);
                console.log('Client connected');
                const updatedUserList = yield (0, chat_controller_1.getUserList)();
                io.emit('userList', updatedUserList);
            }));
        }));
        io.on('connection', (socket) => {
            console.log('Jugador conectado:', socket.id);
            socket.on('move', (data) => {
                // Manejar el movimiento del juego
                io.emit('gameState', data); // Emitir el estado del juego a todos los jugadores
            });
            socket.on('disconnect', () => {
                console.log('Jugador desconectado:', socket.id);
                // Lógica de desconexión del juego
            });
        });
    });
}
exports.configureSocket = configureSocket;
