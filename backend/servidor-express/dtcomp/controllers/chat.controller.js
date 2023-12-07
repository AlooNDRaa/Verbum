"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chat_model_1 = __importDefault(require("../models/chat.model"));
const user_chat_model_1 = __importDefault(require("../models/user.chat.model"));
const mensajesController = {
    createMensaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtener datos del cuerpo de la solicitud
                const { message_content, user_id, id } = req.body;
                // Verificar si el usuario existe
                const user = yield user_chat_model_1.default.findByPk(user_id);
                if (!user) {
                    return res.status(404).json({ error: 'Usuario no encontrado' });
                }
                // Crear un nuevo mensaje y asociarlo con el usuario
                const nuevoMensaje = yield chat_model_1.default.create({
                    id,
                    user_id,
                    message_content,
                });
                // Enviar respuesta exitosa
                return res.status(201).json({ mensaje: 'Mensaje creado con éxito', nuevoMensaje });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error en el servidor' });
            }
        });
    },
};
exports.default = mensajesController;
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
