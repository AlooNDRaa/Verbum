import { Request, Response } from 'express';
import * as gamemodel from '../../models/gamemodel/game.model';

export const getGameUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await gamemodel.getGameUsers();
    const gameUsers = users.map((user) => user.username);
    res.json(gameUsers);
  } catch (err) {
    console.error('Error al obtener usuarios del juego: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

 
export const saveMovimientos = async (req: Request, res: Response): Promise<void> => {
  try {
    const { board, turn } = req.body;

    // Guarda los movimientos en la base de datos utilizando el modelo correspondiente
    await gamemodel.saveMovimientos(board, turn);

    res.status(200).json({ message: 'Movimientos guardados en la base de datos' });
  } catch (err) {
    console.error('Error al guardar los movimientos en la base de datos: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};