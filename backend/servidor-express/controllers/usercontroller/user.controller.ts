import { Request, Response } from 'express';
import * as UserModel from '../../models/usermodel/user.model';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error('Error al obtener usuarios: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    await UserModel.createUser(username, email, password);
    console.log('Registro exitoso');
    res.status(200).json({ message: 'Registro exitoso' });
  } catch (err) {
    console.error('Error al guardar en la base de datos', err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const result = await UserModel.loginUser(email, password);

    if (result[0].length > 0) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ message: 'Usuario no encontrado o contraseña incorrecta' });
    }
  } catch (err) {
    console.error('Error en la consulta: ' + err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
