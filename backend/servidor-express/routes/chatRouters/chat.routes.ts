import express from 'express';
import mensajesController from '../../controllers/chat.controller';

const router = express.Router();

// Ruta para crear un nuevo mensaje
router.post('/mensajes', mensajesController.createMensaje);

export default router;
