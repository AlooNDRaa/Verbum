import { Server as SocketServer, Socket } from 'socket.io';
import { getUserList } from '../controllers/chat.controller';
import users from '../models/user.chat.model';
import {getGameUsers, saveMovimientos} from '../controllers/gamecontroller/game.controller';


export async function configureSocket(server: any) {
  const io: SocketServer = new SocketServer(server, {
    cors: {
      origin: 'http://localhost:5173',
    },
  });

  io.on('connection', async (socket: Socket) => {
    const userList = await getUserList();
    io.to(socket.id).emit('userList', userList);

    socket.on('chat', async (body: string) => {
      console.log(body);

      socket.broadcast.emit('chat', {
        body: body,
        from: "me",
      });

      console.log(socket.id);
      console.log('Client connected');

      const updatedUserList = await getUserList();
      io.emit('userList', updatedUserList);
    });
  });

  io.on('connection', (socket: Socket) => {
    console.log('Jugador conectado:', socket.id);

    socket.on('move',async (data) => {
      // Manejar el movimiento del juego
      io.emit('gameState', data); // Emitir el estado del juego a todos los jugadores
    });

    socket.on('disconnect', () => {
      console.log('Jugador desconectado:', socket.id);
      // Lógica de desconexión del juego
    });
  });
}
