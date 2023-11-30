import { Request, Response } from 'express';
import { createUserModel } from '../../models/user.model';

const userModel = createUserModel();

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userModel.getAllUsers();
        res.send(users);
    } catch (err) {
        console.error('Error al obtener usuarios', err);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        await userModel.createUser(userData);
        console.log('Registro exitoso');
        res.status(200).json({ message: 'Registro exitoso' });
    } catch (err) {
        console.error('Error al guardar en la base de datos', err);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const message = await userModel.loginUser(email, password);
        res.status(200).json({ message });
    } catch (err) {
        console.error('Error al iniciar sesión', err);
        res.status(401).json({ message: err });
    }
};
