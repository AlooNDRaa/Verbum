import express, { Router, Request, Response  } from 'express';

import { createmessages } from '../../controllers/chat.controller';

const setupChatRoutes: Router = express.Router();


setupChatRoutes.post('/messages', (req: Request, res: Response) => {
  createmessages(req, res);
});


export default setupChatRoutes;