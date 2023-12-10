import { Server as SocketServer, Socket } from 'socket.io';
import { getUserList } from '../controllers/chat.controller';

export async function configureSocket(server: any) {
  const io: SocketServer = new SocketServer(server, {
    cors: {
      origin: 'http://localhost:5173',
    },
  });

  io.on('connection', async (socket: Socket) => {
    const userList = await getUserList();
    io.to(socket.id).emit('userList', userList);

    socket.on('chat', async (chatData: { body: string; receptor: string }) => {
      console.log(chatData.body);

      const chatObject = {
        body: chatData.body,
        from: "me", // Asigna "me" como el remitente
        receptor: chatData.receptor,
      };

      socket.broadcast.emit('chat', chatObject);

      console.log(socket.id);
      console.log('Client connected');

      const updatedUserList = await getUserList();
      io.emit('userList', updatedUserList);
    });
  });
}
