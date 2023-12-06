import express, { Router } from 'express';
import { Request, Response } from 'express';
import {createMensaje} from '../../controllers/chat.controller';

const router: Router = express.Router();


router.post('/mensajes', (req: Request, res: Response) => {
 createMensaje(req, res);
});


export default router;