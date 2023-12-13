import express, { Router, Request, Response  } from 'express';

import { createmessages, getUserList, getUserIdByUsername } from '../../controllers/chat.controller';

const Routers: Router = express.Router();


Routers.post('/messages', (req: Request, res: Response) => {
  createmessages(req, res);
});

Routers.get("/userchat", (req: Request, res: Response) => {
  getUserList()
})

Routers.get('/getid', (req: Request, res: Response) => {
  getUserIdByUsername(req, res)
})

export default Routers;