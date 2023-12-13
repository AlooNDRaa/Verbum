import { Server as SocketServer, Socket } from 'socket.io';
import { getUserList } from '../controllers/chat.controller';
import { getGameUsers, saveMovimientos } from '../controllers/gamecontroller/game.controller';

export async function configureSocket(server: any) {
  const io: SocketServer = new SocketServer(server, {
    cors: {
      origin: 'http://localhost:5173',
    },
  });

  io.on('connection', async (socket: Socket) => {
    console.log('Client connected:', socket.id);

    socket.on('chat', (body: string) => {
      console.log(body);
      socket.broadcast.emit('chat', {
        body: body,
        from: socket.id.slice(6),
      });
    });

    const userList = await getUserList();
    io.to(socket.id).emit('userList', userList);

    socket.on('move', async (data) => {
      io.emit('gameState', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });

    const updatedUserList = await getUserList();
    io.emit('userList', updatedUserList);
  });
}
