import { Request, Response } from 'express';
import Mensaje from '../models/chat.model';
import User from '../models/user.chat.model';

interface CreateMensajeRequest {
  message_content: string;
  user_id: number;
  id: number;
  createdAt: Date,
  updatedAt: Date
}

export const createMensaje = async (req: Request, res: Response) => {
  try {
    const { message_content, user_id, id, createdAt, updatedAt }: CreateMensajeRequest = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const nuevoMensaje = await Mensaje.create({
      id,
      user_id,
      message_content,
      createdAt,
      updatedAt
    });

    return res.status(201).json({ mensaje: 'Mensaje creado con éxito', nuevoMensaje });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}