import express, { Router, Request, Response } from 'express';
import { Connection } from 'mysql2';
import { DbService } from '../../dtservice/dt.service';
import { createUser, getAllUsers, loginUser } from '../../controllers/usercontroller/user.controller';

const router: Router = express.Router();

declare global {
  namespace Express {
    interface Request {
      db: Connection;
    }
  }
}

export const setupUserRoutes = (db: Connection): Router => {
     const dbService = new DbService(db);
    router.use(express.json());

    router.get('/user', (req: Request, res: Response) => getAllUsers(dbService, req, res));
    router.post('/', (req: Request, res: Response) => createUser(dbService, req, res));
    router.post('/login', (req: Request, res: Response) => loginUser(dbService, req, res));

    return router;
};
