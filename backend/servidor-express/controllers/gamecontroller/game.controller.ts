import { Request, Response } from 'express';
import { DbService } from '../../dtservice/dt.service';
import * as UserModel from '../../models/usermodel/user.model';

export const getGameUsers = async (dbService: DbService, req: Request, res: Response): Promise<void> => {
    try {
      const users = await UserModel.getAllUsers(dbService);
      
      const gameUsers = users.map((user) => user.username);
      
      res.json(gameUsers);
    } catch (err) {
      console.error('Error al obtener usuarios del juego: ', err);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };