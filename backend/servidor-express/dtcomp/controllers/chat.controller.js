"use strict";
/*import { Request, Response } from 'express';
import { Connection } from 'mysql2';




export const chat = (): void => {
   const messages = req.body.message;
  
  //
    const sql = 'INSERT INTO messages (user_id, message_content) VALUES (?, ?)';
    db.query(sql, [messages, 'Servidor'], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos', err);
            res.status(500).json({ messages: 'Error al guardar mensaje' });
        } else {
            console.log('Mensaje guardado en la base de datos');
            res.status(200).json({ messages: 'Mensaje guardado exitosamente' });
        }
    });//
    const pool = require('./pool');

    const obtenerMensajesConUsuarios = async () => {
       
        const query = 'SELECT mensajes.*, users.username FROM mensajes INNER JOIN users ON mensajes.user_id = users.id'; // Ajusta según tu esquema de base de datos

        try {
            const result = await pool.query(query);
            return result;
        } catch (error) {
            throw error;
        }
    };

    const crearMensaje = async (body, from, user_id) => {
         const messages = req.body.message;
        const query = 'INSERT INTO mensajes (message_content, user_id) VALUES (?, ?)';

        try {
            const result = await pool.query(query, [body, user_id]);
            const nuevoMensaje = {
                id: result.insertId,
                message_content: body,
                user_id,
                username: from,
            };

            return nuevoMensaje;
        } catch (error) {
            throw error;
        }
    };

    module.exports = {
        obtenerMensajesConUsuarios,
        crearMensaje,
    };
    
}
*/ 