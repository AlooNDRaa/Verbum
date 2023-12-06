import express, { Router, Request, Response  } from 'express';

import { createMensaje } from '../../models/chat.model';

const router: Router = express.Router();


router.post('/mensajes', (req: Request, res: Response) => {
  createMensaje(req, res);
});


export default router;