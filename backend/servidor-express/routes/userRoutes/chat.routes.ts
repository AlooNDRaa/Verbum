import express, { Router, Request, Response  } from 'express';

import { createmessages, getUserList } from '../../controllers/chat.controller';

const setupChatRoutes: Router = express.Router();


setupChatRoutes.post('/messages', (req: Request, res: Response) => {
  createmessages(req, res);
});

setupChatRoutes.get("/userchat", (req: Request, res: Response) => {
  getUserList()
})

export default setupChatRoutes;