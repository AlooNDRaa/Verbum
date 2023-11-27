/*import { Request, Response } from 'express';
import { Connection } from 'mysql2';
import Mensaje from  '../models/chat.model';

export const chat = (db: Connection, req: Request, res: Response): void => {
    const messages = req.body.message;
  
    const sql = 'INSERT INTO messages (user_id, message_content) VALUES (?, ?)';
    db.query(sql, [userId, messages], (err: Error, result: Mensaje[]) => {
        if (err) {
            console.error('Error al guardar en la base de datos', err);
            res.status(500).json({ messages: 'Error al guardar mensaje' });
        } else {
            console.log('Mensaje guardado en la base de datos');
            res.status(200).json({ messages: 'Mensaje guardado exitosamente' });
        }
    }); 

}
*/