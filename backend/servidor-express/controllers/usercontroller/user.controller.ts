import { Request, Response } from 'express';
import { Connection } from 'mysql2';
import * as UserModel from '../../models/usermodel/user.model';

export const getAllUsers = async (db: Connection, req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.getAllUsers(db);
    res.send(users);
  } catch (err) {
    console.error('Error al obtener usuarios: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const createUser = async (db: Connection, req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    await UserModel.createUser(db, username, email, password);
    console.log('Registro exitoso');
    res.status(200).json({ message: 'Registro exitoso' });
  } catch (err) {
    console.error('Error al guardar en la base de datos', err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

export const loginUser = async (db: Connection, req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.loginUser(db, email, password);

    if (user) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ message: 'Usuario no encontrado o contraseña incorrecta' });
    }
  } catch (err) {
    console.error('Error en la consulta: ' + err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
