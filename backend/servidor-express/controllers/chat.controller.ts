import { Request, Response } from 'express';
import Mensaje from '../models/chat.model';
import User from '../models/user.chat.model';

interface CreateMensajeRequest {
  message_content: string;
  user_id: number;
}

export async function getUserList() {
  try {
    const users = await User.findAll({
      attributes: ['username'],
    });
    return users;
  } catch (error) {
    console.error('Error al obtener la lista de usuarios:', error);
    throw error;
  }
}

export async function createmessages(req: Request, res: Response) {
  try {
    const { message_content, user_id }: CreateMensajeRequest = req.body;

    const isFromSocket = req.headers['user-agent'] && req.headers['user-agent'].includes('socket.io');
    
    if (isFromSocket) {
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      const nuevoMensaje = await Mensaje.create({ 
        user_id,
        message_content,
      });

      return res.status(201).json({ mensaje: 'Mensaje creado con éxito', nuevoMensaje });
    }

    return res.status(201).json({ mensaje: 'Mensaje recibido con éxito desde la interfaz web' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}