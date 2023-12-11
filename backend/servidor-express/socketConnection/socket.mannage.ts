import { Server as SocketServer, Socket } from 'socket.io';
import { getUserList } from '../controllers/chat.controller';
import users from '../models/user.chat.model';

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
}
