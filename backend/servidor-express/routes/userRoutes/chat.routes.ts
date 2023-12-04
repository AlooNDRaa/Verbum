import express from 'express';
import Mensajes from '../../controllers/chat.controller';

const router = express.Router();


router.post('/mensajes', Mensajes.createMensaje);

export default router;