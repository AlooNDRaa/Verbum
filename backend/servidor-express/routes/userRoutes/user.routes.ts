import express, { Router, Request, Response } from 'express';
import { Connection } from 'mysql2';
import { createUser, getAllUsers, loginUser, SecretPassword } from '../../controllers/usercontroller/user.controller';

const router: Router = Router();

export const setupUserRoutes = (db: Connection): Router => {
    router.use(express.json());

    router.get('/user', (req: Request, res: Response): void => getAllUsers(db, req, res));
    router.post('/', (req: Request, res: Response): void => createUser(db, req, res));
    router.post('/login', (req: Request, res: Response): void => loginUser(db, req, res));
    router.get('/secretpass', (req: Request, res: Response): void => SecretPassword(db, req, res));

    return router;
};