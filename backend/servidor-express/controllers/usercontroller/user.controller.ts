import { Request, Response } from 'express';
<<<<<<< HEAD
import * as UserModel from '../../models/usermodel/user.model';
import { DbService } from '../../dtservice/dt.service';
=======
import { Connection } from 'mysql2';
import  {User}  from '../../models/user.model';
>>>>>>> 9eb18872ecdc0b33e62082f566738e96a598cb3b

export const getAllUsers = async (dbService: DbService, req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.getAllUsers(dbService);
    res.send(users);
  } catch (err) {
    console.error('Error al obtener usuarios: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const createUser = async (dbService: DbService, req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    await UserModel.createUser(dbService, username, email, password);
    console.log('Registro exitoso');
    res.status(200).json({ message: 'Registro exitoso' });
  } catch (err) {
    console.error('Error al guardar en la base de datos', err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

export const loginUser = async (dbService: DbService, req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.loginUser(dbService, email, password);

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
