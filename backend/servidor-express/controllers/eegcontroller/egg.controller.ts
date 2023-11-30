import { Request, Response } from 'express';
import { DbService } from '../../dtservice/dt.service';
import * as EggModel from '../../models/egmodel/egg.model';

export const getThePassword = async (dbService: DbService, req: Request, res: Response): Promise<void> => {
  try {
    const easterEggs = await EggModel.getThePassword(dbService);
    res.send(easterEggs);
  } catch (err) {
    console.error('Error al obtener la contraseña de Pascua: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
