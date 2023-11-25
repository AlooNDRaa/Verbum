import { Request, Response } from 'express';
import { Connection } from 'mysql2';
import { User } from '../../models/user.model';


export const getAllUsers = (db: Connection, req: Request, res: Response): void => {
    const sql: string = 'SELECT * FROM users';
    db.query(sql, (err: Error, results: User[]) => {
        if (err) throw err;
        res.send(results);
    });
};

export const createUser = (db: Connection, req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos', err);
            res.status(500).json({ message: 'Error al registrar usuario' });
        } else {
            console.log('Registro exitoso');
            res.status(200).json({ message: 'Registro exitoso' });
        }
    });
};

export const loginUser = (db: Connection, req: Request, res: Response) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';

    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta: ' + err.message);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }

        const users: User[] = results as User[]; 

        if (users.length > 0) {
            const user = users[0];
            if (user.password === password) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        } else {
            res.status(401).json({ message: 'Usuario no encontrado' });
        }
    });
};