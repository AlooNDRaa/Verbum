"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureGameSocket = void 0;
function configureGameSocket(server) {
    const io = server;
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
}
exports.configureGameSocket = configureGameSocket;
